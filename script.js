// 결과 유형
// points: 인상을 살리는 메이크업 포인트 (shop은 올리브영 검색어)
const ANIMALS = {
  fox: {
    emoji: "🦊", name: "여우상",
    desc: "눈꼬리가 올라간 날렵한 눈매와 선이 또렷한 얼굴. 무표정일 땐 시크하지만 웃으면 분위기가 확 바뀌는 매력이 있어요.",
    tags: ["올라간 눈꼬리", "날렵한 콧망울", "V라인 턱선"],
    summary: "날렵한 ‘선’을 살리는 게 핵심!",
    points: [
      { title: "아이라인", tip: "눈꼬리 끝에서 위쪽으로 길게 빼 주세요. 원래 눈매 방향을 따라가면 날렵함이 배가돼요.", shop: "아이라이너" },
      { title: "콧대 · 턱선 쉐딩", tip: "콧대 옆과 턱선을 따라 얇게 쉐딩하면 또렷한 얼굴선이 더 살아나요.", shop: "쉐딩" },
      { title: "립 라인", tip: "립 라이너로 입꼬리를 살짝 올려 그리면 특유의 묘한 분위기가 완성돼요.", shop: "립 라이너" },
    ],
  },
  deer: {
    emoji: "🦌", name: "사슴상",
    desc: "크고 맑은 눈과 곧게 뻗은 콧대, 갸름한 얼굴선. 청순하고 단정한 인상이라 첫인상이 깨끗하다는 말을 자주 들어요.",
    tags: ["크고 맑은 눈", "곧은 콧대", "긴 계란형"],
    summary: "맑은 ‘눈’과 깨끗한 피부가 핵심!",
    points: [
      { title: "속눈썹", tip: "아이라인은 최소한으로 하고, 위아래 속눈썹을 길게 올려 큰 눈을 강조해 주세요.", shop: "마스카라" },
      { title: "피부 표현", tip: "두껍게 가리기보다 얇고 촉촉하게 표현해야 청순한 분위기가 살아요.", shop: "쿠션" },
      { title: "애교살 잔펄", tip: "애교살 앞쪽에 잔펄을 살짝 올리면 눈이 더 맑고 촉촉해 보여요.", shop: "애교살 글리터" },
    ],
  },
  dog: {
    emoji: "🐶", name: "강아지상",
    desc: "살짝 처진 순한 눈매와 시원한 웃음. 처음 보는 사람도 편하게 말을 걸게 되는 다정한 인상이에요.",
    tags: ["처진 눈꼬리", "반달 눈웃음", "시원한 입매"],
    summary: "순한 ‘눈꼬리’와 생기가 핵심!",
    points: [
      { title: "처진 아이라인", tip: "검정보다 브라운 라이너로, 눈꼬리를 살짝 아래로 짧게 빼 주세요.", shop: "브라운 아이라이너" },
      { title: "볼 중앙 블러셔", tip: "웃을 때 올라오는 볼 가운데에 크림 블러셔를 톡톡 두드려 생기를 더해 주세요.", shop: "크림 블러셔" },
      { title: "촉촉한 립", tip: "글로스나 물광 틴트로 시원한 입매를 더 밝게 살려 주세요.", shop: "립 글로스" },
    ],
  },
  rabbit: {
    emoji: "🐰", name: "토끼상",
    desc: "동그랗고 또렷한 눈에 작고 동그란 코, 도톰한 입술. 웃을 때 애교살이 올라오는 상큼한 인상이에요.",
    tags: ["또렷한 눈", "작고 동그란 코", "애교살"],
    summary: "‘애교살’과 동그란 이목구비가 핵심!",
    points: [
      { title: "애교살", tip: "애교살 아래에 얇게 음영을 넣고 위에 밝은 펄을 올리면 눈이 더 동그랗게 보여요.", shop: "애교살 펜슬" },
      { title: "코끝 하이라이트", tip: "코끝에 하이라이터를 콕 찍으면 작고 동그란 코가 귀엽게 강조돼요.", shop: "하이라이터" },
      { title: "도톰한 립", tip: "윗입술 가운데를 살짝 오버해서 채우면 토끼 같은 입매가 완성돼요.", shop: "립 틴트" },
    ],
  },
  bear: {
    emoji: "🐻", name: "곰돌이상",
    desc: "도톰한 코끝과 진한 눈썹, 부드럽고 둥근 얼굴선. 듬직하면서도 푸근해서 옆에 있으면 편안해지는 인상이에요.",
    tags: ["도톰한 코끝", "진한 눈썹", "부드러운 얼굴선"],
    summary: "자연스러운 ‘눈썹’과 깊은 음영이 핵심!",
    points: [
      { title: "눈썹 결", tip: "진한 눈썹은 그리기보다 결만 정리해서 자연스럽게 살려 주세요.", shop: "브로우 마스카라" },
      { title: "둥근 음영 눈매", tip: "브라운 섀도우를 눈두덩 전체에 둥글게 펴 바르면 포근한 눈매가 돼요.", shop: "브라운 아이섀도우" },
      { title: "차분한 매트 립", tip: "매트한 립으로 마무리하면 듬직하면서 세련된 분위기가 나요.", shop: "매트 립스틱" },
    ],
  },
  hamster: {
    emoji: "🐹", name: "햄스터상",
    desc: "작고 동글동글한 눈과 볼록한 볼살. 가만히 있어도 귀엽다는 말을 듣는, 보면 볼을 콕 찌르고 싶어지는 인상이에요.",
    tags: ["동글동글한 눈", "볼록한 볼살", "작은 입"],
    summary: "볼록한 ‘볼’을 귀엽게 살리는 게 핵심!",
    points: [
      { title: "볼 블러셔", tip: "볼에서 가장 볼록한 곳에 동그랗게 블러셔를 올려 귀여움을 극대화해 주세요.", shop: "블러셔" },
      { title: "눈 중앙 펄", tip: "눈두덩 가운데에 펄을 콕 찍으면 작은 눈이 동그랗고 반짝여 보여요.", shop: "글리터 섀도우" },
      { title: "블러 립", tip: "작은 입술은 안쪽만 채우고 손가락으로 번지듯 펴 주세요.", shop: "블러 틴트" },
    ],
  },
};

