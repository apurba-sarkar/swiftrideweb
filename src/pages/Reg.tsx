/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, FormEvent, useState } from "react";

export default function Reg() {
  interface FormSubmit {
    fullname: string;
    age: string;
    pincode: string;
    mobile: string;
    email: string;
    password: string;
  }

  const initialState: FormSubmit = {
    fullname: "",
    age: "",
    pincode: "",
    mobile: "",
    email: "",
    password: "",
  };
  const [data, setData] = useState<FormSubmit>(initialState);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    setLoading(true);
    setError(null);
    try {
      if (!data.email || !data.password || !data.age) {
        throw new Error("Please fill the all fields.");
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setData(initialState);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your name"
          onChange={handleChange}
          name="fullname"
          value={data.fullname}
        />
        <input
          type="text"
          placeholder="enter your age"
          onChange={handleChange}
          name="age"
          value={data.age}
        />
        <input
          type="text"
          placeholder="enter your pincode"
          onChange={handleChange}
          name="pincode"
          value={data.pincode}
        />
        <input
          type="text"
          placeholder="enter your mobile"
          onChange={handleChange}
          value={data.mobile}
          name="mobile"
        />
        <input
          type="text"
          placeholder="enter your email"
          onChange={handleChange}
          name="email"
          value={data.email}
        />
        <input
          type="password"
          placeholder="enter your password"
          onChange={handleChange}
          name="password"
          value={data.password}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </>
  );
}
