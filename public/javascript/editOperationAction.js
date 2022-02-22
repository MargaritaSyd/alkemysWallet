window.addEventListener('load' , function(){
   let deleteOperationSubmit = document.getElementById('deleteOperationSubmit');
   deleteOperationSubmit.addEventListener('click' , function(e){
      e.preventDefault()
      alert("delete")
   })
})