// to get date 
// var h2date=document.getElementById('h2date');
// var d =new date();
// d.setFullYear(2020);
// document.getElementById("h2date").innerHTML = d;



var input1 =document.getElementById('input1');
var date=document.getElementById('date');
var toDoList=document.getElementById('toDoList');
var submit=document.getElementById('submit');
var listObj=[];
var input1Value;
var dateValue;
var datali=[];
function List (title, theDate ){
this.title=title;
this.theDate=theDate;
listObj.push(this);
}

submit.addEventListener('click',toAddList);
// var liElement=document.createElement('li');
function toAddList() {
    event.preventDefault();
     input1Value=document.getElementById('input1').value;
     dateValue=document.getElementById('date').value;
    if(input1Value || dateValue !== null){
        new List(input1Value, dateValue);
    }
  
    set();
    renderList();
    location.reload();
    document.getElementById('form').reset();

}
function renderList() {
    datali=[];
    for(var x = 0 ; x<listObj.length;x++){
        datali.push(listObj[x]);
    }

    for(var i = 0 ; i<datali.length;i++){
      
        var div= document.getElementById('contaner');
        toDoList.appendChild(div);
        var li1=document.createElement('li');
        var li2=document.createElement('h4');
        toDoList.appendChild(li1);
        toDoList.appendChild(li2);
        li1.textContent=` ${datali[i].title} `;
        li2.textContent=`${datali[i].theDate}`;

    }

}
function set() {
    var setLocaldata=JSON.stringify(listObj);
    localStorage.setItem('toDo',setLocaldata);
}
function get() {
    var getLicaldata=JSON.parse(localStorage.getItem('toDo'));
    if(getLicaldata){
        listObj=getLicaldata;
    }
}
get();
renderList();