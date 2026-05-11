import React, { useState } from 'react';

function Brain() {
  const [note, setNote] = useState('');
  const [uploads, setUploads] = useState([]);
  const [category, setCategory] = useState('Note');

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const updated = [
      ...uploads,
      ...files.map(file => ({
        id: Date.now() + Math.random(),
        name: file.name,
        size: (file.size / 1024).toFixed(1) + ' KB',
        type: file.type,
        date: new Date().toLocaleDateString(),
        category: 'Upload',
        url: URL.createObjectURL(file),
        isNote: false
      }))
    ];
    setUploads(updated);
  };

  const handleNoteSubmit = (e) => {
    e.preventDefault();
    if (note.trim()) {
      const newNote = {
        id: Date.now(),
        name: note.slice(0, 25) + (note.length > 25 ? '...' : ''),
        size: '-',
        type: 'text',
        date: new Date().toLocaleDateString(),
        content: note,
        category,
        isNote: true
      };
      setUploads([newNote, ...uploads]);
      setNote('');
    }
  };

  const handleDelete = (id) => {
    setUploads(uploads.filter(item => item.id !== id));
  };

  return (
    <div className="container py-4">
      <h2 className="text-primary mb-4">Brain – Notes & Upload Vault</h2>

      {/* Note Input */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <form onSubmit={handleNoteSubmit}>
            <div className="mb-2">
              <textarea
                className="form-control"
                placeholder="Write your thought or note here..."
                rows="3"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <select
                className="form-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Note">Note</option>
                <option value="Reminder">Reminder</option>
                <option value="Idea">Idea</option>
                <option value="Bank Doc">Bank Doc</option>
              </select>
            </div>
            <button type="submit" className="btn btn-success">Save Note</button>
          </form>
        </div>
      </div>

      {/* File Upload */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <label className="form-label">Upload PDFs, Docs, Screenshots</label>
          <input
            type="file"
            className="form-control"
            multiple
            onChange={handleUpload}
          />
        </div>
      </div>

      {/* Upload List */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-3">Your Notes & Uploads</h5>
          {uploads.length === 0 ? (
            <p className="text-muted">Nothing saved yet.</p>
          ) : (
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Type</th>
                  <th>Size</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {uploads.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>
                      <span className="badge bg-secondary">{item.category}</span>
                    </td>
                    <td>{item.type.includes('image') ? 'Image' : item.type}</td>
                    <td>{item.size}</td>
                    <td>{item.date}</td>
                    <td>
                      {item.isNote ? (
                        <button className="btn btn-sm btn-outline-info me-2" onClick={() => alert(item.content)}>
                          View
                        </button>
                      ) : (
                        <a
                          href={item.url}
                          download={item.name}
                          className="btn btn-sm btn-outline-primary me-2"
                        >
                          Download
                        </a>
                      )}
                      <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(item.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Brain;