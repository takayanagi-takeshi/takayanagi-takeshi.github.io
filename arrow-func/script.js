
// let nmlFunc = function (x) {
//   console.log(x);
// }

// let arrowFunc = (y)  => {
//   console.log(y);
// }

// nmlFunc('今までの関数');
// arrowFunc('アロー関数');

// アロー関数式で宣言された関数は、宣言された時点で、thisを確定（拘束）させる
param = 'global param';

// let object = {
//   param: 'object param',
//   func: function outParam() {
//     console.log(this.param);
//   }
// }

// function outParam() {
//   console.log(this.param);
// }

let outParam = () => {
  console.log(this.param);
}

let object = {
  param: 'object param',
  func: outParam
}

let object2 = {
  param: 'object2 param',
  func: outParam
}

object.func();
// object.param();
object2.func();