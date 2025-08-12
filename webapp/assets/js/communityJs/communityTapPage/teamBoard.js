document.addEventListener('DOMContentLoaded', () => {
  const noticeContent = document.getElementById('team-notice-content');
  const boardContent = document.querySelector('.team-board-content');

  // 공지글 데이터 (예시 10개)
  const notices = [
    { text: '공지사항 1', link: './teamNoticeBoardDetail.html' },
    { text: '공지사항 2', link: './teamNoticeBoardDetail.html' },
    { text: '공지사항 3', link: './teamNoticeBoardDetail.html' },
  ];

  // 게시글 데이터 (예시 10개)
  const posts = [
    { id: 1, title: '게시글 제목 1', author: '작성자1', date: '2025-08-12', link: './teamPostDetail.html' },
    { id: 2, title: '게시글 제목 2', author: '작성자2', date: '2025-08-11', link: './teamPostDetail.html' },
    { id: 3, title: '게시글 제목 3', author: '작성자3', date: '2025-08-10', link: './teamPostDetail.html' },
    { id: 4, title: '게시글 제목 4', author: '작성자4', date: '2025-08-09', link: './teamPostDetail.html' },
    { id: 5, title: '게시글 제목 5', author: '작성자5', date: '2025-08-08', link: './teamPostDetail.html' },
    { id: 6, title: '게시글 제목 6', author: '작성자6', date: '2025-08-07', link: './teamPostDetail.html' },
    { id: 7, title: '게시글 제목 7', author: '작성자7', date: '2025-08-06', link: './teamPostDetail.html' },
    { id: 8, title: '게시글 제목 8', author: '작성자8', date: '2025-08-05', link: './teamPostDetail.html' },
    { id: 9, title: '게시글 제목 9', author: '작성자9', date: '2025-08-04', link: './teamPostDetail.html' },
    { id: 10, title: '게시글 제목 10', author: '작성자10', date: '2025-08-03', link: './teamPostDetail.html' },
  ];

  // 공지글 리스트 추가 함수
  function renderNotices() {
    // 기존 공지 리스트 항목 제거 (첫 번째 공지 헤더 제외)
    while (noticeContent.children.length > 1) {
      noticeContent.removeChild(noticeContent.lastChild);
    }
    // 공지 리스트 추가
    notices.forEach(notice => {
      const li = document.createElement('li');
      li.className = 'team-notice-list';

      // 링크 추가하고 싶으면 a 태그 넣으면 됩니다
      // 예: 
      const a = document.createElement('a');
      a.href = notice.link;
      a.textContent = notice.text;
      li.appendChild(a);
      noticeContent.appendChild(li);
    });
  }

  // 게시글 리스트 추가 함수
  function renderPosts() {
    // 기존 게시글 리스트 항목 제거 (첫 번째 헤더 제외)
    while (boardContent.children.length > 1) {
      boardContent.removeChild(boardContent.lastChild);
    }

    posts.forEach(post => {
      const li = document.createElement('li');
      li.className = 'team-board-list';

      const a = document.createElement('a');
      a.href = post.link;

      // 글번호
      const divId = document.createElement('div');
      divId.textContent = post.id;
      a.appendChild(divId);

      // 제목
      const divTitle = document.createElement('div');
      divTitle.textContent = post.title;
      a.appendChild(divTitle);

      // 작성자
      const divAuthor = document.createElement('div');
      divAuthor.textContent = post.author;
      a.appendChild(divAuthor);

      // 작성일자
      const divDate = document.createElement('div');
      divDate.textContent = post.date;
      a.appendChild(divDate);

      li.appendChild(a);
      boardContent.appendChild(li);
    });
  }

  renderNotices();
  renderPosts();
});
