$(window).scroll(startCounter);

function startCounter() {

    // this is the top scroll range of scrolling 400px when scroll from top 
  if ($(window).scrollTop() > 400) {
    $(window).off("scroll", startCounter);
    $('.count').each(function() {
      var $this = $(this);
      jQuery({
        Counter: 0
      }).animate({
        Counter: $this.text().replace(/,/g, '')
      }, {

        // this is the 5000 means 5 second slow will count 
        duration: 5000,
        easing: 'swing',
        step: function() {
          $this.text(commaSeparateNumber(Math.floor(this.Counter)));
        },
        complete: function() {
          $this.text(commaSeparateNumber(this.Counter));
          //alert('finished');
        }
      });
    });

    function commaSeparateNumber(val) {
      while (/(\d+)(\d{3})/.test(val.toString())) {
        val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
      }
      return val;
    }
  }
}
