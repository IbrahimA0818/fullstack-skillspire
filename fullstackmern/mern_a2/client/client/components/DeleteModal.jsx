import React from 'react';

function DeleteModal({ course, onConfirm, onCancel }) {
  if (!course) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <span>Delete a course</span>
          <div className="modal-url">
            http://localhost/courses/destroy/{course._id}
          </div>
        </div>
        <div className="modal-body">
          <h3>Are you sure you want to delete the following course?</h3>
          <div className="course-details">
            <p><strong>Name:</strong> {course.name}</p>
            <p><strong>Description:</strong> {course.description}</p>
          </div>
          <div className="modal-actions">
            <button className="btn-no" onClick={onCancel}>No</button>
            <button className="btn-yes" onClick={onConfirm}>
              Yes! I want to delete this
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;