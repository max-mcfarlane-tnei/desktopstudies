
  function update_line_modals(step_data){
        for (let line_ in components.lines) {
      line_id_LF = line_.split("#")[0]
      line_instance = components.lines[line_]
      line_instance.modal_data = []
      if (line_id_LF in step_data["lines_active_power"]) {
        line_instance.modal_data = line_instance.modal_data.concat(
          ["Active power: " + step_data["lines_active_power"][line_id_LF] + " MW"]
        )
      }
      if (line_id_LF in step_data["lines_reactive_power"]) {
        line_instance.modal_data = line_instance.modal_data.concat(
          ["Reactive power: " + step_data["lines_reactive_power"][line_id_LF] + " MVAr"]
        )
      }
      if (line_id_LF in step_data["busbars_voltage"]) {
        line_instance.modal_data = line_instance.modal_data.concat(
          ["Voltage: " + step_data["busbars_voltage"][line_id_LF] + " V"]
        )
      }
      components.lines[line_] = line_instance
      if(line_instance.data_changed_callback !== undefined){line_instance.data_changed_callback(line_instance.data)}
      //  redraw text labels
    }
  }
  function update_generator_modals(step_data){
    let gen_instance;
    for (let gen_ in components.generators) {
      gen_instance = components.generators[gen_]
      gen_instance.modal_data = []
      if (gen_ in step_data["generators_active_power"]) {
        gen_instance.modal_data = gen_instance.modal_data.concat(
          ["Active power: " + step_data["generators_active_power"][gen_] + " [MW]"]
        )
      }
      if (gen_ in step_data["generators_reactive_power"]) {
        gen_instance.modal_data = gen_instance.modal_data.concat(
          ["Reactive power: " + step_data["generators_reactive_power"][gen_] + " [MVAr]"]
        )
      }
    }
  }
  function update_transformer_modals(step_data){
    for (let tx_ in components.transformers) {
      tx_instance = components.transformers[tx_]
      tx_instance.modal_data = []
      if (tx_ in step_data["transformers_loading"]) {
        tx_instance.modal_data = tx_instance.modal_data.concat(
          ["Utilisation: " + step_data["transformers_loading"][tx_] + " [MVA]"]
        )
      }
    }
  }

  function update_line_data_views(step_data){
        for (let line_ in components.lines) {
      line_id_LF = line_.split("#")[0]
      line_instance = components.lines[line_]
      line_instance.data = []
      if (line_id_LF in step_data["lines_active_power"]) {
        line_instance.data["lines_active_power"] =
          step_data["lines_active_power"][line_id_LF]

      }
      if (line_id_LF in step_data["lines_reactive_power"]) {
        line_instance.data["lines_reactive_power"] =
          step_data["lines_reactive_power"][line_id_LF]

      }
      if (line_id_LF in step_data["busbars_voltage"]) {
        line_instance.data["busbars_voltage"] = step_data["busbars_voltage"][line_id_LF]

      }
      components.lines[line_] = line_instance
      if(line_instance.data_changed_callback !== undefined){line_instance.data_changed_callback()}
      //  redraw text labels
    }


  }

  function update_dataviews(step_data){
    for(let id_dv in components.dataviews){
      let text_list = [];
      var units = "";
      for(let component_parameter in step_data){
        if (id_dv in step_data[component_parameter]) {
          if(component_parameter.includes('reactive')){
            units = " MVAr"
          } else if(component_parameter.includes('active')){
            units = " MW"
          } else if(component_parameter.includes('loading')){
            units = " MVA"
          } else if(component_parameter.includes('voltage')){
            units = " V p.u."
          } else if(component_parameter.includes('taps')){
            units = " ."
          }

          text_list = text_list.concat(
            [String(step_data[component_parameter][id_dv]) + units]
          );
        }
      }

      redraw_dataview(id_dv, text_list);
    }
  }

  function update_line_colours(step_data_){

    for(let idl in components.lines){
      let line_instance = components.lines[idl]
      let line_id_LF = idl.split("#")[0]
      if(((step_data_["lines_loading"][line_id_LF] !== 0)&&(step_data_["lines_loading"][line_id_LF] !== undefined))||
        ((step_data_["busbars_voltage"][line_id_LF] !== 0)&&(step_data_["busbars_voltage"][line_id_LF] !== undefined))||
        ((step_data_["transformers_loading"][line_id_LF] !== 0)&&(step_data_["transformers_loading"][line_id_LF] !== undefined))){

        line_instance.info.o_line.attr({stroke: line_instance.info.dict_styling.stroke.live_color});

      } else if (((step_data_["lines_loading"][line_id_LF] === undefined))&&
        ((step_data_["busbars_voltage"][line_id_LF] === undefined))&&
        ((step_data_["transformers_loading"][line_id_LF] === undefined))){

        if(highlight_undefined){
          line_instance.info.o_line.attr({stroke: "red"});
        }
      }
    }

  }

  function update_breaker_colours(step_data_){
    for(let idb in components.breakers){
      let breaker_instance = components.breakers[idb]
      let idl = breaker_instance.line.line_idx
      let line_id_LF = idl.split("#")[0]
      if(((step_data_["lines_loading"][line_id_LF] !== 0)&&(step_data_["lines_loading"][line_id_LF] !== undefined))||
        ((step_data_["busbars_voltage"][line_id_LF] !== 0)&&(step_data_["busbars_voltage"][line_id_LF] !== undefined))||
        ((step_data_["transformers_loading"][line_id_LF] !== 0)&&(step_data_["transformers_loading"][line_id_LF] !== undefined))){
        breaker_instance.UIElement.attr({
          'stroke': breaker_instance.line.dict_styling.stroke.live_color,
          'fill': breaker_instance.line.dict_styling.stroke.live_color
        })
      }
    }
  }

  function update_generator_colours(step_data_){
    for(let idg in components.generators){
      let gen_instance = components.generators[idg]
      let idl = gen_instance.info.lineID
      let line_instance = components.lines[idl]
      let line_id_LF = idl.split("#")[0]
      if((step_data_["generators_active_power"][idg] !== 0)&&(step_data_["generators_active_power"][idg] !== undefined)){
        gen_instance.UIElement.find('.circle-class').attr({
          'stroke': line_instance.info.dict_styling.stroke.live_color
        })
      }
    }
  }

  function inc_state(network_){
    current_step += 1;
    //alert(current_step)
    fetch_sim_data(network_, current_step, option, scenario, update_sim_data);
  }

  /**
   * draws components from
   dict_components object
   * @param {Dictionary} dictionary of object prototypes used to build and draw components
   * @return {None}
  **/
  function draw_network(dict_components, network_, step){

    construct_coord_display();

    construct_lines(dict_components);

    construct_breakers(dict_components, network_, step);

    construct_labels(dict_components);

    construct_txs(dict_components);

    construct_gens(dict_components);

    construct_inductors(dict_components);

    construct_isolators(dict_components);

    construct_dataviews(dict_components);

    // redraw_dataviews();

    construct_SGTs(dict_components);
  }

  function master_draw(){
    prepare_canvas(x, y);
    dict_components = networks_undrawn[network]
    draw_network(dict_components, network, current_step);
    fetch_sim_data(network, current_step, option, scenario, function(stage_, step_data){
      steps[stage_] = step_data;
      update_line_modals(step_data);
      update_generator_modals(step_data);
      update_transformer_modals(step_data);
      update_dataviews(step_data);
      update_line_colours(step_data);
      update_breaker_colours(step_data);
      update_generator_colours(step_data);
      }
    );
  }

  function event_draw(draw_data){
    network = draw_data['network']
    current_step = draw_data['sim_step'];
    master_draw();
  }

  // Document Initialisation
  $(document).ready(function(){


  });

  var x = undefined;
  var y = undefined;
  var x_scaling = undefined;
  var y_scaling = undefined;
  var font_size = undefined;

  var socket = io();
