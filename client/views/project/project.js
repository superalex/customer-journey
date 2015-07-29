Template.project.helpers({
  project: function () {
    if (this.project) {
      return this.project[0]
    }
  },
  journeys: function () {
    return this.journeys
  }
})

Template.project.rendered = function () {
  var that = this
  Meteor.setTimeout(function () {
    var overview = createParentChildsOverview()

    var backlogItems = []

    _.each(that.data.issues, function (issue) {
      backlogItems.push(issue)
    })

    overview.addGroup({
      name: 'Backlog',
      id: '_none',
      weight: -99,
      children: backlogItems
    })

    _.each(that.data.journeys.fetch(), function (journey) {
      overview.addGroup({
        name: journey.name,
        id: journey._id,
        children: journey.children
      })
    })

    overview.change = function () {}

    overview.init($('.overview-parent-children')[0])
  }, 100)
}
