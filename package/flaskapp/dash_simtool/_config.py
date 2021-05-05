# -*- coding: utf-8 -*-

start_sim_step = -1

step_map = {
    k: 'Stage {}'.format(k) if k > 0 else
        'Post-blackout' if k == -1 else
        'Pre-restoration' if k == 0 else
        'Post-restoration' for k in range(-1, 25)
}

entity_network_map = {
    'ESO': 'chapelcross132kv',
    'DNO': 'chapelcross33kv',
    'TO': 'chapelcross132kv',
    'DER': 'ewehill-gretna_132kv',
    'Observer': 'chapelcross33kv',
}

demo = True