if (typeof App === 'undefined') App = {};

App.scrollToBottom = function() {
  height = $('.messages').height()
  $('.messages-wrapper').animate({scrollTop: height})
}
