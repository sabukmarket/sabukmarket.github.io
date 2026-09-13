
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
        cat_food: " カフェ・デザート",
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
        name: { ko: "박대감화로구이", en: "Park Daegam Korean BBQ", cn: "朴大监炭火烤肉", ja: "パッテガム火鉢焼き(ファログイ)" },
        cat: "restaurants",
        catName: { ko: "식당", en: "Restaurant", cn: "特色餐厅", ja: "郷土料理店" },
        desc: {
            ko: "지글지글 화로 위 돼지갈비와 LA갈비를 푸짐하게 즐길 수 있는 고깃집입니다. 시장 입구에 있어요.",
            en: "A Korean BBQ restaurant offering delicious pork ribs and LA ribs on a sizzling hot plate. Located at the entrance of the market.",
            cn: "在炭火烤盘上享用美味的猪排和洛杉矶排骨的烤肉店。位于市场入口处。",
            ja: "ジューシーな豚カルビとLAカルビを炭火で楽しめる焼肉店です。市場の入口にあります。"
        },
        specialty: { ko: "돼지 왕갈비 20,000원 &nbsp;&nbsp;&nbsp; 양념 소갈비살 24,000원  <bt> LA 양념갈비 27,000원 &nbsp;&nbsp;&nbsp; 냉면 8,000원 ",
             en: "Pork Ribs 20,000 KRW &nbsp;&nbsp;&nbsp; Marinated Beef Ribs 24,000 KRW <bt> LA Marinated Ribs 27,000 KRW &nbsp;&nbsp;&nbsp; Nengmyeon (Cold Noodles) 8,000 KRW ", 
             cn: "猪排 20,000韩元 &nbsp;&nbsp;&nbsp; 腌制牛排 24,000韩元 <bt> 洛杉矶腌制排骨 27,000韩元 &nbsp;&nbsp;&nbsp; 冷面 8,000韩元 ", 
             ja: "豚カルビ 20,000ウォン &nbsp;&nbsp;&nbsp; 腌製牛肉カルビ 24,000ウォン <bt> LA 腌製カルビ 27,000ウォン &nbsp;&nbsp;&nbsp; 冷麺 8,000ウォン " },
        query: "parkdaegam.html"
    }
];

let currentLang = 'ko';
let currentFilter = 'restaurants'; // 초기 필터는 '식당'으로 설정

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
        const mapNaverUrl = `https://naver.me/Fivegom8`;
        const mapSearchUrl = `https://maps.app.goo.gl/vRQkZGnwc2JxFzjW6`;

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