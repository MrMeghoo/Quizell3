import React from 'react';

const DonateButton = () => {
  const handleClick = () => {
    const stripeDonationURL = 'https://buy.stripe.com/test_aEUg1F1dk9Lw2yI9AA';
    window.open(stripeDonationURL, '_blank');
  };

  return (
    <button onClick={handleClick}>Be my sugar momma</button>
  );
};

export default DonateButton;
