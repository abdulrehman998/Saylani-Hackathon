function onSignup() {
    // get input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var Address = document.getElementById("address").value;
    var number = document.getElementById("number").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");


    if (email != "" && password != "") {
        const obj = {
            email: email,
            password: password
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                console.log(user)
                location.href = "login.html"
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
                if(errorMessage){
                    var warning = document.createElement('div')
                    var warnText = document.createTextNode("Invalid credentials!")
                    warning.appendChild(warnText)
                    warning.setAttribute("class", "alert alert-danger d-flex align-items-center")
            
                    message.appendChild(warning)
                }
                setTimeout(() => {
                    message.innerHTML = "";
                }, 2000);
                // ..
            });
    }
}


function onLogin() {
    // get input values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;


    var user = {
        email: email,
        password: password,
    }

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user)
            if (document.getElementById('r1').checked) {
                location.href = "restaurant dashboard/restaurant.html"    
              }
            if (document.getElementById('r2').checked) {
                location.href = "user dashboard/index.html"    
              } 
            
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            if(errorMessage){
                var warning = document.createElement('div')
                var warnText = document.createTextNode("Invalid credentials!")
                warning.appendChild(warnText)
                warning.setAttribute("class", "alert alert-danger d-flex align-items-center")
        
                message.appendChild(warning)
            }
            setTimeout(() => {
                message.innerHTML = "";
            }, 2000);
        });
    }