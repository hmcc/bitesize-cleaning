access = ( function() {
  
  function isLoggedIn(userId) {
    if(!userId) return false;
    var user = Meteor.users.findOne(userId);
    if(!user) return false;
    return user;
  }
  
  return {
    isLoggedIn : isLoggedIn,
  };
  
} )();
