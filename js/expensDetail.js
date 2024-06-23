const urlParams = new URLSearchParams(window.location.search);
const index = urlParams.get('index');
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
let expense = expenses[index];

document.getElementById('expenseDetail').innerHTML = `
    <div style="margin-bottom: 20px";>
        <span style="font-weight: bold";>Date:</span>
        <p style="margin-top: 6px";>${expense.date}</p>
    </div>
    <div style="margin-bottom: 20px";>
        <span style="font-weight: bold";>Category:</span>
        <p style="margin-top: 6px";>${expense.category}</p>
    </div>
    <div style="margin-bottom: 20px";>
        <span style="font-weight: bold";>Amount:</span>
        <p style="margin-top: 6px";>$${expense.amount}</p>
    </div>
    <div style="margin-bottom: 20px";>
        <span style="font-weight: bold";>Description:</span>
        <p style="margin-top: 6px";>${expense.description}</p>
    </div>
    <div style="margin-bottom: 20px";>
        <span style="font-weight: bold";>Payment Method:</span>
        <p style="margin-top: 6px";>${expense.paymentMethod}</p>
    </div>
        <div style="margin-bottom: 20px";>
        <span style="font-weight: bold";>Receipt:</span>
    <p style="margin-top: 6px";>${expense.receipt}</p>
    </div>
`;

function editExpense() {
    const params = new URLSearchParams(window.location.search);
    const index = params.get('index');
    window.location.href = `edit_list.html?index=${index}`;
}

function deleteExpense() {
    const params = new URLSearchParams(window.location.search);
    const index = params.get('index');
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    window.location.href = '/html/expensList.html';
}

function goToList() {
    window.location.href = '/html/expensList.html';
}


/*document.addEventListener('DOMContentLoaded', loadExpenseDetail);{
    function loadExpenseDetail() {
        const urlParams = new URLSearchParams(window.location.search);
        const index = urlParams.get('index');
        let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
        let expense = expenses[index];
        document.getElementById('expenseDetail').innerHTML = `
            <p><strong>Date:</strong> ${expense.date}</p>
            <p><strong>Category:</strong> ${expense.category}</p>
            <p><strong>Amount:</strong> $${expense.amount.toFixed(2)}</p>
            <p><strong>Description:</strong> ${expense.description}</p>
            <p><strong>Payment Method:</strong> ${expense.paymentMethod}</p>
            <p><strong>Receipt:</strong> ${expense.receipt}</p>
        `;

    }

    function editExpense() {
        window.location.href = `expense-form.html?editIndex=${index}`;
    }

    function deleteExpense() {
        expenses.splice(index, 1);
        localStorage.setItem('expenses', JSON.stringify(expenses));
        window.location.href = '/html/expensList.html';
    }

    function goToList() {
        window.location.href = '/html/expensList.html';
    }
}*/