const axios = require('axios');
const qrisImageUrl = "https://your-qris-url-or-dummy-image.png";

document.getElementById("qris-image").src = qrisImageUrl;

async function generateQris(amount, orderId) {
  const apiUrl = 'https://api.paydia.id/v1/qris/generate'; 
  const apiKey = '...'; 

  try {
    const response = await axios.post(apiUrl, {
      merchantCode: '....',
      amount: amount,
      orderId: orderId,
      description: 'Pembayaran QRIS'
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data.qrUrl; 
  } catch (error) {
    console.error('Error generating QRIS:', error.response ? error.response.data : error.message);
    return null;
  }
}

(async () => {
  const qrUrl = await generateQris(10000, 'ORD123456');
  if (qrUrl) {
    console.log('QRIS URL:', qrUrl);
  }
})();
