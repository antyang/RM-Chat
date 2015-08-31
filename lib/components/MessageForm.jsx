MessageForm = React.createClass({
  setName: function(e) {
  },

  onChangeText: function(e) {
    this.setName();
  },

  onSubmit: function(e) {
    e.preventDefault();
    var form = e.target;

    var data = {
      text: form.text.value,
      name: form.name.value
    };

    if(form.text.value === "" || form.name.value === ""){
      return e.stopPropagation();
    }


    // trigger the action
    Meteor.call('sendMessage', data);

    // clear out the input
    React.findDOMNode(this.refs.textInput).value = '';

  },

  render: function() {
    return (


      <form onSubmit={ this.onSubmit }>
        Screen Name:<input name="name" onChange={this.setName} />
        <br />
        Message:<input name="text" ref="textInput" onChange={this.onChangeText} />
        <button className="btn btn-primary">Send message</button>
      </form>
      )
  }
});
