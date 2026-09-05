// 4개 국어 번역 딕셔너리 (KO, EN, CN, JA)
const i18nData = {
    ko: {
        nav_home: "Home",
        nav_stores: "Stores",
        nav_events: "Events",
        nav_history: "History",
        nav_contact: "Contact",
        home_pill: "강원특별자치도 정선군 대표 전통시장",
        home_title_1: "정선 사북시장",
        home_title_2: "Sabuk Traditional Market",
        home_desc: "해발 700m 청정 고원의 맑은 바람과 넉넉한 인심이 반겨주는 정선 사북시장입니다.",
        home_btn_stores: "시장 점포 둘러보기",
        home_btn_events: "축제 및 행사 안내",
        home_map_title: "사북시장 안내 지도 (Google Map)",
        store_tag: "DISCOVER SABUK STORES",
        store_heading: "시장 내 가게들 목록",
        store_subtext: "사북시장의 정겨운 맛과 신선한 지역 특산물을 만나보세요.",
        cat_all: "전체보기",
        cat_food: "식당·먹거리",
        cat_produce: "농특산물·약초",
        cat_general: "생활·잡화",
        view_map_btn: "위치 보기",
        event_tag: "FESTIVALS & ACTIVITIES",
        event_heading: "사북시장 행사 및 축제",
        event_subtext: "고원의 밤을 밝히는 야시장과 강원도 대표 먹거리 감자·옥수수가 함께하는 사북만의 특별한 축제에 여러분을 초대합니다.",
        ev1_badge: "정례 야시장",
        ev1_period: "매주 금·토 저녁 18:00 ~ 23:00",
        ev1_title: "사북 야시장",
        ev1_desc: "해가 진 후 시원한 고원 바람을 맞으며 즐기는 사북시장의 대표 야간 관광 콘텐츠입니다. 지역 상인들이 직접 선보이는 메밀전병, 연탄구이 요리, 수제 맥주 등 풍성한 야식과 거리 버스킹 공연이 어우러집니다.",
        ev1_place: "사북시장 중앙 통로 및 아케이드 일원",
        ev1_programs: "야식 먹거리 부스, 야간 플리마켓, 거리 음악공연",
        ev1_note: "계절 및 기상 상황에 따라 운영 일정이 변경될 수 있습니다.",
        ev2_badge: "지역 대표 축제",
        ev2_period: "매년 여름 수확기 (7~8월 중)",
        ev2_title: "감옥페스타",
        ev2_desc: "강원도 정선의 여름 햇살을 듬뿍 머금은 대표 특산물인 '감자'와 '찰옥수수'를 주제로 펼쳐지는 흥겨운 시장 페스티벌입니다. 갓 쪄낸 찰옥수수, 감자전 부치기 체험, 이색 요리 경연대회 등 온 가족이 함께 참여할 수 있습니다.",
        ev2_place: "사북시장 특설 행사장 및 고객 광장",
        ev2_programs: "감자·찰옥수수 무료 시식회, 특산품 직거래 장터, 옥수수 빨리 까기 대회",
        ev2_note: "정확한 연간 일정은 매년 초 상인회 공지를 통해 안내됩니다.",
        ev_place_label: "장소:",
        ev_program_label: "주요 프로그램:",
        hist_tag: "40여 년의 시간과 삶의 터전",
        hist_heading: "사북시장의 역사",
        hist_subheading: "Our History",
        hist_p1: "사북시장은 1970~80년대 대한민국 최대의 석탄 생산지였던 동원탄좌와 사북 광산 지대 중심에 자리잡으며 40년이 넘는 세월 동안 지역 공동체와 함께 호흡해 왔습니다.",
        hist_p2: "지하 수천 미터 막장에서 땀 흘리던 광부들과 그 가족들의 고된 하루를 달래주던 따스한 국밥 한 그릇과 훈훈한 정(情)은 사북시장의 가장 큰 밑거름이었습니다.",
        hist_p3: "오늘날 사북시장은 강원랜드와 하이원리조트 등 천혜의 관광지와 인접한 정선의 관문 시장으로서, 고원의 신선한 청정 먹거리와 향토 문화가 살아 숨 쉬는 활력 넘치는 전통시장으로 든든하게 자리하고 있습니다.",
        hist_t1_title: "탄광촌의 활기찬 태동",
        hist_t1_desc: "탄광 산업의 전성기, 수많은 광산 근로자와 가족들의 생필품과 정성 담긴 식사를 책임지던 사북의 중심 터전으로 시작되었습니다.",
        hist_t2_title: "고원 관광의 길목으로 도약",
        hist_t2_desc: "하이원리조트 개장 및 정선 관광 활성화와 함께 정선의 청정 곤드레, 메밀, 약초 등 향토 먹거리를 전하는 대표 시장으로 발돋움했습니다.",
        hist_t3_title: "문화와 축제의 장",
        hist_t3_desc: "주말 사북 야시장과 감옥페스타(감자·옥수수 페스타)를 통해 주민과 여행객 모두가 한데 어우러지는 활력의 공간을 만들어가고 있습니다.",
        hist_t4_title: "누구나 편안한 전통시장",
        hist_t4_desc: "40년 동안 지켜온 변함없는 따뜻한 정과 편리한 환경을 갖추어 국내외 관광객을 따뜻하게 맞이합니다.",
        contact_tag: "CONTACT & VISIT",
        contact_heading: "문의 및 오시는 길",
        contact_subtext: "사북역에서 도보 5분 거리! 정선 여행의 첫 걸음을 사북시장에서 시작하세요.",
        c_email_title: "이메일 문의",
        c_email_desc: "시장 방문 및 행사 문의",
        c_addr_title: "시장 주소",
        c_addr_desc: "강원특별자치도 정선군 사북읍 사북시장길 일원",
        c_transit_title: "대중교통 안내",
        c_transit_desc: "태백선 사북역 도보 5분 (약 350m) / 사북시외버스터미널 도보 3분",
        c_map_btn: "Google 지도에서 크게 보기",
        footer_copy: "2026 사북시장. All rights reserved.",
        footer_sub: "정선 고원의 넉넉한 인심과 향토의 맛이 함께하는 정선 사북시장 공식 홈페이지입니다."
    },
    en: {
        nav_home: "Home",
        nav_stores: "Stores",
        nav_events: "Events",
        nav_history: "History",
        nav_contact: "Contact",
        home_pill: "Traditional Highland Market in Jeongseon",
        home_title_1: "Jeongseon Sabuk Market",
        home_title_2: "Sabuk Traditional Market",
        home_desc: "Nestled 700 meters above sea level, Sabuk Market welcomes travelers with pure highland air and heartwarming hospitality.",
        home_btn_stores: "Browse Stores",
        home_btn_events: "Festival & Event Guide",
        home_map_title: "Sabuk Market Map (Google Map)",
        store_tag: "DISCOVER SABUK STORES",
        store_heading: "Our Stores",
        store_subtext: "Discover the best local dishes and fresh regional specialties at Sabuk Market.",
        cat_all: "All",
        cat_food: "Food & Dining",
        cat_produce: "Local Produce & Herbs",
        cat_general: "Daily Goods",
        view_map_btn: "View Map",
        event_tag: "FESTIVALS & ACTIVITIES",
        event_heading: "Sabuk Market Events",
        event_subtext: "Experience the lively night market and the authentic Gam-Ok Festa celebrating fresh Gangwon potatoes and sweet corn.",
        ev1_badge: "Regular Night Market",
        ev1_period: "Every Fri & Sat 18:00 ~ 23:00",
        ev1_title: "Sabuk Night Market",
        ev1_desc: "Sabuk's signature evening cultural attraction under cool mountain breezes. Enjoy savory buckwheat pancakes, briquette-grilled treats, craft drinks, and live acoustic street performances.",
        ev1_place: "Sabuk Market Central Passage & Arcade",
        ev1_programs: "Night Food Stalls, Night Flea Market, Live Busking",
        ev1_note: "Operating schedule may vary depending on season and weather conditions.",
        ev2_badge: "Representative Festival",
        ev2_period: "Summer Harvest (July ~ August)",
        ev2_title: "Gam-Ok Festa",
        ev2_desc: "A fun-filled festival celebrating Jeongseon's two iconic summer harvests: Gamja (Potato) and Oksusu (Waxy Corn). Features freshly steamed corn, potato pancake cooking experiences, and cooking contests.",
        ev2_place: "Sabuk Market Special Event Stage & Plaza",
        ev2_programs: "Free Potato & Corn Tastings, Direct Farm Market, Fast Corn Peeling Contest",
        ev2_note: "Specific dates are announced annually by the merchants association.",
        ev_place_label: "Location:",
        ev_program_label: "Key Programs:",
        hist_tag: "Over 40 Years of Community Heritage",
        hist_heading: "Our History",
        hist_subheading: "Sabuk Market Heritage",
        hist_p1: "Sabuk Market emerged at the heart of Dongwon Coal Mine, once South Korea's largest coal-producing basin, serving the community for more than 40 years.",
        hist_p2: "Hearty bowls of hot soup and warm hospitality comforted miners working in deep underground coal shafts, forming the very soul of Sabuk Market.",
        hist_p3: "Today, adjacent to High1 Resort and Kangwon Land, Sabuk Market thrives as a welcoming gateway traditional market full of pristine highland delicacies and genuine local culture.",
        hist_t1_title: "Dawn of the Mining Era",
        hist_t1_desc: "Began as an essential hub providing meals and daily necessities to miners and their families.",
        hist_t2_title: "Gateway to Highland Tourism",
        hist_t2_desc: "Evolved alongside High1 Resort to showcase authentic mountain gondre herbs, buckwheat, and medicinal plants.",
        hist_t3_title: "Hub of Festivals & Culture",
        hist_t3_desc: "Home to the exciting Sabuk Night Market and the famous Gam-Ok Festa (Potato & Corn Festival).",
        hist_t4_title: "Warm Welcome for All",
        hist_t4_desc: "Welcoming domestic and international travelers with 40 years of unwavering warmth.",
        contact_tag: "CONTACT & VISIT",
        contact_heading: "Contact Us & Directions",
        contact_subtext: "Only a 5-minute walk from Sabuk Station! Start your Jeongseon trip with us.",
        c_email_title: "Email Contact",
        c_email_desc: "General inquiries and event info",
        c_addr_title: "Address",
        c_addr_desc: "Sabuk Market-gil, Sabuk-eup, Jeongseon-gun, Gangwon-do, Republic of Korea",
        c_transit_title: "Public Transit",
        c_transit_desc: "5-min walk from Sabuk Station (approx. 350m) / 3-min walk from Sabuk Bus Terminal",
        c_map_btn: "Open in Google Maps",
        footer_copy: "2026 Sabuk Market. All rights reserved.",
        footer_sub: "Official website of Jeongseon Sabuk Market, filled with rich highland flavor and warm hospitality."
    },
    cn: {
        nav_home: "主页",
        nav_stores: "店铺",
        nav_events: "节日活动",
        nav_history: "市场历史",
        nav_contact: "联系我们",
        home_pill: "江原特别自治道 旌善郡代表传统市场",
        home_title_1: "旌善 舍北市场",
        home_title_2: "Sabuk Market",
        home_desc: "坐落于海拔700米高原，沐浴在清新山风与淳朴人情中的旌善舍北市场。",
        home_btn_stores: "浏览市场店铺",
        home_btn_events: "查看节日活动",
        home_map_title: "舍北市场地图 (Google Map)",
        store_tag: "DISCOVER SABUK STORES",
        store_heading: "市场店铺指南",
        store_subtext: "品尝舍北市场的地道风味与新鲜的高原土特产。",
        cat_all: "全部",
        cat_food: "餐厅·小吃",
        cat_produce: "农特产·草药",
        cat_general: "生活·百货",
        view_map_btn: "查看位置",
        event_tag: "FESTIVALS & ACTIVITIES",
        event_heading: "舍北市场节庆活动",
        event_subtext: "点亮高原夜空的夜市与旌善两大招牌特产（土豆与糯玉米）庆典，为您呈现独特的旅行回忆。",
        ev1_badge: "常规夜市",
        ev1_period: "每周五·周六 18:00 ~ 23:00",
        ev1_title: "舍北夜市",
        ev1_desc: "吹着凉爽的高原微风，漫步于舍北市场的特色夜间盛宴。品尝荞麦煎饼、炭火烧烤、精酿啤酒以及现场街头驻唱表演。",
        ev1_place: "舍北市场中央走廊及拱廊区域",
        ev1_programs: "特色夜宵摊位、创意跳蚤市场、现场街头音乐会",
        ev1_note: "活动日程可能会根据季节和天气情况有所调整。",
        ev2_badge: "代表性特色节庆",
        ev2_period: "每年夏季收获季 (7~8月期间)",
        ev2_title: "土豆·玉米美食节 (甘玉Festa)",
        ev2_desc: "以江原道盛夏代表性特产——土豆(감자)与糯玉米(옥수수)为主题的欢乐庆典。现场提供现蒸甜糯玉米、制作土豆饼体验与特色厨艺比拼。",
        ev2_place: "舍北市场特设活动区与客户广场",
        ev2_programs: "土豆与糯玉米免费品尝、农特产直销大集、快速剥玉米趣味比赛",
        ev2_note: "每年的具体举办日期请参考市场商户联合会的公告。",
        ev_place_label: "活动地点:",
        ev_program_label: "主要活动:",
        hist_tag: "四十载岁月传承与坚守",
        hist_heading: "舍北市场的历史",
        hist_subheading: "Our History",
        hist_p1: "舍北市场位于曾是韩国最大民营煤矿东源炭座的核心区域，40多年来一直与当地社区休戚与共。",
        hist_p2: "当年在幽深地下矿井中挥汗如雨的矿工们，在收工后用一碗热气腾腾的热汤抚慰疲惫，奠定了市场浓厚的人情味基石。",
        hist_p3: "如今，紧邻High1度假村和江原乐园的舍北市场，已华丽蜕变为迎接海内外游客的江原道高原观光枢纽传统市场。",
        hist_t1_title: "煤矿小镇的蓬勃诞生",
        hist_t1_desc: "在煤炭工业繁荣期，为矿山劳动者和家属提供丰富生活物资和热腾腾饭菜。",
        hist_t2_title: "高原旅游门户",
        hist_t2_desc: "随着度假村的开放，成为展现旌善正宗山蓟菜、荞麦和野生草药的特色市场。",
        hist_t3_title: "文化与节庆之窗",
        hist_t3_desc: "通过舍北夜市与土豆玉米美食节，打造居民与游客同乐的欢庆空间。",
        hist_t4_title: "宾至如归的温情",
        hist_t4_desc: "40年如一日保持淳朴人情与整洁环境，热情迎接每一位访客。",
        contact_tag: "CONTACT & VISIT",
        contact_heading: "交通指南与联系",
        contact_subtext: "距舍北火车站步行仅5分钟！开启愉快的旌善之旅。",
        c_email_title: "电子邮箱",
        c_email_desc: "市场访问与活动咨询",
        c_addr_title: "市场地址",
        c_addr_desc: "韩国江原特别自治道旌善郡舍北邑舍北市场街",
        c_transit_title: "公共交通",
        c_transit_desc: "太白线舍北站步行5分钟 (约350米) / 舍北长途汽车站步行3分钟",
        c_map_btn: "在 Google Maps 中打开",
        footer_copy: "2026 舍北市场. All rights reserved.",
        footer_sub: "蕴含旌善高原淳朴人情与地道风味的舍北市场官方主页。"
    },
    ja: {
        nav_home: "ホーム",
        nav_stores: "店舗一覧",
        nav_events: "イベント",
        nav_history: "歴史",
        nav_contact: "アクセス",
        home_pill: "江原特別自治道 旌善郡の伝統市場",
        home_title_1: "旌善 舎北（サブク）市場",
        home_title_2: "Sabuk Market",
        home_desc: "標高700mの高冷地の爽やかな風と温かな人情が迎えてくれる舎北市場です。",
        home_btn_stores: "店舗一覧を見る",
        home_btn_events: "お祭り・イベント案内",
        home_map_title: "舎北市場 案内地図 (Google Map)",
        store_tag: "DISCOVER SABUK STORES",
        store_heading: "市場の店舗一覧",
        store_subtext: "舎北市場の味わい深い郷土料理と新鮮な特産品をご覧ください。",
        cat_all: "すべて",
        cat_food: "食堂・グルメ",
        cat_produce: "農特産品・山菜",
        cat_general: "生活・雑貨",
        view_map_btn: "位置を見る",
        event_tag: "FESTIVALS & ACTIVITIES",
        event_heading: "舎北市場のイベント・お祭り",
        event_subtext: "高冷地の夜を彩るナイトマーケットと、江原道自慢のじゃがいも・とうもろこしフェスタをご紹介します。",
        ev1_badge: "週末ナイトマーケット",
        ev1_period: "毎週金・土 18:00 ~ 23:00",
        ev1_title: "舎北ナイトマーケット（夜市場）",
        ev1_desc: "涼しい高原の夜風を感じながら楽しむ舎北市場の夜の風物詩。名物の蕎麦チヂミや練炭焼き料理、クラフトビール、ストリートライブなどをお楽しみいただけます。",
        ev1_place: "舎北市場 中央通路およびアーケード一帯",
        ev1_programs: "夜食ブース、夜間フリーマーケット、ストリートライブ",
        ev1_note: "季節や天候により運営日程が変更となる場合があります。",
        ev2_badge: "代表的な地域フェス",
        ev2_period: "毎年夏の収穫期（7〜8月中）",
        ev2_title: "じゃがいも・とうもろこしフェスタ (甘玉Festa)",
        ev2_desc: "江原道の夏を代表する特産品「じゃがいも(カムジャ)」と「もちとうもろこし(オクスス)」をテーマにした楽しいお祭りです。茹でたてとうもろこし、チヂミ作り体験、料理大会などをご家族でお楽しみいただけます。",
        ev2_place: "舎北市場 特設イベント会場および広場",
        ev2_programs: "とうもろこし・じゃがいも無料試食会、産直市、とうもろこし早剥き大会",
        ev2_note: "年ごとの開催日程は商人会からのお知らせをご確認ください。",
        ev_place_label: "場所:",
        ev_program_label: "主なプログラム:",
        hist_tag: "40余年の歩みと生活の場",
        hist_heading: "舎北市場の歴史",
        hist_subheading: "Our History",
        hist_p1: "舎北市場は、1970〜80年代に韓国最大の炭鉱であった東原炭座を中心とする炭鉱の町で誕生し、40年以上にわたり地域社会とともに歩んできました。",
        hist_p2: "地下数千メートルの坑道で汗を流した鉱夫とその家族を癒やした温かい一杯のクッパと人情こそが、市場の温かな基盤となっています。",
        hist_p3: "現在、ハイワンリゾートや江原ランドに近い観光の拠点として、高原の澄んだ山の恵みと伝統文化を世界に発信する市場として親しまれています。",
        hist_t1_title: "炭鉱の町の活気ある誕生",
        hist_t1_desc: "炭鉱産業の全盛期、多くの鉱山労働者とその家族の生活必需品と温かい食事を支える場として始まりました。",
        hist_t2_title: "高原観光のゲートウェイへ",
        hist_t2_desc: "リゾートの開業とともに、旌善の香り高いゴンドレ菜や蕎麦、薬草などを提供する代表的な市場へと発展しました。",
        hist_t3_title: "文化とお祭りの舞台",
        hist_t3_desc: "舎北ナイトマーケットやとうもろこしフェスタを通じて、住民と旅行者が触れ合える活気ある空間を創出しています。",
        hist_t4_title: "心温まるおもてなし",
        hist_t4_desc: "40年間培ってきた温かい人情と快適な環境で、皆様のお越しをお待ちしております。",
        contact_tag: "CONTACT & VISIT",
        contact_heading: "アクセスとお問い合わせ",
        contact_subtext: "太白線舎北駅から徒歩5分！旌善旅のスタートは舎北市場から。",
        c_email_title: "メールでのお問い合わせ",
        c_email_desc: "訪問・イベントに関するお問い合わせ",
        c_addr_title: "市場の住所",
        c_addr_desc: "江原特別自治道 旌善郡 舎北邑 舎北市場キル 一帯",
        c_transit_title: "公共交通機関",
        c_transit_desc: "太白線舎北駅から徒歩5分（約350m） / 舎北市外バスターミナルから徒歩3分",
        c_map_btn: "Googleマップで開く",
        footer_copy: "2026 舎北市場. All rights reserved.",
        footer_sub: "旌善高原の温かな人情と郷土の味が息づく舎北市場の公式ホームページです。"
    }
};

