
// ReimbursementForm.js
import React, { useState } from 'react';
import './ReimbursementForm.css'

const ReimbursementForm = ({ onSubmit, users }) => {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [outOfPocket, setOutOfPocket] = useState(false);
  const [materialTransportation, setMaterialTransportation] = useState('');
  const [other, setOther] = useState('');
  const [raisedBy, setRaisedBy] = useState('');
  const [remarks, setRemarks] = useState('');
  const [selectedRole, setSelectedRole] = useState('employee');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !amount || !paymentType || !raisedBy) {
      alert('Please fill in all required fields.');
      return;
    }

    // Validate date format
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      alert('Invalid date format. Please use YYYY-MM-DD.');
      return;
    }

    // Validate amount format
    if (isNaN(amount) || amount <= 0) {
      alert('Invalid amount. Please enter a valid number.');
      return;
    }
    if (selectedRole === 'employee') {
      onSubmit({
        date,
        amount,
        paymentType,
        outOfPocket,
        materialTransportation: outOfPocket ? materialTransportation : '',
        other: paymentType === 'Other' ? other : '',
        raisedBy,
        remarks,
      });
      alert('Your Reimbursement form successfully filled ');
      setAmount("")
      setDate("")
      setOther("")
      setRaisedBy("")
      setMaterialTransportation("")
      setOutOfPocket("")
      setRemarks("")
      setPaymentType("")

    } else {
      alert('Reimbursement form can only be submitted by employees.');
    }
  

    
  };

  return (
    <div className='reimb'>
    
    <form className='fore' onSubmit={handleSubmit}>
      
    <div className="header" style={{color:"yellow", fontFamily:"unset", borderBottomColor:"green"}}>
    <h2>ReimbursementForm Request</h2>
    </div>
    <label style={{display:"flex"}}>
        Role:
        <input
        
          type="radio"
          name="role"
          value="employee"
          checked={selectedRole === 'employee'}
          onChange={() => setSelectedRole('employee')}
        />
        Employee
        <input
          type="radio"
          name="role"
          value="admin"
          checked={selectedRole === 'admin'}
          onChange={() => setSelectedRole('admin')}
        />
        Admin
      </label>
      <label>Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </label>

      <label style={{ marginTop:"40px", marginBottom:"30px"}}>Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      </label>

      <label> Payment Type:
        <select value={paymentType} onChange={(e) => setPaymentType(e.target.value)} required>
          <option value="">Select Payment Type</option>
          <option value="Cash">Cash</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Debit Card">Debit Card</option>
          <option value="UPI">UPI</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <div style={{display:"flex"}} >
      <label htmlFor=""> Out of Pocket Expense:</label>

        <input  type="checkbox"  checked={outOfPocket} onChange={() => setOutOfPocket(!outOfPocket)} />
      </div>

      {outOfPocket && (
        <label style={{ marginTop:"40px"}}>Material Transportation:
          <input type="text" value={materialTransportation} onChange={(e) => setMaterialTransportation(e.target.value)} />
        </label>
      )}

      {paymentType === 'Other' && (
        <label style={{ marginTop:"40px"}}>Other Reason:
          <input type="text" value={other} onChange={(e) => setOther(e.target.value)} />
        </label>
      )}

      <label style={{ marginTop:"40px"}}>Raised By:
        <select value={raisedBy} onChange={(e) => setRaisedBy(e.target.value)} required>
          <option value="">Select Employee</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>
      </label>

      <label style={{ marginTop:"40px"}}>Remarks:
        <textarea  value={remarks} onChange={(e) => setRemarks(e.target.value)} />
      </label>

      <button className='sub-rein' type="submit">Submit</button>
    </form>
    
    </div>
  );
};

export default ReimbursementForm;
