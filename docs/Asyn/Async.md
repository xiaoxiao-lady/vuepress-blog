---
title: Async
date: 2020-05-27 10:20
sidebar: auto
sidebarDepth: 4
categories: 异步
---

## 概念

1. async/await 是一种编写异步代码的新方法。之前异步代码的方案是回调和 promise。
2. async/await 是建立在 promise 的基础上。
3. async/await 让异步代码看起来、表现起来更像同步代码。这正是其威力所在。

## 案例说明

### - async 函数返回的是一个 promise 对象

---

```
async function testAsync() {
    return "hello async";
}
let result = testAsync();
console.log(result)
结果：Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: "hello async"}
解释：
async函数返回的是一个promise对象，如果在函数中 return 一个直接量，async
会把这个直接量通过 Promise.resolve()封装成 Promise 对象

```

### - await 会阻塞当前函数后面的代码

---

```
async function async1() {
  console.log("async1 start");  //async   里面的内容在函数调用之后会正常执行，
  只有遇到await之后会跑去执行await的内容，并且把之后的代码放到微任务队列中
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
async1();
console.log('start')
结果：
'async1 start'
'async2'
'start'
'async1 end'

```

- 过程分析

> 1. 首先一进来是创建了两个函数的，我们先不看函数的创建位置，而是看它的调用位置；
> 2. 发现 async1 函数被调用了，然后去看看调用的内容，输出'async1 start'
> 3. 执行函数中的同步代码 async1 start，之后碰到了 await，它会阻塞 async1 后面代码的执行，因此会先去执行 async2 中的同步代码 async2，然后跳出 async1（把 await async2();放入到微任务中） 输出 async2
> 4. 在一轮宏任务全部执行完之后，再来执行刚刚 await 后面的内容 async1 end。输出 async1 end
> 5. 在这里，你可以理解为「紧跟着 await 后面的语句相当于放到了 new Promise 中，下一行及之后的语句相当于放在 Promise.then 中」。

### - async 结合定时器

---

```
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  setTimeout(() => {
    console.log('timer')
  }, 0)
  console.log("async2");
}
async1();
console.log("start")
结果：
'async1 start'
'async2'
'start'
'async1 end'
'timer'

```

- 过程分析

> 1. async1();调用的时候开始执行 async1 函数，输出 async1 start
> 2. 遇到 await async2();阻塞之后的代码，去执行 async2 函数，并且只有的代码加入到当前的微任务队列中，跳出 async1
> 3. 遇到 setimeout，加入到下一个宏任务中，
> 4. 执行同步代码 console.log("async2");输出 async2
> 5. 执行完 async2，再执行同步的代码 console.log("start")，输出 start
> 6. 第一轮宏任务执行完毕之后，查看当前的微任务队列中，执行 console.log("async1 end");输出 async1 end
> 7. 进入下一轮的宏任务中，执行 settimeout，console.log('timer')，输出 timer

### - async 结合多个定时器

---

```
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
  setTimeout(() => {
    console.log('timer1')
  }, 0)
}
async function async2() {
  setTimeout(() => {
    console.log('timer2')
  }, 0)
  console.log("async2");
}
async1();
setTimeout(() => {
  console.log('timer3')
}, 0)
console.log("start")
结果：
'async1 start'
'async2'
'start'
'async1 end'
'timer2'
'timer3'
'timer1'
```

- 过程分析

> 1. 定时器谁先执行，你只需要关注谁先被调用的以及延迟时间是多少，这道题中延迟时间都是 0，所以只要关注谁先被调用的。。。
> 2. async1();调用，执行 console.log("async1 start");输出 async1 start
> 3. await async2();把后面的代码放到当前的宏任务的微任务队列中，跳出 async1，执行 async2
> 4. 遇到 async2 里面的 settimeout 放到后面的宏任务中，
> 5. 执行 console.log("async2");，输出 async2
> 6. 遇到外面的 settimeout，放到宏任务中
> 7. 执行同步代码，输出 start
> 8. 本轮的宏任务执行完成，查看微任务，执行 console.log("async1 end");输出 async1 end
> 9. 遇到 setTimeout，加入宏任务中，
> 10. 进入之后的宏任务中，因为时间都是 0，所以输出 timer2 -》timer3 -》timer1

### - await 里面的 resolve 和 async1.then 的 res 没有关系

---

```
async function async1 () {
  console.log('async1 start');
  await new Promise(resolve => {
    console.log('promise1')
    resolve('promise resolve')
  })
  console.log('async1 success');
  return 'async1 end'
}
console.log('srcipt start')
async1().then(res => {
  console.log(res)
})
new Promise(resolve => {
  console.log('promise2')
  setTimeout(() => {
    console.log('timer')
  })
})
结果：
script start
async1 start （函数调用的时候才执行内部的程序，不关注在哪里定义，只需要关注在哪里调用）
promise1
promise2
async1  success
async1  end
timer
```

- 过程分析

> 1. 遇到函数定义，暂不处理。
> 2. 同步代码 console 输出 script start
> 3. 函数调用了，进入函数内部执行
> 4. 输出 async1 star
> 5. 遇到 await ，执行其中的代码，输出 promise
> 6. 后面的代码放入到微任务队列中
> 7. async1().then 也是需要放到微任务队列中
> 8. 向下执行，输出 promise2
> 9. 遇到 settimeout 放到下一轮的宏任务中
> 10. 第一轮宏任务执行完成，查看微任务队列，
> 11. 遇到第一个微任务，输出 async1 success
> 12. return 返回行函数的结果为 async1 end（这个容易出错，这个是函数的结果，不是之前 promise 保存的结果 promise resolve）
> 13. 执行第二个微任务，输出 async1 end
> 14. 微任务执行完，开始执行第二轮的宏任务，输出 timer。
