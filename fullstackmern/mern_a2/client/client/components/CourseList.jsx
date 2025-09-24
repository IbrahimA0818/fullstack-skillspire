import React from 'react';

function CourseList({ courses, onDeleteClick }) {
  const formatDate = (date) => {
    const d = new Date(date);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[d.getMonth()]} ${d.getDate()} ${d.getFullYear()} ${d.toLocaleTimeString()}`;
  };

  return (
    <div className="course-list">
      <h2>Courses</h2>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Description</th>
            <th>Date Added</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course._id}>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>{formatDate(course.dateAdded)}</td>
              <td>
                <button 
                  className="remove-btn"
                  onClick={() => onDeleteClick(course)}
                >
                  remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CourseList;