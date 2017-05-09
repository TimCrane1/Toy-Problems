//---- Regex Validation ----//

// The function regexValidate should check a password to make sure it meets the following criteria:
// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// is only be alphanumeric characters

function regexValidate(password) {
// (?=.*[a-z]) a lowercase letter
// (?=.*[A-Z]) an upper case letter
// (?=.*?[0-9]) a number
// [A-Za-z0-9] all alphanumeric 
// {6,} min length 6
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password);
}