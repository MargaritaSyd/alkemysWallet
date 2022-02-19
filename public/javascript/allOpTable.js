
window.addEventListener('load' , function(){

    let lastRegister = document.getElementById('lastRegister')
    let tableOperations = document.getElementById('tableOperations')
    let outcomeButton = document.getElementById("outcomeButton")
    let incomeButton = document.getElementById('incomeButton')

//function to add operations table

    function addOperationTable(list){
        
        for(let i=0; i<list.length; i++){
            
            let rowPosition = i+1
            var rowI = tableOperations.insertRow(rowPosition); // Operation Cell

            var dateI = rowI.insertCell(0)
            var conceptI = rowI.insertCell(1)
            var amountI = rowI.insertCell(2)
            var typeI = rowI.insertCell(3)
            var editI = rowI.insertCell(4)
            var deleteI = rowI.insertCell(5)
        
            dateI.innerHTML = list[i].newdate
            conceptI.innerHTML = list[i].newConcept
            amountI.innerHTML = list[i].newAmount
            typeI.innerHTML = list[i].newtype
            editI.innerHTML = 'edit'
            deleteI.innerHTML = 'delete'
        }

    }
//
    //last 10 operations:

    lastRegister.addEventListener('click' , function(){
    var row0 = tableOperations.insertRow(0); //Initail Cell
   
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

    let parseOperationsList = JSON.parse(localStorage.getItem('operationsList'))
    
    if(parseOperationsList == null){
        alert("no tienes operaciones");
    } else {
        addOperationTable(parseOperationsList)
/*
       for(let i=0; i<parseOperationsList.length; i++){
            
            let rowPosition = i+1
            var rowI = tableOperations.insertRow(rowPosition); // Operation Cell

            var dateI = rowI.insertCell(0)
            var conceptI = rowI.insertCell(1)
            var amountI = rowI.insertCell(2)
            var typeI = rowI.insertCell(3)
            var editI = rowI.insertCell(4)
            var deleteI = rowI.insertCell(5)
        
            dateI.innerHTML = parseOperationsList[i].newdate
            conceptI.innerHTML = parseOperationsList[i].newConcept
            amountI.innerHTML = parseOperationsList[i].newAmount
            typeI.innerHTML = parseOperationsList[i].newtype
            editI.innerHTML = 'edit'
            deleteI.innerHTML = 'delete'
        }
    */
    }
})

          
    // if(parseOperationsList == null){
    //     alert("no tienes operaciones");
    // } else {
        let incomeOperations = []
        let outcomeOperations = []
       for(let i=0; i<parseOperationsList.length; i++){
           if(parseOperationsList[i].newtype == 'income'){
            incomeOperations.push(parseOperationsList[i])
           } else {
               outcomeOperations.push(parseOperationsList[i])
           }
       }
   // }

    incomeButton.addEventListener('click' , function(){
        let incomeOperations = []

        var row0 = tableOperations.insertRow(0); //Initail Cell
       
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
    
   
      

    })
})