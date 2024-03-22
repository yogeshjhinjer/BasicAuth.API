var empId = '';
$(document).ready(function () {
   // showEmployees();
    $("#btnUpdateEmp").click(function () {

        if (empId != '') {
            updateEmployee(empId)
        }
        else {
            alert("No proper emp id foud for update!")
        }

    });
});

function createEmployee() {
    var url = "/api/Employees";
    var employee = {};

    if ($('#txtFirstName').val() === '' || $('#txtLastName').val() === '' || $('#txtGender').val() === '' ||
        $('#txtCity').val() === '' || $('#txtIsActive').val() === '') {
        alert("No filed can be left blank");
    }
    else {
        employee.FirstName = $('#txtFirstName').val();
        employee.LastName = $('#txtLastName').val();
        employee.Gender = $('#txtGender').val();
        employee.City = $('#txtCity').val();
        employee.IsActive = $('#txtIsActive').val();

        if (employee) {
            $.ajax({
                url: url,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify(employee),
                type: "Post",
                success: function (result) {
                    clearForm();
                    showEmployees();
                },
                error: function (msg) {
                    alert(msg);
                }

            });
        }
    }
}

function Login() {
    showEmployees();
}

function showEmployees() {
   
    var username = $('#username').val();
    var password = $('#password').val();
    var url = "/api/Employees/GetAllEmployees/";
    if (username =="NormalUser")
        url = "/api/Employees/GetFewEmployees/";
    else if (username =="AdminUser")
        url = "/api/Employees/GetMoreEmployees/";

    let xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.setRequestHeader('Authorization', make_base_auth(username, password));
    xhr.setRequestHeader('Access-Control-Allow-Origin', "*");

    try {
        xhr.send();
        xhr.onload = function () {
           
            if (xhr.status != 200) { // HTTP error?
                // handle error
                //alert('Error: ' + xhr.status);
                alert("Please use - 1. username:- NormalUser and password:12345 , 2. username:- AdminUser and password:12345, 3. username:- SuperAdminlUser and password:12345")
                return;
            }

            // get the response from xhr.response
        };

        xhr.onprogress = function (event) {
          
            // report progress
            if (event.currentTarget.responseText) {
                var result = JSON.parse(event.currentTarget.responseText);
                if (result.Message) {
                    alert(result.Message);
                    return;
                }
                $("#login").hide();
                $("#usernameid").hide();
                $("#passwordid").hide();
                $("#divId").show();
                $("#btnRandom").show();
                $("#btnAllUser").show();
                $("#tblShowHide").show();
                $("#tblEmpBody").html('');
                var row = '';
                for (var i = 0; i < result.length; i++) {
                    row = row
                        + "<tr>"
                        + "<td>" + result[i].FirstName + "</td>"
                        + "<td>" + result[i].LastName + "</td>"
                        + "<td>" + result[i].Gender + "</td>"
                        + "<td>" + result[i].City + "</td>"
                        + "<td>" + result[i].IsActive + "</td>"
                        + "<td><button class='btn btn-primary' onClick='editEmployees(" + result[i].Id + ")'>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class='btn btn-danger' onClick='deleteEmployees(" + result[i].Id + ")'>Delete</button></td>"
                }
                if (row != '') {
                    $("#tblEmpBody").append(row);
                }
            }
        };

        xhr.onerror = function () {
            
            // handle non-HTTP error (e.g. network down)
        };
    } catch (err) { // instead of onerror
        alert("Request failed");
    }
   
}


