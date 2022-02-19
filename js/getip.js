//https://joshua-dev-story.blogspot.com/2020/09/javascript-ip.html
// HTML의 <script> 요소를 생성한다
const se = document.createElement('script');
// <script> 요소의 src 속성을 설정한다
se.src = 'https://ipinfo.io?callback=callback';
// <body> 요소의 하위 끝에 붙인다
// 그리고 콜백 함수를 호출한다
document.body.appendChild(se);
// 앞서 생성한 <script> 요소를 제거한다
document.body.removeChild(se);

// 콜백 함수가 호출된다
function callback(data) {
  document.getElementById('client-ip').textContent = data.ip;
  document.getElementById('client-city').textContent = data.city;
  document.getElementById('client-region').textContent = data.region;
  document.getElementById('client-country').textContent = data.country;
  document.getElementById('client-loc').textContent = data.loc;
  document.getElementById('client-org').textContent = data.org;
  document.getElementById('client-postal').textContent = data.postal;
  document.getElementById('client-timezone').textContent = data.timezone;
}