// Display current date in browser
if(document.getElementById('showCurrentDate') != null) {
  let date = new Date();
  let localDate = date.toDateString();
  document.getElementById('showCurrentDate').innerHTML = localDate;
}

// Store names and email of people who attends the meeting as an object after it has been added
let attendanceInfo = [];

const addInfo = (event) => {  
  
  event.preventDefault();

  let Info = {
    Name: document.getElementById('attendanceName').value,
    Email: document.getElementById('attendanceEmail').value,
    Time: new Date().getTime()
  };
  attendanceInfo.push(Info);
  document.querySelector('form').reset();
  
  // Creates a new button and line break for Info.name and appends every entry as a button
  var newDomBtn = document.createElement('button');
  newDomBtn.innerHTML = Info.Name;
  var newLineBreak = document.createElement('br');
  document.getElementById('getInfo').appendChild(newDomBtn);
  document.getElementById('getInfo').appendChild(newLineBreak);
  
  // DOM button style
  newDomBtn.style.backgroundColor = '#A7C7E7';
  newDomBtn.style.color = 'black';
  newDomBtn.style.fontSize = '13px';
  newDomBtn.style.textDecoration = 'none';
  newDomBtn.style.textAlign = 'center';
  newDomBtn.style.padding = '12px 29px';
  newDomBtn.style.border = 'none';
  newDomBtn.style.margin = '3px';
  newDomBtn.style.borderRadius = 'px';

};

// Creates an event listener to add more people attending the meeting
if (document.getElementById('addAttendanceBtn') != null) {
  document.getElementById('addAttendanceBtn').addEventListener('click', addInfo);
}

// Creates the current user's button to attend the meeting
var currentUser = prompt('Please enter your name');
if (currentUser != null) {
  if (document.getElementById('currentUserName') != null) {
    var getCurrentUserName = document.getElementById('currentUserName').value = currentUser;
  }
}

var currentUserBtn = document.createElement('button');
currentUserBtn.innerHTML = getCurrentUserName;
var firstLineBreak = document.createElement('br');
document.getElementById('getInfo').appendChild(currentUserBtn);
document.getElementById('getInfo').appendChild(firstLineBreak);

currentUserBtn.style.backgroundColor = '#A7C7E7';
currentUserBtn.style.color = 'black';
currentUserBtn.style.fontSize = '13px';
currentUserBtn.style.textDecoration = 'none';
currentUserBtn.style.textAlign = 'center';
currentUserBtn.style.padding = '12px 29px';
currentUserBtn.style.border = 'none';
currentUserBtn.style.margin = '3px';
currentUserBtn.style.borderRadius = 'px';

// Save meeing notes that has been typed


/**
TODO
 *    Change date to SA standard.
 *    Return current users name.
**/
