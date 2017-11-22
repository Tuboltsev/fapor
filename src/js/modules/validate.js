var Form = {
  validate: function(form, error) {

    let validateEmail = function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
      return re.test(email);
    };

    $(form).on('submit', e => {
      let email = $(form).find('[name="email"]').val();

      if (!validateEmail(email)) {
        error();

        return false;
      }
    });
  }
};

export default Form;