//  let current_step = -1
//  let steps = []

   //Define parent attributes
 //  var x = document.getElementById('myDiv').clientWidth;
  x = window.innerWidth;
  // var y = document.getElementById('myDiv').clientHeight;
  y = window.innerHeight;

  x_scaling = x/1150
  y_scaling = y/1050

  font_size = 14 *  Math.min(x_scaling, y_scaling)

  dict_components = undefined

  scale_lines(networks_undrawn);
  scale_labels(networks_undrawn);
  scale_dataviews(networks_undrawn);

  var room = undefined

  socket.on('check_join_draw', function(data_join_draw) {
    socket.emit('list_rooms', data_join_draw, function (data_list_rooms){});
  });

  socket.on('join_draw', function (data_join_draw){
    if(room === undefined){
      room = data_join_draw['room']
      socket.emit('join_room', data_join_draw, function(data_join_room){
        event_draw(data_join_room);
      })
    }
  })

  socket.on('list_rooms', function(data) {
    socket.emit('list_rooms', data);
  });


  socket.on('draw', function(data) {
    event_draw(data);
  });

  socket.on('redraw', function(data) {
    current_step = data['sim_step'];
    socket.emit('sync_sim_step', {'sim_step': current_step});
    master_draw();
  });


  socket.on('shout_client', function(data){
    alert("Client: ahhhhh");
  });

  socket.on('shout_server', function (data){
    socket.emit('shout_server', data);
  })

  // Find your root SVG element
  var svg = document.querySelector("#drawing");

  // Create an SVGPoint for future math
  var pt = svg.createSVGPoint();

  // Get point in global SVG space
  function cursorPoint(evt){
    pt.x = evt.clientX; pt.y = evt.clientY;
    return pt.matrixTransform(svg.getScreenCTM().inverse());
  }






