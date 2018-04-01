//window.alert("Hello");

var textField = document.getElementById("last_name");

function testFunc() {
	
	var ref = firebase.database().ref();
	
	var messsage = textField.value;
	
	ref.push().set(messsage);
	
}
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
		
  } else {
    // No user is signed in.
  }
});