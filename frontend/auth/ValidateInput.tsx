//validate email
export const isValidEmail = (stringEmail: string) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringEmail);
};

//validate password
export const isValidPassword = (stringPassword: string) =>
  stringPassword.length >= 6;
