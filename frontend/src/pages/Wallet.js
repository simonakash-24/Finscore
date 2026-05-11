import React, { useState } from 'react';

function Wallet() {
  const assets = [
    { id: 1, name: 'Gold', value: 150000 },
    { id: 2, name: 'Fixed Deposit', value: 100000 },
    { id: 3, name: 'Flat in Coimbatore', value: 800000 },
  ];

  const stocks = [
    { id: 1, name: 'TCS', units: 10, price: 3700 },
    { id: 2, name: 'Infosys', units: 15, price: 1500 },
    { id: 3, name: 'HDFC Bank', units: 20, price: 1750 },
  ];

  const sips = [
    { id: 1, name: 'Axis Bluechip Fund', monthly: 2000 },
    { id: 2, name: 'Mirae Asset Emerging Bluechip', monthly: 1500 },
  ];

  const swps = [
    { id: 1, name: 'ICICI Value Discovery Fund', amount: 5000, frequency: 'Quarterly' },
  ];

  const totalAssetValue = assets.reduce((sum, a) => sum + a.value, 0);
  const totalStockValue = stocks.reduce((sum, s) => sum + s.units * s.price, 0);
  const netWorth = totalAssetValue + totalStockValue;

  return (
    <div className="container py-4">
      <h2 className="text-primary mb-4">Wallet & Wealth Overview</h2>

      {/* Net Worth Summary */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title">Net Worth</h5>
          <h3 className="text-success">₹{netWorth.toLocaleString()}</h3>
          <p>Total Assets: ₹{totalAssetValue.toLocaleString()} | Stocks: ₹{totalStockValue.toLocaleString()}</p>
        </div>
      </div>

      {/* Assets */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title">Assets</h5>
          <table className="table table-striped mb-0">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Asset</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((a, i) => (
                <tr key={a.id}>
                  <td>{i + 1}</td>
                  <td>{a.name}</td>
                  <td>₹{a.value.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stocks */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title">Stock Holdings</h5>
          <table className="table table-bordered">
            <thead className="table-info">
              <tr>
                <th>#</th>
                <th>Stock</th>
                <th>Units</th>
                <th>Price</th>
                <th>Total Value</th>
              </tr>
            </thead>
            <tbody>
              {stocks.map((s, i) => (
                <tr key={s.id}>
                  <td>{i + 1}</td>
                  <td>{s.name}</td>
                  <td>{s.units}</td>
                  <td>₹{s.price}</td>
                  <td>₹{(s.units * s.price).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SIP/SWP */}
      <div className="row">
        <div className="col-md-6">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title">SIP Plans</h5>
              <ul className="list-group">
                {sips.map((sip) => (
                  <li key={sip.id} className="list-group-item d-flex justify-content-between align-items-center">
                    {sip.name}
                    <span>₹{sip.monthly}/mo</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title">SWP Plans</h5>
              <ul className="list-group">
                {swps.map((swp) => (
                  <li key={swp.id} className="list-group-item d-flex justify-content-between align-items-center">
                    {swp.name}
                    <span>₹{swp.amount} / {swp.frequency}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;