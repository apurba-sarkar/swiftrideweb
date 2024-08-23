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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setData(initialState);
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
      <button>Submit</button>
    </form>
  );
}
