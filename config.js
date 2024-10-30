const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347037052882 ";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_00_28_10_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAzMixcbiAgICAgICAgMzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgODQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDY1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICA5MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDczLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMixcbiAgICAgICAgMjU0LFxuICAgICAgICAzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMixcbiAgICAgICAgNTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDM1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDkwLFxuICAgICAgICA5MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDMxLFxuICAgICAgICA3MixcbiAgICAgICAgMixcbiAgICAgICAgMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDkyLFxuICAgICAgICA0NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA1NixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxODksXG4gICAgICAgIDk5LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQzLFxuICAgICAgICA2NixcbiAgICAgICAgNDYsXG4gICAgICAgIDUzLFxuICAgICAgICAwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDMzLFxuICAgICAgICAzOSxcbiAgICAgICAgNTksXG4gICAgICAgIDk3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODIsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3c2hSYXR0ZTRjU0htR0hSSCtIdHZKajlDdVhhQ3R0K3kwMnVPRDdoSVBNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJyVVYzVi1hZVNldTdoUTBWUVJCYjJRXCIsXG4gIFwicGhvbmVJZFwiOiBcImZmMDc2YzdiLWE5YmUtNGU3Ny04NjBkLTQ5NzhlMThiZDlhNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjIsXG4gICAgICAyNCxcbiAgICAgIDIzLFxuICAgICAgMTksXG4gICAgICAxODcsXG4gICAgICA2NyxcbiAgICAgIDExNixcbiAgICAgIDEwNCxcbiAgICAgIDQ4LFxuICAgICAgNzQsXG4gICAgICAyNDksXG4gICAgICA0MixcbiAgICAgIDE5NSxcbiAgICAgIDE5MixcbiAgICAgIDE3NSxcbiAgICAgIDIxNSxcbiAgICAgIDE2NSxcbiAgICAgIDIwMixcbiAgICAgIDE2MixcbiAgICAgIDIyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTcsXG4gICAgICAyMzQsXG4gICAgICA5MyxcbiAgICAgIDE4LFxuICAgICAgMTkwLFxuICAgICAgMTIxLFxuICAgICAgOTgsXG4gICAgICAxNjksXG4gICAgICAzNCxcbiAgICAgIDI0OCxcbiAgICAgIDE0MCxcbiAgICAgIDE1NyxcbiAgICAgIDE3LFxuICAgICAgODcsXG4gICAgICAyMDcsXG4gICAgICAxMTIsXG4gICAgICAyMzMsXG4gICAgICAxNyxcbiAgICAgIDE0MyxcbiAgICAgIDIyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKSkxZQTVORVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAzNzA1Mjg4Mjo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTQ5OTQ4NzUyMDM1OjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGoxcWZJR0VMejdoYmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJEeUZvZC93N3A0cVdpSWNrSzl1TWRRMHNxWnFjOUUvWTVleXRnUFdpamlnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImFzQlZVSFhmekREVmxKbUNVOVpTd3U4SDhpSzFwSFh4OGsvRHVJTkFZUEFQRUdFOXZFMGF6aU1FUkhrZG94eGZhT0h5ZkQ0NE1vKzhTaXRZakUwU0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInU4akgvZHlSUk9wbzBYeUMvMzlQZEVha0tXaU5SNlh3NlJUWmx3RWJZbytmRFdDNVFqZ285eEJFK3VLd1hReVlJWG9XcFdyOTV3MTNIK3h2Z245QkRRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMzcwNTI4ODI6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwMjQ4MTI4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
