import React, { useState } from 'react';

const Customer = () => {
  const [showForms, setShowForms] = useState(false);

  const handleButtonClick = () => {
    setShowForms(!showForms);
  };

  return (
    <div className="container mt-5">
      <button className="btn btn-primary" onClick={handleButtonClick}>
        Manage Plans
      </button>
      <button className="btn btn-success" >
                Display Customer Table
            </button>

      {showForms && (
        <div className="mt-4">
          {/* Renew Plan Form */}
          <form className="mb-4">
            <h4>Renew Plan</h4>
            <div className="mb-3">
              <label htmlFor="renewalDate">Renewal Date:</label>
              <input type="date" className="form-control" id="renewalDate" />
            </div>
            <div className="mb-3">
              <label htmlFor="planStatusRenew">Plan Status:</label>
              <input type="text" className="form-control" id="planStatusRenew" />
            </div>
            <button type="submit" className="btn btn-success">Submit Renewal</button>
          </form>

          {/* Upgrade/Downgrade Plan Form */}
          <form>
            <h4>Upgrade/Downgrade Plan</h4>
            <div className="mb-3">
              <label htmlFor="existingPlanName">Existing Plan Name:</label>
              <input type="text" className="form-control" id="existingPlanName" />
            </div>
            <div className="mb-3">
              <label htmlFor="newPlanName">New Plan Name:</label>
              <input type="text" className="form-control" id="newPlanName" />
            </div>
            <div className="mb-3">
              <label htmlFor="planCost">Plan Cost:</label>
              <input type="number" className="form-control" id="planCost" />
            </div>
            <div className="mb-3">
              <label htmlFor="validity">Validity:</label>
              <input type="number" className="form-control" id="validity" />
            </div>
            <div className="mb-3">
              <label htmlFor="planStatusUpgrade">Plan Status:</label>
              <input type="text" className="form-control" id="planStatusUpgrade" />
            </div>
            <button type="submit" className="btn btn-warning">Submit Upgrade/Downgrade</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Customer;