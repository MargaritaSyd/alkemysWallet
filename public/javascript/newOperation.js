window.addEventListener("load" , function(){
   // alert("ok")
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
            newConcept: oneConcept.value,
            newAmount: oneAmount.value,
            newdate: oneDate.value,
            newtype: typeOperation,
        
        }
           localStorage.setItem("setNewOperation" , JSON.stringify(newOperation))
    })
        
})