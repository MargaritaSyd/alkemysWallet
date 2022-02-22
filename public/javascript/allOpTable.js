
window.addEventListener('load' , function(){

    let user = JSON.parse(localStorage.getItem('userLogged'))
    let user_id = user.id
    let titleBalance = document.getElementById('titleBalance')

       
    let tableOperations = document.getElementById('tableOperations')

    //last 10 operations:
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

fetch("http://localhost:4000/api_operations")
.then(function(r){
    return r.json();
})
.then(function(data){
    let operationsArray = []
    for( operation of data.data){
        if(operation.id_users == user_id){
            operationsArray.unshift(operation)
        }
    }
    for(let i=0; i<operationsArray.length && i<10; i++){
        let rowPosition = i + 1
        var rowI = tableOperations.insertRow(rowPosition); // Operation Cell

        let editingId = parseInt(operationsArray[i].id)
        let deleteId ="delete" + parseInt(operationsArray[i].id)
        
        var dateI = rowI.insertCell(0)
        var conceptI = rowI.insertCell(1)
        var amountI = rowI.insertCell(2)
        var typeI = rowI.insertCell(3)
        var editI = rowI.insertCell(4)
        var deleteI = rowI.insertCell(5)
    
        dateI.innerHTML = operationsArray[i].date
        conceptI.innerHTML = operationsArray[i].concept
        amountI.innerHTML = operationsArray[i].amount
        typeI.innerHTML = operationsArray[i].type
        editI.innerHTML = "<button>EDIT</button>"
        editI.id = editingId
        deleteI.id = deleteId
        deleteI.innerHTML = "<button>DELETE</button>"
        
        //deleteI.innerHTML = 'delete'

// addEvent to edit button
        let editButton = document.getElementById(editingId)
        editButton.addEventListener("click" , function(e){

                let idOperation = e.target.parentElement.id
                  window.location.assign("http://localhost:4000/edit_operation/" + idOperation)

    
        })
// addEvent to edit button
            let deleteButton = document.getElementById(deleteId)
            deleteButton.addEventListener("click" , function(e){

                let idOperation = editingId
                window.location.assign("http://localhost:4000/delete_operation/" + idOperation)
            })

    }
})    
          

    
})
