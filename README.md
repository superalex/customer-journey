# Customer Journey, a meteor app for strategic planning

Requirements: [Taiga](http://taiga.io), Postgres, Meteor

This app provides a board to visualize a customer journey. Each column represents a touchpoint and can be populated with User Stories from [Taiga](http://taiga.io).
The result is a planning-board with 4 dimensions:
1. User Stories with estimation
2. Customer Journey with touchpoints
3. Priority based on business value
4. Sprints

###Installation
- curl https://install.meteor.com/ | sh
- create a user that can read § your Postgres taiga db
- enter the credentials in config/settings.json like
```
{
  "postgres": "postgres://taiga:[password]@[host]/taiga"
}
```
- meteor --settings config/settings.json

*This is in a very early phase of deve
- Dashboard per project
- Drag and drop interface for ordering the User Stories per touchpoint
- Assigning of User Stories to sprints
- Calculation of total points per sprint / per touchpoint
- Drawing a metro-map style line for related stories in different touchpoints
- Django app for Taiga to provide fields in taiga for data from this planner
