// src/pages/Dashboard.js
import React from 'react';
import TeacherTable from './getTeacher.js';
import UserTable from './getUser.js';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <TeacherTable />
            <UserTable />
        </div>
    );
};

export default Dashboard;
