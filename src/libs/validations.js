export const validateFrom = ({ user_name, user_email, subject, message }) => {
  if (!user_name || !user_email || !subject || !message) {
    return false;
  } else {
    return true;
  }
};
