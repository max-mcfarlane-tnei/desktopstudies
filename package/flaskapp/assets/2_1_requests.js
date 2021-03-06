
socket.on('check_join_draw', function(data_join_draw) {
    if (username === undefined) {
        username = data_join_draw['username']
    }
    if (entity === undefined) {
        entity = data_join_draw['entity']
    }
    if (local === undefined) {
        local = data_join_draw['local']
    }
    if (!(entity.search('local')===-1)){
        local = true
        data_join_draw['local'] = local
    }
    if(0 in $('#sim_status_div')){
        page = "SLDs"
    } else {
        page = "home"
    }
    if (username === data_join_draw['username']) {
        socket.emit('check_join_draw', data_join_draw, function(data_check_rooms) {});
    }
});

socket.on('join_draw', function(data_join_draw) {
    if (room === undefined) {
        socket.emit('join_room', data_join_draw, function(data_join_room) {
            room = data_join_room['room']
            event_draw(data_join_room);
        })
    }
})

socket.on('list_rooms', function(data) {
    socket.emit('list_rooms', data);
});

socket.on('debug', function(data) {
});


socket.on('draw', function(data) {
    event_draw(data);
});

socket.on('check_redraw', function(check_redraw_data) {
    check_redraw_data['entity'] = entity
    console.log(check_redraw_data['network'])
    check_redraw_data['network'] = check_redraw_data['network'][entity]
    console.log(check_redraw_data['network'])

    if(check_redraw_data['page']==page){
        socket.emit('check_redraw', check_redraw_data);
    }
});

socket.on('redraw', function(data) {
    let old_network = network
    let old_step = current_step
    current_step = data['sim_step'];
    view_step = data['view_step']
    console.log(data['network'])
    if ('network' in data) {
        network = data['network'];
    }
    master_draw()
});