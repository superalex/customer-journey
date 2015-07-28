var liveDb = new LivePg(CONN_STR, 'customerjourney');

var closeAndExit = function() {
  // Cleanup removes triggers and functions used to transmit updates
  liveDb.cleanup(process.exit);
};
// Close connections on hot code push
process.on('SIGTERM', closeAndExit);
// Close connections on exit (ctrl + c)
process.on('SIGINT', closeAndExit);

Meteor.publish('projects_project', function(){
  return liveDb.select('SELECT * FROM projects_project');
});
