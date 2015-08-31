Chat = ReactMeteor.createClass({
  templateName: 'ReactChat',

  // mixins: [ReactMeteorData],

  startMeteorSubscriptions: function() {
    Meteor.subscribe('messages');
  },

  getMeteorState: function() {
    return {
      messages: Messages.find({}).fetch(),
      currentUser: Meteor.user()
    }
  },

  render: function() {
    return (
      <div className="container">
        <MessageList messages={ this.state.messages } />
        <MessageForm />
      </div>

      )
  }
})
