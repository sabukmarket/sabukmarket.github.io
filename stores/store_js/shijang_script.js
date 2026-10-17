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
        name: { ko: "시장상회", en: "Shijang Store", cn: "市场商行", ja: "市場（シージャン）商会" },
        cat: "produce",
        catName: { ko: "농특산물·약초", en: "Local Produce & Herbs", cn: "农特产·草药", ja: "農特産品・山菜" },
        desc: {
            ko: "곤드레, 취나물 등 갖가지 지역 나물들과 건어물, 곡물 등 농수산물을 판매해요. 부재 시 뽀삐네상회로 와 주세요!",
            en: "Local Wild Greens & Grains & Dried Seafood. If away, please visit 'Ppoppi's Market'!",
            cn: "本店销售山蓟菜、短果茴芹（翠菜）、短羽毒芹（牛膝草）等各种当地特产野菜，以及海苔、海带、鱿鱼干等农水产干货。如遇店主不在，请移步至‘波比果蔬店’！",
            ja: "コンドゥレ、シナムル、オスリ（ハナウド）など地元の特産山菜をはじめ、海苔、ワカメ、スルメなどの乾物・農水産物を販売しています。留守の際は『ポピネ青果店』へお越しください！"
        },
        specialty: { ko: "(시세에 따라 가격은 변경됩니다.) <br> 곤드레, 취나물, 서리태, 고사리, 더덕, 황태채, 찹쌀, 고춧가루 등. <br>고추부각 12,000원 <br>국산 서리태 20,000원 / 10,000원<br>국산 팥 20,000원 / 10,000원<br>국산 찹쌀 10,000원 / 5,000원<br>고춧가루 20,000원 등.", 
                     en: "(Prices are subject to change depending on market rates.) <br> Gondre (Korean thistle), Chwinamul, Seoritae (black soybeans), Bracken (ferns), Deodeok, Shredded dried pollack, Glutinous rice, Red chili pepper powder, etc. <br> Crispy Chili Chips (Gochu-bugak) 12,000 KRW <br> Korean Seoritae (Black Soybeans) 20,000 KRW / 10,000 KRW<br>Korean Red Beans 20,000 KRW / 10,000 KRW<br>Korean Glutinous Rice 10,000 KRW / 5,000 KRW<br>Red Chili Pepper Powder 20,000 KRW etc.", 
                     cn: "（价格随市价有所变动） <br> 山蓟菜、翠菜、青仁黑豆、蕨菜、沙参、干明太鱼丝、糯米、辣椒粉 等。 <br> 香脆辣椒干 12,000韩元 <br> 国产青仁黑豆 20,000韩元 / 10,000韩元<br>韩国产红豆 20,000韩元 / 10,000韩元<br>韩国产糯米 10,000韩元 / 5,000韩元<br>辣椒粉 20,000韩元 等。", 
                     ja: "（時価により価格は変動する場合がございます） <br> コンドレ（高麗アザミ）、シナムル、ソリテ（黒大豆）、ワラビ、トドック（ツルニンジン）、干しタラ（ファンテ）、もち米、唐辛子粉 など。 <br> 唐辛子ブガク（ピリ辛揚げ菓子） 12,000ウォン <br> 国内産ソリテ（黒豆） 20,000ウォン / 10,000ウォン<br>韓国産 小豆（あずき） 20,000ウォン / 10,000ウォン<br>韓国産 もち米 10,000ウォン / 5,000ウォン<br>唐辛子粉 20,000ウォン など。" },
        query: "shijang.html"
    }
];

let currentLang = 'ko';
let currentFilter = 'produce'; // 초기 필터는 '농특산물·약초'로 설정

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
        const mapNaverUrl = `https://naver.me/GWWsR1tv`;
        const mapSearchUrl = `https://maps.app.goo.gl/FaobDyqWFqJdnrW9A`;

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