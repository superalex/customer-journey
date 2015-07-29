Template.AddCustomerJourney.events({
  "submit #add-customer-journey": function (event, template) {
    event.preventDefault()

    var customerJourneyName = template.find('[name="name"]').value
    var customerJourneyDescription = template.find('[name="description"]').value
    var slug = template.data.project[0].slug

    var journey_id = journeys.insert({
      project_slug: slug,
      name: customerJourneyName,
      description: customerJourneyDescription
    })

    Router.go('project', {
      slug: slug
    })
  }
})
