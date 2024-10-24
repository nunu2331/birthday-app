import React from 'react';
import './BirthdayMessages.css';

const BirthdayMessages = () => {
  const messages = [
    "Happy Birthday, my love! You make every day feel special, but today is all about celebrating you.",
    "To the most wonderful person in my life, I wish you all the happiness in the world. Happy Birthday!",
    "Every moment with you is a gift. I hope today brings you as much joy as you bring me. Happy Birthday, sweetheart!",
    "On your special day, I just want to say how much I love you and how grateful I am to have you in my life. Happy Birthday!"
  ];

  const gifUrls = [
    'https://media.giphy.com/media/3o6ZtpxSZbQRRnwCKQ/giphy.gif',
    'https://media.giphy.com/media/3oz8xKaR836UJOYeOc/giphy.gif',
    'https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif',
  ];

  return (
    <div className="birthday-container">
      {messages.map((message, index) => (
        <div key={index} className="message-container">
          <p className="message">{message}</p>
        </div>
      ))}

      {gifUrls.map((gif, index) => (
        <div key={index} className="gif-container">
          <img src={gif} alt={`love-gif-${index}`} className="gif" />
        </div>
      ))}
    </div>
  );
};

export default BirthdayMessages;
