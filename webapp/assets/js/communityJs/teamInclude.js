const teamHeaders = {
  loginHeader: {
    doosan : "/headerHtml/doosanHeader.html",
    hanwha : "/headerHtml/hanwhaHeader.html",
    kia : "/headerHtml/kiaHeader.html",
    kiwoom: "/headerHtml/kiwoomHeader.html",
    kt : "/headerHtml/ktHeader.html",
    lg: "/headerHtml/lgHeader.html",
    lotte: "/headerHtml/lotteHeader.html",
    nc: "/headerHtml/ncHeader.html",
    samsung: "/headerHtml/samsungHeader.html",
    ssg: "/headerHtml/ssgHeader.html"
  },
  beforeLoginHeader: {
    doosan: "/beforeLoginHeader/doosan.html",
    hanwha: "/beforeLoginHeader/hanwha.html",
    kia : "/beforeLoginHeader/kia.html",
    kiwoom: "/beforeLoginHeader/kiwoom.html",
    kt : "/beforeLoginHeader/kt.html",
    lg: "/beforeLoginHeader/lg.html",
    lotte: "/beforeLoginHeader/lotte.html",
    nc: "/beforeLoginHeader/nc.html",
    samsung: "/beforeLoginHeader/samsung.html",
    ssg: "/beforeLoginHeader/ssg.html"
  }
};

const teamFooter = {
  doosan: "teamFooter/doosanFooter.html",
  hanwha: "teamFooter/hanwhaFooter.html",
  kia: "teamFooter/kiaFooter.html",
  kiwoom: "teamFooter/kiwoomFooter.html",
  kt: "teamFooter/ktFooter.html",
  lg: "teamFooter/lgFooter.html",
  lotte: "teamFooter/lotteFooter.html",
  nc: "teamFooter/ncFooter.html",
  samsung: "teamFooter/samsungFooter.html",
  ssg: "teamFooter/ssgFooter.html"
};

const teamCSS = {
  loginHeader: {
    doosan : "/webapp/assets/css/communityCss/headerCss/doosanHeader.css",
    hanwha : "/webapp/assets/css/communityCss/headerCss/hanwhaHeader.css",
    kia : "/webapp/assets/css/communityCss/headerCss/kiaHeader.css",
    kiwoom: "/webapp/assets/css/communityCss/headerCss/kiwoomHeader.css",
    kt : "/webapp/assets/css/communityCss/headerCss/ktHeader.css",
    lg: "/webapp/assets/css/communityCss/headerCss/lgHeader.css",
    lotte: "/webapp/assets/css/communityCss/headerCss/lotteHeader.css",
    nc: "/webapp/assets/css/communityCss/headerCss/ncHeader.css",
    samsung: "/webapp/assets/css/communityCss/headerCss/samsungHeader.css",
    ssg: "/webapp/assets/css/communityCss/headerCss/ssgHeader.css"
  },
  footer: {
    doosan: "/webapp/assets/css/communityCss/teamFooter/doosanFooter.css",
    hanwha: "/webapp/assets/css/communityCss/teamFooter/hanwhaFooter.css",
    kia: "/webapp/assets/css/communityCss/teamFooter/kiaFooter.css",
    kiwoom: "/webapp/assets/css/communityCss/teamFooter/kiwoomFooter.css",
    kt: "/webapp/assets/css/communityCss/teamFooter/ktFooter.css",
    lg: "/webapp/assets/css/communityCss/teamFooter/lgFooter.css",
    lotte: "/webapp/assets/css/communityCss/teamFooter/lotteFooter.css",
    nc: "/webapp/assets/css/communityCss/teamFooter/ncFooter.css",
    samsung: "/webapp/assets/css/communityCss/teamFooter/samsungFooter.css",
    ssg: "/webapp/assets/css/communityCss/teamFooter/ssgFooter.css"
  }
};


async function loadHTML(targetId, filePath) {
  try {
    const res = await fetch(filePath);
    if (!res.ok) throw new Error(`Failed to load ${filePath}`);
    const html = await res.text();
    document.getElementById(targetId).innerHTML = html;
  } catch (e) {
    console.error(e);
  }
}

function loadCSS(href) {
  return new Promise((resolve, reject) => {
    if (!href) {
      reject(new Error('CSS 경로가 없습니다.'));
      return;
    }
    if (document.querySelector(`link[href="${href}"]`)) {
      resolve();
      return;
    }
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`Failed to load CSS: ${href}`));
    document.head.appendChild(link);
  });
}

// 로그인 여부와 팀명 확인 ()
function getUserStatus() {
  const loggedIn = localStorage.getItem("loggedIn") === "true";
  const team = localStorage.getItem("team") || "doosan";
  return { loggedIn, team };
}

// 헤더, 푸터, CSS 전부 로딩
async function loadHeaderFooterCSS() {
  const { loggedIn, team } = getUserStatus();

  const headerFile = loggedIn? teamHeaders.loginHeader[team]: teamHeaders.beforeLoginHeader[team];

  const footerFile = teamFooter[team];

  if (!headerFile) {
    console.error(`Header file not found for team: ${team}, loggedIn: ${loggedIn}`);
    return;
  }
  if (!footerFile) {
    console.error(`Footer file not found for team: ${team}`);
    return;
  }

  try {
    // HTML 삽입
    await loadHTML("team-header", `/webapp/app/communityHtml/${headerFile}`);
    await loadHTML("team-footer", `/webapp/app/communityHtml/${footerFile}`);

    // CSS 삽입 (로그인 전후 헤더 CSS 동일하므로 loginHeader만 사용)
    const headerCSS = teamCSS.loginHeader[team];
    const footerCSS = teamCSS.footer[team];

    await Promise.all([
      loadCSS(headerCSS),
      loadCSS(footerCSS)
    ]);
  } catch (e) {
    console.error(e);
  }
}

// DOM이 준비되면 실행
document.addEventListener("DOMContentLoaded", loadHeaderFooterCSS);
