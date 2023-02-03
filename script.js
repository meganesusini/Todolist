import 'bootstrap';
function addElement() {
    // function which add a line in a table
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");

    let input = document.createElement("input");
    input.type = "checkbox";
    input.className = "form-check-input me-2";

    let td2 = document.createElement("td");

    newElement = document.getElementById("newElement").value;
    tdText = document.createTextNode(newElement);


    let td3 = document.createElement("td");

    let a = document.createElement("a");

    let img = document.createElement("img");
    img.setAttribute('src', 'trash-fill.svg');

    a.appendChild(img);
    td3.appendChild(a);

    td2.appendChild(tdText);

    td1.appendChild(input);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tbody= document.getElementById("tbody").appendChild(tr);
    console.log(document.getElementById("tbody"));
    // document.getElementById("table").appendChild(tbody);

}

function addElement2() {
let tr = document.createElement("tr");
// let td =document.createElement("td");
// let tdText = document.createTextNode("hello");
tr.innerText = "heeloo";
// tr.appendChild(td)
document.getElementById("table").appendChild(document.getElementById("tbody").appendChild(tr));
}

// see this : https://stackoverflow.com/questions/38779538/creating-a-to-do-list
// include("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css");

