# Customer Journey, a meteor app for strategic planning

Requirements: Taiga, Postgres, Meteor

This app provides a board to visualize a customer journey. Each column represents a touchpoint and can be populated with User Stories from Taiga.

###Installation
- curl https://install.meteor.com/ | sh
- create a user that can read and write to your Postgres taiga db
- enter the credentials in config/settings.json like
```
{
  "postgres": "postgres://taiga:[password]@[host]/taiga"
}
```
- meteor --settings config/settings.json
