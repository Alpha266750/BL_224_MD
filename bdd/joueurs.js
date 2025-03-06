const { Pool } = require("pg");

const s = require("../set");

var dbUrl = s.DB;
const proConfig = {
  connectionString: dbUrl,
  ssl: {
    rejectUnauthorized: false,
  },
};

const pool = new Pool(proConfig);

async function createWestDivTable() {
  const client = await pool.connect();

  try {
    // Créez la table joueurs si elle n'existe pas déjà
    await client.query(`
      CREATE TABLE IF NOT EXISTS joueurs(
        id SERIAL PRIMARY KEY,
        e1 TEXT DEFAULT 'aucun',
        e2 TEXT DEFAULT 'aucun',
        e3 TEXT DEFAULT 'aucun',
        e4 INTEGER DEFAULT 0,
        e5 INTEGER DEFAULT 0,
        e6 INTEGER DEFAULT 0,
        e7 INTEGER DEFAULT 0,
        );
    `);
    console.log('Table joueurs créée avec succès');
  } catch (error) {
    console.error('Erreur lors de la création de la table joueurs:', error);
  } finally {
    client.release();
  }
}

async function insertData1() {
  const client = await pool.connect();

  try {
    // Modifiez la définition de la table pour ajouter les colonnes
    await client.query(`
      ALTER TABLE joueurs
      ADD COLUMN e24 INTEGER DEFAULT 0,
      ADD COLUMN e25 INTEGER DEFAULT 0,
      ADD COLUMN e26 INTEGER DEFAULT 0,
      ADD COLUMN e27 INTEGER DEFAULT 0,
      ADD COLUMN e28 INTEGER DEFAULT 0
     `);

    console.log('Colonnes ajoutées avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'ajout des colonnes:', error);
  } finally {
    client.release();
  }
}
//insertData1()
// Fonction pour insérer des données
async function insertData() {
  const client = await pool.connect();
  try {
    for (let i = 1; i <= 50; i++) {
      const query = `
        INSERT INTO joueurs(e1, e2, e3, e4, e5, e6, e7)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
      `;

      const values = [
        'aucun', 'aucun', 'aucun', 0, 0, 0, 0
      ];

      await client.query(query, values);
      console.log(`Données insérées avec succès pour l'ID ${i}`);
    }
  } catch (error) {
    console.error("Erreur lors de l'insertion des données:", error);
  } finally {
    client.release();
  }
}
// Fonction pour récupérer toutes les données
async function getData(ide) {
  const client = await pool.connect();

  try {
   const query = 'SELECT e1, e2, e3, e4, e5, e6, e7 FROM joueurs WHERE id = $1';
    const result = await client.query(query, [ide]);

    return result.rows[0];
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  } finally {
    client.release();
  }
}


// Appeler la fonction createNorth1FicheTable après la création de la table
createJoueursTable();
//insertData();

module.exports = {
  createJoueursTable,
 //insertData1,
// insertData,
  getData
};
