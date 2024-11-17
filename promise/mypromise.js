/**
 * 1、传入了一个函数， resolve, reject
 * 2、三种状态： 默认： 等待中 pending , 成功状态 fullfilled, 失败的状态 rejected
 * 3、resolve (pending --> fullfilled ), reject( pending --> rejected )
 * 4、状态一旦改变，就冻结了。、
 * 5、then方法接收两个函数 （successCb , failCb）， 而且能拿到 成功的值， 和失败的原因
 *
 */
const PENDING = 'pending'; //等待状态
const FULLFILLEED = 'fullfilled'; //成功状态
const REJECTED = 'rejected'; // 失败的状态

class MyPromise {
  constructor(executor) {
    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }
  state = PENDING;
  value = undefined; //resolve执行后，成功的值
  reason = undefined; // reject执行后， 失败的原因

  successCb = [];
  failCb = [];

  resolve = (value) => {
    if (this.state !== PENDING) return;
    this.state = FULLFILLEED;
    this.value = value;
    // this.successCb && this.successCb(this.value)
    while (this.successCb.length) this.successCb.shift()(this.value);
  };

  reject = (reason) => {
    if (this.state !== PENDING) return;
    this.state = REJECTED;
    this.reason = reason;
    // this.failCb && this.failCb(this.reason)
    while (this.failCb.length) this.failCb.shift()(this.reason);
  };

  then = (successCb, failCb) => {
    successCb = successCb ? successCb : (value) => value;
    failCb = failCb
      ? failCb
      : (reason) => {
          throw reason;
        };

    return new MyPromise((resolve, reject) => {
      if (this.state === FULLFILLEED) {
        try {
          let x = successCb(this.value);
          // resolve(x)
          resolvePromise(x, resolve, reject);
        } catch (error) {
          reject(error);
        }
      } else if (this.state === REJECTED) {
        try {
          let x = failCb(this.reason);
          resolvePromise(x, resolve, reject);
        } catch (error) {
          reject(error);
        }
      } else {
        // 一般遇到异步的时候，会走到else ,也就是当前的状态是 pending的时候， 把成功和失败回调函数暂存起来
        successCb &&
          this.successCb.push(() => {
            try {
              let x = successCb(this.value);
              // resolve(x)
              resolvePromise(x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          });
        failCb &&
          this.failCb.push(() => {
            try {
              let x = failCb(this.reason);
              resolvePromise(x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          });
      }
    });
  };

  static all(array) {
    let result = [];
    let flag_index = 0;
    return new MyPromise((resolve, reject) => {
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element instanceof MyPromise) {
          element.then(
            (value) => {
              flag_index++;
              result[index] = value;
              if (flag_index === array.length) {
                resolve(result);
              }
            },
            (reason) => {
              reject(reason);
            }
          );
        } else {
          flag_index++;
          result[index] = element;
          if (flag_index === array.length) {
            resolve(result);
          }
        }
      }
    });
  }

  // 备注下： catch录屏的时候报错的原因，是因为then里面调用
  catch(cb) {
    return this.then(undefined, cb);
  }
}

function resolvePromise(x, resolve, reject) {
  if (x instanceof MyPromise) {
    // promise对象的时候，让他执行下
    x.then(
      (value) => {
        resolve(value);
      },
      (reason) => {
        reject(reason);
      }
    );
  } else {
    // 普通对象
    resolve(x);
  }
}

let p2 = function () {
  return new MyPromise((resolve, reject) => {
    // reject(5)
    throw 'hehehda';
  });
};
p2()
  .then((v) => {
    console.log('成功1', v);
    throw 'hehehda';
  })
  .then((v) => {
    console.log('成功2', v);
  })
  .catch((v) => {
    console.log('失败', v);
  });
