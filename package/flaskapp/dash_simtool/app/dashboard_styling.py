# -*- coding: utf-8 -*-
import os
import pandas as pd
import numpy as np

SIDEBAR_HIDE_OVERLAP = 0

NAVBAR_STYLE = {
    'height': '7vh',
    'background-image': "url('/static/imgs/header.png')",
    'background-repeat': "no-repeat",
    "background-position": "right top",
    'color': '#4f4f4f',
    'fixed': 'top',
}

NAVBAR_STYLE['background-size'] = "100vw " + NAVBAR_STYLE['height']

CONTENT_STYLE_SIDEBAR_HIDDEN = {
    "marginLeft": "5rem",
    "marginTop": NAVBAR_STYLE['height'],
}

SIDEBAR_STYLE = {
    "position": "fixed",
    "top": NAVBAR_STYLE['height'],
    "left": 0,
    "bottom": 0,
    "width": "12rem",
    "padding": "1rem 1rem",
    "backgroundColor": "#8c8c8c",
}

SIDEBAR_STYLE_HIDDEN = {
    "position": "fixed",
    "top": NAVBAR_STYLE['height'],
    "left": "-"+str(int(SIDEBAR_STYLE['width'].split('rem')[0])-SIDEBAR_HIDE_OVERLAP)+'rem',
    "bottom": 0,
    "width": "12rem",
    "padding": "2rem 1rem",
    "backgroundColor": "#ffe600",
}

CONTENT_STYLE = {
    "marginLeft": str(int(SIDEBAR_STYLE['width'].split('rem')[0])+SIDEBAR_HIDE_OVERLAP)+'rem',
    "marginRight": "2rem",
    "marginTop": NAVBAR_STYLE['height'],
    "background-color": "#000000"
}

TOGGLE_BUTTON = {
    'marginLeft': '9rem',
    "backgroundColor": "#ebc700",
}

LEGEND_BUTTON = {
    "position": "absolute",
    "margin": "auto",
    "right": "1vw",
    "top": str(int(NAVBAR_STYLE['height'].split('vh')[0])+0.5)+'vh',
    "width": "2rem",
    "height": "2rem",
    "border-radius": "15px",
    "backgroundColor": "#ebc700",
}
LEGEND = {
    "position": "absolute",
    "right": "0.4rem",
    "top": "4.8rem",

    "width": "40rem",
    "border": "2px solid",
    # "border-radius": "15px",
    "border-color": "#ffe600",
    "backgroundColor": "#ffe600",
}
LEGEND_HIDDEN = {
    "position": "absolute",
    "right": "0vw",
    "top": "5rem",
    "width": "30vw",
    "border": "2px",
    "backgroundColor": "#ffe600",
    "visibility": "hidden"
}

LEGEND_IMAGE = {
    "width": "100%",
}