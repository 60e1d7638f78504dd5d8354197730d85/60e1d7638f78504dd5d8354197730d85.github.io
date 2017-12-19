'use strict'

var error = function(err) {
	var el = document.getElementById("error");
	el.innerHTML = err;
}

var nuke = function() {
	var el = document.getElementById("output");
	el.innerHTML = '';
}

var output = function(data) {
	error("parsing data...")

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
		if (c[i] == 0) {
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

	for (var i = 0; i < cases.length; i++) {
		var c = cases[i];
		s = s + c[0] + "\n";
		s = s + '<hr align="left" width="10%" style="border-top: dashed 1px;">';
		s = s + c[1] + "\n";
		if (i != cases.length - 1) {
			s = s + '<hr align="left" width="10%">';
		}
	}
	if (extras.length) {
		s = s + "<hr>";
	}

	for (var i = 0; i < extras.length; i++) {
		var c = extras[i];
		s = s + c + "\n";
		if (i != extras.length - 1) {
			s = s + '<hr align="left" width="10%">';
		}
	}
	s = s + '<hr style="border-top: double">';

	el.innerHTML = s;

	error("");
}

var validate = function() {
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
			output(data);
		} else {
			error("request went sideways. status: " + request.status);
		}
	};

	request.onerror = function() {
		error("connection error.");
	};

	request.send();

	// always return false
	return false;
}

document.addEventListener('DOMContentLoaded', function () {
	error("your code is being logged anyway.");
});
