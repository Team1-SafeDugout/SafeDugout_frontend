let comments = [
  { id: 1, author: "user01", date: "2025-08-08", text: "첫 번째 댓글" },
  { id: 2, author: "user02", date: "2025-08-09", text: "두 번째 댓글" }
];

// 댓글 목록 
function renderComments() {
  const commentList = document.querySelector(".free-community-comment-list");
  commentList.innerHTML = ""; 
  comments.forEach(comment => {
    const li = document.createElement("li");
    li.className = "free-community-comment-item";
    li.innerHTML = `
      <div class="free-community-comment-info">
        <span class="free-community-comment-author">작성자 ID: ${comment.author}</span>
        <span class="free-community-comment-date">${comment.date}</span>
      </div>
      <p class="free-community--comment-text">${comment.text}</p>
      <div class="free-community--comment-button">
        <button type="button" onclick="editComment(${comment.id})">수정</button>
        <button type="button" onclick="deleteComment(${comment.id})">삭제</button>
      </div>
    `;
    commentList.appendChild(li);
  });
}

// 댓글 등록 처리
document.querySelector(".team-btn-button").addEventListener("click", () => {
  const textarea = document.querySelector(".free-community--comment-area textarea");
  const text = textarea.value.trim();
  if (!text) {
    alert("댓글 내용을 입력해주세요.");
    return;
  }

  // 실제 서비스면 로그인 유저 아이디 넣어야 함
  const newComment = {
    id: Date.now(),
    author: "user",
    date: new Date().toISOString().slice(0, 10), 
    text
  };

  comments.push(newComment);
  textarea.value = ""; // 입력창 초기화
  renderComments();
});

// 댓글 삭제 함수
function deleteComment(id) {
  if (!confirm("댓글을 삭제하시겠습니까?")) return;
  comments = comments.filter(c => c.id !== id);
  renderComments();
}

// 댓글 수정 함수
function editComment(id) {
  const comment = comments.find(c => c.id === id);
  if (!comment) return;
  const newText = prompt("댓글을 수정하세요:", comment.text);
  if (newText === null) return;
  comment.text = newText.trim();
  renderComments();
}


