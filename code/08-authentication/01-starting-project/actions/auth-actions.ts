"use server";

import exp from "constants";

const signup = async (prevState, formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  let errors: { email?: string; password?: string } = {};

  if (!email.includes("@")) {
    errors.email = "Please enter a valid email address.";
  }

  if (password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  // store it in the database (create a new user)
};

export { signup };
