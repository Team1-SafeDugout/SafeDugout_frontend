document.addEventListener("DOMContentLoaded", () => {
  const userId = localStorage.getItem("userId"); // 로그인 아이디 예시 저장 위치
  const writeBtn = document.querySelector(".team-board-write");

  if (!userId) {
    // 로그인 안 되어 있을 때
    writeBtn.style.pointerEvents = "none";  // 클릭 안 되도록
    writeBtn.style.opacity = "0.5";         // 시각적으로 비활성화
    writeBtn.title = "로그인 후에 글쓰기가 가능합니다.";

    writeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("로그인 후에 글쓰기가 가능합니다.");
    });
  }
});
