/*// Tableau des utilisateurs avec leurs informations et requêtes SQL
const players = [
  // joueurs 

  // leflamboyant 
  { 
    id: "224660500867@s.whatsapp.net", 
    nom: "leflamboyant",
    cln_points: 'e4',
    cln_trophees: "e5",
    cln_victoires: "e6", 
    cln_defaites: "e7",
    get_points: "SELECT e4 FROM joueurs WHERE id = 8", 
    get_trophees: "SELECT e5 FROM joueurs WHERE id = 8", 
    get_victoires: "SELECT e6 FROM joueurs WHERE id = 8", 
    get_defaites: "SELECT e7 FROM joueurs WHERE id = 8",
    upd_points: "UPDATE joueurs SET e4 = $1 WHERE id = 8", 
    upd_trophees: "UPDATE joueurs SET e5 = $1 WHERE id = 8", 
    upd_victoires: "UPDATE joueurs SET e6 = $1 WHERE id = 8", 
    upd_defaites: "UPDATE joueurs SET e7 = $1 WHERE id = 8"
  }, 

  // noname 
  { 
    id: "224662449999@s.whatsapp.net", 
    nom: "noname",
    cln_points: 'e4',
    cln_trophees: "e5",
    cln_victoires: "e6", 
    cln_defaites: "e7",
    get_points: "SELECT e4 FROM joueurs WHERE id = 8", 
    get_trophees: "SELECT e5 FROM joueurs WHERE id = 8", 
    get_victoires: "SELECT e6 FROM joueurs WHERE id = 8", 
    get_defaites: "SELECT e7 FROM joueurs WHERE id = 8",
    upd_points: "UPDATE joueurs SET e4 = $1 WHERE id = 8", 
    upd_trophees: "UPDATE joueurs SET e5 = $1 WHERE id = 8", 
    upd_victoires: "UPDATE joueurs SET e6 = $1 WHERE id = 8", 
    upd_defaites: "UPDATE joueurs SET e7 = $1 WHERE id = 8"
  }, 
  // kankileroux 
  { 
    id: "224629408448@s.whatsapp.net", 
    nom: "kankileroux",
    cln_points: 'e4',
    cln_trophees: "e5",
    cln_victoires: "e6", 
    cln_defaites: "e7",
    get_points: "SELECT e4 FROM joueurs WHERE id = 8", 
    get_trophees: "SELECT e5 FROM joueurs WHERE id = 8", 
    get_victoires: "SELECT e6 FROM joueurs WHERE id = 8", 
    get_defaites: "SELECT e7 FROM joueurs WHERE id = 8",
    upd_points: "UPDATE joueurs SET e4 = $1 WHERE id = 8", 
    upd_trophees: "UPDATE joueurs SET e5 = $1 WHERE id = 8", 
    upd_victoires: "UPDATE joueurs SET e6 = $1 WHERE id = 8", 
    upd_defaites: "UPDATE joueurs SET e7 = $1 WHERE id = 8"
  }, 
 // shadowstrike 
  { 
    id: "224610008110@s.whatsapp.net", 
    nom: "shadowstrike",
    cln_points: 'e4',
    cln_trophees: "e5",
    cln_victoires: "e6", 
    cln_defaites: "e7",
    get_points: "SELECT e4 FROM joueurs WHERE id = 8", 
    get_trophees: "SELECT e5 FROM joueurs WHERE id = 8", 
    get_victoires: "SELECT e6 FROM joueurs WHERE id = 8", 
    get_defaites: "SELECT e7 FROM joueurs WHERE id = 8",
    upd_points: "UPDATE joueurs SET e4 = $1 WHERE id = 8", 
    upd_trophees: "UPDATE joueurs SET e5 = $1 WHERE id = 8", 
    upd_victoires: "UPDATE joueurs SET e6 = $1 WHERE id = 8", 
    upd_defaites: "UPDATE joueurs SET e7 = $1 WHERE id = 8"
  }, 
   // aegonstark 
  { 
    id: "224610625216@s.whatsapp.net", 
    nom: "aegonstark ",
    cln_points: 'e4',
    cln_trophees: "e5",
    cln_victoires: "e6", 
    cln_defaites: "e7",
    get_points: "SELECT e4 FROM joueurs WHERE id = 8", 
    get_trophees: "SELECT e5 FROM joueurs WHERE id = 8", 
    get_victoires: "SELECT e6 FROM joueurs WHERE id = 8", 
    get_defaites: "SELECT e7 FROM joueurs WHERE id = 8",
    upd_points: "UPDATE joueurs SET e4 = $1 WHERE id = 8", 
    upd_trophees: "UPDATE joueurs SET e5 = $1 WHERE id = 8", 
    upd_victoires: "UPDATE joueurs SET e6 = $1 WHERE id = 8", 
    upd_defaites: "UPDATE joueurs SET e7 = $1 WHERE id = 8"
  }, 
  { 
    id: "", 
    nom: "",
    cln_points: 'e4',
    cln_trophees: "e5",
    cln_victoires: "e6", 
    cln_defaites: "e7",
    get_points: "SELECT e4 FROM joueurs WHERE id = ", 
    get_trophees: "SELECT e5 FROM joueurs WHERE id = ", 
    get_victoires: "SELECT e6 FROM joueurs WHERE id = ", 
    get_defaites: "SELECT e7 FROM joueurs WHERE id = ",
    upd_points: "UPDATE joueurs SET e4 = $1 WHERE id = ", 
    upd_trophees: "UPDATE joueurs SET e5 = $1 WHERE id = ", 
    upd_victoires: "UPDATE joueurs SET e6 = $1 WHERE id = ", 
    upd_defaites: "UPDATE joueurs SET e7 = $1 WHERE id = "
  }, 
  { 
    id: "", 
    nom: "",
    cln_points: 'e4',
    cln_trophees: "e5",
    cln_victoires: "e6", 
    cln_defaites: "e7",
    get_points: "SELECT e4 FROM joueurs WHERE id = ", 
    get_trophees: "SELECT e5 FROM joueurs WHERE id = ", 
    get_victoires: "SELECT e6 FROM joueurs WHERE id = ", 
    get_defaites: "SELECT e7 FROM joueurs WHERE id = ",
    upd_points: "UPDATE joueurs SET e4 = $1 WHERE id = ", 
    upd_trophees: "UPDATE joueurs SET e5 = $1 WHERE id = ", 
    upd_victoires: "UPDATE joueurs SET e6 = $1 WHERE id = ", 
    upd_defaites: "UPDATE joueurs SET e7 = $1 WHERE id = "
  }, 
 { 
    id: "", 
    nom: "",
    cln_points: 'e4',
    cln_trophees: "e5",
    cln_victoires: "e6", 
    cln_defaites: "e7",
    get_points: "SELECT e4 FROM joueurs WHERE id = ", 
    get_trophees: "SELECT e5 FROM joueurs WHERE id = ", 
    get_victoires: "SELECT e6 FROM joueurs WHERE id = ", 
    get_defaites: "SELECT e7 FROM joueurs WHERE id = ",
    upd_points: "UPDATE joueurs SET e4 = $1 WHERE id = ", 
    upd_trophees: "UPDATE joueurs SET e5 = $1 WHERE id = ", 
    upd_victoires: "UPDATE joueurs SET e6 = $1 WHERE id = ", 
    upd_defaites: "UPDATE joueurs SET e7 = $1 WHERE id = "
  }, 
 { 
    id: "", 
    nom: "",
    cln_points: 'e4',
    cln_trophees: "e5",
    cln_victoires: "e6", 
    cln_defaites: "e7",
    get_points: "SELECT e4 FROM joueurs WHERE id = ", 
    get_trophees: "SELECT e5 FROM joueurs WHERE id = ", 
    get_victoires: "SELECT e6 FROM joueurs WHERE id = ", 
    get_defaites: "SELECT e7 FROM joueurs WHERE id = ",
    upd_points: "UPDATE joueurs SET e4 = $1 WHERE id = ", 
    upd_trophees: "UPDATE joueurs SET e5 = $1 WHERE id = ", 
    upd_victoires: "UPDATE joueurs SET e6 = $1 WHERE id = ", 
    upd_defaites: "UPDATE joueurs SET e7 = $1 WHERE id = "
  }, 
  { 
    id: "", 
    nom: "",
    cln_points: 'e4',
    cln_trophees: "e5",
    cln_victoires: "e6", 
    cln_defaites: "e7",
    get_points: "SELECT e4 FROM joueurs WHERE id = ", 
    get_trophees: "SELECT e5 FROM joueurs WHERE id = ", 
    get_victoires: "SELECT e6 FROM joueurs WHERE id = ", 
    get_defaites: "SELECT e7 FROM joueurs WHERE id = ",
    upd_points: "UPDATE joueurs SET e4 = $1 WHERE id = ", 
    upd_trophees: "UPDATE joueurs SET e5 = $1 WHERE id = ", 
    upd_victoires: "UPDATE joueurs SET e6 = $1 WHERE id = ", 
    upd_defaites: "UPDATE joueurs SET e7 = $1 WHERE id = "
  }, 
  
];

module.exports = players;*/



