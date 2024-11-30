import React, { createContext, useContext, useState } from 'react';

const FormDataContext = createContext();

export const useFormData = () => {
  return useContext(FormDataContext);
};

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState(null);

  const updateFormData = (data) => {
    setFormData(data);
    };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
