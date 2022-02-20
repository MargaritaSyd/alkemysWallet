function deleteOperation(opId){
    let parseOperationsList = JSON.parse(localStorage.getItem('operationsList'));

    let editedOpList = parseOperationsList.filter((item) => item.idOperation != opId )

    return editedOpList        
    
}

window.addEventListener("load" , function(){

    let deleteButton = document.querySelectorAll('.deleteButton')

    for(let i=0; i<deleteButton.length; i++){
        deleteButton[i].addEventListener('click' , function(e){
            e.preventDefault()
            let confirmDelete = confirm("estas seguro?");

            if (confirmDelete == true){
                let newList = deleteOperation(e.target.parentElement.id)
             //   alert(JSON.stringify(newList))
                localStorage.setItem("operationsList" , JSON.stringify(newList))
                window.location.reload();
            } else {
                alert('not')
            }
           // alert(e.target.parentElement.id)

    })
}

})