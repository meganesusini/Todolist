tasksArray = Array(); // stock all the tasks

let add = document.getElementById("add"); // add button
let input = document.getElementById("input"); // input

let nb = 0;
let lines = Array();


// when we press the add button
add.onclick = function() {

// function addLine() {
    tasksArray.push(input.value); // add a task in the array

    // Add a line in the table
    // Creation of the first TD
    let td1 = document.createElement("td");
    let inputCheck = document.createElement("input");
    inputCheck.type = "checkbox";
    inputCheck.className = "checkbox";

    td1.appendChild(inputCheck);

    // Creation of the second TD
    let td2 = document.createElement("td");
    td2.className = "td2";
    let element = document.createTextNode(document.getElementById("input").value);
    
    td2.appendChild(element);

    // Creation of the third TD
    let td3 = document.createElement("td");
    let a = document.createElement("a");
    a.className = "trash";

    let img = document.createElement("img");
    img.setAttribute('src', 'trash-fill.svg');

    a.appendChild(img);

    td3.appendChild(a);

    // Creation of the TR and add the TDs in the TR
    let tr = document.createElement("tr");
    tr.className = "tr";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    // Add the TR in the table
    document.getElementById("table").appendChild(tr);

    nb += 1;
    //***//

    let trashes = document.getElementsByClassName("trash");
    let trs = Array.from(document.getElementsByClassName("tr"));
    for (let i = 0; i < trashes.length; i++) {
        trashes[i].onclick = function() {
            trs[i].remove();
        };
    }

    let checkboxes = document.getElementsByClassName("checkbox");
    let td2s = document.getElementsByClassName("td2");
    for (let i=0; i<checkboxes.length; i++) {
        checkboxes[i].onchange = function() {
            if(checkboxes[i].checked==true) {
               td2s[i].innerHTML = "<del>" + tasksArray[i] + "</del>";
            //    td2s[td2s.length-1].innerHTML = "<del>" + td2s[i].textContent + "</del>";

            }
            else if (checkboxes[i].checked == false) {
                td2s[i].innerHTML = tasksArray[i];
            }
        }
    }
    
    // for (let i=0; i<checkboxes.length; i++) {
    //     checkboxes[i].checked = console.log("hello");
    // }
    

    // let trashesArray = document.getElementsByTagName("a");
    // for (let i=0; i<trashesArray.length; i++) {
    //     trashesArray[i].onclick = function () {
    //         console.log(i);
    //     }
    // }
    
}

// Function which select all the checkboxes
// function selectCheckboxes() {
//     // When a checkbox is checked
//     let checkboxes = document.getElementsByClassName("checkbox");
//     // console.log("length : " + checkboxes.length);
//     // console.log("check 1 : " + checkboxes[0].checked);
    
//     return checkboxes;
// }

// let lineTR = addLine();
// console.log(lineTR);




// console.log(trashesArray);