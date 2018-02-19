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
        this.seats = [];

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
    _getOffsetRect(el) {
        let box, body, docElem, scrollTop, scrollLeft, clientTop, clientLeft, top, left;
        
        box = el.getBoundingClientRect();

        body = document.body;
        docElem = document.documentElement;

        scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
        scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

        clientTop = docElem.clientTop || body.clientTop;
        clientLeft = docElem.clientLeft || body.clientLeft;

        top = box.top + scrollTop - clientTop;
        left = box.left + scrollLeft - clientLeft;

        return {
            top: Math.round(top),
            left: Math.round(left),
        }
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
                case 1:
                    inputDom.setAttribute("checked", "checked");
                    labelDom.setAttribute("class", "disselect");
                    break;
                case 2:
                    inputDom.setAttribute("checked", "checked");
                    labelDom.setAttribute("class", "selected");
                    break;
                case 0:
                default:
                    labelDom.setAttribute("class", "toselect");
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
            // evt.preventDefault();

            oriStartPoint.x = startPoint.x;
            oriStartPoint.y = startPoint.y;

            startPoint.x = evt.touches[0].pageX;
            startPoint.y = evt.touches[0].pageY;
        }, false);

        this.contain.addEventListener("touchmove", (evt) => {
            evt.preventDefault();

            if (evt.changedTouches.length > 1) {
                isZoom = true;

                startPoint.x = oriStartPoint.x;
                startPoint.y = oriStartPoint.y;

                let len, rect;

                len = Math.sqrt(Math.pow(evt.touches[0].pageX - evt.touches[1].pageX, 2) + Math.pow(evt.touches[0].pageY - evt.touches[1].pageY, 2));
                rect = this._getOffsetRect(this.contain);

                oriLen != 0 ? delta = len / oriLen : "";
                oriLen = len;

                if (delta > 1 && initDelta < this.contain.clientWidth / (3 * this.seatW * this.unit) && initDelta < this.contain.clientHeight / (3 * this.seatH * this.unit)) {
                    initDelta = parseFloat((initDelta * 10 + 2) / 10);
                } else if (initDelta > 0.4) {
                    initDelta = parseFloat((initDelta * 10 - 2) / 10);
                }

                this.contain.getElementsByClassName("seats-area")[0].setAttribute("style", this.transformProperty + "-origin: " + ((evt.touches[0].pageX + evt.touches[1].pageX) / 2 - rect.left) + "px " + ((evt.touches[0].pageY + evt.touches[1].pageY) / 2 - rect.top) + "px;" + this.transformProperty + ": scale(" + initDelta + ");");
            } else {
                let deltaX = evt.touches[0].pageX - startPoint.x + initPoint.x,
                    deltaY = evt.touches[0].pageY - startPoint.y + initPoint.y;

                if (deltaX > 10 || deltaY > 10) {
                    isDrag = true;
                }

                this.contain.getElementsByClassName("seats-list")[0].setAttribute("style", this.transformProperty + ": translate(" + deltaX + "px, " + deltaY + "px)");
            }
        }, false);

        this.contain.addEventListener("touchend", (evt) => {
            // evt.preventDefault();

            if (isDrag) {
                initPoint.x = initPoint.x + evt.changedTouches[0].pageX - startPoint.x;
                initPoint.y = initPoint.y + evt.changedTouches[0].pageY - startPoint.y;
            } else if (isZoom) {
                
            } else {
                let enableCheck,
                    cancelCheck,
                    seat = this.contain.querySelector("#" + evt.target.getAttribute("for"));

                enableCheck = seat && /toselect/.test(evt.target.getAttribute("class")) && this.seats.length < this.limit;
                cancelCheck = seat && /selecting/.test(evt.target.getAttribute("class"));
                if (enableCheck) {
                    this.seats.push(evt.target.getAttribute("for"));
                    seat.click();
                    evt.target.setAttribute("class", "selecting");
                } else if (cancelCheck) {
                    this.seats.splice(evt.target.getAttribute("for").indexOf(this.seats), 1);
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

    getSeats() {
        return this.seats;
    }

    reloadData(data) {
        this.data = data || [];
        this.seats = [];

        let canReload = this.data.length > 0;

        if (canReload) {
            this._renderSeats();
            return true;
        } else {
            return false;
        }
    }
};