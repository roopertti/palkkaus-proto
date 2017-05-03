var employerFormView = (function() {

	var currentFormId = null;

	$(document).on('click', '.open-form', function() {
		console.log("clicked");
		var $id = $(this).closest('tr').find('.formId').text();
		retrieveFormById($id);
	});

	$('#acceptForm').click(function() {
		$.ajax({
			type: 'PUT',
			url: '/acceptForm/' + currentFormId,
			success: function(response) {
				console.log(response);
				viewRouter.refreshTables();
				viewRouter.toEmployerForms();
			}
		});
	});

	$('#denyForm').click(function() {
		$.ajax({
			type: 'PUT',
			url: '/denyForm/' + currentFormId,
			success: function(response) {
				console.log(response);
				viewRouter.refreshTables();
				viewRouter.toEmployerForms();
			}
		});
	});

	function render(form) {
		var formdata = form.data;
		currentFormId = form.id;
		$('#etext1').text(formdata.text1);
		$('#etext2').text(formdata.text2);
		$('#etext3').text(formdata.text3);
		$('#etext4').text(formdata.text4);
		$('#etext5').text(formdata.text5);
		$('#eradio1').text(formdata.radio1);
		$('#eradio2').text(formdata.radio2);
		$('#eradio3').text(formdata.radio3);
		$('#eradio4').text(formdata.radio4);
		$('#eradio5').text(formdata.radio5);
		$('#eradio6').text(formdata.radio6);
		$('#eradio7').text(formdata.radio7);
		$('#eradio8').text(formdata.radio8);
		$('#eradio9').text(formdata.radio9);
		$('#eradiotext1').text(formdata.radiotext1);
		$('#eradiotext2').text(formdata.radiotext2);
		$('#eradiotext3').text(formdata.radiotext3);
		$('#eradiotext4').text(formdata.radiotext4);
		$('#eradiotext5').text(formdata.radiotext5);
		$('#eradiotext6').text(formdata.radiotext6);
		$('#eradiotext7').text(formdata.radiotext7);
		$('#eradiotext8').text(formdata.radiotext8);
		$('#eradiotext9').text(formdata.radiotext9);

		viewRouter.toEmployerFormView();
	}

	function retrieveFormById(id) {
		$.ajax({
			type: 'GET',
			data: id,
			url: '/getOneForm/' + id,
			success: function(response) {
				console.log(response);
				var data = response;
				render(data);
			}
		});
	}

})();