const players = [];

function add_id(id, nom, id_bdd, table) {
    const columns = {
        pseudo: "e1",
        rang: "e2",
        titre: "e3",
      //  points: "e4",
        trophees: "e5",
        victoires: "e6",
      //  defaites: "e7",
    };

    const player = {
        id: id,
        nom: nom,
        cln_pseudo: columns.pseudo,
        cln_rang: columns.rang,
        cln_titre: columns.titre,
        cln_points: columns.points,
        cln_trophees: columns.trophees,
        cln_victoires: columns.victoires,
        cln_defaites: columns.defaites,

        // Requêtes SELECT
        get_pseudo: `SELECT ${columns.pseudo} FROM ${table} WHERE id = ${id_bdd}`,
        get_rang: `SELECT ${columns.rang} FROM ${table} WHERE id = ${id_bdd}`,
        get_titre: `SELECT ${columns.titre} FROM ${table} WHERE id = ${id_bdd}`,
        get_points: `SELECT ${columns.get_points} FROM ${table} WHERE id = ${id_bdd}`,
        get_trophees: `SELECT ${columns.trophees} FROM ${table} WHERE id = ${id_bdd}`,
        get_victoires: `SELECT ${columns.victoires} FROM ${table} WHERE id = ${id_bdd}`,
        get_defaites: `SELECT ${columns.defaites} FROM ${table} WHERE id = ${id_bdd}`,

        // Requêtes UPDATE
        upd_pseudo: `UPDATE ${table} SET ${columns.pseudo} = $1 WHERE id = ${id_bdd}`,
        upd_rang: `UPDATE ${table} SET ${columns.rang} = $1 WHERE id = ${id_bdd}`,
        upd_titre: `UPDATE ${table} SET ${columns.titre} = $1 WHERE id = ${id_bdd}`,
        upd_points: `UPDATE ${table} SET ${columns.points} = $1 WHERE id = ${id_bdd}`,
        upd_trophees: `UPDATE ${table} SET ${columns.trophees} = $1 WHERE id = ${id_bdd}`,
        upd_victoires: `UPDATE ${table} SET ${columns.victoires} = $1 WHERE id = ${id_bdd}`,
        upd_defaites: `UPDATE ${table} SET ${columns.defaites} = $1 WHERE id = ${id_bdd}`,
    };

    players.push(player);
}

