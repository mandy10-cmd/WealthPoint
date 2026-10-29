import { useState, useEffect } from 'react';
import { 
  Download, Trash2, Users, Mail, Phone, Calendar, Lock, 
  Search, FileText, ExternalLink, FileSpreadsheet, Gift, 
  ClipboardList, FileEdit, Send 
} from 'lucide-react';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  const [submissions, setSubmissions] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // Tabs: 'admin' (Docs), 'submissions' (Table), 'broadcast' (Messages)
  const [activeTab, setActiveTab] = useState('admin');

  // Broadcast Template States (For the mockup form)
  const [templateTitle, setTemplateTitle] = useState('');
  const [templateMessage, setTemplateMessage] = useState('');

  const ADMIN_PASSWORD = 'admin123';

  // --- Admin Document Links Data ---
  const clientDocs = [
    {
      id: 1,
      title: "Portfolio Review - Excel",
      description: "Let's Client active SIP / Portfolio Current Investment Returns",
      link: "https://docs.google.com/spreadsheets/d/YOUR_DOCUMENT_ID_HERE/edit",
      icon: <FileSpreadsheet className="text-green-600" size={24} />
    },
    {
      id: 2,
      title: "Folio Detail Report",
      description: "Provides the Folio details and account mapped for each client",
      link: "https://docs.google.com/spreadsheets/d/YOUR_DOCUMENT_ID_HERE/edit",
      icon: <FileText className="text-blue-600" size={24} />
    },
    {
      id: 3,
      title: "Client Investment Detail",
      description: "Provides Client Investment Analysis for each client.",
      link: "https://docs.google.com/spreadsheets/d/YOUR_DOCUMENT_ID_HERE/edit",
      icon: <FileText className="text-purple-600" size={24} />
    },
    {
      id: 4,
      title: "Active SIP List",
      description: "Provides Active SIP list of Clients",
      link: "https://docs.google.com/spreadsheets/d/YOUR_DOCUMENT_ID_HERE/edit",
      icon: <FileSpreadsheet className="text-orange-600" size={24} />
    },
    {
      id: 5,
      title: "Attendance / Daily Task",
      description: "Mention your Attendance and daily tasks completed.",
      link: "https://docs.google.com/spreadsheets/d/1qIy1RYnYYdwobyexrCBHGXf2PXhqfZV_Y9fmie4WMcU/edit?gid=339259138#gid=339259138",
      icon: <ClipboardList className="text-teal-600" size={24} />
    }
  ];

  // --- Broadcast Document Links Data ---
  const broadcastDocs = [
    {
      id: 1,
      title: "Client List Docs",
      description: "Master list of all client contacts, numbers, and emails for broadcasting.",
      link: "https://docs.google.com/spreadsheets/d/18Ui04Nxhwxc2kXTZ-0EULUk-loyqfb5wru4CI-e9qrM/edit?gid=0#gid=0",
      icon: <Users className="text-blue-600" size={24} />
    },
    {
      id: 2,
      title: "List of Festival dates",
      description: "Calendar of upcoming festivals for sending automated greetings.",
      link: "https://docs.google.com/spreadsheets/d/YOUR_DOCUMENT_ID_HERE/edit",
      icon: <Gift className="text-pink-600" size={24} />
    }
  ];

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

  const handleTemplateApproval = (e) => {
    e.preventDefault();
    if (!templateTitle || !templateMessage) {
      alert("Please fill in both the title and the message before submitting.");
      return;
    }
    alert(`Template "${templateTitle}" has been sent for approval successfully!`);
    setTemplateTitle('');
    setTemplateMessage('');
  };

  const exportToExcel = async () => {
    if (submissions.length === 0) {
      alert('No submissions to export!');
      return;
    }

    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Wealth Point Financial Consultant';
    workbook.created = new Date();
    
    const worksheet = workbook.addWorksheet('Contact Submissions', {
      properties: { tabColor: { argb: '1E3A8A' } },
    });

    worksheet.columns = [
      { header: 'Sr No.', key: 'srNo', width: 10 },
      { header: 'Name', key: 'name', width: 25 },
      { header: 'Email', key: 'email', width: 30 },
      { header: 'Phone', key: 'phone', width: 18 },
      { header: 'Service Interested', key: 'service', width: 22 },
      { header: 'Message', key: 'message', width: 50 },
      { header: 'Submitted At', key: 'submittedAt', width: 22 },
    ];

    const headerRow = worksheet.getRow(1);
    headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 12 };
    headerRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1E3A8A' } };
    headerRow.alignment = { vertical: 'middle', horizontal: 'center' };
    headerRow.height = 25;

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

    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber > 1) {
        row.alignment = { vertical: 'middle', wrapText: true };
        row.height = 30;
        if (rowNumber % 2 === 0) {
          row.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF3F4F6' } };
        }
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

    const date = new Date().toISOString().split('T')[0];
    const filename = `WealthPoint_Contacts_${date}.xlsx`;

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
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
              className="w-full bg-gradient-to-r from-blue-900 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all"
            >
              Login
            </button>

            <Link to="/" className="block text-center text-blue-900 hover:underline text-sm mt-4">
              ← Back to Home
            </Link>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      
      {/* BLUE NAVBAR */}
      <nav className="bg-[#0284c7] text-white px-6 shadow-md sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center h-16">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-4">
            <div className="bg-white px-2 py-1 rounded shadow-sm flex items-center justify-center w-12 h-10">
              <span className="text-[8px] text-blue-900 font-bold leading-tight text-center">WEALTH<br/>POINT</span>
            </div>
            <span className="text-2xl font-light tracking-wide">Wealth Point</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center h-full gap-6">
            <Link to="/" className="text-white hover:text-gray-200 font-medium transition-colors">
              Home
            </Link>
            
            <button 
              onClick={() => setActiveTab('admin')}
              className={`h-full flex items-center px-1 font-medium transition-colors ${
                activeTab === 'admin' 
                  ? 'border-b-4 border-white text-white' 
                  : 'text-white/80 hover:text-white border-b-4 border-transparent'
              }`}
            >
              Admin
            </button>

            <button 
              onClick={() => setActiveTab('submissions')}
              className={`h-full flex items-center px-1 font-medium transition-colors ${
                activeTab === 'submissions' 
                  ? 'border-b-4 border-white text-white' 
                  : 'text-white/80 hover:text-white border-b-4 border-transparent'
              }`}
            >
              Submissions
            </button>
            
            <button 
              onClick={() => setActiveTab('broadcast')}
              className={`h-full flex items-center px-1 font-medium transition-colors ${
                activeTab === 'broadcast' 
                  ? 'border-b-4 border-white text-white' 
                  : 'text-white/80 hover:text-white border-b-4 border-transparent'
              }`}
            >
              Broadcast messages
            </button>
            
            <button className="text-white/90 hover:text-white transition-colors ml-2">
              <Search size={20} />
            </button>

            <button
              onClick={() => setIsAuthenticated(false)}
              className="ml-4 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded text-sm font-medium transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT AREA */}
      <div>
        
        {/* === ADMIN VIEW (CLIENT DOCS) === */}
        {activeTab === 'admin' && (
          <div className="w-full">
            {/* Hero Image Placeholder */}
            <div className="w-full h-64 bg-gray-800 relative overflow-hidden flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop" 
                alt="Long Term Investment" 
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="relative z-10 text-center">
                <h1 className="text-5xl font-black text-white tracking-widest drop-shadow-lg uppercase">
                  Long Term
                </h1>
                <p className="text-white/90 mt-2 text-lg font-medium tracking-wide">Wealth Management & Reporting</p>
              </div>
            </div>

            {/* Document Links Section */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 bg-gray-50 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900">Client Reports & Documents</h2>
                  <p className="text-sm text-gray-600 mt-1">Access all Google Docs and Google Sheets mapped for clients below.</p>
                </div>
                
                <div className="divide-y divide-gray-100">
                  {clientDocs.map((doc) => (
                    <div key={doc.id} className="p-6 hover:bg-gray-50 transition-colors flex items-start gap-4 group">
                      <div className="mt-1 bg-gray-100 p-3 rounded-xl group-hover:scale-110 transition-transform">
                        {doc.icon}
                      </div>
                      <div className="flex-1">
                        <a 
                          href={doc.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-lg font-bold text-blue-900 hover:text-blue-700 hover:underline"
                        >
                          <i>{doc.title}</i>
                          <ExternalLink size={16} className="opacity-50" />
                        </a>
                        <p className="text-gray-600 mt-2 text-sm md:text-base">
                          - {doc.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* === SUBMISSIONS TABLE VIEW === */}
        {activeTab === 'submissions' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-6 flex items-center justify-between">
               <h2 className="text-2xl font-bold text-gray-900">Form Submissions Dashboard</h2>
            </div>

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

            <div className="flex flex-wrap gap-3 mb-6">
              <button
                onClick={exportToExcel}
                disabled={submissions.length === 0}
                className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all disabled:opacity-50 shadow-md"
              >
                <Download size={20} /> Export to Excel
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
                  <Trash2 size={20} /> Clear All
                </button>
              )}
            </div>

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
                          <td className="px-6 py-4"><p className="font-semibold text-gray-900">{sub.name}</p></td>
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
                          <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">{sub.submittedAt}</td>
                          <td className="px-6 py-4">
                            <button onClick={() => deleteSubmission(sub.id)} className="text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors">
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
          </div>
        )}

        {/* === BROADCAST MESSAGES VIEW === */}
        {activeTab === 'broadcast' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Broadcast Manager</h2>
              <p className="text-gray-600 mt-1">Manage your clients lists, upcoming festivals, and create message templates.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* LEFT COLUMN: Docs & Calendar */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="p-6 bg-gray-50 border-b border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                      <ClipboardList className="text-blue-600" size={20} />
                      Broadcast Resources
                    </h3>
                  </div>
                  
                  <div className="divide-y divide-gray-100">
                    {broadcastDocs.map((doc) => (
                      <div key={doc.id} className="p-6 hover:bg-gray-50 transition-colors flex items-start gap-4 group">
                        <div className="mt-1 bg-gray-100 p-3 rounded-xl group-hover:scale-110 transition-transform">
                          {doc.icon}
                        </div>
                        <div className="flex-1">
                          <a 
                            href={doc.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-lg font-bold text-blue-900 hover:text-blue-700 hover:underline"
                          >
                            {doc.title}
                            <ExternalLink size={16} className="opacity-50" />
                          </a>
                          <p className="text-gray-600 mt-2 text-sm">
                            {doc.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Create Template */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden h-fit">
                <div className="p-6 bg-gray-50 border-b border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <FileEdit className="text-orange-600" size={20} />
                    Create template here and take approval
                  </h3>
                </div>
                
                <form onSubmit={handleTemplateApproval} className="p-6 space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Template Title (e.g., Diwali Greeting)
                    </label>
                    <input
                      type="text"
                      value={templateTitle}
                      onChange={(e) => setTemplateTitle(e.target.value)}
                      placeholder="Enter template name..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message Content
                    </label>
                    <textarea
                      value={templateMessage}
                      onChange={(e) => setTemplateMessage(e.target.value)}
                      placeholder="Write your broadcast message here. E.g., Wishing you and your family a very Happy Diwali!..."
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-all shadow-md"
                  >
                    <Send size={18} />
                    Submit for Approval
                  </button>
                  <p className="text-xs text-center text-gray-500 mt-3">
                    Templates require approval before they can be sent to customized lists.
                  </p>
                </form>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminPage;