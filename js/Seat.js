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
        let ulDom = document.createElement("ul");
        ulDom.setAttribute("class", "seats-list");

        this.data.forEach((item) => {
            let liDom,
                inputDom,
                labelDom;
            
            liDom = document.createElement("li");
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
            liDom.setAttribute("style", "transform: matrix(1, 0, 0, 1, " + (this.unit * ((item.col - 1) * (item.w + this.space) + 1)) + ", " + (this.unit * ((item.row - 1) * (item.h + this.space) + 1)));

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
    _bindEvent() {}
};