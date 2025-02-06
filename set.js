const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.postgresql:=== undefined
    ? databasePath
    : process. postgresql://zokou_vf_user:BjQVRuHoVghANlOOAdDyn4MHJgbPK9W8@dpg-csu7omggph6c7387fbdg-a.oregon-postgres.render.com/zokou_vf
module.exports = {Zokou-MD-WHATSAPP-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU9pbGdWdk9CQ05HQmF5YmFwbWFaWlAwL3pqR1VkMWFPM0ZQMzJ4SmIyRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWktDcmZ2QjR3bEVIa01LQkhyK0t5VDJ3SitPTThCVnhjUFVuTkh1WnZ4UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVRVA3ZmV5TDlSSDJySXNkcFIzYVVTWHo1K0kweCs5cHZjNHM0bjJ5YWxFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhOTJYNTF4RmV2UENabnJBS3lYTDN1Sk9wVm8xbW5sb211UGNOVWlaV21FPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldObEFla3Q1d2ZsdXd6UlVxL05pZEd5ZGliZ0xqdXEwSEY3T1R3bVhqRlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJJTEtlVStJRVpaZUptWnc3ajROdWJxb0xTMExQM055d3VVR2RlTStFU0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUFOOXo5cEZnaFYyWUpvd1F5dzdwQnlyR0V4WDVQSHVyZlRUTHJxMEhrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkZ1SmF3cEVJZFN5T2hUS0pIUEFiY0xObU50dW1jNTZVYXk4blNGMTFHMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InREVEEzVGk1cWgxeUhmd1RtUW1BLzlrL2wxeWVwYkxFVmVmN3NaSGVaNjlDcmhCTm8xUVMrK3M5aFg1ZllJWlczb1BGQllPY3hvTEVGQzYyZ0I1U0FBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg5LCJhZHZTZWNyZXRLZXkiOiJwd09KQk96bmxsYXpWaFZSRWptRVBlTU5lcStoU29MOHU0ZmlBbWt5UlVFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWUIyQVk3UFkiLCJtZSI6eyJpZCI6IjI0MjA2ODk2OTgzNzozOUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTE9IbkswREVOZkZrcjBHR0FrZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWWJ0d2xrdllualVmK1llRlAzaUlDUVFrb1ZZeDJBdVJNS3VVTlBralpDST0iLCJhY2NvdW50U2lnbmF0dXJlIjoid3hlWnhKcnFDczdlYXFuWm9EWk9GY0t2b0tZZC94M1ZkOWc1bUwzZklLeVNvTnlxRVYxWWNrVXFxcWxiUzdlTURSUVRlUjRLbXpKMGNvSC9IZnBxRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IkN1TFhKcTRXVnNOUmZoMy9NZGx3WVMyL21JbXF4d3kyb2dhcG9UaHlqMzR6Q3J0ZDZESFNaNTZLbG1nbTVUV1pMa1VZbG0rMDcrcTI0OEljSkF5RkFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjQyMDY4OTY5ODM3OjM5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldHN2NKWkwySjQxSC9tSGhUOTRpQWtFSktGV01kZ0xrVENybERUNUkyUWkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQifQ== || 'zokk',
     ETAT:.4
    PREFIXE:#
    NOM_OWNER:𝑯𝒊𝒎𝒊𝒌𝒐
    NUMERO_OWNER : 242068969837,              
    LECTURE_AUTO_STATUS:"non",
    TELECHARGER_AUTO_STATUS: 'non',
    MODE: MODEPRIVÉ 
    PM_PERMIT: 'non',
    BOT : 𝑯𝒊𝒎𝒊𝒌𝒐🔮
    URL : 'https://static.animecorner.me/2023/08/op2.jpg',https://files.catbox.moe/nrq674.jpg
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.'3' ,
    //GPT : process.env.OPENAI_API_KEY,
    DP : process. || 'oui',
    ATD : process. 'OUI',            
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
