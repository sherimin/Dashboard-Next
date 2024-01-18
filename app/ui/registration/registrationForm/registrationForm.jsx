import React from 'react'
import styles from "./registrationForm.module.css";
import { addUser } from "@/app/lib/actions";

const RegistrationForm = () => {
  return (
    <>
    <div className={styles.container}>
      <form className={styles.form} action={addUser}>
        <h2 className={styles.title}>Please register to proceed.</h2>
        <input type="text" placeholder="Username" name="username" required />
        <input type="email" placeholder="Email" name="email" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <input type="phone" placeholder="Phone (Optional)" name="phone" />

        <select name="isAdmin" id="isAdmin">
          <option value={true} selected>
            Is this an admin account? (Please choose yes to proceed as admin.)
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <select name="isActive" id="isActive">
          <option value={true} selected>
            Is this account active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea
          name="address"
          id="desc"
          rows="7"
          placeholder="Address (Optional)"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  )
}

export default RegistrationForm