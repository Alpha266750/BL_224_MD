const { zokou } = require('../framework/zokou');
const { getR } = require('../bdd/fiche');
const s = require(__dirname + "/../set");

zokou(
  {
    nomCom: 'north1',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms } = commandeOptions;

    try {
      // Obtenez les données actuelles
      const data = await getR();

      // Créez le message en utilisant les données
      let msg = `*NEOverse Rp Gaming*
      .𝐍𝐎𝐑𝐓H 𝐃𝐈𝐕𝐈𝐒𝐈𝐎𝐍🐺🔴 1
      ░░░░░░░░░░░░░░░░░░░
      ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔`;

      // Joueur 1
      msg += `
      ◇ *𝐉𝐨𝐮𝐞𝐮𝐫👤*: Lily KÏNGS II
      ◇ *𝐅𝐚𝐧𝐬👥*: ${data.R1}👥
      ◇ *𝐒𝐭𝐚𝐭𝐮𝐭*: ${data.R2}
      ◇ *𝐆𝐨𝐥𝐝𝐬🧭*: ${data.R3}🧭
      ◇ *𝐍𝐄𝐎𝐜𝐨𝐢𝐧𝐬🔹*: ${data.R4}🔹
      ◇ *𝐆𝐢𝐟𝐭 𝐁𝐨𝐱🎁*: ${data.R5}🎁
      ◇ *𝐂𝐨𝐮𝐩𝐨𝐧𝐬🎟️*: ${data.R6}🎟️
      ◇ *NEO PASS🎫*: ${data.R7}🔸
      ░░░░░░░░░░░░░░
      ═════════`;

      // Joueur 2
      msg += `
      *𝐍𝐨𝐭𝐞*: ⭐⭐⭐⭐⭐ 5.5/5
      *𝐑𝐞𝐜𝐨𝐫𝐝*: ${data.R8} Victoires / ${data.R9} Défaites
      *🏆𝐓𝐫𝐨𝐩𝐡𝐞́𝐞𝐬*: ${data.R10} 🌟𝐓𝐎𝐒: ${data.R11} *💫𝐀𝐰𝐚𝐫𝐝𝐬*: ${data.R12}
      ░░░░░░░░░░░░░░░░░░░
      ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔`;

      // Joueur 2
      msg += `
      ◇ *𝐉𝐨𝐮𝐞𝐮𝐫👤*: Damian KÏNGS III
      ◇ *𝐅𝐚𝐧𝐬👥*: ${data.R14}👥 
      ◇ *𝐒𝐭𝐚𝐭𝐮𝐭*: ${data.R15}
      ◇ *𝐆𝐨𝐥𝐝𝐬🧭*: ${data.R16}🧭
      ◇ *𝐍𝐄𝐎𝐜𝐨𝐢𝐧𝐬🔹*: ${data.R17}🔹
      ◇ *𝐆𝐢𝐟𝐭 𝐁𝐨𝐱🎁*: ${data.R18}🎁
      ◇ *𝐂𝐨𝐮𝐩𝐨𝐧𝐬🎟️*: ${data.R19}🎟️
      ◇ *NEO PASS🎫*: ${data.R20}🔸
      ░░░░░░░░░░░░░░
      ═════════`;

      // Joueur 3
      msg += `
      *𝐍𝐨𝐭𝐞*: ⭐⭐⭐⭐⭐ 5.5/5
      *𝐑𝐞𝐜𝐨𝐫𝐝*: ${data.R21} Victoires / ${data.R22} Défaites
      *🏆𝐓𝐫𝐨𝐩𝐡𝐞́𝐞𝐬*: ${data.R23} 🌟𝐓𝐎𝐒: ${data.R24} *💫𝐀𝐰𝐚𝐫𝐝𝐬*: ${data.R25}
      ░░░░░░░░░░░░
      ░░░░░░░░░░░░░░░░░░░
      ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔`;

      // Joueur 3
      msg += `
      ◇ *𝐉𝐨𝐮𝐞𝐮𝐫👤*: Kanzen Gold King
      ◇ *𝐅𝐚𝐧𝐬👥*: ${data.R27}👥
      ◇ *𝐒𝐭𝐚𝐭𝐮𝐭*: ${data.R28}
      ◇ *𝐆𝐨𝐥𝐝𝐬🧭*: ${data.R29}🧭
      ◇ *𝐍𝐄𝐎𝐜𝐨𝐢𝐧𝐬🔹*: ${data.R30}🔹
      ◇ *𝐆𝐢𝐟𝐭 𝐁𝐨𝐱🎁*: ${data.R31}🎁
      ◇ *𝐂𝐨𝐮𝐩𝐨𝐧𝐬🎟️*: ${data.R32}🎟️
      ◇ *NEO PASS🎫*: ${data.R33}🔸
      ░░░░░░░░░░░░░░
      ═════════`;

      // Envoyez le message
      zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/38659f7aeacb8cc83fe99.jpg' }, caption: msg }, { quoted: ms });
    } catch (error) {
      console.error('Erreur lors de la génération du message:', error);
    }
  }
);
