import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [suggestedColor, setSuggestedColor] = useState('');
  const [colorImage, setColorImage] = useState('');

  useEffect(() => {
    const fetchColorSuggestion = async () => {
      try {
        const response = await axios.get('/api/colors/suggestion');
        const { color, image } = response.data;
        setSuggestedColor(color);
        setColorImage(image);
      } catch (error) {
        console.error('Error:', error.response.data.message);
      }
    };

    fetchColorSuggestion();
  }, []);

  return (
    <div className="dashboard dashboard-container">
      <h2>Color Suggestion</h2>
      <div className="color-container">
        <img className="color-image" src={colorImage} alt={suggestedColor} />
        <p>{suggestedColor}</p>
      </div>
    </div>
  );
};

export default Dashboard;
