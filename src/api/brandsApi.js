import axios from "axios";

const API_BASE_URL = "https://6953a3b7a319a928023c1c63.mockapi.io/api";

// Add timeout to prevent hanging requests
const axiosInstance = axios.create({
  timeout: 10000, // 10 seconds
});

export async function getBrands() {
  try {
    const response = await axiosInstance.get(`${API_BASE_URL}/brands`);
    return response.data;
  } catch (error) {
    console.error("Error fetching brands:", error);
    
    // Handle different error types
    if (error.code === 'ECONNABORTED' || error.message.includes('timeout')) {
      throw new Error("Request timed out. Please check your connection.");
    }
    if (error.code === 'NETWORK_ERROR' || !error.response) {
      throw new Error("Network error. Please check your internet connection.");
    }
    if (error.response?.status === 404) {
      throw new Error("Brands endpoint not found");
    }
    if (error.response?.status >= 500) {
      throw new Error("Server error. Please try again later.");
    }
    
    throw new Error(error.message || "Failed to fetch brands");
  }
}

export async function getBrandById(id) {
  try {
    const response = await axiosInstance.get(`${API_BASE_URL}/brands/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching brand ${id}:`, error);
    
    // Handle different error types
    if (error.code === 'ECONNABORTED' || error.message.includes('timeout')) {
      throw new Error("Request timed out. Please check your connection.");
    }
    if (error.code === 'NETWORK_ERROR' || !error.response) {
      throw new Error("Network error. Please check your internet connection.");
    }
    if (error.response?.status === 404) {
      throw new Error("Brand not found");
    }
    if (error.response?.status >= 500) {
      throw new Error("Server error. Please try again later.");
    }
    
    throw new Error(error.message || "Failed to fetch brand details");
  }
}
