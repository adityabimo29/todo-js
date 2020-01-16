let data = document.querySelector('.add');
let ul   = document.querySelector('.my-ul');
let items= document.querySelectorAll('li');
let ware = ['Champions Of Europe'];


function createList(){
    ware.push(data.value);
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
            console.log(itemArray[i]);
            console.log(item.parentNode);
        }
        
    }
    ul.removeChild(item.parentNode);
    console.log(ware);
}
