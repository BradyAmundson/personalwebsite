import React, { useState } from "react";

const PopUp = ({ targetX, targetY, onClose }) => {
  return (
    <div
      style={{
        position: "relative",
        top: targetY + 20, // Adjust positioning as needed
        left: targetX + 10, // Adjust positioning as needed
        borderRadius: '8px',
        padding: "10px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        zIndex: 9999,
        color: "black",
        width: "100px",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: '-20px',
          left: '20px',
          width: '0',
          height: '0',
          borderBottom: '20px solid transparent',
          borderRight: '20px solid #fff',
          zIndex: 1,
        }}
      />
      <div style={{ marginTop: "4px" }}>Check out my socials!</div>
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "1px",
          right: "-1px",
          border: "none",
          background: "none",
          cursor: "pointer",
        }}
      >
        X
      </button>
    </div>
  );
};

export default PopUp;