const shopUrl = (query) =>
  "https://www.oliveyoung.co.kr/store/search/getSearchMain.do?query=" + encodeURIComponent(query);

// 문항: 선택지마다 해당 동물에 점수를 줌
const QUESTIONS = [
  {
    q: "거울 속 내 눈매는?",
    options: [
      { text: "눈꼬리가 위로 올라간 길고 날렵한 눈", score: { fox: 2 } },
      { text: "크고 촉촉한 동그란 눈", score: { deer: 2, rabbit: 1 } },
      { text: "눈꼬리가 살짝 내려간 순한 눈", score: { dog: 2, bear: 1 } },
      { text: "작고 동글동글한 눈", score: { hamster: 2, bear: 1 } },
    ],
  },
  {
    q: "옆에서 본 내 코는?",
    options: [
      { text: "콧대가 높고 콧망울이 작고 날렵하다", score: { fox: 2, deer: 1 } },
      { text: "콧대가 곧고 코끝이 얇다", score: { deer: 2 } },
      { text: "코끝이 동그랗고 콧망울이 도톰하다", score: { bear: 2, dog: 1 } },
      { text: "작고 동그란 귀여운 코", score: { rabbit: 2, hamster: 1 } },
    ],
  },
  {
    q: "내 얼굴형에 가장 가까운 건?",
    options: [
      { text: "턱선이 뾰족한 V라인", score: { fox: 2, deer: 1 } },
      { text: "길고 갸름한 계란형", score: { deer: 2 } },
      { text: "볼살이 통통한 동그란 얼굴", score: { hamster: 2, rabbit: 1 } },
      { text: "넓고 부드러운 둥근 얼굴", score: { bear: 2, dog: 1 } },
    ],
  },
  {
    q: "내 입매는?",
    options: [
      { text: "입꼬리가 올라간 얇은 입술", score: { fox: 2 } },
      { text: "작고 도톰한 입술, 웃으면 앞니가 살짝 보인다", score: { rabbit: 2 } },
      { text: "웃을 때 입이 크게 벌어지는 시원한 입", score: { dog: 2, bear: 1 } },
      { text: "작고 오므린 듯한 입", score: { hamster: 2, deer: 1 } },
    ],
  },
  {
    q: "내 눈썹은?",
    options: [
      { text: "끝이 올라간 각진 눈썹", score: { fox: 2 } },
      { text: "길고 부드러운 아치형", score: { deer: 2 } },
      { text: "숱 많고 진한 눈썹", score: { bear: 2, dog: 1 } },
      { text: "옅고 짧은 눈썹", score: { hamster: 2, rabbit: 1 } },
    ],
  },
  {
    q: "내 볼과 광대는?",
    options: [
      { text: "광대가 살짝 도드라지고 볼이 홀쭉하다", score: { fox: 2 } },
      { text: "볼이 매끈하고 군살이 없다", score: { deer: 2 } },
      { text: "볼살이 볼록해서 웃으면 빵빵해진다", score: { hamster: 2, bear: 1 } },
      { text: "웃을 때 애교살과 볼이 동그랗게 올라온다", score: { rabbit: 2, dog: 1 } },
    ],
  },
  {
    q: "활짝 웃을 때 내 눈은?",
    options: [
      { text: "가늘어지면서 묘한 느낌이 난다", score: { fox: 2 } },
      { text: "반달이 되면서 거의 사라진다", score: { dog: 2, hamster: 1 } },
      { text: "크게 뜬 채로 반짝인다", score: { rabbit: 2, deer: 1 } },
      { text: "눈가가 푸근하게 처진다", score: { bear: 2 } },
    ],
  },
];

