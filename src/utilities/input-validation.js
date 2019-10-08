export function emailValidation(email) {
  // eslint-disable-next-line
  var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regexp.test(String(email).toLowerCase());
}

export function passwordValidation(
  password,
  minLength = 0,
  maxLength = Infinity,
  regexp = false
) {
  if (password.length < minLength) {
    return false;
  }
  if (password.length > maxLength) {
    return false;
  }
  if (regexp) {
    return regexp.test(String(password));
  }

  return true;
}
