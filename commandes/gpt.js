const { zokou } = require("../framework/zokou");
const OpenAI = require('openai');
const conf = require('../set');

zokou({ nomCom: "gpt", reaction: "📡", categorie: "IA" }, async (dest, zk, commandeOptions) => {
  const { repondre, arg } = commandeOptions;

  try {
    if (!arg || arg.length === 0) {
      return repondre("Veuillez poser une question.");
    }

    const question = arg.join('');

    const openai = new OpenAI({
      key: conf.OPENAI_API_KEY
    });

    const response = await openai.create('gpt-3.5-turbo', [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: question },
    ]);

    // La réponse de l'API est dans response.data.choices[0].message.content
    const rep = response.data.choices[0].message.content;
    
    repondre(rep);
  } catch (error) {
    console.error('Erreur:', error.response ? error.response.data : error.message);
    repondre("Oups, une erreur est survenue lors du traitement de votre demande.");
  }
});

