const BASE_URL = "https://lumoshive-academy-api.vercel.app/students";
const API_KEY = "akusianakgembala";

const headers = {
  "Content-Type": "application/json",
  "api-key": API_KEY,
};

export const listStudents = async () => {
  const response = await fetch(`${BASE_URL}`, { headers });
  return response.json();
};

export const getStudent = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, { headers });
  return response.json();
};

export const createStudent = async (data) => {
  const response = await fetch(`${BASE_URL}`, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });
  return response.json();
};

export const updateStudent = async (id, data) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(data),
  });
  return response.json();
};

export const deleteStudent = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers,
  });
  return response.json();
};
