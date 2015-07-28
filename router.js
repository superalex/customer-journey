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
  }
});

Router.route('/projects/:slug', {
  name: 'project',
  waitOn: function () {
    return Meteor.subscribe('project', this.params.slug)
    return Meteor.subscribe('issues', this.params.slug)
  },
  data: function () {
    return {
      project: project.reactive(),
      issues: issues.reactive()
    }
  },
  onBeforeAction: function () {
    issues.change(this.params.slug)
    project.change(this.params.slug)
    this.next()
  }
});
