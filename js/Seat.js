export default class Seat {
    constructor(config, data) {
        this.domId = config.id;
        this.unit = config.unit;
        this.space = config.space;
        this.limit = config.limit;
        this.seatH = config.seatH;
        this.seatW = config.seatW;
        this.data = data;

        try {
            this.contain = document.getElementById(config.id);
        } catch(e) {
            throw "please set dom id, init failed.";
        }

        this._renderSeats();
        this._bindEvent();
    }

    _renderSeats() {
        let strHtml = "";

        strHtml += '<ul class="seats-list">';

		this.data.forEach((item) => {
			strHtml = strHtml + '\
			<li class="' + (item.status == 0 ? 'toselect' : (item.status == 1 ? 'disselect' : 'selected')) + '" style="transform: matrix(1, 0, 0, 1, ' + (this.unit * ((item.col - 1) * (item.w + this.space) + 1)) + ', ' + (this.unit * ((item.row - 1) * (item.h + this.space) + 1)) + ');">\
				<input type="checkbox">\
				<label for=""></label>\
			</li>';
		});

		strHtml += '</ul>';

        this.contain.innerHTML = strHtml;
    }
    _bindEvent() {}
};