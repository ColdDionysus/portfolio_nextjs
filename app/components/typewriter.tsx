"use client"
import { useEffect, useState } from 'react';

const Typewriter = () => {
  const textToType = "Full Stack Developer | UI/UX Enthusiast | Creator";
  const [typedText, setTypedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    let isDeleting = false; // Flag to indicate if the text is being deleted

    const typeWriter = () => {
      if (index <= textToType.length) {
        if (!isDeleting) {
          setTypedText((prevText) => prevText + textToType.charAt(index));
        } else {
          setTypedText((prevText) => prevText.slice(0, prevText.length - 1));
        }

        index += isDeleting ? -1 : 1;
        const delay = isDeleting ? 50 : 100;
        setTimeout(typeWriter, delay);
      } else {
        if (!isDeleting) {
          setTimeout(() => {
            isDeleting = true; // Start deleting
            setCursorVisible(true); // Show cursor for the reverse typing effect
            setTimeout(typeWriter, 500); // Delay before starting the reverse typing
          }, 1000); // Delay before starting the reverse typing effect
        } else {
          setCursorVisible(false); // Hide cursor after deleting is done
        }
      }
    };

    // Reset the typedText state and start the typewriter effect
    setTypedText('');
    setCursorVisible(true);
    typeWriter();
  }, []);

  useEffect(() => {
    // Create a blinking cursor effect
    const cursorInterval = setInterval(() => {
      setCursorVisible((prevValue) => !prevValue);
    }, 500); // Adjust the blinking speed by changing the interval value (milliseconds)

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="typewriter-container">
      <p className="typed-text">{typedText}</p>
      <div className={`cursor ${cursorVisible ? 'visible' : ''}`}></div>
    </div>
  );
};

export default Typewriter;
