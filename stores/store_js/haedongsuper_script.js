const i18nData = {
    ko: {
        cat_restaurants: "식당",
        cat_food: "카페·먹거리",
        cat_produce: "농특산물·약초",
        cat_general: "생활·잡화",
        view_map_btn: "구글 지도에서 보기",
        view_naver_map_btn: "네이버 지도에서 보기",
        footer_copy: "2026 사북시장. All rights reserved.",
        footer_sub: "정선 고원의 넉넉한 인심과 향토의 맛이 함께하는 정선 사북시장 공식 홈페이지입니다."
    },
    en: {
        cat_restaurants: "Restaurants",
        cat_food: "Cafes & Desserts",
        cat_produce: "Local Produce & Herbs",
        cat_general: "Daily Goods",
        view_map_btn: "View on Google Maps",
        view_naver_map_btn: "View on Naver Maps",
        footer_copy: "2026 Sabuk Market. All rights reserved.",
        footer_sub: "Official website of Jeongseon Sabuk Market, filled with rich highland flavor and warm hospitality."
    },
    cn: {
        cat_restaurants: "餐厅",
        cat_food: "咖啡厅·小吃",
        cat_produce: "农特产·草药",
        cat_general: "生活·百货",
        view_map_btn: "在Google地图上查看",
        view_naver_map_btn: "在Naver地图上查看",
        footer_copy: "2026 舍北市场. All rights reserved.",
        footer_sub: "蕴含旌善高原淳朴人情与地道风味的舍北市场官方主页。"
    },
    ja: {
        cat_restaurants: "食堂",
        cat_food: "カフェ・スイーツ",
        cat_produce: "農特産品・山菜",
        cat_general: "生活・雑貨",
        view_map_btn: "Google地図で表示",
        view_naver_map_btn: "Naver地図で表示",
        footer_copy: "2026 舎北市場. All rights reserved.",
        footer_sub: "旌善高原の温かな人情と郷土の味が息づく舎北市場の公式ホームページです。"
    }
};

// 점포 데이터 (식당, 농특산물, 잡화)
const marketStores = [
       {
        id: 1,
        name: { ko: "해동슈퍼", en: "Haedong Grocery Store", cn: "海东超市", ja: "ハエドンスーパー" },
        cat: "general",
        catName: { ko: "생활·잡화", en: "Daily Goods", cn: "生活·百货", ja: "生活・雑貨" },
        desc: {
            ko: "무엇이든 구할 수 있는 시장 내 생활용품 전문점. 다양한 잡화와 간식거리를 판매합니다.",
            en: "A grocery store where you can find everything you need. We sell a variety of daily goods and snacks.",
            cn: "市场内的舒适超市，您可以找到所需的一切。我们销售各种日用品和零食。",
            ja: "市場内での快適なスーパーマーケット。様々な日用品とスナックを販売中。"
        },
        specialty: { ko: "라면 1,000~2,000원 &nbsp;&nbsp;&nbsp; 음료 1,000~3,000원 <br> 스낵류 1,000~3,000원 &nbsp;&nbsp;&nbsp; 비누·세제 1,000~10,000원", 
                     en: "Ramyeon 1,000-2,000KRW &nbsp;&nbsp;&nbsp; Beverages 1,000-3,000KRW <br> Snacks 1,000-3,000KRW &nbsp;&nbsp;&nbsp; Soap & Cleaning Supplies 1,000-10,000KRW", 
                     cn: "方便面 1,000-2,000韩元 &nbsp;&nbsp;&nbsp; 饮料 1,000-3,000韩元 <br> 零食 1,000-3,000韩元 &nbsp;&nbsp;&nbsp; 肥皂·清洁用品 1,000-10,000韩元", 
                     ja: "ラーメン 1,000-2,000 &nbsp;&nbsp;&nbsp; ビバレッジ 1,000-3,000 <br> スナック 1,000-3,000 &nbsp;&nbsp;&nbsp; 歯磨き粉·清掃用品 1,000-10,000" },
        query: "사북 해동슈퍼"
    }
];

let currentLang = 'ko';
let currentFilter = 'general'; // 초기 필터는 '생활·잡화'로 설정

// 언어 변경 함수
function setLanguage(lang) {
    if (!i18nData[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;

    // 버튼 UI 활성화 상태 업데이트
    document.querySelectorAll('#lang-switcher .lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.className = "lang-btn px-2.5 py-1 rounded-lg transition-all active-lang bg-white text-stone-900 shadow-sm font-bold";
        } else {
            btn.className = "lang-btn px-2.5 py-1 rounded-lg text-stone-600 hover:text-stone-900 transition-all";
        }
    });

    // 정적 텍스트 번역 적용
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (i18nData[lang][key]) {
            el.textContent = i18nData[lang][key];
        }
    });

    // 점포 카드 재렌더링
    renderStores();
}

// 카테고리 필터링
function filterStores(category) {
    currentFilter = category;
    document.querySelectorAll('.cat-btn').forEach(btn => {
        if (btn.dataset.category === category) {
            btn.className = "cat-btn px-3 py-1.5 rounded-lg transition-all bg-white text-stone-900 shadow-sm font-bold";
        } else {
            btn.className = "cat-btn px-3 py-1.5 rounded-lg text-stone-600 hover:text-stone-900 transition-all";
        }
    });
    renderStores();
}

// 점포 카드 렌더링
function renderStores() {
    const grid = document.getElementById('store-grid');
    if (!grid) return;

    const filtered = currentFilter === 'all' 
        ? marketStores 
        : marketStores.filter(s => s.cat === currentFilter);

    grid.innerHTML = filtered.map(store => {
        const storeName = store.name[currentLang] || store.name['ko'];
        const catName = store.catName[currentLang] || store.catName['ko'];
        const desc = store.desc[currentLang] || store.desc['ko'];
        const specialty = store.specialty[currentLang] || store.specialty['ko'];
        const mapNaverUrl = `https://naver.me/GSQyZ5VH`;
        const mapSearchUrl = `https://maps.app.goo.gl/bXoKaeD1tBywGqse7`;

        return `
            <div class="bg-[#FAF7F2] rounded-2xl p-6 border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                    <div class="flex items-center justify-between gap-2 mb-3">
                        <span class="px-2.5 py-1 rounded-full bg-white text-stone-700 text-xs font-semibold border border-stone-200">
                            ${catName}
                        </span>
                    </div>

                    <h3 class="text-xl font-bold font-serif text-stone-900 group-hover:text-brand-500 transition-colors">
                        ${storeName}
                    </h3>

                    <p class="text-xs text-stone-600 mt-2.5 leading-relaxed">
                        ${desc}
                    </p>

                    <div class="mt-4 p-3 bg-white rounded-xl border border-stone-200/70 text-xs">
                        <span class="text-stone-400 font-medium block text-[11px] mb-1">대표 메뉴 및 상품</span>
                        <span class="text-stone-800 font-semibold">${specialty}</span>
                    </div>
                </div>

                <div class="pt-5 mt-5 border-t border-stone-200 flex items-center justify-end">
                    <a href="${mapSearchUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium transition-colors">
                        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                        <span>${i18nData[currentLang].view_map_btn}</span>
                    </a>
                    <a href="${mapNaverUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium transition-colors ml-2">
                        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                        <span>${i18nData[currentLang].view_naver_map_btn}</span>
                    </a>
                
                </div>
            </div>
        `;
    }).join('');
}

// 모바일 메뉴 토글
function setupMobileNav() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });
}

// 초기화
window.addEventListener('DOMContentLoaded', () => {
    renderStores();
    setupMobileNav();
});