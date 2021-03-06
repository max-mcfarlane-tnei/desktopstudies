//1550 x 1160 in mm
//scale of 1000 x 1000, readjust with math...
networks_undrawn["chapelcrossgretna2"]={
    lines:{
    "CHAP1-_R1-_1": StraightLine([215,555],"right",130,"132kV"),
    "CHAP1-_M1-_1": StraightLine([215,740],"right",130,"132kV"),
    "206 204_2": StraightLine([250,555],"down",185, "132kV"),
    "CHAP1-_M1-_1#1": StraightLine([250,690],"down",50, "132kV"),
    "205 A_2": StraightLine([290,650],"left",40,"132kV"),
    "205 B_2": StraightLine([290,650],"up",135,"132kV"),
    "205 203_2": StraightLine([290,460],"down",55,"132kV"),
    "203 203 A_2": StraightLine([290,460],"up",200,"132kV"),
    "203 203 B_2": StraightLine([290,260],"right",430,"132kV"),
    "203 203 C_2": StraightLine([720,260],"down",195,"132kV"),
    "203 205_2": StraightLine([720,510],"up",55,"132kV"),
    "GRNA1-#2": StraightLine([720,510],"down",65,"132kV"),

    "GRNA1-#0": StraightLine([720,575],"down",75,"132kV"),
    "GRNA1-#1": StraightLine([785,650],"left",130,"132kV"),

    },
    busbars:{
        "CHAP1-_R1-_1": StraightLine([215,555],"right",130,"132kV"),
        "CHAP1-_M1-_2": StraightLine([215,740],"right",130,"132kV"),
            "GRNA1-#1": StraightLine([785,650],"left",130,"132kV"),

    },

    breakers:{
        "1005": new Breaker("205 B_2",1),
        "205": new Breaker("GRNA1-#2",0),

    },

    labels:{
        1: new Text("GRNA1-#1", ["GRNA1"], [0,30]),
        2: new Text("206 204_2", ["CHAP1"], [80,0]),

        3: new Text("CHAP1-_M1-_1", ["M1"], [-80,0]),
        4: new Text("CHAP1-_R1-_1", ["R1"], [-80,0]),

        5: new Text("203 203 B_2", ["CHAPELCROSS - GRETNA 2"], [0,-170], 25),

    },

    tx:{
    },

    isolators:{
        "206": new Isolator("206 204_2",0.25,"closed"),
        "204": new Isolator("CHAP1-_M1-_1#1",0,"open"),
        "1003": new Isolator("205 203_2",0,"closed"),
        "203": new Isolator("203 203 C_2",1,"closed"),
        " 204": new Isolator("GRNA1-#2",0.8,"closed"),

    },

    dataViews:{
        "CHAP2-_GRNA1#": new DataView("205 203_2",[-90,-20], ["lines_active_power","lines_reactive_power","lines_current"]),
        "CHAP2-_GRNA1": new DataView("GRNA1-#0",[40,-40], ["lines_active_power","lines_reactive_power","lines_current"]),


        "GRNA1-#0": new DataView("GRNA1-#1",[-90,-20], ['busbars_voltage']),
        "CHAP1-_R1-_1": new DataView("CHAP1-_R1-_1", [-90,-20], ["busbars_voltage"]),
        "CHAP1-": new DataView("CHAP1-_M1-_1",[-90,20], ["busbars_voltage"]),
    },

    SGTs:{

    },
}