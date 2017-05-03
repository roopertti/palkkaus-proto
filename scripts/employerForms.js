var employerForms = (function() {

	$('#refreshEmployer').click(function() {
		render();
	});

	render();

	function render() {
		clear();
		var forms = [];
		$.ajax({
			type: 'GET',
			url: '/getlist',
			success: function(response) {
				response.forEach(function(form) {
					if(form.status === "0")
						refreshElement(form);
				});
			}
		});
	}

	function refreshElement(form) {
		var $tr = $('<tr></tr>');
		var $td1 = $('<td></td>');
		var $td2 = $('<td></td>');
		var $td3 = $('<td></td>');
		var $date = $('<td></td>');
		var $status = $('<td></td>');
		var $id = $('<td></td>');
		var $actions = $('<td></td>');
		var $btn1 = $('<button></button>');
		$($td1).text(form.data.text1);
		$($tr).append($td1);
		$($td2).text(form.data.text2);
		$($tr).append($td2);
		$($td3).text(form.data.text3);
		$($tr).append($td3);
		$($date).text(form.created);
		$($tr).append($date);
		$($status).text("Tarkistamatta");
		$($tr).append($status);
		$($id).text(form.id);
		$($id).addClass('formId');
		$($tr).append($id);
		$($btn1).addClass('open-form btn btn-success');
		$($btn1).text("Avaa lomake");
		$($actions).append($btn1);
		$($tr).append($actions);
		$('#submittedFromEmployee').append($tr);
	}

	function clear() {
		$('#submittedFromEmployee').empty();
	}

	function autoRefresh1() {
		render();
	}

	return {
		autoRefresh1: autoRefresh1
	}

})();