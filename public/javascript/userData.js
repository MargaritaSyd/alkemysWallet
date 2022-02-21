
window.addEventListener("load" , function(){
    
//let userDataId = document.getElementById('userDataId').value

    if(localStorage.getItem('userLogged') != null){
        let parseUser = JSON.parse(localStorage.getItem('userLogged'));
        alert(parseUser)   
    }
})