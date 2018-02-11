var config = {
	"unit": 10,
	"limit": 2,
	"space": 1,
	"id": "seatarea",
};
var seat = {
	"row": 1,
	"col": 1,
	"x": 1,
	"y": 1,
	"w": 4,
	"h": 4,
	"status": 0, //0 可选; 1 不可选; 2 已选中
	"type": 0,
};

var mockData = [
	{
		"row": 1,
		"col": 1,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 0, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 1,
		"col": 2,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 0, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 1,
		"col": 3,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 0, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 1,
		"col": 5,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 0, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 1,
		"col": 6,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 0, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 2,
		"col": 1,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 0, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 2,
		"col": 2,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 0, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 2,
		"col": 3,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 0, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 2,
		"col": 5,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 0, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 2,
		"col": 6,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 0, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 3,
		"col": 1,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 0, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 3,
		"col": 2,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 0, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 3,
		"col": 3,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 0, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 3,
		"col": 5,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 0, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 3,
		"col": 6,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 1, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 4,
		"col": 1,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 2, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 4,
		"col": 2,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 1, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 4,
		"col": 3,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 0, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 4,
		"col": 5,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 0, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 4,
		"col": 6,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 0, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}
];

(function (root) {
	try {
		if (root.config.id) {
			var container = document.getElementById(root.config.id);
		} else {
			throw "please set dom id, init failed.";
		}

		var strHtml = '';
		strHtml += '<ul class="seats-list">';

		root.mockData.forEach(function (item) {
			strHtml = strHtml + '\
			<li class="' + (item.status == 0 ? 'toselect' : (item.status == 1 ? 'disselect' : 'selected')) + '" style="transform: matrix(1, 0, 0, 1, ' + (root.config.unit * ((item.col - 1) * (item.w + root.config.space))) + ', ' + (root.config.unit * ((item.row - 1) * (item.h + root.config.space))) + ');">\
				<input type="checkbox">\
				<label for=""></label>\
			</li>';
		});

		strHtml += '</ul>';

		container.innerHTML = strHtml;
	} catch(e) {
		console.error(e)
	}
})(window);