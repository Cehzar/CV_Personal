// components/conexionGit.tsx
import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

const getRepositories = async (username: string) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}/repos`);
    console.log('API Response:', response.data); // Agregado para depuración
    return response.data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return []; // Devuelve un array vacío en caso de error
  }
};

export default getRepositories;
