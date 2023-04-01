  import React, { useState } from 'react';
  import axios from 'axios';

  interface SignupFormProps {
    onSubmit: (formData: SignupFormData) => void;
  }

  interface SignupFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }

  const SignupForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<SignupFormData>({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });

    const handleSubmit = (event: any) => {
      const firstName = event.target.firstName.value
      const lastName = event.target.lastName.value
      const email = event.target.email.value
      const password = event.target.password.value
      event.preventDefault();
      axios.post('http://localhost:8000/create-user', {
        firstName,
        lastName,
        email,
        password,
      }).catch(err => {
        console.log('User already')
      })
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Sign up</button>
      </form>
    );
  };

export default SignupForm;