// to get date 
var day = document.getElementById('day');
var mounth = document.getElementById('mounth');
var year = document.getElementById('mounth');
var day1 = new Date('2020-03-16');
day1.getDate();
day.textContent = day1;


var input1 = document.getElementById('input1');
var date = document.getElementById('date');
var toDoList = document.getElementById('toDoList');
var submit = document.getElementById('submit');
var listObj = [];// arry of objects 
var input1Value;// to take the value from the input 
var dateValue;// to take the date 
var datali = [];// arry to retrive data

// constructor
function List(title, theDate) {
    this.title = title;
    this.theDate = theDate;
    listObj.push(this);
}

submit.addEventListener('click', toAddList);
// var liElement=document.createElement('li');
function toAddList() {
    event.preventDefault();
    input1Value = document.getElementById('input1').value;
    dateValue = document.getElementById('date').value;
    if (input1Value || dateValue !== null) {
        new List(input1Value, dateValue);
    }
    set();
    renderList();
    location.reload();// to relode the page 
    document.getElementById('form').reset();// to reset the form 

}
// to show the list 
function renderList() {
    datali = [];
    for (var x = 0; x < listObj.length; x++) {
        datali.push(listObj[x]);
    }

    for (var i = 0; i < datali.length; i++) {
        var div = document.createElement('div');
        toDoList.appendChild(div);
        div.setAttribute('id', i);
        var li1 = document.createElement('li');
        var li2 = document.createElement('h4');
        div.appendChild(li1);
        div.appendChild(li2);
        li1.textContent = ` ${datali[i].title} `;
        li2.textContent = `${datali[i].theDate}`;
        var x = document.createElement('h4');
        x.textContent = 'x';
        x.setAttribute('class', 'x');
        div.appendChild(x);
    }

}
// delete row
// var x = document.getElementsByClassName('x');
// x.addEventListener('click', deleteRow);
// function deleteRow() {
    
// }






// to set data in local storage 
function set() {
    var setLocaldata = JSON.stringify(listObj);
    localStorage.setItem('toDo', setLocaldata);
}
// to get data from local storge 
function get() {
    var getLicaldata = JSON.parse(localStorage.getItem('toDo'));
    if (getLicaldata) {
        listObj = getLicaldata;
    }
}
get();
renderList();