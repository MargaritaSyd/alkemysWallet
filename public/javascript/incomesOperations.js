
window.addEventListener('load' , function(){

    let user = JSON.parse(localStorage.getItem('userLogged'))
    let user_id = user.id

    
    let IncomesTableOperations = document.getElementById('tableIncomesOperations')
    //last 10 operations:

    var row0 = IncomesTableOperations.insertRow(0); //Initail Cell
   
    var cell1 = row0.insertCell(0); //Date
    var cell2 = row0.insertCell(1); //COncept
    var cell3 = row0.insertCell(2); //Amount
    
    cell1.innerHTML = "FECHA";   //Cell Date
    cell2.innerHTML = 'CONCEPTO'; //Cell Concept
    cell3.innerHTML = 'MONTO'; //Cell Amount

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


    // Arrays ingresos - egresos          
    let incomeOperations = []
    let outcomeOperations = []
    for(let i=0; i<operationsArray.length; i++){
    if(operationsArray[i].type == 'income'){
        incomeOperations.push(operationsArray[i])
    } else {
        outcomeOperations.push(operationsArray[i])
    }
    }


    for(let i=0; i<incomeOperations.length; i++){
        let rowPosition = i + 1

        var rowI = IncomesTableOperations.insertRow(rowPosition); // Operation Cell

        var dateI = rowI.insertCell(0)
        var conceptI = rowI.insertCell(1)
        var amountI = rowI.insertCell(2)
     
        dateI.innerHTML = incomeOperations[i].date
        conceptI.innerHTML = incomeOperations[i].concept
        amountI.innerHTML = incomeOperations[i].amount
    
    }
})    
          



    
})
