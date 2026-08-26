import React, { useState } from "react";
export default function useForm(formValues, validatefn) {
  const [formData, setFormData] = useState(formValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const formValidation = () => {
    const newErrors = validatefn(formData);
    console.log(newErrors);

    setErrors(newErrors);
    console.log("aftr error");

    return Object.keys(newErrors).length === 0;
  };
  return { formData, errors, formValidation, handleChange };
}
