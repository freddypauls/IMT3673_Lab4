$("#regBtn").click(
	function(){
		
		var email = $("#regEmail").val();
		var password = $("#regPassword").val();
		var name = $("#regName").val();

		if(email != "" && password != "" && name != ""){

			firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
				// Handle Errors here.
				$("#regError").show().text(error.message);
				
			});
			
		}
		
});