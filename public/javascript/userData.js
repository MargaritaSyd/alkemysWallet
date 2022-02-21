//User id and name in local storage


window.addEventListener("load" , function(){
    //alert("ok")
    //localStorage.clear()
    let userDataId = document.getElementById('userDataId');
   // let userSalut = document.getElementById('userSalut');

//alert('ok')
    if(localStorage.getItem('userLogged')){
     //   this.alert('ok')
     let user = localStorage.getItem('userLogged')
     let parseUser = JSON.parse(user)

     userDataId.value = parseUser.id;


    } 
    
   


})