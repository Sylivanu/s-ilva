const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "https://telegra.ph/file/bd7de62f35507d6b4c2de.mp4" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="sylivanusmomanyi@gmail.com"
global.location="Kisii,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363180849475037@g.us"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SilvaTechB/silva-md-bot";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9c522f89834cfb510738d.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ" 


global.devs = "254700143167" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254743706010";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254743706010";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9c522f89834cfb510738d.jpg" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254700143167";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254700143167, 254743706010";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://silvatech.vercel.app";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_52_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDU5LFxuICAgICAgICA3MixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA5MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU1LFxuICAgICAgICA4NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgNixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTksXG4gICAgICAgIDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NSxcbiAgICAgICAgNDksXG4gICAgICAgIDgzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MixcbiAgICAgICAgMTk3LFxuICAgICAgICA1NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY5LFxuICAgICAgICA3MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDksXG4gICAgICAgIDkzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDM1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDksXG4gICAgICAgIDgsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDgxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODEsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDksXG4gICAgICAgIDYzLFxuICAgICAgICA5MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDksXG4gICAgICAgIDkwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICA5NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqS1lnUW5maFpicDFhK3BSNmkxMnJ3WlJsRGh1VzNXN2puUnZkUUNhSEFVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwTmJoRDVZblFQS3BOUmp3YXRBWDVRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhhYmQ1ZTJmLWJiNmUtNDk3Yy1hZGVjLTU1NjE5ZDUwY2Y0ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDksXG4gICAgICAyMjIsXG4gICAgICAxOTAsXG4gICAgICA5MixcbiAgICAgIDEwMSxcbiAgICAgIDEyNSxcbiAgICAgIDY4LFxuICAgICAgMTYzLFxuICAgICAgMTc5LFxuICAgICAgMTI5LFxuICAgICAgMTUsXG4gICAgICAxODMsXG4gICAgICAxNzIsXG4gICAgICAwLFxuICAgICAgMTE2LFxuICAgICAgMTg2LFxuICAgICAgMTIsXG4gICAgICA4OCxcbiAgICAgIDg5LFxuICAgICAgMTk3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MSxcbiAgICAgIDIwMyxcbiAgICAgIDE2MCxcbiAgICAgIDY3LFxuICAgICAgMTYzLFxuICAgICAgMTI4LFxuICAgICAgMjEyLFxuICAgICAgMTY0LFxuICAgICAgMTg2LFxuICAgICAgMjA2LFxuICAgICAgMTIxLFxuICAgICAgMjI3LFxuICAgICAgMTAxLFxuICAgICAgMTAsXG4gICAgICAyMjQsXG4gICAgICAxNjcsXG4gICAgICAxOTksXG4gICAgICAyMSxcbiAgICAgIDI0LFxuICAgICAgOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMTFFUTdQODRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0MzcwNjAxMDoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc3NTU0MTc0OTM5MzIyOjI2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p6UTdjVUdFTW11cWJRR0dBZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibDhMVCs3UGlRY1ZRME5PUkhYWjBxc3gxSXhsVE9Ud0VLS1lFY1hzR1BHcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJidVE0VlFJK0hDWjFJd043clJ4dm94c29HdmVZdTNwZjR3QW5Bcmcvd1FZU3NwVCs0SmRjWGdHaHEwVGFkL3g2OWgweEJVT3lqTkl3cVg0Yk1zR21Ddz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSR0xmSG1rZi9BS1gxNHdNejN1U3VvbGM4cXBHMUl5alViZ1B6eFM0SlpLb0gyd0xKT3gzNDdKeFZ4dmpKMExpRWJzQjc1Q2hTcXM2VUd1YWRDQTNoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDM3MDYwMTA6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM0MjM0OVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "1", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "2.3.9",
  caption : global.caption || "『𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ 』" , // ```『 𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ 』```", //*『𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉』*\n tiktok.com/@silva.edits6"),
 
  author : process.env.PACK_AUTHER|| "silva",
  packname: process.env.PACK_NAME || "tech",
  botname : process.env.BOT_NAME  || "𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉",


  errorChat : process.env.ERROR_CHAT || "254743706010",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "DJwc34NaWmhXmDxEeh6YUEmm",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SILVA"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
