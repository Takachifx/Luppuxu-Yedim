const { Schema, model } = require("mongoose");

const schema = Schema({
  guildID: String,
  database:{type:Boolean, default:false},
  serverGuard:{type:Boolean, default:false},
  rolesGuard:{type:Boolean, default:false},
  channelsGuard:{type:Boolean, default:false},
  banKickGuard:{type:Boolean, default:false},
  emojiStickersGuard:{type:Boolean, default:false},
  UrlSpammer:{type:Boolean, default:false},
  webAndofflineGuard:{type:Boolean, default:false},
  SafedMembers:{type:Array, default:[""]},
  serverSafedMembers:{type:Array, default:[""]},
  roleSafedMembers:{type:Array, default:[""]},
  channelSafedMembers:{type:Array, default:[""]},
  banKickSafedMembers:{type:Array, default:[""]},
  emojiStickers:{type:Array, default:[""]},
});

module.exports = model("Guard", schema);
