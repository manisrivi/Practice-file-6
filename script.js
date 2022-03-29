// Label function
function Label(element, values) {
    var ele = document.createElement(element);
    ele.innerHTML = values;
    return ele;
}

// Input Box function
function InputBox(element, type, text, id, name) {
    var res = document.createElement(element);
    res.setAttribute(type, text);
    res.setAttribute(id, name);
    return res;
}

// First Name 
let label1 = Label("label", "FirstName ");
document.body.append(label1);

let Input1 = InputBox("input", "type", "text", "id", "firstname");
document.body.append(Input1);

let br1 = document.createElement("br");
document.body.append(br1);

// Last Name
let label2 = Label("label", "LastName ");
document.body.append(label2);

let Input2 = InputBox("input", "type", "text", "id", "lastname");
document.body.append(Input2);

let br2 = document.createElement("br");
document.body.append(br2);

// Email
let label3 = Label("label", "Email ");
document.body.append(label3);

let Input3 = InputBox("input", "type", "email", "id", "email");
document.body.append(Input3);

let br3 = document.createElement("br");
document.body.append(br3);

//Password
let label4 = Label("label", "Password ");
document.body.append(label4);

let Input4 = InputBox("input", "type", "password", "id", "password");
document.body.append(Input4);

let br4 = document.createElement("br");
document.body.append(br4);

// button
let btn = document.createElement("button");
btn.innerText = "Click me";
btn.addEventListener("click", log);
document.body.append(btn);

// console.log function
function log() {
    let name1 = document.getElementById("firstname").value;
    let name2 = document.getElementById("lastname").value;
    let name3 = document.getElementById("email").value;
    let name4 = document.getElementById("password").value;

    console.log(name1);
    console.log(name2);
    console.log(name3);
    console.log(name4);
}