function randomUser() {
    
    var id = $("#txtid").val();;
    var url = "/api/Employees/GetFilterEmployees?id=" + id;
    var username = "NormalUser";
    var password = "12345";

    let xhr1 = new XMLHttpRequest();

    if (window.XMLHttpRequest) { // for IE7+, Firefox, Chrome, Opera, Safari
        xhr1 = new XMLHttpRequest();
    } else { // for IE6, IE5
        xhr1 = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr1.open('GET', url);
    xhr1.setRequestHeader('Authorization', make_base_auth(username, password));
    xhr1.setRequestHeader('Access-Control-Allow-Origin', "*");

    try {
        xhr1.send();
        xhr1.onload = function () {
           
            if (xhr1.status != 200) { // HTTP error?
                // handle error
                //alert('Error: ' + xhr.status);
                return;
            }

            // get the response from xhr.response
        };

        xhr1.onprogress = function (event) {
           
            // report progress
            if (event.currentTarget.responseText) {
                var result = JSON.parse(event.currentTarget.responseText);
                if (result.Message) {
                    alert(result.Message);
                    return;
                }
                $("#tblEmpBody").html('');
                var row = '';
                for (var i = 0; i < result.length; i++) {
                    row = row
                        + "<tr>"
                        + "<td>" + result[i].FirstName + "</td>"
                        + "<td>" + result[i].LastName + "</td>"
                        + "<td>" + result[i].Gender + "</td>"
                        + "<td>" + result[i].City + "</td>"
                        + "<td>" + result[i].IsActive + "</td>"
                        + "<td><button class='btn btn-primary' onClick='editEmployees(" + result[i].Id + ")'>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class='btn btn-danger' onClick='deleteEmployees(" + result[i].Id + ")'>Delete</button></td>"
                }
                if (row != '') {
                    $("#tblEmpBody").append(row);
                }
            }
        };

        xhr1.onerror = function () {
           
            // handle non-HTTP error (e.g. network down)
        };
    } catch (err) { // instead of onerror
        alert("Request failed");
    }

}


function GetAllUser() {
   
    $("#txtid").val('');
    var url = "/api/Employees/GetFewEmployees";
    var username = "NormalUser";
    var password = "12345";

    let xhr1 = new XMLHttpRequest();

    if (window.XMLHttpRequest) { // for IE7+, Firefox, Chrome, Opera, Safari
        xhr1 = new XMLHttpRequest();
    } else { // for IE6, IE5
        xhr1 = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr1.open('GET', url);
    xhr1.setRequestHeader('Authorization', make_base_auth(username, password));
    xhr1.setRequestHeader('Access-Control-Allow-Origin', "*");

    try {
        xhr1.send();
        xhr1.onload = function () {
            
            if (xhr1.status != 200) { // HTTP error?
                // handle error
                //alert('Error: ' + xhr.status);
                return;
            }

            // get the response from xhr.response
        };

        xhr1.onprogress = function (event) {
           
            // report progress
            if (event.currentTarget.responseText) {
                var result = JSON.parse(event.currentTarget.responseText);
                if (result.Message) {
                    alert(result.Message);
                    return;
                }
                $("#tblEmpBody").html('');
                var row = '';
                for (var i = 0; i < result.length; i++) {
                    row = row
                        + "<tr>"
                        + "<td>" + result[i].FirstName + "</td>"
                        + "<td>" + result[i].LastName + "</td>"
                        + "<td>" + result[i].Gender + "</td>"
                        + "<td>" + result[i].City + "</td>"
                        + "<td>" + result[i].IsActive + "</td>"
                        + "<td><button class='btn btn-primary' onClick='editEmployees(" + result[i].Id + ")'>Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class='btn btn-danger' onClick='deleteEmployees(" + result[i].Id + ")'>Delete</button></td>"
                }
                if (row != '') {
                    $("#tblEmpBody").append(row);
                }
            }
        };

        xhr1.onerror = function () {
           
            // handle non-HTTP error (e.g. network down)
        };
    } catch (err) { // instead of onerror
        alert("Request failed");
    }

}

function make_base_auth(user, password) {
    var tok = user + ':' + password;
    var hash = btoa(tok);
    return "Basic " + hash;
}
function deleteEmployees(id) {
    var url = "/api/Employees/" + id;
    $.ajax({
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        type: "Delete",
        success: function (result) {
            clearForm();
            alert(JSON.stringify(result));
            showEmployees();
        },
        error: function (msg) {
            alert(msg);
        }

    });
}

function editEmployees(id) {
    var url = "/api/Employees/" + id;
    $.ajax({
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        type: "Get",
        success: function (result) {
            if (result) {
                empId = result.Id;
                $('#txtFirstName').val(result.FirstName);
                $('#txtLastName').val(result.LastName);
                $('#txtGender').val(result.Gender);
                $('#txtCity').val(result.City);
                $('#txtIsActive').val(result.IsActive);
            }
            $("#btnCreateEmp").prop('disabled', true);
            $("#btnUpdateEmp").prop('disabled', false);

        },
        error: function (msg) {
            alert(msg);
        }

    });
}

function updateEmployee(id) {
    var url = "/api/Employees/" + id;
    var employee = {};
    employee.FirstName = $('#txtFirstName').val();
    employee.LastName = $('#txtLastName').val();
    employee.Gender = $('#txtGender').val();
    employee.City = $('#txtCity').val();
    employee.IsActive = $('#txtIsActive').val();

    if (employee) {
        $.ajax({
            url: url,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(employee),
            type: "Put",
            success: function (result) {
                clearForm();
                showEmployees();
                $("#btnCreateEmp").prop('disabled', false);
                $("#btnUpdateEmp").prop('disabled', true);
            },
            error: function (msg) {
                alert(msg);
            }

        });
    }
}

function clearForm() {
    $('#txtFirstName').val('');
    $('#txtLastName').val('');
    $('#txtGender').val('');
    $('#txtCity').val('');
    $('#txtIsActive').val('');
}
