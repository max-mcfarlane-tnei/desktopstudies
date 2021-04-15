
  function update_line_modals(step_data){
        for (let line_ in components.lines) {
      line_id_LF = line_.split("#")[0]
      line_instance = components.lines[line_]
      line_instance.data = []
      if (line_id_LF in step_data["lines_active_power"]) {
        line_instance.data["lines_active_power"] = line_instance.data.concat(
          ["Active power: " + step_data["lines_active_power"][line_id_LF] + " MW"]
        )
      }
      if (line_id_LF in step_data["lines_reactive_power"]) {
        line_instance.data["lines_reactive_power"] = line_instance.data.concat(
          ["Reactive power: " + step_data["lines_reactive_power"][line_id_LF] + " MVAr"]
        )
      }
      if (line_id_LF in step_data["busbars_voltage"]) {
        line_instance.data["busbars_voltage"] = line_instance.data.concat(
          ["Voltage: " + step_data["busbars_voltage"][line_id_LF] + " V"]
        )
      }
      components.lines[line_] = line_instance
      if(line_instance.data_changed_callback !== undefined){line_instance.data_changed_callback()}
      //  redraw text labels
    }
  }

  /**
   * callback function for updating step data when it has been retrieved
   * @param {integer} step number
   * @param {dictionary} data retrieved from this state
   * @return {None}
  **/
  function update_sim_data(step, step_data){
    steps[step] = step_data
    update_line_modals(step_data)
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

    construct_lines(dict_components);

    construct_breakers(dict_components, network_, step);

    construct_labels(dict_components);

    construct_txs(dict_components);

    construct_gens(dict_components);

    construct_inductors(dict_components);

    construct_isolators(dict_components);

    construct_dataviews(dict_components);

    construct_SGTs(dict_components);
  }

  function master_draw(){
    prepare_canvas(x, y);
    dict_components = networks_undrawn[network]
    draw_network(dict_components, network, current_step);
    fetch_sim_data(network, current_step, option, scenario, update_sim_data);
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


  socket.on('draw', function(data) {
    network = data['network']
    current_step = data['sim_step'];
    master_draw();
  });

  socket.on('redraw', function(data) {
    current_step = data['sim_step'];
    master_draw();
  });


