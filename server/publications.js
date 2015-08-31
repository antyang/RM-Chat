// publish messages in reverse
Meteor.publish('messages', function() {
  return Messages.find({ owner: this.userId }, { sort: { date: -1 } });
});
