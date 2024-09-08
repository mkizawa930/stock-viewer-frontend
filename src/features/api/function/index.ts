export const BASE_URL = "http://localhost:8000";

export const getUrl = (path: string): string => {
  return new URL(path, BASE_URL).toString();
};
