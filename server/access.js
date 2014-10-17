access = ( function() {
  
  function isLoggedIn(userId) {
    if(!userId) return false;
    var user = Meteor.users.findOne(userId);
    if(!user) return false;
    return true;
  }
  
  return {
    isLoggedIn : isLoggedIn,
  };
  
} )();
