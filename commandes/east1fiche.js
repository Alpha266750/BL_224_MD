const { zokou } = require('../framework/zokou');
const { getR } = require('../bdd/east1fiche');

zokou(
  {
    nomCom: 'east1',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    try {
const { ms, repondre, arg } = commandeOptions;
    const data = await getR();
      if(!arg || arg.length === 0) {
let mesg = ` . 𝗘𝗔𝗦𝗧 𝗗𝗜𝗩𝗜𝗦𝗜𝗢𝗡🦅🟢
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: Atsushi KÏNGS🇨🇲 
◇ *Rang XP🔰*: ${r1}
◇ *Golds🧭*: ${r2}🧭
◇ *NEOcoins🔹*: ${r3}🔷
◇ *Gift Box🎁*: ${r4}🎁
◇ *Coupons🎟️*: ${r5}🎟️
◇ *NEO PASS🔸*: ${r6}🔸
░░░░░░░░░░░░░░
*Note*: ⭐1/5
*Records*: ${r7} Victoires✅/ ${r8} Défaites❌
*🏆Trophées*: ${r9} *🌟TOS*: ${r10} *💫Awards*: ${r11}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${r12} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: White KÏNGS🇨🇮 
◇ *Rang XP🔰*: ${r13}
◇ *Golds🧭*: ${r14}🧭
◇ *NEOcoins🔹*: ${r15}🔷
◇ *Gift Box🎁*: ${r16}🎁
◇ *Coupons🎟️*: ${r17}🎟️
◇ *NEO PASS🔸*: ${r18}🔸
░░░░░░░░░░░░░░
*Note*: ⭐⭐⭐⭐4/5
*Records*: ${r19} Victoires✅/ ${r20} Défaites❌
*🏆Trophées*: ${r21} *🌟TOS*: ${r22} *💫Awards*: ${r23}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${r24} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: Kemael🇨🇮
◇ *Rang XP🔰*: ${r25}
◇ *Golds🧭*: ${r26}🧭
◇ *NEOcoins🔹*: ${r27}🔷
◇ *Gift Box🎁*: ${r28}🎁
◇ *Coupons🎟️*: ${r29}🎟️
◇ *NEO PASS🔸*: ${r30}🔸
░░░░░░░░░░░░░░
*Note*: ⭐⭐2.5/5
*Records*: ${r31} Victoires✅/ ${r32} Défaites❌
*🏆Trophées*: ${r33} *🌟TOS*: ${r34} *💫Awards*: ${r35}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${r36}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
 *◁🔷𝗡𝗘𝗢 𝗙𝗢𝗥 𝗧𝗛𝗘 𝗣𝗟𝗔𝗬𝗘𝗥𝗦🎮➕ᐅᐭ*`;
 zk.sendMessage(dest, { image: { url: 'https://i.imgur.com/EashJkj.jpg' }, caption: mesg }, { quoted: ms });
                   } else {
    var dbUrl = "postgresql://postgres:aga-B533E3BcGdfa5*cFf*4daE4*f*fB@monorail.proxy.rlwy.net:12102/railway";
    const proConfig = {
      connectionString: dbUrl,
      ssl: {
        rejectUnauthorized: false,
      },
    };
    
    const { Pool } = require('pg');
    const pool = new Pool(proConfig);
        const ar = arg.join("");

const client = await pool.connect();
const baileys_1 = __importStar(require("@sampandey001/baileys"));
var mtype = (0, baileys_1.getContentType)(ms.message);
var texte = mtype == "conversation" ? ms.message.conversation: "";
        if(texte) {
  let joueur = texte[1];
  let object = texte[3];
  let signe = texte[4];
  let valeur = texte[5];
    
  let colonnesJoueur;

  switch (arg2) {
    case "Atsushi":
      colonnesJoueur = {
        rang_xp: "r1",
        golds: "r2",
        neocoins: "r3",
        gift_box: "r4",
        coupons: "r5",
        neo_pass: "r6",
        victoires: "r7",
        defaites: "r8",
        trophees: "r9",
        tos: "r10",
        awards: "r11",
        cards: "r12",
      };
      break;
    case "White":
      colonnesJoueur = {
        rang_xp: "r13",
        golds: "r14",
        neocoins: "r15",
        gift_box: "r16",
        coupons: "r17",
        neo_pass: "r18",
        victoires: "r19",
        defaites: "r20",
        trophees: "r21",
        tos: "r22",
        awards: "r23",
        cards: "r24",
      };
      break;
    case "Kemael":
      colonnesJoueur = {
        rang_xp: "r25",
        golds: "r26",
        neocoins: "r27",
        gift_box: "r28",
        coupons: "r29",
        neo_pass: "r30",
        victoires: "r31",
        defaites: "r32",
        trophees: "r33",
        tos: "r34",
        awards: "r35",
        cards: "r36",
      };
      break;
    default:
      console.log("Nom de joueur non reconnu.");
      return;
  }

    const colonneObjet = colonnesJoueur[object];

  if (colonneObjet) {
      await client.query(`UPDATE tex_fiche SET ${colonneObjet} = ${colonneObjet} ${signe} $1 WHERE id = 1`, [valeur]);
      console.log(`Données de l'utilisateur ${joueur} mises à jour`);
      repondre(`Données du joueur ${joueur} mises à jour`);
  } else {
    console.log("Nom d'objet non reconnu.");
    repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
  }
} else {
  console.log("Le message ne correspond pas au format attendu.");
  repondre(`Le format du message est incorrect.`);
}
}
  } catch (error) {
    console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    repondre(`une erreur est survenu lors de la mise a jouer des données du jouer ${joueur}`);
  } finally {
          var dbUrl = "postgresql://postgres:aga-B533E3BcGdfa5*cFf*4daE4*f*fB@monorail.proxy.rlwy.net:12102/railway";
    const proConfig = {
      connectionString: dbUrl,
      ssl: {
        rejectUnauthorized: false,
      },
    };
    
    const { Pool } = require('pg');
    const pool = new Pool(proConfig);

    const client = await pool.connect();
    client.release();
  }
});
