// Archive 웹사이트 JavaScript
class NewsArchive {
    constructor() {
        this.currentCategory = 'politics';
        this.newsData = [];
        this.filteredNews = [];
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadNews();
        this.setupAutoRefresh();
    }

    setupEventListeners() {
        // 카테고리 탭 이벤트 리스너
        const tabButtons = document.querySelectorAll('.tab-btn');
        tabButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchCategory(e.target.closest('.tab-btn').dataset.category);
            });
        });

        // 클릭 이벤트 위임 (뉴스 아이템 클릭)
        document.getElementById('newsList').addEventListener('click', (e) => {
            const newsItem = e.target.closest('.news-item');
            if (newsItem) {
                const link = newsItem.querySelector('a').href;
                window.open(link, '_blank');
            }
        });
    }

    switchCategory(category) {
        // 이전 활성 탭 비활성화
        document.querySelector('.tab-btn.active').classList.remove('active');
        
        // 새 탭 활성화
        document.querySelector(`[data-category="${category}"]`).classList.add('active');
        
        this.currentCategory = category;
        this.filterAndDisplayNews();
    }

    async loadNews() {
        try {
            // 로딩 상태 표시
            this.showLoading(true);
            
            // 실제 RSS 피드 대신 샘플 데이터 사용 (CORS 이슈로 인해)
            // 실제 운영 시에는 서버 사이드에서 RSS 피드를 가져와야 합니다
            await this.fetchSampleNews();
            
            this.showLoading(false);
            this.filterAndDisplayNews();
        } catch (error) {
            console.error('뉴스 로딩 오류:', error);
            this.showLoading(false);
            this.showError('뉴스를 불러오는 중 오류가 발생했습니다.');
        }
    }

    async fetchSampleNews() {
        // 실제 RSS 피드 대신 샘플 뉴스 데이터 생성
        // 이는 데모 목적이며, 실제 운영 시에는 서버에서 RSS 피드를 파싱해야 합니다
        const sampleNews = [
            {
                title: "미국 대선 후보자 토론회, 주요 이슈 논의",
                summary: "정치적 이슈와 정책 방향에 대한 치열한 논의가 이어졌습니다.",
                source: "CNN",
                date: "2024-01-15",
                category: "politics",
                url: "https://example.com/news1"
            },
            {
                title: "유럽연합, 새로운 경제 정책 발표",
                summary: "EU 회원국들의 경제 회복을 위한 포괄적인 정책 패키지를 발표했습니다.",
                source: "로이터",
                date: "2024-01-15",
                category: "economy",
                url: "https://example.com/news2"
            },
            {
                title: "월드컵 예선, 아시아 지역 경기 결과",
                summary: "아시아 지역 예선에서 예상 밖의 결과들이 나오며 팬들을 놀라게 했습니다.",
                source: "BBC",
                date: "2024-01-15",
                category: "sports",
                url: "https://example.com/news3"
            },
            {
                title: "한국 정부, 부동산 정책 개편 발표",
                summary: "주택 시장 안정화를 위한 새로운 정책 방향을 제시했습니다.",
                source: "교도통신",
                date: "2024-01-15",
                category: "politics",
                url: "https://example.com/news4"
            },
            {
                title: "글로벌 주식시장, 기술주 중심으로 상승",
                summary: "AI 기술 발전에 대한 기대감으로 기술주들이 강세를 보이고 있습니다.",
                source: "블룸버그",
                date: "2024-01-15",
                category: "economy",
                url: "https://example.com/news5"
            },
            {
                title: "올림픽 준비, 도쿄 2024 대회 준비 현황",
                summary: "2024 도쿄 올림픽을 위한 준비 작업이 순조롭게 진행되고 있습니다.",
                source: "NHK 뉴스",
                date: "2024-01-15",
                category: "sports",
                url: "https://example.com/news6"
            },
            {
                title: "국제 외교, 주요국 정상회담 개최",
                summary: "글로벌 이슈 해결을 위한 다자간 협의가 진행되었습니다.",
                source: "뉴욕 타임스",
                date: "2024-01-15",
                category: "politics",
                url: "https://example.com/news7"
            },
            {
                title: "중국 경제, 새로운 성장 전략 발표",
                summary: "디지털 경제와 녹색 성장에 중점을 둔 새로운 경제 정책을 발표했습니다.",
                source: "신화통신",
                date: "2024-01-15",
                category: "economy",
                url: "https://example.com/news8"
            },
            {
                title: "프리미어리그, 시즌 중반 리그 순위 변화",
                summary: "예상 밖의 팀들이 상위권을 차지하며 리그의 흥미를 더하고 있습니다.",
                source: "더 타임즈",
                date: "2024-01-15",
                category: "sports",
                url: "https://example.com/news9"
            },
            {
                title: "러시아-우크라이나 분쟁, 평화 협상 진전",
                summary: "국제 사회의 중재로 평화 협상이 새로운 단계에 진입했습니다.",
                source: "이타르타스",
                date: "2024-01-15",
                category: "politics",
                url: "https://example.com/news10"
            },
            {
                title: "일본 은행, 통화 정책 방향성 발표",
                summary: "경제 회복과 물가 안정을 위한 새로운 통화 정책 방향을 제시했습니다.",
                source: "교도통신",
                date: "2024-01-15",
                category: "economy",
                url: "https://example.com/news11"
            },
            {
                title: "NBA 올스타전, 팬들의 뜨거운 관심",
                summary: "2024 NBA 올스타전에 대한 팬들의 기대감이 높아지고 있습니다.",
                source: "ESPN",
                date: "2024-01-15",
                category: "sports",
                url: "https://example.com/news12"
            }
        ];

        // 실제 RSS 피드에서 가져온 것처럼 약간의 지연 추가
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        this.newsData = sampleNews;
    }

    filterAndDisplayNews() {
        // 현재 카테고리에 맞는 뉴스만 필터링
        this.filteredNews = this.newsData.filter(news => 
            news.category === this.currentCategory
        );

        this.displayNews();
    }

    displayNews() {
        const newsList = document.getElementById('newsList');
        const noNews = document.getElementById('noNews');

        if (this.filteredNews.length === 0) {
            newsList.style.display = 'none';
            noNews.style.display = 'block';
            return;
        }

        newsList.style.display = 'grid';
        noNews.style.display = 'none';

        // 뉴스 아이템들을 HTML로 렌더링
        newsList.innerHTML = this.filteredNews.map(news => `
            <div class="news-item">
                <a href="${news.url}" class="news-link" target="_blank">
                    <h3 class="news-title">${news.title}</h3>
                    <p class="news-summary">${news.summary}</p>
                    <div class="news-meta">
                        <span class="news-source">${news.source}</span>
                        <span class="news-date">${this.formatDate(news.date)}</span>
                    </div>
                </a>
            </div>
        `).join('');
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    showLoading(show) {
        const loading = document.getElementById('loading');
        const newsList = document.getElementById('newsList');
        const noNews = document.getElementById('noNews');

        if (show) {
            loading.style.display = 'block';
            newsList.style.display = 'none';
            noNews.style.display = 'none';
        } else {
            loading.style.display = 'none';
        }
    }

    showError(message) {
        const newsList = document.getElementById('newsList');
        newsList.innerHTML = `
            <div class="error-message">
                <span class="icon icon-newspaper">⚠️</span>
                <p>${message}</p>
                <button onclick="location.reload()">다시 시도</button>
            </div>
        `;
    }

    setupAutoRefresh() {
        // 5분마다 뉴스 자동 새로고침
        setInterval(() => {
            this.loadNews();
        }, 5 * 60 * 1000);
    }
}

