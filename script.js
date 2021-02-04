// Display current date in browser
if(document.getElementById('showCurrentDate') != null) {
  let date = new Date();
  let localDate = date.toDateString();
  document.getElementById('showCurrentDate').innerHTML = localDate;
}

// Store names and email of people who attends the meeting as an object after it has been added
/**
let = attendanceInfo = [];

function handleEvent(Event) {
  
  // Stops 'Add' from adding more than one info
  event.preventDefault();
  
  const data = new FormData(event.target);
  
  // Takes input value and returns it in an object
  const value = Object.fromEntries(data.entries());
  
  // Clears form for next entry
  const form = document.querySelector('form').reset();
  
  let currentUser = document.getElementById('currentUserName').value;
  
  attendanceInfo.push({ value });
  
  // Displays data input 
  console.log(attendanceInfo);
}
if (document.querySelector('form') != null){
  const form = document.querySelector('form');
  form.addEventListener('submit', handleEvent);
}
**/

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