const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: Zokou-MD-WHATSAPP-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU1ORS9HRS8xZ3ZQQjdtR1pCVG8xQXhjbk5NaEpHMVJJY2VBcEU5ZC9GYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQm93MS9pcGRhOTlRMU00b254NVlHaTVRc3dFOGhrMnZPa0JKMytNUzFWaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzSVNWQ2xQTVNyMUsyQTNvNEVtb3JFeUhWNmR3S0UvYW80WFpVcHZNb0hvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyUWRaVVNOdUswTnhHOVNHVTFqbE1iUm9ycWJINEhCMDJ3dTd5aXh5U0h3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdEWXZBcnNuOVNLOGhubnVvcEdWN0R6bVpxOUhIOG1BNUlob21JMzRMMnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdqeXZqczZIWDhvVEJFL1ZMaXpUUWZCQ0dabk4reGZsOVRlZE1tVjRJMHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUIxcUIzNm9meTZ2MDE3OHdJakg5QThYSDdwdWhGanRTRGxob2NxWjhsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZytrTFJGL0wwZlkxdjVrbWp4WVpqQURUbFhnN2VZczU5YmdZekVTblRFVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRKbkZTM0tMN0UxWHhEN0RzdW9ZMm9meFhISkQvZVZJbXYyYXZkVGdZZk4yU2wvSmErcThRdzF5NWNtV081dmZiKzRhdnBRdmlYWDdrMmNsUFdTTENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMwLCJhZHZTZWNyZXRLZXkiOiJiSndZTGgvWk0zckNBcFEydFZSWXlvSFFaek9YMXUvT1E1OTM3cWR4REZrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJZWDdOSDhFNyIsImxhc3RQcm9wSGFzaCI6Im5tM0JiIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQ0E9PSJ9LCJtZSI6eyJpZCI6IjUwOTM3NTI5MTk0OjcyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkarwnZG58J2RrPCdkb3wnZGw8J2Ru/CdkbYg8J2auPCdmqvwnZq48J2QmCDwnZqq8J2ar/Cdmq/wnZCDIPCdmqnwnZCU8J2au/CdmrvwnZq18J2aqvCdkIXwnZCL8J2QmMK54oG2IiwibGlkIjoiMTE4MzIyNjkxNTg4MzE0OjcyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzZDbUs0SEVPcjBtYjBHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTWpsb3EvSWFKb2ZxTmREc25ZNjFxMnBLSWxsbnZnRytrbm9iT2praWRpRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVmhnRHlVVlB2T1RJYWZ0MFBNV3ZySUdXYzllQyszNTVVNXZSdml4V2tlWjErbG05MGJldHNlMUZPR2NSVWpmWjJNakQvdTJSSU9pcTJ2b1V0bjJmQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IlNSTGVtSmhYSGk5cGRTMkVVd1I5UzlhTWpOT3RFRmp0QXcwdUdyYmVYQlZOdCszYVdpUWV5RjdmMlNmS3BObE5WMS9DZ3oveVBJS2ZoY0w3TlNqc0R3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5Mzc1MjkxOTQ6NzJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVEk1YUt2eUdpYUg2alhRN0oyT3RhdHFTaUpaWjc0QnZwSjZHem81SW5ZaCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczODk2MzU2NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNYWUifQ== process.env.SESSION_ID || 'zokk',
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
