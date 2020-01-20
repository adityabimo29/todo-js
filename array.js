let data = document.querySelector('.add');
let ul   = document.querySelector('.my-ul');
let items= document.querySelectorAll('li');
let ware = ['Champions Of Europe'];
if(localStorage.getItem("todos") !== null){
    ware = [];
    let oldData = localStorage.getItem("todos").split(",");
    for(let i = 0 ; i < oldData.length ; i++){
        ware.push(oldData[i]);
    }
    // ware.push(JSON.stringify(localStorage.getItem("todos").split(",")));
}else{
    ware.push(data.value);
    localStorage.setItem("todos",ware);
}

    

showTodos();

function createList(){
    ware.push(data.value);
    localStorage.setItem("todos",ware);
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


function addEnter(e){
    let item  = e.target;
    
    if(e.which === 13 && item.value.trim().length > 0){
        createList();
        console.log(ware);
    }else{
        showTodos();
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
    localStorage.clear();
    localStorage.setItem("todos",ware);
    console.log(ware);
}


function showTodos(){
    ul.innerHTML = '';
    for(let i = 0 ; i < ware.length ; i++){
        let li = document.createElement('li');
        let input = document.createElement('input');
        input.setAttribute('onkeypress',"javascript: if(event.keyCode == 13) editItem(event)");
        input.value = ware[i];    
        li.appendChild(input);
        
        let removeBtn = document.createElement('span');
        removeBtn.appendChild(document.createTextNode("X"));
        removeBtn.className = "badge badge-danger badge-pill";
        removeBtn.setAttribute("onclick","deleteItem(event)");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.appendChild(removeBtn);
        ul.appendChild(li);
    }
    
}

function editItem(e){
    
    let item  = e.target;
    
    if(e.which === 13 && item.value.trim().length > 0){
        let itemArray = ul.getElementsByTagName('input');
        // alert(itemArray[0].value)
        ware = [];
        for(let i = 0 ; i < itemArray.length ; i++){
                ware.push(itemArray[i].value);
        }
        console.log(ware);
        localStorage.clear();
        localStorage.setItem("todos",ware);
        alert("Edit Successfully.");
    }else{
        showTodos();
        return false;
    }
}


