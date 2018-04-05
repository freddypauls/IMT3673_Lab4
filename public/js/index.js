//window.alert("Hello");

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
		console.log("Hello "
  } else {
    // No user is signed in.
	  document.location.href = "login.html";
  }
});

firebase.auth().onAuthStateChanged(function(user) {
    console.log(user);
   });

var textField = document.getElementById("last_name");

function testFunc() {
	
	var ref = firebase.database().ref();
	
	var messsage = textField.value;
	
	ref.push().set(messsage);
	
}

$("#signOut").click(
	function(){
		
		firebase.auth().signOut().then(function() {
		  // Sign-out successful.
			console.log("You are now logged out");
		}).catch(function(error) {
		  // An error happened.
});
		
});