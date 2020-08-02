
firebase.auth.Auth.Persistence.LOCAL;



document.getElementById("btn-login").addEventListener("click", function(){
   

    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;



    if(email != "" && password != "")
    {
        var result = firebase.auth().signInWithEmailAndPassword(email,password);

        result.catch(function(){

            var errorCode = error.code;
            var errormessage = error.message;

            console.log(errorCode);
            console.log(errormessage);
            window.alert("Message : " + errormessage);
        });

    }
    else
    {
        window.alert("please fill oru all fields");
    }
  });