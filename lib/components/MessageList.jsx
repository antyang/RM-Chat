MessageList = React.createClass({
  propTypes: {
    name: React.PropTypes.array.isRequired,
    messages: React.PropTypes.array.isRequired
  },

  componentDidUpdate: function() {
    App.scrollToBottom();
  },

  render: function() {
    list = _.map(this.props.messages, function(message, i) {
      return (
        <Message key={ message._id } text={ message.text } name={ message.name } />
        )
    })

    return (
      <div className="messages-wrapper">
        <div className="messages">
          { list }
        </div>
      </div>
      )
  }
});
