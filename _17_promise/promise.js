// 자유 분방한 javascript가 질서를 유지하도록 만든다.

// javascript ---> typescript

// 비동기식 요청
// 코드가 씌여진 순서와는 상관없이 진행
// 비동기식으로 짜면 언제 서버로부터 결과가 전달될지 모른다.


let request = new XMLHttpRequest()
// 서버로부터 응답이 왔을 때, 실행될 코드를 지정, 이벤트 핸들러를 지정해서
// 응답을 처리한다.

// request.onload() : 요청에 대한 응답이 로딩될 때 사용된다.
// 요청을 보내고 답장이 왔을 때 수행할 명령을 먼저 만들어야 하므로,
// 반드시 보내기 전에 먼저 만들어주어야 한다. (Event Handler)
request.onload = () => {
    if (request.status === 200) {
        console.log('응답이 제대로 왔음.')
        console.log(request.responseText)
    } else {
        console.log('응답이 제대로 오지 않았음.')
    }
}

request.open('GET', 'http://127.0.0.1:5500/_1_hello_world/hello.html', true) // <- false/true 자리가 비동기식인지 물어보는 자리.
// 즉, XMLHttpRequest()는 동기와 비동기를 모두 지원한다.
request.send(null);

for (let i = 0; i < 10; i++) {
    console.log(i)
}


// 현대 언어의 특징
// let a = 1
// let b = 'hello'

// 망나니 언어 대표 python...
// 정제된 개발에는 type 지정이 필요하다...

// 정반대의 케이스
// int a = 1; 타입을 정확히 지정한다.

// let request = new XMLHttpRequest() 
// 자바스크립트에서 기본으로 제공해주는 객체,
// 이 클래스에서 만들어지는 객체는 다른 서버로 요청을 보낼 수 있다.
// request.open('GET', 'http://127.0.0.1:5501/_1_hello_world/hello.html', false) 
// 누구한테 가고 무엇을 하는지 지정해준다.
// GET, 무엇을 달라고 할지... ex) WB가 main.html을 달라고 WS에 요청한다.

// http://127.0.0.1:5501 -> IP주소, 127.0.0.1은 특별하게 스스로를 말한다. Local Loop.
// request.send(null)

// if (request.status === 200) {
//     console.log(request.responseText)
// }

// let request = new XMLHttpRequest()
// request.open('GET', 'http://127.0.0.1:5501/_1_hello_world/hello.html', false)
// request.send(null)

// if (request.status === 200) {
//     console.log(request.responseText)
// }

// http 는 Web server 와 Web browser 사이의 network 를 위한 명령어의 집합

// 'use strict'

// let request = new XMLHttpRequest();
// // WEB server 에서 달라고 요청하기 위한 GET 명령어, 1_helloworld.html 을 요청

// request.open('GET', 'http://127.0.0.1:5500/_1_hello_world/hello.html', false);
// // 127.0.0.1, 나 자신, 즉 Web server 와 Web browser 가 같은 컴퓨터에 있을 때 사용하는 고유 주소

// request.send(null);

// // server 로 부터 받은 답장이 status 에 나타나고
// // 받은 문자는 responseText 에 저장
// // 보낸 GET 에 대한 응답을 받은 경우
// if (request.status === 200) {
//     console.log(request.responseText);
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// javascript ---> promise


// promise 안에는 arrow function을 하나 넣어준다.
// 약속을 기다리고 있는다.
// const a = new Promise((resolve, reject)=> {
//     // ------------------------ 해야 할 일을 지정
//     // 성공하면 resolve, 실패하면 reject...
//     // 비동기 통신의 callback을 받는다고 생각하면 된다?
//     console.log('hello')

//     // setTimeout으로 수행 시간이 긴 임의의 과정을 설정.
//     setTimeout(() => {
//         resolve('ended')
//     }, 3000);
// })

// // Promise의 수행이 끝나고
// // resolve가 실행이 됐으면...
// a.then((v)=> {
//     console.log(`then received: ${v}`)
// })

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
