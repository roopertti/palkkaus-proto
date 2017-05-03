var formView = (function() {

	$('#formSaveDraft').click(function() {
		submitDraft();
		resetForm();
		viewRouter.toMain();
	});

	$('#formSubmit').click(function() {
		submitFinal();
		resetForm();
		viewRouter.toMain();
	});

	function submitDraft() {
		var text1 = $('#text1').val();
		var text2 = $('#text2').val();
		var text3 = $('#text3').val();
		var text4 = $('#text4').val();
		var text5 = $('#text5').val();
		var radio1 = $('input[type=radio][name=radio1]').is(':checked') ? $('input[type=radio][name=radio1]:checked').val() : null;
		var radio2 = $('input[type=radio][name=radio2]').is(':checked') ? $('input[type=radio][name=radio2]:checked').val() : null;
		var radio3 = $('input[type=radio][name=radio3]').is(':checked') ? $('input[type=radio][name=radio3]:checked').val() : null;
		var radio4 = $('input[type=radio][name=radio4]').is(':checked') ? $('input[type=radio][name=radio4]:checked').val() : null;
		var radio5 = $('input[type=radio][name=radio5]').is(':checked') ? $('input[type=radio][name=radio5]:checked').val() : null;
		var radio6 = $('input[type=radio][name=radio6]').is(':checked') ? $('input[type=radio][name=radio6]:checked').val() : null;
		var radio7 = $('input[type=radio][name=radio7]').is(':checked') ? $('input[type=radio][name=radio7]:checked').val() : null;
		var radio8 = $('input[type=radio][name=radio8]').is(':checked') ? $('input[type=radio][name=radio8]:checked').val() : null;
		var radio9 = $('input[type=radio][name=radio9]').is(':checked') ? $('input[type=radio][name=radio9]:checked').val() : null;

		var formData = {
			text1: text1,
			text2: text2,
			text3: text3,
			text4: text4,
			text5: text5,
			radio1: radio1,
			radio2: radio2,
			radio3: radio3,
			radio4: radio4,
			radio5: radio5,
			radio6: radio6,
			radio7: radio7,
			radio8: radio8,
			radio9: radio9
		};

		draftControl.createDraft(text1, formData);
	}

	function submitFinal() {
		var text1 = $('#text1').val();
		var text2 = $('#text2').val();
		var text3 = $('#text3').val();
		var text4 = $('#text4').val();
		var text5 = $('#text5').val();
		var radio1 = $('input[type=radio][name=radio1]').is(':checked') ? $('input[type=radio][name=radio1]:checked').val() : null;
		var radio2 = $('input[type=radio][name=radio2]').is(':checked') ? $('input[type=radio][name=radio2]:checked').val() : null;
		var radio3 = $('input[type=radio][name=radio3]').is(':checked') ? $('input[type=radio][name=radio3]:checked').val() : null;
		var radio4 = $('input[type=radio][name=radio4]').is(':checked') ? $('input[type=radio][name=radio4]:checked').val() : null;
		var radio5 = $('input[type=radio][name=radio5]').is(':checked') ? $('input[type=radio][name=radio5]:checked').val() : null;
		var radio6 = $('input[type=radio][name=radio6]').is(':checked') ? $('input[type=radio][name=radio6]:checked').val() : null;
		var radio7 = $('input[type=radio][name=radio7]').is(':checked') ? $('input[type=radio][name=radio7]:checked').val() : null;
		var radio8 = $('input[type=radio][name=radio8]').is(':checked') ? $('input[type=radio][name=radio8]:checked').val() : null;
		var radio9 = $('input[type=radio][name=radio9]').is(':checked') ? $('input[type=radio][name=radio9]:checked').val() : null;
		var radiotext1 = $('#radiotext1').val();
		var radiotext2 = $('#radiotext2').val();
		var radiotext3 = $('#radiotext3').val();
		var radiotext4 = $('#radiotext4').val();
		var radiotext5 = $('#radiotext5').val();
		var radiotext6 = $('#radiotext6').val();
		var radiotext7 = $('#radiotext7').val();
		var radiotext8 = $('#radiotext8').val();
		var radiotext9 = $('#radiotext9').val();

		var formData = {
			text1: text1,
			text2: text2,
			text3: text3,
			text4: text4,
			text5: text5,
			radio1: radio1,
			radio2: radio2,
			radio3: radio3,
			radio4: radio4,
			radio5: radio5,
			radio6: radio6,
			radio7: radio7,
			radio8: radio8,
			radio9: radio9,
			radiotext1: radiotext1,
			radiotext2: radiotext2,
			radiotext3: radiotext3,
			radiotext4: radiotext4,
			radiotext5: radiotext5,
			radiotext6: radiotext6,
			radiotext7: radiotext7,
			radiotext8: radiotext8,
			radiotext9: radiotext9
		};

		formTable.addForm(formData);
	}

	function resetForm() {
		$('#text1').val('');
		$('#text2').val('');
		$('#text3').val('');
		$('#text4').val('');
		$('#text5').val('');
		$('#radiotext1').val('');
		$('#radiotext2').val('');
		$('#radiotext3').val('');
		$('#radiotext4').val('');
		$('#radiotext5').val('');
		$('#radiotext6').val('');
		$('#radiotext7').val('');
		$('#radiotext8').val('');
		$('#radiotext9').val('');
		$('input[type=radio][name=radio1]').prop('checked', false);
		$('input[type=radio][name=radio2]').prop('checked', false);
		$('input[type=radio][name=radio3]').prop('checked', false);
		$('input[type=radio][name=radio4]').prop('checked', false);
		$('input[type=radio][name=radio5]').prop('checked', false);
		$('input[type=radio][name=radio6]').prop('checked', false);
		$('input[type=radio][name=radio7]').prop('checked', false);
		$('input[type=radio][name=radio8]').prop('checked', false);
		$('input[type=radio][name=radio9]').prop('checked', false);
	}

	return {
		resetForm: resetForm
	};
})();