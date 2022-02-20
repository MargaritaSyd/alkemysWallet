window.addEventListener('load' , function(){

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
//table outcomes operations:

var row0 = tableOutcomesOperations.insertRow(0); //Initail Cell
    
var cell1 = row0.insertCell(0); //Date
var cell2 = row0.insertCell(1); //COncept
var cell3 = row0.insertCell(2); //Amount
var cell4 = row0.insertCell(3); //Edit
var cell5 = row0.insertCell(4);  //Delete

cell1.innerHTML = "FECHA";   //Cell Date
cell2.innerHTML = 'CONCEPTO'; //Cell Concept
cell3.innerHTML = 'MONTO'; //Cell Amount
cell4.innerHTML = "";  //Cell edit
cell5.innerHTML = ''; //cellDelete


if(outcomeOperations == null){
    alert("no tienes egresos registrados");
} else {
    for(let i=0; i<outcomeOperations.length; i++){
        
        let rowPosition = i+1
        var rowI = tableOutcomesOperations.insertRow(rowPosition); // Operation Cell

        var dateI = rowI.insertCell(0)
        var conceptI = rowI.insertCell(1)
        var amountI = rowI.insertCell(2)
        var editI = rowI.insertCell(3)
        var deleteI = rowI.insertCell(4)
    
        dateI.innerHTML = outcomeOperations[i].newdate
        conceptI.innerHTML = outcomeOperations[i].newConcept
        amountI.innerHTML = outcomeOperations[i].newAmount
        editI.innerHTML = '<button> EDITAR </button>'
        deleteI.innerHTML = '<button> ELIMINAR </button>'

    }
}



})
