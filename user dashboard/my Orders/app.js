const acceptedOrder = () => {


    firebase.database().ref(`accepted`).on('child_added', (data) => {
        console.log(data.val().user)

        let list = document.getElementById("list");
        list.innerHTML += `<li class="li1"><p id = "order">Your Order Of <b>${data.val().user}</b> has been Accepted by the Restaurant</p></li>`

    })

    firebase.database().ref(`accepted1`).on('child_added', (data) => {
        console.log(data.val().user)

        let list = document.getElementById("list");
        list.innerHTML += `<li class="li1"><p id = "order">Your Order has been <b>${data.val().user}</b> by the Restaurant</p></li>`

    })

    firebase.database().ref(`accepted2`).on('child_added', (data) => {
        console.log(data.val().user)

        let list = document.getElementById("list");
        list.innerHTML += `<li class="li1"><p id = "order">Your Order has been <b>${data.val().user}</b> by the Restaurant</p></li>`

    })

    firebase.database().ref(`accepted3`).on('child_added', (data) => {
        console.log(data.val().user)

        let list = document.getElementById("list");
        list.innerHTML += `<li class="li1"><p id = "order">Your Order has been <b>${data.val().user}</b> by the Restaurant</p></li>`

    })
    
}