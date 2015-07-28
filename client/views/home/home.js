Template.home.helpers({
  projects: function () {
    var data = projects.reactive()
    console.log(data)
    return data
  }
})
