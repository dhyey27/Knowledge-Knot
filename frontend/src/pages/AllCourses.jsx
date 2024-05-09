import Navbar from './Navbar';
import Footer from './Footer';
import React from 'react';
 
// Import your course data

import coursesData from './coursesData';
 
const CatalogPage = () => {

  return (

    <div>

      {/* Navbar (Assuming you already have it) */}

      <Navbar />
 
      <div className="catalog-container">

        <h1>Our Courses</h1>

        <div className="courses-grid">

          {coursesData.map((course, index) => (

            <div key={index} className="course-card">

              <img src={course.image} alt={course.title} />

              <h2>{course.title}</h2>

              <p>{course.description}</p>

              <p>Price: {course.price}</p>

              <button>Enroll Now</button>

            </div>

          ))}

        </div>

      </div>
 
      {/* Footer (Assuming you already have it) */}

      <Footer />

    </div>

  );

};
 
export default CatalogPage;
 
// Sample course data

const coursesData = [

  {

    title: 'Course 1',

    description: 'Description of Course 1',

    image: 'course1.jpg',

    price: '$19.99',

  },

  {

    title: 'Course 2',

    description: 'Description of Course 2',

    image: 'course2.jpg',

    price: '$24.99',

  },

  // Add more courses here...

];
