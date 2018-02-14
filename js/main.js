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
		"status": 1, //0 可选; 1 不可选; 2 已选中
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
		"status": 1, //0 可选; 1 不可选; 2 已选中
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
		"status": 1, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 3,
		"col": 5,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 1, //0 可选; 1 不可选; 2 已选中
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
		"status": 1, //0 可选; 1 不可选; 2 已选中
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
	}, {
		"row": 5,
		"col": 1,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 0, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 5,
		"col": 2,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 0, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 5,
		"col": 3,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 0, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 5,
		"col": 5,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 1, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 5,
		"col": 6,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 1, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 6,
		"col": 1,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 1, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 6,
		"col": 2,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 1, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 6,
		"col": 3,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 0, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 6,
		"col": 5,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 1, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 6,
		"col": 6,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 1, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 7,
		"col": 1,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 1, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 7,
		"col": 2,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 0, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 7,
		"col": 3,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 0, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 7,
		"col": 5,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 1, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 7,
		"col": 6,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 1, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 8,
		"col": 1,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 1, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 8,
		"col": 2,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 1, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 8,
		"col": 3,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 0, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 8,
		"col": 5,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 1, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}, {
		"row": 8,
		"col": 6,
		// "x": 1,
		// "y": 1,
		"w": 4,
		"h": 4,
		"status": 0, //0 可选; 1 不可选; 2 已选中
		"type": 0,
	}
];

(function (config, data) {
	try {
		if (config.id) {
			var container = document.getElementById(config.id);
		} else {
			throw "please set dom id, init failed.";
		}

		var strHtml = '';
		strHtml += '<ul class="seats-list">';

		data.forEach(function (item) {
			strHtml = strHtml + '\
			<li class="' + (item.status == 0 ? 'toselect' : (item.status == 1 ? 'disselect' : 'selected')) + '" style="transform: matrix(1, 0, 0, 1, ' + (config.unit * ((item.col - 1) * (item.w + config.space) + 1)) + ', ' + (config.unit * ((item.row - 1) * (item.h + config.space) + 1)) + ');">\
				<input type="checkbox">\
				<label for=""></label>\
			</li>';
		});

		strHtml += '</ul>';

		container.innerHTML = strHtml;

		var seatsDom = container.getElementsByClassName("seats-list")[0];
		container.addEventListener("mouseup", function(evt) {
			seatsDom.style.transformOrigin = evt.offsetX + "px " + evt.offsetY + "px";
		}, false);

		container.addEventListener("wheel", function(evt) {
			if (evt.wheelDelta > 0) {
				// 向上滚动 放大
				seatsDom.style.transform = "scale(2)";
			} else {
				// 向下滚动 缩小
				seatsDom.style.transform = "scale(0.5)";
			}
		}, false);
	} catch(e) {
		console.error(e)
	}
})(config, mockData);