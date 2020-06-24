import React from 'react';
import "./loading-spinner.scss"
function LoadingSpinner() {
  return (
     <div className="loader" 
      style={{background:"red",fontSize:"20px",textAlign:"center"}}>Loading data
    </div>
  );
}

export default LoadingSpinner;