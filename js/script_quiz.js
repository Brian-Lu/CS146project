/* Pledge: "I pledge my honor that I have abided by the Stevens Honor System." */

var correctRadios = {
	"1": "radio1_3", "2": "radio2_3", 
	"3": "radio3_2", "4": "radio4_1",
	"5": "radio5_3", "6": "radio6_2",
	"7": "radio7_2", "8": "radio8_3"
};

function onSubmitQ() {
	var prevresult = document.getElementById("p-result");
	if (prevresult != null) { prevresult.remove(); }

	var sectionresult = document.getElementById("sec-result");
	var tag_p = document.createElement("P");
	var att_id = document.createAttribute("id");
	att_id.value = "p-result";
	tag_p.setAttributeNode(att_id);

	// Calculate score
	var score = 0;
	for (var qnum = 1; qnum <= 8; qnum++) {
		if (document.getElementById(correctRadios[qnum]).checked) {
			score++;
		}
	}

	// Show results
	var tag_strong = document.createElement("STRONG");
	var text = document.createTextNode("Last quiz score: " + score + " / 8");
	tag_strong.appendChild(text);
	tag_p.style.color = "blue";
	tag_p.appendChild(tag_strong);
	sectionresult.appendChild(tag_p);
	effect(tag_p);
}

function effect(control) {
	scroll(0,0);
	control.style.opacity = '1.0';
	control.style.transition = 'opacity 0.8s';
}