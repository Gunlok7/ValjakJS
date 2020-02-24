function math() {
	var pp = document.getElementById("Poluprecnik").value;
	var vis = document.getElementById("Visina").value;
	var out = document.getElementById("out");
	out.value = Math.PI*pp*pp*vis;
}