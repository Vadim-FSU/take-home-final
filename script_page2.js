window.onload = function () {

    document.getElementById("EditForm").style.display = "none";

};
function Home() {
    window.location = 'home.html';
}

function allStorage() {

    document.getElementById("result").innerHTML = '';
    document.getElementById("EditForm").style.display = "none";
    var count = 0;

    for (var i = 0; i < localStorage.length; i++) {
        var jsonString = localStorage.getItem(localStorage.key(i));
        var retrievedObject = JSON.parse(jsonString);
        document.getElementById("result").innerHTML += retrievedObject.fname + "<br>";
        document.getElementById("result").innerHTML += retrievedObject.lname + "<br>";
        document.getElementById("result").innerHTML += retrievedObject.sex + "<br>";
        document.getElementById("result").innerHTML += retrievedObject.bday + "<br>" + "<br>";
        count = count + 1;
    }
    if (count == 0)
    {
        document.getElementById("result").innerHTML = "No users.";
    }

    EnableBtn();
}

function maleFilter() {

    document.getElementById("result_sex").innerHTML = '';
    document.getElementById("age_gender").innerHTML = '';
    document.getElementById("EditForm").style.display = "none";

    for (var i = 0; i < localStorage.length; i++) {
        var jsonString = localStorage.getItem(localStorage.key(i));
        var retrievedObject = JSON.parse(jsonString);
        if (retrievedObject.sex == "male") {
            document.getElementById("result_sex").innerHTML += retrievedObject.fname + "<br>";
            document.getElementById("result_sex").innerHTML += retrievedObject.lname + "<br>";
            document.getElementById("result_sex").innerHTML += retrievedObject.sex + "<br>";
            document.getElementById("result_sex").innerHTML += retrievedObject.bday + "<br>" + "<br>";
        }

    }

    EnableBtn();
}

function femaleFilter() {

    document.getElementById("result_sex").innerHTML = '';
    document.getElementById("age_gender").innerHTML = '';
    document.getElementById("EditForm").style.display = "none";

    for (var i = 0; i < localStorage.length; i++) {
        var jsonString = localStorage.getItem(localStorage.key(i));
        var retrievedObject = JSON.parse(jsonString);
        if (retrievedObject.sex == "female") {
            document.getElementById("result_sex").innerHTML += retrievedObject.fname + "<br>";
            document.getElementById("result_sex").innerHTML += retrievedObject.lname + "<br>";
            document.getElementById("result_sex").innerHTML += retrievedObject.sex + "<br>";
            document.getElementById("result_sex").innerHTML += retrievedObject.bday + "<br>" + "<br>";
        }

    }

    EnableBtn();
}

function Female_ageStats() {
    var highest = 0;
    var lowest = 0;
    var average = 0;
    var allAges = [];
    var count = 0;

    document.getElementById("EditForm").style.display = "none";

    for (var i = 0; i < localStorage.length; i++) {
        var jsonString = localStorage.getItem(localStorage.key(i));
        var retrievedObject = JSON.parse(jsonString);

        if(retrievedObject.sex == "female")
        {
            var ageDiff = Date.now() - modifyDate(retrievedObject.bday).getTime();
            var ageDate = new Date(ageDiff);
            age = Math.abs(ageDate.getUTCFullYear() - 1970);
            highest = age;
            lowest = age;
            allAges[i] = age;
            average = average + age;
            count = count + 1;
        }
    }

    for (var j = 0; j < allAges.length; j++) {
        if (allAges[j] > highest) {
            highest = allAges[j];
        }
        if (allAges[j] < lowest) {
            lowest = allAges[j];
        }
    }


    average = Math.floor(Math.abs(average / count));

    if(count > 0)
    {
        document.getElementById("age_gender").innerHTML = "Average Age Female: " + average + "<br>" + "<br>" + "Highest Age Female : " + highest +
        "<br>" + "<br>" + "Lowest Age Female: " + lowest + "<br>" + "<br>";
    }
    else if(count == 0)
    {
        document.getElementById("age_gender").innerHTML = "No female users."
    }

    EnableBtn();
}

function Male_ageStats() {
    var highest = 0;
    var lowest = 0;
    var average = 0;
    var allAges = [];
    var count = 0;

    document.getElementById("EditForm").style.display = "none";

    for (var i = 0; i < localStorage.length; i++) {
        var jsonString = localStorage.getItem(localStorage.key(i));
        var retrievedObject = JSON.parse(jsonString);

        if(retrievedObject.sex == "male")
        {
            var ageDiff = Date.now() - modifyDate(retrievedObject.bday).getTime();
            var ageDate = new Date(ageDiff);
            age = Math.abs(ageDate.getUTCFullYear() - 1970);
            highest = age;
            lowest = age;
            allAges[i] = age;
            average = average + age;
            count = count + 1;
        }
    }

    for (var j = 0; j < allAges.length; j++) {
        if (allAges[j] > highest) {
            highest = allAges[j];
        }
        if (allAges[j] < lowest) {
            lowest = allAges[j];
        }
    }


    average = Math.floor(Math.abs(average / count));

    if(count > 0)
    {
        document.getElementById("age_gender").innerHTML = "Average Age Male: " + average + "<br>" + "<br>" + "Highest Age Male : " + highest +
        "<br>" + "<br>" + "Lowest Age Male: " + lowest + "<br>" + "<br>";
    }
    else if(count == 0)
    {
        document.getElementById("age_gender").innerHTML = "No male users."
    }

    EnableBtn();
}


function modifyDate(input) {
    var parts = input.match(/(\d+)/g);
    return new Date(parts[0], parts[1] - 1, parts[2]);
}

