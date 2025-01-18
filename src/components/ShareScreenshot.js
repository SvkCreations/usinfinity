import React from 'react';
import html2canvas from 'html2canvas';
import { Icon } from '@iconify/react/dist/iconify.js';

const ShareScreenshot = () => {
  const handleFullPageCaptureAndShare = async () => {
    const canvas = await html2canvas(document.body, {
      scrollY: -window.scrollY, // Capture scrolled content
      windowWidth: document.documentElement.scrollWidth,
      windowHeight: document.documentElement.scrollHeight,
    });

    canvas.toBlob(async (blob) => {
      const file = new File([blob], 'MyScore.png', { type: 'image/png' });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            title: 'My Score',
            text: 'Check out my score of our quiz!',
            files: [file],
          });
        } catch (error) {
          alert('Sharing failed: ' + error.message);
        }
      } else {
        const link = document.createElement('a');
        link.download = 'MyScore.png';
        link.href = canvas.toDataURL();
        link.click();
        alert('Sharing not supported. Screenshot downloaded instead.');
      }
    });
  };

  return (
    <div className='my-5 my-md-5 d-flex flex-column align-items-center justify-content-center'>
      <p className='fw-bold'>Now share your score with your partner!</p>
    <button className='d-flex align-items-center gap-2 btn secondary-btn' onClick={handleFullPageCaptureAndShare}>
    <Icon icon="tabler:share" width="24" height="24" />Share my score
    </button>
    </div>
  );
};

export default ShareScreenshot;
