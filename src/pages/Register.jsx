import { useState } from 'react';

export default function RegisterResidence() {
  const [residenceName, setResidenceName] = useState('');
  const [address, setAddress] = useState('');
  const [floors, setFloors] = useState('');
  const [apartments, setApartments] = useState('');
  const [status, setStatus] = useState('active');
  const [userName, setUserName] = useState('');
  const [etage, setEtage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!residenceName || !address || !floors || !apartments || !userName || !etage) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    // TODO: send form data to Laravel API
    alert('Residence registered!');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Register Residence</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Residence Info */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Residence Name</label>
            <input
              type="text"
              value={residenceName}
              onChange={e => setResidenceName(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              value={address}
              onChange={e => setAddress(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              required
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Floors</label>
              <input
                type="number"
                min="1"
                value={floors}
                onChange={e => setFloors(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Apartments</label>
              <input
                type="number"
                min="1"
                value={apartments}
                onChange={e => setApartments(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                required
              />
            </div>
          </div>

          {/* Resident Info */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Resident Name</label>
              <input
                type="text"
                value={userName}
                onChange={e => setUserName(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Étage</label>
              <input
                type="number"
                min="0"
                value={etage}
                onChange={e => setEtage(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                required
              />
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              value={status}
              onChange={e => setStatus(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Error + Submit */}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
