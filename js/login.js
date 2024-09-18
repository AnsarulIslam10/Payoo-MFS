
document.getElementById('button-login').addEventListener('click', function(event){
    // prevent default behavior (reloading browser)
    event.preventDefault(); 

    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber)
})