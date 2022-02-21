window.addEventListener('load' , function(){

    let user = JSON.parse(localStorage.getItem('userLogged'))
    let user_id = user.id

    

    fetch("http://localhost:4000/api_operations")
    .then(function(r){
        return r.json();
    })
    .then(function(data){
        let operationsArray = []
        for( operation of data.data){
            if(operation.id_users == user_id){
                operationsArray.push(operation)
            }
        }
   

        let editButton = document.querySelectorAll('.editButton')
    
    for(let i=0; i<editButton.length; i++){

        editButton[i].addEventListener('click' , function(e){
            e.preventDefault()
            alert('ok')
        //    for( let i=0; i<parseOperationsList.length; i++){
        //     if((e.target.parentElement.id) == parseOperationsList[i].idOperation){
        //         editForm.style.display = "inline"
        //         editId.style.display = "none"
        //         editId.value = parseOperationsList[i].idOperation
        //         editConcept.value = parseOperationsList[i].newConcept
        //         editAmount.value = parseOperationsList[i].newAmount
        //         typeOp.style.display = "none"
        //         typeOp.value = parseOperationsList[i].newtype
        //     }
        
        // }

    })
}
    })
})