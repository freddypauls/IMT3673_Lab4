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
    document.location.href = "index.html";
		
  } else {
    // No user is signed in.
	window.alert("You're not logged in");
  }
});