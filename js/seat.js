var config = {
	"unit": "10px",
	"limit": 2,
	"space": 1,
	// "id": "seatarea",
};
var seat = {
	"row": 1,
	"col": 1,
	"x": 1,
	"y": 1,
	"w": 4,
	"h": 4,
	"status": 0 //0 可选; 1 不可选; 2 已选中
};


(function (root) {
	try {
		if (root.config.id) {
			document.getElementById(root.config.id);
		} else {
			throw "please set dom id, init failed.";
		}
	} catch(e) {
		console.error(e)
	}
})(window);