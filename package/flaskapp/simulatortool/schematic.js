// export default
// {
//   // my json here...
// }
// // import DataFrame from "./node_modules/dataframe-js";
// import { Series, DataFrame } from './node_modules/pandas-js';


// var Series = require('./node_modules/pandas-js').Series;
// var DataFrame = require('./node_modules/pandas-js').DataFrame;
  // $(document).ready(function(){
  //   $.ajax({
  //     url:"data/scenario1.csv",
  //     dataType:"text",
  //     success:function(data)
  //     {
  //       var employee_data = data.split(/\r?\n|\r/);
  //       var table_data = '<table class="table table-bordered table-striped">';
  //       for(var count = 0; count<employee_data.length; count++)
  //       {
  //       var cell_data = employee_data[count].split(",");
  //       table_data += '<tr>';
  //       for(var cell_count=0; cell_count<cell_data.length; cell_count++)
  //       {
  //         if(count === 0)
  //         {
  //         table_data += '<th>'+cell_data[cell_count]+'</th>';
  //         }
  //         else
  //         {
  //         table_data += '<td>'+cell_data[cell_count]+'</td>';
  //         }
  //       }
  //       table_data += '</tr>';
  //       }
  //       table_data += '</table>';
  //       $('#employee_table').html(table_data);
  //     }
  //     });
  //   });

  function add_tx(dict_line, position, type, callback){
    var rad = 13
    var overlapFactor = 0.25
    var circleWidth = 1

    var bVertical = false
    var bHorizontal = false
    var circle1, circle2, circle3, circle4
    var line1, line2, line3, line4

    var group = draw.group();

    var dict_tx = {}


    if (dict_line.x1 == dict_line.x2){
      bVertical = true
    }
    if (dict_line.y1 == dict_line.y2){
      bHorizontal = true
    }

    if (bVertical){
      var fromCenter = [dict_line.x1, -rad*(1-overlapFactor)+dict_line.y1+(dict_line.y2-dict_line.y1)*position]
      var toCenter = [dict_line.x1, rad*(1-overlapFactor)+dict_line.y1+(dict_line.y2-dict_line.y1)*position]
    }
    if (bHorizontal){
      var fromCenter = [-rad*(1-overlapFactor)+dict_line.x1+(dict_line.x2-dict_line.x1)*position, dict_line.y1]
      var toCenter = [rad*(1-overlapFactor)+dict_line.x1+(dict_line.x2-dict_line.x1)*position, dict_line.y1]
    }

    circle1 = draw.circle(2*rad).center(fromCenter[0], fromCenter[1])
    circle2 = draw.circle(2*rad).center(toCenter[0], toCenter[1])
    circle3 = draw.circle(2*rad).center(fromCenter[0], fromCenter[1])
    circle4 = draw.circle(2*rad).center(toCenter[0], toCenter[1])

    circle1.fill('white')
    circle1.stroke({ color: 'black', width: circleWidth, linecap: 'black', linejoin: 'round' })
    circle2.fill('white')
    circle2.stroke({ color: 'black', width: circleWidth, linecap: 'black', linejoin: 'round' })
    circle3.fill('none')
    circle3.stroke({ color: 'black', width: circleWidth, linecap: 'black', linejoin: 'round' })
    circle4.fill('none')
    circle4.stroke({ color: 'black', width: circleWidth, linecap: 'black', linejoin: 'round' })
    
    dict_line.dict_styling.stroke.dasharray = []
    dict_line.dict_styling.stroke.width = circleWidth

    circle1.stroke(dict_line.dict_styling.stroke)
    circle2.stroke(dict_line.dict_styling.stroke)
    circle3.stroke(dict_line.dict_styling.stroke)
    circle4.stroke(dict_line.dict_styling.stroke)
    

    dict_tx.objects = [circle1, circle2, circle3, circle4]
    // alert(dict_tx.objects)

    if (type == 'starDelta' | type == 'deltaStar'){
      
      if (type == 'starDelta' & bVertical){
      starCenter = [fromCenter[0], fromCenter[1]-rad*0.1]
      deltaCenter = [toCenter[0], toCenter[1]+rad*0.3]
      } 
      else if (type == 'deltaStar' & bVertical){
        starCenter = [toCenter[0], toCenter[1]+rad*0.3]
        deltaCenter = [fromCenter[0], fromCenter[1]-rad*0.1]
      } 
      else if (type == 'starDelta' & bHorizontal){
      starCenter = [fromCenter[0]-rad*0.2, fromCenter[1]]
      deltaCenter = [toCenter[0]+rad*0.2, toCenter[1]]
      } 
      else if (type == 'deltaStar' & bHorizontal){
        starCenter = [toCenter[0]+rad*0.2, toCenter[1]]
        deltaCenter = [fromCenter[0]-rad*0.2, fromCenter[1]]
      }

      // STAR SYMBOL
      starCenterX = starCenter[0]
      starCenterY = starCenter[1]
      starLength = rad*0.6
      stemLength = rad*0.4
      starTopY = starCenterY-starLength
      starBottomRightX = starCenterX+0.866*starLength
      starBottomRightY = starCenterY+0.5*starLength
      starBottomLeftX = starCenterX-0.866*starLength
      starBottomLeftY = starCenterY+0.5*starLength
      
      starLine1 = draw.line(starCenterX, starCenterY, 
                starCenterX+stemLength, starCenterY).stroke({ width: 0.5})
      starLine2 = draw.line(starCenterX, starCenterY, 
                starCenterX, starTopY).stroke({ width: 1})
      starLine3 = draw.line(starCenterX, starCenterY, 
                starBottomRightX, starBottomRightY).stroke({ width: 1})
      starLine4 = draw.line(starCenterX, starCenterY, 
                starBottomLeftX, starBottomLeftY).stroke({ width: 1})

      // DELTA SYMBOL
      deltaCenterX = deltaCenter[0]
      deltaCenterY = deltaCenter[1]
      deltaLength = rad*0.6
      deltaTopY = deltaCenterY-deltaLength
      deltaBottomRightX = deltaCenterX+0.866*deltaLength
      deltaBottomRightY = deltaCenterY+0.5*deltaLength
      deltaBottomLeftX = deltaCenterX-0.866*deltaLength
      deltaBottomLeftY = deltaCenterY+0.5*deltaLength

      deltaLine1 = draw.line(deltaCenterX, deltaTopY, 
                deltaBottomRightX, deltaBottomRightY).stroke({ width: 1})
      deltaLine2 = draw.line(deltaBottomRightX, deltaBottomRightY, 
                deltaBottomLeftX, deltaBottomLeftY).stroke({ width: 1})
      deltaLine3 = draw.line(deltaBottomLeftX, deltaBottomLeftY, 
                  deltaCenterX, deltaTopY).stroke({ width: 1})

      dict_tx.objects += [starLine1, starLine2, starLine3, starLine4, deltaLine1, deltaLine2, deltaLine3]

    } 
    
    group.add(starLine1, starLine2, starLine3, starLine4, deltaLine1, deltaLine2, deltaLine3)

    group.add(circle1)
    group.add(circle2)
    group.add(circle3)
    group.add(circle4)

    callback(circle1, circle2, circle3, circle4, group);
  }

  function add_gen(dict_line, position, type, callback){
    var rad = 13;
    var circleWidth = 1;

    var bVertical = false;
    var bHorizontal = false;
    var circle1, circle2, circle3, circle4;
    var line1, line2, line3, line4;

    var dict_gen = {}

    if (dict_line.x1 == dict_line.x2){
      bVertical = true;
      var center = [dict_line.x1, dict_line.y1+(dict_line.y2-dict_line.y1)*position];
    }
    if (dict_line.y1 == dict_line.y2){
      bHorizontal = true;
      var center = [dict_line.x1+(dict_line.x2-dict_line.x1)*position, dict_line.y1];
    }
    
    var group = draw.group();
    var inside_group = draw.group();
    circle1 = group.circle(2*rad);
    group.add(circle1)
    circle1.fill('white');
    circle1.stroke({ color: 'black', width: circleWidth, linecap: 'black', linejoin: 'round' });
    if (type != 'wind'){
      var text = group.text(type)
                    .font({size: 10, family: 'Helvetica'})
                    .center(0.5*circle1.width(), 0.5*circle1.height());

      // group.add(text);
      // inside_group.add(text);
    }
    if (type == 'wind'){
      starCenterX = center[0]
      starCenterY = center[1]
      starLength = rad*0.6
      stemLength = rad*0.4
      // starTopY = starCenterY-starLength
      // starBottomRightX = starCenterX+0.7*starLength
      // starBottomRightY = starCenterY+0.7*starLength
      // starBottomLeftX = starCenterX-0.7*starLength
      // starBottomLeftY = starCenterY+0.7*starLength

      starTopY = starCenterY-starLength
      starBottomRightX = starCenterX+0.866*starLength
      starBottomRightY = starCenterY+0.5*starLength
      starBottomLeftX = starCenterX-0.866*starLength
      starBottomLeftY = starCenterY+0.5*starLength
      
      // starLine1 = draw.line(starCenterX, starCenterY, 
      //           starCenterX+stemLength, starCenterY).stroke({ width: 0.5})
      // starLine2 = draw.line(starCenterX, starCenterY, 
      //           starCenterX, starTopY).stroke({ width: 1})
      // starLine3 = draw.line(starCenterX, starCenterY, 
      //           starBottomRightX, starBottomRightY).stroke({ width: 1})
      // starLine4 = draw.line(starCenterX, starCenterY, 
      //           starBottomLeftX, starBottomLeftY).stroke({ width: 1})

      var polygon1 = draw.polygon(String(starCenterX) + "," + String(starTopY) + " " +
                                  String(starCenterX) + "," + String(starCenterY) + " " +
                                  String(starBottomRightX) + "," + String(starBottomRightY) + " " +
                                  String(starCenterX) + "," + String(starCenterY) + " " +
                                  String(starBottomLeftX) + "," + String(starBottomLeftY) + " " +
                                  String(starCenterX) + "," + String(starCenterY) + " " +
                                  String(starCenterX) + "," + String(starTopY)).stroke({ width: 1});
      group.add(polygon1);
      inside_group.add(polygon1);
      var angle = 1
      window.setInterval(function(){
        polygon1.rotate(angle)
        angle += 1
      }, 10);//Refresh time in ms
    }

    group.move(center[0]-rad, center[1]-rad);

    dict_gen.objects = [group]

    

    callback(circle1, group, inside_group)
  }

  function add_inductor(dict_line, position, length){
    var rad = 2;
    var circleWidth = 1

    var bVertical = false;
    var bHorizontal = false;
    var circle1, circle2, circle3, circle4;
    var line1, line2, line3, line4;

    var dict_inductor = {}

    if (dict_line.x1 == dict_line.x2){
      bVertical = true;
      var center = [dict_line.x1, dict_line.y1+(dict_line.y2-dict_line.y1)*position];
    }
    if (dict_line.y1 == dict_line.y2){
      bHorizontal = true;
      var center = [dict_line.x1+(dict_line.x2-dict_line.x1)*position, dict_line.y1];
    }

    if (bVertical){
      ellipse1 = draw.ellipse(2.4*rad, 1.9*rad).center(center[0], center[1]-3*rad).fill('white').stroke({ color: 'black', width: circleWidth, linecap: 'black', linejoin: 'round' })
      ellipse2 = draw.ellipse(2.4*rad, 1.9*rad).center(center[0], center[1]-rad).fill('white').stroke({ color: 'black', width: circleWidth, linecap: 'black', linejoin: 'round' })
      ellipse3 = draw.ellipse(2.4*rad, 1.9*rad).center(center[0], center[1]+rad).fill('white').stroke({ color: 'black', width: circleWidth, linecap: 'black', linejoin: 'round' })
      ellipse4 = draw.ellipse(2.4*rad, 1.9*rad).center(center[0], center[1]+3*rad).fill('white').stroke({ color: 'black', width: circleWidth, linecap: 'black', linejoin: 'round' })
      rect1 = draw.rect(2*rad, 2*rad).center(center[0]-rad, center[1]-3*rad).fill('white')
      rect2 = draw.rect(2*rad, 2*rad).center(center[0]-rad, center[1]-rad).fill('white')
      rect3 = draw.rect(2*rad, 2*rad).center(center[0]-rad, center[1]+rad).fill('white')
      rect4 = draw.rect(2*rad, 2*rad).center(center[0]-rad, center[1]+3*rad).fill('white')
    } else if (bHorizontal){
      ellipse1 = draw.ellipse(2.4*rad, 1.9*rad).center(center[0], center[1]-3*rad).fill('white').stroke({ color: 'black', width: circleWidth, linecap: 'black', linejoin: 'round' })
      ellipse2 = draw.ellipse(2.4*rad, 1.9*rad).center(center[0], center[1]-rad).fill('white').stroke({ color: 'black', width: circleWidth, linecap: 'black', linejoin: 'round' })
      ellipse3 = draw.ellipse(2.4*rad, 1.9*rad).center(center[0], center[1]+rad).fill('white').stroke({ color: 'black', width: circleWidth, linecap: 'black', linejoin: 'round' })
      ellipse4 = draw.ellipse(2.4*rad, 1.9*rad).center(center[0], center[1]+3*rad).fill('white').stroke({ color: 'black', width: circleWidth, linecap: 'black', linejoin: 'round' })
      rect1 = draw.rect(2*rad, 2*rad).center(center[0]-rad, center[1]-3*rad).fill('white')
      rect2 = draw.rect(2*rad, 2*rad).center(center[0]-rad, center[1]-rad).fill('white')
      rect3 = draw.rect(2*rad, 2*rad).center(center[0]-rad, center[1]+rad).fill('white')
      rect4 = draw.rect(2*rad, 2*rad).center(center[0]-rad, center[1]+3*rad).fill('white')
    }
    
    dict_inductor.objects = [ellipse1, ellipse2, ellipse3, ellipse4, rect1, rect2, rect3, rect4]

    return dict_inductor
  }
  function add_breaker(dict_line, position, size, state, callback){
    var bVertical = false;
    var bHorizontal = false;

    var dict_breaker = {}

    if (dict_line.x1 == dict_line.x2){
      bVertical = true;
      var center = [dict_line.x1, dict_line.y1+(dict_line.y2-dict_line.y1)*position];
    }
    if (dict_line.y1 == dict_line.y2){
      bHorizontal = true;
      var center = [dict_line.x1+(dict_line.x2-dict_line.x1)*position, dict_line.y1];
    }
    // alert(dict_line.dict_styling.fill)
    if(dict_line.dict_styling.stroke.color != '#a0a0a0'){
      if (state == 'open'){
        dict_line.dict_styling.fill.color = 'white'
        dict_line.dict_styling.stroke.color = 'black'
      } else if (state == 'closed'){
        dict_line.dict_styling.fill.color = 'black'
        dict_line.dict_styling.stroke.color = 'black'
      }
    } else {
      if (state == 'open'){
        dict_line.dict_styling.fill.color = 'white'
        dict_line.dict_styling.stroke.color = '#a0a0a0'
      } else if (state == 'closed'){
        dict_line.dict_styling.fill.color = '#a0a0a0'
        dict_line.dict_styling.stroke.color = '#a0a0a0'
      }
    }
    
    if (state == 'open'){
      rect1 = draw.rect(size, size).center(center[0], center[1]).fill(dict_line.dict_styling.fill).stroke(dict_line.dict_styling.stroke).stroke({width: 1})
    }
    if (state == 'closed'){
      rect1 = draw.rect(size, size).center(center[0], center[1]).fill(dict_line.dict_styling.fill).stroke(dict_line.dict_styling.stroke).stroke({width: 1})
    }
    rect1.click(function() {
      if (this.attr('fill') == dict_line.dict_styling.stroke.color){
        this.fill({ color: 'white' })
      } else {
        this.fill(dict_line.dict_styling.stroke)
      }
    });

    dict_breaker.objects = [rect1];
    callback(rect1);
  }
  function add_resistor(dict_line, position, length, width){
    var bVertical = false;
    var bHorizontal = false;

    var dict_resistor = {}

    if (dict_line.x1 == dict_line.x2){
      bVertical = true;
      center = [dict_line.x1, dict_line.y1+(dict_line.y2-dict_line.y1)*position];
      rect1 = draw.rect(width, length).center(center[0], center[1]).fill('black').stroke(dict_line.dict_styling.stroke)
                                            .fill(dict_line.dict_styling.fill)
                                            .stroke({ width: 1})
    }
    if (dict_line.y1 == dict_line.y2){
      bHorizontal = true;
      center = [dict_line.x1+(dict_line.x2-dict_line.x1)*position, dict_line.y1];
      rect1 = draw.rect(length, width).center(center[0], center[1]).fill('black').stroke(dict_line.dict_styling.stroke)
                                            .fill(dict_line.dict_styling.fill)
                                            .stroke({ width: 1})
    }

    dict_resistor.objects = [rect1]
  }
  function add_load(dict_line, position, flipped){
    var rad = 6;
    var bVertical = false;
    var bHorizontal = false;
    var center;

    var dict_load = {}

    if (dict_line.x1 == dict_line.x2){
      bVertical = true;
    } else if (dict_line.y1 == dict_line.y2){
      bHorizontal = true;
      center = [dict_line.x1+(dict_line.x2-dict_line.x1)*position, dict_line.y1];
    }
    if (position == 0){
      center = [dict_line.x1, dict_line.y1];
    } else if (position == 1){
      center = [dict_line.x2, dict_line.y2];
    }

    // DELTA SYMBOL
    deltaCenterX = center[0]
    deltaCenterY = center[1]
    deltaLength = rad*0.6

    if (flipped == false){
      delta1X = deltaCenterX
      delta1Y = deltaCenterY-deltaLength
      delta2X = deltaCenterX+0.866*deltaLength
      delta2Y = deltaCenterY+0.5*deltaLength
      delta3X = deltaCenterX-0.866*deltaLength
      delta3Y = deltaCenterY+0.5*deltaLength
    } else {
      delta1X = deltaCenterX
      delta1Y = deltaCenterY+deltaLength
      delta2X = deltaCenterX+0.866*deltaLength
      delta2Y = deltaCenterY-0.5*deltaLength
      delta3X = deltaCenterX-0.866*deltaLength
      delta3Y = deltaCenterY-0.5*deltaLength
    }
    poly1 = draw.polygon(String(delta1X) + "," + String(delta1Y) + " " +
    String(delta2X) + "," + String(delta2Y) + " " +
    String(delta3X) + "," + String(delta3Y) + " " +
    String(delta1X) + "," + String(delta1Y)).stroke(dict_line.dict_styling.stroke)
                                            .fill(dict_line.dict_styling.stroke)
                                            .stroke({ width: 1})

    if (bHorizontal){
      poly1.rotate(90)
    }

    dict_load.objects = [poly1]
  }
  function add_earth(dict_line, position, flipped){
    var rad = 4;
    var bVertical = false;
    var bHorizontal = false;
    var center;

    var dict_earth = {}

    if (dict_line.x1 == dict_line.x2){
      bVertical = true;
    } else if (dict_line.y1 == dict_line.y2){
      bHorizontal = true;
      center = [dict_line.x1+(dict_line.x2-dict_line.x1)*position, dict_line.y1];
    }
    
    if (position == 0){
      center = [dict_line.x1, dict_line.y1];
    } else if (position == 1){
      center = [dict_line.x2, dict_line.y2];
    }

    // DELTA SYMBOL
    deltaCenterX = center[0]
    deltaCenterY = center[1]
    deltaLength = rad*0.6

    if (dict_line.dict_styling.stroke.color){
      var color = dict_line.dict_styling.stroke.color
    } else {
      var color = "blacks"
    }

    if (bVertical){
      if (flipped == false){
        line1 = draw.line(deltaCenterX-rad*0.5, deltaCenterY-2*rad, deltaCenterX+rad*0.5, deltaCenterY-2*rad).stroke({ width: 1, color: color})
        line2 = draw.line(deltaCenterX-rad, deltaCenterY-rad, deltaCenterX+rad, deltaCenterY-rad).stroke({ width: 1, color: color})
        line3 = draw.line(deltaCenterX-rad*1.5, deltaCenterY, deltaCenterX+rad*1.5, deltaCenterY).stroke({ width: 1, color: color})
      } else {
        line1 = draw.line(deltaCenterX-rad*1.5, deltaCenterY, deltaCenterX+rad*1.5, deltaCenterY).stroke({ width: 1, color: color})
        line2 = draw.line(deltaCenterX-rad, deltaCenterY+rad, deltaCenterX+rad, deltaCenterY+rad).stroke({ width: 1, color: color})
        line3 = draw.line(deltaCenterX-rad*0.5, deltaCenterY+2*rad, deltaCenterX+rad*0.5, deltaCenterY+2*rad).stroke({ width: 1, color: color})
      }
    } else if (bHorizontal){
      if (flipped == false){
        line1 = draw.line(deltaCenterX, deltaCenterY-rad*1.5, deltaCenterX, deltaCenterY+1.5*rad).stroke({ width: 1, color: color})
        line2 = draw.line(deltaCenterX-rad, deltaCenterY-rad, deltaCenterX-rad, deltaCenterY+rad).stroke({ width: 1, color: color})
        line3 = draw.line(deltaCenterX-2*rad, deltaCenterY-rad*0.5, deltaCenterX-rad*2, deltaCenterY+rad*0.5).stroke({ width: 1, color: color})
      } else {
        line1 = draw.line(deltaCenterX+2*rad, deltaCenterY-rad*0.5, deltaCenterX+rad*2, deltaCenterY+0.5*rad).stroke({ width: 1, color: color})
        line2 = draw.line(deltaCenterX+rad, deltaCenterY-rad, deltaCenterX+rad, deltaCenterY+rad).stroke({ width: 1, color: color})
        line3 = draw.line(deltaCenterX, deltaCenterY-rad*1.5, deltaCenterX, deltaCenterY+rad*1.5).stroke({ width: 1, color: color})
      }
    }

    dict_earth.objects = [line1, line2, line3]

    return dict_earth
  }

  function add_nodes(dict_line, o_line){
    var rad = 3
    var txtSize = 9

    var bVertical = false;
    var bHorizontal = false;

    if (dict_line.x1 == dict_line.x2){
      bVertical = true;
    } else if (dict_line.y1 == dict_line.y2){
      bHorizontal = true;
    }

    var circle1 = draw.circle(2*rad).center(dict_line.x1, dict_line.y1).stroke(dict_line.dict_styling.stroke).fill(dict_line.dict_styling.fill)
    var circle2 = draw.circle(2*rad).center(dict_line.x2, dict_line.y2).stroke(dict_line.dict_styling.stroke).fill(dict_line.dict_styling.fill)
    var text1 = draw.text(dict_line.line_idx + ".1")
                    .font({size: txtSize, family: 'Helvetica'})
                    
    var text2 = draw.text(dict_line.line_idx + ".2")
                    .font({size: txtSize, family: 'Helvetica'})
                    
    if(bVertical){
      text1.x_coord = dict_line.x1
      text1.y_coord = dict_line.y1-10
      text2.x_coord = dict_line.x2
      text2.y_coord = dict_line.y2+10

      text1.position = "T"
      text2.position = "B"
    }
    if(bHorizontal){
      text1.x_coord = dict_line.x1-10
      text1.y_coord = dict_line.y1
      text2.x_coord = dict_line.x2+10
      text2.y_coord = dict_line.y2

      text1.position = "L"
      text2.position = "R"
    }



    text1.center(text1.x_coord, text1.y_coord);
    text2.center(text2.x_coord, text2.y_coord);

    text1.hide()
    text2.hide()

    text1.bVertical = bVertical
    text1.bHorizontal = bHorizontal
    text2.bVertical = bVertical
    text2.bHorizontal = bHorizontal

    o_line.click(function() {
      if (text1.visible() == false){
        text1.show()
        text2.show()
      } else {
        text1.hide()
        text2.hide()
      }
      
    });

    text1.click(function() {
      if (text1.position == "L"){
        text1.position = "T"
      } else if (text1.position == "R"){
        text1.position = "B"
      } else if (text1.position == "T"){
        text1.position = "R"
      } else if (text1.position == "B"){
        text1.position = "L"
      }
      if (text1.position == "L"){
        text1.center(text1.x_coord-10, text1.y_coord-10);
        text1.x_coord = text1.x_coord-10
        text1.y_coord = text1.y_coord-10
      } else if (text1.position == "T"){
        text1.center(text1.x_coord+10, text1.y_coord-10);
        text1.x_coord = text1.x_coord+10
        text1.y_coord = text1.y_coord-10
      } else if (text1.position == "R"){
        text1.center(text1.x_coord+10, text1.y_coord+10);
        text1.x_coord = text1.x_coord+10
        text1.y_coord = text1.y_coord+10
      } else if (text1.position == "B"){
        text1.center(text1.x_coord-10, text1.y_coord+10);
        text1.x_coord = text1.x_coord-10
        text1.y_coord = text1.y_coord+10
      } 
    });

    text2.click(function() {
      if (text2.position == "L"){
        text2.position = "T"
      } else if (text2.position == "R"){
        text2.position = "B"
      } else if (text2.position == "T"){
        text2.position = "R"
      } else if (text2.position == "B"){
        text2.position = "L"
      }
      if (text2.position == "L"){
        text2.center(text2.x_coord-10, text2.y_coord-10);
        text2.x_coord = text2.x_coord-10
        text2.y_coord = text2.y_coord-10
      } else if (text2.position == "T"){
        text2.center(text2.x_coord+10, text2.y_coord-10);
        text2.x_coord = text2.x_coord+10
        text2.y_coord = text2.y_coord-10
      } else if (text2.position == "R"){
        text2.center(text2.x_coord+10, text2.y_coord+10);
        text2.x_coord = text2.x_coord+10
        text2.y_coord = text2.y_coord+10
      } else if (text2.position == "B"){
        text2.center(text2.x_coord-10, text2.y_coord+10);
        text2.x_coord = text2.x_coord-10
        text2.y_coord = text2.y_coord+10
      } 
    });
  }
  
  function add_text(object, bool_dict_obj, list_text, x_from_center, y_from_center, callback){
    var rad = 3
    var txtSize = 14

    var bVertical = false;
    var bHorizontal = false;

    var text1 = draw.text(function(add) {
      var text_idx
      for(text_idx = 0; text_idx < list_text.length; text_idx++){
        add.tspan(list_text[text_idx]).newLine()
      }
    })
    .font({size: txtSize, family: 'Helvetica'})

    if(bool_dict_obj == true){
      if (object.x1 == object.x2){
        bVertical = true;
      } else if (object.y1 == object.y2){
        bHorizontal = true;
      }
                      
      if(bVertical){
        text1.x_coord = object.x1
        text1.y_coord = object.y1+(object.y2 - object.y1)/2
      }

      if(bHorizontal){
        text1.x_coord = object.x1+(object.x2 - object.x1)/2
        text1.y_coord = dict_line.y1
      }
    } else {
      text1.x_coord = object.cx()
      text1.y_coord = object.cy()
    }

    
    text1.center(text1.x_coord+x_from_center, text1.y_coord+y_from_center);
    callback(text1)
  }

  function eventMouse(group, type, name){
    group.mouseenter(function(e){
      $("#dataPopup").css('visibility', 'visible');
      $('#dataPopup').text(type+':')
      $('<p>'+name+'</p>').appendTo('#dataPopup');
      // $('<p>Data:</p>').appendTo('#dataPopup');
      $.ajax({
        url:"data/scenario1.csv",
        dataType:"text",
        success:function(data)
        {
          var csv = data.split(/\r?\n|\r/);
          for(var count = 0; count<csv.length; count++)
          {
          var cell_data = csv[count].split(",");
          
          if(type=="Generator"){
            if(cell_data[0] == name & cell_data[2] == 'Active Power'){
              $('<p>P: '+cell_data[4+parseInt($('#buttonA').attr('stage'))]+' MW</p>').appendTo('#dataPopup');
            }
            if(cell_data[0] == name & cell_data[2] == 'Reactive Power'){
              $('<p>Q: '+cell_data[4+parseInt($('#buttonA').attr('stage'))]+' MVAr</p>').appendTo('#dataPopup');
            }
          } else if(type=="Transformer"){
            if(cell_data[0] == name & cell_data[2] == 'Loading'){
              $('<p>Loading: '+cell_data[4+parseInt($('#buttonA').attr('stage'))]+' %</p>').appendTo('#dataPopup');
            }
            if(cell_data[0] == name & cell_data[2] == 'Tap'){
              $('<p>Tap: '+cell_data[4+parseInt($('#buttonA').attr('stage'))]+' %</p>').appendTo('#dataPopup');
            }
           
          } else if(type=="Line"){
            if(cell_data[0] == name & cell_data[2] == 'Loading'){
              $('<p>Loading: '+cell_data[4+parseInt($('#buttonA').attr('stage'))]+' %</p>').appendTo('#dataPopup');
            }
            if(cell_data[0] == name & cell_data[2] == 'Active Power'){
              $('<p>P: '+cell_data[4+parseInt($('#buttonA').attr('stage'))]+' MW</p>').appendTo('#dataPopup');
            }
            if(cell_data[0] == name & cell_data[2] == 'Reactive Power'){
              $('<p>Q: '+cell_data[4+parseInt($('#buttonA').attr('stage'))]+' MVAr</p>').appendTo('#dataPopup');
            }
          } 
          
          }
        }
        });
    });
    group.mouseleave(function(e){
      $("#dataPopup").css('visibility', 'hidden');
    });
    group.mousemove(function(e){
      $('#dataPopup').css('top', e.pageY-25);
      $('#dataPopup').css('left', e.pageX+25);
    });
  }

  function greenObject(stage, object){
    if ($('#buttonA').attr('stage') == stage){
      flashColour(object, "green")
    }
  }

  
  function buttonA_greenObject(stage, object){
    $('#buttonA').click(function(){
      greenObject(stage, object)
    });
  }

  //Define parent attributes
  var x = document.getElementById('myDiv').clientWidth;
  var y = 100+document.getElementById('myDiv').clientHeight;
  // alert(x)
  // alert(y)
  
  //Create canvas
  var draw = SVG('drawing').size(x, y)
  
  var x_pos_line1 = x/3
  var y_pos_line1 = y/2

  var x_scaling = 1.03
  var y_scaling = 1.50

  //                       x1,y1,x2,y2
  var lineXtop = draw.line(0, 0, x, 0).stroke({ width: 4, dasharray: (5,5)})
  var lineXbottom = draw.line(0, y, x, y).stroke({ width: 4, dasharray: (5,5) })
  var lineYleft = draw.line(0, 0, 0, y).stroke({ width: 4, dasharray: (5,5) })
  var lineYright = draw.line(x, 0, x, y).stroke({ width: 4, dasharray: (5,5) })

  const x_const = 1170
  const y_const = 662

  const dict_steps_components = {
    '1_1': {
      lines: [
        // STEP 1
        {
          x1: 72, y1: 256,
          x2: 72, y2: 420,
          voltage: '132'
        },
        {
          x1: 46, y1: 256,
          x2: 149, y2: 256,
          voltage: '132'
        },
        {
          x1: 40, y1: 301,
          x2: 72, y2: 301,
          voltage: '132'
        },
        {
          x1: 40, y1: 301,
          x2: 40, y2: 335,
          voltage: '132'
        },
        {
          x1: 57, y1: 87,
          x2: 57, y2: 256,
          voltage: '132'
        },
        {
          x1: 118, y1: 256,
          x2: 118, y2: 310,
          dash: true,
          color: '#a0a0a0'
        },
        {
          x1: 140, y1: 256,
          x2: 140, y2: 310,
          color: '#a0a0a0'
        },
        {
          x1: 95, y1: 297,
          x2: 118, y2: 297,
          color: '#a0a0a0'
        },
        {
          x1: 118, y1: 256,
          x2: 118, y2: 270,
          color: '#a0a0a0'
        },
        // STEP 2
        {
          x1: 40, y1: 88,
          x2: 1133, y2: 88,
          voltage: '132'
        },
        {
          x1: 94, y1: 88,
          x2: 94, y2: 158,
          voltage: '132'
        },
        {
          x1: 94, y1: 158,
          x2: 208, y2: 158,
          voltage: '132'
        },
        // Step 5C B13 south, east, SOUTH
        {
          x1: 302, y1: 158,
          x2: 302, y2: 182,
          color: '#a0a0a0'
        },
        {
          x1: 271, y1: 182,
          x2: 412, y2: 182,
          color: '#a0a0a0'
        },
        // 10-15
        {
          x1: 320, y1: 182,
          x2: 320, y2: 223,
          color: '#a0a0a0'
        },
        // 21-26
        {
          x1: 372, y1: 182,
          x2: 372, y2: 223,
          color: '#a0a0a0'
        },
        // Step 5C B23 south, west, south
        {
          x1: 387, y1: 158,
          x2: 387, y2: 182,
          color: '#a0a0a0'
        },
        // Step 5C B23 south, west
        {
          x1: 387, y1: 158,
          x2: 600, y2: 158,
          color: '#a0a0a0'
        },
        // Step 5C B23 south 
        {
          x1: 822, y1: 88,
          x2: 822, y2: 158,
          voltage: '132'
        },
        // Step 4.1 B12 - south 
        {
          x1: 491, y1: 88,
          x2: 491, y2: 138,
          voltage: '132'
        },
        // Step 4.1 B12 - south, west
        {
          x1: 168, y1: 138,
          x2: 491, y2: 138,
          voltage: '132'
        },
        // Step 4.1 B12 - south, west, south
        {
          x1: 168, y1: 138,
          x2: 168, y2: 350,
          voltage: '132'
        },
        // BB780 - Middlebie
        {
          x1: 98, y1: 350,
          x2: 240, y2: 350,
          voltage: '132'
        },
        {
          x1: 110, y1: 350,
          x2: 110, y2: 500,
          voltage: '132'
        },
        {
          x1: 95, y1: 500,
          x2: 140, y2: 500,
          voltage: '132'
        },
        {
          x1: 126, y1: 500,
          x2: 126, y2: 600,
          voltage: '132'
        },
        {
          x1: 188, y1: 350,
          x2: 188, y2: 425,
          voltage: '132'
        },
        {
          x1: 180, y1: 425,
          x2: 235, y2: 425,
          voltage: '132'
        },
        {
          x1: 225, y1: 425,
          x2: 225, y2: 460,
          voltage: '132'
        },
        {
          x1: 168, y1: 487,
          x2: 225, y2: 487,
          voltage: '132'
        },
        {
          x1: 225, y1: 487,
          x2: 225, y2: 542,
          voltage: '132'
        },
        {
          x1: 225, y1: 542,
          x2: 389, y2: 542,
          voltage: '132'
        },
        {
          x1: 389, y1: 542,
          x2: 389, y2: 625,
          voltage: '132'
        },
        {
          x1: 268, y1: 625,
          x2: 389, y2: 625,
          voltage: '132'
        },
        {
          x1: 370, y1: 582,
          x2: 520, y2: 582,
          voltage: '132'
        },
        {
          x1: 420, y1: 582,
          x2: 420, y2: 620,
          voltage: '132'
        },
        {
          x1: 470, y1: 582,
          x2: 470, y2: 620,
          voltage: '132'
        },
        {
          x1: 495, y1: 542,
          x2: 495, y2: 625,
          voltage: '132'
        },
        {
          x1: 495, y1: 542,
          x2: 625, y2: 542,
          voltage: '132'
        },
        {
          x1: 495, y1: 625,
          x2: 625, y2: 625,
          voltage: '132'
        },
        {
          x1: 625, y1: 505,
          x2: 625, y2: 542,
          voltage: '132'
        },
        {
          x1: 200, y1: 505,
          x2: 650, y2: 505,
          voltage: '132'
        },
        // Step 3.1 B24
        {
          x1: 1106, y1: 87,
          x2: 1106, y2: 256,
          voltage: '132'
        },
        {
          x1: 1080, y1: 256,
          x2: 1150, y2: 256,
          voltage: '132'
        },
        {
          x1: 1130, y1: 256,
          x2: 1130, y2: 380,
          voltage: '132'
        },
        
        {
          x1: 356, y1: 20,
          x2: 356, y2: 88,
          color: '#a0a0a0'
        },
        {
          x1: 335, y1: 31,
          x2: 356, y2: 31,
          color: '#a0a0a0'
        },
        {
          x1: 356, y1: 75,
          x2: 400, y2: 75,
          dash: true,
          color: '#a0a0a0'
        },
        {
          x1: 356, y1: 75,
          x2: 370, y2: 75,
          color: '#a0a0a0'
        },
        {
          x1: 391, y1: 40,
          x2: 391, y2: 75,
          color: '#a0a0a0'
        },
        {
          x1: 208, y1: 158,
          x2: 302, y2: 158,
          color: '#a0a0a0'
        },
        {
          x1: 600, y1: 158,
          x2: 822, y2: 158,
          voltage: '132'
        },
        
        
        {
          x1: 153, y1: 87,
          x2: 153, y2: 221,
          voltage: '132'
        },
        {
          x1: 153, y1: 221,
          x2: 288, y2: 221,
          voltage: '132'
        },
        {
          x1: 288, y1: 221,
          x2: 288, y2: 251,
          voltage: '132'
        },
        {
          x1: 288, y1: 251,
          x2: 288, y2: 278,
          voltage: '132'
        },
        {
          x1: 288, y1: 278,
          x2: 430, y2: 278,
          color: '#a0a0a0'
        },
        {
          x1: 430, y1: 278,
          x2: 430, y2: 301,
          color: '#a0a0a0'
        },
        {
          x1: 399, y1: 301,
          x2: 541, y2: 301,
          color: '#a0a0a0'
        },
        {
          x1: 452, y1: 301,
          x2: 452, y2: 343,
          color: '#a0a0a0'
        },
        {
          x1: 495, y1: 301,
          x2: 495, y2: 343,
          color: '#a0a0a0'
        },
        {
          x1: 516, y1: 278,
          x2: 516, y2: 301,
          color: '#a0a0a0'
        },
        {
          x1: 516, y1: 278,
          x2: 587, y2: 278,
          color: '#a0a0a0'
        },
        {
          x1: 587, y1: 278,
          x2: 641, y2: 278,
          voltage: '132'
        },
        {
          x1: 641, y1: 251,
          x2: 641, y2: 278,
          voltage: '132'
        },
        {
          x1: 245, y1: 251,
          x2: 704, y2: 251,
          voltage: '132'
        },
        {
          x1: 641, y1: 186,
          x2: 641, y2: 251,
          voltage: '132'
        },
        {
          x1: 641, y1: 186,
          x2: 723, y2: 186,
          voltage: '132'
        },
        {
          x1: 723, y1: 87,
          x2: 723, y2: 186,
          voltage: '132'
        },
        {
          x1: 33, y1: 191,
          x2: 153, y2: 191,
          voltage: '132'
        },
        // Step 4.1 B12 - south, west, south, south
        {
          x1: 168, y1: 350,
          x2: 168, y2: 487,
          voltage: '132'
        },
        
      ],
      loads: [

      ],
      txs: [

      ],
      breakers: [

      ],
      labels: [

      ],
      generators: [

      ],
    },
  }
  
  for (idx_line=0; idx_line<dict_steps_components['1_1'].lines.length; idx_line++){
    temp_dict = dict_steps_components['1_1'].lines[idx_line]
    temp_dict.x1 = temp_dict.x1 * x_scaling
    temp_dict.x2 = temp_dict.x2 * x_scaling
    temp_dict.y1 = temp_dict.y1 * y_scaling
    temp_dict.y2 = temp_dict.y2 * y_scaling
  }

  var bNodes = false

  var idx_line, temp_dict
  for (idx_line=0; idx_line<dict_steps_components['1_1'].lines.length; idx_line++){
    temp_dict = dict_steps_components['1_1'].lines[idx_line]
    temp_dict.dict_styling = {fill: { width: 2}, stroke: { width: 2}}
    if (temp_dict.dash){
      temp_dict.dict_styling.stroke.dasharray = (5, 5)
    }
    if (temp_dict.color){
      temp_dict.dict_styling.stroke.color = temp_dict.color
      temp_dict.dict_styling.fill.color = temp_dict.color
    }
    if (temp_dict.voltage){
      if (temp_dict.voltage == "132") {
        temp_dict.dict_styling.stroke.color = "#000000"
        temp_dict.dict_styling.fill.color = "#000000"
      } else if (temp_dict.voltage == "33") {
        temp_dict.dict_styling.stroke.color = "#00ff00"
        temp_dict.dict_styling.fill.color = "#00ff00"
      } else if (temp_dict.voltage == "11") {
        temp_dict.dict_styling.stroke.color = "#ff0000"
        temp_dict.dict_styling.fill.color = "#ff0000"
      } 
      
    }
    temp_dict.o_line = draw.line(temp_dict.x1, temp_dict.y1, 
                                  temp_dict.x2, temp_dict.y2).stroke(temp_dict.dict_styling.stroke)

    temp_dict.line_idx = idx_line
    
    if (bNodes){
      add_nodes(temp_dict, temp_dict.o_line)
    }
    
    dict_steps_components['1_1'].lines[idx_line] = temp_dict
  }
  dict_steps_components['1_1'].txs = []

  var stage1_1 = []

  var stage = 0


  add_text(dict_steps_components['1_1'].lines[1].o_line, false, ["Steven's Croft"], 10, -15, function(object){
    return 0
  });

  add_text(dict_steps_components['1_1'].lines[9].o_line, false, ["Chapelcross Grid", "33kV Busbar"], 0, -25, function(object){
    return 0
  });

  add_text(dict_steps_components['1_1'].lines[41].o_line, false, ["Langholm"], 10, -15, function(object){
    return 0
  });

  add_text(dict_steps_components['1_1'].lines[10].o_line, false, ["Annan","#1"], 30, -12, function(object){
    return 0
  });
  add_text(dict_steps_components['1_1'].lines[22].o_line, false, ["Middleby"], 50, -12, function(object){
    return 0
  });


  add_text(dict_steps_components['1_1'].lines[43].o_line, false, ["Minsca"], 20, -15, function(object){
    return 0
  });
  add_text(dict_steps_components['1_1'].lines[52].o_line, false, ["Lockerbie","#1"], 42, -50, function(object){
    return 0
  });
  add_text(dict_steps_components['1_1'].lines[68].o_line, false, ["Lockerbie","#2"], 42, -30, function(object){
    return 0
  });
  add_text(dict_steps_components['1_1'].lines[18].o_line, false, ["Annan","#2"], 42, -10, function(object){
    return 0
  });
  add_text(dict_steps_components['1_1'].lines[65].o_line, false, ["Lockerbie A"], -100, -13, function(object){
    return 0
  });
  add_text(dict_steps_components['1_1'].lines[65].o_line, false, ["Lockerbie B"], 100, -13, function(object){
    return 0
  });

  function buttonA_fillObject(stage, object, color){
    $('#buttonA').click(function(){
      if (parseInt($('#buttonA').attr('stage')) == stage){
        flashBreaker(object, object.attr('stroke'))
      }
    });
  }

  // Document Initialisation
  $(document).ready(function(){
    $('#buttonA').attr('stage', 0);
    $.ajax({
      url:"data/steps.csv",
      dataType:"text",
      success:function(data)
      {
        var csv = data.split(/\r?\n|\r/);
        var cell_data = csv[parseInt($('#buttonA').attr('stage'))].split(",");
        // $('#buttonA').text(cell_data[2])
      }
    });
  });

  function flashBreaker(object, colour){
    var i; 
    var time = 175
    var orig = object.attr('fill')
    var colour_highlight = '#ff2429'
    object.fill({color:colour_highlight})
    for(i=0; i<6; i++){
      setTimeout(function(){
        object.fill({color:orig})
        setTimeout(function(){
          object.fill({color:colour_highlight})
          setTimeout(function(){
            object.fill({color:orig})
            setTimeout(function(){
              object.fill({color:colour_highlight})
              setTimeout(function(){
                object.fill({color:orig})
                setTimeout(function(){
                  object.fill({color:colour_highlight})
                  setTimeout(function(){
                    object.fill({color:orig})
                    setTimeout(function(){
                      object.fill({color:colour})
                    }, time);
                  }, time);
                }, time);
              }, time);
            }, time);
          }, time);
        }, time);
      }, time);
     
    }

  }

  function flashColour(object, colour){
    var i; 
    var time = 175
    var orig = object.attr('stroke')
    object.stroke({color:colour})
    for(i=0; i<6; i++){
      setTimeout(function(){
        object.stroke({color:orig})
        setTimeout(function(){
          object.stroke({color:colour})
          setTimeout(function(){
            object.stroke({color:orig})
            setTimeout(function(){
              object.stroke({color:colour})
              setTimeout(function(){
                object.stroke({color:orig})
                setTimeout(function(){
                  object.stroke({color:colour})
                  setTimeout(function(){
                    object.stroke({color:orig})
                    setTimeout(function(){
                      object.stroke({color:colour})
                    }, time);
                  }, time);
                }, time);
              }, time);
            }, time);
          }, time);
        }, time);
      }, time);
     
    }
  }

  var powerColour = '#25b1f5'

  // Stage Iterator
  $('#buttonA').click(function(){
    $.ajax({
      url:"data/steps.csv",
      dataType:"text",
      success:function(data)
      {
        var csv = data.split(/\r?\n|\r/);
        $('#buttonA').attr('stage', parseInt($('#buttonA').attr('stage'))+1)
        var stage = parseInt($('#buttonA').attr('stage'));

        $('table tr:nth-child(' + (stage + 1) + ')').css('background-color', '#baffb3');
        
        var cell_data = csv[stage].split(",");
        // $('#buttonA').text(cell_data[2])
        
        if (stage == 2){
          flashColour(dict_steps_components['1_1'].lines[0].o_line, powerColour)
          flashColour(dict_steps_components['1_1'].lines[1].o_line, powerColour)
          flashColour(dict_steps_components['1_1'].lines[2].o_line, powerColour)
        } else if (stage == 3){
          flashColour(dict_steps_components['1_1'].lines[4].o_line, powerColour)
        } else if (stage == 4){
          flashColour(dict_steps_components['1_1'].lines[9].o_line, powerColour)
        } else if (stage == 5){
          flashColour(dict_steps_components['1_1'].lines[42].o_line, powerColour)
          flashColour(dict_steps_components['1_1'].lines[43].o_line, powerColour)

        } else if (stage == 6){
          
        } else if (stage == 7){
          flashColour(dict_steps_components['1_1'].lines[44].o_line, powerColour)
        } else if (stage == 8){
          flashColour(dict_steps_components['1_1'].lines[19].o_line, powerColour)
          flashColour(dict_steps_components['1_1'].lines[20].o_line, powerColour)
          flashColour(dict_steps_components['1_1'].lines[21].o_line, powerColour)
          flashColour(dict_steps_components['1_1'].lines[22].o_line, powerColour)
          flashColour(dict_steps_components['1_1'].lines[23].o_line, powerColour)
          flashColour(dict_steps_components['1_1'].lines[24].o_line, powerColour)
        } else if (stage == 9){
        } else if (stage == 10){
          flashColour(dict_steps_components['1_1'].lines[25].o_line, powerColour)
        } else if (stage == 12){
          flashColour(dict_steps_components['1_1'].lines[18].o_line, powerColour)
          flashColour(dict_steps_components['1_1'].lines[10].o_line, powerColour)
          flashColour(dict_steps_components['1_1'].lines[11].o_line, powerColour)
          flashColour(dict_steps_components['1_1'].lines[51].o_line, powerColour)
        } else if (stage == 13){
          flashColour(dict_steps_components['1_1'].lines[50].o_line, powerColour)
          flashColour(dict_steps_components['1_1'].lines[12].o_line, powerColour)
          flashColour(dict_steps_components['1_1'].lines[14].o_line, powerColour)
        } else if (stage == 14){
          flashColour(dict_steps_components['1_1'].lines[13].o_line, powerColour)
          flashColour(dict_steps_components['1_1'].lines[15].o_line, powerColour)
          flashColour(dict_steps_components['1_1'].lines[16].o_line, powerColour)
          flashColour(dict_steps_components['1_1'].lines[17].o_line, powerColour)
        }
      }
    });
  });
  
  add_tx(dict_steps_components['1_1'].lines[0], 0.45, 'starDelta', function(circle1,circle2,circle3,circle4,group){
    add_text(circle1, false, ["33/11kV"], 47, 15, function(object){
      return 0
    });
    buttonA_greenObject(1, circle1);
    buttonA_greenObject(1, circle2);
    buttonA_greenObject(1, circle3);
    buttonA_greenObject(1, circle4);
    eventMouse(group, "Transformer", "STCR3-_STCR5-_1");
  });


  add_gen(dict_steps_components['1_1'].lines[0], 0.73, 'SG', function(circle, group){
    buttonA_greenObject(0, circle)
    add_text(group, false, ["Stevens", "Croft"], -40, 0, function(object){
      return 0
    });
    eventMouse(group, "Generator", "STCR5-_1");
  });
  
  add_inductor(dict_steps_components['1_1'].lines[0], 0.9, 'SG');
  add_breaker(dict_steps_components['1_1'].lines[0], 0.61, 6, 'open', function(object){
    buttonA_fillObject(1, object)
  });
  add_breaker(dict_steps_components['1_1'].lines[0], 0.2, 6, 'open', function(object){
    buttonA_fillObject(1, object)
  });
  add_breaker(dict_steps_components['1_1'].lines[0], 0.1, 6, 'closed', function(object){
    return 0
  });
  add_earth(dict_steps_components['1_1'].lines[0], 1, true);

  add_breaker(dict_steps_components['1_1'].lines[3], 0.25, 6, 'open', function(object){
    return 0
  });
  add_resistor(dict_steps_components['1_1'].lines[3], 0.65, 12, 4);
  add_earth(dict_steps_components['1_1'].lines[3], 1, true);
  add_text(dict_steps_components['1_1'].lines[3],  true, ["NOP"], -23, -10, function(object){
    return 0
  });
  
  add_breaker(dict_steps_components['1_1'].lines[4], 0.10, 6, 'open', function(object){
    buttonA_fillObject(3, object)
    
  });
  add_breaker(dict_steps_components['1_1'].lines[4], 0.9, 6, 'open', function(object){
    buttonA_fillObject(2, object)
  });


  add_tx(dict_steps_components['1_1'].lines[5], 0.9, 'starDelta', function(dict_tx){
    dict_steps_components['1_1'].txs += [dict_tx]
  });

  add_breaker(dict_steps_components['1_1'].lines[6], 0.24, 6, 'closed', function(object){
    return 0
  });
  add_load(dict_steps_components['1_1'].lines[6], 1, true)
  
  add_earth(dict_steps_components['1_1'].lines[7], 0, false)
  
  add_load(dict_steps_components['1_1'].lines[8], 1, true)

  add_breaker(dict_steps_components['1_1'].lines[10], 0.24, 6, 'open', function(object){
    buttonA_fillObject(11, object);
  });
  
  add_tx(dict_steps_components['1_1'].lines[11], 1, 'deltaStar', function(c1, c2, c3, c4, group){
    buttonA_greenObject(12, c1)
    buttonA_greenObject(12, c2)
    buttonA_greenObject(12, c3)
    buttonA_greenObject(12, c4)
    add_text(group, false, ["33/11.5kV"], 0, 30, function(object){
      return 0
    });
    eventMouse(group, "Transformer", "ANANT1_ANAN10_T1");
  });
  
  add_breaker(dict_steps_components['1_1'].lines[12], 0.5, 6, 'closed', function(object){
    return 0
  });

  add_breaker(dict_steps_components['1_1'].lines[13], 0.5, 6, 'open', function(object){
    return 0
  });

  add_breaker(dict_steps_components['1_1'].lines[14], 0.4, 6, 'closed', function(object){
    return 0
  });
  add_load(dict_steps_components['1_1'].lines[14], 1, true)

  add_breaker(dict_steps_components['1_1'].lines[15], 0.4, 6, 'closed', function(object){
    return 0
  });
  add_load(dict_steps_components['1_1'].lines[15], 1, true)
  
  add_breaker(dict_steps_components['1_1'].lines[16], 0.5, 6, 'closed', function(object){
    buttonA_fillObject(10, object)
  });

  add_tx(dict_steps_components['1_1'].lines[17], 1, 'deltaStar', function(c1, c2, c3, c4, group){
    buttonA_greenObject(13, c1)
    buttonA_greenObject(13, c2)
    buttonA_greenObject(13, c3)
    buttonA_greenObject(13, c4)
    add_text(group, false, ["33/11.5kV"], 0, 30, function(object){
      return 0
    });
    eventMouse(group, "Transformer", "ANANT2_ANAN20_T2");
  });

  add_breaker(dict_steps_components['1_1'].lines[18], 0.24, 6, 'open', function(object){
    buttonA_fillObject(11, object);
  });

  add_breaker(dict_steps_components['1_1'].lines[19], 0.24, 6, 'open', function(object){
    buttonA_fillObject(7, object);
  });

  add_breaker(dict_steps_components['1_1'].lines[21], 0.9, 6, 'closed', function(object){
    return 0
  });
  add_breaker(dict_steps_components['1_1'].lines[70], 0.15, 6, 'open', function(object){
    return 0
  });

  add_breaker(dict_steps_components['1_1'].lines[23], 0.15, 6, 'closed', function(object){
    return 0
  });
  add_breaker(dict_steps_components['1_1'].lines[23], 0.85, 6, 'closed', function(object){
    return 0
  });

  add_breaker(dict_steps_components['1_1'].lines[25], 0.1, 6, 'open', function(object){
    buttonA_fillObject(8, object)
  });
  add_breaker(dict_steps_components['1_1'].lines[25], 0.3, 6, 'open', function(object){
    buttonA_fillObject(9, object)
  });
  add_tx(dict_steps_components['1_1'].lines[25], 0.55, 'deltaStar', function(c1, c2, c3, c4, group){
    buttonA_greenObject(9, c1)
    buttonA_greenObject(9, c2)
    buttonA_greenObject(9, c3)
    buttonA_greenObject(9, c4)
    add_text(group, false, ["33/0.69kV"], -55, 0, function(object){
    });
    eventMouse(group, "Transformer", "EWHC3-_EWHC0G_1");
    // EWHC3-_EWHC0G_1
  });
  add_breaker(dict_steps_components['1_1'].lines[25], 0.8, 6, 'open', function(object){
    buttonA_fillObject(9, object)
  });
  add_gen(dict_steps_components['1_1'].lines[25], 1, 'wind', function(circle1, group){
    add_text(group, false, ["Ewe Hill WF"], 0,30, function(group){
      return 0
    });
  });

  add_breaker(dict_steps_components['1_1'].lines[26], 0.15, 6, 'open', function(object){
    return 0
  });
  add_tx(dict_steps_components['1_1'].lines[26], 0.5, 'deltaStar', function(dict_tx){
    dict_steps_components['1_1'].txs += [dict_tx]
  });
  add_breaker(dict_steps_components['1_1'].lines[26], 0.86, 6, 'closed', function(object){
    return 0
  });
  
  add_breaker(dict_steps_components['1_1'].lines[28], 0.25, 6, 'closed', function(object){
    return 0
  });
  add_load(dict_steps_components['1_1'].lines[28], 1, true)

  add_tx(dict_steps_components['1_1'].lines[31], 0.5, 'deltaStar', function(dict_tx){
    dict_steps_components['1_1'].txs += [dict_tx]
  });

  add_breaker(dict_steps_components['1_1'].lines[32], 0.25, 6, 'closed', function(object){
    return 0
  });
  add_breaker(dict_steps_components['1_1'].lines[32], 0.75, 6, 'closed', function(object){
    return 0
  });

  add_breaker(dict_steps_components['1_1'].lines[33], 0.45, 6, 'closed', function(object){
    return 0
  });
  add_breaker(dict_steps_components['1_1'].lines[33], 0.55, 6, 'closed', function(object){
    return 0
  });
  add_gen(dict_steps_components['1_1'].lines[33], 0, 'wind', function(circle1, group){
    add_text(group, false, ["Craig WF"], 0,30, function(group){
      return 0
    });
  });

  
  add_breaker(dict_steps_components['1_1'].lines[34], 0.5, 6, 'closed', function(object){
    return 0
  });
  
  add_breaker(dict_steps_components['1_1'].lines[35], 0.3, 6, 'closed', function(object){
    return 0
  });
  add_load(dict_steps_components['1_1'].lines[35], 1, true)
  
  add_breaker(dict_steps_components['1_1'].lines[36], 0.3, 6, 'closed', function(object){
    return 0
  });
  add_load(dict_steps_components['1_1'].lines[36], 1, true)

  add_breaker(dict_steps_components['1_1'].lines[37], 0.3, 6, 'open', function(object){
    return 0
  });
  add_breaker(dict_steps_components['1_1'].lines[37], 0.7, 6, 'closed', function(object){
    return 0
  });

  add_breaker(dict_steps_components['1_1'].lines[39], 0.4, 6, 'closed', function(object){
    return 0
  });
  add_breaker(dict_steps_components['1_1'].lines[39], 0.6, 6, 'closed', function(object){
    return 0
  });
  add_gen(dict_steps_components['1_1'].lines[39], 1, 'wind', function(circle1, group){
    add_text(group, false, ["Craig II WF"], 0,30, function(group){
      return 0
    });
  });
  
  add_tx(dict_steps_components['1_1'].lines[38], 0.75, 'deltaStar', function(dict_tx){
    dict_steps_components['1_1'].txs += [dict_tx]
  });

  add_breaker(dict_steps_components['1_1'].lines[41], 0.5, 6, 'open', function(object){
    return 0
  });
  
  add_breaker(dict_steps_components['1_1'].lines[42], 0.1, 6, 'open', function(object){
    buttonA_fillObject(4, object)
  });
  add_breaker(dict_steps_components['1_1'].lines[42], 0.9, 6, 'closed', function(object){
    return 0
  });
  
  add_breaker(dict_steps_components['1_1'].lines[44], 0.10, 6, 'open', function(object){
    buttonA_fillObject(5, object)
  });
  add_breaker(dict_steps_components['1_1'].lines[44], 0.25, 6, 'open', function(object){
    buttonA_fillObject(6, object)
  });
  add_tx(dict_steps_components['1_1'].lines[44], 0.55, 'deltaStar', function(c1, c2, c3, c4, group){
    buttonA_greenObject(6, c1)
    buttonA_greenObject(6, c2)
    buttonA_greenObject(6, c3)
    buttonA_greenObject(6, c4)
    add_text(group, false, ["33/0.69kV"], -55, 0, function(object){
    });
    eventMouse(group, "Transformer", "MINS3-_MINS0G_1");
    // MINS3-_MINS0G_1

  });
  add_breaker(dict_steps_components['1_1'].lines[44], 0.8, 6, 'open', function(object){
    buttonA_fillObject(6, object)
  });
  add_gen(dict_steps_components['1_1'].lines[44], 1, 'wind', function(circle1, group){
    add_text(group, false, ["MINSCA WF"], 0,30, function(group){
      return 0
    });
  });

  add_tx(dict_steps_components['1_1'].lines[45], 0.51, '', function(dict_tx){
  });
  add_load(dict_steps_components['1_1'].lines[45], 0, false);

  add_load(dict_steps_components['1_1'].lines[46], 0, true)

  add_tx(dict_steps_components['1_1'].lines[47], 0.96, 'starStar', function(dict_tx){
  });

  add_load(dict_steps_components['1_1'].lines[48], 1, false)

  add_load(dict_steps_components['1_1'].lines[49], 0, false)
  add_load(dict_steps_components['1_1'].lines[49], 0, false)
  add_resistor(dict_steps_components['1_1'].lines[49], 0.38, 12, 4)

  add_breaker(dict_steps_components['1_1'].lines[52],  0.1, 6, 'open', function(object){
    return 0
  });

  add_breaker(dict_steps_components['1_1'].lines[55],  0.5, 6, 'closed', function(object){
    return 0
  });
  
  add_tx(dict_steps_components['1_1'].lines[56], 0.5, 'deltaStar', function(dict_tx){
  });

  add_breaker(dict_steps_components['1_1'].lines[57],  0.5, 6, 'closed', function(object){
    return 0
  });
  
  add_breaker(dict_steps_components['1_1'].lines[58],  0.5, 6, 'open', function(object){
    return 0
  });

  add_breaker(dict_steps_components['1_1'].lines[59],  0.5, 6, 'closed', function(object){
    return 0
  });
  add_load(dict_steps_components['1_1'].lines[59], 1, true) 
  
  add_breaker(dict_steps_components['1_1'].lines[60],  0.5, 6, 'closed', function(object){
    return 0
  });
  add_load(dict_steps_components['1_1'].lines[60], 1, true)
  
  add_breaker(dict_steps_components['1_1'].lines[61],  0.5, 6, 'closed', function(object){
    return 0
  });

  add_tx(dict_steps_components['1_1'].lines[62], 1, 'starDelta', function(dict_tx){
  });
  
  add_breaker(dict_steps_components['1_1'].lines[68],  0.15, 6, 'open', function(object){
    return 0
  });

  add_load(dict_steps_components['1_1'].lines[69], 0, true);


  // alert(Object.keys(dict_steps_components['1_1']))
  // alert(dict_steps_components['1_1'].txs)
  // var line1 = draw.line(0, y_pos_line1, x, y_pos_line1).stroke({ width: 4 })
  // var line2 = draw.line(x_pos_line1, y_pos_line1, x_pos_line1, 0).stroke({ width: 2 })
  // var line3 = draw.line(x-x_pos_line1, y_pos_line1, x-x_pos_line1, 0).stroke({ width: 2 })

  // // Breakers
  // var polyline1 = draw.polyline([[x_pos_line1-10,y_pos_line1-y/20],[ x_pos_line1-10,y_pos_line1-y/10] ,[x_pos_line1+10,y_pos_line1-y/10], [x_pos_line1+10,y_pos_line1- y/20],[x_pos_line1-10,y_pos_line1-y/20]])

  // polyline1.fill('white')
  // polyline1.stroke({ color: '#000000', width: 4, linecap: 'round', linejoin: 'round' })

  // var polyline2 = draw.polyline([[x-x_pos_line1-10,y_pos_line1-y/20],[x- x_pos_line1-10,y_pos_line1-y/10] ,[x-x_pos_line1+10,y_pos_line1-y/10], [x-x_pos_line1+10,y_pos_line1- y/20],[x-x_pos_line1-10,y_pos_line1-y/20]])

  // polyline2.fill('white')
  // polyline2.stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' })

  // var polyline3 = draw.polyline([[x/2-15,y_pos_line1+15],[x/2-15,y_pos_line1-15] ,[x/2+15,y_pos_line1-15], [x/2+15,y_pos_line1+15],[x/2-15,y_pos_line1+15]])

  // polyline3.fill('white')
  // polyline3.stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' })

  // var x_pos_line2 = x/5

  // var y_pos_line2 = y/2

  // var y_offset = y/5

  // var line5 = draw.line(x_pos_line2, y_pos_line2, x_pos_line2, y-y_offset).stroke({ width: 2 })

  // var line6 = draw.line(x-x_pos_line2, y_pos_line2, x-x_pos_line2, y-y_offset).stroke({ width: 2 })

  // var rad = 20

  // var circle1 = draw.circle(2*rad).center(x_pos_line2,y-y_offset+rad)

  // circle1.fill('none')
  // circle1.stroke({ color: 'orange', width: 4, linecap: 'round', linejoin: 'round' })

  // var rad = 20

  // var circle2 = draw.circle(2*rad).center(x-x_pos_line2,y-y_offset+rad)

  // circle2.fill('none')
  // circle2.stroke({ color: 'blue', width: 4, linecap: 'round', linejoin: 'round' })

  // var circle3 = draw.circle(2*rad).center(x-x_pos_line2,y-y_offset+20+rad)

  // circle3.fill('none')
  // circle3.stroke({ color: 'blue', width: 4, linecap: 'round', linejoin: 'round' })

  // var rad2 = 15

  // var circle3 = draw.circle(2*rad2).center(x-x_pos_line2+20,y-y_offset+10+rad)


  // circle3.fill('none')
  // circle3.stroke({ color: 'blue', width: 4, linecap: 'round', linejoin: 'round' })

  // //var text = draw.text("S").move(x_pos_line2,y-y/10+rad)


  // var line6 = draw.line(x-x_pos_line2+20+rad2,y-y_offset+10+rad, x-y/10, y-y_offset+10+rad).stroke({ width: 2 })

  // //var line6 = draw.line(x-x_pos_line2+20+rad2,y-y_offset+10+rad, x-y/10, y-y_offset+10+rad).stroke({ width: 2 })




  // var connect_line = draw.line(x-x_pos_line2,y ,x-x_pos_line2, y-y_offset+20+2*rad).stroke({ width: 2 })


  // y-y_offset+40+2*rad

  // var polyline5 = draw.polyline([[x-x_pos_line2-10,y-y_offset+40+2*rad+12],[x-x_pos_line2-10,y-y_offset+40+2*rad+40] ,[x-x_pos_line2+10,y-y_offset+40+2*rad+40], [x-x_pos_line2+10,y-y_offset+40+2*rad+ 12],[x-x_pos_line2-10,y-y_offset+40+2*rad+12]])

  // polyline5.fill('white')
  // polyline5.stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' })


  // var bot_line = draw.line(x-x_pos_line2-y/20,y ,x-x_pos_line2+y/20, y).stroke({ width: 3 })


  // var total = 2000




  // var reading1 = 100*Math.ceil(Math.random()*10)
  // var reading2 = 100*Math.ceil(Math.random()*10)

  // var reading3 = total - reading1 - reading2



  // var text1 = draw.text("▲"+reading1+" MW").move(x_pos_line1+10,30).stroke({width:1})
  // var text2 = draw.text("▲"+reading2+" MW").move(x-x_pos_line1+10,30).stroke({width:1})
  // var text3 = draw.text("▼"+reading3+" MW").move(x-x_pos_line2+10,y/2+30).stroke({width:1})
  // var text4 = draw.text("▲"+total+" MW").move(x_pos_line2+10,y/2+y/20).stroke({width:1})

  // var gen = draw.text("〰〰").move(x_pos_line2-15,y-y_offset+rad-7).stroke({width:1})

  // window.setInterval(function(){
  //   // t1, t2 and t3 are the text objects
  //   // In this function, we simply modify the text attribute for each of the readings.
  //   //Generate random readings
  //   var reading1 = 100*Math.ceil(Math.random()*10)
  //   var reading2 = 100*Math.ceil(Math.random()*10)
  //   var reading3 = total - reading1 - reading2
  //   // Modify the text objects
  //   text1.text("▲"+reading1+" MW");
  //   text2.text("▲"+reading2+" MW");
  //   text3.text("▼"+reading3+" MW");
  // }, 1000);//Refresh time in ms

