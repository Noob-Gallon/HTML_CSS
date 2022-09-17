'use strict'

// promise를 이용한 비동기 서버 요청
// XMLHttpRequest : event handler ---> 비동기 처리
// Promise : fetch ---> promise

// fetch ---> 가져오다, 서버로부터 web page를 가져오다.
// a는 Promise를 return 받는다. fetch는 반환값이 promise, 약속을 return 한다.
// const a = fetch('http://127.0.0.1:5500/_1_hello_world/hellow.html') // err를 발생시킬려면, 명령어를 못 날리도록 바꿔야한다.
fetch('http://127.0.0.1:5500/_1_hello_world/hello.html') // 404 Error -> 가져오지 못함. 응답은 옴.
// Promise, 성공 -> resolve, 실패 -> reject
// then은 Promise에서 resolve로 넘어온다.
// reject는 Promise에서 catch로 넘어온다.
.then((response) => { // fetch가 성공하여 서버로부터의 응답이 제대로 왔을 때 실행. 인수는 response로 온다.
    console.log(`서버응답 도착: ${response}`)
    // console.log(`응답을 텍스트로 바꾸면: ${response.text()}`) // 반환값이 문자열이 아님! 만약 이게 문자열이면 바로 출력하면됨.
    // 반환값이 또 다른 Promise임...
    return response.text() // 또 다른 promise를 반환한다. 약속이 이미 지켜져서 then으로 들어왔는데, 또 다른 약속을 반환한다.
    // 그렇다면, 이 약속에 대해서도 기다려주어야 한다.
    // reponse.text()를 통해 첫 번째 resolve에서 반환된 Promise가 문자열로 열심히 바뀌고, 그게 다 바뀌면 다시 또 다른 resolve로
    // 전달된다. 바로 아래있는 .then으로...
})
.then((data) => {
    console.log(`문자열로 바꾼 응답: ${data}`) // 이처럼 resolve에서 전달받은 Promise를 또 다른 Promise에 전달해주는 것을 Promise Chaining이라고 한다.
})
.catch((err) => {
    console.log(`서버응답 에러 ${err}`)
})

// for문을 넣는 이유, 비동기 요청과 상관없는 부분이 실제로 별도로 돌아가고 있는지 확인하기 위해서...
for (let i = 0; i < 10; i++) {
    console.log(i)
}

// 출력 결과는, HTML 파일이 쏟아지기 전에, for문이 동작하여 0부터 9까지 쏟아지게 될 것...