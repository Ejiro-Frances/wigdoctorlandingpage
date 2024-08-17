import React from "react";

const Service = ({ Image, Title, Price }) => {
  return (
    <div className="services">
      <img src={Image} alt="hair" />
      <p>{Title}</p>
      <h4>${Price}</h4>
    </div>
  );
};

export default Service;
