const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? '' : process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG === undefined ? 'https://i.ibb.co/SQR4bCd/20241128-154521.jpg' : process.env.ALIVE_IMG,
ALIVE_MSG: process.env.ALIVE_MSG === undefined ? '```*💃 HEY I AM SEON MD WHATSAPP USER BOT*```\n\n*★| Owner : Sanju Bro & Sadiya Tech*\n*★| Support :*\n\n         *★| Sanju Bro : wa.me/94710513877*\n         *★| Sadiya Tech : wa.me/94742195461*\n*★| Github : *\n*★| Whatsapp Channel : https://whatsapp.com/channel/0029VagDCZdH5JLr7Yd6Wz24*\n*★| Youtube Channel : https://youtube.com/@sadiya-tech?si=AjFdLMhoZt2M3fO-*\n\n> *Made By Sanju Bro & Sadiya Tech ™*' : process.env.ALIVE_MSG,
PREFIX: process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ? 'false' : process.env.AUTO_READ_STATUS,
MODE: process.env.MODE === undefined ? 'public' : process.env.MODE, // public or private or inbox 
AUTO_VOICE: process.env.AUTO_VOICE === undefined ? 'false' : process.env.AUTO_VOICE,
AUTO_STICKER: process.env.AUTO_STICKER === undefined ? 'false' : process.env.AUTO_STICKER,
AUTO_REPLY: process.env.AUTO_REPLY === undefined ? 'false' : process.env.AUTO_REPLY,
MAX_SIZE: process.env.MAX_SIZE === undefined ? '2000' : process.env.MAX_SIZE,
};