//joueurs
add_id('224660500867@s.whatsapp.net', 'leflamboyant', '1', 'joueurs');
add_id('224662449999@s.whatsapp.net', 'noname', '2', 'joueurs');
add_id('224629408448@s.whatsapp.net', 'kankileroux', '3', 'joueurs');
add_id('224@s.whatsapp.net', '', '4', 'joueurs');
add_id('224@s.whatsapp.net', '', '5', 'joueurs');
add_id('224@s.whatsapp.net', '', '6', 'joueurs');
add_id('224@s.whatsapp.net', '', '7', 'joueurs');
add_id('224@s.whatsapp.net', '', '8', 'joueurs');
add_id('224@s.whatsapp.net', '', '9', 'joueurs');
add_id('224@s.whatsapp.net', '', '10', 'joueurs');
add_id('224@s.whatsapp.net', '', '11', 'joueurs');
add_id('224@s.whatsapp.net', '', '12', 'joueurs');
add_id('224@s.whatsapp.net', '', '13', 'joueurs');
add_id('224@s.whatsapp.net', '', '14', 'joueurs');
add_id('224@s.whatsapp.net', '', '15', 'joueurs');
add_id('224@s.whatsapp.net', '', '16', 'joueurs');
add_id('224@s.whatsapp.net', '', '17', 'joueurs');
add_id('224@s.whatsapp.net', '', '18', 'joueurs');
add_id('224@s.whatsapp.net', '', '19', 'joueurs');
add_id('224@s.whatsapp.net', '', '20', 'joueurs');
/*add_id();
add_id();
add_id();
add_id();
add_id();
add_id();
add_id();
add_id();
add_id();
add_id();
add_id();
add_id();
add_id();
add_id();
add_id();*/

module.exports = players;
