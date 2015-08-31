Message = React.createClass({
  propTypes: { // reusable components
    name: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div>
        <strong><span>{ this.props.name }</span></strong>:<span>{ this.props.text }</span>
      </div>
      )
  }
});
