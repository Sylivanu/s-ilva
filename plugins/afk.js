const {Module} = require('../main');
const Lang = require('./misc/lang').getString('afk');
const config = require('../config');
var AFK_DB = {
    isAfk: false,
    reason: false,
    lastseen: 0
};
function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    var hDisplay = h > 0 ? h + (h == 1 ? " " + Lang.HOUR + ", " : " " + Lang.HOUR + ", ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " " + Lang.MINUTE + ", " : " " + Lang.MINUTE + ", ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " " + Lang.SECOND : " " + Lang.SECOND) : "";
    return hDisplay + mDisplay + sDisplay; 
}
Module({on: 'text', fromMe: false}, async (message, match) => {   
    if (AFK_DB.isAfk && !message.fromMe) {
        if (message.isGroup && message.mention?.length && (message.mention?.includes(message.myjid+"@s.whatsapp.net") || message.mention?.includes(config.SUDO?.split(",")[0]+"@s.whatsapp.net"))){
                    await message.sendReply(Lang.AFK_TEXT + '\n' + 
                    (AFK_DB.reason !== false ? '\n*' + Lang.REASON + ':* ```' + AFK_DB.reason + '```' : '') + 
                    (AFK_DB.lastseen !== 0 ? '\n*' + Lang.LAST_SEEN + ':* ```' + secondsToHms(Math.round((new Date()).getTime() / 1000) - AFK_DB.lastseen) + ' ago```' : ''));
        } else if (message.isGroup && message.reply_message && (message.reply_message.jid.split('@')[0] === message.myjid || message.reply_message.jid.split("@")[0] === config.SUDO?.split(",")[0])) {
                await message.sendReply(Lang.AFK_TEXT + '\n' + 
                    (AFK_DB.reason !== false ? '\n*' + Lang.REASON + ':* ```' + AFK_DB.reason + '```' : '') + 
                    (AFK_DB.lastseen !== 0 ? '\n*' + Lang.LAST_SEEN + ':* ```' + secondsToHms(Math.round((new Date()).getTime() / 1000) - AFK_DB.lastseen) + ' ago```' : ''));
        } else if (!message.isGroup && !message.fromMe){
            await message.sendReply(Lang.AFK_TEXT + '\n' + 
            (AFK_DB.reason !== false ? '\n*' + Lang.REASON + ':* ```' + AFK_DB.reason + '```' : '') + 
            (AFK_DB.lastseen !== 0 ? '\n*' + Lang.LAST_SEEN + ':* ```' + secondsToHms(Math.round((new Date()).getTime() / 1000) - AFK_DB.lastseen) + ' ago```' : ''));    
        }
    }
});
Module({on: 'text', fromMe: true}, async (message, match) => {
    var handler = config.HANDLERS !== 'false'?config.HANDLERS.split("")[0]:"";
    if (AFK_DB.isAfk && !message.id.startsWith('3EB0') && (message.fromMe || message.sender.split("@")[0] === config.SUDO?.split(",")[0])) {
    const buttons = [
  {buttonId: handler+'afk disable_button', buttonText: {displayText: 'Yes, disable afk'}, type: 1}
     ]

    const buttonMessage = {
    text: "*Looks like you are back online. Use '.afk disable' to disable afk*",
    footer: 'AFK manager',
    buttons: buttons
}
    return await message.sendReply(buttonMessage.text)
    }
});

Module({pattern: 'afk ?(.*)', fromMe: true, desc: Lang.AFK_DESC}, async (message, match) => {     
    if (match[1] === "disable" && (message.fromMe || message.sender.split("@")[0] === config.SUDO?.split(",")[0])){
        AFK_DB.lastseen = 0;
        AFK_DB.reason = false;
        AFK_DB.isAfk = false;
        return await message.sendReply(Lang.IM_NOT_AFK);
    }
    else if (!AFK_DB.isAfk) {
        AFK_DB.lastseen = Math.round((new Date()).getTime() / 1000);
        if (match !== '') { AFK_DB.reason = match[1]; }
        AFK_DB.isAfk = true;
        await message.send(Lang.IM_AFK + (AFK_DB.reason !== false ? ('\n*' + Lang.REASON +':* ```' + AFK_DB.reason + '```') : ''));
    }
});
