const { zokou } = require("../framework/zokou");
const axios = require('axios');

async function getChatGPTResponse(question) {
  const OPENAI_API_KEY = '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';

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/completions',
      {
        prompt: question,
        max_tokens: 200,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    const data = response.data;
    return data.choices[0].text.trim();
  } catch (error) {
    console.error('Erreur lors de la requête à l\'API OpenAI:', error.message);
    throw error; // Rethrow the error to handle it outside this function if needed
  }
}

zokou({ nomCom: "gpt", reaction: "📡", categorie: "IA" }, async (dest, zk, commandeOptions) => {
  const { repondre, arg } = commandeOptions;

  try {
    if (!arg || arg.length === 0) {
      return repondre("Veuillez poser votre question.");
    }

    const question = arg.join(' ');
    const reponse = await getChatGPTResponse(question);

    if (reponse) {
      repondre(reponse);
    } else {
      console.error('Erreur lors de la requête à l\'API OpenAI.');
      repondre('Une erreur s\'est produite lors du traitement de votre demande.');
    }
  } catch (e) {
    console.error('Erreur générale :', e);
    repondre("Oups, une erreur est survenue lors du traitement de votre demande.");
  }
});

