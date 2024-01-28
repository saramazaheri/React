import { useState } from "react";

function Form() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [role, setRole] = useState("user");
  // const [gender, setGender] = useState("");
  // const [rules, setRule] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "user",
    gender: "male",
    rules: false,
  });

  const submitHandler = (event) => {
    event.preventDefault();
    console.log({ form });
  };

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "rules") {
      setForm((form) => ({ ...form, rules: !form.rules }));
    } else {
      setForm((form) => ({ ...form, [name]: value }));
    }
  };

  // const emailHandler = (event) => {
  //   setEmail(event.target.value);
  // };

  // const passwordHandler = (event) => {
  //   setPassword(event.target.value);
  // };

  // const selectHandler = (event) => {
  //   setRole(event.target.value);
  // };

  // const genderHandler = (event) => {
  //   setGender(event.target.value);
  // };

  // const roleHandler = (event) => {
  //   setRule(event.target.value);
  // };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={changeHandler}
          value={form.email}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={form.password}
          onChange={changeHandler}
        />
        <select value={form.role} name="role" onChange={changeHandler}>
          <option value="admin">Admin</option>
          <option value="writer">Writer</option>
          <option value="user">User</option>
        </select>
        <div>
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            onChange={changeHandler}
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            onChange={changeHandler}
          />
          <label htmlFor="other">Other</label>
          <input
            type="radio"
            name="gender"
            value="other"
            id="other"
            onChange={changeHandler}
          />
        </div>
        <label>Rules</label>
        <input
          type="checkbox"
          checked={form.rules}
          name="rules"
          onChange={changeHandler}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Form;
