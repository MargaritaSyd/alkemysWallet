window.addEventListener('load' , function(){


fetch("http://localhost:4000/api_operations")
.then(function(r){
    return r.json();
})
.then(function(data){
    let operationsArray = []
    for( operation of data.data){
        if(operation.id_users == 1){
            operationsArray.push(operation)
        }
    }

    //incomes operation vs outcomes operations

    let incomeOperations = []
    let outcomeOperations = []

    for(let i=0; i<operationsArray.length; i++){
        if(operationsArray[i].type == 'income'){
            incomeOperations.push(operationsArray[i])
        } else {
            outcomeOperations.push(operationsArray[i])
        }
    }

    let incomeAmount = [];
    let outcomeAmount = [];
    // incomes Array
    for(let i=0; i<incomeOperations.length; i++){
        let positiveNum = parseInt(incomeOperations[i].amount)

        incomeAmount.push(positiveNum);
    }
    
// sum of incomes
    let totalIncomes = incomeAmount.reduce(function(a , b){
        return a + b
    } , 0);

// Outcomes Array   
    for(let i=0; i<outcomeOperations.length; i++){

        let num  = parseInt(outcomeOperations[i].amount)
        let negativeNum = num * -1

        outcomeAmount.push(negativeNum);
    }

//sum ok outcomes
    let totalOutcomes = outcomeAmount.reduce(function(a , b){
        return a + b
    } , 0);

// incomes - outcomes:

   let currentBalance = totalIncomes + totalOutcomes

// currentBalance in view:

    let  currentBalanceId = document.getElementById('currentBalance');

    currentBalanceId.innerHTML = '$' + currentBalance


})
})