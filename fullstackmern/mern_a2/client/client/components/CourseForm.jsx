import React, { useState } from 'react';

function CourseForm({ onAddCourse }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && description.trim()) {
      onAddCourse({ name, description });
      setName('');
      setDescription('');
    }
  };

  return (
    <div className="course-form">
      <h2>Add a new course</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter course name"
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter course description"
            rows="4"
          />
        </div>
        <button type="submit" className="add-btn">Add</button>
      </form>
    </div>
  );
}

export default CourseForm;