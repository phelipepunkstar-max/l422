// geminiService.ts

// Import necessary modules
import axios from 'axios';

const GEMINI_API_URL = 'https://api.gemini.com/v1';

// Function to get market data
export const getMarketData = async (symbol: string) => {
    try {
        const response = await axios.get(`${GEMINI_API_URL}/pubticker/${symbol}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching market data:', error);
        throw new Error('Failed to fetch market data');
    }
};

// Function to get order book
export const getOrderBook = async (symbol: string) => {
    try {
        const response = await axios.get(`${GEMINI_API_URL}/book/${symbol}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching order book:', error);
        throw new Error('Failed to fetch order book');
    }
};

// Function to get trades
export const getTrades = async (symbol: string) => {
    try {
        const response = await axios.get(`${GEMINI_API_URL}/trades/${symbol}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching trades:', error);
        throw new Error('Failed to fetch trades');
    }
};

// Additional functions for more API integrations as needed
