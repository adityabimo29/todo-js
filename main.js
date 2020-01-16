let data = document.querySelector('.add');
let ul   = document.querySelector('.my-ul');
let items= document.querySelectorAll('li');


function createList(){
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(data.value));
    
    let removeBtn = document.createElement('span');
    removeBtn.appendChild(document.createTextNode("X"));
    removeBtn.className = "badge badge-danger badge-pill";
    removeBtn.setAttribute("onclick","deleteItem(event)");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.appendChild(removeBtn);
    ul.appendChild(li);
    data.value = "";
}

function checkLength(){
    return data.value.trim().length ;
}


function add(){

    if(checkLength() > 0){
        createList();
    }else{
        alert("Input your list !");
        data.value = "";
        return false;
    }
}

function deleteItem(e){
    let item  = e.target;
    ul.removeChild(item.parentNode);
}
