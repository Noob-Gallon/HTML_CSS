'use strict'

// async : syntatic sugar for promise... -> 문법적 설탕, promise가 그냥 쓰기는 좀 어렵다.
// 문법적으로 쓰기 쉽게 고친다. (syntax, 어법, 문법)

// c언어의 syntatic sugar
// int k = 0;
// if (k > 1) {
//     k = 3
// } else {
//     k = 0
// }

// k = (k > 1) ? 3 : 0

function B() { // function B는 Promise를 반환한다. 실행되고 3초후에 resolve에 45를 넘겨준다.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`B가 실행됨.`)
            resolve(45)
        }, 3000)
    })
}

// 앞에 async를 붙이는 순간, 이제 이 함수는 Promise를 return 한다.
// async function fetchUser(a) {
//     console.log(`Promise 실행`)

//     const k = await B()

//     B().then((k) => {
//         if (k >= 0) {
//             return `실행끝` // resolve에 해당하는 부분 -> resolve에 해당한다.
//         } else {
//             throw new Error('음수') // Error는 Javascript에서 지원해주는 Error를 생성해주는 Class => reject에 해당한다.
//         } 
//     })
// }

async function fetchUser(a) {
    console.log(`Promise 실행`)

    const k = await B() 
    // await는 async 내에서만 사용가능한 문법이며, 
    // Promise 내에서 또 다른 Promise가 동기적으로
    // 실행되는 것을 가능하게 한다.
    // 즉, async(Promise) 내에서 다른 Promise가 끝나기를 기다리는
    // 동기적인 동작을 가능하게 한다.

    if (k >= 0) {
        return `실행끝` // resolve에 해당하는 부분 -> resolve에 해당한다.
    } else {
        throw new Error('음수') // Error는 Javascript에서 지원해주는 Error를 생성해주는 Class => reject에 해당한다.
    } 
}

// ---------- 문법적 설탕을 사용해도 아래는 변하지 않는다. ----------
const a = fetchUser(-10) // a는 Promise가 되고, resolve가 됐을 때 수행되는 함수 then을 거는데, v에 '실행 끝'이 들어온다.
.then((v) => {
    console.log(`fetchUser result : ${v}`)
})
.catch((error) => {
    console.log(`에러발생: ${error}`)
})
.finally(() => { // resolve 혹은 reject에 상관없이 Promise가 종료되면서 공통적으로 실행해주는 부분.
    console.log(`Promise 끝: from Finally`)
})


// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         console.log(`Promise 실행`)
//         resolve('실행 끝')
//     })
// }

// const a = fetchUser() // a는 Promise가 되고, resolve가 됐을 때 수행되는 함수 then을 거는데, v에 '실행 끝'이 들어온다.

// a
// .then((v) => {
//     console.log(`fetchUser result : ${v}`)
// })
