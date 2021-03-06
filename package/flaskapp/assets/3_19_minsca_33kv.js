//1550 x 1160 in mm
//scale of 1000 x 1000, readjust with math...
networks_undrawn["minsca33kv"]={
    lines:{
    "MINS3-": StraightLine([265,90],"right",105,"33kV"),
    "MINS3-#0": StraightLine([285,90],"down",30,"33kV"),
    "CHAP3-_MINS3-_1#6": StraightLine([285,150],"up",30,"33kV"),
    "CHAP3-_MINS3-_1#5": StraightLine([255,150],"right",30,"33kV"),
    "CHAP3-_MINS3-_1#4": StraightLine([255,150],"up",80,"33kV"),

    "MINS3-#1": StraightLine([345,90],"down",30,"33kV"),
//    "761 CUSTOMER": StraightLine([345,120],"down",85,"33kV"),
    "MINS3-_MINSC": StraightLine([345,120],"down",85,"33kV"),
        "POC": StraightLine([320,160],"right",50,"",true),
    "MINS0G#0": StraightLine([345,205],"down",55,"33kV"),

    "MINS0G#1": StraightLine([365,260],"down",30,"33kV"),
    "MINS0G#86": StraightLine([365,290],"down",80,"33kV"),

    "MINS0G#2": StraightLine([480,260],"down",30,"33kV"),
    "MINS0G#87": StraightLine([480,290],"down",80,"33kV"),

    "MINS0G#3": StraightLine([730,260],"down",30,"33kV"),
    "MINS0G#110": StraightLine([730,290],"down",85,"33kV"),
    "MINS0G#120": StraightLine([730,375],"down",10,"LV"),

    "MINS0G#4": StraightLine([480,370],"right",45,"33kV"),
    "MINS0G#5": StraightLine([505,405],"right",20,"33kV"),
    "MINS0G#6": StraightLine([525,360],"down",60,"33kV"),
    "MINS0G#7": StraightLine([525,390],"right",40,"33kV"),
    "MINS0G#8": StraightLine([565,390],"right",65,"LV"),
    "WTG09 OUTLINE A": new Line(515,355,680,355,"0V",true),
    "WTG09 OUTLINE B": new Line(680,355,680,425,"0V",true),
    "WTG09 OUTLINE C": new Line(515,425,680,425,"0V",true),
    "WTG09 OUTLINE D": new Line(515,355,515,425,"0V",true),

    "MINS0G#9": StraightLine([505,447],"right",20,"33kV"),
    "MINS0G#10": StraightLine([505,482],"right",20,"33kV"),
    "MINS0G#11": StraightLine([525,437],"down",60,"33kV"),
    "MINS0G#12": StraightLine([525,467],"right",40,"33kV"),
    "MINS0G#13": StraightLine([565,467],"right",65,"LV"),
    "WTG11 OUTLINE A": new Line(515,432,680,432,"0V",true),
    "WTG11 OUTLINE B": new Line(680,432,680,502,"0V",true),
    "WTG11 OUTLINE C": new Line(515,502,680,502,"0V",true),
    "WTG11 OUTLINE D": new Line(515,432,515,502,"0V",true),

    "MINS0G#14": StraightLine([505,527],"right",20,"33kV"),
    "MINS0G#15": StraightLine([525,517],"down",60,"33kV"),
    "MINS0G#16": StraightLine([525,547],"right",40,"33kV"),
    "MINS0G#17": StraightLine([565,547],"right",65,"LV"),
    "WTG10 OUTLINE A": new Line(515,512,680,512,"0V",true),
    "WTG10 OUTLINE B": new Line(680,512,680,582,"0V",true),
    "WTG10 OUTLINE C": new Line(515,582,680,582,"0V",true),
    "WTG10 OUTLINE D": new Line(515,512,515,582,"0V",true),

    "MINS0G#18": StraightLine([482,604],"right",44,"33kV"),
    "MINS0G#19": StraightLine([505,639],"right",20,"33kV"),
    "MINS0G#20": StraightLine([525,594],"down",60,"33kV"),
    "MINS0G#21": StraightLine([525,624],"right",40,"33kV"),
    "MINS0G#22": StraightLine([565,624],"right",65,"LV"),
    "WTG12 OUTLINE A": new Line(515,589,680,589,"0V",true),
    "WTG12 OUTLINE B": new Line(680,589,680,659,"0V",true),
    "WTG12 OUTLINE C": new Line(515,659,680,659,"0V",true),
    "WTG12 OUTLINE D": new Line(515,589,515,659,"0V",true),

    "MINS0G#27": StraightLine([505,681],"right",20,"33kV"),
    "MINS0G#28": StraightLine([505,716],"right",20,"33kV"),
    "MINS0G#29": StraightLine([525,671],"down",60,"33kV"),
    "MINS0G#30": StraightLine([525,701],"right",40,"33kV"),
    "MINS0G#31": StraightLine([565,701],"right",65,"LV"),
    "WTG14 OUTLINE A": new Line(515,666,680,666,"0V",true),
    "WTG14 OUTLINE B": new Line(680,666,680,736,"0V",true),
    "WTG14 OUTLINE C": new Line(515,736,680,736,"0V",true),
    "WTG14 OUTLINE D": new Line(515,666,515,736,"0V",true),

    "MINS0G#32": StraightLine([505,758],"right",20,"33kV"),
    "MINS0G#33": StraightLine([505,793],"right",20,"33kV"),
    "MINS0G#34": StraightLine([525,748],"down",60,"33kV"),
    "MINS0G#35": StraightLine([525,778],"right",40,"33kV"),
    "MINS0G#36": StraightLine([565,778],"right",65,"LV"),
    "WTG16 OUTLINE A": new Line(515,743,680,743,"0V",true),
    "WTG16 OUTLINE B": new Line(680,743,680,813,"0V",true),
    "WTG16 OUTLINE C": new Line(515,813,680,813,"0V",true),
    "WTG16 OUTLINE D": new Line(515,743,515,813,"0V",true),

    "MINS0G#37": StraightLine([505,835],"right",20,"33kV"),
    "MINS0G#38": StraightLine([505,870],"right",20,"33kV"),
    "MINS0G#39": StraightLine([525,825],"down",60,"33kV"),
    "MINS0G#40": StraightLine([525,855],"right",40,"33kV"),
    "MINS0G#41": StraightLine([565,855],"right",65,"LV"),
    "WTG15 OUTLINE A": new Line(515,820,680,820,"0V",true),
    "WTG15 OUTLINE B": new Line(680,820,680,890,"0V",true),
    "WTG15 OUTLINE C": new Line(515,890,680,890,"0V",true),
    "WTG15 OUTLINE D": new Line(515,820,515,890,"0V",true),

    "MINS0G#23": StraightLine([505,912],"right",20,"33kV"),
    "MINS0G#24": StraightLine([525,902],"down",60,"33kV"),
    "MINS0G#25": StraightLine([525,932],"right",40,"33kV"),
    "MINS0G#26": StraightLine([565,932],"right",65,"LV"),
    "WTG13 OUTLINE A": new Line(515,897,680,897,"0V",true),
    "WTG13 OUTLINE B": new Line(680,897,680,967,"0V",true),
    "WTG13 OUTLINE C": new Line(515,967,680,967,"0V",true),
    "WTG13 OUTLINE D": new Line(515,897,515,967,"0V",true),


    "MINS0G#72": StraightLine([365,370],"left",45,"33kV"),
    "MINS0G#73": StraightLine([340,405],"left",20,"33kV"),
    "MINS0G#74": StraightLine([320,360],"down",57,"33kV"),
    "MINS0G#75": StraightLine([320,390],"left",40,"33kV"),
    "MINS0G#76": StraightLine([285,390],"left",65,"LV"),
    "WTG06 OUTLINE A": new Line(165,355,330,355,"0V",true),
    "WTG06 OUTLINE B": new Line(330,355,330,425,"0V",true),
    "WTG06 OUTLINE C": new Line(165,425,330,425,"0V",true),
    "WTG06 OUTLINE D": new Line(165,425,165,355,"0V",true),
    "MINS0G#77": StraightLine([340,447],"left",20,"33kV"),
    "MINS0G#78": StraightLine([340,482],"left",20,"33kV"),
    "MINS0G#79": StraightLine([320,437],"down",57,"33kV"),
    "MINS0G#80": StraightLine([320,467],"left",40,"33kV"),
    "MINS0G#81": StraightLine([285,467],"left",65,"LV"),
    "WTG07 OUTLINE A": new Line(165,432,330,432,"0V",true),
    "WTG07 OUTLINE B": new Line(330,432,330,502,"0V",true),
    "WTG07 OUTLINE C": new Line(165,502,330,502,"0V",true),
    "WTG07 OUTLINE D": new Line(165,502,165,432,"0V",true),
    "MINS0G#82": StraightLine([340,524],"left",20,"33kV"),
    "MINS0G#83": StraightLine([320,514],"down",57,"33kV"),
    "MINS0G#84": StraightLine([320,544],"left",40,"33kV"),
    "MINS0G#85": StraightLine([285,544],"left",65,"LV"),
    "WTG08 OUTLINE A": new Line(165,509,330,509,"0V",true),
    "WTG08 OUTLINE B": new Line(330,509,330,579,"0V",true),
    "WTG08 OUTLINE C": new Line(165,579,330,579,"0V",true),
    "WTG08 OUTLINE D": new Line(165,579,165,509,"0V",true),
    "MINS0G#67": StraightLine([365,601],"left",45,"33kV"),
    "MINS0G#68": StraightLine([340,636],"left",20,"33kV"),
    "MINS0G#69": StraightLine([320,591],"down",57,"33kV"),
    "MINS0G#70": StraightLine([320,621],"left",40,"33kV"),
    "MINS0G#71": StraightLine([285,621],"left",65,"LV"),
    "WTG05 OUTLINE A": new Line(165,586,330,586,"0V",true),
    "WTG05 OUTLINE B": new Line(330,586,330,656,"0V",true),
    "WTG05 OUTLINE C": new Line(165,656,330,656,"0V",true),
    "WTG05 OUTLINE D": new Line(165,656,165,586,"0V",true),
    "MINS0G#63": StraightLine([340,678],"left",20,"33kV"),
    "MINS0G#64": StraightLine([320,668],"down",57,"33kV"),
    "MINS0G#65": StraightLine([320,698],"left",40,"33kV"),
    "MINS0G#66": StraightLine([285,698],"left",65,"LV"),
    "WTG04 OUTLINE A": new Line(165,663,330,663,"0V",true),
    "WTG04 OUTLINE B": new Line(330,663,330,733,"0V",true),
    "WTG04 OUTLINE C": new Line(165,733,330,733,"0V",true),
    "WTG04 OUTLINE D": new Line(165,733,165,663,"0V",true),
    "MINS0G#51": StraightLine([365,755],"left",45,"33kV"),
    "MINS0G#52": StraightLine([340,790],"left",20,"33kV"),
    "MINS0G#60": StraightLine([320,745],"down",57,"33kV"),
    "MINS0G#61": StraightLine([320,775],"left",40,"33kV"),
    "MINS0G#62": StraightLine([285,775],"left",65,"LV"),
    "WTG03 OUTLINE A": new Line(165,740,330,740,"0V",true),
    "WTG03 OUTLINE B": new Line(330,740,330,810,"0V",true),
    "WTG03 OUTLINE C": new Line(165,810,330,810,"0V",true),
    "WTG03 OUTLINE D": new Line(165,810,165,740,"0V",true),
    "MINS0G#46": StraightLine([340,832],"left",20,"33kV"),
    "MINS0G#47": StraightLine([340,867],"left",20,"33kV"),
    "MINS0G#48": StraightLine([320,822],"down",57,"33kV"),
    "MINS0G#49": StraightLine([320,852],"left",40,"33kV"),
    "MINS0G#50": StraightLine([285,852],"left",65,"LV"),
    "WTG02 OUTLINE A": new Line(165,817,330,817,"0V",true),
    "WTG02 OUTLINE B": new Line(330,817,330,887,"0V",true),
    "WTG02 OUTLINE C": new Line(165,887,330,887,"0V",true),
    "WTG02 OUTLINE D": new Line(165,887,165,817,"0V",true),
    "MINS0G#42": StraightLine([340,909],"left",20,"33kV"),
    "MINS0G#43": StraightLine([320,899],"down",57,"33kV"),
    "MINS0G#44": StraightLine([320,929],"left",40,"33kV"),
    "MINS0G#45": StraightLine([285,929],"left",65,"LV"),
    "WTG01 OUTLINE A": new Line(165,894,330,894,"0V",true),
    "WTG01 OUTLINE B": new Line(330,894,330,964,"0V",true),
    "WTG01 OUTLINE C": new Line(165,964,330,964,"0V",true),
    "WTG01 OUTLINE D": new Line(165,964,165,894,"0V",true),

    "MINS0G#89": new StraightLine([340,403],"down",46,"33kV"),
    "MINS0G#90": new StraightLine([340,480],"down",46,"33kV"),
    "MINS0G#91": new StraightLine([340,634],"down",46,"33kV"),
    "MINS0G#92": new StraightLine([340,788],"down",46,"33kV"),
    "MINS0G#93": new StraightLine([340,865],"down",46,"33kV"),

    "MINS0G#94": new StraightLine([505,868],"down",46,"33kV"),
    "MINS0G#95": new StraightLine([505,791],"down",46,"33kV"),
    "MINS0G#96": new StraightLine([505,714],"down",46,"33kV"),
    "MINS0G#97": new StraightLine([505,637],"down",46,"33kV"),
    "MINS0G#98": new StraightLine([505,637],"down",46,"33kV"),
    "MINS0G#99": new StraightLine([505,481],"down",48,"33kV"),
    "MINS0G#100": new StraightLine([505,403],"down",46,"33kV"),


    "MINS0G#101": new StraightLine([320,390],"right",45,"33kV"),
    "MINS0G#102": new StraightLine([365,388],"down",215,"33kV"),

    "MINS0G#103": StraightLine([320,620],"right",45,"33kV"),
    "MINS0G#104": new StraightLine([365,620],"down",137,"33kV"),

    "MINS0G#105": StraightLine([483,467],"right",45,"33kV"),
    "MINS0G#106": new StraightLine([483,467],"down",137,"33kV"),


    },
    busbars:{
     "MINS0G": StraightLine([325,260],"right",425,"33kV"),
    "MINS3-": StraightLine([265,90],"right",105,"33kV"),

    },
    breakers:{
//        "761 CHAP": new Breaker("761 CHAP A",1),
    "761 MINS WF": new Breaker("MINS3-#1",1, "MINS WF"),
    "761 CHAP": new Breaker("CHAP3-_MINS3-_1#6",1, "CHAP"),
    "761 CUSTOMER": new Breaker("MINS3-_MINSC",1,"CUSTOMER"),

    "CB01": new Breaker("MINS0G#1",1),
    "CB02": new Breaker("MINS0G#2",1),
    "CB04": new Breaker("MINS0G#3",1),

    },

    labels:{
        1: new Text("MINS3-",["Minsca 33kv"],[150,-40], 25),
        2: new Text("MINS3-",["761"],[0,-20]),

    },

    tx:{
        "MINSC-AUX": new Tx("MINS0G#120",1,["AUXILIARY","TRANSFORMER"],"","33kV"),

        "MINSC-_WTG#0": new Tx("MINS0G#7",1,["WTG 09"],"","LV"),
        "MINSC-_WTG#1": new Tx("MINS0G#16",1,["WTG 10"],"","LV"),
        "MINSC-_WTG#2": new Tx("MINS0G#12",1,["WTG 11"],"","LV"),
        "MINSC-_WTG#3": new Tx("MINS0G#21",1,["WTG 12"],"","LV"),
        "MINSC-_WTG#4": new Tx("MINS0G#25",1,["WTG 13"],"","LV"),
        "MINSC-_WTG#5": new Tx("MINS0G#30",1,["WTG 14"],"","LV"),
        "MINSC-_WTG#6": new Tx("MINS0G#40",1,["WTG 15"],"","LV"),
        "MINSC-_WTG#7": new Tx("MINS0G#35",1,["WTG 16"],"","LV"),

        "MINSC-_WTG#8": new Tx("MINS0G#45",0,["WTG 01"],"","33kV"),
        "MINSC-_WTG#9": new Tx("MINS0G#50",0,["WTG 02"],"","33kV"),
        "MINSC-_WTG#10": new Tx("MINS0G#62",0,["WTG 03"],"","33kV"),
        "MINSC-_WTG#11": new Tx("MINS0G#66",0,["WTG 04"],"","33kV"),
        "MINSC-_WTG#12": new Tx("MINS0G#71",0,["WTG 05"],"","33kV"),
        "MINSC-_WTG#13": new Tx("MINS0G#76",0,["WTG 06"],"","33kV"),
        "MINSC-_WTG#14": new Tx("MINS0G#81",0,["WTG 07"],"","33kV"),
        "MINSC-_WTG#15": new Tx("MINS0G#85",0,["WTG 08"],"","33kV"),


    },

    isolators:{
    },

    dataViews:{
        "CHAP3-_MINS3-_1#0": new DataView("MINS3-", [-140,30], [
        "lines_active_power",
        "lines_reactive_power",
        "lines_current"
        ]),
        "MINS0G": new DataView("MINS0G", [140,-20], [
        "busbars_voltage",
        ]),
    },

    SGTs:{

    },

    generators:{
        "WTG_MINS0G#0": new Generator("MINS0G#8",1,""),
        "WTG_MINS0G#1": new Generator("MINS0G#17",1,""),
        "WTG_MINS0G#2": new Generator("MINS0G#13",1,""),
        "WTG_MINS0G#3": new Generator("MINS0G#22",1,""),
        "WTG_MINS0G#4": new Generator("MINS0G#26",1,""),
        "WTG_MINS0G#5": new Generator("MINS0G#31",1,""),
        "WTG_MINS0G#6": new Generator("MINS0G#41",1,""),
        "WTG_MINS0G#7": new Generator("MINS0G#36",1,""),

        "WTG_MINS0G#8": new Generator("MINS0G#45",1,""),
        "WTG_MINS0G#9": new Generator("MINS0G#50",1,""),
        "WTG_MINS0G#10": new Generator("MINS0G#62",1,""),
        "WTG_MINS0G#11": new Generator("MINS0G#66",1,""),
        "WTG_MINS0G#12": new Generator("MINS0G#71",1,""),
        "WTG_MINS0G#13": new Generator("MINS0G#76",1,""),
        "WTG_MINS0G#14": new Generator("MINS0G#81",1,""),
        "WTG_MINS0G#15": new Generator("MINS0G#85",1,""),

    },
    availablePower:{
        "MINS0G_1" : new AvailablePower([500,150]),
    },
    generationInfo:{
        "MINS0G_1": new GenerationInfo([150,250],"Minsca Windfarm (MINSW-1)"),
    },
//    generatorControls:{
//        "MINS0G_1": new GeneratorControl([750,100])
//    },
}