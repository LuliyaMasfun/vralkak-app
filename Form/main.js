console.log('main.js file');

var nameInput = document.getElementById('name');

function validateNameInput(event){
    console.log('main input blur');
    var nameInputValue = event.target.value;
    console.log('value:', nameInputValue);

    var nameInputError = document.getElementById('name-error');

    if(nameInputValue == '') return;

    if (nameInputValue.length < 2){
        nameInputError.innerText = 'ERROR! Name should have atleast 2 characters';
    }else{
        nameInputError.innerText='';
    }
    if (nameInputValue.length > 15){
        nameInputError.innerText = 'ERROR! Name should not have more than 15 characters';
    }
}
nameInput.addEventListener('focus', validateNameInput);
nameInput.addEventListener('blur', validateNameInput); 

