import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const ConfettiEffect = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Hide the confetti after 5 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 4500);
  }, []);

  return showConfetti ? <Confetti /> : null;
};

export default ConfettiEffect;
