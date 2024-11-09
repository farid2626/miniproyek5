// App.js
import React from 'react';
import { LanguageProvider } from './LanguageContext';
import StudentList from './StudentList';
import StudentForm from './StudentForm';

const App = () => {
  return (
    <LanguageProvider>
      <div>
        <StudentList />
        {/* Add navigation and routes here */}
        <StudentForm />
      </div>
    </LanguageProvider>
  );
};

export default App;


