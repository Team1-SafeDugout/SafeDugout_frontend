// 샘플 뉴스 데이터
const newsData = [
  {
    img: './../../../assets/img/communityImg/lg.png',
    title: "타격 기계도 4번 타자도 아니다, LG 후반기 타격 1위는 '슈퍼 백업'",
    link: './teamNewsDetail.html',
  },
  {
    img: './../../../assets/img/communityImg/lg.png',
    title: "선수 A, 이번 시즌 최고의 활약 기대",
    link: '#',
  },
  {
    img: './../../../assets/img/communityImg/lg.png',
    title: "팀 전력 분석 및 다음 경기 전망",
    link: '#',
  },
  {
    img: './../../../assets/img/communityImg/lg.png',
    title: "감독 인터뷰: 새로운 전략 공개",
    link: '#',
  },
  {
    img: './../../../assets/img/communityImg/lg.png',
    title: "팬들과 함께하는 이벤트 안내",
    link: '#',
  },
  {
    img: './../../../assets/img/communityImg/lg.png',
    title: "야구계 최신 트렌드와 분석",
    link: '#',
  },
  {
    img: './../../../assets/img/communityImg/lg.png',
    title: "부상 선수 소식과 복귀 일정",
    link: '#',
  },
  {
    img: './../../../assets/img/communityImg/lg.png',
    title: "다음 경기 티켓 예매 시작",
    link: '#',
  },
];

// ul.team-news-box 요소 선택
const newsList = document.querySelector('.team-news-box');

function renderNewsList() {
  newsList.innerHTML = ''; 
  newsData.forEach(({ img, title, link }) => {
    const a = document.createElement('a');
    a.href = link;


    const li = document.createElement('li');
    li.classList.add('team-news-list');

    const spanImg = document.createElement('span');
    const image = document.createElement('img');
    image.src = img;
    image.alt = title;
    spanImg.appendChild(image);

    const spanTitle = document.createElement('span');
    spanTitle.textContent = title;

    li.appendChild(spanImg);
    li.appendChild(spanTitle);
    a.appendChild(li);
    newsList.appendChild(a);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderNewsList();
});
