Template.customerJourney.helpers({
  project: function () {
    return this.project[0]
  },
  issues: function () {
    return this.issues
  }
})

Template.customerJourney.rendered = function () {
  Meteor.setTimeout(function () {
    $('.sortable').sortable()
  }, 1000)
}
