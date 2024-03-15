export function enhance(formElement : HTMLFormElement){

    async function validatePasswords(event: Event){
    
    const data = new FormData(formElement);

    if (data.get('password')!== data.get('rePassword')) {
        alert("Passwords do not match");
        event.preventDefault(); 
    } else {
        formElement.submit(); 
    }
}
function handleSubmit(event: Event) {
    validatePasswords(event); // Validate passwords before submission
    // Prevent default behavior - this is handled in validatePasswords
}
formElement.addEventListener('submit',handleSubmit);
}

