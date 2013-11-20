if(Meteor.isServer) {
  //creating a global server logger
  logger = Meteor.require('winston');

  Meteor.publish('user', function() {
    var userId = this.userId;
    logger.info('user connected', {userId: userId});

    this.ready();
    this.onStop(function() {
      logger.info('user disconnected', {userId: userId});
    });
  });
}

if(Meteor.isClient) {
  Meteor.subscribe('user');
}
