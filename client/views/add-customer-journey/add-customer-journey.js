Template.AddCustomerJourney.events({
  "submit form": function (event, template) {
    var customerJourneyName = event.target.name.value;
    var customerJourneyDescription = event.target.description.value;
    alert(customerJourneyName, customerJourneyDescription);
  }
});
