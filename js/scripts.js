$(document).ready(function() {
  $('#submitButton').submit(function  (event) {
    event.preventDefault();

    function submitForm() {
      $('submitButton');
    }

    const movie = $('input:radio[name=movie]:checked').val();

		let cSum = 0;
		let javascriptSum = 0;
		let rubySum = 0;
		let pythonSum = 0;
		let wrenSum = 0;

		if (movie === 'cOption') {
			cSum = cSum + 1;
		} else if (movie === 'javascriptOption') {
			javascriptSum = javascriptSum + 1;
		} else if (movie === 'rubyOption') {
			rubySum = rubySum + 1;
		} else if (movie === 'pythonOption') {
			pythonSum = pythonSum + 1;
		} else if (movie === 'wrenOption') {
			wrenSum = wrenSum + 1;
		}

    if (
			cSum >= javascriptSum &&
			cSum >= rubySum &&
			cSum >= pythonSum &&
			cSum >= wrenSum
		) {
			$('#cResult').show();
			$('javascriptResult').hide();
			$('rubyResult').hide();
			$('pythonResult').hide();
			$('wrenResult').hide();

  });
});