const { zokou } = require('../framework/zokou');
const deepai=require("deepai")
const traduire = require("../framework/traduction")
const axios = require("axios")


async function ia(requete){


  
deepai.setApiKey("quickstart-QUdJIGlzIGNvbWluZy4uLi4K");

  
var rep =await deepai.callStandardApi("text-generator",{text:requete});
  return rep.output;
};

zokou({nomCom:"zokou",reaction:"📡",categorie:"IA"},async(dest,zk,commandeOptions)=>{

const {repondre,ms,arg}=commandeOptions;

  if(!arg || !arg[0])
  {return repondre("Veuillez poser votre question .")}
  var quest = arg.join(' ');
try{
  let rep= await ia(quest);
 let tex = await traduire(rep , { to: 'fr' })

  repondre(tex);
}catch(e){ repondre("oupsaa une erreur : "+e)}
  

});


const port = 3000; // Définissez le port sur lequel votre serveur écoutera

zokou({ nomCom: "gpt", reaction: "📡", categorie: "IA" }, async (dest, zk, commandeOptions) => {
  const { repondre, arg } = commandeOptions;

  if (!arg || !arg[0]) {
    return repondre("Veuillez poser votre question.");
  }

  var question = arg.join(' ');

  try {
    let reponse = await getChatGPTResponse(question);
    repondre("reponse");
  } catch (e) {
    repondre("Oups, une erreur : " + e);
  }
});

async function getChatGPTResponse(question) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/gpt-3.5-turbo/completions',
      {
        prompt: question,
        max_tokens: 150,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_OPENAI_API_KEY', // Remplacez par votre clé API OpenAI
        },
      }
    );

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Erreur d\'appel OpenAI API:', error.message);
    return 'Une erreur s\'est produite lors du traitement de votre demande.';
  }
}

// Ajoutez cette partie si vous utilisez Express pour écouter sur le port spécifié
const express = require('express');
const app = express();

app.listen(port, () => {
  console.log(`Le serveur s'exécute sur http://localhost:${port}`);
});
