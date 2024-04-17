
const { EmbedBuilder,PermissionsBitField, ActionRowBuilder, ButtonBuilder, ButtonStyle ,VoiceChannel,AttachmentBuilder } = require("discord.js");
const { Command } = require("../../../../Global/Structures/Default.Commands");
const { post } = require("node-superfetch");
const {Guild} = require("../../../../Global/Config/Guild")
const User = require("../../../../Global/Database/Users")
const req = require('request');
const fetch = require("node-fetch");
const rolePermissions = require("../../../../Global/Database/rolePermissions");
const guildRoles = require("../../../../Global/Database/Guild.Roles.Config")

class test extends Command {
    constructor(client) {
        super(client, {
            name: "test",
            description: "Bot ile mesaj göndermek için",
            usage: ".test (metin/embed)",
            category: "wexcik",
            aliases: ["test"],

            enabled: true,
            guildOwner:true,
            developer : true
        });
    }
    

    onLoad(client) {
    
    }

 async onRequest (client, message, args,embed) {
 let data = 
  {

'altYönetimPerms': [],
kurucuPerms: [],
manRoles: [ '', '' ],
'ortaYönetimPerms': [],
unregisterRoles: [ '' ],
womanRoles: [ '', '' ],
'üstYönetimPerms': [],
registerStaffRole: '',
chatMuteStaffRole: '',
botCommandsRole: '',
chatMutedRole: ''
}

  let a = [...data.altYönetimPerms,...data.ortaYönetimPerms,...data.üstYönetimPerms,...data.kurucuPerms,data.manRoles,data.womanRoles,data.registerStaffRole,data.unregisterRoles,data.chatMuteStaffRole,data.chatMutedRole];
  let b = a.some(x=> x == "1066294817069482023")
  console.log(b)
  // let a = await rolePermissions.find();
  // console.log(a);

  // const GUILD_ROLES = require("../../../../Global/Database/Backup/Guild.Roles");
  // const data = await GUILD_ROLES.findOne({ roleID: "1064983955763376138" });
  // console.log(data)
//     const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: "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",
// });
// const openai = new OpenAIApi(configuration);

// const response = await openai.createCompletion({
//   model: "text-davinci-003",
//   prompt: "Merhaba",
//   temperature: 0,
//   max_tokens: 100,
//   top_p: 1.0,
//   frequency_penalty: 0.2,
//   presence_penalty: 0.0,
//   stop: ["\n"],
// });
// console.log(response.data.choices)
//     const messageUser = require("../../../../Global/Database/Stats/Message/messageUser")

// var messageData = await messageUser.find({ guildID: message.guild.id});
// // for (let i = 0; i < messageData.length; i++) {
// //     const x = messageData[i];
// //     if(x.userID == message.member.id) return message.channel.send({content:`${i+1}. Sıradasın.`})
// // }
//  console.log(messageData)

// messageData = messageData.sort((a,b)=> b.totalStat - a.totalStat);
// for (let i = 0; i < messageData.length; i++) {
//     const x = messageData[i];
//     if(x.userID == message.member.id) return message.channel.send({content:`${i+1}. Sıradasın.`})
// }
//     const messageUserChannel = require("../../../../Global/Database/Stats/Message/messageUserChannel")
//     let member = message.member
//     const memberMessageData = await messageUserChannel.find({ guildID: message.guild.id, userID: member.id }).sort({ channelData: -1 });
//     console.log(memberMessageData)
//     var cats = [];
//     memberMessageData.forEach(x => {
// let channel = message.guild.channels.cache.get(x.channelID)
// if(cats.some(a=> !a.channelID.includes(channel.parentId))){
//     cats.push({channelID:channel.parentId, dataCount:0})

// }
// for (let i = 0; i < memberMessageData.length; i++) {
//     const z = cats[i];
//  if (z.channelID == channel.parentId){
//     z.dataCount +=x.channelData
//     }  
// }

// });
// console.log(cats)
//     let slotEmoji = message.guild.emojis.cache.find(x=> x.name == "appEmoji_slot")
//     let boskutu = message.guild.emojis.cache.find(x=> x.name == "appEmoji_boskutu")
//     let yukaricizgi = message.guild.emojis.cache.find(x=> x.name == "appEmoji_yukarcizgi");
//   let slotMessage = await message.channel.send(`
// **${yukaricizgi}  SLOTS  ${yukaricizgi}**
// ${yukaricizgi}${slotEmoji}${slotEmoji}${slotEmoji}${yukaricizgi}
// ${yukaricizgi}${boskutu}${boskutu}${boskutu}${yukaricizgi}
// ${yukaricizgi}${boskutu}${boskutu}${boskutu}${yukaricizgi}`)
    // const rastgele = await Math.floor(Math.random()*10)
    // const verifyMsg = await message.channel.send({files:[new AttachmentBuilder().setFile("https://cdn.discordapp.com/attachments/1011397607685374033/1061581014616526878/tahminetvekazan.png").setName("kazanamadi.png")]});
    // var stBasanlar = [];
    // verifyMsg.channel.awaitMessages({ max: 1, time: 10000, errors: ['time'] }).then(async collected => {
    // const msg = collected.first();
    // if(stBasanlar.includes(msg.author.id))return;
    // if(Number(msg.content) == `${rastgele}`){
    //     stBasanlar = [];
    //     const coin = await Math.floor(Math.random()*1500);
    //     await verifyMsg.reply({content:`**Tuttuğum sayıyı doğru tahmin etti, Seni tebrik ederim ${msg.author}. Benden  __${coin}__ Adet Coin ${message.guild.emojis.cache.find(x=> x.name == "appEmoji_coin")} Kazandın!**`})
    //     if(verifyMsg) verifyMsg.delete().catch(err => {return;});
    // } else {
    // await stBasanlar.push(msg.author.id)
    // }

    // }).catch(async err => {
    //     stBasanlar = [];
    //     if(verifyMsg) verifyMsg.delete().catch(err => {return;});
    // });
    // const satirBir = new ActionRowBuilder({components:[
    //     new ButtonBuilder().setCustomId("1").setEmoji(await emojiBul("appEmoji_bir")).setStyle(ButtonStyle.Secondary),
    //     new ButtonBuilder().setCustomId("2").setEmoji(await emojiBul("appEmoji_iki")).setStyle(ButtonStyle.Secondary),
    //     new ButtonBuilder().setCustomId("3").setEmoji(await emojiBul("appEmoji_uc")).setStyle(ButtonStyle.Secondary),
    //     new ButtonBuilder().setCustomId("4").setEmoji(await emojiBul("appEmoji_dort")).setStyle(ButtonStyle.Secondary),
    //     new ButtonBuilder().setCustomId("5").setEmoji(await emojiBul("appEmoji_bes")).setStyle(ButtonStyle.Secondary),
    // ]})
    //  message.channel.send({components:[satirBir],files: [ new AttachmentBuilder().setFile("https://cdn.discordapp.com/attachments/1011397607685374033/1061413475043254342/dolusandik.png").setName("tiklakazan.png")]})
    //  .then(async msg => {
    //  const sayi = await Math.floor(Math.random()*6);;
    //  console.log(sayi)
    //  const collector = msg.createMessageComponentCollector({ time: 10000 });
    //  var dkbBasanlar = [];
    //  collector.on('collect', async (i) => {
    //     if(dkbBasanlar.includes(i.user.id)) return i.reply({content:`**Bu oyundan elendiniz. Sırada ki oyunda bol şanslar!**`,ephemeral:true})
    //     if (i.customId == `${sayi}`) {
    //     const coin = await Math.floor(Math.random()*1000);
    //     i.reply({content:`**Tebrikler, __${coin}__ Adet Coin ${i.guild.emojis.cache.find(x=> x.name == "appEmoji_coin")} Kazandın!**`,ephemeral:true})    
    //     if (msg) await msg.delete()
    //     dkbBasanlar = [];
    //     } else {
    //         dkbBasanlar.push(i.user.id)
    //     i.reply({files:[new AttachmentBuilder().setFile("https://cdn.discordapp.com/attachments/1011397607685374033/1061409527850872913/1061388565247967374.gif").setName("kazanamadi.png")],ephemeral:true})
    //     }
    //     })
    //     collector.on("end", async (collected, reason) => {
    //         if (reason === "time") {
    //             dkbBasanlar = [];
    //           if (msg) await msg.delete()
    //         }
    //       });
    //  })

    // const tıklakazan = new ActionRowBuilder({components:[new ButtonBuilder().setCustomId("tiklakazan").setLabel("Tıkla!").setEmoji(await emojiBul("appEmoji_elmas")).setStyle(ButtonStyle.Secondary)]})

    // message.channel.send({components:[tıklakazan],files: [ new AttachmentBuilder().setFile("https://cdn.discordapp.com/attachments/1011397607685374033/1061407355423703110/tklakazan.png").setName("tiklakazan.png")]}).then(async msg =>{
    //     const collector = msg.createMessageComponentCollector({ time: 10000 });
    // var tkBasanlar = [];
    // collector.on('collect', async (i) => {
    // const sayi = await Math.floor(Math.random()*2);
    // if(tkBasanlar.includes(i.user.id)) return i.reply({content:`**Bu oyundan elendiniz. Sırada ki oyunda bol şanslar!**`,ephemeral:true})
    // if (i.customId == "tiklakazan") {
    // if(sayi == 1){
    // const coin = await Math.floor(Math.random()*500);
    // i.reply({content:`**Tebrikler, __${coin}__ Adet Coin ${i.guild.emojis.cache.find(x=> x.name == "appEmoji_coin")} Kazandın!**`,ephemeral:true})    
    // if (msg) await msg.delete()
    // tkBasanlar = [];
    // } else {
    //     tkBasanlar.push(i.user.id)
    // i.reply({files:[new AttachmentBuilder().setFile("https://cdn.discordapp.com/attachments/1011397607685374033/1061409527850872913/1061388565247967374.gif").setName("kazanamadin.gif")],ephemeral:true})
    // }
    // }
    // })
    // collector.on("end", async (collected, reason) => {
    //     if (reason === "time") {
    //         tkBasanlar = [];
    //       if (msg) await msg.delete()
    //     }
    //   });
    // })

// var cats = [];
// message.guild.channels.cache.filter(x=> x.parentId).forEach(channel => {
// if(channel.type == 2){
// if(!cats.includes(channel.parentId)){
//     console.log("a")
// cats.push(channel.parentId)
// console.log(cats)
// }
// }

// });
    }
}
module.exports = test;
/*
{
status: 200,
statusText: 'OK',
headers: {
  date: 'Mon, 16 Jan 2023 13:30:24 GMT',
  'content-type': 'application/json',
  'transfer-encoding': 'chunked',
  connection: 'close',
  'access-control-allow-origin': '*',
  'cache-control': 'no-cache, must-revalidate',
  'openai-model': 'text-davinci-003',
  'openai-organization': 'approval',
  'openai-processing-ms': '698',
  'openai-version': '2020-10-01',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  'x-request-id': 'cd353bfac75c71f65a2d17f1f4659eb4'
},
config: {
  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },
  adapter: [Function: httpAdapter],
  transformRequest: [ [Function: transformRequest] ],
  transformResponse: [ [Function: transformResponse] ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: [Function: validateStatus],
  headers: {
    Accept: 'application/json, text/plain, ',
    'Content-Type': 'application/json',
    'User-Agent': 'OpenAI/NodeJS/3.1.0',
    Authorization: 'Bearer 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',
    'Content-Length': 135
  },
  method: 'post',
  data: '{"model":"text-davinci-003","prompt":"Merhaba","temperature":0,"max_tokens":100,"top_p":1,"frequency_penalty":0.2,"presence_penalty":0}',
  url: 'https://api.openai.com/v1/completions'
},
request: <ref *1> ClientRequest {
  _events: [Object: null prototype] {
    abort: [Function (anonymous)],
    aborted: [Function (anonymous)],
    connect: [Function (anonymous)],
    error: [Function (anonymous)],
    socket: [Function (anonymous)],
    timeout: [Function (anonymous)],
    prefinish: [Function: requestOnPrefinish]
  },
  _eventsCount: 7,
  _maxListeners: undefined,
  outputData: [],
  outputSize: 0,
  writable: true,
  destroyed: false,
  _last: true,
  chunkedEncoding: false,
  shouldKeepAlive: false,
  _defaultKeepAlive: true,
  useChunkedEncodingByDefault: true,
  sendDate: false,
  _removedConnection: false,
  _removedContLen: false,
  _removedTE: false,
  _contentLength: null,
  _hasBody: true,
  _trailer: '',
  finished: true,
  _headerSent: true,
  _closed: false,
  socket: TLSSocket {
    _tlsOptions: [Object],
    _secureEstablished: true,
    _securePending: false,
    _newSessionPending: false,
    _controlReleased: true,
    secureConnecting: false,
    _SNICallback: null,
    servername: 'api.openai.com',
    alpnProtocol: false,
    authorized: true,
    authorizationError: null,
    encrypted: true,
    _events: [Object: null prototype],
    _eventsCount: 10,
    connecting: false,
    _hadError: false,
    _parent: null,
    _host: 'api.openai.com',
    _readableState: [ReadableState],
    _maxListeners: undefined,
    _writableState: [WritableState],
    allowHalfOpen: false,
    _sockname: null,
    _pendingData: null,
    _pendingEncoding: '',
    server: undefined,
    _server: null,
    ssl: [TLSWrap],
    _requestCert: true,
    _rejectUnauthorized: true,
    parser: null,
    _httpMessage: [Circular *1],
    [Symbol(res)]: [TLSWrap],
    [Symbol(verified)]: true,
    [Symbol(pendingSession)]: null,
    [Symbol(async_id_symbol)]: 3985,
    [Symbol(kHandle)]: [TLSWrap],
    [Symbol(kSetNoDelay)]: false,
    [Symbol(lastWriteQueueSize)]: 0,
    [Symbol(timeout)]: null,
    [Symbol(kBuffer)]: null,
    [Symbol(kBufferCb)]: null,
    [Symbol(kBufferGen)]: null,
    [Symbol(kCapture)]: false,
    [Symbol(kBytesRead)]: 0,
    [Symbol(kBytesWritten)]: 0,
    [Symbol(connect-options)]: [Object],
    [Symbol(RequestTimeout)]: undefined
  },
  _header: 'POST /v1/completions HTTP/1.1\r\n' +
    'Accept: application/json, text/plain, \r\n' +
    'Content-Type: application/json\r\n' +
    'User-Agent: OpenAI/NodeJS/3.1.0\r\n' +
    'Authorization: Bearer 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\r\n' +
    'Content-Length: 135\r\n' +
    'Host: api.openai.com\r\n' +
    'Connection: close\r\n' +
    '\r\n',
  _keepAliveTimeout: 0,
  _onPendingData: [Function: nop],
  agent: Agent {
    _events: [Object: null prototype],
    _eventsCount: 2,
    _maxListeners: undefined,
    defaultPort: 443,
    protocol: 'https:',
    options: [Object: null prototype],
    requests: [Object: null prototype] {},
    sockets: [Object: null prototype],
    freeSockets: [Object: null prototype] {},
    keepAliveMsecs: 1000,
    keepAlive: false,
    maxSockets: Infinity,
    maxFreeSockets: 256,
    scheduling: 'lifo',
    maxTotalSockets: Infinity,
    totalSocketCount: 1,
    maxCachedSessions: 100,
    _sessionCache: [Object],
    [Symbol(kCapture)]: false
  },
  socketPath: undefined,
  method: 'POST',
  maxHeaderSize: undefined,
  insecureHTTPParser: undefined,
  path: '/v1/completions',
  _ended: true,
  res: IncomingMessage {
    _readableState: [ReadableState],
    _events: [Object: null prototype],
    _eventsCount: 4,
    _maxListeners: undefined,
    socket: [TLSSocket],
    httpVersionMajor: 1,
    httpVersionMinor: 1,
    httpVersion: '1.1',
    complete: true,
    rawHeaders: [Array],
    rawTrailers: [],
    aborted: false,
    upgrade: false,
    url: '',
    method: null,
    statusCode: 200,
    statusMessage: 'OK',
    client: [TLSSocket],
    _consuming: true,
    _dumped: false,
    req: [Circular *1],
    responseUrl: 'https://api.openai.com/v1/completions',
    redirects: [],
    [Symbol(kCapture)]: false,
    [Symbol(kHeaders)]: [Object],
    [Symbol(kHeadersCount)]: 24,
    [Symbol(kTrailers)]: null,
    [Symbol(kTrailersCount)]: 0,
    [Symbol(RequestTimeout)]: undefined
  },
  aborted: false,
  timeoutCb: null,
  upgradeOrConnect: false,
  parser: null,
  maxHeadersCount: null,
  reusedSocket: false,
  host: 'api.openai.com',
  protocol: 'https:',
  _redirectable: Writable {
    _writableState: [WritableState],
    _events: [Object: null prototype],
    _eventsCount: 3,
    _maxListeners: undefined,
    _options: [Object],
    _ended: true,
    _ending: true,
    _redirectCount: 0,
    _redirects: [],
    _requestBodyLength: 135,
    _requestBodyBuffers: [],
    _onNativeResponse: [Function (anonymous)],
    _currentRequest: [Circular *1],
    _currentUrl: 'https://api.openai.com/v1/completions',
    [Symbol(kCapture)]: false
  },
  [Symbol(kCapture)]: false,
  [Symbol(kNeedDrain)]: false,
  [Symbol(corked)]: 0,
  [Symbol(kOutHeaders)]: [Object: null prototype] {
    accept: [Array],
    'content-type': [Array],
    'user-agent': [Array],
    authorization: [Array],
    'content-length': [Array],
    host: [Array]
  }
},
data: {
  id: 'cmpl-6ZJr6iLHeu0Pg4MNGfHTyv6xMN8yX',
  object: 'text_completion',
  created: 1673875824,
  model: 'text-davinci-003',
  choices: [ [Object] ],
  usage: { prompt_tokens: 3, completion_tokens: 12, total_tokens: 15 }
}
}*/