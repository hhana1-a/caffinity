import React, { useState, useEffect, useRef } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Signup = () => {
  const navigate = useNavigate();
  const errorContainerRef = useRef(null);

  const [passwordMatch, setPasswordMatch] = useState(true);
  const [response, setResponse] = useState({
    success: false,
    response: {
      message: "",
    },
  });

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const { isLoading, error, performFetch } = useFetch("/signup", setResponse);

  useEffect(() => {
    if (response.response.success) {
      navigate("/login");
    }
  }, [response.response.success, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!passwordMatchCheck()) {
      return;
    }

    const submitData = {
      username: formData.username,
      password: formData.password,
    };

    performFetch({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitData),
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const passwordMatchCheck = () => {
    const match = formData.password === formData.confirmPassword;
    setPasswordMatch(match);
    return match;
  };

  const clearErrorsOnClickOutside = (event) => {
    if (
      errorContainerRef.current &&
      !errorContainerRef.current.contains(event.target)
    ) {
      setPasswordMatch(true);
      setResponse({
        success: false,
        response: { message: "" },
      });
    }
  };

  useEffect(() => {
    document.addEventListener("click", clearErrorsOnClickOutside);
    return () => {
      document.removeEventListener("click", clearErrorsOnClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        className="flex flex-col justify-center w-full max-w-md bg-primary p-6 rounded-lg text-accent"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="Enter a Username"
          type="text"
          name="username"
          onChange={handleChange}
        />

        <Input
          placeholder="Enter password"
          type="password"
          name="password"
          onChange={handleChange}
        />

        <Input
          placeholder="Confirm password"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
        />

        {(!passwordMatch ||
          isLoading ||
          error ||
          (!response.success && response.response.message)) && (
          <div
            className="flex flex-col items-center justify-center mb-4 bg-white p-4 rounded-lg"
            ref={errorContainerRef}
          >
            {!passwordMatch && (
              <p className="text-accent">Passwords do not match</p>
            )}
            {isLoading && <p>Processing...</p>}
            {error && <p>Something went wrong...</p>}
            {!response.success && response.response.message && (
              <p className="text-accent">{response.response.message}</p>
            )}
          </div>
        )}

        <Button
          type="submit"
          className="rounded-full text-white bg-accent px-6 py-2 ml-auto w-1/2 hover:bg-accent-light transition mt-2"
        >
          Signup
        </Button>

        <Link className="mt-10" to="/login">
          Already have an account? Login
        </Link>
      </form>
    </div>
  );
};

export default Signup;
