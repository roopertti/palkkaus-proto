var draftControl = (function() {

	$('#addForm').click(function() {
		viewRouter.toForms();
	});

	var draftList = [];

	render();

	function render() {
		clearList();
		draftList.forEach(function(draft) {
			refreshElement(draft);
		});
	}

	function clearList() {
		$('#draftList').empty();
	}

	function refreshElement(draft) {
		var $li = $('<li></li>');
		var $btnDelete = $('<button></button>');
		$($btnDelete).addClass('btn btn-danger btn-xs');
		$($btnDelete).text("Poista");
		$($li).addClass("list-group-item");
		$($li).text(draft.name + ", luotu: " + draft.created);
		$($li).append($btnDelete);
		$('#draftList').append($li);
	}

	function formatDate(date) {
		var dd = date.getDate();
		var mm = date.getMonth()+1;
		var yyyy = date.getFullYear();
		var hour = date.getHours();
		var min = date.getMinutes();

		if(dd<10)
			dd='0'+dd;

		if(mm<10)
			mm='0'+mm;

		if(hour<10)
			hour='0'+hour

		if(min<10)
			min='0'+min

		return "klo "+hour+":"+min+" "+dd+"."+mm+"."+yyyy;
	}

	function createDraft(name, data) {
		var d = new Date();
		var created = formatDate(d);

		var draft = {
			name: name,
			created: created,
			data: data
		};
		draftList.push(draft);
		render();
	}

	return {
		createDraft: createDraft,
		formatDate: formatDate
	};
})();