function ageStats() {
    var highest = 0;
    var lowest = 0;
    var average = 0;
    var allAges = [];
    var count = 0;

    document.getElementById("EditForm").style.display = "none";

    for (var i = 0; i < localStorage.length; i++) {
        var jsonString = localStorage.getItem(localStorage.key(i));
        var retrievedObject = JSON.parse(jsonString);
        
        var ageDiff = Date.now() - modifyDate(retrievedObject.bday).getTime();
        var ageDate = new Date(ageDiff);
        age = Math.abs(ageDate.getUTCFullYear() - 1970);
        highest = age;
        lowest = age;
        allAges[i] = age;
        average = average + age;
        count = count + 1;
    }

    for (var j = 0; j < allAges.length; j++) {
        if (allAges[j] > highest) {
            highest = allAges[j];
        }
        if (allAges[j] < lowest) {
            lowest = allAges[j];
        }
    }


    average = Math.floor(Math.abs(average / localStorage.length));

    if(count > 0)
    {
        document.getElementById("result_age").innerHTML = "Average Age: " + average + "<br>" + "<br>" + "Highest Age : " + highest +
        "<br>" + "<br>" + "Lowest Age : " + lowest + "<br>" + "<br>";
    }
    else if (count == 0)
    {
        document.getElementById("result_age").innerHTML = "No users.";
    }


    EnableBtn();
}


function Clear() {
    document.getElementById("EditForm").style.display = "none";
    document.getElementById("result").innerHTML = '';
    document.getElementById("result_sex").innerHTML = '';
    document.getElementById("result_age").innerHTML = '';
    document.getElementById("editbtn").disabled = false;
    document.getElementById("fname2").disabled = false;
    document.getElementById("lname2").disabled = false;
    document.getElementById("fname2").value = "";
    document.getElementById("lname2").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("deletebtn").disabled = false;
    document.getElementById("fname").disabled = false;
    document.getElementById("lname").disabled = false;
    document.getElementById("age_gender").innerHTML = '';
}

function EnableBtn() {
    document.getElementById("editbtn").disabled = false;
    document.getElementById("fname2").disabled = false;
    document.getElementById("lname2").disabled = false;
    document.getElementById("deletebtn").disabled = false;
    document.getElementById("fname").disabled = false;
    document.getElementById("lname").disabled = false;
}

function DeleteUser() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var key = fname.value + lname.value;

    if (fname.value == "" || lname.value == "") {
        window.alert("Please enter a first and last name.");
        fname.focus();
    }
    else if (localStorage.getItem(fname.value + lname.value) == null) {
        window.alert("User does not exist.");
        fname.value = "";
        lname.value = "";
        fname.focus();
    }
    else {
        localStorage.removeItem(key);
        window.alert("User " + fname.value + " " + lname.value + " removed.");
        fname.value = "";
        lname.value = "";
        return Clear();
    }
}

function ShowForm(a) {
    var fname = document.getElementById("fname2");
    var lname = document.getElementById("lname2");
    var key = fname.value + lname.value;

    if (fname.value == "" || lname.value == "") {
        window.alert("Please enter a first and last name.");
        fname.focus();
    }
    else if (localStorage.getItem(fname.value + lname.value) == null) {
        window.alert("User does not exist.");
        fname.value = "";
        lname.value = "";
        fname.focus();
    }
    else if (a == 1) {
        document.getElementById("result").innerHTML = '';
        document.getElementById("result_sex").innerHTML = '';
        document.getElementById("result_age").innerHTML = '';
        document.getElementById("age_gender").innerHTML = '';
        document.getElementById("EditForm").style.display = "block";
        document.getElementById("editbtn").disabled = true;
        document.getElementById("fname2").disabled = true;
        document.getElementById("lname2").disabled = true;
        document.getElementById("deletebtn").disabled = true;
        document.getElementById("fname").disabled = true;
        document.getElementById("lname").disabled = true;
    }
}

function EditUser() {
    let form_fname = document.getElementById("form_fname").value;
    let form_lname = document.getElementById("form_lname").value;
    let gender = document.getElementById("gender").value;
    let gender2 = document.getElementById("gender2").value;
    let DOB = document.getElementById("birthday").value;

    let input_fname = document.getElementById("fname2").value;
    let input_lname = document.getElementById("lname2").value;

    var jsonString = localStorage.getItem(localStorage.key(input_fname + input_lname));
    var usertoedit = JSON.parse(jsonString);

    if (form_fname == "") {
        window.alert("Please enter your first name.");
        document.getElementById("form_fname").focus();
        return;
    }

    if (form_lname == "") {
        window.alert("Please enter your last name.");
        document.getElementById("form_lname").focus();
        return;
    }

    if (document.getElementById("gender").checked == false && document.getElementById("gender2").checked == false) {
        window.alert("Please select a sex.");
        return;
    }

    if (birthday.value == "") {
        window.alert("Please select a birthday.");
        birthday.focus();
        return;
    }

    if (document.getElementById('gender').checked) {
        gender = document.getElementById('gender').value;
    }

    if (document.getElementById('gender2').checked) {
        gender = document.getElementById('gender2').value;
    }

    var newfname = usertoedit.fname;
    var newlname = usertoedit.lname;
    var newgender = usertoedit.sex;
    var newDOB = usertoedit.bday;

    newfname = form_fname;
    newlname = form_lname;
    newgender = gender;
    newDOB = DOB;

    let user = {
        fname: newfname,
        lname: newlname,
        bday: newDOB,
        sex: newgender,
    }

    localStorage.setItem(newfname + newlname, JSON.stringify(user));
    localStorage.removeItem(usertoedit.fname + usertoedit.lname);

    window.alert("User Edited.");

    return Clear();

}