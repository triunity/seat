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
            this.contain.setAttribute("style", "overflow: hidden; background-color: #eee;");
        } catch(e) {
            throw "please set dom id, init failed.";
        }

        this.transformProperty = this._getTransformProperty(this.contain);
        let isReady = this.data.length > 0 && !!this.transformProperty;
        if (isReady) {
            this._renderSeats();
            this._bindEvent();
        }
    }

    _getTransformProperty(dom) {
        let properties = ["transform", "WebkitTransform", "msTransform", "MozTransform", "OTransform"];

        let p;
        while (p = properties.shift()) {
            if (typeof dom.style[p] != undefined) {
                return p;
            }
        }
        return false;
    }

    _renderSeats() {
        let divDom = document.createElement("div");
        divDom.setAttribute("class", "seats-area");

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
                liDom.setAttribute("style", "width: " + (item.w * this.unit) + "px; height: " + (item.h * this.unit) + "px; " + this.transformProperty + ": matrix(1, 0, 0, 1, " + (this.unit * ((item.col - 1) * (item.w + this.space) + 1)) + ", " + (this.unit * ((item.row - 1) * (item.h + this.space) + 1)));
            } else {
                liDom.setAttribute("style", "width: " + (this.seatW * this.unit) + "px; height: " + (this.seatH * this.unit) + "px; " + this.transformProperty + ": matrix(1, 0, 0, 1, " + (this.unit * ((item.col - 1) * (this.seatW + this.space) + 1)) + ", " + (this.unit * ((item.row - 1) * (this.seatH + this.space) + 1)));
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

            divDom.appendChild(ulDom);
            ulDom.appendChild(liDom);
            liDom.appendChild(inputDom);
            liDom.appendChild(labelDom);
        });

        this.contain.innerHTML = "";
        this.contain.appendChild(divDom);
    }
    _bindEvent() {
        let startPoint = {x: 0, y: 0},
            initPoint = {x: 0, y: 0};

        this.contain.addEventListener("touchstart", (evt) => {
            evt.preventDefault();
            startPoint.x = evt.changedTouches[0].pageX;
            startPoint.y = evt.changedTouches[0].pageY;
        }, false);

        this.contain.addEventListener("touchmove", (evt) => {
            evt.preventDefault();
            
            let deltaX = evt.changedTouches[0].pageX - startPoint.x + initPoint.x,
                deltaY = evt.changedTouches[0].pageY - startPoint.y + initPoint.y;

            this.contain.getElementsByClassName("seats-list")[0].setAttribute("style", this.transformProperty + ":translate(" + deltaX + "px, " + deltaY + "px)");
        }, false);

        this.contain.addEventListener("touchend", (evt) => {
            initPoint.x = initPoint.x + evt.changedTouches[0].pageX - startPoint.x;
            initPoint.y = initPoint.y + evt.changedTouches[0].pageY - startPoint.y;
        }, false);
    }
};