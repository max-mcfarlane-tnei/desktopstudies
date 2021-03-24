from package.flaskapp.dash_simtool.app.micromethods import hex_to_rgb

import dash_core_components as dcc
import dash_html_components as html
import dash_bootstrap_components as dbc
import dash_daq as daq
from dash_canvas import DashCanvas

import plotly.graph_objs as go

import numpy as np
from datetime import datetime, date, timedelta

HEIGHT = 300


def _config_dropdowns():
    # From hour config
    _from_hour_id = 'from-HH-dropdown'
    _from_hour_options = [{'label': "0{}".format(_hh) if _hh < 10 else "{}".format(_hh),
                           'value': "0{}".format(_hh) if _hh < 10 else "{}".format(_hh)}
                          for _hh in range(0, 24)]
    _from_hour_placeholder = 'HH'
    _from_hour_value = '16'

    # From minute config
    _from_minute_id = 'from-MM-dropdown'
    _from_minute_options = [{'label': "0{}".format(_mm) if _mm < 10 else "{}".format(_mm),
                             'value': "0{}".format(_mm) if _mm < 10 else "{}".format(_mm)}
                            for _mm in range(0, 31, 30)]
    _from_minute_placeholder = 'MM'
    _from_minute_value = '00'

    # To hour config
    _to_hour_id = 'to-HH-dropdown'
    _to_hour_options = _from_hour_options
    _to_hour_placeholder = 'HH'
    _to_hour_value = '19'

    # To minute config
    _to_minute_id = 'to-MM-dropdown'
    _to_minute_options = _from_minute_options
    _to_minute_placeholder = 'MM'
    _to_minute_value = '30'

    return _from_hour_id, _from_hour_options, _from_hour_placeholder, _from_hour_value, \
           _from_minute_id, _from_minute_options, _from_minute_placeholder, _from_minute_value, \
           _to_hour_id, _to_hour_options, _to_hour_placeholder, _to_hour_value, \
           _to_minute_id, _to_minute_options, _to_minute_placeholder, _to_minute_value


def _init_dropdown(id: str, options: list, placeholder: str, value: str):
    return dcc.Dropdown(
        id=id,
        options=options,
        placeholder=placeholder,
        value=value,
        style={
            'width': '100%',
            'textAlign': 'left'
        }
    )


def init_line(ser_line, name, colour, type='line', max_min=[0, 1], **options):
    if type == 'line':
        line_dict = dict(
                shape="spline",
                smoothing=2,
                width=options['width'] if 'width' in options.keys() else 2,
                color=colour
            )
        line_dict.update(dict(dash=options['dash'])) if 'dash' in options.keys() else None
        return dict( \
            type='scatter',
            mode=options['mode'] if 'mode' in options.keys() else 'lines+markers',
            name=name,
            x=ser_line.index,
            y=ser_line,
            line=line_dict,
            marker=dict(symbol='diamond-open')
        )
    elif type == 'window':
            return dict( \
            type='scatter',
            mode='lines',
            name=name,
            x=[ser_line.index[0]]*2+[ser_line.index[-1]]*2,
            y=[max_min[1], max_min[0]*1.3, max_min[0]*1.3, max_min[1]],
            line=dict(
                shape="line",
                smoothing=0,
                width=options['width'] if 'width' in options.keys() else 1,
                color="rgba(1, 1, 1, 0)"
            ),
            fill='toself',
            fillcolor=f"rgba{(*hex_to_rgb(colour), 0.1)}",
            hoverinfo="skip",
            showlegend=False
        )
    elif type == 'region':
        return dict( \
            type='scatter',
            mode='lines',
            name=name,
            x=list(ser_line.index) + list(ser_line.index[::-1]),
            y=ser_line[list(filter(lambda x: 'max' in x, ser_line.columns))[0]].values.tolist() + \
              ser_line[list(filter(lambda x: 'min' in x, ser_line.columns))[0]].values.tolist()[::-1],
            line=dict(
                shape="spline",
                smoothing=2,
                width=options['width'] if 'width' in options.keys() else 1,
                color="rgba(1, 1, 1, 0)"
            ),
            fill='toself',
            fillcolor=f"rgba{(*hex_to_rgb(colour), 0.25)}",
            hoverinfo="skip",
            showlegend=False
        )


def _calc_calendar_days(_d1: datetime.date, _d2: datetime.date):
    _delta = _d2 - _d1

    dates_in_year = [_d1 + timedelta(_i) for _i in
                     range(_delta.days + 1)]  # gives me a list with datetimes for each day a year
    weekdays_in_year = [_i.weekday() for _i in
                        dates_in_year]  # gives [0,1,2,3,4,5,6,0,1,2,3,4,5,6,…] (ticktext in xaxis dict translates this to weekdays
    weeknumber_of_dates = [_i.strftime("%G W%V")[2:] for _i in
                           dates_in_year]  # gives [1,1,1,1,1,1,1,2,2,2,2,2,2,2,…] name is self-explanatory

    return dates_in_year, weekdays_in_year, weeknumber_of_dates


