# -*- coding: utf-8 -*-
import dash
import dash_core_components as dcc
import dash_html_components as html

# INT IMPORTS
import package.flaskapp.dash_simtool as dash_simtool
import package.flaskapp.dash_simtool._config as cf
import package.flaskapp.dash_simtool.app.dashboard_components as components
import package.flaskapp.dash_simtool.app.dashboard_styling as styling
import package.flaskapp.dash_simtool.app.home.dashboard_callbacks as callbacks

URL_PAGE = dash_simtool.app.URL_HOME
STYLING_SIDEBAR = styling.CONTENT_STYLE_SIDEBAR_HIDDEN


def init_dashboard(server=""):
    """Create a Plotly Dash dashboard."""
    # Define encapsulating dash app
    dash_app = dash.Dash(
        title="Black Start DeskSims",
        server=server,
        url_base_pathname=URL_PAGE,
        external_scripts=dash_simtool.app.external_scripts,
        assets_url_path=dash_simtool.app.assets_path,
        update_title=dash_simtool.app.loading_message,
        external_stylesheets=dash_simtool.app.external_stylesheets,
    )

    # nav bar
    _nav_bar = components.navbar(URL_PAGE)
    #
    # add sidebar
    _sidebar = components.sidebar(URL_PAGE, styling.SIDEBAR_STYLE_HIDDEN)

    #legend
    _legend = components.legend()
    _legendButton = components.legend_button()

    # compile body
    _body = components.compile_body(styling.CONTENT_STYLE if cf.debug else STYLING_SIDEBAR)

    with open(dash_simtool.TEMPLATES_DIR + '/dash_sim_tool.html', "r") as dash_app_html_file:
        dash_app_html = dash_app_html_file.read()
    #     dash_app_html = dash_app_html.replace('{% marginLeft %}', styling.CONTENT_STYLE['marginLeft'])
    #     # dash_app_html = dash_app_html.replace('{% marginTop %}', "0px")
        dash_app.index_string = dash_app_html

    content = [dcc.Location(id="home"),
                                   dcc.Store(id='network_select'),
                                   dcc.Store(id='side_click'),
                                   dcc.Store(id='reset_click'),
                                   dcc.Store(id='sim_state'),
                                   html.Div(id='hidden_div00'),
                                   _nav_bar,
                                   _legend,
                                   _legendButton,
                                   _body,
                                   ]

    content.append(_sidebar) if cf.debug else None

    # compile overall layout
    dash_app.layout = html.Center(content)

    dash_app = callbacks.init_callbacks(dash_app, URL_PAGE)

    return dash_app if server == "" else dash_app.server

