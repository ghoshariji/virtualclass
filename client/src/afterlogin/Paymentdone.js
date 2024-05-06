
import React from 'react';
import "../customcss/payment.css"

const Paymentdone = () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  return (
    <div className="payment-container">
      <div className="payment-box">
        <h3 className="payment-title">Payment successful</h3>
        <p className="payment-text">Order id: {id}</p>
      </div>
    </div>
  );
}

export default Paymentdone;

