document.addEventListener("DOMContentLoaded", () => {
    generateReports();
});

function generateReports() {
    const ctx = document.getElementById('expenseChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Expenses',
                data: [300, 200, 150, 100, 250, 300, 400],
                backgroundColor: 'rgba(39, 174, 96, 0.2)',
                borderColor: 'rgba(39, 174, 96, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
