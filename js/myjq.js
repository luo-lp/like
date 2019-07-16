/*方法说明
 *@auhor 作者
 *@example 示例
 *@link 链接
 *@namespace 命名空间
 *@requires 依赖模块
 *@version 版本号
 *@method 方法名
 *@for 所属类名
 *@param{参数类型}参数名 参数说明
 *@return {返回值类型} 返回值说明
 */
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
    /**
     * 一个for循环的封装
     * @method each
     * @param{fn}
     * @return this
     */
    Init.prototype.each = function (callback) {
        for (let i = 0; i < this.length; i++) {
            callback(i, this[i]);
        };
    }
    /**
     * 设置CSS样式以及获取样式 
     * 只传入css属性名时可以返回该属性的值
     * 传入css属性及值时会根据传入的样式及值设置css样式
     * @method css
     * 
     */
    Init.prototype.css = function (key, val) {
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
    /**
     * 添加CSS样式名
     * @method addClass
     * @param {string}传入一个符合css类名命名规则的字符串
     */
    Init.prototype.addClass = function (className) {
        this.each(function (i, e) {
            e.classList.add(className);
        });
        return this;
    }
    /**
     * 移除CSS样式名
     * @method removeClass
     * @param {string}传入一个符合css类名命名规则的字符串
     */
    Init.prototype.removeClass = function (className) {
        this.each(function (i, e) {
            e.classList.remove(className);
        });
        return this;
    }
    /**
     * 切换CSS样式名
     * 根据传入的类名判断该对象上是否存在改类名，如果有则移除，反之添加
     * @method toggleClass
     * @param {string}传入一个符合css类名命名规则的字符串
     */
    Init.prototype.toggleClass = function (className) {
        this.each(function (i, e) {
            e.classList.toggle(className);
        });
        return this;
    }
    /**
     * 使自己显示
     * @method show
     */
    Init.prototype.show = function () {
        this.each(function (i, e) {
            e.style.display = 'block';
        });
        return this;
    }
    /**
     * 使自己隐藏
     * @method hide
     */
    Init.prototype.hide = function () {
        this.each(function (i, e) {
            e.style.display = 'none';

        });
        return this;
    }
    /**
     * 获取及设置当前对象的html内容
     * @method html
     */
    Init.prototype.html = function (element) {
        let arr = []
        this.each(function (i, e) {
            if (element === undefined) {
                console.log(e.innerHTML)
                arr[i] = e.innerHTML;
            } else {
                e.innerHTML = element;
            }
        });
        if (element === undefined) {
            if (arr.length <= 1) {
                return arr[0];
            } else {
                return arr;
            }
        } else {
            return this;
        }
    }
    /**
     * 获取及设置当前对象的text内容
     * @method text
     */
    Init.prototype.text = function (element) {
        let arr = []
        this.each(function (i, e) {
            if (element === undefined) {
                arr[i] = e.innerText;
            } else {
                e.innerText = element;
            }
        });
        if (element === undefined) {
            if (arr.length <= 1) {
                return arr[0];
            } else {
                return arr;
            }
        } else {
            return this;
        }
    }
    /**
     * 获取及设置value属性
     * @method val
     */
    Init.prototype.val = function (val) {
        let arr = [];
        this.each(function (i, e) {
            if (val === undefined) {
                arr[i] = e.value;
            } else {
                e.value = val;
            }
        })
        if (val === undefined) {
            if (arr.length <= 1) {
                return arr[0];
            } else {
                return arr;
            }
        } else {
            return this;
        }
    }
    /**
     * 添加自定义属性和获取属性值
     * @method attr
     * 
     */
    Init.prototype.attr = function (property, val) {
        let arr = [];
        this.each(function (i, e) {
            if (val === undefined) {
                arr[i] = e.getAttribute(property);
            } else {
                e.setAttribute(property, val);
            }
        })
        if (val === undefined) {
            if (arr.length <= 1) {
                return arr[0];
            } else {
                return arr;
            }
        } else {
            return this;
        }
    }
    /**
     * 移除属性
     * @method removeAttr
     * 
     */
    Init.prototype.removeAttr = function (property) {
        this.each(function(i,e){
            e.removeAttribute(property)
        });
        return this
    }
    Init.prototype.attr = function (property, val) {
        let arr = [];
        this.each(function (i, e) {
            if (val === undefined) {
                arr[i] = e.getAttribute(property);
            } else {
                e.setAttribute(property, val);
            }
        })
        if (val === undefined) {
            if (arr.length <= 1) {
                return arr[0];
            } else {
                return arr;
            }
        } else {
            return this;
        }
    }
})();