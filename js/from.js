document.getElementById('expense-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;
    const paymentMethod = document.getElementById('payment-method').value;
    const tags = document.getElementById('tags').value;
    const receipt = document.getElementById('receipt').files[0];

    // Create an expense object
    const expense = {
        date,
        category,
        amount,
        description,
        paymentMethod,
        tags,
        receipt: receipt ? receipt.name : null
    };
    function goToList() {
        window.location.href = '/html/expensList.html';
    }
    // Get existing expenses from localStorage
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    // Add new expense to the array
    expenses.push(expense);

    // Save updated expenses array back to localStorage
    localStorage.setItem('expenses', JSON.stringify(expenses));

    // Clear the form
    document.getElementById('expense-form').reset();
    document.getElementById('save_button').goToList();
});
