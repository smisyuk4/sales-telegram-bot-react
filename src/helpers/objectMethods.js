export const isObjectEmpty = obj => {
  return Object.keys(obj).length === 0;
};

export const removeEmptyValues = obj => {
  obj.payment = obj.payment === 'true' ? true : false;
  
  if (obj.photoURL.length === 0) {
    delete obj.photoURL;
  }

  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== null));
};
