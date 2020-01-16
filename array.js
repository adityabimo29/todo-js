let data = document.querySelector('.add');
let ul   = document.querySelector('.my-ul');
let items= document.querySelectorAll('li');
let ware = ['Champions Of Europe'];


function createList(){
    ware.push(data.value);
    showTodos();
    data.value = "";
}

function checkLength(){
    return data.value.trim().length ;
}


function add(){

    if(checkLength() > 0){
        createList();
        console.log(ware);
    }else{
        alert("Input your list !");
        data.value = "";
        return false;
    }
}

function deleteItem(e){
    let item  = e.target;
    let itemArray = ul.getElementsByTagName('li');

    for(let i = 0 ; i < itemArray.length ; i++){
        if(itemArray[i] === item.parentNode){
            ware.splice(i,1);
        }
        
    }
    showTodos();
    console.log(ware);
}


function showTodos(){
    ul.innerHTML = '';
    for(let i = 0 ; i < ware.length ; i++){
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(ware[i]));
        
        let removeBtn = document.createElement('span');
        removeBtn.appendChild(document.createTextNode("X"));
        removeBtn.className = "badge badge-danger badge-pill";
        removeBtn.setAttribute("onclick","deleteItem(event)");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.appendChild(removeBtn);
        ul.appendChild(li);
    }
    
}
