var liveDb = new LivePg(Meteor.settings.postgres, 'customerjourney');

var closeAndExit = function() {
  // Cleanup removes triggers and functions used to transmit updates
  liveDb.cleanup(process.exit);
};
// Close connections on hot code push
process.on('SIGTERM', closeAndExit);
// Close connections on exit (ctrl + c)
process.on('SIGINT', closeAndExit);

Meteor.publish('projects', function(){
  return liveDb.select('SELECT * FROM projects_project ORDER BY name ASC');
})

Meteor.publish('project', function(slug){
  return liveDb.select("SELECT * FROM projects_project WHERE slug = $1", [slug])
})
