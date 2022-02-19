
window.addEventListener('load' , function(){

    let tableOperations = document.getElementById('tableOperations')

    var row0 = tableOperations.insertRow(0); //Initail Cell
   
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

    let parseOperationsList = JSON.parse(localStorage.getItem('operationsList'))
    
    if(parseOperationsList == null){
        alert("no tienes operaciones");
    } else {

    //    for(let i=0; i<parseOperationsList.length; i++){
        for (let i = (parseOperationsList.length - 1); i >= 0; i--) {


            
            let rowPosition = i+1
            var rowI = tableOperations.insertRow(rowPosition); // Operation Cell

            var dateI = rowI.insertCell(0)
            var conceptI = rowI.insertCell(1)
            var amountI = rowI.insertCell(2)
            var editI = rowI.insertCell(3)
            var deleteI = rowI.insertCell(4)
        
            dateI.innerHTML = parseOperationsList[i].newdate
            conceptI.innerHTML = parseOperationsList[i].newConcept
            amountI.innerHTML = parseOperationsList[i].newAmount
            editI.innerHTML = 'edit'
            deleteI.innerHTML = 'delete'
        }
    }

})