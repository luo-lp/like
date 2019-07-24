/**
 * @description 读取存储在localStorage里面的数组的
 * @param {string} key 存储数据使用的键
 * @return {Array} 返回一个数组，如果不存在，返回空数组
 */
function loadData(key) {
  var str = localStorage.getItem(key);
  var arr = JSON.parse(str);
  if (!arr) {
    arr = [];
  }
  return arr;
}
/**
 * @description 用于将数组存储到localStorage里面的方法
 * @param {string} key 存储使用的键
 * @param {Array} arr 要存储的数组数据
 * @return {undefined}
 */
function saveData(key, arr) {
  var json = JSON.stringify(arr);

  localStorage.setItem(key, json);
}
/**
 * @description 用于获取随机数
 * @param {string} n 开始 m结束
 * @return {number}
 */
function getRandom(n, m) {
  if (m !== undefined) {
    return Math.floor(Math.random() * (m - n + 1) + n);
  } else {
    return Math.floor(Math.random() * n);
  }
}
// 状态模式的思想： 使用状态代替if-else
function Validator() {
  // 有一个数组，用来存储所有的验证的函数
  this.validateFuncs = [];
}
// 2.2 给构造函数的原型添加一个方法，让其可以添加一个新的函数进去
Validator.prototype.add = function (dom, arr) {
  // 遍历数组，往this.validateFuncs 添加新的验证的方法
  for (let i = 0; i < arr.length; i++) {
    let fn = function () {
      let rule = arr[i];
      let params = rule.fnName.split(':'); // [minLength,8]
      let fnName = params.shift(); // fnName里面可能会包含参数
      params.unshift(dom.value); // [dom.vlaue,8]
      params.push(rule.errMsg); // [dom.value,8,rule.errMsg];
      return strategies[fnName].apply(dom, params);
    }
    this.validateFuncs.push(fn);
  }

}
// 2.3 需要一个可以把数组里面的每个函数都执行的方法
Validator.prototype.start = function () {
  for (let i = 0; i < this.validateFuncs.length; i++) {
    let msg = this.validateFuncs[i]();
    if (msg) {
      return msg;
    }
  }
}