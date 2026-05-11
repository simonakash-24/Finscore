import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

function Cibil() {
  const creditScore = 768;

  const scoreData = {
    labels: ['Score', 'Remaining'],
    datasets: [
      {
        data: [creditScore, 900 - creditScore],
        backgroundColor: ['#28a745', '#e0e0e0'],
        borderWidth: 1,
      },
    ],
  };

  const completedLoans = [
    { id: 1, loanType: 'Home Loan', amount: 500000, status: 'Completed', endDate: '2023-11-01' },
    { id: 2, loanType: 'Personal Loan', amount: 150000, status: 'Completed', endDate: '2024-02-15' },
    { id: 3, loanType: 'Car Loan', amount: 200000, status: 'Completed', endDate: '2024-12-10' },
  ];

  return (
    <div className="container py-4">
      <h2 className="text-primary mb-4">Your Credit Score</h2>

      <div className="card shadow-sm mb-5 p-4 text-center">
        <div style={{ width: '200px', margin: '0 auto' }}>
          <Doughnut data={scoreData} />
        </div>
        <h3 className="mt-3">{creditScore} / 900</h3>
        <p className="text-muted">
          {creditScore >= 750 ? 'Excellent Credit' : 'Keep Improving'}
        </p>
      </div>

      <h4 className="mb-3">Completed Loans & EMIs</h4>
      <div className="card shadow-sm">
        <div className="card-body p-0">
          <table className="table table-striped mb-0">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Loan Type</th>
                <th>Amount</th>
                <th>Status</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
              {completedLoans.map((loan, index) => (
                <tr key={loan.id}>
                  <td>{index + 1}</td>
                  <td>{loan.loanType}</td>
                  <td>₹{loan.amount.toLocaleString()}</td>
                  <td><span className="badge bg-success">{loan.status}</span></td>
                  <td>{loan.endDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cibil;