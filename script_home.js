function form_function() {

    var fname =
        document.forms["myForm"]["fname"];
    var lname =
        document.forms["myForm"]["lname"];
    var male =
        document.forms["myForm"]["male"];
    var female =
        document.forms["myForm"]["female"];
    var birthday =
        document.forms["myForm"]["birthday"];


    if (fname.value == "") {
        window.alert("Please enter your first name.");
        fname.focus();
        return false;
    }

    if (lname.value == "") {
        window.alert("Please enter your last name.");
        lname.focus();
        return false;
    }

    if (document.getElementById("gender").checked == false && document.getElementById("gender2").checked == false) {
        window.alert("Please select a sex.");
        return false;
    }

    if (birthday.value == "") {
        window.alert("Please select a birthday.");
        birthday.focus();
        return false;
    }

    return true;
}

function store() {

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let gender = document.getElementById("gender").value;
    let gender2 = document.getElementById("gender2").value;
    let DOB = document.getElementById("birthday").value;

    if (document.getElementById('gender').checked) {
        gender = document.getElementById('gender').value;
    }

    if (document.getElementById('gender2').checked) {
        gender = document.getElementById('gender2').value;
    }

    let user = {
        fname: fname,
        lname: lname,
        bday: DOB,
        sex: gender,
    }

    localStorage.setItem(user.fname + user.lname, JSON.stringify(user));

    window.alert("User added.");

}
function deleteItems() {
    localStorage.clear();
    window.alert("Users deleted.");
}

function Next() {
    if(localStorage.getItem(localStorage.key(0)) == null)
    {
        window.alert("Add at least 1 user before proceeding.");
    }
    else
        window.location = 'page2.html';
}