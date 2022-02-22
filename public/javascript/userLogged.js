window.addEventListener("load" , function(){
    //alert("ok")
    let nameUser = document.getElementById("nameUser").innerText
    let idUser = document.getElementById("idUser").innerText
  //  let userHi = document.getElementById('userHi')

     let userLogged = {
         id: idUser,
         name: nameUser

     }
   // alert(JSON.stringify(userLogged))
    localStorage.setItem("userLogged" , JSON.stringify(userLogged))


})

let us