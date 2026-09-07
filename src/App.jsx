import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import AdminPage from "./pages/AdminPage";
import CompanyDetails from "./pages/CompanyDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/company-details" element={<CompanyDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;