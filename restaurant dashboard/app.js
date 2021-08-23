const insertButton = () => {
    var title = document.getElementById("title").value;
    var price = document.getElementById("price").value;
    if (title && price != '') {

        const obj = {
            title: title,
            price: price
        }

        let key = Math.round(Math.random() * 136598937);

        firebase.database().ref('dishes/add' + key).set(obj)
            .then(() => {
                alert("Menu Updataed")
            })

    } else {
        alert("empty post can not be shared")
    }
}





var list = document.getElementById("list");
const showOrder = () => {


    firebase.database().ref(`order`).on('child_added', (data) => {
        console.log(data.val().title)

        let list = document.getElementById("list");
        list.innerHTML += `<li class="li1"><p id = "order">${data.val().title}</p>
        <a class="btn btn-primary btn-lg" href="#" role="button" onclick="userOrder()">Accept</a></li>`

        userOrder = () => {
            
            const obj = {
                user: "Accepted"
            }
        
            let key = Math.round(Math.random() * 1265677837);
        
            firebase.database().ref('accepted/user' + key).set(obj)
                .then(() => {
                    alert("User's Order has been Accepted")
                })
        
        }

    })
    firebase.database().ref(`order1`).on('child_added', (data) => {
        console.log(data.val().title)

        let list = document.getElementById("list");
        list.innerHTML += `<li class="li1"><p id = "order">${data.val().title}</p>
        <a class="btn btn-primary btn-lg" href="#" role="button" onclick="userOrder()">Accept</a></li>`

        userOrder = () => {
            var user = document.getElementById('order');
            console.log(user.innerText)
            
            const obj = {
                user: "Accepted"
            }
        
            let key = Math.round(Math.random() * 1265677837);
        
            firebase.database().ref('accepted1/user' + key).set(obj)
                .then(() => {
                    alert("User's Order has been Accepted")
                })
                .catch((error) => {
                    var errorMessage = error.message;
                    console.log(errorMessage)
                })
        
        }

    })

    firebase.database().ref(`order2`).on('child_added', (data) => {
        console.log(data.val().title)

        let list = document.getElementById("list");
        list.innerHTML += `<li class="li1"><p id = "order">${data.val().title}</p>
        <a class="btn btn-primary btn-lg" href="#" role="button" onclick="userOrder()">Accept</a></li>`

        userOrder = () => {
            var user = document.getElementById('order');
            console.log(user.innerText)
            
            const obj = {
                user: "Accepted"
            }
        
            let key = Math.round(Math.random() * 1265677837);
        
            firebase.database().ref('accepted2/user' + key).set(obj)
                .then(() => {
                    alert("User's Order has been Accepted")
                })
        
        }
    })

    firebase.database().ref(`order3`).on('child_added', (data) => {
        console.log(data.val().title)

        let list = document.getElementById("list");
        list.innerHTML += `<li class="li1"><p id = "order">${data.val().title}</p>
        <a class="btn btn-primary btn-lg" href="#" role="button" onclick="userOrder()">Accept</a></li>`


        userOrder = () => {
            var user = document.getElementById('order');
            console.log(user.innerText)
            
            const obj = {
                user: "Accepted"
            }
        
            let key = Math.round(Math.random() * 1265677837);
        
            firebase.database().ref('accepted3/user' + key).set(obj)
                .then(() => {
                    alert("User's Order has been Accepted")
                })
        
        }
    })


}







