Meteor.methods({
  sendMessage: function(message) {
    message.date = new Date();
    return Messages.insert(message);
  }
});