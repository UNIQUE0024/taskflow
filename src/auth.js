function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function validatePassword(password) {
  return password.length >= 8;
}
function handleLoginSubmit(email, password) {
  const errors = [];
  if (!validateEmail(email)) errors.push('Enter a valid email address.');
  if (!validatePassword(password)) errors.push('Password must be at least 8 characters.');
  return errors;
}
