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
  
  console.log('added', {attendanceInfo} );
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('addAttendanceBtn').addEventListener('click', addInfo);
});



/**
TODO
 *    Change date to SA standard.
 *    Fix line 56. Getting TypeError, needs to be fixed and error free or use first one that has been commente out.
**/
