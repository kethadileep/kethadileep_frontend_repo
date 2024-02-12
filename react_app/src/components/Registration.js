import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
    const [showForms, setShowForms] = useState(false);
    const [customerData, setCustomerData] = useState(null);

    const fetchCustomerData = async () => {
        console.log('Fetching customer data:');
        console.log(customerData);
        try {
            const response = await axios.get('http://localhost:8000/customers/', 1000);
            setCustomerData(response.data);
        } catch (error) {
            console.error('Error fetching customer data:', error);
        }
    };

    const handleButtonClick = () => {
        setShowForms(!showForms);
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/customers/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(customerData),
            });

            if (response.ok) {
                console.log('Data submitted successfully');
            } else {
                console.error('Failed to submit data');
            }
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <div className="container mt-5">
            <button className="btn btn-primary mr-2" onClick={handleButtonClick}>
                Manage Customers and Plans
            </button>
            <button className="btn btn-success" onClick={fetchCustomerData}>
                Display Customer Table
            </button>

            {showForms && (
                <div className="mt-4">
                    {/* Register New Customers Form */}
                    <form className="mb-4" onSubmit={submitHandler}>
                        <h4>Register New Customers</h4>
                        <div className="mb-3">
                            <label htmlFor="name">Name:</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dob">DOB:</label>
                            <input type="date" className="form-control" id="dob" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="adharNumber">Adhar Number:</label>
                            <input type="text" className="form-control" id="adharNumber" pattern="[0-9]{12}" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="registrationDate">Registration Date:</label>
                            <input type="date" className="form-control" id="registrationDate" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mobileNumber">Assigned Mobile Number:</label>
                            <input type="tel" className="form-control" id="mobileNumber" pattern="[0-9]{10}" />
                        </div>
                        <button type="submit" className="btn btn-success">Register Customer</button>
                    </form>

                    {/* Choose New Plan Form */}
                    <form>
                        <h4>Choose New Plan</h4>
                        <div className="mb-3">
                            <label htmlFor="planName">Plan Name:</label>
                            <select className="form-control" id="planName">
                                <option value="Platinum365">Platinum365</option>
                                <option value="Gold180">Gold180</option>
                                <option value="Silver90">Silver90</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="planCost">Plan Cost:</label>
                            <input type="number" className="form-control" id="planCost" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="validity">Validity (No of Days):</label>
                            <input type="number" className="form-control" id="validity" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="planStatus">Plan Status:</label>
                            <select className="form-control" id="planStatus">
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-warning">Choose Plan</button>
                    </form>
                </div>
            )}

        </div>
    );
};


export default RegistrationForm;