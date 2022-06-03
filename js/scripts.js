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

    if (wordAssociation === 'cOption') {
			cSum = cSum + 1;
		} else if (wordAssociation === 'javascriptOption') {
			javascriptSum = javascriptSum + 1;
		} else if (wordAssociation === 'rubyOption') {
			rubySum = rubySum + 1;
		} else if (wordAssociation === 'pythonOption') {
			pythonSum = pythonSum + 1;
		} else if (wordAssociation === 'wrenOption') {
			wrenSum = wrenSum + 1;
		}

		if (beach === 'cOption') {
			cSum = cSum + 1;
		} else if (beach === 'javascriptOption') {
			javascriptSum = javascriptSum + 1;
		} else if (beach === 'rubyOption') {
			rubySum = rubySum + 1;
		} else if (beach === 'pythonOption') {
			pythonSum = pythonSum + 1;
		} else if (beach === 'wrenOption') {
			wrenSum = wrenSum + 1;
		} else if (beach === 'cOption') {
			cSum = cSum + 1;
		}

		if (eggs === 'javascriptOption') {
			javascriptSum = javascriptSum + 1;
		} else if (eggs === 'rubyOption') {
			rubySum = rubySum + 1;
		} else if (eggs === 'pythonOption') {
			pythonSum = pythonSum + 1;
		} else if (eggs === 'wrenOption') {
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
		} else if (
			javascriptSum >= cSum &&
			javascriptSum >= rubySum &&
			javascriptSum >= pythonSum &&
			javascriptSum >= wrenSum
		) {
			$('#javascriptResult').show();
			$('cResult').hide();
			$('rubyResult').hide();
			$('pythonResult').hide();
			$('wrenResult').hide();
		} else if (
			rubySum >= cSum &&
			rubySum >= javascriptSum &&
			rubySum >= pythonSum &&
			rubySum >= wrenSum
		) {
			$('#rubyResult').show();
			$('cResult').hide();
			$('javascriptResult').hide();
			$('pythonResult').hide();
			$('wrenResult').hide();
		} else if (
			pythonSum >= cSum &&
			pythonSum >= javascriptSum &&
			pythonSum >= rubySum &&
			pythonSum >= wrenSum
		) {
			$('#pythonResult').show();
			$('javascriptResult').hide();
			$('cResult').hide();
			$('rubyResult').hide();
			$('wrenResult').hide();
		} else if (
			wrenSum >= cSum &&
			wrenSum >= javascriptSum &&
			wrenSum >= rubySum &&
			wrenSum >= pythonSum
		) {
			$('#wrenResult').show();
			$('cResult').hide();
			$('javascriptResult').hide();
			$('pythonResult').hide();
			$('rubyResult').hide();
		}
	});
});