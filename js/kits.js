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
/**
 * @description 用于将数组存储到localStorage里面的方法
 * @param {string} key 存储使用的键
 * @param {Array} arr 要存储的数组数据
 * @return {undefined}
 */
function saveData(key,arr){
  var json = JSON.stringify(arr);
  
  localStorage.setItem(key, json);

}