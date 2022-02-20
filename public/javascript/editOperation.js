function editOperationFunction(opId){
    let parseOperationsList = JSON.parse(localStorage.getItem('operationsList'));

    let editedOpList = parseOperationsList.filter((item) => item.idOperation != opId )

    return editedOpList        
    
}

window.addEventListener('load' , function(){

   // localStorage.clear()

    let parseOperationsList = JSON.parse(localStorage.getItem('operationsList'));

    let editForm = document.getElementById('editForm');
    editForm.style.display = "none"
    let editId = document.getElementById('editId');
    let editConcept = document.getElementById('editConcept');
    let editAmount = document.getElementById('editAmount');
    let editDate = document.getElementById('editDate');
    let typeOp = document.getElementById('typeOp')
    let editOperationSubmit = document.getElementById('editOperationSubmit');

    let editButton = document.querySelectorAll('.editButton')

    for(let i=0; i<editButton.length; i++){

        editButton[i].addEventListener('click' , function(e){
            e.preventDefault()
           // alert('ok')
           for( let i=0; i<parseOperationsList.length; i++){
            if((e.target.parentElement.id) == parseOperationsList[i].idOperation){
                editForm.style.display = "inline"
                editId.style.display = "none"
                editId.value = parseOperationsList[i].idOperation
                editConcept.value = parseOperationsList[i].newConcept
                editAmount.value = parseOperationsList[i].newAmount
                typeOp.style.display = "none"
                typeOp.value = parseOperationsList[i].newtype
            }
        }

        })
    }

        editOperationSubmit.addEventListener('click' , function(e){


            e.preventDefault()

           /*
           idOperation: Math.random(),
            newConcept: oneConcept.value,
            newAmount: oneAmount.value,
            newdate: oneDate.value,
            newtype: typeOperation,
        
           */

            let editedOp = new Object();
             editedOp.idOperation = Number(editId.value);
             editedOp.newConcept = editConcept.value;
             editedOp.newAmount = editAmount.value;
             editedOp.newdate = editDate.value;
             editedOp.newtype = typeOp.value

            let editingList = editOperationFunction(editedOp.idOperation)

            editingList.unshift(editedOp)

            localStorage.setItem("operationsList" , JSON.stringify(editingList))

          //  alert(JSON.stringify(editedOp))

        
//            parseOperationsList.unshift(editedOp);
 

  //         alert(JSON.stringify(parseOperationsList))
   
      //      editingList.unshift(editedOp)

    //        alert(JSON.stringify(editingList))
           window.location.reload();

       
    

        })

       

})

