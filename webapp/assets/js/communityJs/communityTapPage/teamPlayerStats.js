// 예시 데이터 
const pitcherData = [
  { rank: 1, name: "폰세", game: 20, complete: 3, shutout: 1, start: 15, win: 10, lose: 5, save: 2, hold: 1, inning: 120.1, run: 40, er: 35, era: 2.62, hit: 100, hr: 10, bb: 20, hbp: 3, so: 120, balk: 0, wp: 1 },
  { rank: 2, name: "김광현", game: 18, complete: 2, shutout: 0, start: 12, win: 8, lose: 4, save: 0, hold: 3, inning: 105.0, run: 50, er: 45, era: 3.86, hit: 110, hr: 15, bb: 25, hbp: 2, so: 95, balk: 1, wp: 0 },
  { rank: 3, name: "원태인", game: 22, complete: 4, shutout: 2, start: 18, win: 12, lose: 6, save: 0, hold: 2, inning: 130.2, run: 35, er: 30, era: 2.07, hit: 90, hr: 8, bb: 18, hbp: 4, so: 140, balk: 0, wp: 2 },
  { rank: 4, name: "화이트", game: 19, complete: 1, shutout: 0, start: 14, win: 9, lose: 5, save: 1, hold: 4, inning: 115.0, run: 45, er: 40, era: 3.13, hit: 95, hr: 12, bb: 22, hbp: 3, so: 110, balk: 1, wp: 1 },
  { rank: 5, name: "앤더슨", game: 17, complete: 0, shutout: 0, start: 13, win: 7, lose: 6, save: 0, hold: 2, inning: 100.1, run: 55, er: 50, era: 4.47, hit: 115, hr: 20, bb: 30, hbp: 2, so: 90, balk: 0, wp: 0 },
  { rank: 6, name: "조병현", game: 21, complete: 3, shutout: 1, start: 16, win: 11, lose: 4, save: 0, hold: 1, inning: 125.0, run: 38, er: 33, era: 2.38, hit: 85, hr: 9, bb: 19, hbp: 5, so: 130, balk: 0, wp: 1 },
  { rank: 7, name: "임찬규", game: 20, complete: 2, shutout: 0, start: 15, win: 10, lose: 5, save: 1, hold: 3, inning: 118.2, run: 42, er: 37, era: 2.80, hit: 98, hr: 11, bb: 21, hbp: 3, so: 115, balk: 0, wp: 0 },
  { rank: 8, name: "송승기", game: 18, complete: 1, shutout: 0, start: 14, win: 8, lose: 6, save: 0, hold: 2, inning: 107.0, run: 48, er: 43, era: 3.61, hit: 105, hr: 14, bb: 26, hbp: 1, so: 100, balk: 1, wp: 0 },
  { rank: 9, name: "김진성", game: 16, complete: 0, shutout: 0, start: 12, win: 6, lose: 7, save: 0, hold: 0, inning: 95.1, run: 60, er: 55, era: 5.20, hit: 120, hr: 22, bb: 32, hbp: 4, so: 85, balk: 0, wp: 1 },
  { rank: 10, name: "곽빈", game: 15, complete: 1, shutout: 0, start: 11, win: 5, lose: 6, save: 0, hold: 1, inning: 90.0, run: 58, er: 53, era: 5.30, hit: 118, hr: 21, bb: 29, hbp: 3, so: 88, balk: 0, wp: 0 }
];

