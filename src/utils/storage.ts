export const setToLS = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLS = (key: string) => {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
};
