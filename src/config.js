export const APP_ID = "61e268c95ba982497721bf78";
export const URL_API = "https://dummyapi.io/data/v1";
export const LIMIT_POST_PER_PAGE = 10;
export const LIMIT_LIST_USER_PER_PAGE = 20;

export const formatDate = (date) => {
  const value = new Date(date);
  const dateToString = `${value.toLocaleDateString()} ${value.toLocaleTimeString()}`;
  return dateToString;
};
