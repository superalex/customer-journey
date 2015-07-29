Template.project.helpers({
  project: function () {
    if (this.project) {
      return this.project[0]
    }
  },
  overview: function () {
    var groups = []

    var backlogItems = []

    _.each(this.issues, function (issue) {
      backlogItems.push(issue)
    })

    groups.push({
      name: 'Backlog',
      id: '_none',
      weight: -99,
      children: backlogItems
    })

    _.each(this.journeys.fetch(), function (journey) {
      groups.push({
        name: journey.name,
        id: journey._id,
        children: journey.children
      })
    })

    return groups
  },
})

Template.project.rendered = function () {
  setTimeout(function () {
    $('.overview-parent-children ul').sortable({
      items: '.child',
      connectWith: 'group'
    })

    .bind('sortupdate', function(e, ui) {

    })
  }, 1000)
}
