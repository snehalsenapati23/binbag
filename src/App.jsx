import Login from "./pages/Login/Login";

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import ReimbursementForm from "./pages/ReimbursementForm/ReimbursementForm";


function App() {

  const users = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Steve Smith' },
    { id: '4', name: 'Ramesh' },
    { id: '5', name: 'Suresh' },
    { id: '6', name: 'Dhoni' },
    { id: '7', name: 'Suraj' },
    // Add more users as needed
  ];

  const handleFormSubmit = (formData) => {
    // Implement form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
  
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/reimbursement" element={<ReimbursementForm onSubmit={handleFormSubmit} users={users} />}/>
    </Routes>
    </Router>

  );
}

export default App;