// 페이지 로드 시 NewsArchive 인스턴스 생성
document.addEventListener('DOMContentLoaded', () => {
    try {
        window.newsArchive = new NewsArchive();
    } catch (error) {
        console.error('NewsArchive 초기화 오류:', error);
        showFallbackMessage('뉴스 아카이브를 초기화하는 중 오류가 발생했습니다.');
    }
});

// 폴백 메시지 표시
function showFallbackMessage(message) {
    const newsContainer = document.querySelector('.news-container');
    if (newsContainer) {
        newsContainer.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #666;">
                <h3>⚠️ 시스템 오류</h3>
                <p>${message}</p>
                <button onclick="location.reload()" style="padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    페이지 새로고침
                </button>
            </div>
        `;
    }
}

// 에러 처리
window.addEventListener('error', (e) => {
    console.error('JavaScript 오류:', e.error);
    showFallbackMessage('JavaScript 실행 중 오류가 발생했습니다.');
});

// 네트워크 상태 모니터링
window.addEventListener('online', () => {
    console.log('네트워크 연결됨');
    // 네트워크 복구 시 자동 새로고침
    if (window.newsArchive) {
        window.newsArchive.loadNews();
    }
});

window.addEventListener('offline', () => {
    console.log('네트워크 연결 끊김');
    showFallbackMessage('네트워크 연결이 끊어졌습니다. 연결을 확인해 주세요.');
});


