var formTable = (function() {

	$('#refreshEmployee').click(function() {
		render();
	});

	function render() {
		clearList();
		var forms = [];
		$.ajax({
			type: 'GET',
			url: '/getlist',
			success: function(response) {
				response.forEach(function(form) {
					if(form.status === "0")
						refreshElement(form);

					else if(form.status === "2")
						refreshElementSuccess(form);

					else if(form.status === "1")
						refreshElementFail(form);
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
		var $id = $('<td></td>')
		$($td1).text(form.data.text1);
		$($tr).append($td1);
		$($td2).text(form.data.text2);
		$($tr).append($td2);
		$($td3).text(form.data.text3);
		$($tr).append($td3);
		$($date).text(form.created);
		$($tr).append($date);
		$($status).text("Odottaa tarkastusta");
		$($tr).append($status);
		$($id).text(form.id);
		$($tr).append($id);
		$('#submittedForms').append($tr);
	}

	function refreshElementSuccess(form) {
		var $tr = $('<tr></tr>');
		$($tr).addClass('success');
		var $td1 = $('<td></td>');
		var $td2 = $('<td></td>');
		var $td3 = $('<td></td>');
		var $date = $('<td></td>');
		var $status = $('<td></td>');
		var $id = $('<td></td>')
		$($td1).text(form.data.text1);
		$($tr).append($td1);
		$($td2).text(form.data.text2);
		$($tr).append($td2);
		$($td3).text(form.data.text3);
		$($tr).append($td3);
		$($date).text(form.created);
		$($tr).append($date);
		$($status).text("Hyväksytty");
		$($tr).append($status);
		$($id).text(form.id);
		$($tr).append($id);
		$('#submittedForms').append($tr);
	}

	function refreshElementFail(form) {
		var $tr = $('<tr></tr>');
		$($tr).addClass('danger');
		var $td1 = $('<td></td>');
		var $td2 = $('<td></td>');
		var $td3 = $('<td></td>');
		var $date = $('<td></td>');
		var $status = $('<td></td>');
		var $id = $('<td></td>')
		$($td1).text(form.data.text1);
		$($tr).append($td1);
		$($td2).text(form.data.text2);
		$($tr).append($td2);
		$($td3).text(form.data.text3);
		$($tr).append($td3);
		$($date).text(form.created);
		$($tr).append($date);
		$($status).text("Hylätty");
		$($tr).append($status);
		$($id).text(form.id);
		$($tr).append($id);
		$('#submittedForms').append($tr);
	}

	function clearList() {
		$('#submittedForms').empty();
	}

	function addForm(data) {
		var d = new Date();
		created = draftControl.formatDate(d);

		var form = {
			name: data.text1,
			created: created,
			status: "0",
			data: data
		};

		$.ajax({
			type: 'POST',
			url: '/addform',
			data: form,
			success: function(response) {
				console.log('response:' + response);
			}
		});
		render();
	}

	function autoRefresh2() {
		render();
	}

	return {
		addForm: addForm,
		autoRefresh2: autoRefresh2
	};

})();