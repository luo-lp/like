// 在这里形成一个局部作用域，防止别人的代码影响我们自己的代码
;
(function () {
    window.$ = window.jQuery = jQuery;

    function jQuery(selector) {
        return new Init(selector)
    }
    function jQueray(selector) {
        return new Init(selector)
    }
    function Init(selector) {
        let dom = document.querySelectorAll(selector);
        for (let i = 0; i < dom.length; i++) {
            this[i] = dom[i];
        }
        this.length = dom.length;
    }
    Init.prototype.each = function (callback) {
        for (let i = 0; i < this.length; i++) {
            callback(i, this[i]);
        };
    }
    Init.prototype.css = function (key, val) {
        // console.log(val.string)
        if (val === undefined) {
            return window.getComputedStyle(this[0])[key];
        } else {
            let arr = [
                'width',
                'height',
                'top',
                'left',
                'right',
                'bottom',
                'opacity'
            ]
            for (let i = 0; i < this.length; i++) {
                for (let j = 0; j < arr.length; j++) {
                    if (key == arr[j]) {
                        if (arr[j].indexOf('px') == -1) {
                            this[i].style[key] = val;
                        }
                        this[i].style[key] = val + 'px';
                    }
                }
                this[i].style[key] = val;
            }
            return this;
        }

    }
    Init.prototype.addClass = function (className) {
        this.each(function (i, e) {
            e.classList.add(className);
        });
        return this;
    }
    Init.prototype.removeClass = function (className) {
        this.each(function (i, e) {
            e.classList.remove(className);
        });
        return this;
    }
    Init.prototype.toggleClass = function (className) {
        this.each(function (i, e) {
            e.classList.toggle(className);
        });
        return this;
    }
    Init.prototype.show = function () {
        this.each(function (i, e) {
            e.style.display = 'block';
        });
        return this;
    }
    Init.prototype.hide = function () {
        this.each(function (i, e) {
            e.style.display = 'none';

        });
        return this;
    }
    Init.prototype.html = function (element) {
        let arr = []
        this.each(function (i, e) {
            if (element === undefined) {
                console.log(e.innerHTML)
                arr[i] = e.innerHTML
            } else {
                e.innerHTML = element;
            }
        });
        if(element === undefined){
            return arr;
        }else{
            return this;
        }
    }
})();