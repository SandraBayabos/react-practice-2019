import React from "react";

//the Alert component only displays the alert on the screen

// as long as alert is not null, then show a div with the message

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle">{alert.msg}</i>
      </div>
    )
  );
};

export default Alert;
