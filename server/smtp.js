Meteor.startup(function () {
  smtp = {
    username: '10064c8cdb666f205',
    password: 'd746d80098b643',
    server:   'mailtrap.io',
    port: 25
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});
