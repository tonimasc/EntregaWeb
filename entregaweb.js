var API_BASE_URL = "http://localhost:8080/football";
var auth = "472239d0105b11e6972b001f3bc3e069";
var id ="390DA9FF0F0311E69F66001F3BC3E069";


$("#listar").click(function(e) {
    e.preventDefault();
    getList();
});

$("#obtener").click(function(e) {
    e.preventDefault();
    getUser($("#nombre").val());
});

$("#actualizar").click(function(e) {
    e.preventDefault();
    var newUser = new Object();

    newUser.nombre = $("#nombre").val();
    newUser.email = $("#email").val();
    newUser.balance = $("#balance").val();
    newUser.contraseña = $("#contraseña").val()
    updateUser(newUser);
});

$("#crear").click(function(e) {
    e.preventDefault();

    var newUser = new Object();

    newUser.nombre = $("#nombre").val();
    newUser.email = $("#email").val();
    newUser.balance = $("#balance").val();
    newUser.contraseña = $("#contraseña").val()
    createUser(newUser);
});

$("#eliminar").click(function(e) {
    e.preventDefault(); 
    deleteUser($("#nombre").val());
});

function getUser(userid) {
    var url = API_BASE_URL + '/usuario/' + userid;
    $("#result").text('');
    
    $.ajax({
        url: url,
        type: 'GET',
        headers: {
            "X-Auth-Token": auth
        },
        crossDomain: true,
        dataType: 'json',
        
    }).done(function(data, status, jqxhr) {
            var user = data;
                
                $.each(user, function(i, v) {
                    var user = v;
    
                    $('<br><strong> Name: </strong>' + user.nombre + '<br>').appendTo($('#result'));
                    $('<br><strong> Description: </strong>' + user.email + '<br>').appendTo($('#result'));
                    $('<br><strong> Summary: </strong>' + user.balance + '<br>').appendTo($('#result'));
                    $('<br><strong> Summary: </strong>' + user.contraseña + '<br>').appendTo($('#result'));
                                             
                });
                
    }).fail(function() {
        $("#result").text("No data to show.");
    });
}

function getList() {
    var url = API_BASE_URL + '/usuario';
    $("#result").text('');
    
    $.ajax({
        url : url,
        type : 'GET',
        headers: {
            "X-Auth-Token": auth
        },
        crossDomain : true,
        dataType : 'json',
    }).done(function(data, status, jqxhr) {
                var users = data;
                
                $.each(users, function(i, v) {
                    var users = v;
    
                    $('<br><strong> Name: </strong>' + users.nombre + '<br>').appendTo($('#result'));
                    $('<br><strong> Description: </strong>' + users.email + '<br>').appendTo($('#result'));
                    $('<br><strong> Summary: </strong>' + users.balance + '<br>').appendTo($('#result'));
                    $('<br><strong> Summary: </strong>' + users.contraseña + '<br>').appendTo($('#result'));
                                        
                    
                });
                
    }).fail(function() {
        $("#result").text("No data to show.");
    });

}

function deleteUser(userid) {
    var url = API_BASE_URL + '/usuario' + userid;
    $("#result").text('');

    $.ajax({
        url : url,
        type : 'DELETE',
        headers: {
            "X-Auth-Token": auth
        },
        crossDomain : true,
        dataType : 'json',
    }).done(function(data, status, jqxhr) {
        $('<div class="alert alert-success"> <strong>Ok!</strong> Eliminado correctamente</div>').appendTo($("#result"));              
    }).fail(function() {
        $('<div class="alert alert-danger"> <strong>Oh!</strong> Error </div>').appendTo($("#result"));
    });
}

function createUser(newUser) {
    var url = API_BASE_URL + '/usuario';
    var data = JSON.stringify(newUser);
    $("#result").text('');

    $.ajax({
        url : url,
        type : 'POST',
        headers: {
            "X-Auth-Token": auth
        },
        crossDomain : true,
        dataType : 'json',
        data : data,
        contentType : 'application/json'
    }).done(function(data, status, jqxhr) {
        var user = data;

                $("#result").text('');
                $('<strong> ID: ' + user.nombre + '</strong>').appendTo($('#result'));
                $('<br><strong> Description: </strong>' + user.email + '<br>').appendTo($('#result'));
                $('<br><strong> checklist: </strong>' + user.balance + '<br>').appendTo($('#result'));
                $('<br><strong> Summary: </strong>' +user.contraseña + '<br>').appendTo($('#result'));
                $('<div class="alert alert-success"> <strong>Ok!</strong> User Created</div>').appendTo($("#result"));              
    }).fail(function() {
        $('<div class="alert alert-danger"> <strong>Oh!</strong> Error </div>').appendTo($("#result"));
    });

}

function updateUser(newUser) {
    var url = API_BASE_URL + '/usuario'+ newUser.nombre;
    var data = JSON.stringify(newTodo);
    $("#result").text('');

    $.ajax({
        url : url,
        type : 'PUT',
         headers: {
            "X-Auth-Token": auth
        },
        crossDomain : true,
        dataType : 'json',
        data : data,
        contentType : 'application/json'
    }).done(function(data, status, jqxhr) {
        var user = data;
                $("#result").text('');
                $('<strong> ID: ' + user.nombre + '</strong>').appendTo($('#result'));
                $('<br><strong> Description: </strong>' + user.email + '<br>').appendTo($('#result'));
                $('<br><strong> checklist: </strong>' + user.balance + '<br>').appendTo($('#result'));
                $('<br><strong> Summary: </strong>' +user.contraseña + '<br>').appendTo($('#result'));
                $('<div class="alert alert-success"> <strong>Ok!</strong> User Update</div>').appendTo($("#result"));                 
    }).fail(function() {
        $('<div class="alert alert-danger"> <strong>Oh!</strong> Error </div>').appendTo($("#result"));
    });





