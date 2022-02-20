window.addEventListener('load' , function(){

 //   localStorage.clear()
    let parseOperationsList = JSON.parse(localStorage.getItem('operationsList'))

    
// Array income - outcome          
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
let incomeAmount = [];
let outcomeAmount = [];

// incomes Array
    for(let i=0; i<incomeOperations.length; i++){
        let positiveNum = parseInt(incomeOperations[i].newAmount)

        incomeAmount.push(positiveNum);
    }
    
// sum of incomes
    let totalIncomes = incomeAmount.reduce(function(a , b){
        return a + b
    } , 0);

// Outcomes Array   
    for(let i=0; i<outcomeOperations.length; i++){

        let num  = parseInt(outcomeOperations[i].newAmount)
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