def init_calendar(_d1=date(2020, 1, 1), _d2=date(2020, 12, 31), _z=[]):
    _dates_in_year, _weekdays_in_year, _weeknumber_of_dates = _calc_calendar_days(_d1, _d2)

    if len(_z) == 0:
        _z = np.append(np.concatenate([np.linspace(0, 3, 4)] * int(len(_dates_in_year) / 4)), [0, 1])
        _colorscale = [[0, '#6666ff'], [1, '#6666ff']]
    else:
        _colorscale = [[0, '#d9d9d9'], [0.5, '#4d9900'], [1, '#800000']]

    _text = [str(i) for i in _dates_in_year]

    _data = [
        go.Heatmap(
            x=_weeknumber_of_dates,
            y=_weekdays_in_year,
            z=_z,
            text=_text,
            hoverinfo="text",
            xgap=3,  # this
            ygap=3,  # and this is used to make the grid-like apperance
            showscale=False,
            colorscale=_colorscale
        )
    ]
    _layout = go.Layout(
        title='',
        autosize=True,
        height=HEIGHT,
        width=600,
        yaxis=dict(
            showline=False, showgrid=False, zeroline=False,
            tickmode="array",
            ticktext=["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            tickvals=[0, 1, 2, 3, 4, 5, 6],
        ),
        xaxis=dict(
            showline=False, showgrid=False, zeroline=False,
        ),
        font={'size': 14, 'color': '#9e9e9e'},
        plot_bgcolor='#fff',
        margin=dict(t=10, l=40, r=40, b=40),
    )

    dict_fig = {
        'data': _data,
        'layout': _layout
    }

    _fig = go.Figure(data=dict_fig['data'], layout=dict_fig['layout'])

    div = html.Div([dbc.Row([html.H4('Event History')], style={'marginLeft': 5}),
                    dcc.Graph(id='heatmap-cal-graph', figure=_fig,
                              config={
                                  'displayModeBar': False,
                              },
                              )], style={'width': '50%', 'display': 'block'},
                   id='heatmap-cal-div')

    return div, dict_fig


def _init_upload_card(id):
    return dcc.Upload(
        id=id,
        children=html.Div([
            'Drag and Drop or ',
            html.A('Select Files')
        ]),
        style={
            # 'width': '90%',
            'height': '60px',
            'lineHeight': '60px',
            'borderWidth': '1px',
            'borderStyle': 'dashed',
            'borderRadius': '5px',
            'textAlign': 'center',
            'margin': '10px'
        },
        # Allow multiple files to be uploaded
        multiple=True
    )


def init_graph_layout():
    return dict(
        autosize=False,
        automargin=False,
        height=HEIGHT,
        margin=dict(
            l=30,
            r=10,
            b=0,
            t=30
        ),
        hovermode="closest",
        plot_bgcolor="#FFFFFF",
        paper_bgcolor="#FFFFFF",
        # legend=dict(font=dict(size=10), orientation='h'),
        title='template',
        legend={
            'xanchor': "center",
            'yanchor': "top",
            'y': -0.23,
            'x': 0.2,
            'orientation': 'h'
        }
    )


def _init_switch():
    _switch = dbc.Row([
        dbc.Col([html.H6('Single date')]),
        dbc.Col([daq.ToggleSwitch(id='my-toggle-switch', value=False)]),
        dbc.Col([html.H6('Date range')]),
    ])


def _init_control_module():
    # ----------------
    # Control cards
    # ----------------

    # Contracted capacity float input
    _contracted_capacity_card = dbc.Card([html.H5('Contracted Capacity'),
                                          html.Br(),
                                          dcc.Input(
                                              id="d_cap", type="number",
                                              debounce=True,
                                              placeholder="in kW",
                                          )], body=True, style={'height': '100%'})

    # datetime upload widget
    _upload_datetimes_card = dbc.Card([html.H5('Upload Date Times Input'),
                                       _init_upload_card('upload-datetime-data')
                                       ], body=True)

    # data upload widget
    _upload_input_card = dbc.Card([html.H5('Upload Input'),
                                   _init_upload_card('upload-data'),
                                   ], body=True)

    # control module
    control_module = dbc.Row([
        dbc.Col([_contracted_capacity_card]),
        dbc.Col([_upload_datetimes_card]),
        dbc.Col([_upload_input_card]),

    ], )

    return control_module


def compile_body(CONTENT_STYLE):
    # # control module
    # _control_module = _init_control_module()
    #
    # # Heatcalendar
    # _calendar_div, _dict_cal = init_calendar()
    #
    # _heatcalendar = dbc.Col([dbc.Card([_calendar_div], body=True, id='heat-calendar-card')])
    #
    # # graphical output
    # _graph_output = dbc.Card([dbc.Col([html.Div([dbc.Row([html.H4('Performance Assessment')], style={'marginLeft': 5}),
    #                                              dcc.Graph(id='individual_graph')],
    #                                             className='pretty_container eight columns', )])],
    #                          body=True)
    #
    # _interactive_data_compontents = dbc.Collapse(dbc.CardDeck([_heatcalendar, _graph_output]),
    #                                              is_open=False, id='collapse')


    # compile body
    _body = dbc.Col([html.Div(id='test')])

    return html.Div(id='page_content', style=CONTENT_STYLE, children=[_body])


def hidden_divs():
    _login = html.Div(
        children=[
            html.Div(id='div0'),
        ],
    )

    _user = html.Div(
        children=[
            html.Div(id='div1'),
        ],
    )

    _redirect = html.Div(id="hidden_div_for_redirect_callback")

    return [_login, _user, _redirect]


def navbar_controls():
    row = html.Div(
        [
            dbc.Nav(
                [
                    dbc.NavLink("Home", href="/", active=True, external_link=True),
                    dbc.NavLink("SLDs", href="/SLDs", external_link=True),
                    dbc.NavLink("Scripts", href="/scripts", external_link=True),
                    dbc.NavLink("About", href="/about", external_link=True),
                ],
                vertical=False,
                pills=True,
            ),

        ]
    )
    return row