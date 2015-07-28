Router.configure({
  layoutTemplate: 'main'
})

Router.route('/', function () {
  Router.go('projects')
})

Router.route('/projects', {
  name: 'projects',
  waitOn: function () {
    return Meteor.subscribe('projects')
  },
  data: function () {
    return projects.reactive()
  },
  action: function () {
    this.render('projects')
  }
});

Router.route('/projects/:slug', {
  name: 'project',
  waitOn: function () {
    return Meteor.subscribe('project', this.params.slug)
  },
  data: function () {
    return project.reactive()
  },
  action: function () {
    project.change(this.params.slug);
    this.render('project')
  }
});
