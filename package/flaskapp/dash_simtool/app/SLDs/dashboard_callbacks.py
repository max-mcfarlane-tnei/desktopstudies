import dash
from dash.dependencies import Output, Input
from flask import session

# INT IMPORTS
import package.flaskapp.dash_simtool._config as cf
import package.flaskapp.dash_simtool.app.dashboard_callbacks as shared_clbks
from package.flaskapp import socketio


def _add_network_redraw(dash_app):
    @dash_app.callback([Output("network_menu", "label")],
                       [
                           Input("chapelcross33kv", "n_clicks"),
                           Input("chapelcross132kv", "n_clicks"),
                           Input("gretna132kv", "n_clicks"),
                           Input("gretna400kv", "n_clicks"),
                           Input("chapelcrossgretna1", "n_clicks"),
                           Input("chapelcrossgretna2", "n_clicks"),
                           Input("ewehillgretna", "n_clicks"),
                           Input("stevenscroft33kv", "n_clicks"),
                           Input("minsca33kv", "n_clicks"),
                           Input("ewehillwindfarm1", "n_clicks"),
                           Input("ewehillwindfarm2", "n_clicks"),
                       ],
                       )
    def _draw_network(chx33, chx132, grt132, grt400, chapgret1, chapgret2, ewehillgretna, stev33kV, minsca33kV, ewe1,
                      ewe2):

        # Determine network for drawing
        ctx = dash.callback_context
        triggered_object = ctx.triggered[0]
        if triggered_object['value'] is None:
            session['room'] = session['entity']
            if 'network' not in session:
                network = "chapelcross33kv"
            else:
                network = session['network']
        else:
            network = triggered_object['prop_id'].split('.')[0]

        # store network, sim_step
        session['network'] = network
        sim_step = session['sim_step'] if 'sim_step' in session else cf.start_sim_step
        session['sim_step'] = sim_step

        socketio.emit('check_join_draw', {
            'network': network,
            'sim_step': sim_step,
            'local': True,
            'username': session.get('username'),
            'room': session.get('room')
        })

        return [network]

    return dash_app


def init_callbacks(dash_app):
    dash_app = _add_network_redraw(dash_app)
    dash_app = shared_clbks.add_sim_progress_buttons(dash_app)
    dash_app = shared_clbks.add_legend_button(dash_app)

    return dash_app
