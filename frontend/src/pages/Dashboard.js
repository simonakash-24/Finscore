import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Dashboard() {
  const incomeData = {
    labels: ['Salary', 'Freelance', 'Interest'],
    datasets: [{
      label: 'Income',
      data: [50000, 8000, 2000],
      backgroundColor: ['#28a745', '#17a2b8', '#ffc107'],
    }]
  };

  const expenseData = {
    labels: ['EMI', 'Groceries', 'Utilities', 'Entertainment', 'Travel'],
    datasets: [{
      label: 'Expenses',
      data: [12000, 6000, 4000, 3000, 5000],
      backgroundColor: ['#dc3545', '#fd7e14', '#6c757d', '#007bff', '#20c997'],
    }]
  };

  const totalIncome = 60000;
  const totalExpenses = 30000;
  const remaining = totalIncome - totalExpenses;
  const suggestion = remaining < 10000 ? "Reduce spending next month!" : "You're on track.";

  return (
    <div className="container py-4">
      <h2 className="text-primary mb-4">Smart Financial Dashboard</h2>

      {/* Income Section */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title text-success">Income Analysis</h5>
          <p>Total Monthly Income: ₹{totalIncome.toLocaleString()}</p>
          <div style={{ maxWidth: '400px', margin: 'auto' }}>
            <Pie data={incomeData} />
          </div>
        </div>
      </div>

      {/* Expense Section */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title text-danger">Expense Tracking</h5>
          <p>Total Monthly Expenses: ₹{totalExpenses.toLocaleString()}</p>
          <div style={{ maxWidth: '600px', margin: 'auto' }}>
            <Bar data={expenseData} />
          </div>
        </div>
      </div>

      {/* Budget Summary */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title text-primary">Smart Budgeting</h5>
          <p>Remaining: ₹{remaining.toLocaleString()}</p>
          <p className={remaining < 10000 ? 'text-danger' : 'text-success'}>{suggestion}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;