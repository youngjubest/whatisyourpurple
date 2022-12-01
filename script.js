// icon에 마우스 올려놓을 시 이미지 변경
var hw = document.getElementById('hw');
hw.addEventListener('click', function () {
  alert('Hello world');
})

var icon = document.getElementById('icon');
icon.addEventListener('mouseover', function() {
    icon.src+="shine.png";

})

icon.addEventListener('mouseout', function() {
    icon.src-="shine.png";

})

// form창 나타내기 및 숨기기
function toggleForm() {
  
  // 토글 할 버튼 선택 (btn1)
  const btn = document.getElementById("myButton");
  const form = document.getElementById("form");

  // form 숨기기 (display: none)
  if(form.style.display !== 'none') {
    form.style.display = 'none';
    btn.value="show!";
  }
  // form 보이기 
  else {
      form.style.display = "";
      btn.style.display = 'none';
  }
  
}

function closeBtn() {
  const btn = document.getElementById("myButton");
  const form = document.getElementById("form");

  form.style.display = 'none';
  btn.style.display = "";
  
}