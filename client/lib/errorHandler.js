errorHandler = ( function() {
  
  function showError(template, error) {
    var $error = $(template.find(".error"));
    $error.text(error.reason || $error.text());
    $error.removeClass('hidden');
  }
  
  return {
    showError : showError,
  };
  
} )();
