Template.project.helpers({
  project: function () {
    return this.project[0]
  },
  journeys: function () {
    console.log(this.journeys.fetch())
    return this.journeys
  }
})

Template.project.rendered = function () {
  Meteor.setTimeout(function () {
    $('.sortable').sortable()
  }, 1000)
}
