import React from 'react';
import "../App.css";

const ShareDialog = ({ postUrl, closeDialog }) => {
  return (
    <div className="dialog-overlay">
      <dialog open>
        <div className="homeText">
          <h2>Share Post</h2>
          <p>URL copied to clipboard:</p>
          <input
            type="text"
            value={postUrl}
            readOnly
            onFocus={(e) => e.target.select()}
          />
          <button onClick={closeDialog}>Close</button>
        </div>
      </dialog>
    </div>
  );
};

export default ShareDialog;
