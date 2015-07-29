Template.project.helpers({
  project: function () {
    if (this.project) {
      return this.project[0]
    }
  },
  journeys: function () {
    return this.journeys
  },
  slug: function () {
    return 'test'
  }
})

Template.project.rendered = function () {
  Meteor.setTimeout(function () {
    $('.sortable').sortable()
  }, 1000)
}
