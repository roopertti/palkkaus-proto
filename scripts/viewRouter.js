var viewRouter = (function() {

	var views = [
	{
		id: "#mainView" //0
	},
	{
		id: "#formView" //1
	},
	{
		id: "#employerView" //2
	},
	{
		id: "#nav" //3
	},
	{
		id: "#employerFormView" //4
	}
	];

	$('#employeeLogInBtn').click(function() {
		to(views[0].id);
		hide(views[1].id);
		hide(views[2].id);
		refreshTables();
	});

	$('#employerLogInBtn').click(function() {
		to(views[2].id);
		hide(views[0].id);
		hide(views[1].id);
		refreshTables();
	});

	$('#backToEmployerForms').click(function() {
		toEmployerForms();
		refreshTables();
	});

	function refreshTables() {
		formTable.autoRefresh2();
		employerForms.autoRefresh1();
	}

	function toMain() {
		to(views[0].id);
		to(views[3].id);
		hide(views[1].id);
		hide(views[2].id);
		hide(views[4].id);
	}

	function toForms() {
		to(views[1].id);
		hide(views[0].id);
		hide(views[2].id);
		hide(views[3].id);
		hide(views[4].id);
	}

	function toEmployerForms() {
		to(views[2].id);
		to(views[3].id);
		hide(views[0].id);
		hide(views[1].id);
		hide(views[4].id);
	}

	function toEmployerFormView() {
		to(views[4].id);
		hide(views[0].id);
		hide(views[1].id);
		hide(views[2].id);
		hide(views[3].id);
	}

	function to(id) {
		$(id).removeClass('hidden');
	}

	function hide(id) {
		$(id).addClass('hidden');
	}

	return {
		toMain: toMain,
		toForms: toForms,
		toEmployerForms: toEmployerForms,
		toEmployerFormView: toEmployerFormView,
		refreshTables: refreshTables
	};

})();