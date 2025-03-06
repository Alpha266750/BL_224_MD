const { zokou } = require('../framework/zokou');
const { getData } = require('../bdd/joueurs');
const s = require("../set");
const dbUrl = s.DB;
const { Pool } = require('pg');

function normalizeText(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function add_fiche(nom_joueur, data_id, image_oc) {
    zokou(
        { nomCom: nom_joueur, categorie: '🔵JOUEURS⚪' },
        async (dest, zk, commandeOptions) => {
            const { ms, repondre, arg, superUser } = commandeOptions;
            let client;

            try {
                const data = await getData(data_id);
                const [joueur, object, signe, valeur, ...texte] = arg;

                if (!arg.length) {
                    const mesg = `\`⫷⚪️🔵PLAYER🔵⚪️⫸\`👤
════════════════
*◈Pseudo👤*: ${data.e1}
*◈Rang🎗️*: ${data.e2}
*◈Titre👑*: ${data.e3}
*◈Points💠*: ${data.e4}
*◈Trophées🏆*: ${data.e5}
*◈Victoires✅*: ${data.e6}
*◈Défaites❌*: ${data.e7}
════════════════
> By Sept(7) le roi hideux`;
                    zk.sendMessage(dest, { image: { url: image_oc }, caption: mesg }, { quoted: ms });
                } else {
                    const proConfig = { connectionString: dbUrl, ssl: { rejectUnauthorized: false } };
                    const pool = new Pool(proConfig);
                    client = await pool.connect();

                    if (superUser) {
                        const updates = await processUpdates(arg, data_id, client);
                        await updatePlayerData(updates, client, data_id);

                        const messages = updates.map(update => `⚙ Object: ${update.object}\n Valeur précédente: ${update.oldValue}\n Valeur actuelle: ${update.newValue}`).join('\n\n');
                        await repondre(`Les données de ce joueur ont été mises à jour avec succès:\n\n${messages}`);
                    } else {
                        repondre('Seul les membres du staff Bluelock-224 peuvent modifier les fiches de joueurs');
                    }
                }
            } catch (error) {
                console.error("Erreur lors de la mise à jour de la fiche:", error);
                repondre('Une erreur est survenue. Veuillez réessayer');
            } finally {
                if (client) client.release();
            }
        }
    );
}

async function processUpdates(arg, data_id, client) {
    const colonnesJoueur = {
        pseudo: "e1", rang: "e2", points: "e3", titre: "e4", trophees: "e5", 
        victoires: "e6", defaites: "e7"
    };

    const updates = [];
    let i = 0;

    while (i < arg.length) {
        const [object, signe, valeur] = [arg[i], arg[i+1], arg[i+2]];
        const colonneObjet = colonnesJoueur[object];
        let texte = [];
        i += 2;

        while (i < arg.length && !colonnesJoueur[arg[i]]) {
            texte.push(arg[i]);
            i++;
        }

        const { oldValue, newValue } = await calculateNewValue(colonneObjet, signe, valeur, texte, data_id, client);
        updates.push({ colonneObjet, newValue, oldValue, object, texte });
    }

    return updates;
}

async function calculateNewValue(colonneObjet, signe, valeur, texte, data_id, client) {
    const query = `SELECT ${colonneObjet} FROM westdiv WHERE id = ${data_id}`;
    const result = await client.query(query);
    const oldValue = result.rows[0][colonneObjet];
    let newValue;
    
    if (signe === '+' || signe === '-') {
        newValue = eval(`${oldValue} ${signe} ${valeur}`);
    } else if (signe === '=' || signe === 'add' || signe === 'supp') {
        if (signe === '=') newValue = texte.join(' ');
        else if (signe === 'add') newValue = oldValue + ' ' + texte.join(' ');
        else if (signe === 'supp') newValue = oldValue.replace(new RegExp(`\\b${normalizeText(texte.join(' '))}\\b`, 'gi'), '').trim();
    }

    return { oldValue, newValue };
}

async function updatePlayerData(updates, client, data_id) {
    await client.query('BEGIN');
    for (const update of updates) {
        const query = `UPDATE westdiv SET ${update.colonneObjet} = $1 WHERE id = ${data_id}`;
        await client.query(query, [update.newValue]);
    }
    await client.query('COMMIT');
}


//add_fiche(nom_joueur, data_id, image_oc)
add_fiche('leflamboyant🔵', '1', 'https://files.catbox.moe/4a68cr.jpg');
add_fiche('noname🔵', '2', 'https://files.catbox.moe/6zkgzk.jpg');
add_fiche('kankileroux🔵', '4', 'https://files.catbox.moe/1pr2lr.jpg');
add_fiche('shadowstrike🔵', '6', 'https://files.catbox.moe/sx699u.jpg');
add_fiche('aegonstark🔵', '7', 'https://files.catbox.moe/mdbp03.jpg');
add_fiche('saitohojo🔵', '8', 'https://files.catbox.moe/eti24b.jpg');
add_fiche('cyberwolf🔵', '9', 'https://files.catbox.moe/isv4tn.jpg');
add_fiche('limperial🔵', '10', 'https://files.catbox.moe/w5xspu.jpg');
add_fiche('impact🔵', '11', 'https://files.catbox.moe/ponta7.jpg');
add_fiche('lemillion🔵', '11', 'https://files.catbox.moe/u6mwbo.jpg');
add_fiche('cee🔵', '12', 'https://files.catbox.moe/4deyxw.jpg')
add_fiche('lord🔵', '13', 'https://files.catbox.moe/h79juw.jpg');
add_fiche('joyboy🔵', '14', 'https://files.catbox.moe/63a5t3.jpg');
add_fiche('djibril🔵', '15', 'https://files.catbox.moe/2m4czv.jpg');
add_fiche('mac🔵', '16', 'https://files.catbox.moe/c9ym15.jpg');
add_fiche('jojosgoat🔵', '17', 'https://files.catbox.moe/2pn570.jpg');
add_fiche('phantom🔵', '18', 'https://files.catbox.moe/21u175.jpg');
add_fiche('dark🔵', '19', 'https://files.catbox.moe/yz23bs.jpg');
add_fiche('coldman🔵', '20', 'https://files.catbox.moe/dueik1.jpg');
add_fiche('ladestruction🔵', '21', 'https://files.catbox.moe/3y5925.jpg');
add_fiche('thorfingoat🔵', '22', 'https://files.catbox.moe/l7tbtu.jpg');
add_fiche('overlord🔵', '23', 'https://files.catbox.moe/t317wy.jpg');
add_fiche('ashura🔵', '24', 'https://files.catbox.moe/6axsog.jpg');
add_fiche('intrus🔵', '25', 'https://files.catbox.moe/spsziw.jpg');
add_fiche('lelouch🔵', '26', 'https://files.catbox.moe/hj3xv9.jpg');
