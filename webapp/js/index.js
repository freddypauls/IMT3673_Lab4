//window.alert("Hello");

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.location.href = "index.html";
		
  } else {
    // No user is signed in.
	document.location.href = "login.html";
  }
});

var textField = document.getElementById("last_name");

function testFunc() {
	
	var ref = firebase.database().ref();
	
	var messsage = textField.value;
	
	ref.push().set(messsage);
	
}