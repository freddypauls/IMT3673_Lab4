$("#loginBtn").click(
	function(){
		
		var email = $("#loginEmail").val();
		var password = $("#loginPassword").val();

		if(email != "" && password != ""){
			
			firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
				
				$("#loginError").show().text(error.message);
				
			});
			
		}
		
});
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log("You're loggen in");
		
  } else {
    // No user is signed in.
  }
});