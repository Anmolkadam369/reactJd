import { useState } from "react";
import './AdminCreateEmployee.css'
import AdminCreateEmployeeOptions from "./AdminCreateEmployeeOptions";

const AdminCreateEmployee = (props) => {
  const [department, setDepartment] = useState("");
  const [officerName, setOfficerName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [signature, setSignature] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    
    if (
      department.trim() === "" ||
      officerName.trim() === "" ||
      employeeId.trim() === "" ||
      designation.trim() === "" ||
      email.includes('@') ||
      userName.trim() === "" ||
      password.trim() === "" ||
      date === "" ||
      !profilePicture ||
      !signature
    ) {
      alert("Please fill in all the required fields.");
      return;
    }

    const empData = {
        department,
        officerName,
        employeeId,
        designation,
        email,
        userName,
        password,
        date,
        profilePicture,
        signature,
      };
  
      props.onsaveEmpData(empData);
    console.log("Form submitted:", {
      department,
      officerName,
      employeeId,
      designation,
      email,
      userName,
      password,
      date,
      profilePicture,
      signature,
    });

    setDepartment("");
    setOfficerName("");
    setEmployeeId("");
    setDesignation("");
    setEmail("");
    setUserName("");
    setPassword("");
    setDate("");
    setProfilePicture(null);
    setSignature(null);
    setFormSubmitted(true);
  };

  return (
    <div className="employee-form">
      <form onSubmit={formSubmitHandler}>
        <div className="employee-input">
        <label className="form-label">
          Name of Department
          <select
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
            required
          >
            <option value="">Select Department</option>
            <option value="Administration">Administration</option>
            <option value="CO">CO Department</option>
            <option value="HR">HR Department</option>
            <option value="Membership">Membership Department</option>
            <option value="Wings">Wings Department</option>
            <option value="Accounts">Accounts Department</option>
            <option value="Publications">Publications Department</option>
            <option value="Misc">Miscelleneous</option>
          </select>
        </label></div>
        <div className="employee-input">
        <label className="form-label">
          Name of the Officer
          <input
            type="text"
            value={officerName}
            onChange={(event) => setOfficerName(event.target.value)}
            required
          />
        </label>
       </div>
       <div className="employee-input">
        <label className="form-label">
          Employee ID
          <input
            type="text"
            value={employeeId}
            onChange={(event) => setEmployeeId(event.target.value)}
            required
          />
        </label></div>
        <div className="employee-input">
        
        <label className="form-label">
          Designation
          <select
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
            required
          >
            <option value="">Select Designation</option>
            <option value="EXECUTIVE DIRECTOR">EXECUTIVE DIRECTOR</option>
            <option value="HR">HR</option>
            <option value="SECRETARY">SECRETARY</option>
            <option value="DIGITAL EFFORTS">DIGITAL EFFORTS</option>
            <option value="ACCOUNTANT">ACCOUNTANT</option>
            <option value="MARKETING EXECUTIVE">MARKETING EXECUTIVE</option>
            <option value="LEGAL-1">LEGAL-1</option>
            <option value="LEGAL-2">LEGAL-2</option>
            <option value="LEGAL-3">LEGAL-3</option>
            <option value="LEGAL-4">LEGAL-4</option>
            <option value="ASST. SECRETARY">ASST. SECRETARY</option>
            <option value="RECEPTIONIST">RECEPTIONIST</option>
            <option value="Wings">ADMIN MANAGER</option>
            <option value="CO-ADMIN MANAGER">CO-ADMIN MANAGER</option>
          </select>
        </label></div>
        <div className="employee-input">
        <label className="form-label">
          Email ID
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        </div>
        <div className="employee-input">
        <label className="form-label">
          User Name
          <input
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            required
          />
        </label></div>
        <div className="employee-input">
        <label className="form-label">
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        </div>
        <div className="employee-input">
        <label className="form-label">
          Date
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
          />
        </label></div>
        <div className="employee-input">
        <label className="form-label">
          Upload Profile Picture
          <input
            type="file"
            onChange={(event) => setProfilePicture(event.target.files[0])}
            required
          />
        </label></div>
        <div className="employee-input">
        <label className="form-label">
          UPLOAD FILE - Signature
          <input
            type="file"
            onChange={(event) => setSignature(event.target.files[0])}
            required
          />
        </label></div>
          
        {formSubmitted && <p>Form submitted successfully!</p> }
        
        <button type="submit" style={{marginLeft:'5%'}}>Create</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <AdminCreateEmployeeOptions/>
      </form>
      
    </div>
  );
};

export default AdminCreateEmployee;
