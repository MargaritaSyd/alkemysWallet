
window.addEventListener("load" , function(){
   // localStorage.clear()
// Store one register operation in local storage:


    let oneConcept = document.getElementById('oneConcept');
    let oneAmount = document.getElementById('oneAmount');
    let oneDate = document.getElementById('oneDate');
    let oneIncome = document.getElementById('oneIncome');
    let oneOutcome = document.getElementById('oneOutcome');
    let newOperationSubmit = document.getElementById('newOperationSubmit');

    newOperationSubmit.addEventListener("click" , function(){  

        if(oneIncome.checked == true){
            typeOperation = oneIncome.value
        } else {
            typeOperation = oneOutcome.value
        }
        
        let newOperation = {
            idOperation: Math.random(),
            newConcept: oneConcept.value,
            newAmount: oneAmount.value,
            newdate: oneDate.value,
            newtype: typeOperation,
        
        }
        localStorage.setItem("setNewOperation" , JSON.stringify(newOperation));



        if(localStorage.getItem('operationsList') != null){
        let parseOperationsList = JSON.parse(localStorage.getItem('operationsList'));
        let parseNewOperation = JSON.parse(localStorage.getItem('setNewOperation'))

        parseOperationsList.push(parseNewOperation);

        let stringOperationList = JSON.stringify(parseOperationsList)

        localStorage.setItem('operationsList' , stringOperationList );

        } else {
            let operationsList = [];
            let parseNewOperation = JSON.parse(localStorage.getItem('setNewOperation'))

            operationsList.push(parseNewOperation);
            let stringOperationList = JSON.stringify(operationsList)
      //  alert([stringOperationList])
            localStorage.setItem('operationsList' , stringOperationList )
        }

    })



//Store one register operation in operationsList storage

       // localStorage.clear()
        // alert("ok")

/*
        if( localStorage.getItem('operationsList') == null){
            let operationsList = []
            if(localStorage.getItem('setNewOperation') != null) {
                let parseNewOperation = JSON.parse(localStorage.getItem('setNewOperation'));
                localStorage.removeItem('setNewOperation');
                operationsList.push(parseNewOperation);

                localStorage.setItem('operationsList' , JSON.stringify(operationsList))
       //     } else {
         //       return
            }
        } else {
    
        if(localStorage.getItem('setNewOperation') != null) {

        let parseNewOperation = JSON.parse(localStorage.getItem('setNewOperation'));
        let parseOperationsList = JSON.parse(localStorage.getItem('operationsList'));

        localStorage.removeItem('setNewOperation');

        parseOperationsList.push(parseNewOperation);

        localStorage.setItem('operationsList' , JSON.stringify(parseOperationsList))

   //     } else {
     //       return
        }
    }

    */

})