const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "07065668937";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_25_12_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3LFxuICAgICAgICA2MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NSxcbiAgICAgICAgMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjksXG4gICAgICAgIDAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc1LFxuICAgICAgICAxODUsXG4gICAgICAgIDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA1MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMixcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDcxLFxuICAgICAgICA3OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NixcbiAgICAgICAgODYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDMwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM1LFxuICAgICAgICA1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg4LFxuICAgICAgICA0LFxuICAgICAgICA2OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAzNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjUsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDk4LFxuICAgICAgICA3NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTUsXG4gICAgICAgIDg5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2NyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDM0LFxuICAgICAgICA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAzNixcbiAgICAgICAgMTgzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MyxcbiAgICAgICAgODIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDkwLFxuICAgICAgICAyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MixcbiAgICAgICAgNTcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRG5LZmtGRVM0QU5QeTRETzh6eDR5ZGtDRCtFN2RLQ0JYMFlwblEwMGpTQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiR0hPbl9ac3lRUmE2U2hjMHVuZ25RZ1wiLFxuICBcInBob25lSWRcIjogXCJjMDFjODQ0Mi1jNDMxLTQ3NDktOTU5Ni0wNzVmNTEwOGMwZjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUsXG4gICAgICAyMzksXG4gICAgICAxNzAsXG4gICAgICAyMDUsXG4gICAgICAxMDUsXG4gICAgICAxODAsXG4gICAgICAxMTQsXG4gICAgICAyMCxcbiAgICAgIDg2LFxuICAgICAgODMsXG4gICAgICAyNixcbiAgICAgIDM3LFxuICAgICAgMTc2LFxuICAgICAgNDIsXG4gICAgICA5MCxcbiAgICAgIDEyMixcbiAgICAgIDE4NSxcbiAgICAgIDEwMyxcbiAgICAgIDY1LFxuICAgICAgMjAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc3LFxuICAgICAgMzQsXG4gICAgICAyMjYsXG4gICAgICAxMzEsXG4gICAgICAyNCxcbiAgICAgIDEzOSxcbiAgICAgIDE5NyxcbiAgICAgIDEyLFxuICAgICAgOTQsXG4gICAgICA2LFxuICAgICAgNTUsXG4gICAgICAzMCxcbiAgICAgIDY1LFxuICAgICAgMTM3LFxuICAgICAgMTcsXG4gICAgICAyMzcsXG4gICAgICAxMTcsXG4gICAgICA1OCxcbiAgICAgIDQyLFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhZTktDRlIxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDY1NjY4OTM3OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiT25vcnVvaXphIEFkaW5veWlcIixcbiAgICBcImxpZFwiOiBcIjI2ODg2OTQ5OTM3OTkyMToxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKNklwL1VFRU5QaTlyb0dHQWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlhFUmxiMzlBUWtSRmNMR3V6ajdWdXRlYXp4eHpaQzJ4NFlvYUxXdFkrUVk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQWVha3cycjg2Y3BFTzFVMnZ0elJ6OHFEVjRNeVlMY3YzQ2JHd0dKN1RDRnNnQk94Tlphc2xSajNUcjdnbEhzOUE0RzRZSlJES1ZSNDNSZHV2eXczRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid3RLUDhHRnZmY1FtNytuZ1Q4U0NubzNSNEM2TXIxQzZ3d2pUczZuQXBTYWJvbVpkckpOSTl5RE1OZ09yMVZkU3RJWkN1c2EyL2tMM1Bja3lkaU1QaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2NTY2ODkzNzoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQxOTM0OTVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
