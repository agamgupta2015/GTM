import React from 'react';
import { useLocation } from 'react-router-dom';
import './Share.css';

const ShareButton = ({ speed }) => {
  const location = useLocation();

  const generateShareURL = () => {
    const url = `${window.location.origin}${location.pathname}?speed=${speed}`;
    navigator.clipboard.writeText(url);
    alert('URL copied to clipboard: ' + url);
  };

  return (
    <button onClick={generateShareURL} className="share-button">
      Share
    </button>
  );
};

export default ShareButton;
