import React from 'react';

const ShareDialog = ({ postUrl, closeDialog }) => {
  const emailSubject = encodeURIComponent("Check out this post!");
  const emailBody = encodeURIComponent(`Here's a post I wanted to share with you: ${postUrl}`);
  const smsBody = encodeURIComponent(`Check out this post: ${postUrl}`);

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
          <div className="share-buttons">
            <a href={`mailto:?subject=${emailSubject}&body=${emailBody}`}>
              <button>Email</button>
            </a>
            <a href={`sms:?body=${smsBody}`}>
              <button>SMS</button>
            </a>
          </div>
          <button onClick={closeDialog}>Close</button>
        </div>
      </dialog>
    </div>
  );
};

export default ShareDialog;
