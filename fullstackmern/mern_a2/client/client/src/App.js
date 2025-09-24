import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseForm from './components/CourseForm.jsx';
import CourseList from './components/CourseList.jsx';
import DeleteModal from './components/DeleteModal.jsx';
import './App.css';

const API_URL = 'http://localhost:5000/api/courses';

function App() {
  const [courses, setCourses] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState(null);

  // Fetch courses on component mount
  useEffect(() => {
    fetchCourses();
  }, []);

  // Fetch all courses
  const fetchCourses = async () => {
    try {
      const response = await axios.get(API_URL);
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  // Add new course
  const addCourse = async (courseData) => {
    try {
      const response = await axios.post(API_URL, courseData);
      setCourses([response.data, ...courses]);
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  // Show delete confirmation
  const handleDeleteClick = (course) => {
    setCourseToDelete(course);
    setShowDeleteModal(true);
  };

  // Confirm delete
  const confirmDelete = async () => {
    if (courseToDelete) {
      try {
        await axios.delete(`${API_URL}/${courseToDelete._id}`);
        setCourses(courses.filter(c => c._id !== courseToDelete._id));
        setShowDeleteModal(false);
        setCourseToDelete(null);
      } catch (error) {
        console.error('Error deleting course:', error);
      }
    }
  };

  // Cancel delete
  const cancelDelete = () => {
    setShowDeleteModal(false);
    setCourseToDelete(null);
  };

  return (
    <div className="app">
      <div className="container">
        <CourseForm onAddCourse={addCourse} />
        <CourseList courses={courses} onDeleteClick={handleDeleteClick} />
      </div>
      {showDeleteModal && (
        <DeleteModal
          course={courseToDelete}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
}

export default App;