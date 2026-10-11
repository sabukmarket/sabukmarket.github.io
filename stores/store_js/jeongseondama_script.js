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
        cat_food: "カフェ・デザート",
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
        name: { ko: "정선담아", en: "Jeongsundama", cn: "盛满旌善", ja: "旌善(チョン・ソン)ダマ" },
        cat: "food",
       catName: { ko: "카페·먹거리", en: "Cafes & Desserts", cn: "咖啡厅·小吃", ja: " カフェ・デザート" },
        desc: {
            ko: "청년몰 1층에서 기다리고 있습니다. 강원도 특산물로 만든 아이스크림과 당고를 즐겨 보세요!",
            en: "We are waiting for you on the ground floor of the Youth Mall. Enjoy ice cream and dango made with local specialties!",
            cn: "我们在青年商场的一楼等着您。享受用江原道特产制作的冰淇淋和团子吧！",
            ja: "青年モールの1階でお待ちしております。江原道の特産品で作られたアイスクリームと団子をお楽しみください。"
        },
        specialty: { ko: "초당옥수수 아이스크림 콘 6,800원 / 컵 6,500원<br> 정선 감자 아이스크림 5,000원 <br> 벌꿀집 요거트 아이스크림 5,800원  <br>꿀당고 3,500원 <br>딸기 당고 4,500원<br>두바이 초코쉘 요거트 아이스크림 7,800원<br>샤인머스켓 당고4,500원<br>쑥인절미 당고 3,800원<br>아메리카노 HOT 3,500원 / ICED 4,000원<br>아메리카노 디카페인 HOT 3,800원 / ICED 4,300원<br>카페라떼 HOT 4,000원 / ICED 4,500원<br>바닐라라떼 HOT 4,500원 ICED 5,000원<br>딸기 라떼 5,000원 <br>복숭아 아이스티 4,000원", 
                     en: "Sweet Corn Soft-Serve Ice Cream Cone 6,800 KRW / Cup 6,500 KRW<br>Jeongseon Potato Soft-Serve Ice Cream 5,000 KRW<br>Honeycomb Yogurt Soft-Serve Ice Cream 5,800 KRW<br>Honey Dango 3,500 KRW<br>Strawberry Dango 4,500 KRW<br>Dubai Chocolate Shell Yogurt Ice Cream 7,800 KRW<br>Shine Muscat Dango 4,500 KRW<br>Mugwort Injeolmi Dango 3,800 KRW<br>Americano HOT 3,500 KRW / ICED 4,000 KRW<br>Decaf Americano HOT 3,800 KRW / ICED 4,300 KRW<br>Café Latte HOT 4,000 KRW / ICED 4,500 KRW<br>Vanilla Latte HOT 4,500 KRW / ICED 5,000 KRW<br>Strawberry Latte 5,000 KRW<br>Peach Iced Tea 4,000 KRW", 
                     cn: "草堂超甜玉米冰淇淋 甜筒 6,800韩元 / 纸杯 6,500韩元<br>旌善土豆冰淇淋 5,000韩元<br>蜂巢酸奶冰淇淋 5,800韩元<br>蜂蜜团子 3,500韩元<br>草莓团子 4,500韩元<br>迪拜脆皮巧克力酸奶冰淇淋 7,800韩元<br>阳光玫瑰团子 4,500韩元<br>艾草豆粉团子 3,800韩元<br>美式咖啡 热 3,500韩元 / 冰 4,000韩元<br>低因美式咖啡 热 3,800韩元 / 冰 4,300韩元<br>拿铁咖啡 热 4,000韩元 / 冰 4,500韩元<br>香草拿铁 热 4,500韩元 / 冰 5,000韩元<br>草莓拿铁 5,000韩元<br>水蜜桃冰茶 4,000韩元", 
                     ja: "チョダン超糖トウモロコシアイス コーン 6,800ウォン / カップ 6,500ウォン<br>チョンソン（旌善）ジャガイモアイス 5,000ウォン<br>コムハニー（巣蜜）ヨーグルトアイス 5,800ウォン<br>ハニー団子 3,500ウォン<br>いちご団子 4,500ウォン<br>ドバイチョコシェル ヨーグルトアイス 7,800ウォン<br>シャインマスカット団子 4,500ウォン<br>よもぎインジョルミ団子 3,800ウォン<br>アメリカーノ HOT 3,500ウォン / ICED 4,000ウォン<br>ディカフェ アメリカーノ HOT 3,800ウォン / ICED 4,300ウォン<br>カフェラテ HOT 4,000ウォン / ICED 4,500ウォン<br>バニララテ HOT 4,500ウォン / ICED 5,000ウォン<br>いちごラテ 5,000ウォン<br>ピーチアイスティー 4,000ウォン" },
        query: "jeongseondama.html"
    }
];

let currentLang = 'ko';
let currentFilter = 'food'; // 초기 필터는 'food'로 설정

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
        const mapNaverUrl = `https://naver.me/x0XZ7dM8`;
        const mapSearchUrl = `https://maps.app.goo.gl/y7mLQrbvoBq74Ma67`;

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