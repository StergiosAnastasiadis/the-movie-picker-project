import React from 'react'

const Loading = () => {
  return (
    <div>
      <h1>Loading...</h1>
      <div className="spinner-border text-warning" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
