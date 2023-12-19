"use client";

import { authenticate } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import styles from "./loginForm.module.css";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
      <form className={styles.form} action={formAction}>
        <h1>Please login</h1>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
        {state && state}
      </form>
  );
};

export default LoginForm;

