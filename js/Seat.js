export default class Seat {
    constructor(config, data) {
        const defaults = {
            "unit": 10,
            "seatH": 4,
            "seatW": 4,
            "space": 1,
            "limit": 1,
        };

        this.domId = config.id;
        this.unit = config.unit || defaults.unit;
        this.space = config.space || defaults.space;
        this.limit = config.limit || defaults.limit;
        this.seatH = config.seatH || defaults.seatH;
        this.seatW = config.seatW || defaults.seatW;
        this.data = data || [];

        try {
            this.contain = document.getElementById(config.id);
        } catch(e) {
            throw "please set dom id, init failed.";
        }

        let hasData = this.data.length > 0;
        if (hasData) {
            this._renderSeats();
            this._bindEvent();
        }
    }

    _renderSeats() {
        let ulDom = document.createElement("ul");
        ulDom.setAttribute("class", "seats-list");

        this.data.forEach((item) => {
            let liDom,
                inputDom,
                labelDom,
                isSpecial;

            liDom = document.createElement("li");

            isSpecial = item.w && item.h && item.x && item.y;
            if (isSpecial) {
                liDom.setAttribute("style", "width: " + item.w + "em; height: " + item.h + "em; transform: matrix(1, 0, 0, 1, " + (this.unit * ((item.col - 1) * (item.w + this.space) + 1)) + ", " + (this.unit * ((item.row - 1) * (item.h + this.space) + 1)));
            } else {
                liDom.setAttribute("style", "width: " + this.seatW + "em; height: " + this.seatH + "em; transform: matrix(1, 0, 0, 1, " + (this.unit * ((item.col - 1) * (this.seatW + this.space) + 1)) + ", " + (this.unit * ((item.row - 1) * (this.seatH + this.space) + 1)));
            }
            
            switch (item.status) {
                case 0:
                    liDom.setAttribute("class", "toselect");
                    break;
                case 1:
                    liDom.setAttribute("class", "disselect");
                    break;
                case 2:
                    liDom.setAttribute("class", "selected");
                    break;
            }

            inputDom = document.createElement("input");
            inputDom.setAttribute("type", "checkbox");
            inputDom.setAttribute("name", "seat_" + item.row + "_" + item.col);

            labelDom = document.createElement("label");
            labelDom.setAttribute("for", "seat_" + item.row + "_" + item.col);

            ulDom.appendChild(liDom);
            liDom.appendChild(inputDom);
            liDom.appendChild(labelDom);
        });

        this.contain.innerHTML = "";
        this.contain.appendChild(ulDom);
    }
    _bindEvent() {

    }
};