'use strict'

var error = function(err) {
	var el = document.getElementById("error");
	el.innerHTML = err;
}

var nuke = function() {
	var el = document.getElementById("output");
	el.innerHTML = '';
}

var output_testcases = function(data) {
	error("parsing data...");

	var keys = ["Q_ID", "S_NAME", "Q_NAME", "Q_DESC", "TESTCASE_1", "TESTCASE_2", "TESTCASE_3", "TESTCASE_4", "TESTCASE_5"];
	for (var i = 0; i < keys.length; i++) {
		console.log("checking for " + keys[i]);
		if (!data.hasOwnProperty(keys[i])) {
			error("malformed data");
			return;
		}
	}

	var cases = [];
	var cases_raw = [data["TESTCASE_1"], data["TESTCASE_2"], data["TESTCASE_3"], data["TESTCASE_4"], data["TESTCASE_5"]];
	for (var i = 0; i < 4; i++) {
		var c = cases_raw[i].split(/###---###SEPERATOR---###---/);
		if (c.length != 2) {
			continue;
		}
		c[0] = c[0].trim();
		c[1] = c[1].trim();

		if (c[0] == "0" || c[1] == "0") {
			continue;
		}

		cases.push(c);
	}

	var extras = [];
	var c = cases_raw[4].split(/###---###SEPERATOR---###---/);

	for (var i = 0; i < 2; i++) {
		c[i] = c[i].trim();
		if (c[i] == "0") {
			continue;
		} else {
			extras.push(c[i]);
		}
	}

	console.log(cases, extras);

	error("done");

	var el = document.getElementById("output");
	var s;
	s = '';
	s = s + data['Q_ID'] + "\n";
	s = s + data['S_NAME'] + "\n";
	s = s + data['Q_NAME'] + "\n";
	s = s + "<hr>";
	s = s + data['Q_DESC'] + "\n";
	s = s + "<hr>";


	if (cases.length) {
		s = s + '<table class="testcase">'
		for (var i = 0; i < cases.length; i++) {
			s = s + '<tr>'
			s = s + '<td class="input"><pre>' + cases[i][0] + '</pre></td>'
			s = s + '<td class="output"><pre>' + cases[i][1] + '</pre></td>'
			s = s + '</tr>'
		}
		s = s + '</table>'
		s = s + '<hr>'
	}

	if (extras.length) {
		for (var i = 0; i < extras.length; i++) {
			s += 'program must contain:\n'
			s += '\t' + extras[i];
			s += '\n<hr>'
		}
	}

	el.innerHTML = s;

	error("");
}

var submit_testcases = function() {
	var el;

	el = document.getElementById("lab");
	var lab = el.options[el.selectedIndex].value;

	el = document.getElementById("q_id");
	var q_id = el.value;

	var request = new XMLHttpRequest();
	request.open('GET', '/data/' + lab + '_question_table/' + q_id + '.json', true);

	nuke();

	error("getting data...");

	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			var data = JSON.parse(request.responseText);
			output_testcases(data);
		} else {
			error("request went sideways. status: " + request.status);
		}
	};

	request.onerror = function() {
		error("connection error.");
	};

	request.send();
}

var output_code = function(lab, q_id, data) {
	error("parsing data...");
	if (!data.hasOwnProperty('files')) {
		error("malformed data");
		return;
	}
	if (data['files'].length == 0) {
		error("no codes found");
		return;
	}
	error("done");

	var el = document.getElementById("output");
	var s;
	s = '';
	s = s + '<ul>';
	for (var i = 0; i < data['files'].length; i++) {
		var file = 'data/code/' + lab + '/' + q_id + '/' + data['files'][i];
		s = s + '<li><a href="' + file + '" target="_blank">' + data['files'][i] + '</a></li>';
	}
	s = s + '</ul>'

	el.innerHTML = s;

	error("");
}

var submit_code = function() {
	var el;

	el = document.getElementById("lab");
	var lab = el.options[el.selectedIndex].value;

	el = document.getElementById("q_id");
	var q_id = el.value;

	var request = new XMLHttpRequest();
	request.open('GET', '/data/code/' + lab + '/' + q_id + '.json', true);

	nuke();

	error("getting data...");

	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			var data = JSON.parse(request.responseText);
			output_code(lab, q_id, data);
		} else {
			error("request went sideways. status: " + request.status);
		}
	};

	request.onerror = function() {
		error("connection error.");
	};

	request.send();
}


document.addEventListener('DOMContentLoaded', function () {
	error("your code is being logged anyway.");

	document.getElementById('submit_testcases').addEventListener('click', submit_testcases);
	document.getElementById('submit_code').addEventListener('click', submit_code);
});
