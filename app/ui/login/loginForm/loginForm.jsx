"use client";

import { authenticate } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import styles from "./loginForm.module.css";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  // const handleLogin = async (formData) => {
  //     const data = await authenticate(formData);
  //     data.error && setErr(data.error)
  // }

  return (
    <div className={styles.container}>
      <form className={styles.form} action={formAction}>
        <h1>Please login</h1>
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
        <button>Login</button>
        {state && state}
      </form>
    </div>
  );
};

export default LoginForm;
