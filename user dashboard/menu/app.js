const showButton = () => {
    // post(url, headers)


    firebase.database().ref(`dishes`).on('child_added',(data)=>{
       
        let postCard = document.getElementById("postCard");
        postCard.innerHTML += `
        <div class="card" style="width: 40rem;">
            <img src="../../img/desu food.jpg" class="card-img-top imgsize" alt="chinese">
            <div class="card-body">
              <h2 class="card-title" id="titlechinese">${data.val().title}</h2>
              <a href="#" class="btn btn-primary"><button onclick="orderChinese()">Order Now</button></a>
            </div>
          </div>`
          orderChinese = () => {
            var title = document.getElementById('titlechinese');
            console.log(title.innerText)
            
            const obj = {
                title: title.innerText,
            }
        
            let key = Math.round(Math.random() * 1265677837);
        
            firebase.database().ref('order3/take' + key).set(obj)
                .then(() => {
                    alert("Your Order has been Placed")
                })
        
        }
    });
};


const order = () => {
  var title = document.getElementById('titlefood')
  
  console.log(title.innerText)

    const obj = {
        title: title.innerText,
    }

    let key = Math.round(Math.random() * 1265677837);

    firebase.database().ref('order/take' + key).set(obj)
        .then(() => {
            alert("Your Order has been Placed")
        })

}

const orderJapanese = () => {
  var title = document.getElementById('titlefood1')
  
  console.log(title.innerText)

    const obj = {
        title: title.innerText,
    }

    let key = Math.round(Math.random() * 1265677837);

    firebase.database().ref('order1/take' + key).set(obj)
        .then(() => {
            alert("Your Order has been Placed")
        })

}

const orderDesi = () => {
  var title = document.getElementById('titledesi')
  
  // console.log(title.innerText)

    const obj = {
        title: title.innerText,
    }

    let key = Math.round(Math.random() * 1265677837);

    firebase.database().ref('order2/take' + key).set(obj)
        .then(() => {
            alert("Your Order has been Placed")
        })

}


// console.log(data)


