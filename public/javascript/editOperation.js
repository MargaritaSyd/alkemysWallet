
window.addEventListener('load' , function(){
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

    editOperationSubmit.addEventListener('click' , function(){

        //alert("ok")

   
        let editOperation = {
            editId: editId.value,
            editConcept: editConcept.value,
            editAmount: editAmount.value,
            editDate: editDate.value,
            notEditType: typeOp.value
        }

        for(let i = 0; i<parseOperationsList.length; i++){
            let editedOpId = parseOperationsList[i].idOperation
            if(editOperation.editId == editedOpId){
                let editedOpArray = parseOperationsList.filter(operation => operation.idOperation != editOperation.editId)
                alert(JSON.stringify(editedOpArray))
       
            }
    
        }


       // let editedOp = parseOperationsList.filter(operation => operation.idOperation != editOperation.editId);
        //editedOp.unshift(editOperation);

     //   localStorage.setItem('operationsList' , JSON.stringify(editedOp))


/*
                  let idName = parseCartList[i].productName;
                    let removeItem = parseCartList.filter((item) => item.productName != idName);
                     localStorage.setItem("cartList" , JSON.stringify(removeItem))
                     window.location.reload();

*/


      //        alert(JSON.stringify(editedOp))
      // alert(JSON.stringify(editOperation))
        /*
         
        let newOperation = {
            idOperation: Math.random(),
            newConcept: oneConcept.value,
            newAmount: oneAmount.value,
            newdate: oneDate.value,
            newtype: typeOperation,
        
        }
        localStorage.setItem("setNewOperation" , JSON.stringify(newOperation));

        */
    })

/*
    let parseOperationsList = JSON.parse(localStorage.getItem('operationsList'));

    for( let i=0; i<parseOperationsList.length; i++){

        let deleteOperation = parseOperationsList[i].idOperation

        deleteOperation.addEventListener('click' , function (e){
            let idOp = parseOperationsList[i].idOperation;
            alert(idOp)
        } )

    }
    */

})

/*
        for(let i=0; i<parseCartList.length; i++){
            let remove = document.getElementById(parseCartList[i].productName);

            remove.addEventListener("click" , function(e){
                     e.preventDefault();
                    
                    let idName = parseCartList[i].productName;
                    let removeItem = parseCartList.filter((item) => item.productName != idName);
                     localStorage.setItem("cartList" , JSON.stringify(removeItem))
                     window.location.reload();

*/