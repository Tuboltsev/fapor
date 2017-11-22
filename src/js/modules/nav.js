var Nav = {
  navToggle: function() {
    let toggle, btn, nav;
    let arg = arguments;

    if (arg.length === 2) {
      toggle = btn = arg[0];
      nav = arg[1];
    } else {
      toggle = arg[0];
      btn = arg[1];
      nav = arg[2];
    }

    $(toggle).click(() => {
      $(btn).toggleClass('on');
      $(nav).slideToggle();
    });

  }
};

export default Nav;