/* Pledge: "I pledge my honor that I have abided by the Stevens Honor System." */

var correctRadios = {
	"1": "radio1_3", "2": "radio2_3", 
	"3": "radio3_2", "4": "radio4_1",
	"5": "radio5_3", "6": "radio6_2",
	"7": "radio7_2", "8": "radio8_3",
	"9": "radio9_4", "10": "radio10_2"
};

function onSubmitQ() {
	var prevresult = document.getElementById("p-result");
	if (prevresult != null) { prevresult.remove(); }

	var sectionresult = document.getElementById("sec-result");
	var tag_p = document.createElement("P");
	var att_id = document.createAttribute("id");
	att_id.value = "p-result";
	var att_class = document.createAttribute("class");
	att_class.value = "animated tada";
	tag_p.setAttributeNode(att_id);
	tag_p.setAttributeNode(att_class);

	// Calculate score
	var score = 0;
	for (var qnum = 1; qnum <= 10; qnum++) {
		if (document.getElementById(correctRadios[qnum]).checked) {
			score++;
			var correctAnswerElement = document.getElementById(correctRadios[qnum]).parentElement.nextElementSibling;
			correctAnswerElement.innerHTML = "Congratulations you got this question correct!";
		}
		else {
			var formElement = document.getElementById(correctRadios[qnum]).parentElement.nextElementSibling;
			var correctAnswer = document.getElementById(correctRadios[qnum]).value;
			formElement.innerHTML = "Sorry, the correct answer for this was " + correctAnswer + ".";
		}
	}

	// Show results
	if (document.getElementById("radio11_1").checked && document.getElementById("radio11_3").checked) {
		score++;
	}
	var tag_strong = document.createElement("STRONG");
	var firstname = document.getElementById("firstuser").value;
	var lastname = document.getElementById("lastuser").value;
	var username;
	if (firstname.length != 0 && lastname.length == 0) {
		username = firstname;
	}
	else if(lastname.length != 0 && firstname.length == 0) {
		username = lastname;
	}
	else {
		username = firstname + " " + lastname;
	}
	if (lastname.length ==0 && firstname.length == 0) {
		var text = document.createTextNode("Last quiz score by " + ": " + score + " / 10 (" + score * 10 + "%)");
	}
	else {
		var text = document.createTextNode("Last quiz score by " + username + ": " + score + " / 10 (" + score * 10 + "%)");
	}
	tag_strong.appendChild(text);
	tag_p.style.color = "blue";
	tag_p.appendChild(tag_strong);
	sectionresult.appendChild(tag_p);
	displayScore(tag_p);
}

function displayScore(control) {
	scroll(0,0);
	// control.style.opacity = '1.0';
	// control.style.transition = 'opacity 0.8s';
}
