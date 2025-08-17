# Archive - 세계 뉴스 아카이브

세계 주요 뉴스사 30곳의 RSS 피드를 활용하여 실시간 뉴스를 보여주는 아카이브 웹사이트입니다.

## 🌟 주요 기능

- **실시간 뉴스 수집**: 세계 주요 뉴스사의 최신 뉴스를 실시간으로 가져옵니다
- **카테고리별 분류**: 정치, 경제, 스포츠 세 가지 카테고리로 뉴스를 분류합니다
- **뉴스 요약**: 각 뉴스의 제목과 내용을 한 줄로 요약하여 표시합니다
- **원본 링크**: 요약된 뉴스를 클릭하면 해당 뉴스 원본으로 바로 이동합니다
- **반응형 디자인**: PC와 모바일 환경에서 모두 최적화된 사용자 경험을 제공합니다

## 🗞️ 뉴스 소스

다음 30개 주요 뉴스사의 RSS 피드를 활용합니다:

- 로이터 (Reuters)
- AP (Associated Press)
- BBC
- 뉴욕 타임스 (The New York Times)
- 월스트리트 저널 (The Wall Street Journal)
- 블룸버그 (Bloomberg)
- AFP (Agence France-Presse)
- 교도통신 (Kyodo News)
- 신화통신 (Xinhua News Agency)
- 가디언 (The Guardian)
- 르몽드 (Le Monde)
- 알자지라 (Al Jazeera)
- 이타르타스 (ITAR-TASS)
- 인디펜던트 (The Independent)
- 폭스 뉴스 (Fox News)
- CNN
- 포브스 (Forbes)
- 더 이코노미스트 (The Economist)
- 파이낸셜 타임즈 (Financial Times)
- 더 타임즈 (The Times)
- 블룸버그 통신 (Bloomberg News)
- 워싱턴 포스트 (The Washington Post)
- 르피가로 (Le Figaro)
- 스푸트니크 통신 (Sputnik News)
- NHK 뉴스 (NHK News)

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **디자인**: 반응형 웹 디자인, CSS Grid, Flexbox
- **폰트**: Inter (Google Fonts)
- **아이콘**: Font Awesome 6
- **호스팅**: 정적 웹사이트 (GitHub Pages, Netlify 등에서 호스팅 가능)

## 🚀 시작하기

### 1. 프로젝트 클론
```bash
git clone [repository-url]
cd Archive
```

### 2. 로컬에서 실행
```bash
# 간단한 HTTP 서버 실행 (Python 3)
python -m http.server 8000

# 또는 Node.js 사용
npx serve .

# 또는 Live Server 확장 프로그램 사용 (VS Code)
```

### 3. 브라우저에서 확인
```
http://localhost:8000
```

## 📱 사용법

1. **카테고리 선택**: 상단의 정치, 경제, 스포츠 탭을 클릭하여 원하는 카테고리의 뉴스를 확인합니다
2. **뉴스 읽기**: 각 뉴스의 제목과 요약을 확인합니다
3. **원본 이동**: 뉴스 아이템을 클릭하면 해당 뉴스의 원본 페이지로 이동합니다
4. **자동 새로고침**: 뉴스는 5분마다 자동으로 새로고침됩니다

## 🔧 개발자 정보

### 프로젝트 구조
```
Archive/
├── index.html          # 메인 HTML 파일
├── styles.css          # CSS 스타일시트
├── script.js           # JavaScript 기능
└── README.md           # 프로젝트 설명서
```

### 주요 클래스 및 함수

- **NewsArchive**: 메인 뉴스 아카이브 클래스
- **loadNews()**: 뉴스 데이터 로딩
- **filterAndDisplayNews()**: 카테고리별 뉴스 필터링 및 표시
- **categorizeNews()**: 뉴스 카테고리 자동 분류
- **summarizeNews()**: 뉴스 내용 요약

## 🌐 실제 운영 시 고려사항

현재 데모 버전에서는 샘플 뉴스 데이터를 사용하고 있습니다. 실제 운영 시에는 다음 사항을 고려해야 합니다:

### 1. CORS 이슈 해결
- 서버 사이드에서 RSS 피드를 가져와야 합니다
- Node.js, Python, PHP 등의 백엔드 서버 구축 필요

### 2. RSS 피드 파싱
```javascript
// 실제 RSS 피드 파싱 예시
async function parseRSSFeed(rssUrl) {
    const response = await fetch(rssUrl);
    const text = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "text/xml");
    // ... 파싱 로직
}
```

### 3. 데이터베이스 연동
- 뉴스 데이터 저장 및 캐싱
- 사용자 설정 및 히스토리 관리

### 4. 성능 최적화
- 이미지 lazy loading
- 뉴스 데이터 캐싱
- CDN 활용

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의

프로젝트에 대한 문의사항이나 제안사항이 있으시면 이슈를 생성해 주세요.

---

**Archive** - 세계 뉴스의 모든 것을 한 곳에서
