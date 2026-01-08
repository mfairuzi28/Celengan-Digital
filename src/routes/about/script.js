let totalSaldo = 0;

function updateSaldo(tipe) {
    const inputAmount = document.getElementById('amount');
    const amount = parseInt(inputAmount.value);
    const historyList = document.getElementById('history');
    const displaySaldo = document.getElementById('total-balance');

    if (isNaN(amount) || amount <= 0) {
        alert("Masukkan jumlah uang yang valid!");
        return;
    }

    if (tipe === 'masuk') {
        totalSaldo += amount;
        addHistory(`Tabung: +Rp ${amount.toLocaleString()}`, 'green');
    } else {
        if (amount > totalSaldo) {
            alert("Saldo tidak cukup!");
            return;
        }
        totalSaldo -= amount;
        addHistory(`Tarik: -Rp ${amount.toLocaleString()}`, 'red');
    }

    displaySaldo.innerText = `Rp ${totalSaldo.toLocaleString()}`;
    inputAmount.value = ''; // Reset input
}

function addHistory(text, color) {
    const historyList = document.getElementById('history');
    const li = document.createElement('li');
    li.innerText = text;
    li.style.color = color;
    historyList.prepend(li); // Menambah riwayat ke paling atas
}