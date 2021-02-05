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

var AutoSave = (function(){

	var timer = null;

	function getEditor(){

		var elems = document.getElementsByTagName("textarea")
		if (elems.length <= 0)
			return null;

		return elems[0];
	}


	function save(){

		var editor = getEditor(); 
                if (editor) {
		    localStorage.setItem("AUTOSAVE_" + document.location, editor.value )
                }

	}


	function restore(){

		var saved = localStorage.getItem("AUTOSAVE_" + document.location)
		var editor = getEditor();
		if (saved && editor){

			editor.value = saved; 
		}
	}

	return { 

		start: function(){

			var editor = getEditor(); 

		 
			if (editor.value.length <= 0)
				restore();

			if (timer != null){
				clearInterval(timer);
				timer = null;
			}

			timer = setInterval(save, 5000);


		},

		stop: function(){

			if (timer){ 
				clearInterval(timer);
				timer = null;
			}

		}
	}

}())

/**
TODO
 *    Change date to SA standard.
 *    Loop through object and display in html as a list.
**/
