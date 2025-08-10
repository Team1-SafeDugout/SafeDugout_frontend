window.addEventListener('DOMContentLoaded', () => {
  // 헤더 불러오기
  fetch('../adminHeader.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    });

  // 푸터 불러오기
  fetch('../adminFooter.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });
});
