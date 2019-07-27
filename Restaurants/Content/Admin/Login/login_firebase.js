/*function login(){
	var email=document.getElementById("#loginEmail").value;
	var pass =document.getElementById("#loginPassword").value;

	firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
		alert(error.message);
	});
}*/
function toggleSignIn() {
      if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
        var email = document.getElementById('loginEmail').value;
        var password = document.getElementById('loginPassword').value;
        if (email.length < 6) {
          alert('Email không đúng !!!');
          return;
        }
        if (password.length < 6) {
          alert('Password quá ngắn. Vui lòng nhập lại !');
          return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.	
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          alert("Móa");
          // [END_EXCLUDE]
        });
        // [END authwithemail]

      }
    }

/*$("#login").click(
	function(){
		var email=$("#loginEmail").val();
		var pass=$("#loginPassword").val();
			firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
				alert(error.message);
		 	});
		 	/*firebase.auth().onAuthStateChanged(function(user) {
			  if (user) {
			    alert("Login success :)");
			  }
			});*/
	/*});*/