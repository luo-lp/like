/**
  * @description 读取存储在localStorage里面的数组的
  * @param {string} key 存储数据使用的键
  * @return {Array} 返回一个数组，如果不存在，返回空数组
  */
function loadData(key){
  var str = localStorage.getItem(key);
  var arr = JSON.parse(str);
  if(!arr){
    arr = [];
  }
  return arr;
}