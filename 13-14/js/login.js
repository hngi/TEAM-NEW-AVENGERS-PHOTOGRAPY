(function () {
	'use strict';
	window.addEventListener('load', function () {
		// Fetch the forms below we want to apply validation to
		var forms = document.getElementsByClassName('needs-validation');
		// Loop over the form and prevent submission
		var validation = Array.prototype.filter.call(forms, function (form) {
			form.addEventListener('submit', function (event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);
})();