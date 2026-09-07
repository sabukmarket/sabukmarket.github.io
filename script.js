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
        cat_restaurants: "식당",
        cat_food: "카페·먹거리",
        cat_produce: "농특산물·약초",
        cat_general: "생활·잡화",
        view_map_btn: "자세히",
        view_naver_map_btn: "네이버 지도에서 보기",
        event_tag: "FESTIVALS & ACTIVITIES",
        event_heading: "사북시장 행사 및 축제",
        event_subtext: "고원의 밤을 밝히는 야시장과 강원도 대표 먹거리 감자·옥수수가 함께하는 사북만의 특별한 축제에 여러분을 초대합니다.",
        ev1_badge: "정례 야시장",
        ev1_period: "여름 시즌 매주 금·토 18~22시",
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
        ev_program_label: "프로그램:",
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
        cat_restaurants: "Restaurants",
        cat_food: "Cafes & Desserts",
        cat_produce: "Local Produce & Herbs",
        cat_general: "Daily Goods",
        view_map_btn: "Details",
        view_naver_map_btn: "View on Naver Maps",
        event_tag: "FESTIVALS & ACTIVITIES",
        event_heading: "Sabuk Market Events",
        event_subtext: "Experience the lively night market and the authentic Gam-Ok Festa celebrating fresh Gangwon potatoes and sweet corn.",
        ev1_badge: "Regular Night Market",
        ev1_period: "Summer Season Fri & Sat 18 ~ 22h",
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
        cat_restaurants: "餐厅",
        cat_food: "咖啡厅·小吃",
        cat_produce: "农特产·草药",
        cat_general: "生活·百货",
        view_map_btn: "细节事项",
        view_naver_map_btn: "在Naver地图上查看",
        event_tag: "FESTIVALS & ACTIVITIES",
        event_heading: "舍北市场节庆活动",
        event_subtext: "点亮高原夜空的夜市与旌善两大招牌特产（土豆与糯玉米）庆典，为您呈现独特的旅行回忆。",
        ev1_badge: "常规夜市",
        ev1_period: "夏季 每周五·周六 18:00~22:00",
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
        c_naver_map_btn: "在 Naver Maps 中打开",
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
        cat_restaurants: "食堂",
        cat_food: "カフェ・デザート",
        cat_produce: "農特産品・山菜",
        cat_general: "生活・雑貨",
        view_map_btn: "細部事項",
        event_tag: "FESTIVALS & ACTIVITIES",
        event_heading: "舎北市場のイベント・お祭り",
        event_subtext: "高冷地の夜を彩るナイトマーケットと、江原道自慢のじゃがいも・とうもろこしフェスタをご紹介します。",
        ev1_badge: "週末ナイトマーケット",
        ev1_period: "毎年夏の金・土 18:00~22:00",
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
        name: { ko: "짱얼큰칼국수", en: "Jjangeolkeun Kalguksu", cn: "超赞辣味刀削面", ja: "ピリ辛カルグクス" },
        cat: "restaurants",
        catName: { ko: "식당", en: "Restaurant", cn: "特色餐厅", ja: "郷土料理店" },
        desc: {
            ko: "직접 담근 김치와 면, 수제비가 일품인 칼국수 전문점입니다.",
            en: "A noodle house famous for homemade kimchi, handcrafted noodles, and sujebi(hand-torn noodle).",
            cn: "自制辛奇、手擀面与面片汤一绝的刀切面馆。",
            ja: "自家製のキムチと麺、手打ちうどんが自慢のカルグクス専門店。"
        },
        specialty: { ko: "칼국수 8,000원 &nbsp;&nbsp;&nbsp; 수제비 8,000원 <br> 들깨수제비 9,000원 &nbsp;&nbsp;&nbsp; 들깨칼국수 9,000원", en: "Kalguksu 8,000 KRW &nbsp;&nbsp;&nbsp; Sujebi 8,000 KRW <br> Perilla Seed Sujebi 9,000 KRW &nbsp;&nbsp;&nbsp; Perilla Seed Kalguksu 9,000 KRW", cn: "刀切面 8,000韩元 &nbsp;&nbsp;&nbsp; 面片汤 8,000韩元 <br>荏子刀切面 9,000韩元 &nbsp;&nbsp;&nbsp; 荏子面片汤 9,000韩元", ja: "カルグクス 8,000 &nbsp;&nbsp;&nbsp; スジェビ 8,000 <br> エゴマカルグクス 9,000 &nbsp;&nbsp;&nbsp;エゴマスジェビ 9,000" },
        query: "kalguksu.html"
    },
    {
        id: 2,
        name: { ko: "탄탄아리카페", en: "Tantanari Café", cn: "坦坦阿里咖啡厅", ja: "タンタンアリカフェ" },
        cat: "food",
        catName: { ko: "카페·먹거리", en: "Cafes & Desserts", cn: "咖啡厅·小吃", ja: "カフェ・デザート" },
        desc: {
            ko: "시장 안에서 커피를 마시며 쉴 수 있는 아늑한 카페. 까미도롱 캐릭터 키링을 구입할 수 있어요.",
            en: "A cozy café where you can enjoy coffee and relax. You can also purchase cute Kkamidorong character keychains.",
            cn: "市场内的舒适咖啡厅，可在此休息并享用咖啡。还可购买可爱的Kkamidorong角色钥匙扣。",
            ja: "市場内でのコーヒー飲み放題の快適なカフェ。カミドロンキャラクターのキーホルダーも販売中。"
        },
        specialty: { ko: "아메리카노 HOT 4,000원 &nbsp;&nbsp;&nbsp;  ICED 4,500원 <br> 아이스크림 5,000원 &nbsp;&nbsp;&nbsp;  까미도롱 키링 10,000원", en: "Americano HOT 4,000 KRW&nbsp;&nbsp;&nbsp;  ICED 4,500 KRW <br> Ice Cream 5,000 KRW &nbsp;&nbsp;&nbsp; Kkamidorong Keychain 10,000 KRW", cn: "美式咖啡 热 4,000韩元 &nbsp;&nbsp;&nbsp; 冰 4,500韩元 <br> 冰淇淋 5,000韩元 &nbsp;&nbsp;&nbsp; Kkamidorong钥匙扣 10,000韩元", ja: "アメリカーノ HOT 4,000 &nbsp;&nbsp;&nbsp; ICED 4,500 <br> アイスクリーム 5,000 &nbsp;&nbsp;&nbsp; キャラクターキーホルダー 10,000" },
        query: "tantanari.html"
    },
    {
        id: 3,
         name: { ko: "안동상회", en: "Andong Store", cn: "安东商行", ja: "アンドン商会" },
        cat: "produce",
        catName: { ko: "농특산물·약초", en: "Local Produce & Herbs", cn: "农特产·草药", ja: "農特産品・山菜" },
        desc: {
            ko: "과일, 건어물 및 지역 농산물을 판매합니다.",
            en: "A store where you can find a variety of local produce and dried goods.",
            cn: "销售各种当地农产品和干货。",
            ja: "様々な地域の農産物と干物を販売中。"
        },
        specialty: { ko: "곤드레나물 12,000원 &nbsp;&nbsp;&nbsp; 사과 10,000원 <br> 옛날사탕 7,000원 &nbsp;&nbsp;&nbsp; 거봉 8,000원", 
                     en: "Gondre Namul 12,000 KRW &nbsp;&nbsp;&nbsp; Apples 10,000 KRW <br> Old-fashioned Candy 7,000 KRW &nbsp;&nbsp;&nbsp; Kyoho Grapes 8,000 KRW", 
                     cn: "山蓟菜 12,000韩元 &nbsp;&nbsp;&nbsp; 苹果 10,000韩元 <br> 传统糖果 7,000韩元 &nbsp;&nbsp;&nbsp; 巨峰葡萄 8,000韩元", 
                     ja: "ゴンドレナムル 12,000 &nbsp;&nbsp;&nbsp; りんご 10,000 <br> 古い飴 7,000 &nbsp;&nbsp;&nbsp; 巨峰レーズン 8,000" },
        query: "andongsanghoe.html"
    },
    {
        id: 4,
        name: { ko: "감탄카페", en: "Gamtan Café", cn: "甘炭咖啡甘", ja: "ガムタンカフェ" },
        cat: "food",
        catName: { ko: "카페·먹거리", en: "Cafes & Desserts", cn: "咖啡厅·小吃", ja: "カフェ・デザート" },
        desc: {
            ko: "사북을 대표하는 로컬 카페. 감탄빵은 선물용으로도 좋습니다!",
            en: "A local café representing Sabuk, famous for its delicious Gamtan brownie.",
            cn: "代表舍北的当地咖啡馆，以其美味的炭烤面包而闻名。",
            ja: "舎北を代表するローカルカフェで、炭焼パンが美味しいです。"
        },
        specialty: { ko: "감탄빵 8개 세트 20,000원 &nbsp;&nbsp;&nbsp; 안전빵 1개 2,200원 <br> 아메리카노 HOT 3,500원 &nbsp;&nbsp;&nbsp; ICED 4,000원", en: "Gamtan Brownie 8-piece Set 20,000 KRW &nbsp;&nbsp;&nbsp; Safe-cap Bread 1 Piece 2,200 KRW <br> Americano HOT 3,500 KRW &nbsp;&nbsp;&nbsp; ICED 4,000 KRW", cn: "甘炭面包 8个装 20,000韩元 &nbsp;&nbsp;&nbsp; 安全帽面包 1个 2,200韩元 <br> 美式咖啡 热 3,500韩元 &nbsp;&nbsp;&nbsp; 冰 4,000韩元", ja: "ガムタンパン 8個セット 20,000 &nbsp;&nbsp;&nbsp; 安全帽パン 1個 2,200 <br> アメリカーノ HOT 3,500 &nbsp;&nbsp;&nbsp; ICED 4,000" },
        query: "gamtancafe.html"
    },
     {
        id: 5,
        name: { ko: "종가떡집", en: "Jongga Ddeok House", cn: "宗家打糕店", ja: "宗家(ジョンカ)餅屋" },
        cat: "food",
        catName: { ko: "떡·방앗간", en: "Rice Cake Store", cn: "传统年糕", ja: "伝統餅" },
        desc: {
            ko: "다양한 전통 떡을 판매합니다. 맛있으면 0칼로리!",
            en: "We sell various traditional rice cakes. If it's delicious, it's 0 calories!",
            cn: "销售各种传统年糕。如果好吃就是0卡路里！",
            ja: "様々な伝統餅を販売しています。美味しいならカロリーは0です！"
        },
        specialty: { ko: "인절미 10,000원 &nbsp;&nbsp;&nbsp; 가래떡 10,000원 <br> 송편 10,000원 &nbsp;&nbsp;&nbsp; 팥떡 10,000원",
             en: "Injeolmi 10,000 KRW &nbsp;&nbsp;&nbsp; Garaetteok 10,000 KRW <br> Songpyeon 10,000 KRW &nbsp;&nbsp;&nbsp; Patddeok 10,000 KRW", 
             cn: "年糕 10,000韩元 &nbsp;&nbsp;&nbsp; 切糕 10,000韩元 <br> 松饼 10,000韩元 &nbsp;&nbsp;&nbsp; 红豆糕 10,000韩元", 
             ja: "インジェオルミ 10,000 KRW &nbsp;&nbsp;&nbsp; ガラエットク 10,000 KRW <br> ソンピョン 10,000 KRW &nbsp;&nbsp;&nbsp; パットデオク 10,000 KRW" },
        query: "jonggaddeok.html"
    },
    {
        id: 6,
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
        query: "haedongsuper.html"
    },
    {
        id: 7,
        name: { ko: "강릉통닭", en: "Gangneung Tongdak", cn: "江陵通鸭", ja: "江陵(カンヌン)チキン" },
        cat: "food",
        catName: { ko: "카페·먹거리", en: "Cafes & Desserts", cn: "咖啡厅·小吃", ja: "カフェ・デザート" },
        desc: {
            ko: "바삭바삭한 시장 치킨을 먹고 싶다면? 이곳입니다!",
            en: "Come and enjoy our crispy market chicken!",
            cn: "想要品尝香脆的市场鸡肉吗？欢迎前来品尝！",
            ja: "サクサクの市場チキンが食べたいなら？ こちらです。。"
        },
        specialty: { ko: "후라이드 19,000원 &nbsp;&nbsp;&nbsp; 양념치킨 23,000원", en: "Fried Chicken 19,000 KRW &nbsp;&nbsp;&nbsp; Spicy Chicken 23,000 KRW", cn: "炸鸡 19,000韩元 &nbsp;&nbsp;&nbsp; 辣子鸡 23,000韩元", ja: "フライドチキン 19,000 &nbsp;&nbsp;&nbsp; スパイシーChicken 23,000" },
        query: "gangneungtongdak.html"
    },
    {
        id: 8,
        name: { ko: "강릉식당", en: "Gangneung Restaurant", cn: "江陵餐厅", ja: "江陵(カンヌン)食堂" },
        cat: "restaurants",
        catName: { ko: "식당", en: "Restaurant", cn: "特色餐厅", ja: "郷土料理店" },
        desc: {
            ko: "곤드레 정식부터 생선구이, 더덕구이, 순두부찌개까지 다채로운 한식 메뉴를 즐길 수 있습니다. 시장 정문 바로 옆에 위치해 있어요.",
            en: "Enjoy a variety of Korean dishes from Gondre rice to grilled fish, morel mushroom stew, and sundubu jiggae. Located right next to the main entrance of the market.",
            cn: "从贡德雷套餐到烤鱼、杜鹃花炖菜和嫩豆腐汤等多样的韩式菜单都可以享用。位于市场正门旁边。",
            ja: "ゴンドレ定食から焼き魚、ドデク焼き、スンドゥブチゲまで、多彩な韓国料理メニューを楽しめます。市場の正門のすぐ隣に位置しています。"
        },
        specialty: { ko: "곤드레정식 18,000원 &nbsp;&nbsp;&nbsp; 임연수구이 17,000원 <br> 고등어구이 15,000원 &nbsp;&nbsp;&nbsp; 더덕구이 17,000원",
             en: "Gondre Set Meal 18,000 KRW &nbsp;&nbsp;&nbsp; Grilled Atka Mackerel 17,000 KRW <br> Grilled Mackerel 15,000 KRW &nbsp;&nbsp;&nbsp; Grilled Deodeok 17,000 KRW", 
             cn: "山蓟菜套餐 18,000韩元 &nbsp;&nbsp;&nbsp; 烤银鳕鱼 17,000韩元 <br> 烤鲭鱼 15,000韩元 &nbsp;&nbsp;&nbsp; 烤杜鹃花 17,000韩元", 
             ja: "ゴンドレ定食 18,000ウォン &nbsp;&nbsp;&nbsp; ホッケ焼き 17,000ウォン <br> サバの塩焼き 15,000ウォン &nbsp;&nbsp;&nbsp; グリルされたデオドク 17,000ウォン" },
        query: "gangneungrestaurant.html"
    },
      {
        id: 9,
        name: { ko: "경북기름방", en: "Gyeongbuk Oil Shop", cn: "庆北油坊", ja: "慶北(キョンブク)油坊" },
        cat: "produce",
        catName: { ko: "농특산물·약초", en: "Local Produce & Herbs", cn: "农特产·草药", ja: "農特産品・山菜" },
        desc: {
            ko: "지역에서 나는 원료로 짠 신선한 기름을 판매합니다.",
            en: "We sell fresh, locally-sourced oils made from regional ingredients.",
            cn: "我们销售用当地原料压榨的新鲜油。",
            ja: "本地域の原料で絞った新鮮な油を販売しています。"
        },
        specialty: { ko: "국산 참기름 38,000원 &nbsp;&nbsp;&nbsp; 국산 들기름 25,000원 <br> 수입산 참기름 16,000원 &nbsp;&nbsp;&nbsp; 수입산 들기름 15,000원/20,000원", 
                     en: "Domestic Sesame Oil 38,000 KRW &nbsp;&nbsp;&nbsp; Domestic Perilla Oil 25,000 KRW <br> Imported Sesame Oil 16,000 KRW &nbsp;&nbsp;&nbsp; Imported Perilla Oil 15,000 KRW/20,000 KRW", 
                     cn: "国产芝麻油 38,000韩元 &nbsp;&nbsp;&nbsp; 国产紫苏油 25,000韩元 <br> 进口芝麻油 16,000韩元 &nbsp;&nbsp;&nbsp; 进口紫苏油 15,000韩元/20,000韩元", 
                     ja: "国内産ゴマ油 38,000 &nbsp;&nbsp;&nbsp; 国内産エゴマ油 25,000 <br> 輸入ゴマ油 16,000 &nbsp;&nbsp;&nbsp; 輸入エゴマ油 15,000/20,000" },
        query: "gyeongbukoil.html"
    },
    {
        id: 10,
        name: { ko: "경북야채", en: "Gyeongbuk Vegetable Shop", cn: "庆北蔬菜店", ja: "慶北(キョンブク)野菜店" },
        cat: "produce",
        catName: { ko: "농특산물·약초", en: "Local Produce & Herbs", cn: "农特产·草药", ja: "農特産品・山菜" },
        desc: {
            ko: "오늘 저녁 국거리, 반찬거리 재료로 딱인 신선한 야채들을 판매하고 있습니다.",
            en: "We sell fresh, locally-sourced vegetables for today's soup and side dishes.",
            cn: "我们销售今日汤品和配菜所需的新鲜当地蔬菜。",
            ja: "今日のスープと副菜に必要な新鮮な地産野菜を販売しています。"
        },
        specialty: { ko: "(시세에 따라 가격이 변동됩니다.) 상추 1봉지 3,000원 &nbsp;&nbsp;&nbsp;", 
                     en: "(Prices may vary depending on the market.) Lettuce 1 bag 3,000 KRW &nbsp;&nbsp;&nbsp;", 
                     cn: "(价格可能因市场而异。) 生菜 1袋 3,000韩元 &nbsp;&nbsp;&nbsp;", 
                     ja: "(価格は市場による。) レタス 1袋 3,000ウォン &nbsp;&nbsp;&nbsp;" },
        query: "gyeongbukvegi.html"
    },
    {
        id: 11,
        name: { ko: "카페 길", en: "Café GIL", cn: "咖啡厅GIL", ja: "カフェ・みち(GIL)" },
        cat: "food",
        catName: { ko: "카페·먹거리", en: "Cafes & Desserts", cn: "咖啡厅·小吃", ja: "カフェ・スイーツ" },
        desc: {
            ko: "정선군 시니어일자리사업의 일환으로 운영되는 카페입니다. 시중보다 저렴하고 맛있는 커피를 제공합니다.",
            en: "A café operated as part of the Jeongseon County Senior Employment Project. We provide affordable and delicious coffee.",
            cn: "作为旌善郡老年就业项目的一部分运营的咖啡馆。我们提供价格实惠、美味的咖啡。",
            ja: "旌善郡シニア雇用事業の一環として運営されているカフェです。市販よりも安くて美味しいコーヒーを提供しています。"
        },
        specialty: { ko: "아메리카노 HOT 2,500원 &nbsp;&nbsp;&nbsp; ICED 3,000원 <br> 카페라떼 HOT 3,000원 &nbsp;&nbsp;&nbsp; ICED 3,000원", 
            en: "Americano HOT 2,500 KRW &nbsp;&nbsp;&nbsp; ICED 3,000 KRW <br> Café Latte HOT 3,000 KRW &nbsp;&nbsp;&nbsp; ICED 3,000 KRW", 
            cn: "美式咖啡 热 2,500韩元 &nbsp;&nbsp;&nbsp; 冰 3,000韩元 <br> 拿铁咖啡 热 3,000韩元 &nbsp;&nbsp;&nbsp; 冰 3,000韩元", 
            ja: "アメリカーノ HOT 2,500 &nbsp;&nbsp;&nbsp; ICED 3,000 <br> カフェラテ HOT 3,000 &nbsp;&nbsp;&nbsp; ICED 3,000" },
        query: "cafegil.html"
    },
     {
        id: 12,
        name: { ko: "김밥나라", en: "Gimbap Nara", cn: "紫菜包饭王国", ja: "キンパナラ" },
        cat: "restaurants",
        catName: { ko: "식당", en: "Restaurant", cn: "特色餐厅", ja: "郷土料理店" },
        desc: {
            ko: "김밥과 라면? 김밥과 떡볶이? 김밥과 순두부찌개? 어떤 메뉴든 어울립니다.",
            en: "Gimbap and ramen? Gimbap and tteokbokki? Gimbap and soft tofu stew? Any combination works well.",
            cn: "紫菜包饭和拉面？紫菜包饭和辣炒年糕？紫菜包饭和嫩豆腐煲？任何组合都很棒。",
            ja: "キンパとラーメン？キンパとトッポッキ？キンパとスンドゥブチゲ？どの組み合わせも相性抜群です。"
        },
        specialty: { ko: "원조김밥 3,000원 &nbsp;&nbsp;&nbsp; 볶음밥 9,000원 <br> 순두부 9,000원 &nbsp;&nbsp;&nbsp; 떡만둣국 9,000원",
             en: "Original Gimbap 3,000 KRW &nbsp;&nbsp;&nbsp; Fried Rice 9,000 KRW <br> Soft Tofu Stew 9,000 KRW &nbsp;&nbsp;&nbsp; Rice Cake Dumpling Soup 9,000 KRW", 
             cn: "原味紫菜包饭 3,000韩元 &nbsp;&nbsp;&nbsp; 炒饭 9,000韩元 <br> 嫩豆腐煲 9,000韩元 &nbsp;&nbsp;&nbsp; 年糕饺子汤 9,000韩元", 
             ja: "オリジナルキンパ 3,000 &nbsp;&nbsp;&nbsp; やきめし 9,000 <br> ンドゥブチゲ 9,000 &nbsp;&nbsp;&nbsp; 餅と餃子のスープ 9,000" },
        query: "gimbapnara.html"
    },
     {
        id: 13,
        name: { ko: "내사랑사book", en: "My Love Sabuk Bookstore", cn: "我的爱sabook书店", ja: "私の愛sabook書店" },
        cat: "general",
        catName: { ko: "생활·잡화", en: "Daily Goods", cn: "生活·百货", ja: "生活・雑貨" },
        desc: {
            ko: "사북 내 유일한 책방입니다. 어린이와 어른들을 위한 그림책과 동화책을 주로 판매합니다.",
            en: "The only bookstore in Sabuk. We mainly sell picture books and fairy tales for children and adults.",
            cn: "旌善内唯一的书店。我们主要销售图画书和童话书。",
            ja: "薩北内唯一の書店です。子供と大人のための絵本と妖精の物語を主に販売しています。"
        },
        specialty: { ko: "다양한 가격의 그림책 판매(주로 10,000~30,000원)", 
                     en: "Picture Books 10,000-30,000KRW (Various Prices)", 
                     cn: "各种价格的图画书销售(主要是10,000-30,000韩元)", 
                     ja: "様々な価格の絵本販売(主に10,000-30,000)" },
        query: "mylovesabook.html"
    },
     {
        id: 14,
        name: { ko: "다희마켓", en: "Daheemarket", cn: "Dahee市场", ja: "ダヒーマーケット" },
        cat: "general",
        catName: { ko: "생활·잡화", en: "Daily Goods", cn: "生活·百货", ja: "生活・雑貨" },
        desc: {
            ko: "정선군과 사북의 귀엽고 깜찍한 굿즈들을 만나실 수 있어요. 선물을 사 가시려면 반드시 들러야 할 곳 중 하나입니다.",
            en: "A store where you can find cute and unique merchandise products from Jeongseon and Sabuk. A must-visit place for those looking for souvenirs.",
            cn: "在这里可以找到旌善郡和舍北的可爱独特商品。如果您想购买礼物，这里是必去之地。",
            ja: "旌善郡と舎北のかわいい独特なグッズに出会える。贈り物を買うなら必ず訪れるべき場所の一つです。"
        },
    specialty: { ko: "다양한 가격의 굿즈 5,000 ~ 30,000원", 
                     en: "Merchandise in various prices 5,000-30,000KRW", 
                     cn: "各种价格的商品 5,000 ~ 30,000韩元", 
                     ja: "様々な価格のグッズ 5,000 ~ 30,000" },
        query: "daheemarket.html"
    },
      {
        id: 15,
        name: { ko: "또오다래쉬", en: "Come Again Lashes", cn: "Come Again 睫毛嫁接店", ja: "トオダ・ラッシュ店" },
        cat: "general",
        catName: { ko: "생활·잡화", en: "Daily Goods", cn: "生活·百货", ja: "生活・雑貨" },
        desc: {
            ko: "속눈썹 펌, 속눈썹 연장을 해 드립니다. 예약하고 오시길 부탁드려요.",
            en: "We offer eyelash perms and extensions. Please make a reservation.",
            cn: "我们提供睫毛烫和睫毛嫁接服务。请提前预约。",
            ja: "まつげパーマ、まつげエクステを行っています。ご予約の上、ご来店ください。"
        },
    specialty: { ko: "속눈썹 펌 35,000원 &nbsp;&nbsp;&nbsp; 속눈썹 연장 45,000원 <br> 펌 포인트 연장 60,000원", 
                     en: "Eyelash perms and extensions 35,000-60,000KRW <br> Perm and point extension 60,000KRW", 
                     cn: "睫毛烫、睫毛嫁接 35,000 ~ 60,000韩元 <br> 烫和点嫁接 60,000韩元", 
                     ja: "まつげパーマ、まつげエクステ 35,000 ~ 60,000 <br> パーマとポイントエクステ 60,000" },
        query: "comeagainlashes.html"
    },
     {
        id: 16,
        name: { ko: "만리장성", en: "The Great Wall of China", cn: "万里长城", ja: "万里の長城" },
        cat: "restaurants",
        catName: { ko: "식당", en: "Restaurant", cn: "特色餐厅", ja: "郷土料理店" },
        desc: {
            ko: "사북에서 가장 오랜 역사를 가진 중식당이랍니다. 24시간 영업해 언제나 불이 켜져 있어요(수요일 격주휴무).",
            en: "The oldest Chinese restaurant in Sabuk. Open 24 hours, always with the lights on (bi-weekly Wednesday off).",
            cn: "舍北最古老的中餐厅。24小时营业，灯火通明（每两周周三休息）。",
            ja: "舎北で最も古い中華料理店です。24時間営業で、いつも明かりがついています（隔週水曜日休業）。"
        },
        specialty: { ko: "짜장면 8,000원 &nbsp;&nbsp;&nbsp; 짬뽕 9,000원 <br> 사천짜장 14,000원 &nbsp;&nbsp;&nbsp; 마파두부 39,000원",
             en: "Jajangmyeon 8,000 KRW &nbsp;&nbsp;&nbsp; Jjamppong 9,000 KRW <br> Sichuan Jajang 14,000 KRW &nbsp;&nbsp;&nbsp; Mapo Tofu 39,000 KRW", 
             cn: "炸酱面 8,000韩元 &nbsp;&nbsp;&nbsp; 炒河粉 9,000韩元 <br> 四川炸酱 14,000韩元 &nbsp;&nbsp;&nbsp; 麻婆豆腐 39,000韩元", 
             ja: "ジャジャンミョン 8,000 &nbsp;&nbsp;&nbsp; ジャムポン 9,000 <br> 四川ジャジャン 14,000 &nbsp;&nbsp;&nbsp; マポトゥフ 39,000" },
        query: "malijangseong.html",
    }

];

let currentLang = 'ko';
let currentFilter = 'restaurants';

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
        const mapSearchUrl = `./stores/${encodeURIComponent(store.query)}`;

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