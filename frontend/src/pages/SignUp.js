import React, { useState } from 'react';
import './Login.css'; // Optional

function SignUp() {
  const [bankAccounts, setBankAccounts] = useState(['']);
  const [photo, setPhoto] = useState(null);
  const [signature, setSignature] = useState(null);

  const handleAddBank = () => {
    setBankAccounts([...bankAccounts, '']);
  };

  const handleBankChange = (index, value) => {
    const updated = [...bankAccounts];
    updated[index] = value;
    setBankAccounts(updated);
  };

  const handlePhotoCapture = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleSignatureUpload = (e) => {
    setSignature(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log('Submitted');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '500px' }}>
        <h3 className="text-center mb-4">FinScore Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" className="form-control mb-3" placeholder="Phone number" required />
          <input type="text" className="form-control mb-3" placeholder="OTP (Phone)" required />
          <input type="email" className="form-control mb-3" placeholder="Email address" required />
          <input type="email" className="form-control mb-3" placeholder="Confirm email address" required />
          <input type="password" className="form-control mb-3" placeholder="Password" required />
          <input type="text" className="form-control mb-3" placeholder="Aadhaar number" required />
          <input type="text" className="form-control mb-3" placeholder="Aadhaar OTP" required />
          <input type="text" className="form-control mb-3" placeholder="PAN" required />

          {bankAccounts.map((account, index) => (
            <input
              key={index}
              type="text"
              className="form-control mb-2"
              placeholder={Bank Account ${index + 1}}
              value={account}
              onChange={(e) => handleBankChange(index, e.target.value)}
              required
            />
          ))}
          <button type="button" className="btn btn-outline-primary w-100 mb-3" onClick={handleAddBank}>
            + Add Another Bank
          </button>

          <label className="form-label">Capture Photo (Selfie)</label>
          <input type="file" className="form-control mb-3" accept="image/*" capture="user" onChange={handlePhotoCapture} />
          {photo && <img src={photo} alt="Selfie" className="img-thumbnail mb-3" width="100" />}

          <label className="form-label">Upload Digital Signature</label>
          <input type="file" className="form-control mb-3" accept="image/*" onChange={handleSignatureUpload} />
          {signature && <img src={signature} alt="Signature" className="img-thumbnail mb-3" width="100" />}

          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>
        <div className="text-center mt-3">
          <small>
            Already have an account? <a href="/login">Log In</a>
          </small><br />
          <small className="text-muted">Forgot any details? <a href="/help">Get Help</a></small>
        </div>
      </div>
    </div>
  );
}

export default SignUp;