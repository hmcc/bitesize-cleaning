Meteor.startup(function () {
  smtp = {
    username: '10064c8cdb666f205',
    password: 'd746d80098b643',
    server:   'mailtrap.io',
    port: 25
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;

  Accounts.emailTemplates.siteName = "Agile Cleaning";
  Accounts.emailTemplates.from = "Agile Cleaning Admin<accounts@agilecleaning.com>";
  Accounts.emailTemplates.enrollAccount.subject = function (user) {
    return "Welcome to Agile Cleaning";
  };
  Accounts.emailTemplates.enrollAccount.text = function (user, url) {
    var urlComponents = url.split("/");
    var baseURL = urlComponents.slice(0,3).join('/'); /* e.g. http://localhost:3000 */
    var site = urlComponents.slice(2,3)[0];           /* e.g. localhost:3000 */
    var id = urlComponents.slice(-1)[0];              /* e.g. 1234567890aBcDeFgH... */
    return "Hello,\n\n"
      + "An account has been created for you on " + site + ". "
      + "To start using the service, simply click the link below.\n\n"
      + baseURL + "/complete-signup/" + id + "\n\n"
      + "Thanks."
  };
});
