import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const resetForm = () => {
    setValues(initialState);
    setErrors({});
  };

  const handleInputChange = ({ target: { name, value } }, pattern) => {
    setValues({
      ...values,
      [name]: value,
    });

    if (!value.match(pattern)) {
      setErrors({
        ...errors,
        [name]: true,
      });
    } else {
      setErrors({
        ...errors,
        [name]: false,
      });
    }

    console.log(values);
  };

  return [values, handleInputChange, resetForm, errors];
};
