import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewArticleForm = ({ addArticle }) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateCreated = new Date().toLocaleDateString(); // Capture current date
    addArticle(title, subtitle, content, dateCreated);
    navigate('/'); // Navigate to the home page or any other desired route
  };

  return (
    <div>
      <h2>New Article</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subtitle" className="form-label">Subtitle</label>
          <input
            type="text"
            id="subtitle"
            className="form-control"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Content</label>
          <textarea
            id="content"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default NewArticleForm;
