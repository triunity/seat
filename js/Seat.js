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
        let properties = ["transform", "-webkit-transform", "-ms-transform", "-moz-transform", "-o-transform"];

        let p;
        while (p = properties.shift()) {
            if (typeof dom.style[p] != undefined) {
                return p;
            }
        }
        return false;
    }

    _renderSeats() {
        let divDom = document.createElement("form");
        divDom.setAttribute("class", "seats-area");

        let ulDom = document.createElement("ul");
        ulDom.setAttribute("class", "seats-list");

        this.data.forEach((item) => {
            let liDom,
                inputDom,
                labelDom,
                isSpecial;

            liDom = document.createElement("li");

            inputDom = document.createElement("input");
            inputDom.setAttribute("type", "checkbox");
            inputDom.setAttribute("id", "seat_" + item.row + "_" + item.col);

            labelDom = document.createElement("label");
            labelDom.setAttribute("for", "seat_" + item.row + "_" + item.col);

            isSpecial = item.w && item.h && item.x && item.y;
            if (isSpecial) {
                liDom.setAttribute("style", "width: " + (item.w * this.unit) + "px; height: " + (item.h * this.unit) + "px; " + this.transformProperty + ": matrix(1, 0, 0, 1, " + (this.unit * ((item.col - 1) * (item.w + this.space) + 1)) + ", " + (this.unit * ((item.row - 1) * (item.h + this.space) + 1)));
            } else {
                liDom.setAttribute("style", "width: " + (this.seatW * this.unit) + "px; height: " + (this.seatH * this.unit) + "px; " + this.transformProperty + ": matrix(1, 0, 0, 1, " + (this.unit * ((item.col - 1) * (this.seatW + this.space) + 1)) + ", " + (this.unit * ((item.row - 1) * (this.seatH + this.space) + 1)));
            }
            
            switch (item.status) {
                case 0:
                    labelDom.setAttribute("class", "toselect");
                    break;
                case 1:
                    inputDom.setAttribute("checked", "checked");
                    labelDom.setAttribute("class", "disselect");
                    break;
                case 2:
                    inputDom.setAttribute("checked", "checked");
                    labelDom.setAttribute("class", "selected");
                    break;
            }

            divDom.appendChild(ulDom);
            ulDom.appendChild(liDom);
            liDom.appendChild(inputDom);
            liDom.appendChild(labelDom);
        });

        this.contain.innerHTML = "";
        this.contain.appendChild(divDom);
    }
    _bindEvent() {
        let isDrag = false,
            isZoom = false,
            oriLen = 0,
            initDelta = 1,
            delta = 1,
            oriStartPoint = {"x": 0, "y": 0},
            startPoint = {"x": 0, "y": 0},
            initPoint = {"x": 0, "y": 0};

        this.contain.addEventListener("touchstart", (evt) => {
            evt.preventDefault();

            oriStartPoint.x = startPoint.x;
            oriStartPoint.y = startPoint.y;

            startPoint.x = evt.touches[0].pageX;
            startPoint.y = evt.touches[0].pageY;
        }, false);

        this.contain.addEventListener("touchmove", (evt) => {
            evt.preventDefault();

            if (isZoom || evt.changedTouches.length > 1) {
                isZoom = true;

                startPoint.x = oriStartPoint.x;
                startPoint.y = oriStartPoint.y;

                let len;
                    
                len = Math.sqrt(Math.pow(evt.changedTouches[0].pageX - evt.changedTouches[1].pageX, 2) + Math.pow(evt.changedTouches[0].pageY - evt.changedTouches[1].pageY, 2));

                if (oriLen != 0) {
                    delta = len / oriLen;
                    this.contain.getElementsByClassName("seats-area")[0].setAttribute("style", this.transformProperty + "-origin: " + (evt.changedTouches[0].pageX + evt.changedTouches[1].pageX) / 2 + "px " + (evt.changedTouches[0].pageY + evt.changedTouches[1].pageY) / 2 + "px;" + this.transformProperty + ": scale(" + delta + ");");
                } else {
                    oriLen = len;
                }
            } else {
                isDrag = true;

                let deltaX = evt.touches[0].pageX - startPoint.x + initPoint.x,
                    deltaY = evt.touches[0].pageY - startPoint.y + initPoint.y;

                this.contain.getElementsByClassName("seats-list")[0].setAttribute("style", this.transformProperty + ": translate(" + deltaX + "px, " + deltaY + "px)");
            }
        }, false);

        this.contain.addEventListener("touchend", (evt) => {
            evt.preventDefault();

            if (isDrag) {
                initPoint.x = initPoint.x + evt.changedTouches[0].pageX - startPoint.x;
                initPoint.y = initPoint.y + evt.changedTouches[0].pageY - startPoint.y;
            } else if (isZoom) {
                initDelta = initDelta * delta;
            } else {
                let enableCheck,
                    cancelCheck,
                    seat = this.contain.querySelector("#" + evt.target.getAttribute("for"));

                enableCheck = seat && /toselect/.test(evt.target.getAttribute("class"));
                cancelCheck = seat && /selecting/.test(evt.target.getAttribute("class"));
                if (enableCheck) {
                    seat.click();
                    evt.target.setAttribute("class", "selecting");
                } else if (cancelCheck) {
                    seat.click();
                    evt.target.setAttribute("class", "toselect");
                }
            }

            setTimeout(() => {
                isZoom = false;
                isDrag = false;
            }, 100);
        }, false);
    }
};