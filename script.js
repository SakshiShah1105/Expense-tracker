document.getElementById('expense-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
    const expenseCategory = document.getElementById('expense-category').value;

    if (expenseName && !isNaN(expenseAmount) && expenseAmount > 0 && expenseCategory) {
        addExpense(expenseName, expenseAmount, expenseCategory);
        updateTotal();
        document.getElementById('expense-form').reset();
    }
});

function addExpense(name, amount, category) {
    const expenseTableBody = document.querySelector('#expense-table tbody');
    const expenseRow = document.createElement('tr');
    expenseRow.innerHTML = `<td>${name}</td><td>$${amount.toFixed(2)}</td><td>${category}</td>`;
    expenseTableBody.appendChild(expenseRow);
}

function updateTotal() {
    const expenseTableBody = document.querySelector('#expense-table tbody');
    let totalAmount = 0;
    for (let i = 0; i < expenseTableBody.children.length; i++) {
        const expenseRow = expenseTableBody.children[i];
        const amount = parseFloat(expenseRow.cells[1].textContent.replace('$', ''));
        totalAmount += amount;
    }
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}

// Initial total calculation
updateTotal();