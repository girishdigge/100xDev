import { useEffect, useState } from 'react';
import { Card, Typography } from '@mui/material';
const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/admin/courses', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    }).then((res) => {
      res.json().then((data) => {
        setCourses(data.courses);
      });
    });
  }, []);
  console.log(courses);
  return (
    <div
      style={{
        display: 'flex',
        width: 400,
        margin: 10,
        minHeight: 200,
      }}
    >
      {courses.map((course, index) => {
        return (
          <Card key={index}>
            <Typography textAlign={'center'} variant='h4'>
              {course.title}
            </Typography>
            <Typography textAlign={'center'} variant='subtitle1'>
              {course.description}
            </Typography>
          </Card>
        );
      })}
    </div>
  );
};
export default Courses;
