import React, { useState } from 'react';
import axios from 'axios';

function FeedbackForm2() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/feedback', { feedback });
      setFeedback('');
      // You can add code here to handle success or show a success message.
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          cols="50"
          placeholder="Enter your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default FeedbackForm2;
