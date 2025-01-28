import { useState } from 'react'
import '../../scss/registration.scss'
import * as bootstrap from 'bootstrap'
import axios from 'axios'

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  }); 

  // handle msg / error state
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


// Form submit 

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post("http://localhost:7777/api/users/register", formData, {
        headers: { "Content-Type": "application/json" },
      });

      setMessage("Registration successful - You can now log in.");
      setFormData({ name: "", email: "", password: "" });

    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message || "An error occurred.");
      } else {
        setError("Something went wrong - Please try again.");
      }
    }
  };

  return (
    <>
      <div className="registration-container">
        <h1 className="title">Register</h1>
        <form onSubmit={submit} className="registration-form mb-3">

          {/* name input */ }
          <div>
            <label>
              User Name
            </label>
            <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            />
          </div>

          {/* email input */ }
          <div>
            <label>
              E-mail
            </label>
            <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            />
          </div>

          {/* password input */ }
          <div>
            <label>
              Password
            </label>
            <input
            type="text"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-100 mt-5">
            Register
          </button>
          
          {/* messages/errors */}
          {message && <div className="alert alert-success mt-3">{message}</div>}
          {error && <div className="alert alert-danger mt-3">{error}</div>}
          
        </form>
      </div>
    </>
  )
};

export default Register
