if (Meteor.isClient) {
    Template.hello.attributes = function() { return this };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
