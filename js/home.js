

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoneyInput = document.getElementById('add-money-input').value;

    const pinNumberInput = document.getElementById('input-pin-number').value;

    if (pinNumberInput === '1234') {
        const balance = document.getElementById('account-balance').innerText;
        
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        
        document.getElementById('account-balance').textContent = newBalance;
    }else{
        alert('Invalid Pin Number');
    }
})

document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOutInput = document.getElementById('input-cash-out').value;

    const cashOutPin = document.getElementById('cash-out-pin').value;

    if (cashOutPin === '1234') {
        const balance = document.getElementById('account-balance').innerText;
        
        const cashOutNumber = parseFloat(cashOutInput);
        const balanceNumber = parseFloat(balance);
        const newBalance =  balanceNumber - cashOutNumber;
        
        document.getElementById('account-balance').textContent = newBalance;
    }else{
        alert('Invalid Pin Number');
    }
})