import React from 'react'
import { useState } from 'react';
import CV from '../../assets/Ayanda Stephen Boluwatife CV.pdf'

const CTA = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDownload = () => {
    // Additional logic before the download
    setShowConfirmation(true);
  };

  const confirmDownload = () => {
    // Perform any necessary logic after the user confirms the download
    setShowConfirmation(false);
    // Trigger the download
    const downloadLink = document.createElement('a');
    downloadLink.href = process.env.PUBLIC_URL + '../../assets/Ayanda Stephen Boluwatife CV.pdf'; // Path to your CV file
    downloadLink.download = 'Ayanda Stephen Boluwatife CV.pdf'; // Name of the downloaded file
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const cancelDownload = () => {
    setShowConfirmation(false);
  };
  return (
    <div className='cta'>
        <a href={CV} className='btn' download onChange={handleDownload}>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        {showConfirmation && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to download the CV?</p>
          <button onClick={confirmDownload}>Yes</button>
          <button onClick={cancelDownload}>No</button>
        </div>
      )}
    </div>
  )
}

export default CTA