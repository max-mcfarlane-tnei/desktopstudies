let palette = {"400kV":"#0000e6",
  "132kV":"#00cbff",
  "33kV":"#00ff00",
  "11kV":"#996633",
  "LV":"#ff3ae8",
  "0V":"#d3d3d3",
  "background-color": "#000000"}

let option = "5"
let scenario = "1"

let line_palette_style = {'width': 4}

let live_dead = false
let highlight_undefined = true

let coord_display = false

let modal_x_offset = 20
let modal_y_offset = 20
let modal_timeout = 5

let dataview_round = 3

let case_network = "chapelcross"

let background = undefined
let network = undefined
let dict_components = undefined
let steps = []

var room = undefined
var username = undefined
var entity = undefined

var action = undefined

var page = undefined

const networks_undrawn = {
    "chapelcross33kv": undefined,
    "chapelcross132kv": undefined,
    "gretna132kv": undefined,
    "gretna400kv": undefined,
    "chapelcrossgretna1": undefined,
    "chapelcrossgretna2": undefined,
    "ewehillgretna": undefined,
    "stevenscroft33kv": undefined,
    "minsca33kv": undefined,
    "ewehillwindfarm1": undefined,
    "ewehillwindfarm2": undefined,
}

var socket = io();
let current_step = 0  // initial simulation status


//  var x = document.getElementById('myDiv').clientWidth;
var x_max = window.innerWidth;
// var y = document.getElementById('myDiv').clientHeight;
var y_max = window.innerHeight;

let draw = SVG('#drawing').size(x_max, y_max)

var x_scaling = x_max/1150
var y_scaling = y_max/1050
//
var font_size = 14 *  Math.min(x_scaling, y_scaling)

