import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance with default config
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000, // 10 seconds
});

// Contact form submission
export const submitContactForm = async (formData) => {
    try {
        const response = await api.post('/contact', formData);
        return response.data;
    } catch (error) {
        if (error.response) {
            // Server responded with error
            throw new Error(error.response.data.message || 'Failed to submit form');
        } else if (error.request) {
            // Request made but no response
            throw new Error('No response from server. Please try again later.');
        } else {
            // Something else happened
            throw new Error('An error occurred. Please try again.');
        }
    }
};

// Health check
export const checkAPIHealth = async () => {
    try {
        const response = await api.get('/health');
        return response.data;
    } catch (error) {
        console.error('API health check failed:', error);
        return null;
    }
};

export default api;
