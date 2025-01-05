import React, { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Confetti from 'react-confetti';
import bouquetAnimation from "../assets/bouquet.json";
import '../GiftBox.css'

const GiftBox = ({ message = "You're as beautiful as these flowers! 🌸" }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(true);
  };

  return (
    <div className="flower-container">
      {!isOpened ? (
        <motion.div
          className="bouquet-wrapper"
          onClick={handleClick}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05,}}
          transition={{ duration: 0.3 }}
        >
          <Lottie style={{height:'500px', width:'500px'}} animationData={bouquetAnimation} loop={true} />
          <p className="click-hint">Click to open your bouquet!</p>
        </motion.div>
      ) : (
        <div className="flower-message-wrapper">
          <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={100} />
          <motion.div
            className="flower-message"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p>{message}</p>
            <button onClick={() => setIsOpened(false)}>Reset</button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default GiftBox;
