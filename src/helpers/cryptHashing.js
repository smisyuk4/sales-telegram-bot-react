// import bcrypt from 'bcrypt';

const { VITE_SALT } = import.meta.env;

export const decode = async data => {
  console.log(VITE_SALT);
  console.log(data);
};

