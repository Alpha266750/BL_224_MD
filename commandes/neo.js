const { zokou } = require('../framework/zokou');
const { getRByJID } = require('../bdd/fiche');
const s = require(__dirname + "/../set");

zokou(
  {
    nomCom: 'north1',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms,zk,jid } = commandeOptions;
    
        const data = getRByJID(jid);

        let msg = `*NEOverse Rp Gaming*
    .𝐍𝐎𝐑𝐓H 𝐃𝐈𝐕𝐈𝐒𝐈𝐎𝐍🐺🔴 1
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *𝐉𝐨𝐮𝐞𝐮𝐫👤*: Lily KÏNGS II
◇ *𝐅𝐚𝐧𝐬👥*: ${data.R1}👥
◇ *𝐒𝐭𝐚𝐭𝐮𝐭*: ${data.R2}
◇ *𝐆𝐨𝐥𝐝𝐬🧭*: ${data.R3}🧭
◇ *𝐍𝐄𝐎𝐜𝐨𝐢𝐧𝐬🔹*: ${data.R4}🔹
◇ *𝐆𝐢𝐟𝐭 𝐁𝐨𝐱🎁*: ${data.R5}🎁
◇ *𝐂𝐨𝐮𝐩𝐨𝐧𝐬🎟️*: ${data.R6}🎟️
◇ *NEO PASS🎫*: ${data.R7}🔸
░░░░░░░░░░░░░░
═══════════
*𝐍𝐨𝐭𝐞*: ⭐⭐⭐⭐⭐ 5.5/5
*𝐑𝐞𝐜𝐨𝐫𝐝*: ${data.R8} Victoires / ${data.R9} Défaites
*🏆𝐓𝐫𝐨𝐩𝐡𝐞́𝐞𝐬*: ${data.R10} 🌟𝐓𝐎𝐒: ${data.R11} *💫𝐀𝐰𝐚𝐫𝐝𝐬*: ${data.R12}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.R13}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *𝐉𝐨𝐮𝐞𝐮𝐫👤*: Damian KÏNGS III
◇ *𝐅𝐚𝐧𝐬👥*: ${data.R14}👥 
◇ *𝐒𝐭𝐚𝐭𝐮𝐭*: ${data.R15}
◇ *𝐆𝐨𝐥𝐝𝐬🧭*: ${data.R16}🧭
◇ *𝐍𝐄𝐎𝐜𝐨𝐢𝐧𝐬🔹*: ${data.R17}🔹
◇ *𝐆𝐢𝐟𝐭 𝐁𝐨𝐱🎁*: ${data.R18}🎁
◇ *𝐂𝐨𝐮𝐩𝐨𝐧𝐬🎟️*: ${data.R19}🎟️
◇ *NEO PASS🎫*: ${data.R20}🔸
░░░░░░░░░░░░░░
═══════════
*𝐍𝐨𝐭𝐞*: ⭐⭐⭐⭐⭐ 5.5/5
*𝐑𝐞𝐜𝐨𝐫𝐝*: ${data.R21} Victoires / ${data.R22} Défaites
*🏆𝐓𝐫𝐨𝐩𝐡𝐞́𝐞𝐬*: ${data.R23} 🌟𝐓𝐎𝐒: ${data.R24} *💫𝐀𝐰𝐚𝐫𝐝𝐬*: ${data.R25}
░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.R26}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *𝐉𝐨𝐮𝐞𝐮𝐫👤*: Kanzen Gold King
◇ *𝐅𝐚𝐧𝐬👥*: ${data.R27}👥
◇ *𝐒𝐭𝐚𝐭𝐮𝐭*: ${data.R28}
◇ *𝐆𝐨𝐥𝐝𝐬🧭*: ${data.R29}🧭
◇ *𝐍𝐄𝐎𝐜𝐨𝐢𝐧𝐬🔹*: ${data.R30}🔹
◇ *𝐆𝐢𝐟𝐭 𝐁𝐨𝐱🎁*: ${data.R31}🎁
◇ *𝐂𝐨𝐮𝐩𝐨𝐧𝐬🎟️*: ${data.R32}🎟️
◇ *NEO PASS🎫*: ${data.R33}🔸
░░░░░░░░░░░░░░
═══════════
*𝐍𝐨𝐭𝐞*: ⭐⭐⭐3.5/5
*𝐑𝐞𝐜𝐨𝐫𝐝*: ${data.R34} Victoires / ${data.R35} Défaites
*🏆𝐓𝐫𝐨𝐩𝐡𝐞́𝐞𝐬*: ${data.R36}, 🌟𝐓𝐎𝐒: ${data.R37} *💫𝐀𝐰𝐚𝐫𝐝𝐬*: ${data.R38}
░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.R39}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
 *🔷𝗡𝗘𝗢 𝗡𝗘𝗫𝗧 𝗚𝗔𝗠𝗘®🎮*`;

        zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/38659f7aeacb8cc83fe99.jpg' }, caption: msg }, { quoted: ms})
   });
