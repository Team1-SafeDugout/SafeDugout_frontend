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

// 공지글 
const noticeData = [
  { id: 1, title: "사이트 이용안내", link: "./teamNoticeBoardDetail.html" },
  { id: 2, title: "홈경기 일정 변경 공지", link: "./teamNoticeBoardDetail.html" },
  { id: 3, title: "커뮤니티 이용 수칙 안내", link: "./teamNoticeBoardDetail.html" },
];

// 게시글
const boardData = [
  { id: 101, title: "최근 경기 리뷰", author: "user01", date: "2025-08-11", link: "./teamPostDetail.html" },
  { id: 102, title: "팬미팅 후기", author: "user02", date: "2025-08-10", link: "./teamPostDetail.html" },
  { id: 103, title: "응원가 추천해주세요", author: "user03", date: "2025-08-09", link: "./teamPostDetail.html" },
  { id: 104, title: "새 유니폼 공개!", author: "user04", date: "2025-08-08", link: "./teamPostDetail.html" },
  { id: 105, title: "선수 인터뷰 영상", author: "user05", date: "2025-08-07", link: "./teamPostDetail.html" },
  { id: 106, title: "굿즈 교환 문의", author: "user06", date: "2025-08-06", link: "./teamPostDetail.html" },
  { id: 107, title: "경기장 방문 후기", author: "user01", date: "2025-08-05", link: "./teamPostDetail.html" },
  { id: 108, title: "응원 스탠드 위치 안내", author: "user01", date: "2025-08-04", link: "./teamPostDetail.html" },
  { id: 109, title: "전력 분석 토론", author: "user01", date: "2025-08-03", link: "./teamPostDetail.html" },
  { id: 110, title: "팀 컬러 굿즈 추천", author: "user01", date: "2025-08-02", link: "./teamPostDetail.html" },
];

const noticeListContainer = document.querySelector('.team-notice-board ul');
const boardListContainer = document.querySelector('.team-board');

// 공지글 렌더링 함수
function renderNoticeList() {
  // 공지글 li.team-notice-list 요소 여러 개 있는데, 기존 빈 li 3개 삭제 후 새로 생성
  // (혹은 빈 li 삭제하고 새로 생성해도 무방)
  // 우선 기존에 비어있는 li.team-notice-list 삭제
  const emptyNoticeLis = noticeListContainer.querySelectorAll('.team-notice-list');
  emptyNoticeLis.forEach(li => li.remove());

  // 공지글 3개만 보여주기 (최대 3개)
  noticeData.slice(0, 3).forEach(({ id, title, link }) => {
    const li = document.createElement('li');
    li.classList.add('team-notice-list');

    // 공지글은 '공지' 텍스트 표시하는 div와 제목 링크로 구성
    // 참고로 공지글 레이아웃에 맞게 div 2개 넣음
    const divNotice = document.createElement('div');
    divNotice.classList.add('center-text');
    divNotice.textContent = '공지';

    const divTitle = document.createElement('div');
    const a = document.createElement('a');
    a.href = link;
    a.textContent = title;
    divTitle.appendChild(a);

    li.appendChild(divNotice);
    li.appendChild(divTitle);

    noticeListContainer.appendChild(li);
  });
}

// 게시글 렌더링 함수
function renderBoardList() {
  // team-board 안에 li.team-board-list 여러 개 있는데, 첫 번째(링크 포함)도 제거
  const boardListItems = boardListContainer.querySelectorAll('.team-board-list');
  boardListItems.forEach(li => li.remove());

  // 게시글 10개 보여주기 (배열 크기 만큼)
  boardData.slice(0, 10).forEach(({ id, title, author, date, link }) => {
    const li = document.createElement('li');
    li.classList.add('team-board-list');

    // <a>로 전체 감싸기
    const a = document.createElement('a');
    a.href = link;

    // 글번호
    const divId = document.createElement('div');
    divId.textContent = id;

    // 제목
    const divTitle = document.createElement('div');
    divTitle.textContent = title;

    // 작성자
    const divAuthor = document.createElement('div');
    divAuthor.textContent = author;

    // 작성일자
    const divDate = document.createElement('div');
    divDate.textContent = date;

    a.appendChild(divId);
    a.appendChild(divTitle);
    a.appendChild(divAuthor);
    a.appendChild(divDate);

    li.appendChild(a);
    boardListContainer.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderNoticeList();
  renderBoardList();
});
