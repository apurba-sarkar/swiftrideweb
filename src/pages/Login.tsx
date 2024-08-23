import React, { FormEvent, useState } from "react";

export default function Login() {
  const initialState: {
    fullname: string;
    age: string;
  } = {
    fullname: "",
    age: "",
  };
  console.log(initialState);
  const [data, setData] = useState(initialState);

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    setData(initialState);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="enter your fullname" />
      <input type="text" placeholder="enter your age" />
      <input type="text" placeholder="enter your pincode" />
      <input type="text" placeholder="enter your email" />
    </form>
  );
}
