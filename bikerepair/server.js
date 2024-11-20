// Import axios
const axios = require('axios');

// Your OpenAI API key (replace with your actual API key)
const API_KEY = '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';

// Define the request payload for the chat completion model
const requestData = {
  model: 'gpt-3.5-turbo', // Change to 'gpt-4' for GPT-4
  messages: [
    { role: 'user', content: 'Tell me how to fix my bike brakes.' } // Example prompt
  ],
  max_tokens: 150 // You can adjust the number of tokens based on your needs
};

// Make a POST request to the OpenAI API
axios.post('https://api.openai.com/v1/chat/completions', requestData, {
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  }
})
  .then(response => {
    // Handle the successful response
    console.log('Response:', response.data);
  })
  .catch(error => {
    // Handle any errors that occur
    if (error.response) {
      // If the error has a response (from the server)
      console.error('Error response:', error.response.data);
    } else if (error.request) {
      // If no response was received
      console.error('No response received:', error.request);
    } else {
      // Other types of errors
      console.error('Error message:', error.message);
    }
  });
