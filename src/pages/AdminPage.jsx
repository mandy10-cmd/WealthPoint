import { useState, useEffect } from 'react';
import { Download, Trash2, Users, Mail, Phone, Calendar, ArrowLeft, Lock } from 'lucide-react';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  const [submissions, setSubmissions] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const ADMIN_PASSWORD = 'wealthpoint@2025';

  useEffect(() => {
    if (isAuthenticated) {
      loadSubmissions();
    }
  }, [isAuthenticated]);

  const loadSubmissions = () => {
    const data = JSON.parse(localStorage.getItem('wealthpoint_submissions')) || [];
    setSubmissions(data.reverse());
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  const exportToExcel = async () => {
    if (submissions.length === 0) {
      alert('No submissions to export!');
      return;
    }

    // Create a new workbook and worksheet
    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Wealth Point Financial Consultant';
    workbook.created = new Date();
    
    const worksheet = workbook.addWorksheet('Contact Submissions', {
      properties: { tabColor: { argb: '1E3A8A' } },
    });

    // Define columns with headers and widths
    worksheet.columns = [
      { header: 'Sr No.', key: 'srNo', width: 10 },
      { header: 'Name', key: 'name', width: 25 },
      { header: 'Email', key: 'email', width: 30 },
      { header: 'Phone', key: 'phone', width: 18 },
      { header: 'Service Interested', key: 'service', width: 22 },
      { header: 'Message', key: 'message', width: 50 },
      { header: 'Submitted At', key: 'submittedAt', width: 22 },
    ];

    // Style the header row
    const headerRow = worksheet.getRow(1);
    headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 12 };
    headerRow.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF1E3A8A' },
    };
    headerRow.alignment = { vertical: 'middle', horizontal: 'center' };
    headerRow.height = 25;

    // Add data rows
    submissions.forEach((sub, index) => {
      worksheet.addRow({
        srNo: index + 1,
        name: sub.name,
        email: sub.email,
        phone: sub.phone,
        service: sub.service || 'Not Specified',
        message: sub.message,
        submittedAt: sub.submittedAt,
      });
    });

    // Style all data rows
    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber > 1) {
        row.alignment = { vertical: 'middle', wrapText: true };
        row.height = 30;
        
        // Alternate row colors
        if (rowNumber % 2 === 0) {
          row.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FFF3F4F6' },
          };
        }
        
        // Add borders
        row.eachCell((cell) => {
          cell.border = {
            top: { style: 'thin', color: { argb: 'FFE5E7EB' } },
            left: { style: 'thin', color: { argb: 'FFE5E7EB' } },
            bottom: { style: 'thin', color: { argb: 'FFE5E7EB' } },
            right: { style: 'thin', color: { argb: 'FFE5E7EB' } },
          };
        });
      }
    });

    // Generate filename
    const date = new Date().toISOString().split('T')[0];
    const filename = `WealthPoint_Contacts_${date}.xlsx`;

    // Save the file
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    saveAs(blob, filename);
  };

  const deleteSubmission = (id) => {
    if (window.confirm('Are you sure you want to delete this submission?')) {
      const updated = submissions.filter((sub) => sub.id !== id);
      setSubmissions(updated);
      localStorage.setItem('wealthpoint_submissions', JSON.stringify([...updated].reverse()));
    }
  };

  const clearAllSubmissions = () => {
    if (window.confirm('⚠️ Are you sure you want to DELETE ALL submissions? This cannot be undone!')) {
      localStorage.removeItem('wealthpoint_submissions');
      setSubmissions([]);
    }
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-900 to-indigo-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-linear-to-br from-blue-900 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock className="text-white" size={30} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
            <p className="text-gray-600 mt-2">Enter password to access dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none"
                required
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-linear-to-r from-blue-900 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all"
            >
              Login
            </button>

            <Link
              to="/"
              className="block text-center text-blue-900 hover:underline text-sm mt-4"
            >
              ← Back to Home
            </Link>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-blue-900 hover:underline"
            >
              <ArrowLeft size={20} />
              Back to Site
            </Link>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-red-600 hover:underline text-sm font-medium"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Users className="text-blue-900" size={24} />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Total Submissions</p>
                <h3 className="text-2xl font-bold text-gray-900">{submissions.length}</h3>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Calendar className="text-green-600" size={24} />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Latest Submission</p>
                <h3 className="text-sm font-bold text-gray-900">
                  {submissions.length > 0 ? submissions[0].submittedAt : 'No submissions yet'}
                </h3>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Mail className="text-purple-600" size={24} />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Data Storage</p>
                <h3 className="text-sm font-bold text-gray-900">Local Browser Storage</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={exportToExcel}
            disabled={submissions.length === 0}
            className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
          >
            <Download size={20} />
            Export to Excel
          </button>

          <button
            onClick={loadSubmissions}
            className="flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-all shadow-md"
          >
            Refresh Data
          </button>

          {submissions.length > 0 && (
            <button
              onClick={clearAllSubmissions}
              className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all shadow-md ml-auto"
            >
              <Trash2 size={20} />
              Clear All
            </button>
          )}
        </div>

        {/* Submissions Table */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          {submissions.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-gray-400" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Submissions Yet</h3>
              <p className="text-gray-600">Contact form submissions will appear here.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">#</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Name</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Contact</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Service</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Message</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {submissions.map((sub, index) => (
                    <tr key={sub.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900">{index + 1}</td>
                      <td className="px-6 py-4">
                        <p className="font-semibold text-gray-900">{sub.name}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <a href={`mailto:${sub.email}`} className="flex items-center gap-1 text-sm text-blue-900 hover:underline">
                            <Mail size={14} /> {sub.email}
                          </a>
                          <a href={`tel:${sub.phone}`} className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-900">
                            <Phone size={14} /> {sub.phone}
                          </a>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-xs font-medium">
                          {sub.service || 'Not Specified'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 max-w-xs">
                        <p className="truncate" title={sub.message}>{sub.message}</p>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                        {sub.submittedAt}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => deleteSubmission(sub.id)}
                          className="text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Info Note */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <p className="text-sm text-yellow-900">
            <strong>⚠️ Important:</strong> Data is stored in your browser's local storage. 
            Export to Excel regularly to keep backup. Clearing browser data will delete all submissions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;