Messages = new Meteor.Collection('messages');

if (Meteor.isServer) {
	// this code only runs on the server
	Meteor.startup( function() {
		Messages.remove({});
	});
}

if (Meteor.isClient){
  // this code only runs on the client
	Accounts.ui.config({
		passwordSignupFields: "USERNAME_ONLY"
  });
}