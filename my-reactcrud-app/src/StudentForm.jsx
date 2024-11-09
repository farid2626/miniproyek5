import React from 'react';
import PropTypes from 'prop-types';
import { createStudent, updateStudent } from './api.js';
import { useFormInput, useResponsive } from './Hooks/useState.js';

const StudentForm = ({ student = {}, onSave }) => {
  const isMobile = useResponsive();
  const name = useFormInput(student.name || "", (val) => !val && "Name required");
  const year = useFormInput(student.year || "", (val) => {
    return val < 2000 || val > 2024 ? "Year must be between 2000 and 2024" : "";
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name: name.value, year: year.value };
    student.id ? await updateStudent(student.id, formData) : await createStudent(formData);
    onSave();
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: isMobile ? '100%' : '50%' }}>
      <input type="text" {...name} placeholder="Name" />
      {name.error && <span>{name.error}</span>}

      <input type="number" {...year} placeholder="Year" />
      {year.error && <span>{year.error}</span>}

      <button type="submit">{student.id ? "Update" : "Create"}</button>
    </form>
  );
};

StudentForm.propTypes = {
  student: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    year: PropTypes.number,
  }),
  onSave: PropTypes.func.isRequired,
};

export default StudentForm;

