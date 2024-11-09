import React, { useEffect, useState } from 'react';
import { listStudents, deleteStudent } from './api.js';
import { useLanguage } from './LanguageContext';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      const data = await listStudents();
      setStudents(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>{language === 'en' ? 'Student List' : 'Daftar Siswa'}</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.year}
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