const batterData = [
  { rank: 1, name: "안현민", game: 60, avg: 0.320, pa: 250, ab: 230, rbi: 40, hit: 74, one: 50, two: 15, three: 4, hr: 5, tb: 110, bb: 15, go4: 10, hbp: 2, so: 40, dp: 3, error: 2, sf: 5, sbp: 10, cs2: 3, obp: 0.360, slg: 0.480, ops: 0.840, r: 45, sb2: 12, cs2: 4 },
  { rank: 2, name: "양의지", game: 58, avg: 0.290, pa: 240, ab: 220, rbi: 35, hit: 64, one: 48, two: 10, three: 3, hr: 3, tb: 90, bb: 18, go4: 8, hbp: 1, so: 45, dp: 5, error: 1, sf: 6, sbp: 8, cs2: 2, obp: 0.340, slg: 0.410, ops: 0.750, r: 38, sb2: 9, cs2: 3 },
  { rank: 3, name: "신민재", game: 62, avg: 0.310, pa: 260, ab: 240, rbi: 42, hit: 75, one: 52, two: 13, three: 5, hr: 5, tb: 112, bb: 16, go4: 11, hbp: 3, so: 42, dp: 4, error: 3, sf: 4, sbp: 11, cs2: 2, obp: 0.365, slg: 0.485, ops: 0.850, r: 47, sb2: 13, cs2: 4 },
  { rank: 4, name: "홍창기", game: 59, avg: 0.300, pa: 245, ab: 225, rbi: 38, hit: 68, one: 49, two: 12, three: 4, hr: 3, tb: 95, bb: 14, go4: 9, hbp: 2, so: 39, dp: 3, error: 2, sf: 5, sbp: 9, cs2: 3, obp: 0.350, slg: 0.420, ops: 0.770, r: 42, sb2: 10, cs2: 3 },
  { rank: 5, name: "정수빈", game: 61, avg: 0.325, pa: 255, ab: 235, rbi: 44, hit: 76, one: 53, two: 15, three: 4, hr: 4, tb: 108, bb: 17, go4: 12, hbp: 2, so: 43, dp: 2, error: 1, sf: 6, sbp: 11, cs2: 2, obp: 0.370, slg: 0.460, ops: 0.830, r: 48, sb2: 14, cs2: 3 },
  { rank: 6, name: "오명진", game: 57, avg: 0.285, pa: 235, ab: 215, rbi: 33, hit: 61, one: 45, two: 9, three: 3, hr: 4, tb: 85, bb: 13, go4: 7, hbp: 1, so: 41, dp: 4, error: 2, sf: 4, sbp: 7, cs2: 2, obp: 0.330, slg: 0.395, ops: 0.725, r: 36, sb2: 8, cs2: 3 },
  { rank: 7, name: "노시환", game: 60, avg: 0.315, pa: 250, ab: 230, rbi: 41, hit: 72, one: 51, two: 12, three: 3, hr: 6, tb: 115, bb: 14, go4: 10, hbp: 2, so: 38, dp: 3, error: 1, sf: 5, sbp: 10, cs2: 2, obp: 0.355, slg: 0.500, ops: 0.855, r: 46, sb2: 13, cs2: 4 },
  { rank: 8, name: "손아섭", game: 58, avg: 0.295, pa: 242, ab: 222, rbi: 36, hit: 65, one: 47, two: 11, three: 4, hr: 3, tb: 92, bb: 15, go4: 9, hbp: 1, so: 40, dp: 4, error: 2, sf: 5, sbp: 8, cs2: 3, obp: 0.345, slg: 0.415, ops: 0.760, r: 39, sb2: 9, cs2: 3 },
  { rank: 9, name: "박찬호", game: 56, avg: 0.280, pa: 230, ab: 210, rbi: 31, hit: 59, one: 43, two: 8, three: 2, hr: 6, tb: 88, bb: 12, go4: 7, hbp: 2, so: 42, dp: 5, error: 3, sf: 4, sbp: 7, cs2: 2, obp: 0.325, slg: 0.420, ops: 0.745, r: 35, sb2: 7, cs2: 3 },
  { rank: 10, name: "최원준", game: 59, avg: 0.310, pa: 248, ab: 228, rbi: 39, hit: 70, one: 50, two: 14, three: 3, hr: 4, tb: 105, bb: 16, go4: 11, hbp: 3, so: 39, dp: 3, error: 2, sf: 5, sbp: 9, cs2: 2, obp: 0.355, slg: 0.460, ops: 0.815, r: 44, sb2: 12, cs2: 4 }
];

