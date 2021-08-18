function showDatePicker() {
  const datePicker =  document.querySelector(".datepicker__block");
  if (datePicker.style.display == 'none') {
    datePicker.style.display = 'block';
    console.log('1')
  } else {
    datePicker.style.display = 'none';
    console.log('yes')
  }
}
	
    $("#datepicker").datepicker({
      numberOfMonths: 1,
      showButtonPanel: false,
      minDate: 0,
      monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	    dayNamesMin : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
      beforeShowDay: function(date) {

        var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $('#start-date').val());
        var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $('#end-date').val());
        if (date1 && date && (date1.getTime() == date.getTime())) {
          return [true, 'ui-red-start', ''];
        }
        if (date2 && date && (date2.getTime() == date.getTime())) {
          return [true, 'ui-red-end', ''];
        }

        if (date >= date1 && date <= date2) {
          return [true, 'ui-state-selected-range', ''];
        }
        var d = date.getTime();

        return [true, '', ''];
      },
      onSelect: function(dateText, inst) {
        var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $('#start-date').val());
        var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $('#end-date').val());
        if (!date1 || date2) {
          $('#start-date').val(dateText);
          $('.start-date-visible').text(dateText);
          $('#end-date').val('');
          $('.end-date-visible').text('');
          $(this).datepicker('option', dateText);
        } else {
          if (new Date(dateText) < date1) {
            var sDate = $('#start-date').val();
            $('.start-date-visible').text(dateText);
            $('#start-date').val(dateText);
            $(this).datepicker('option', null);

            $('.end-date-visible').text(sDate);
            $('#end-date').val(sDate);

          } else {
            $('.end-date-visible').text(dateText);
            $('#end-date').val(dateText);
            $(this).datepicker('option', null);
          }
        }
      }
    });