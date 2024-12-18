import axios from "axios";

const BASE_URL = "http://localhost:5000"; // Replace with your backend URL

// API to send abstract to backend and get journal recommendations
export const getJournalRecommendations = async (abstract) => {
  try {
    const response = await axios.post(`${BASE_URL}/journals/recommend`, { abstract });
    return response.data;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    return [];
  }
};