// 동물마다 받을 수 있는 최대 점수 (선택지 수가 달라도 공평하게 비교하려고)
const MAX = {};
for (const key in ANIMALS) MAX[key] = 0;
for (const { options } of QUESTIONS) {
  for (const key in ANIMALS) {
    MAX[key] += Math.max(...options.map((o) => o.score[key] || 0));
  }
}

const $ = (id) => document.getElementById(id);
const screens = { start: $("start"), quiz: $("quiz"), result: $("result") };
let current = 0;
let answers = [];

function show(name) {
  for (const key in screens) screens[key].hidden = key !== name;
  window.scrollTo(0, 0);
}

function renderQuestion() {
  const { q, options } = QUESTIONS[current];
  $("progress-text").textContent = `${current + 1} / ${QUESTIONS.length}`;
  $("progress-fill").style.width = `${((current + 1) / QUESTIONS.length) * 100}%`;
  $("question").textContent = `Q${current + 1}. ${q}`;
  $("back-btn").style.visibility = current === 0 ? "hidden" : "visible";

  const list = $("options");
  list.innerHTML = "";
  options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option" + (answers[current] === i ? " selected" : "");
    btn.textContent = opt.text;
    btn.addEventListener("click", () => choose(i));
    list.appendChild(btn);
  });
}

function choose(i) {
  answers[current] = i;
  if (current < QUESTIONS.length - 1) {
    current += 1;
    renderQuestion();
  } else {
    showResult();
  }
}

function computeResult() {
  const raw = {};
  for (const key in ANIMALS) raw[key] = 0;
  answers.forEach((choice, qi) => {
    const { score } = QUESTIONS[qi].options[choice];
    for (const key in score) raw[key] += score[key];
  });
  return Object.keys(ANIMALS)
    .map((key) => ({ key, pct: Math.round((raw[key] / MAX[key]) * 100) }))
    .sort((a, b) => b.pct - a.pct);
}

function showResult() {
  const ranking = computeResult();
  const top = ANIMALS[ranking[0].key];
  $("result-emoji").textContent = top.emoji;
  $("result-name").textContent = top.name;
  $("result-desc").textContent = top.desc;
  $("result-tags").innerHTML = top.tags.map((t) => `<span class="tag">#${t}</span>`).join("");
  $("makeup-summary").textContent = top.summary;
  $("makeup-points").innerHTML = top.points
    .map(({ title, tip, shop }, i) => `
      <div class="point">
        <span class="point-num">${i + 1}</span>
        <div class="point-body">
          <h4>${title}</h4>
          <p class="point-tip">${tip}</p>
          <a class="shop-link" href="${shopUrl(shop)}" target="_blank" rel="noopener">
            올리브영에서 ${shop} 보기 →
          </a>
        </div>
      </div>`)
    .join("");
  $("result-bars").innerHTML = ranking
    .map(({ key, pct }) => `
      <div class="bar-row">
        <span class="bar-label">${ANIMALS[key].emoji} ${ANIMALS[key].name}</span>
        <span class="bar"><span class="bar-fill" style="width:${pct}%"></span></span>
        <span class="bar-pct">${pct}%</span>
      </div>`)
    .join("");
  show("result");
}

$("start-btn").addEventListener("click", () => {
  current = 0;
  answers = [];
  renderQuestion();
  show("quiz");
});

$("back-btn").addEventListener("click", () => {
  if (current > 0) {
    current -= 1;
    renderQuestion();
  }
});

$("retry-btn").addEventListener("click", () => show("start"));

$("share-btn").addEventListener("click", async () => {
  const url = location.href.split("#")[0];
  const text = `나는 ${$("result-name").textContent}! 너는 어떤 동물상이야?`;
  try {
    if (navigator.share) {
      await navigator.share({ title: "동물상 테스트", text, url });
      return;
    }
    await navigator.clipboard.writeText(`${text} ${url}`);
    $("share-btn").textContent = "링크 복사 완료!";
    setTimeout(() => ($("share-btn").textContent = "친구에게 공유하기"), 2000);
  } catch (e) {}
});

// 시작 화면에 동물 미리보기
$("animal-preview").textContent = Object.values(ANIMALS).map((a) => a.emoji).join(" ");

// 다크 모드 전환 (선택한 테마는 브라우저에 저장)
const toggle = $("theme-toggle");
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  toggle.textContent = theme === "dark" ? "☀️" : "🌙";
}
let saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) {}
applyTheme(saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
toggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  try { localStorage.setItem("theme", next); } catch (e) {}
});
