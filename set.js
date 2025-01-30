const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'Zokou-MD-WHATSAPP-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1BDMS94SnVWcXhnYytRc24zVmZObGxVV2lDdW1vU1dBY1BYZ0Q5TUhHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmx6YWlWTGdtUTFNMUo0aE5DL1JuYTFaY3o5OTBqbDZyRWdUVDcvV0tuND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxRC9sTjh5amZObjFEMVlkejI2bXFNQkNvcnpYa20yOXJpdmdqd3hlODJnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0bkpiV0h0UllDNG9mUkJuTHdHZy9PQ2ZqVy9nbnkxZy9iQ0pjc0o2TndjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlPM00yQzEwa1NSR011WURBR1FEZFpZdmp1c1lPeGxoVUFhNTFVZ3ZpM0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1DSTgyY24wbHlQY2FlbHlSMjJZZGw5YlZ3WHYwZ0EwUVRGai9YMzMwM0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0JQaTdGTTdqbVhwaFE1cFR4RzlGQTJhODRMWHlLcWEvTlBnT21XTjZrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3FJbjJhdGZySFo1Um9XSVEvNDU5akQ5NzdEUDYwSFg2RmxYN2NBb0swaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9QTXIvcHFoRzZMMzNOMEM0c1BGMEYxaHo0eGpBL0xMR1piQSt2eEpRR2E1V1ozRnoxSkx2U3hkL0l4dkt5SmtyU0RiNU16VVE2VitzQlFaeU9IeURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTMsImFkdlNlY3JldEtleSI6IjhZY3J2cm0xTGxuMjlPUW5DRDNnZVZlZGRITVFldTNIVEJoU2I2VWtndHc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjI4MTE2MjFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTVDMUEwMkI2RkNFQjc3NUFCQzc0NEY4RDE2RDczOUUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczODIxMjE2OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiSkw0NjJOOE4iLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlEUT09In0sIm1lIjp7ImlkIjoiOTQ3NjI4MTE2MjE6MjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiybThtI/htJvJqsqP4bSAIiwibGlkIjoiMTY1Nzk5MjA5NzkxNTIyOjI0QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT0M4bXJVREVNQ0c3THdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUU5WeVZEeHFQZnhNR0VSUUN6MEZiK1V5OStucGxXcUtXZ3NNVk1kdmUyaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibUVtdjhoWU5Rb1l2dFhoazdvZEtEbEdicVNoRjhLMXRlV2tGbzRYbHRwcGJPQWVIZkdCcWlHTENDTGpxNTlmN2ZRQlh0bHI5OTE0UmhKckljRjVwQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IldSc3FYSTJyU2ZBU21RcU1PdUYxd2xzdnVERWRhV21lb3AvaFNMMWVZRzB4elpHN1JLZDVWREUvZTVEdUJrTnU1ckxNOUMrSmNNdWs1NTc5V0tqOERBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjI4MTE2MjE6MjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVURWY2xROGFqMzhUQmhFVUFzOUJXL2xNdmZwNlpWcWlsb0xERlRIYjN0cCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczODIxMjE2NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOZSsifQ==',
     ETAT:process.env.ETAT,
    PREFIXE: process.env.PREFIXE,
    NOM_OWNER: process.env.NOM_OWNER || "Zokou-Md",
    NUMERO_OWNER : process.env.NUMERO_OWNER,              
    LECTURE_AUTO_STATUS: process.env.LECTURE_AUTO_STATUS || "non",
    TELECHARGER_AUTO_STATUS: process.env.TELECHARGER_AUTO_STATUS || 'non',
    MODE: process.env.MODE_PUBLIC,
    PM_PERMIT: process.env.PM_PERMIT || 'non',
    BOT : process.env.NOM_BOT || 'Zokou_MD',
    URL : process.env.LIENS_MENU || 'https://static.animecorner.me/2023/08/op2.jpg',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    //GPT : process.env.OPENAI_API_KEY,
    DP : process.env.STARTING_BOT_MESSAGE || 'oui',
    ATD : process.env.ANTI_DELETE_MESSAGE || 'non',            
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
