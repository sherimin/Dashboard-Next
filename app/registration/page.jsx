import React from "react";
import RegistrationForm from "../ui/registration/registrationForm/registrationForm";
import styles from "@/app/ui/registration/registration.module.css";

const Registration = () => {
  return (
    <div className={styles.container}>
      <RegistrationForm />
    </div>
  );
};

export default Registration;
