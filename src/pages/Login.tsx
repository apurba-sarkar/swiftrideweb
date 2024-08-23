/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, FormEvent, useState } from "react";

export default function Login() {
  interface FormState {
    email: string;
    password: string;
  }

  const initialState: FormState = {
    email: "",
    password: "", // Fixed the typo here
  };

  console.log(initialState);
  const [data, setData] = useState<FormState>(initialState);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setData(initialState);
    setLoading(true);
    setError(null);
    try {
      if (!data.email || !data.password) {
        throw new Error("Please fill in all fields.");
      }

      // Simulate an API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form submitted successfully:", data);

      // Reset form
      setData(initialState);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="enter your fullname"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={data.password}
        placeholder="enter your password"
        onChange={handleChange}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Submit"}
      </button>
    </form>
  );
}
