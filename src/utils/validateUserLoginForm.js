const validateUserLoginForm = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Username field is required";
  } else if (values.username.length < 6 || values.username.length > 15)
    errors.username = "Username must be between 6 and 15 characters.";

  if (!values.password) {
    errors.password = "Password field is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  }

  return errors;
};

export default validateUserLoginForm;
