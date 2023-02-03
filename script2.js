tasksArray = Array();

let add = document.getElementById("add");
let input = document.getElementById("input");

add.onclick = function() {
    tasksArray.push(input.value);

    let td1 = document.createElement("td");
    let inputCheck = document.createElement("input");
    inputCheck.type = "checkbox";

    td1.appendChild(inputCheck);

    let td2 = document.createElement("td");
    let element = document.createTextNode(document.getElementById("input").value);
    
    td2.appendChild(element);

    let td3 = document.createElement("td");
    let a = document.createElement("a");

    let img = document.createElement("img");
    img.setAttribute('src', 'trash-fill.svg');

    a.appendChild(img);
    td3.appendChild(a);



    let tr = document.createElement("tr");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    document.getElementById("table").appendChild(tr);

    let trashesArray = document.getElementsByTagName("a");
    for (let i=0; i<trashesArray.length; i++) {
        trashesArray[i].onclick = function () {
            console.log(i);
        }
    }
    
}



// console.log(trashesArray);