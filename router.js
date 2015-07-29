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
  onBeforeAction: function () {
    projects.change()
    this.next()
  }
})

Router.route('/projects/:slug', {
  name: 'project',
  waitOn: function () {
    return [
      Meteor.subscribe('projects', this.params.slug),
      Meteor.subscribe('journeys', this.params.slug)
    ]
  },
  data: function () {
    return {
      project: projects.reactive(),
      journeys: journeys.find({ project_slug: this.params.slug })
    }
  },
  onBeforeAction: function () {
    projects.change(this.params.slug)
    this.next()
  }
})

Router.route('/projects/:slug/add-customer-journey', {
  name: 'add-customer-journey',
  waitOn: function () {
     return Meteor.subscribe('projects', this.params.slug)
  },
  data: function () {
    return {
      project: projects.reactive(),
    }
  },
  onBeforeAction: function () {
    projects.change(this.params.slug)
    this.next()
  }
})

Router.route('/projects/:slug/:journey_id', {
  name: 'customer-journey',
  waitOn: function () {
    return [
      Meteor.subscribe('journeys', this.params.journey_id),
      Meteor.subscribe('projects', this.params.slug),
      Meteor.subscribe('issues', this.params.slug)
    ]
  },
  data: function () {
    return {
      project: projects.reactive(),
      issues: issues.reactive(),
      journey: journeys.findOne({ journey_id: this.params.journey_id })
    }
  },
  onBeforeAction: function () {
    issues.change(this.params.slug)
    projects.change(this.params.slug)
    this.next()
  }
})
