import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FeedbackForm2({ contentId }) {
  const [feedback, setFeedback] = useState('');
  const [allFeedback, setAllFeedback] = useState([]);

  useEffect(() => {
    // Fetch feedback data for the specific contentId
    axios.get('http://localhost:5000/feedback')
      .then((response) => {
        // Filter and sort feedback data based on the contentId
        const filteredFeedback = response.data.filter(item => item.contentId === contentId);
        filteredFeedback.sort((a, b) => a.id - b.id); // Sort by feedback id or any other suitable criterion

        setAllFeedback(filteredFeedback);
      })
      .catch((error) => {
        // Handle error
      });
  }, [contentId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/feedback', { feedback, contentId });
      setFeedback('');
      // Fetch the updated data and set it to re-render the component
      axios.get('http://localhost:5000/feedback')
        .then((response) => {
          const filteredFeedback = response.data.filter(item => item.contentId === contentId);
          filteredFeedback.sort((a, b) => a.id - b.id);
          setAllFeedback(filteredFeedback);
        })
        .catch((error) => {
          // Handle error
        });
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="hidden"
          name="contentId"
          value={contentId}
        />
        <textarea
          rows="4"
          cols="50"
          placeholder="Enter your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button type="submit">Submit Feedback</button>
      </form>

      {/* Display feedback for the specific contentId */}
      <div>
        <h3>Feedback for Content ID {contentId}</h3>
        <ul>
          {allFeedback.map((item) => (
            <li key={item.id}>{item.feedback}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FeedbackForm2;