// 점포 데이터 (식당, 농특산물, 잡화)
const marketStores = [
    {
        id: 1,
        name: { ko: "고원 곤드레 밥상", en: "Gowon Gondre Restaurant", cn: "高原山蓟菜拌饭", ja: "高原ゴンドレご飯" },
        cat: "food",
        catName: { ko: "식당·향토음식", en: "Restaurant", cn: "特色餐厅", ja: "郷土料理店" },
        desc: {
            ko: "정선 해발 700m 청정 고원에서 채취한 향긋한 곤드레나물 솥밥과 구수한 된장찌개 전문점.",
            en: "Authentic Jeongseon wild gondre herb rice bowl served with traditional rich soybean paste stew.",
            cn: "采用旌善海拔700米野生山蓟菜制作的石锅拌饭与浓郁大酱汤。",
            ja: "標高700mで育った香り高いゴンドレ菜飯と特製味噌チゲの名店。"
        },
        specialty: { ko: "곤드레 정식, 메밀전병", en: "Gondre Set, Buckwheat Crepe", cn: "山蓟菜定食, 荞麦煎饼", ja: "ゴンドレ定食, 蕎麦チヂミ" },
        query: "사북시장 고원 곤드레 밥상"
    },
    {
        id: 2,
        name: { ko: "사북 전통 막국수", en: "Sabuk Traditional Makguksu", cn: "舍北传统荞麦冷面", ja: "舎北伝統マッククス" },
        cat: "food",
        catName: { ko: "면요리·식당", en: "Buckwheat Noodles", cn: "特色面食", ja: "麺処" },
        desc: {
            ko: "자가제면 메밀면과 48시간 숙성시킨 동치미 육수로 탄광 시절부터 한결같은 맛을 이어온 막국수집.",
            en: "Handmade buckwheat noodles with fermented radish broth, a local classic since the mining era.",
            cn: "自制荞麦冷面搭配熟成冬冬水萝卜汤底，矿工时期传承至今的经典老店。",
            ja: "自家製蕎麦麺と熟成水キムチスープが自慢の伝統マッククス専門店。"
        },
        specialty: { ko: "물막국수, 비빔막국수, 수육", en: "Cold Noodles, Boiled Pork", cn: "水冷面, 拌面, 药膳白肉", ja: "水マッククス, ビビン麺, ポッサム" },
        query: "사북시장 막국수"
    },
    {
        id: 3,
        name: { ko: "정선 산나물·약초상회", en: "Jeongseon Mountain Herb Store", cn: "旌善野生山菜草药商会", ja: "旌善山菜・薬草商会" },
        cat: "produce",
        catName: { ko: "농특산물·약초", en: "Mountain Produce", cn: "土特产草药", ja: "特産品・薬草" },
        desc: {
            ko: "백운산과 함백산 깊은 숲에서 직접 채취한 건곤드레, 취나물, 정선 5년근 황기를 엄선해 선보입니다.",
            en: "Carefully harvested wild dried gondre, chwinamul herbs, and authentic Jeongseon Astragalus root.",
            cn: "采自白云山与咸白山深山的干山蓟菜、野生香青及旌善正宗黄芪。",
            ja: "白雲山・咸白山で採れた干しゴンドレ、山菜、旌善産5年根黄耆を取り扱い。"
        },
        specialty: { ko: "건곤드레, 정선 5년근 황기", en: "Dried Gondre, Astragalus", cn: "干山蓟菜, 旌善黄芪", ja: "乾燥ゴンドレ, 旌善黄耆" },
        query: "사북시장 정선 산나물"
    },
    {
        id: 4,
        name: { ko: "탄광촌 고원 한우정육점", en: "Highland Hanwoo Butcher", cn: "高冷地韩牛精肉店", ja: "高原韓牛精肉店" },
        cat: "food",
        catName: { ko: "정육·식육식당", en: "Butcher & Grill", cn: "精肉·烤肉", ja: "精肉・焼肉" },
        desc: {
            ko: "청정 강원도 고원 1++ 한우만을 취급하며, 꽃등심부터 신선한 육회까지 푸짐하게 즐길 수 있는 식육식당.",
            en: "Offering strictly premium 1++ Korean beef (Hanwoo), from juicy ribeye cuts to fresh beef tartare.",
            cn: "专营江原道1++等级高原优质韩牛，提供鲜嫩雪花里脊及牛肉刺身。",
            ja: "江原道産の最高級1++韓牛専門店。霜降りロースから新鮮なユッケまで提供。"
        },
        specialty: { ko: "한우 꽃등심, 한우 육회", en: "Sirloin, Hanwoo Tartare", cn: "雪花里脊, 鲜拌牛肉", ja: "韓牛ロース, ユッケ" },
        query: "사북시장 한우 정육점"
    },
    {
        id: 5,
        name: { ko: "사북 전통 떡방앗간", en: "Sabuk Traditional Rice Cake", cn: "舍北传统年糕坊", ja: "舎北伝統餅工房" },
        cat: "produce",
        catName: { ko: "떡·방앗간", en: "Rice Cake Store", cn: "传统年糕", ja: "伝統餅" },
        desc: {
            ko: "정선 찰옥수수와 향긋한 수리취를 듬뿍 넣어 빚은 수리취떡과 쫀득한 감자송편을 당일 새벽 쪄냅니다.",
            en: "Steaming fresh Surichui herb rice cakes and chewy potato half-moon cakes every single morning.",
            cn: "使用旌善粘玉米与特产东风菜制作的水翠年糕与筋道土豆松饼，每日清晨现做。",
            ja: "旌善名物のスリチ（山菜）草餅やじゃがいも松餅を毎朝出来立てで提供。"
        },
        specialty: { ko: "수리취 찹쌀떡, 감자 송편", en: "Surichui Cake, Potato Cake", cn: "山野草糯米糕, 土豆团子", ja: "スリチ草餅, じゃがいも団子" },
        query: "사북시장 수리취떡"
    },
    {
        id: 6,
        name: { ko: "사북 만물상회 & 산악용품", en: "Sabuk Mountain Gear & General", cn: "舍北登山百货杂货", ja: "舎北万物雑貨・登山用品" },
        cat: "general",
        catName: { ko: "생활·잡화", en: "Daily & Gear", cn: "杂货百货", ja: "生活用品・登山雑貨" },
        desc: {
            ko: "하이원 트레킹 및 민둥산 억새 산행객을 위한 등산 용품과 지역 주민들의 정겨운 생활 잡화점.",
            en: "Hiking accessories for High1 trekkers and Mindungsan hikers alongside everyday household items.",
            cn: "提供民墩山与High1漫步所需的徒步登山装备以及各类生活日用杂货。",
            ja: "ミンドゥン山ハイキング客向けの登山グッズや暮らしに役立つ生活雑貨を取り揃え。"
        },
        specialty: { ko: "아이젠, 스틱, 시장 잡화", en: "Hiking Poles, Daily Goods", cn: "登山杖, 防滑冰爪, 日杂", ja: "トレッキングポール, 生活雑貨" },
        query: "사북시장 등산용품"
    }
];

let currentLang = 'ko';
let currentFilter = 'all';

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
        const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.query)}`;

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