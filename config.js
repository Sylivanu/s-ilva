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
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://u6f6jueihklpl6:pc98e5b15cadf6683328e0761a5666a1fea75c0a1bdfb0e9d4fc6057d58f17c74@caij57unh724n3.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/d8rivaqa8qgpat"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SilvaTechB/silva-md-bot";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9c522f89834cfb510738d.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ" 


global.devs = "254700143167" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "256742366969";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256742366969";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "256742366969, 256742366969";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://silvatech.vercel.app";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_27_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTksXG4gICAgICAgIDExNixcbiAgICAgICAgMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA0OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkzLFxuICAgICAgICAzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc2LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA1NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDk3LFxuICAgICAgICA0NixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjksXG4gICAgICAgIDUxLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDUwLFxuICAgICAgICAzNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAzOSxcbiAgICAgICAgODQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMixcbiAgICAgICAgMzEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMCxcbiAgICAgICAgODIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDkwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODEsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA5NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICA0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkhRMkJyUnNETlFvcmZ0RGZWa3FqRzR6ZVhTbFVNMGtOZXlyOTZhR0dtSGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlhXRTlEWlFKUmFxcVRpUDNfalNzd1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2Q3NTAyMWMtNTE1OC00YWVhLTkyYWMtMGQ1ZGIwNzc5YTFkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNyxcbiAgICAgIDIwOCxcbiAgICAgIDMyLFxuICAgICAgMjI1LFxuICAgICAgMTk2LFxuICAgICAgODksXG4gICAgICAwLFxuICAgICAgNjEsXG4gICAgICAyNDYsXG4gICAgICA4NyxcbiAgICAgIDk1LFxuICAgICAgMjUzLFxuICAgICAgMjExLFxuICAgICAgMTUsXG4gICAgICAyMTIsXG4gICAgICA4MyxcbiAgICAgIDk0LFxuICAgICAgMzQsXG4gICAgICA2MixcbiAgICAgIDE3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzAsXG4gICAgICA5LFxuICAgICAgMTEsXG4gICAgICAyMzEsXG4gICAgICA1NyxcbiAgICAgIDIwNSxcbiAgICAgIDExNyxcbiAgICAgIDMsXG4gICAgICA0MCxcbiAgICAgIDI0MyxcbiAgICAgIDgsXG4gICAgICA1MSxcbiAgICAgIDE2MyxcbiAgICAgIDE2NixcbiAgICAgIDM1LFxuICAgICAgMTE4LFxuICAgICAgMjA0LFxuICAgICAgNTgsXG4gICAgICA5NyxcbiAgICAgIDY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVKRFY4NkFGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NDIzNjY5Njk6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkDigrPigrXigrXDmMmE4oKm4oKuIDIg4oKxw5jisaRcIixcbiAgICBcImxpZFwiOiBcIjY4MDcxNDIzMjM4MjE0OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzdveU9rSEVML2ltclFHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvT2M0Z3ZIZzA0Y0lzVW1MVHE0azc3WlFEVFlKOUFneFA3ZlVJbVdCbEFNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJrM3RkUTAwamZKZEczeERtb0REaE5wZWhObTY5T3JLNzBnamJ0UzFhSjdUVU51WERGR0pPazRwdEt0YWgrTEVFb2VuNEFFMDRDMVZBOWViTTlYMkJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkxLMloxczdSV2pjMTlkZ3dwNm9kcEh0aUIxMHFQenh0YnVEVlFtVHo5M21xLzFrZTAxaExnMlBDb0laTmcrSjB1dFBVeFlNS1JsTUdnL2hWTzBKbWdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc0MjM2Njk2OTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTAzMjM1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR1BoXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHUGguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTTjlnZUlFeTJQZGptT1RteWd3OStGTmc1WHlsWWVuMWFQck9MTU9oTlpVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMDA0NDIyMjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "1", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "2.3.9",
  caption : global.caption || "『 𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ 』" , // ```『 𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ 』```", //*『𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉』*\n tiktok.com/@silva.edits6"),
 
  author : process.env.PACK_AUTHER|| "Account",
  packname: process.env.PACK_NAME || "Uganda",
  botname : process.env.BOT_NAME  || "𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "account",


  



  errorChat : process.env.ERROR_CHAT || "254743706010",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SILVA"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