// 투수 데이터 행 생성 함수
function createPitcherRow(pitcher) {
  const div = document.createElement("div");
  div.className = "team-stats-row";
  div.style.display = "flex";

  const values = [
    pitcher.rank, pitcher.name, pitcher.game, pitcher.complete, pitcher.shutout,
    pitcher.start, pitcher.win, pitcher.lose, pitcher.save, pitcher.hold,
    pitcher.inning, pitcher.run, pitcher.er, pitcher.era.toFixed(2), pitcher.hit,
    pitcher.hr, pitcher.bb, pitcher.hbp, pitcher.so, pitcher.balk, pitcher.wp
  ];

  values.forEach(val => {
    const cell = document.createElement("div");
    cell.textContent = val;
    cell.style.flex = "1";
    cell.style.textAlign = "center";
    div.appendChild(cell);
  });

  return div;
}

// 타자 데이터 행 생성 함수
function createBatterRow(batter) {
  const div = document.createElement("div");
  div.className = "team-stats-row";
  div.style.display = "flex";

  const values = [
    batter.rank, batter.name, batter.game, batter.avg.toFixed(3), batter.pa, batter.ab,
    batter.rbi, batter.hit, batter.one, batter.two, batter.three, batter.hr, batter.tb,
    batter.bb, batter.go4, batter.hbp, batter.so, batter.dp, batter.error, batter.sf,
    batter.sbp, batter.cs2, batter.obp.toFixed(3), batter.slg.toFixed(3), batter.ops.toFixed(3),
    batter.r, batter.sb2, batter.cs2
  ];

  values.forEach(val => {
    const cell = document.createElement("div");
    cell.textContent = val;
    cell.style.flex = "1";
    cell.style.textAlign = "center";
    div.appendChild(cell);
  });

  return div;
}

// 표에 데이터 추가 함수
function loadPlayerStats() {
  const pitcherTable = document.getElementById("team-pitcher-table");
  const batterTable = document.getElementById("team-batter-table");

  // 투수 데이터 넣을 영역 (team-stats-table 내부 두 번째 div, team-stats-row 클래스 아닌 컨테이너 역할)
  const pitcherContainer = pitcherTable.querySelectorAll(".team-stats-row")[1] || null;
  const batterContainer = batterTable.querySelectorAll(".team-stats-row")[1] || null;

  // 만약 team-stats-row가 하나밖에 없으면(헤더만 있으면) 새로 생성해서 붙임
  // 혹은 아예 투수/타자 테이블에 데이터 넣는 영역을 따로 div로 지정해두는게 좋음.
  // 여기서는 두번째 team-stats-row가 데이터 넣을 공간이라 가정

  // 데이터 넣을 div 새로 생성 후 교체하는 방식으로 간단히 처리
  const newPitcherDataDiv = document.createElement("div");
  newPitcherDataDiv.className = "team-stats-data";

  pitcherData.forEach(p => {
    const row = createPitcherRow(p);
    newPitcherDataDiv.appendChild(row);
  });

  if (pitcherContainer) {
    pitcherContainer.replaceWith(newPitcherDataDiv);
  } else {
    pitcherTable.appendChild(newPitcherDataDiv);
  }

  const newBatterDataDiv = document.createElement("div");
  newBatterDataDiv.className = "team-stats-data";

  batterData.forEach(b => {
    const row = createBatterRow(b);
    newBatterDataDiv.appendChild(row);
  });

  if (batterContainer) {
    batterContainer.replaceWith(newBatterDataDiv);
  } else {
    batterTable.appendChild(newBatterDataDiv);
  }
}

// 투수/타자 버튼 클릭 이벤트
function setupTabSwitch() {
  const buttons = document.querySelectorAll(".team-stats-switch button");
  const pitcherTable = document.getElementById("team-pitcher-table");
  const batterTable = document.getElementById("team-batter-table");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      if (button.dataset.tab === "pitcher") {
        pitcherTable.style.display = "block";
        batterTable.style.display = "none";
      } else {
        pitcherTable.style.display = "none";
        batterTable.style.display = "block";
      }
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  loadPlayerStats();
  setupTabSwitch();
});
