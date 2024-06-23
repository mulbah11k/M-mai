document.addEventListener('DOMContentLoaded', renderExpenses);

    function renderExpenses() {
        const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
        const tbody = document.getElementById('expenseTableBody');
        tbody.innerHTML = '';

        expenses.forEach((expense, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${expense.date}</td>
            <td>${expense.category}</td>
            <td>${expense.amount}</td>
            <td>${expense.description}</td>
            <td>${expense.paymentMethod}</td>
            <td><button class="detail-btn" onclick="viewDetail(${index})">Detail</button></td>
            `;
            tbody.appendChild(row);
        });
    }

    function viewDetail(index) {
        window.location.href = `expensDetail.html?index=${index}`;
    }

/*document.addEventListener('DOMContentLoaded', function() {
    // Get existing expenses from localStorage
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    // Get table body element
    const tableBody = document.getElementById('expenses-table').getElementsByTagName('tbody')[0];

    // Function to create a new row for each expense
    function createExpenseRow(expense, index) {
        const newRow = tableBody.insertRow();
        
        const dateCell = newRow.insertCell(0);
        const categoryCell = newRow.insertCell(1);
        const amountCell = newRow.insertCell(2);
        const descriptionCell = newRow.insertCell(3);
        const actionCell = newRow.insertCell(4);

        dateCell.innerHTML = expense.date;
        categoryCell.innerHTML = expense.category;
        amountCell.innerHTML = '$' + parseFloat(expense.amount).toFixed(2);
        descriptionCell.innerHTML = expense.description;

        // Create detail button
        const detailButton = document.createElement('button');
        detailButton.className = 'detail';
        detailButton.innerHTML = 'Detail';
        function viewDetail(index) {
            window.location.href = `expense-detail.html?index=${index}`;
        }  
        detailButton.onclick = viewDetail(index);
        actionCell.appendChild(detailButton);

       
    }

    
});*/
    // Function to edit an expense
    /*// Function to populate table with expenses
    function populateTable() {
        tableBody.innerHTML = ''; // Clear existing rows
        expenses.forEach((expense, index) => createExpenseRow(expense, index));
    }*/
   /* function editExpense(index) {
        const expense = expenses[index];
        
        // Prefill the form with expense data
        document.getElementById('date').value = expense.date;
        document.getElementById('category').value = expense.category;
        document.getElementById('amount').value = expense.amount;
        document.getElementById('description').value = expense.description;
        document.getElementById('payment-method').value = expense.paymentMethod;
        document.getElem});entById('tags').value = expense.tags;

        // Remove the expense from the array
        expenses.splice(index, 1);
        localStorage.setItem('expenses', JSON.stringify(expenses));

        // Repopulate the table
        populateTable();
    }*/

    // Function to delete an expense
  /*  function deleteExpense(index) {
        // Remove the expense from the array
        expenses.splice(index, 1);
        localStorage.setItem('expenses', JSON.stringify(expenses));

        // Repopulate the table
        populateTable();
    }

    // Initial population of the table
    populateTable();
*/


