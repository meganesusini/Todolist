let add = document.getElementById("add"); 
let input = document.getElementById("input"); 

function addLine() {
    // Add a line in the table
    // Creation of the first TD
    let td1 = document.createElement("td");
    td1.className = "td1";

    let label = document.createElement("label");
    label.className = "container";

    let inputCheck = document.createElement("input");
    inputCheck.type = "checkbox";

    let span = document.createElement("span");
    span.className = "checkmark";

    label.appendChild(inputCheck);
    label.appendChild(span);

    td1.appendChild(label);

    // Creation of the second TD
    let td2 = document.createElement("td");
    td2.className = "td2";
    let element = document.createTextNode(document.getElementById("input").value);
    
    td2.appendChild(element);

    // Creation of the third TD
    let td3 = document.createElement("td");
    td3.className = "td3";
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
    //***//
}

// when we press the add button
add.onclick = function() {

    addLine();    

    let trashes = Array.from(document.getElementsByClassName("trash"));
    let trs = Array.from(document.getElementsByClassName("tr"));

    let checkboxes = Array.from(document.getElementsByClassName("checkmark"));
    let td2s = Array.from(document.getElementsByClassName("td2"));

    for (let i = 0; i < trashes.length; i++) {
        trashes[i].onclick = function() {
            trs[i].remove();
        };
    }

    for (let i=0; i<checkboxes.length; i++) {
        checkboxes[i].onclick = function() {

            if(!checkboxes[i].previousElementSibling.checked==true) {
                td2s[i].innerHTML = "<del>" + td2s[i].textContent + "</del>";
             }
             else{
                td2s[i].innerHTML = td2s[i].textContent;

             }
            
        }
    } 


    
    
}