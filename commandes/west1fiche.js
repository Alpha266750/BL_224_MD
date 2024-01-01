const { zokou } = require('../framework/zokou');
const { getR } = require('../bdd/west1fiche');

zokou(
  {
    nomCom: 'west1',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    try {
const { ms, repondre, arg } = commandeOptions;
    const data = await getR();
      if(!arg || arg.length === 0) {

    let mesg = ` .*𝗪𝗘𝗦𝗧 𝗗𝗜𝗩𝗜𝗦𝗜𝗢𝗡🦁🔵*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: Æther GENESIS🇬🇦
◇ *Rang XP🔰*: ${data.r1}
◇ *Golds🧭*: ${data.r2}🧭
◇ *NEOcoins🔹*: ${data.r3}🔷
◇ *Gift Box🎁*: ${data.r4}🎁
◇ *Coupons🎟️*: ${data.r5}🎟️
◇ *NEO PASS🔸*: ${data.r6}🔸
░░░░░░░░░░░░░░
*Note*: ⭐1/5
*Records*: ${data.r7} Victoires✅/ ${data.r8} Défaites❌
*🏆Trophées*: ${data.r9}     *🌟TOS*: ${data.r10}     *💫Awards*: ${data.r11}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r12}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: Solomoe Astral KÏNGS🇸🇳
◇ *Rang XP🔰*: ${data.r13}
◇ *Golds🧭*: ${data.r14}🧭
◇ *NEOcoins🔹*: ${data.r15}🔷
◇ *Gift Box🎁*: ${data.r16}🎁
◇ *Coupons🎟️*: ${data.r17}🎟️
◇ *NEO PASS🔸*: ${data.r18}🔸
░░░░░░░░░░░░░░
*Note*: ⭐1/5
*Records*: ${data.r19} Victoires✅/ ${data.r20} Défaites❌
*🏆Trophées*: ${data.r21}     *🌟TOS*: ${data.r22}     *💫Awards*: ${data.r23}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r24}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: Adam GENESIS🇨🇮
◇ *Rang XP🔰*: ${data.r25}
◇ *Golds🧭*: ${data.r26}🧭
◇ *NEOcoins🔹*: ${data.r27}🔷
◇ *Gift Box🎁*: ${data.r28}🎁
◇ *Coupons🎟️*: ${data.r29}🎟️
◇ *NEO PASS🔸*: ${data.r30}🔸
░░░░░░░░░░░░░░
*Note*: ⭐1/5
*Records*: ${data.r31} Victoires✅/ ${data.r32} Défaites❌
*🏆Trophées*: ${data.r33}     *🌟TOS*: ${data.r34}     *💫Awards*: ${data.r35}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r36}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
        *◁🔷𝗡𝗘𝗢 𝗙𝗢𝗥 𝗧𝗛𝗘 𝗣𝗟𝗔𝗬𝗘𝗥𝗦🎮➕ᐅᐭ
*`;

zk.sendMessage(dest, { image: { url: 'https://i.imgur.com/crAlkxv.jpg' }, caption: mesg }, { quoted: ms });
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

  switch (joueur) {
    case "Aether":
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
    case "SoloMoe":
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
    case "Adam":
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
