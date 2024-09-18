
document.getElementById('button-login').addEventListener('click', function(event){
    // prevent default behavior (reloading browser)
    event.preventDefault(); 

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    if (phoneNumber === '5' && pinNumber === '1234') {
        window.location.href = '/home/index.html'
    }else{
        alert("Invalid Phone Number or Pin");
    }
})