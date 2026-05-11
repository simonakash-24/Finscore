import React, { useState } from 'react';

function Account() {
  const [digilocker, setDigilocker] = useState(null);

  const user = {
    name: 'Arjun R',
    email: 'arjun@example.com',
    phone: '+91 9876543210',
    aadhaar: 'XXXX-XXXX-1234',
    pan: 'ABCDE1234F'
  };

  const verificationLogs = [
    { id: 1, type: 'Live Photo', date: '2025-05-18', status: 'Verified' },
    { id: 2, type: 'Bank Sync', date: '2025-05-17', status: 'Linked' },
    { id: 3, type: 'Digital Signature', date: '2025-05-16', status: 'Signed' }
  ];

  const handleDigilockerUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDigilocker({
        name: file.name,
        size: (file.size / 1024).toFixed(1) + ' KB',
        url: URL.createObjectURL(file)
      });
    }
  };

  return (
    <div className="container py-4" style={{ fontFamily: 'Segoe UI, Roboto, sans-serif' }}>
      <h2 className="text-primary mb-4">Account Overview</h2>

      {/* Personal Info */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title">Personal Information</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Name: <strong>{user.name}</strong></li>
            <li className="list-group-item">Email: <strong>{user.email}</strong></li>
            <li className="list-group-item">Phone: <strong>{user.phone}</strong></li>
            <li className="list-group-item">Aadhaar: <strong>{user.aadhaar}</strong></li>
            <li className="list-group-item">PAN: <strong>{user.pan}</strong></li>
          </ul>
        </div>
      </div>

      {/* Digital Verification Logs */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title">Digital Verification Records</h5>
          <table className="table table-bordered mt-3">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Type</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {verificationLogs.map((log, index) => (
                <tr key={log.id}>
                  <td>{index + 1}</td>
                  <td>{log.type}</td>
                  <td>{log.date}</td>
                  <td><span className="badge bg-success">{log.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Digilocker Upload */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title">Digilocker Proof Attachment</h5>
          <input type="file" className="form-control mb-3" onChange={handleDigilockerUpload} />
          {digilocker && (
            <div className="alert alert-secondary">
              <strong>{digilocker.name}</strong> ({digilocker.size}) <br />
              <a href={digilocker.url} download className="btn btn-sm btn-outline-primary mt-2">
                Download/View
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Settings & Logout */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Settings</h5>
          <button className="btn btn-outline-secondary me-2">Edit Profile</button>
          <button className="btn btn-outline-warning me-2">Change Password</button>
          <button className="btn btn-outline-danger float-end">Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Account;