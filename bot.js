'use strict';

const slack = require('slack');
const _ = require('lodash');
const config = require('./config');

let bot = slack.rtm.client();

bot.started((payload) => {
  this.self = payload.self
});

bot.message((msg) => {
  console.log('msg received');
  console.log(msg);

  // handle bot message
  if (msg.subtype && msg.subtype === 'bot_message') {
    let attachments = msg.attachments;
    if (!attachments) {
      console.log('no attachments');
      return;
    }
    _.each(attachments, at => {
      const text = at.text || '(no text)';
      const fallback = at.fallback || '(no fallback)';
      console.log('text = ' + text + ', fallback = ' + fallback);
    });

    return;
  }

  //if (!msg.user) return;
  //
  //if (!_.includes(msg.text.match(/<@([A-Z0-9])+>/igm), `<@${this.self.id}>`)) return;
  //
  //slack.chat.postMessage({
  //  token: config('SLACK_TOKEN'),
  //  //icon_emoji: config('ICON_EMOJI'),
  //  channel: msg.channel,
  //  username: 'yamaboot',
  //  text: `beep boop: I hear you loud and clear!"`
  //}, (err, data) => {
  //  if (err) throw err;
  //
  //  let txt = _.truncate(data.message.text);
  //  console.log('message posted: ' + txt);
  //})
  //
});

module.exports = bot;