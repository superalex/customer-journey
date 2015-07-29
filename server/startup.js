var liveDb = new LivePg(Meteor.settings.postgres, 'customerjourney')

var closeAndExit = function() {
  liveDb.cleanup(process.exit)
}

process.on('SIGTERM', closeAndExit)
process.on('SIGINT', closeAndExit)

Meteor.publish('projects', function(slug){
  if (slug) {
    return liveDb.select("SELECT * FROM projects_project WHERE slug = $1", [slug])
  }
  else {
    return liveDb.select('SELECT * FROM projects_project ORDER BY name ASC')
  }
})

Meteor.publish('issues', function(slug){
  return liveDb.select("SELECT * FROM userstories_userstory INNER JOIN projects_project ON (projects_project.id = userstories_userstory.project_id) WHERE slug = $1", [slug])
})

Meteor.publish('journeys', function (project_slug) {
  return journeys.find({ project_slug: project_slug })
});
