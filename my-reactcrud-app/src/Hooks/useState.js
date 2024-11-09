import { useState } from 'react';

export const useFormInput = (initialValue, validate) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  const onChange = (e) => {
    const val = e.target.value;
    setValue(val);
    if (validate) {
      const validationError = validate(val);
      setError(validationError);
    }
  };

  return { value, onChange, error };
};




