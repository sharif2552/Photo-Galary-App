import React, { useState } from 'react';

function FeedbackForm({ contentId }) {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [feedbackList, setFeedbackList] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name.trim() === '' || feedback.trim() === '') {
      return; // Don't submit empty feedback
    }

    // Add the feedback to the list with the associated contentId
    setFeedbackList([...feedbackList, { contentId, name, feedback }]);

    // Clear the input fields
    setName('');
    setFeedback('');
  };

  const filteredFeedback = feedbackList.filter((item) => item.contentId === contentId);

  return (
    <div>
      <h2>Feedback Form for Content #{contentId}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
          />
        </div>
        <button type="submit">Submit Feedback</button>
      </form>

      <h3>Feedback for Content #{contentId}:</h3>
      <ul>
        {filteredFeedback.map((item, index) => (
          <li key={index}>
            <strong>{item.name}:</strong> {item.feedback}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeedbackForm;
