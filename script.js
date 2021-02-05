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
    name: document.getElementById('attendanceName').value,
    email: document.getElementById('attendanceEmail').value
  };
  
  attendanceInfo.push(Info);
  document.querySelector('form').reset();
  
  document.getElementById('getInfo').innerHTML = Info.name;
  
  //console.log('added', {attendanceInfo} );
  
  localStorage.setItem('Info', JSON.stringify(Info));
};

if (document.getElementById('addAttendanceBtn') != null) {
	document.getElementById('addAttendanceBtn').addEventListener('click', addInfo);
}

/**
TODO
 *    Change date to SA standard.
 *    Loop through object and display in html as a list.
**/
