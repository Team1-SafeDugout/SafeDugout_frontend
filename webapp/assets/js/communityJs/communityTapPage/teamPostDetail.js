document.addEventListener("DOMContentLoaded", () => {
  // 댓글 리스트 전체 가져오기
  const commentList = document.querySelector(".team-comment-list");

  // 댓글 삭제 버튼들 모두 선택
  const deleteButtons = commentList.querySelectorAll("button[type='submit']:nth-child(2)");

  // 삭제 버튼에 이벤트 추가
  deleteButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      if (confirm("댓글을 삭제하시겠습니까?")) {
        // 버튼의 가장 가까운 .comment-item li 요소를 찾아서 삭제
        const commentItem = btn.closest(".comment-item");
        if (commentItem) {
          commentItem.remove();
        }
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const userId = localStorage.getItem("userId"); // 로그인 아이디 가져오기
  const commentForm = document.querySelector(".team-comment-area form");
  const textarea = commentForm.querySelector("textarea");
  const submitBtn = commentForm.querySelector(".team-btn-submit");

  if (!userId) {
    // 로그인 안 된 상태면
    textarea.disabled = true;
    textarea.placeholder = "로그인 후 댓글을 작성할 수 있습니다.";
    submitBtn.disabled = true;

    // 만약 댓글 입력 시도하면 안내창 띄우기 (옵션)
    commentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("댓글을 작성하려면 로그인해야 합니다.");
    });
  } else {
    // 로그인 됐을 때
    // 제출 시 실제 댓글 등록 처리 (서버 연동 등)
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const loginUserId = localStorage.getItem("userId"); // 현재 로그인한 아이디

  // 게시글 작성자 아이디를 DOM에서 가져오기 (예: 작성자 <p> 태그 안 텍스트)
  const postWriterElem = document.querySelector(".team-post-writer p");
  const postWriterId = postWriterElem ? postWriterElem.textContent.trim() : null;

  if (loginUserId !== postWriterId) {
    // 로그인 유저가 작성자가 아니면 수정/삭제 버튼 숨기기
    const buttons = document.querySelectorAll(".team-post-header button");
    buttons.forEach(btn => btn.style.display = "none");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const loginUserId = localStorage.getItem("userId"); // 로그인한 사용자 ID 가져오기
  const commentItems = document.querySelectorAll(".comment-item");

  commentItems.forEach(comment => {
    const authorSpan = comment.querySelector(".comment-author");
    // 작성자 ID 텍스트에서 실제 ID만 추출 (예: "작성자 ID: user01")
    const authorId = authorSpan ? authorSpan.textContent.replace("작성자 ID:", "").trim() : null;

    if (loginUserId !== authorId) {
      // 작성자가 아니면 수정/삭제 버튼 숨기기
      const buttons = comment.querySelectorAll(".team-comment-button button");
      buttons.forEach(btn => btn.style.display = "none");
    }
  });
});
