// src/components/TeacherTable.js
import React, { useState, useEffect } from 'react';
import './TeacherTable.css'; // Import CSS for styling

const TeacherTable = () => {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:9000/getTeacher')
            .then(response => response.json())
            .then(data => {
                setTeachers(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching teacher data:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data.</p>;

    return (
        <div>
            <h1>Teacher Details</h1>
            <table className="teacher-table">
                <thead>
                    <tr>
                        <th>Image Title</th>
                        <th>Designation</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.length > 0 ? (
                        teachers.map((teacher) => (
                            <tr key={teacher._id}>
                                <td>{teacher.imageTitle}</td>
                                <td>{teacher.designation}</td>
                                <td>
                                    {teacher.teacherImg && (
                                        <img
                                        src={`http://localhost:9000/${teacher.teacherImg}`} // Make sure this URL is correct
                                            alt={teacher.imageTitle}
                                            className="teacher-image"
                                        />
                                    )}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TeacherTable;
