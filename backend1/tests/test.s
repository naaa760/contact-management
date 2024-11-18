// tests.js
const axios = require('axios');

const API_URL = 'http://localhost:8000/api/contacts';

async function testAPI() {
  try {
    // Test POST - Create Contact
    const createResponse = await axios.post(API_URL, {
      name: 'Test User',
      email: 'test@example.com',
      phone: '1234567890'
    });
    console.log('Create Test:', createResponse.status === 201 ? 'PASSED' : 'FAILED');
    const contactId = createResponse.data.id;

    // Test GET - Read All Contacts
    const getAllResponse = await axios.get(API_URL);
    console.log('Get All Test:', getAllResponse.status === 200 ? 'PASSED' : 'FAILED');

    // Test PUT - Update Contact
    const updateResponse = await axios.put(`${API_URL}/${contactId}`, {
      name: 'Updated User',
      email: 'test@example.com',
      phone: '0987654321'
    });
    console.log('Update Test:', updateResponse.status === 200 ? 'PASSED' : 'FAILED');

    // Test DELETE - Delete Contact
    const deleteResponse = await axios.delete(`${API_URL}/${contactId}`);
    console.log('Delete Test:', deleteResponse.status === 200 ? 'PASSED' : 'FAILED');

  } catch (error) {
    console.error('Test Failed:', error.message);
  }
}

testAPI();