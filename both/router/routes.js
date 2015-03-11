Router.route('/', {
  name: 'home',
  waitOn: function() {
    return[this.subscribe('Questions'), this.subscribe('Answers'),this.subscribe('userdata')];
  }
});

Router.route('/newQuestion', {
    name: 'newQuestion'
});