window.addEventListener('load' , function(){
    let tableIncomesOperations = document.getElementById('tableIncomesOperations');

    let tableOutcomesOperations = document.getElementById('tableOutcomesOperations');

    let parseOperationsList = JSON.parse(localStorage.getItem('operationsList'));

// incomes - outcomes operations arrays:

    let incomeOperations = []
    let outcomeOperations = []
    
    for(let i = 0; i<parseOperationsList.length; i++){
        if(parseOperationsList[i].newtype == 'income'){
            incomeOperations.push(parseOperationsList[i])
        } else {
            outcomeOperations.push(parseOperationsList[i])
        }
    }
//table incomes operations:

    var row0 = tableIncomesOperations.insertRow(0); //Initail Cell
    
    var cell1 = row0.insertCell(0); //Date
    var cell2 = row0.insertCell(1); //COncept
    var cell3 = row0.insertCell(2); //Amount
    var cell4 = row0.insertCell(3); //Type income/outcome
    var cell5 = row0.insertCell(4); //Edit
    var cell6 = row0.insertCell(5);  //Delete

    cell1.innerHTML = "FECHA";   //Cell Date
    cell2.innerHTML = 'CONCEPTO'; //Cell Concept
    cell3.innerHTML = 'MONTO'; //Cell Amount
    cell4.innerHTML = 'TIPO';  //Cell Type
    cell5.innerHTML = "";  //Cell edit
    cell6.innerHTML = ''; //cellDelete


    if(incomeOperations == null){
        alert("no tienes ingresos registrados");
    } else {
        for(let i=0; i<incomeOperations.length; i++){
            
            let rowPosition = i+1
            var rowI = tableIncomesOperations.insertRow(rowPosition); // Operation Cell

            var dateI = rowI.insertCell(0)
            var conceptI = rowI.insertCell(1)
            var amountI = rowI.insertCell(2)
            var typeI = rowI.insertCell(3)
            var editI = rowI.insertCell(4)
            var deleteI = rowI.insertCell(5)
        
            dateI.innerHTML = incomeOperations[i].newdate
            conceptI.innerHTML = incomeOperations[i].newConcept
            amountI.innerHTML = incomeOperations[i].newAmount
            typeI.innerHTML = incomeOperations[i].newtype
            editI.innerHTML = 'edit'
            deleteI.innerHTML = 'delete'
        }
    }

//table outcomes operations:

var row0 = tableOutcomesOperations.insertRow(0); //Initail Cell
    
var cell1 = row0.insertCell(0); //Date
var cell2 = row0.insertCell(1); //COncept
var cell3 = row0.insertCell(2); //Amount
var cell4 = row0.insertCell(3); //Type income/outcome
var cell5 = row0.insertCell(4); //Edit
var cell6 = row0.insertCell(5);  //Delete

cell1.innerHTML = "FECHA";   //Cell Date
cell2.innerHTML = 'CONCEPTO'; //Cell Concept
cell3.innerHTML = 'MONTO'; //Cell Amount
cell4.innerHTML = 'TIPO';  //Cell Type
cell5.innerHTML = "";  //Cell edit
cell6.innerHTML = ''; //cellDelete


if(incomeOperations == null){
    alert("no tienes egresos registrados");
} else {
    for(let i=0; i<outcomeOperations.length; i++){
        
        let rowPosition = i+1
        var rowI = tableOutcomesOperations.insertRow(rowPosition); // Operation Cell

        var dateI = rowI.insertCell(0)
        var conceptI = rowI.insertCell(1)
        var amountI = rowI.insertCell(2)
        var typeI = rowI.insertCell(3)
        var editI = rowI.insertCell(4)
        var deleteI = rowI.insertCell(5)
    
        dateI.innerHTML = outcomeOperations[i].newdate
        conceptI.innerHTML = outcomeOperations[i].newConcept
        amountI.innerHTML = outcomeOperations[i].newAmount
        typeI.innerHTML = outcomeOperations[i].newtype
        editI.innerHTML = 'edit'
        deleteI.innerHTML = 'delete'
    }
}



})