// 4개 국어 번역 딕셔너리 (KO, EN, CN, JA)
const i63nData = {
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
        ev2_title: "Gam-Ok (Prison: Corn & Potato) Festa",
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
        c_email_title: "Telephone Contact",
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
        ev2_title: "土豆·玉米美食节 (监狱 Festa)",
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
        c_email_title: "咨询电话",
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
        ev2_title: "じゃがいも・とうもろこしフェスタ (監獄Festa)",
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
        hist_t2_desc: "リゾートの開業とともに、旌善の香り高いコンドゥレ菜や蕎麦、薬草などを提供する代表的な市場へと発展しました。",
        hist_t3_title: "文化とお祭りの舞台",
        hist_t3_desc: "舎北ナイトマーケットやとうもろこしフェスタを通じて、住民と旅行者が触れ合える活気ある空間を創出しています。",
        hist_t4_title: "心温まるおもてなし",
        hist_t4_desc: "40年間培ってきた温かい人情と快適な環境で、皆様のお越しをお待ちしております。",
        contact_tag: "CONTACT & VISIT",
        contact_heading: "アクセスとお問い合わせ",
        contact_subtext: "太白線舎北駅から徒歩5分！旌善旅のスタートは舎北市場から。",
        c_email_title: "電話でのお問い合わせ",
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
        name: { ko: "짱얼큰칼국수", en: "Jjang Spicy Kalguksu", cn: "JJANG香辣刀切面（赞！超辣刀切面）", ja: "チャン・オルクンカルグクス（特製ピリ辛手打ちうどん）" },
        cat: "restaurants",
        catName: { ko: "식당", en: "Restaurant", cn: "特色餐厅", ja: "郷土料理店" },
        desc: {
            ko: "직접 담근 김치와 면, 수제비가 일품인 칼국수 전문점입니다.",
            en: "A noodle house famous for homemade kimchi, handcrafted noodles, and sujebi(hand-torn noodle).",
            cn: "自制辛奇、手擀面与面片汤一绝的刀切面馆。",
            ja: "自家製のキムチと麺、手打ちうどんが自慢のカルグクス専門店。"
        },
        specialty: { ko: "칼국수 9,000원(보통, 얼큰 장, 들깨)<br> 수제비 9,000원(보통, 얼큰 장, 들깨) <br> 칼제비 9,000원(보통, 얼큰 장, 들깨)<br>감자전 10,000원<br> 매콤 부추전 10,000원",
             en: "Kalguksu(Knife-Cut Noodles) 9,000 KRW (Regular, Spicy Soybean Paste, Perilla Seed) <br> Sujebi(Hand-Torn Noodle) 9,000 KRW (Regular, Spicy Soybean Paste, Perilla Seed) <br> Kalguksu + Sujebi 9,000 KRW (Regular, Spicy Soybean Paste, Perilla Seed) <br> Gamja Jeon (Potato Pancake) 10,000 KRW <br> Spicy Chive Pancake 10,000 KRW", 
             cn: "刀切面 9,000韩元（普通、辣味酱、芝麻）<br> 面片汤(韩式手撕面片汤) 9,000韩元（普通、辣味酱、芝麻）<br> 刀切面+面片汤 9,000韩元（普通、辣味酱、芝麻）<br> 土豆煎饼 10,000韩元 <br>香辣韭菜饼 10,000韩元", 
             ja: "カルグクス 9,000ウォン(普通, ピリ辛豆乳, エゴマ) <br> スジェビ(すいとん) 9,000ウォン(普通, ピリ辛豆乳, エゴマ) <br> カルジェビ(カルグクス＋スジェビの相盛り) 9,000ウォン(普通, ピリ辛豆乳, エゴマ) <br>カムジャ・ジョン (ジャガイモのチヂミ) 10,000 <br>ピリ辛ニラチヂミ 10,000ウォン" },
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
        specialty: { ko: "아메리카노 HOT 4,000원 /  ICED 4,500원 <br> 아이스크림 5,000원 /  까미도롱 키링 10,000원", 
            en: "Americano HOT 4,000 KRW/  ICED 4,500 KRW <br> Ice Cream 5,000 KRW / Kkamidorong Keychain 10,000 KRW", 
            cn: "美式咖啡 热 4,000韩元 / 冰 4,500韩元 <br> 冰淇淋 5,000韩元 / Kkamidorong钥匙扣 10,000韩元", 
            ja: "アメリカーノ HOT 4,000 / ICED 4,500 <br> アイスクリーム 5,000 / キャラクターキーホルダー 10,000" },
        query: "tantanari.html"
    },
    {
        id: 3,
         name: { ko: "안동상회", en: "Andong Store", cn: "安东商行", ja: "アンドン商会" },
        cat: "produce",
        catName: { ko: "농특산물·약초", en: "Local Produce & Herbs", cn: "农特产·草药", ja: "農特産品・山菜" },
        desc: {
            ko: "과일, 건어물 및 다양한 지역 농산물을 판매하고 있습니다.",
            en: "A store where you can find a variety of local produce and dried goods.",
            cn: "销售各种当地农产品和干货。",
            ja: "様々な地域の農産物と干物を販売中。"
        },
        specialty: { ko: "정선 곤드레 12,000원 / 공주밤 10,000원 <br> 옛날사탕 7,000원 / 사과 10,000원", 
                     en: "Gondre Namul 12,000 KRW / Gongju Chestnut 10,000 KRW <br> Old-fashioned Candy 7,000 KRW / Apples 8,000 KRW", 
                     cn: "旌善山蓟菜 12,000韩元 / 公州栗 10,000韩元 <br> 怀旧糖果 7,000韩元 / 苹果 8,000韩元", 
                     ja: "旌善コンドゥレ 12,000ウォン / 公州栗果 10,000ウォン <br> 昔ながらの飴 7,000ウォン / リンゴ 8,000ウォン" },
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
         specialty: { ko: "감탄빵 8개 세트 20,000원 / 감탄빵 4개 세트 10,000원 <br> 안전빵 1개 2,200원 / 감탄빵 1개 2,300 ~ 2,700원 <br> 아메리카노 HOT 3,500원 / ICED 4,000원 ", 
            en: "Gamtan Brownie 8-piece Set 20,000 KRW / Gamtan Brownie 4-piece Set 10,000 KRW <br> Hard Hat Bread 1 Piece 2,200 KRW <br> Gamtan Brownie 1 Piece 2,300-2,700 KRW <br>Americano HOT 3,500 KRW / ICED 4,000 KRW", 
            cn: "甘炭面包 8个装 20,000韩元 / 甘炭面包 4个装 10,000韩元 <br>安全帽面包 1个 2,200韩元 /甘炭面包 1个 2,300-2,700韩元 <br>美式咖啡 热 3,500韩元 / 冰 4,000韩元", 
            ja: "ガムタンパン 8個セット 20,000ウォン / ガムタンパン 4個セット 10,000ウォン <br>安全帽パン 1個 2,300-2,700ウォン <br> アメリカーノ HOT 3,500ウォン / ICED 4,000ウォン" },
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
        specialty: { ko: "인절미 10,000원 / 가래떡 10,000원 <br> 송편 10,000원 / 팥떡 10,000원",
             en: "Injeolmi 10,000 KRW / Garaetteok 10,000 KRW <br> Songpyeon 10,000 KRW / Patddeok 10,000 KRW", 
             cn: "年糕 10,000韩元 / 切糕 10,000韩元 <br> 松饼 10,000韩元 / 红豆糕 10,000韩元", 
             ja: "インジェオルミ 10,000 KRW / ガラエットク 10,000 KRW <br> ソンピョン 10,000 KRW / パットデオク 10,000 KRW" },
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
        specialty: { ko: "라면 6개들이 팩 7,500원 / 음료 700~3,800원 <br> 쌀 1kg 5,000원 10kg 39,000원 20kg 78,000원", 
                     en: "Ramyeon (6-Pack) 7,500 KRW / Beverages 700-3,800 KRW <br> uncooked rice 1kg 5,000 KRW 10kg 39,000 KRW 20kg 78,000 KRW", 
                     cn: "方便面 (6包入) 7,500韩元 / 饮料 700-3,800韩元 <br> 大米 1kg 5,000韩元 10kg 39,000韩元 20kg 78,000韩元", 
                     ja: "ラーメン (6袋入り) 7,500ウォン / ビバレッジ 700-3,800ウォン <br> 生米 1kg 5,000ウォン 10kg 39,000ウォン 20kg 78,000ウォン" },
        query: "haedongsuper.html"
    },
    {
        id: 7,
        name: { ko: "강릉통닭", en: "Gangneung Tongdak", cn: "江陵通鸭", ja: "江陵(カンヌン)チキン" },
        cat: "food",
        catName: { ko: "카페·먹거리", en: "Cafes & Desserts", cn: "咖啡厅·小吃", ja: "カフェ・デザート" },
        desc: {
            ko: "바삭바삭한 시장 치킨을 먹고 싶다면 찾아주세요. 생닭으로 즉석에서 조리해 드립니다.",
            en: "Come and enjoy our crispy market chicken! We prepare it fresh from raw chicken on the spot.",
            cn: "想要品尝香脆的市场鸡肉吗？欢迎前来品尝！ 我们现场用生鸡肉烹制。",
            ja: "サクサクの市場チキンが食べたくなったら、ぜひお立ち寄りください！ 生の鶏肉をその場で調理してお出しします。"
        },
        specialty: { ko: "후라이드 19,000원 / 양념치킨 23,000원", en: "Fried Chicken 19,000 KRW / Spicy Chicken 23,000 KRW", cn: "炸鸡 19,000韩元 / 辣子鸡 23,000韩元", ja: "フライドチキン 19,000 / スパイシーChicken 23,000" },
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
            ja: "コンドゥレ定食から焼き魚、ドデク焼き、スンドゥブチゲまで、多彩な韓国料理メニューを楽しめます。市場の正門のすぐ隣に位置しています。"
        },
         specialty: { ko: "곤드레정식 18,000원 / 임연수구이 17,000원 <br> 순두부찌개 12,000원 / 고등어구이 15,000원 <br> 더덕구이 17,000원 / 황태구이 17,000원 <br>제육볶음(2인 이상) 15,000원",
             en: "Gondre Set Meal 18,000 KRW / Grilled Atka Mackerel 17,000 KRW <br> Soft Tofu Stew / Grilled Mackerel 15,000 KRW /Grilled Deodeok 17,000 KRW / Grilled Dried Pollock with Spicy Seasoning 17,000 KRW <br>Stir-fried Pork (for 2 or more) 15,000 KRW", 
             cn: "山蓟菜套餐 18,000韩元 / 烤银鳕鱼 17,000韩元 <br> 嫩豆腐煲 12,000韩元 / 烤鲭鱼 15,000韩元 <br> 烤沙参 17,000韩元 / 烤干明太鱼 17,000韩元 <br>辣炒猪肉 （2人以上） 15,000韩元", 
             ja: "コンドゥレ定食 18,000ウォン / ホッケ焼き 17,000ウォン  <br>>スンドゥブチゲ 12,000ウォン / サバの塩焼き 15,000ウォン <br> 蔓人蔘焼き(デオドク) 17,000ウォン / ファンテグイ（干しスケトウダラのピリ辛焼き） 17,000ウォン <br>豚肉のピリ辛炒め(2名様分より承ります) 15,000ウォン" },
        query: "gangneungrestaurant.html"
    },
      {
        id: 9,
        name: { ko: "경북기름방", en: "Gyeongbuk Oil Shop", cn: "庆北油坊", ja: "慶北(キョンブク)油坊" },
        cat: "produce",
        catName: { ko: "농특산물·약초", en: "Local Produce & Herbs", cn: "农特产·草药", ja: "農特産品・山菜" },
        desc: {
            ko: "좋은 원료로 직접 짠 신선한 기름을 판매합니다. 시세에  따라 가격이 변동될 수 있습니다.",
            en: "We sell fresh, locally-sourced oils made from regional ingredients.  Prices may vary depending on the market.",
            cn: "我们销售用当地原料压榨的新鲜油。 价格可能因市场而异。",
            ja: "本地域の原料で絞った新鮮な油を販売しています。価格は市場によって変動する場合があります。"
        },
        specialty: { ko: "국산 참기름 38,000원 국산 들기름 25,000원 <br> 수입산 참기름 16,000원  수입산 들기름 15,000원/20,000원<br>고춧가루 색깔별 21,000 ~ 25,000원", 
                     en: "Domestic Sesame Oil 38,000 KRW  Domestic Perilla Oil 25,000 KRW <br> Imported Sesame Oil 16,000 KRW  Imported Perilla Oil 15,000 KRW/20,000 KRW <br>Red Chili Powder (By color / variety) 21,000-25,000 KRW", 
                     cn: "国产芝麻油 38,000韩元  国产紫苏油 25,000韩元 <br> 进口芝麻油 16,000韩元  进口紫苏油 15,000韩元/20,000韩元 <br>辣椒粉（按颜色） 21,000-25,000韩元", 
                     ja: "国内産ゴマ油 38,000ウォン  国内産エゴマ油 25,000ウォン <br> 輸入ゴマ油 16,000ウォン  輸入エゴマ油 15,000/20,000ウォン <br>唐辛子粉（色・品種別） 21,000-25,000ウォン" },
        query: "gyeongbukoil.html"
    },
    {
        id: 10,
        name: { ko: "경북상회(경북야채)", en: "Gyeongbuk Vegetable Shop", cn: "庆北蔬菜店", ja: "慶北(キョンブク)野菜店" },
        cat: "produce",
        catName: { ko: "농특산물·약초", en: "Local Produce & Herbs", cn: "农特产·草药", ja: "農特産品・山菜" },
        desc: {
            ko: "오늘 저녁 국거리, 반찬거리 재료로 딱인 신선한 야채들을 판매하고 있습니다.",
            en: "We sell fresh, locally-sourced vegetables for today's soup and side dishes.",
            cn: "我们销售今日汤品和配菜所需的新鲜当地蔬菜。",
            ja: "今日のスープと副菜に必要な新鮮な地産野菜を販売しています。"
        },
         specialty: { ko: "(시세에 따라 가격이 변동됩니다.) 감자, 고구마, 배추, 상추, 호박, 가지, 고추 등. 1,000 ~ 5,000원", 
                     en: "(Prices may vary depending on the market.) Potatoes, sweet potatoes, napa cabbages, lettuce, pumpkins, eggplants, chili peppers, etc. 1,000 ~ 5,000 KRW", 
                     cn: "(价格可能因市场而异。) 土豆、红薯、大白菜、生菜、南瓜、茄子、辣椒等。 1,000 ~ 5,000韩元", 
                     ja: "(価格は市場による。) ジャガイモ、サツマイモ、白菜、サンチュ（レタス）、カボチャ、ナス、唐辛子など。 1,000 ~ 5,000ウォン" },
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
       specialty: { ko: "아메리카노 HOT 2,500원 / ICED 3,000원 <br> 카페라떼 HOT 3,000원 / ICED 3,000원<br>팥빙수 6,000원 / 유자차 3,000원", 
            en: "Americano HOT 2,500 KRW / ICED 3,000 KRW <br> Café Latte HOT 3,000 KRW / ICED 3,000 KRW <br>Red Bean Sherbet (Patbingsu) 6,000 KRW / Honey Citron Tea 3,000 KRW", 
            cn: "美式咖啡 热 2,500韩元 / 冰 3,000韩元 <br> 拿铁咖啡 热 3,000韩元 / 冰 3,000韩元 <br>红豆冰沙 6,000韩元 / 柚子茶 3,000韩元", 
            ja: "アメリカーノ HOT 2,500ウォン / ICED 3,000ウォン <br> カフェラテ HOT 3,000ウォン / ICED 3,000ウォン <br>小豆かき氷(パトビンス) 6,000ウォン / 柚子茶 3,000ウォン" },
        query: "cafegil.html"
    },
     {
        id: 12,
        name: { ko: "김밥나라", en: "Gimbap Nara", cn: "紫菜包饭王国", ja: "キンパッナラ" },
        cat: "restaurants",
        catName: { ko: "식당", en: "Restaurant", cn: "特色餐厅", ja: "郷土料理店" },
        desc: {
            ko: "김밥과 라면? 김밥과 떡볶이? 김밥과 순두부찌개? 어떤 메뉴든 어울립니다.",
            en: "Gimbap and ramen? Gimbap and tteokbokki? Gimbap and soft tofu stew? Any combination works well.",
            cn: "紫菜包饭和拉面？紫菜包饭和辣炒年糕？紫菜包饭和嫩豆腐煲？任何组合都很棒。",
            ja: "キンパとラーメン？キンパとトッポッキ？キンパとスンドゥブチゲ？どの組み合わせも相性抜群です。"
        },
       specialty: { ko: "원조김밥 3,500원 김치볶음밥 9,000원 <br> 라면 5,000원 비빔밥 9,000원 <br> 돈까스 10,000원",
             en: "Original Gimbap 3,500 KRW / Kimchi Fried Rice 9,000 KRW <br> Ramyeon 5,000 KRW / Bibimbap (Mixed Rice with Vegetables & Meat) 9,000 KRW <br>Tonkatsu (Pork Cutlet) 10,000 KRW", 
             cn: "原味紫菜包饭 3,500韩元 / 辣白菜炒饭 9,000韩元 <br> 辛拉面 5,000韩元 / 拌饭（石锅/大碗拌饭） 9,000韩元 <br> 炸猪排 10,000韩元", 
             ja: "オリジナルキンパ 3,500ウォン / キムチポックンパ 9,000ウォン <br> ラミョン（韓国ラーメン） 5,000ウォン / ビビンバ（混ぜご飯） 9,000ウォン <br>トンカツ 10,000ウォン" },
        query: "gimbapnara.html"
    },
     {
        id: 13,
        name: { ko: "내사랑사book", en: "My Love Sabuk Bookstore", cn: "我的爱sabook书店", ja: "私の愛sabook書店" },
        cat: "general",
        catName: { ko: "생활·잡화", en: "Daily Goods", cn: "生活·百货", ja: "生活・雑貨" },
        desc: {
            ko: "사북 내 유일한 책방입니다. 어린이와 어른들을 위한 그림책과 동화책을 주로 판매합니다. <br> #그림책 #삶 #인생 #행복 #여행",
            en: "The only bookstore in Sabuk. We mainly sell picture books and fairy tales for children and adults. <br> #PictureBooks #Life #Happiness #Travel",
            cn: "旌善内唯一的书店。我们主要销售图画书和童话书。 <br> #图画书 #生活 #人生 #幸福 #旅行",
            ja: "薩北内唯一の書店です。子供と大人のための絵本と妖精の物語を主に販売しています。 <br> #絵本 #人生 #幸福 #旅行"
        },
       specialty: { ko: "광부 가족의 이야기를 다룬 그림책 <사북의 밤은 아직 따뜻하다> 14,000원", 
                     en: "Picture Book: The Night in Sabuk Is Still Warm — A Story of a Coal Miner's Family 14,000KRW", 
                     cn: "讲述矿工家庭温暖故事的绘本《舍北的夜晚仍然温暖》14,000韩元", 
                     ja: "炭鉱夫の家族の物語を描いた絵本『サブクの夜はまだあたたかい』 14,000KRW" },
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
      specialty: { ko: "정선화투래요(지역관광화투) 15,000원 <br> 정선마그넷 6,000 ~ 15,000원 <br> 정선을 기억해 엽서 2,000 ~ 2,500원", 
                     en: "Jeongseon Edition Hwatu Playing Cards 15,000 KRW <br> Jeongseon Souvenir Magnet 6,000 - 15,000 KRW <br> 'Remember Jeongseon' Postcard 2,000-2,500 KRW", 
                     cn: "旌善花牌（地方特色旅游花牌） 15,000韩元 <br> 旌善特色冰箱贴 6,000 - 15,000韩元 <br> '记住旌善'明信片 2,000 - 2,500韩元", 
                     ja: "旌善花札（ご当地観光花札） 15,000ウォン <br> 旌善（チョンソン）マグネット 6,000 - 15,000ウォン <br> 「チョンソンを記憶して」絵はがき 2,000 - 2,500ウォン" },
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
    specialty: { ko: "속눈썹 펌 35,000원 / 속눈썹 연장 45,000원 <br> 펌 포인트 연장 60,000원", 
                     en: "Eyelash perms and extensions 35,000-60,000KRW <br> Perm and point extension 60,000KRW", 
                     cn: "睫毛烫、睫毛嫁接 35,000 ~ 60,000韩元 <br> 烫和点嫁接 60,000韩元", 
                     ja: "まつげパーマ、まつげエクステ 35,000 ~ 60,000ウォン <br> パーマとポイントエクステ 60,000" },
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
         specialty: { ko: "볶음밥 12,000원 쟁반짜장(2인) 28,000원 <br> 삼선짬뽕 16,000원 사천탕수육(소) 42,000원 <br> 차돌짬뽕 18,000원 ",
             en: "Fried Rice KRW 12,000 / Seafood Platter Jjajang (Serves 2) KRW 28,000 <br> Samseon Jjamppong (Spicy Seafood Noodle Soup) KRW 16,000 Sichuan Sweet and Sour Pork (S) KRW 42,000 <br>Beef Brisket Jjamppong KRW 18,000", 
             cn: "炒饭 12,000韩元 / 大盘炸酱面（2人份） 28,000韩元 <br>三鲜炒马面（三鲜辣海鲜面） 16,000韩元 / 四川糖醋肉（小） 42,000韩元 <br>牛胸肉炒马面（牛胸肉辣汤面） 18,000韩元", 
             ja: "チャーハン 12,000ウォン / 皿ジャージャー麺（2人前） 28,000ウォン <br>三鮮チャンポン（海鮮辛口海鮮麺） 16,000ウォン / 四川風タンスユク（酢豚・小） 42,000ウォン <br>チャドルバギ（牛あばら肉）チャンポン 18,000ウォン" },
        query: "malijangseong.html",
    },
    {
        id: 17,
        name: { ko: "미향란제리", en: "Mihyang Lingerie Store", cn: "美香内衣店", ja: "ミヒャン下着屋" },
        cat: "general",
        catName: { ko: "생활·잡화", en: "Daily Goods", cn: "生活·百货", ja: "生活・雑貨" },
        desc: {
            ko: "속옷, 양말, 란제리 세트 등을 저렴한 가격으로 판매합니다.",
            en: "We sell underwear, socks, and lingerie sets at affordable prices.",
            cn: "我们以实惠的价格销售内衣、袜子和内衣套装。",
            ja: "下着、靴下、ランジェリーセットなどをお手頃な価格で販売しています。"
        },
    specialty: { ko: "양말 2,000 ~ 4,000원 / 팬티 세트 15,000 ~ 30,000원 <br> 메리야쓰 세트 18,000 ~ 30,000원", 
                     en: "Socks 2,000 ~ 4,000KRW / Panties Set 15,000 ~ 30,000KRW <br> Undershirt Set 18,000 ~ 30,000KRW", 
                     cn: "袜子 2,000 ~ 4,000韩元 / 内裤套装 15,000 ~ 30,000韩元 <br> 内衣套装 18,000 ~ 30,000韩元", 
                     ja: "靴下 2,000 ~ 4,000ウォン / 内衣セット 15,000 ~ 30,000ウォン <br> 下着セット 18,000 ~ 30,000ウォン" },
        query: "mihyang.html"
    },
    {
        id: 18,
        name: { ko: "사북의 보은", en: "Boeun in Sabuk", cn: "舍北的宝恩", ja: "舎北の宝恩" },
        cat: "food",
        catName: { ko: "카페·먹거리", en: "Cafes & Desserts", cn: "咖啡厅·小吃", ja: "カフェ・スイーツ" },
        desc: {
            ko: "사북의 유일한 디저트 전문점입니다. 타르트, 스콘, 쿠키 등 매일 매일 다른 종류의 디저트를 굽습니다.",
            en: "The only dessert shop in Sabuk. We bake different types of desserts every day.",
            cn: "舍北唯一的甜点专卖店。每天烘焙不同种类的甜点。",
            ja: "舎北唯一のデザート専門店。毎日異なる種類のデザートを焼きます。"
        },
        specialty: { ko: "레몬큐브(3,800원), 에그타르트, 휘낭시에, 곰돌이 마들렌, 초코프레첼 등.", 
            en: "Lemon Cube (3,800 KRW), Egg tarts, financiers, bear-shaped madeleines, chocolate pretzels, etc. ", 
            cn: "柠檬方块 (3,800韩元), 蛋挞、费南雪、小熊玛德莲蛋糕、巧克力椒盐脆饼等。", 
            ja: "レモンキューブ (3,800ウォン), エッグタルト、フィナンシェ、くまちゃんマドレーヌ、チョコプレッツェルなど。" },
        query: "boeun.html"
    },
    {
        id: 19,
        name: { ko: "박대감화로구이", en: "Park Daegam Korean BBQ", cn: "朴大监炭火烤肉", ja: "パッテガム火鉢焼き(ファログイ)" },
        cat: "restaurants",
        catName: { ko: "식당", en: "Restaurant", cn: "特色餐厅", ja: "郷土料理店" },
        desc: {
            ko: "지글지글 화로 위 돼지갈비와 LA갈비를 푸짐하게 즐길 수 있는 고깃집입니다. 시장 입구에 있어요.",
            en: "A Korean BBQ restaurant offering delicious pork ribs and LA ribs on a sizzling hot plate. Located at the entrance of the market.",
            cn: "在炭火烤盘上享用美味的猪排和洛杉矶排骨的烤肉店。位于市场入口处。",
            ja: "ジューシーな豚カルビとLAカルビを炭火で楽しめる焼肉店です。市場の入口にあります。"
        },
        specialty: { ko: "돼지 왕갈비 20,000원(280g) / 양념 소갈비살 24,000원(160g) <br> 돼지 등갈비 19,000원(250g) / LA 양념갈비 27,000원(250g) <br> 냉면 8,000원 /설렁탕 12,000원",
             en: "Grilled Pork Ribs 20,000 KRW (280g) / Marinated Beef Ribs 24,000 KRW (160g) / Grilled Pork Back Ribs 19,000 KRW(250g) <br> LA Marinated Ribs 27,000 KRW <br>Nengmyeon (Cold Noodles) 8,000 KRW / Seolleongtang (Ox Bone Soup) 12,000 KRW", 
             cn: "猪排 20,000韩元 (280g)/ 腌制牛排 24,000韩元 (160g)<br>  猪背排19,000韩元 (250g) / 洛杉矶腌制排骨 27,000韩元 <br> 冷面 8,000韩元 /雪浓汤（牛骨汤） 12,000韩元", 
             ja: "豚カルビ 20,000ウォン (280g)/ 腌製牛肉カルビ 24,000ウォン (160g) <br>  豚バックリブ 19,000ウォン (250g)/ LA 腌製カルビ 27,000ウォン <br> 冷麺 8,000ウォン / ソルロンタン（牛骨スープ）12,000ウォン" },
        query: "parkdaegam.html"
    },
      {
        id: 20,
        name: { ko: "빠Star", en: "PpaStar", cn: "帕斯塔", ja: "パスタ" },
        cat: "restaurants",
        catName: { ko: "식당", en: "Restaurant", cn: "特色餐厅", ja: "郷土料理店" },
        desc: {
            ko: "내 입맛에 딱 맞는 이태리 퓨전 면 요리를 즐기고 싶으시다면? 청년몰 3층에서 기다리고 있습니다.",
            en: "If you want to enjoy Italian fusion noodles that match your taste, we're waiting for you on the 3rd floor of the Youth Mall.",
            cn: "如果您想享受符合您口味的意大利融合面食，请到青年商场三楼，我们在等您。",
            ja: "自分の味覚にぴったり合うイタリアンフュージョンの麺料理を楽しみたい方は、青年モールの3階でお待ちしております。"
        },
        specialty: { ko: "김치필라프 11,900원 / 베이컨까르보나라 11,900원 <br> 그릴드치킨크림 13,900원 &nbsp;&nbsp; 해물크림파스타 12,900원<br>목살그릴스테이크(450g) 23,900원 &nbsp;&nbsp; 까르보나라리조또 12,900원",
             en: "Kimchi Pilaf 11,900 KRW / Bacon Carbonara 11,900 KRW <br> Grilled Chicken Cream 13,900 KRW &nbsp;&nbsp; Seafood Cream Pasta 12,900 KRW<br>Grilled Pork Neck Steak (450g) 23,900 KRW &nbsp;&nbsp; Carbonara Risotto 12,900 KRW", 
             cn: "泡菜饭 11,900韩元 / 培根卡博纳拉 11,900韩元 <br> 烤鸡肉奶油 13,900韩元 &nbsp;&nbsp; 海鲜奶油意面 12,900韩元 <br> 碳烤猪梅花肉排 (450g) 23,900韩元 &nbsp;&nbsp; 培根蛋酱烩饭（卡邦尼意大利炖饭） 12,900韩元", 
             ja: "キムチピラフ 11,900ウォン / ベーコンカルボナーラ 11,900ウォン <br> グリルドチキンクリーム 13,900ウォン &nbsp;&nbsp; シーフードクリームパスタ 12,900ウォン<br>豚肩ロースのグリルステーキ (450g) 23,900ウォン &nbsp;&nbsp; カルボナーラリゾット 12,900ウォン" },
        query: "ppastar.html"
    },
     {
        id: 21,
        name: { ko: "산마루축산", en: "Sanmaru Butcher's", cn: "山马鲁肉店", ja: "サンマル畜産" },
        cat: "produce",
        catName: { ko: "농특산물·약초", en: "Local Produce & Herbs", cn: "农特产·草药", ja: "農特産品・山菜" },
        desc: {
            ko: "신선한 고기를 부위별로 판매합니다. 시장 입구 부근으로 오세요.",
            en: "We sell fresh meat by cuts. Please come near the market entrance!",
            cn: "我们按部位销售新鲜肉类。请到市场入口附近。",
            ja: "新鮮な肉を部位別に販売しています。市場入口付近にお越しください。"},
        specialty: { ko: "*한우, 돼지고기, 닭고기 가격은 시세에 따라 변동됩니다.", 
                     en: "*Prices for Korean beef, pork, and chicken vary according to market rates.", 
                     cn: "*韩国牛、猪肉、鸡肉的价格会根据市场行情波动。", 
                     ja: "*韓国牛、豚肉、鶏肉の価格は市場レートに応じて変動します。" },
        query: "sanmaru.html"
    },
      {
        id: 22,
        name: { ko: "정선담아", en: "Jeongseondama", cn: "盛满旌善", ja: "旌善(チョン・ソン)ダマ" },
        cat: "food",
       catName: { ko: "카페·먹거리", en: "Cafes & Desserts", cn: "咖啡厅·小吃", ja: " カフェ・デザート" },
        desc: {
            ko: "청년몰 1층에서 기다리고 있습니다. 강원도 특산물로 만든 아이스크림과 당고를 즐겨 보세요!",
            en: "We are waiting for you on the ground floor of the Youth Mall. Enjoy ice cream and dango made with local specialties!",
            cn: "我们在青年商场的一楼等着您。享受用江原道特产制作的冰淇淋和团子吧！",
            ja: "青年モールの1階でお待ちしております。江原道の特産品で作られたアイスクリームと団子をお楽しみください。"
        },
        specialty: { ko: "초당옥수수 아이스크림 6,800원 / 정선 감자 아이스크림 5,000원 <br> 벌꿀집 요거트 아이스크림 5,800원 / 꿀당고 3,500원 ", 
                     en: "Sweet Corn Ice Cream 6,800 KRW / Jeongseon Potato Ice Cream 5,000 KRW <br> Bee Hive Yogurt Ice Cream 5,800 KRW / Honey Dango 3,500 KRW", 
                     cn: "甜玉米冰淇淋 6,800韩元 / 旌善土豆冰淇淋 5,000韩元 <br> 蜜蜂屋酸奶冰淇淋 5,800韩元 / 蜂蜜团子 3,500韩元", 
                     ja: "スイートコーンアイスクリーム 6,800 / セオングソンジャガイモアイスクリーム 5,000 <br> ビークラウンヨーグルトアイスクリーム 5,800 / ハチミツ団子 3,500" },
        query: "jeongseondama.html"
    },
      {
        id: 23,
        name: { ko: "사북연세치과", en: "Yonsei Dental Clinic", cn: "延世牙科诊所", ja: "延世歯科クリニック" },
        cat: "general",
        catName: { ko: "병원·약국", en: "Hospitals & Pharmacies", cn: "医院·药店", ja: "病院・薬局" },
        desc: {
            ko: "시장 입구 주변에 위치한 치과입니다. 2층으로 올라오세요.<br> #치과 #의료 #건강",
            en: "A dental clinic located near the market entrance. Please come up to the 2nd floor.<br> #DentalClinic #Medical #Health",
            cn: "位于市场入口附近的牙科诊所。请上到二楼。<br> #牙科诊所 #医疗 #健康",
            ja: "市場の入り口付近にある歯科医院です。2階にお越しください。<br> #歯科医院 #医療 #健康"
        },
        specialty: { ko: "시세에 따라 스케일링, 치아교정, 신경치료, 임플란트 등의 서비스를 제공합니다.", 
                     en: "Depending on the market price, we offer services such as scaling, orthodontics, root canal treatment, and implants.", 
                     cn: "根据市场价格，我们提供洁牙、正畸、根管治疗和种植牙等服务。", 
                     ja: "市場の価格に応じて、スケーリング、矯正治療、根管治療、インプラントなどのサービスを提供しています。" },
        query: "yonseidentalclinic.html"
    },
     {
        id: 24,
        name: { ko: "650우화정", en: "650Woohwajeong", cn: "650", ja: "" },
        cat: "restaurants",
        catName: { ko: "식당", en: "Restaurant", cn: "特色餐厅", ja: "郷土料理店" },
        desc: {
            ko: "온 가족이 함께 즐기는 한우 맛집입니다. 정선 한우, 드셔 보세요!",
            en: "A Korean BBQ restaurant offering delicious Hanwoo beef. Try the local specialty!",
            cn: "一家让全家人共享的韩牛美食店。来品尝一下正宗的旌善韩牛吧！",
            ja: "家族で楽しめる韓国牛の美味しいレストランです。旌善の韓国牛をお召し上がりください！"
        },
        specialty: { ko: "1++ 한우 등심 45,000원 / 한돈 삼겹 18,000원 <br> 차돌된장찌개 12,000원 / 한우불고기전골 20,000원 <br> 소양념갈비 38,000원 / 물냉면 12,000원 <br> 갈비탕 17,000원",
             en: "1++ Hanwoo Sirloin 45,000KRW / Pork Belly 18,000KRW <br> Soybean Paste Stew with Beef Brisket 12,000KRW / Hanwoo Bulgogi Hot Pot 20,000KRW <br> Marinated Beef Short Ribs (Yangnyeom Galbi) 38,000KRW / Mul-naengmyeon (Cold Noodles in Chilled Broth) 12,000KRW <br> Galbi-tang (Beef Short Ribs Soup) 17,000KRW", 
             cn: "1++ 韩牛西冷 45,000韩元 / 韩猪五花肉 18,000韩元 <br> 牛腩大酱汤 12,000韩元 / 韩牛烤肉火锅 20,000韩元 <br> 调味牛排骨 38,000韩元 / 水冷面 12,000韩元 <br> 牛排骨汤 17,000韩元", 
             ja: "1++ 韓国牛のシーロイン 45,000ウォン / 豚のヒレ 18,000ウォン <br> 牛ともばら肉入りテンジャンチゲ 12,000ウォン / 韓国牛のプルゴギ鍋 20,000ウォン <br> 味付け牛カルビ（ヤンニョム牛カルビ） 38,000ウォン / 水冷面 12,000ウォン <br> カルビタン（牛カルビスープ） 17,000ウォン" },
        query: "uhwajeong.html"
    },
    {
        id: 25,
        name: { ko: "프렌즈스크린", en: "Friends Screen", cn: "朋友模拟高尔夫(Friends Screen)", ja: "フレンズスクリーン(Friends Screen)" },
        cat: "general",
        catName: { ko: "생활·잡화", en: "Daily Goods", cn: "生活·百货", ja: "生活・雑貨" },
        desc: {
            ko: "시장에서 저렴하게 스크린골프를 즐길 수 있는 공간입니다. 가족, 친구들과 함께 즐거운 시간을 보내세요.",
            en: "A space where you can enjoy screen golf at affordable prices at the market. Spend wonderful moments with your family and friends.",
            cn: "在市场上以实惠的价格享受模拟高尔夫的空间。与家人和朋友一起度过美好时光。",
            ja: "市場でリーズナブルな価格でスクリーンゴルフを楽しめる空間です。家族や友人と素晴らしい時間を過ごしてください。"
        },
    specialty: { ko: "*연습장이용료 1개월 100,000원 1시간 10,000원. <br> 시간대에 따라 가격이 변동됩니다. <br> 00시 ~ 15시 18홀 15,000원 / 9홀 13,000원(18홀 이용 후 10,000원).<br> 15시 ~ 24시 18홀 18,000원 / 9홀 15,000원(18홀 이용 후 10,000원)." , 
                     en: "*Practice fee: 1 month 100,000 KRW, 10,000 KRW/hour. <br> Prices may vary depending on the time of day. <br> 00:00 ~ 15:00 18 holes 15,000 KRW / 9 holes 13,000 KRW (after playing 18 holes, 10,000 KRW).<br> 15:00 ~ 24:00 18 holes 18,000 KRW / 9 holes 15,000 KRW (after playing 18 holes, 10,000 KRW).", 
                     cn: "*练习费：1个月100,000韩元，1小时10,000韩元。 <br> 价格可能因时间而异。 <br> 00:00 ~ 15:00 18洞15,000韩元 / 9洞13,000韩元（打完18洞后10,000韩元）。<br> 15:00 ~ 24:00 18洞18,000韩元 / 9洞15,000韩元（打完18洞后10,000韩元）。", 
                     ja: "*練習料金：1か月100,000ウォン、1時間10,000ウォン。 <br> 価格は時間帯によって異なります。 <br> 00:00 ~ 15:00 18ホール 15,000ウォン / 9ホール 13,000ウォン（18ホール利用後は10,000ウォン）。<br> 15:00 ~ 24:00 18ホール 18,000ウォン / 9ホール 15,000ウォン（18ホール利用後は10,000ウォン）。" },
        query: "friendsscreen.html"
    },
     {
        id: 26,
        name: { ko: "용석집", en: "Yongseokjib", cn: "龙硕楼", ja: "ヨンソク·ジブ" },
        cat: "restaurants",
        catName: { ko: "식당", en: "Restaurant", cn: "特色餐厅", ja: "郷土料理店" },
        desc: {
            ko: "선지해장국 맛집입니다. 새벽 5:30에 문을 열고 오후 3시에 문을 닫아요!",
            en: "A restaurant specializing in Seonji Haejang-guk (Ox Blood Hangover Soup). It opens at 5:30 AM and closes at 3 PM!",
            cn: "一家专门提供牛血解酒汤的餐厅。营业时间为早上5:30至下午3点！",
            ja: "ソンジヘジャンクク（牛の血の塊入り酔い覚ましスープ）専門店です。 朝5:30に開店し、午後3時に閉店します！"
        },
        specialty: { ko: "선지해장국 11,000원 <br> 콩나물해장국 11,000원 <br> 육개장 11,000원 <br> 갈비탕 13,000원 <br> 뚝불 13,000원 <br>떡만둣국 11,000원",
             en: "Seonji Haejang-guk (Ox Blood Hangover Soup) 11,000 KRW <br> Bean Sprout Haejang-guk (Kongnamul-guk) 11,000 KRW <br> Yukgaejang (Spicy Beef and Vegetable Soup) 11,000 KRW <br> Galbi-tang (Short Rib Soup) 13,000 KRW <br> Ttukbul (Bulgogi in a Hot Earthenware Pot) 13,000 KRW <br> Tteok Mandu Guk (Rice Cake and Dumpling Soup) 11,000 KRW", 
             cn: "牛血醒酒汤 11,000韩元 <br> 豆芽醒酒汤 11,000韩元 <br> 辣牛肉汤 11,000韩元 <br> 排骨汤 13,000韩元 <br> 铁板牛肉 13,000韩元 <br> 年糕饺子汤 11,000韩元", 
             ja: "ソンジヘジャングク（牛血ゼリー入り酔い覚ましスープ） 11,000ウォン <br> もやしヘジャングク（豆もやしの酔い覚ましスープ） 11,000ウォン <br> ユッケジャン（牛肉と野菜のピリ辛スープ） 11,000ウォン <br> カルビタン（牛骨付きカルビスープ） 13,000ウォン <br>トゥップル（土鍋プルコギ） 13,000ウォン <br>トックマンドゥクッ（餅と餃子のスープ） 11,000ウォン" },
        query: "yongseokjib.html",
    },
      {
        id: 27,
        name: { ko: "유명약국", en: "Yumyeong Pharmacy", cn: "有名药店", ja: "有名(ユミョン)薬局" },
        cat: "general",
        catName: { ko: "병원·약국", en: "Hospitals & Pharmacies", cn: "医院·药店", ja: "病院・薬局" },
        desc: {
            ko: "사북1교와 사북중앙로가 만나는 삼거리에 위치한 약국입니다. 모든 약이 구비되어 있습니다!",
            en: "A pharmacy located at the intersection of Sabuk 1st Bridge and Sabuk Central Road. All medicines are available!",
            cn: "位于舍北1桥和舍北中央路交汇处的药店。所有药品均有供应！",
            ja: "サブク1番橋とサブク中央ロードの交差点に位置する薬局です。すべての薬が在庫があります！"
        },
         specialty: { ko: "타이레놀(10정) 3,000원, 판피린/판콜(종합감기약) 3,000원, 까스활명수 1병 1,100원", 
                     en: "Tylenol (10 tablets) 3,000KRW, Panpyrin/Pancol (cold medicine) 3,000KRW, Gas Hwalmyungsoo(Carbonated Herbal Digestive Drink) 1 bottle 1,100KRW", 
                     cn: "泰诺(10片) 3,000韩元, 盘皮林/盘可(综合感冒药) 3,000韩元, 活命水(健胃消食口服液) 1瓶 1,100韩元", 
                     ja: "タイレノール(10錠) 3,000ウォン, パンピリン/パンコール(風邪薬) 3,000ウォン, ガスハルミョンソ(消化促進炭酸生薬ドリンク) 1本 1,100ウォン" },
        query: "yumyeongpharmacy.html"
    },
    {
        id: 28,
        name: { ko: "원조순대국밥", en: "Original Sundaegukbap", cn: "始祖血肠汤饭", ja: "元祖スンデクッパプ" },
        cat: "restaurants",
        catName: { ko: "식당", en: "Restaurant", cn: "特色餐厅", ja: "郷土料理店" },
        desc: {
            ko: "뜨끈하고 든든한 시장 국밥으로 정선의 맛을 느껴보세요.",
            en: "A hot and filling market-style rice soup where you can experience the taste of Jeongseon.",
            cn: "热腾腾、饱腹感十足的市场风味汤饭，让您品尝旌善的地道美味。",
            ja: "熱々で満腹感のある市場風のご飯です。旌善の味をぜひお楽しみください。"
        },
        specialty: { ko: "순대국밥 11,000원 / 곤드레순대국밥 12,000원 <br> 코다리조림 35,000원 / 곤드레다슬기해장국 12,000원",
             en: "Sundae-gukbap (Korean Blood Sausage Soup with Rice) 11,000KRW <br>> Gondre Sundae-gukbap (Blood Sausage Soup with Dried Thistle and Rice) 12,000KRW <br> Braised Semi-dried Pollock (2 Portions) 35,000KRW <br> Gondre Daseulgi-haejangguk (Marsh Snail & Thistle Hangover Soup) 12,000KRW",
             cn: "米肠汤饭 11,000韩元 / 山蓟菜米肠汤饭（贡德莱米肠汤饭） 11,000韩元 <br> 烤鳕鱼 35,000韩元 / 山蓟菜川螺解酒汤（贡德莱淡水螺解酒汤） 12,000韩元", 
             ja: "スンデクッパ（韓国式豚の血入り腸詰めクッパ） 11,000KRW / コンドゥレスンデクッパ 11,000KRW <br> コダリジョリム（半干しスケトウダラの甘辛煮付け / 2人前） 35,000KRW <br> コンドゥレとカワニナのヘジャンク（二日酔い覚ましスープ） 12,000KRW" },
        query: "sundaegukbap.html"
    },
    {
        id: 29,
        name: { ko: "제이(J)", en: "J(fashion)", cn: "J", ja: "J" },
        cat: "general",
        catName: { ko: "생활·잡화", en: "Daily Goods", cn: "生活·百货", ja: "生活・雑貨" },
        desc: {
            ko: "사북에서 구하기 힘든 패션 아이템들을 만나보실 수 있습니다. 다양한 의류와 액세서리가 있어요!",
            en: "You can find fashion items that are hard to find in Sabuk. We have a variety of clothing and accessories!",
            cn: "您可以在舍北找到一些难以买到的时尚单品。我们有各种各样的服装和配饰！",
            ja: "Sabukでは手に入らないファッションアイテムに出会えます。様々な衣料品とアクセサリーがあります！"
        },
        specialty: { ko: "티셔츠, 외투, 바지, 모자 등.", 
                     en: "T-shirts, coats, trousers, hats, etc.", 
                     cn: "外衣、衬衫、裤子、帽子等。", 
                     ja: "Tシャツ、コート、ズボン、帽子など。" },
        query: "j_fashion.html"
    },
    {
        id: 30,
        name: { ko: "시장기름방", en: "Market Oil Shop", cn: "市场油坊", ja: "市場油坊" },
        cat: "produce",
        catName: { ko: "농특산물·약초", en: "Local Produce & Herbs", cn: "农特产·草药", ja: "農特産品・山菜" },
        desc: {
            ko: "엄선된 재료로만 기름을 짭니다. 시세에 따라 가격이 바뀔 수 있습니다. 문의는 시장 안쪽으로 가셔서 [경북상회(경북야채)]를 방문해 주세요.",
            en: "We sell fresh, locally-sourced oils made from regional ingredients. <br>Prices may vary depending on the market.<br>Please visit [Gyeongbuk Vegetable Shop] inside the market for inquiries.",
            cn: "我们销售用当地原料压榨的新鲜油。 价格可能因市场而异。咨询请洽市场内部【庆北商会】。",
            ja: "本地域の原料で絞った新鮮な油を販売しています。価格は市場によって変動する場合があります。ご用の方は市場内の【慶北商会】へお越しください。"
        },
        specialty: { ko: "참깨, 국산콩, 서리태, 팥, 기피(거피) 등. <br>국산 들기름 25,000원 <br>국산 참기름 35,000원 <br> 수입 들기름 15,000원 <br> 수입 참기름 15,000원", 
                     en: "Sesame Seeds, Soybeans, Black Beans, Adzuki Beans, Hulled Beans, etc.<br>Domestic Perilla Oil 25,000KRW &nbsp;&nbsp;&nbsp; Domestic Sesame Oil <br> Imported Sesame Oil 15,000 KRW <br>Imported Perilla Oil 15,000 KRW/20,000 KRW ", 
                     cn: "白芝麻、精选本土大豆、黑豆、红小豆、去皮豆类等。<br>国产紫苏油 25,000韩元 <br> 国产芝麻油 38,000韩元 <br> 进口紫苏油 15,000韩元 <br> 进口芝麻油 15,000韩元", 
                     ja: "胡麻、大豆、小豆、ソリテ黒豆、皮去り豆(きぴ)など。<br>国内産エゴマ油 25,000 <br> 国内産ゴマ油 38,000 <br> 輸入エゴマ油 15,000 <br> 輸入ゴマ油 56,000 " },
        query: "gireumbang.html"
    }, 
    {
        id: 31,
        name: { ko: "준컴퓨터", en: "Jun Computer Repair Shop", cn: "俊电脑(维修店)", ja: "ジュン・コンピューター(修理店)" },
        cat: "general",
        catName: { ko: "생활·잡화", en: "Daily Goods", cn: "生活·百货", ja: "生活・雑貨" },
        desc: {
            ko: "컴퓨터 수리, 조립은 준컴퓨터에 맡겨 주세요! 용석집 왼편에 위치해 있습니다.",
            en: "For computer repairs and assembly, leave it to Jun Computer! It is located to the left of Yongseok House.",
            cn: "电脑维修、组装请交给准电脑！ 位于屋龙硕屋左侧。",
            ja: "パソコンの修理や組み立ては、ジュンコンピュータにお任せください！ ヨンソク·ジブの左側に位置しています。"
        },
        specialty: { ko: "컴퓨터 수리, 조립 및 부품 판매, CCTV 설치, LED 간판 설치, 네트워크 구축 등 다양한 IT 관련 서비스를 제공합니다.", 
                     en: "We provide a variety of IT-related services, including computer repair, assembly and parts sales, CCTV installation, LED sign installation, and network setup.", 
                     cn: "我们提供各种与IT相关的服务，包括电脑维修、组装及零件销售、闭路电视安装、LED招牌安装和网络搭建等。", 
                     ja: "パソコンの修理や組み立て、部品販売、CCTV設置、LED看板設置、ネットワーク構築など、多様なIT関連サービスを提供しています。" },
        query: "juncomputer.html"
    },
     {
        id: 32,
        name: { ko: "전집인가 술집인가", en: "Jeon or Pub?", cn: "煎饼铺还是小酒馆？", ja: "チヂミ屋か、居酒屋か" },
        cat: "restaurants",
        catName: { ko: "식당", en: "Restaurant", cn: "特色餐厅", ja: "郷土料理店" },
        desc: {
            ko: "푸짐한 식사뿐만 아니라 술과 술안주도 함께 파는 음식점입니다.",
            en: "A local restaurant serving hearty comfort food, alcohol, and paired dishes.",
            cn: "不仅供应丰盛的正餐，还兼售美酒与下酒菜的温馨餐馆。",
            ja: "しっかりとしたお食事だけでなく、お酒と酒の肴も豊富に取り揃えた飲食店です。"
        },
        specialty: { ko: "모듬전 28,000원 / 해물파전 20,000원 <br> 깻잎/고추전 반반 10,000원 / 동태전 15,000원 <br> 감자전 10,000원",
             en: "Assorted Pancakes (Modeum-jeon) KRW 28,000 / Seafood Scallion Pancake (Haemul Pajeon) KRW 20,000 <br>Half Perilla Leaf & Half Chili Pepper Pancakes KRW 10,000 / Pollack Pancakes (Dongtae-jeon) KRW 15,000 <br>Potato Pancake (Gamja-jeon) KRW 10,000", 
             cn: "什锦煎饼 28,000韩元 / 海鲜葱饼 20,000韩元 <br>芝麻叶/辣椒煎饼拼盘（半半） 10,000韩元 / 煎冻明太鱼排 15,000韩元 <br>土豆饼（马铃薯煎饼） 10,000韩元", 
             ja: "チヂミ盛り合わせ（モドゥムジョン） 28,000ウォン / 海鮮ネギチヂミ（ヘムルパジョン） 20,000ウォン <br>エゴマの葉＆青唐辛子チヂミ ハーフ＆ハーフ 10,000ウォン / トンテジョン（タラのピカタ） 15,000ウォン <br>ジャガイモチヂミ（カムジャジョン） 10,000ウォン" },
        query: "jeonjibsooljib.html"
    },
     {
        id: 33,
        name: { ko: "해바라기", en: "Haebaragi (Sunflower) Restaurant", cn: "向日葵餐厅", ja: "ヒマワリ食堂" },
        cat: "restaurants",
        catName: { ko: "식당", en: "Restaurant", cn: "特色餐厅", ja: "郷土料理店" },
        desc: {
            ko: "만둣국, 전병 등 정선의 토속음식을 가볍게 즐길 수 있는 식당입니다!",
            en: "A casual diner where you can enjoy Jeongseon local specialties such as dumpling soup and buckwheat crêpes (jeonbyeong)!",
            cn: "可以轻松享用饺子汤、荞麦煎饼等当地乡土美食的温馨餐馆。",
            ja: "餃子スープ（マンドゥクッ）や蕎麦クレープ（チョンビョン）などの郷土料理を気軽に味わえるお店です。"
        },
        specialty: { ko: "만두국 10,000원 / 칼국수 9,000원 <br> 메밀전 5,000원 / 순대 5,000원<br>머릿고기(중) 10,000원 / 머릿고기(대) 15,000원",
             en: "Dumpling Soup 10,000 KRW / Knife-cut Noodles (Kalguksu) 9,000 KRW <br> Buckwheat Pancake (Memiljeon) 5,000 KRW / Korean Blood Sausage (Sundae) 5,000 KRW <br>Boiled Pork Head Meat (M) 10,000 KRW / Boiled Pork Head Meat (L) 15,000 KRW", 
             cn: "饺子汤 10,000韩元 / 刀切面 9,000韩元 <br> 荞麦煎饼 5,000韩元 / 米肠 5,000韩元 <br>猪头肉（中） 10,000韩元 / 猪头肉（大） 15,000韩元", 
             ja: "マンドゥクッ（餃子スープ） 10,000ウォン / カルグクス 9,000ウォン <br> 蕎麦チヂミ 5,000ウォン / スンデ 5,000ウォン <br>煮込み豚の頭肉（中） 10,000ウォン / 煮込み豚の頭肉（大） 15,000ウォン" },
        query: "haebaragi.html"
    },
     {
        id: 34,
        name: { ko: "아란헤어", en: "Aran Hair", cn: "阿兰美发店", ja: "アランヘア" },
        cat: "general",
        catName: { ko: "미용", en: "Beauty", cn: "美容", ja: "美容" },
        desc: {
            ko: "사북 청년몰 2층에 위치한 헤어샵입니다. 예약제로 운영됩니다.",
            en: "A hair salon located on the 2nd floor of Sabuk Youth Mall. By appointment only.",
            cn: "位于舍北青年Mall 2楼的美发沙龙。实行预约制运营。",
            ja: "舎北（サブク）青年モール2階にあるヘアサロンです。完全予約制で営業しております。"
        },
    specialty: { ko: "남·여 커트, 염색, 펌, 디지털 펌, 모발케어 등", 
                     en: "Services include men's and women's haircuts, hair coloring, perms, digital perms, and hair care treatments.", 
                     cn: "提供男/女士剪发、染发、烫发、数码烫及秀发护理等服务。", 
                     ja: "メンズ・レディースカット、ヘアカラー、パーマ、デジタルパーマ、ヘアケアなど。" },
        query: "aran.html"
    },
    {
        id: 35,
        name: { ko: "경북닭집", en: "Gyeongbuk Chicken House", cn: "庆北鸡店", ja: "慶北(キョンブク)チキン店" },
        cat: "produce",
        catName: { ko: "농특산물·약초", en: "Local Produce & Herbs", cn: "农特产·草药", ja: "農特産品・山菜" },
        desc: {
            ko: "생닭을 비롯하여 각종 건어물, 기름, 양념류를 팝니다.",
            en: "We sell fresh chicken, a variety of dried fish and seafood, cooking oils, and traditional seasonings.",
            cn: "出售生鲜鸡肉以及各类干鱼海产、食用油和调味料。",
            ja: "生鶏肉をはじめ、各種干物、油、調味料などを取り揃えております。"
        },
        specialty: { ko: "(시세에 따라 가격이 변동됩니다.) 생닭, 건어물, 잡곡, 기름, 양념류  <br> 집된장 15,000원 / 건딸기 12,000원", 
                     en: "(Prices may vary depending on the market.)  Raw Chicken, Dried Fish, Mixed Grains, Cooking Oils, Traditional Seasonings <br> Homemade Soybean Paste 15,000 KRW / Dried Strawberries 12,000 KRW", 
                     cn: "(价格可能因市场而异。) 生鲜鸡肉、干鱼海产、杂粮、食用油、传统调味料 <br> 自酿大酱 15,000韩元 / 干草莓 12,000韩元", 
                     ja: "(価格は市場による。) 生鶏肉、干物、雑穀、食用油、伝統調味料 <br> 自家製テンジャン（味噌） 15,000ウォン / 干しイチゴ 12,000ウォン" },
        query: "gyeongbukdakjib.html"
    },
    {
        id: 36,
        name: { ko: "한우식육점", en: "Hanwoo Butcher Shop", cn: "韩牛肉食店", ja: "韩牛(ハヌ)肉屋" },
        cat: "produce",
        catName: { ko: "농특산물·약초", en: "Local Produce & Herbs", cn: "农特产·草药", ja: "農特産品・山菜" },
        desc: {
            ko: "삼겹, 등심, 소갈비살 등, 신선한 고기를 부위별(600g 단위)로 판매합니다. 시장 골목 내에 위치하고 있어요.",
            en: "We sell fresh meats by cut (sold in 600g units / 1 geun), including pork belly, sirloin, and beef ribs. Located right inside the market alley.",
            cn: "出售五花肉、里脊肉、牛排条等各类部位的新鲜肉品（以600克/一斤为单位）。位于市场小巷内。",
            ja: "サムギョプサル（豚バラ）、ロース、牛カルビなど、新鮮なお肉を部位別に取り揃えております（600g単位）。市場の路地内に位置しています。"},
        specialty: { ko: "*한우, 돼지고기 가격은 시세에 따라 변동됩니다.<br>삼겹살, 등심, 소갈비살, 목살, 차돌박이 등.", 
                     en: "*Prices for Korean beef, pork vary according to market rates. <br>Pork Belly (Samgyeopsal), Sirloin/Ribeye, Boneless Beef Short Ribs, Pork Neck/Shoulder (Moksal), Beef Brisket (Chadolbagi), and more.", 
                     cn: "*韩国牛、猪肉的价格会根据市场行情波动。<br>五花肉、里脊肉（牛上脑）、牛肋条肉、猪颈肉（梅花肉）、牛胸口油（牛胸肉）等。", 
                     ja: "*韓国牛、豚肉の価格は市場レートに応じて変動します。<br>サムギョプサル（豚バラ肉）、ロース、牛カルビ（カルビ肉）、モクサル（豚肩ロース）、チャドルバギ（牛あばら薄切り肉）など。" },
        query: "hanwoo.html"
    },
    {
        id: 37,
        name: { ko: "뽀삐네상회", en: "Ppoppy's Market", cn: "波比果蔬店", ja: "ポピネ青果店" },
        cat: "produce",
        catName: { ko: "농특산물·약초", en: "Local Produce & Herbs", cn: "农特产·草药", ja: "農特産品・山菜" },
        desc: {
            ko: "신선한 야채와 과일들을 판매합니다. 시장 맨 안쪽에 자리 잡은 가게예요!",
            en: "We sell fresh vegetables and fruits. Our shop is located at the very back of the market!",
            cn: "出售新鲜蔬菜和水果。是一家位于市场最里面的小店！",
            ja: "新鮮な野菜や果物を販売しています。市場の一番奥にあるお店です！"
        },
        specialty: { ko: "(시세에 따라 가격이 변동됩니다.) 상추, 사과, 감자, 양파, 옥수수, 더덕 등. <br>정선깐더덕 10,000원  정선곤드레 12,000원  정선고사리 20,000원", 
                     en: "(Prices may vary depending on the market.) Lettuce, apples, potatoes, onions, corns, deodeok, chili peppers, etc. <br>Peeled Jeongseon Deodeok (Codonopsis Root) KRW 10,000 <br>Jeongseon Gondre (Dried Thistle) KRW 12,000 <br>Jeongseon Gosari (Dried Bracken) KRW 20,000", 
                     cn: "(价格可能因市场而异。) 生菜、苹果、土豆、洋葱、玉米、茄子、辣椒等。<br>旌善去皮沙参 10,000韩元 <br> 旌善山蓟菜（贡德莱） 12,000韩元 <br> 旌善蕨菜 20,000韩元", 
                     ja: "(価格は市場による。) サンチュ（レタス）、リンゴ、ジャガイモ、玉ねぎ、とうもろこし、ナス、唐辛子など。<br>旌善（チョンソン）皮むきツルニンジン 10,000ウォン <br>旌善（チョンソン）コンドゥレ 12,000ウォン <br>旌善（チョンソン）ワラビ 20,000ウォン" },
        query: "ppoppi.html"
    },
     {
        id: 38,
        name: { ko: "대성슈퍼", en: "Daeseong Supermarket", cn: "大成超市", ja: "テソン・スーパー" },
        cat: "produce",
        catName: { ko: "농특산물·약초", en: "Local Produce & Herbs", cn: "农特产·草药", ja: "農特産品・山菜" },
        desc: {
            ko: "갖가지 과일을 팝니다. 마트 안에는 식료품을 팔아요! 경북야채 맞은편에 있습니다.",
            en: "We sell a variety of fresh fruits. Inside the mart, groceries and daily food items are available. Located right across from Gyeongbuk Produce (Gyeongbuk Vegetables).",
            cn: "出售各类新鲜水果。超市内供应各种食品杂货。位于庆北菜店对面。",
            ja: "さまざまな果物を販売しています。マート（スーパー）内では食料品も取り扱っております。慶北（キョンブク）野菜店の向かいに位置しています。。"
        },
        specialty: { ko: "(시세에 따라 가격이 변동됩니다.) <br>제철과일을 팔아요(사과, 복숭아, 귤, 오렌지, 포도, 키위, 바나나 등).", 
                     en: "(Prices may vary depending on the market.) <br>We sell seasonal fruits (apples, peaches, mandarins, oranges, tomatoes, kiwis, bananas, etc.).", 
                     cn: "(价格可能因市场而异。) <br>出售时令水果（苹果、桃子、橘子、橙子、西红柿、奇异果、香蕉等）。", 
                     ja: "(価格は市場による。) <br>旬の果物を販売しています（リンゴ、モモ、みかん、オレンジ、トマト、キウイ、バナナなど）。" },
        query: "daeseong.html"
    },
      {
        id: 39,
        name: { ko: "오뚜기분식", en: "Ottugi Korean Snacks", cn: "奥多吉小吃", ja: "オットギ軽食" },
        cat: "food",
        catName: { ko: "카페·먹거리", en: "Cafes & Desserts", cn: "咖啡厅·小吃", ja: "カフェ・デザート" },
        desc: {
            ko: "시장에 오셨으면 일단 떡볶이와 순대는 꼭 맛봐야겠죠?",
            en: "When you visit a traditional market, trying tteokbokki (spicy rice cakes) and sundae (blood sausage) is an absolute must!",
            cn: "既然来到了传统市场，怎么能不尝尝炒年糕和米肠呢？",
            ja: "市場に来たら、まずはトッポッキとスンデを味わってみないといけませんよね？"
        },
        specialty: { ko: "떡볶이(1인분) 3,000원 / 순대(1인분) 5,000원 <br> 메밀전병(1인분) 6,000원 / 음료(사이다/콜라) 2,000원", 
            en: "Tteokbokki (1 serving) 3,000 KRW / Sundae (1 serving) 5,000 KRW <br> Spicy Buckwheat Crêpe (1 serving) 6,000 KRW / Soft Drink (Cider / Coke) 2,000 KRW", 
            cn: "炒年糕（1人份） 3,000韩元 / 米肠（1人份） 5,000韩元 <br> 荞麦煎饼（1人份） 6,000韩元 / 饮料（雪碧 / 可乐） 2,000韩元", 
            ja: "トッポッキ（1人前） 3,000ウォン / スンデ（1人前） 5,000ウォン <br> 蕎麦クレープ（1人前） 6,000ウォン / 飲み物（サイダー / コーラ） 2,000ウォン" },
        query: "ottugi.html"
    },
     {
        id: 40,
        name: { ko: "천지골백가지농원", en: "Cheonjigol Baekgaji Farm (100 Grains & Produce)", cn: "天地谷百种农园", ja: "天地谷（チョンジゴル）百種農園" },
        cat: "produce",
        catName: { ko: "농특산물·약초", en: "Local Produce & Herbs", cn: "农特产·草药", ja: "農特産品・山菜" },
        desc: {
            ko: "다양한 종류의 잡곡을 주로 판매합니다. 나물도 있어요!",
            en: "We mainly sell a wide variety of mixed grains. Mountain herbs are available too!",
            cn: "主要出售各种杂粮。也有山菜哦！",
            ja: "さまざまな種類の雑穀を中心に販売しています。 山菜もあります！"
        },
        specialty: { ko: "정선 곤드레, 현미, 귀리, 병아리콩, 취나물, 동부, 누룽지찹쌀, 사과, 생강 등 다양한 농산물을 시세에 따라 팝니다.", 
                     en: "We sell a variety of agricultural products such as Jeongseon gondre, brown rice, oats, chickpeas, mountain herbs, beans, scorched glutinous rice, apples, ginger, etc. according to market prices.", 
                     cn: "我们根据市场价格出售各种农产品，如旌善贡德雷、糙米、燕麦、鹰嘴豆、山菜、豆类、焦糊糯米、苹果、生姜等。", 
                     ja: "私たちは、旌善コンドゥレ、玄米、オート麦、ひよこ豆、山菜、豆類、お焦げもち米、リンゴ、生姜などのさまざまな農産物を市場価格に応じて販売しています。" },
        query: "hundred.html"
    },
    {
        id: 41,
        name: { ko: "스타미용실", en: "Star Hair Salon", cn: "明星(Star)美容院", ja: "スター美容室" },
        cat: "general",
        catName: { ko: "미용", en: "Beauty", cn: "美容", ja: "美容" },
        desc: {
            ko: "사북 650거리 가까이에 위치한 미용실입니다. 머리 손질을 원하시면 전화 예약해 주세요!",
            en: "A hair salon located near Sabuk 650 Street. Please make a reservation if you would like hair styling!",
            cn: "位于舍北650街附近的美发沙龙。想要理发或做造型请提前预约！",
            ja: "舎北（サブク）650ストリートの近くにあるヘアサロンです。ヘアスタイリングをご希望の方は、ぜひご予約ください！"
        },
    specialty: { ko: "남·여 헤어 커트, 염색, 펌, 모발케어 등", 
                     en: "Services include men's and women's haircuts, hair coloring, perms, digital perms, and hair care treatments.", 
                     cn: "提供男/女士剪发、染发、烫发、数码烫及秀发护理等服务。", 
                     ja: "メンズ・レディースカット、ヘアカラー、パーマ、デジタルパーマ、ヘアケアなど。" },
        query: "starhair.html"
    }, 
     {
        id: 42,
        name: { ko: "여주쌈밥", en: "Yeoju Ssambap", cn: "骊州包饭", ja: "ヨジュ・サンパプ" },
        cat: "restaurants",
        catName: { ko: "식당", en: "Restaurant", cn: "特色餐厅", ja: "郷土料理店" },
         desc: {
            ko: "터프한 이모님들이 정성스레 만든 밑반찬과 곤드레밥이 일품인 쌈밥집입니다!",
            en: "A hearty ssambap (rice wrap) restaurant famous for savory gondre rice and homemade side dishes passionately prepared by our warm-hearted aunties!",
            cn: "豪爽热情的阿姨们精心制作的各色小菜，搭配绝品山蓟菜饭，是一家风味一绝的包饭专门店！",
            ja: "気っぷのいいお母さんたち（イモ）が丹精込めて作ったおかずと、絶品のゴンドゥレ（高麗アザミ）ご飯が自慢の包みご飯（サンパプ）専門店です！"
        },
         specialty: { ko: "임금님한상(갈비찜+제육+불고기, 2인이상) 25,000원 <br> 갈비찜쌈밥(2인이상) 16,000원 <br> 불고기쌈밥(2인이상) 16,000원 <br> 곤드레백반 11,000원 <br> 제육덮밥 11,000원 <br> 1인쌈밥정식 20,000원(갈비찜, 불고기, 제육 중 택1)<br>부대찌개(2인이상) 11,000원<br>두부조림 11,000원",
             en: "King’s Feast (Braised Short Ribs + Spicy Stir-Fried Pork + Bulgogi, Min. 2 Orders) 25,000 KRW <br> Braised Short Rib Ssambap (Rice & Vegetable Wraps,Min. 2 Orders) 16,000 KRW <br> Bulgogi Ssambap (Min. 2 Orders) 16,000 KRW <br> Gondre (Korean Thistle) Rice 11,000 KRW <br> Spicy Stir-Fried Pork over Rice (Jeyuk Deopbap) 11,000 KRW <br> Solo Ssambap Set (For 1 Person, Choose 1: Braised Short Ribs, Bulgogi, or Spicy Stir-Fried Pork) 20,000 KRW<br>Budae-jjigae (Korean Army Stew, Min. 2 Orders) 11,000 KRW<br>Dubu-Jorim (Spicy Braised Tofu) 11,000 KRW", 
             cn: "御膳王宴套餐（炖牛排骨+辣炒猪肉+烤牛肉，2人起点）25,000韩元 <br> 炖排骨包饭（2人起点） 16,000韩元 <br> 烤牛肉包饭（2人起点）16,000韩元 <br> 山蓟菜饭 11,000韩元 <br> 辣炒猪肉盖饭 11,000韩元 <br> 单人包饭定食 20,000韩元 (可选：炖牛排骨、烤牛肉或辣炒猪肉) <br>部队火锅（2人起点） 11,000韩元<br>炖豆腐 11,000韩元<br>炖豆腐 11,000韩元", 
             ja: "王様御膳（カルビチム＋豚肉ピリ辛炒め＋プルコギ、2名様以上）25,000ウォン <br> カルビチム包みご飯（サンパプ）（2名様以上） 16,000ウォン <br>プルコギ包みご飯（2名様以上） 16,000ウォン <br> コンドゥレご飯 11,000ウォン<br>豚肉ピリ辛炒め丼（チェユク丼） 11,000ウォン <br> 1人包みご飯定食 20,000ウォン (選択可能：カルビチム、プルコギ、または豚肉ピリ辛炒め)<br>部隊チゲ（プデチゲ、2名様以上） 11,000ウォン<br>トゥブチョリム（豆腐のピリ辛煮込み） 11,000ウォン" },
        query: "yeoju.html"
    },
      {
        id: 43,
        name: { ko: "서울식품", en: "Seoul Grocery Store", cn: "首尔食品店", ja: "ソウル食品" },
        cat: "produce",
        catName: { ko: "농특산물·약초", en: "Local Produce & Herbs", cn: "农特产·草药", ja: "農特産品・山菜" },
        desc: {
            ko: "다양한 종류의 식료품 및 건어물을 판매합니다. 시세에 따라 가격이 바뀔 수 있습니다.", 
                     en: "We offer a wide variety of groceries and dried seafood. Prices are subject to change based on market rates.", 
                     cn: "本店销售各种食品杂货及干货海鲜。价格可能会根据市场行情变动。", 
                     ja: "各種食料品・乾物（干物）販売。時価・仕入れ相場により価格が変動する場合がございます。"
        },
        specialty: { ko: "진미포 12,000원 / 국산 건멸치 10,000원 <br> 국산 땅콩 10,000원 / 현미,보리쌀 누룽지 10,000원", 
                     en: "Dried Squid Strips (Seasoned Dried Squid) 12,000 KRW / Korean Dried Anchovies 10,000 KRW <br> Korean Peanuts 10,000 KRW / Brown Rice & Barley Nurungji 10,000 KRW", 
                     cn: "调味鱿鱼丝（鱿鱼干片） 12,000韩元 / 韩国产干鳀鱼 10,000韩元 <br> 韩国产花生 10,000韩元 / 糙米、薏米锅巴 10,000韩元", 
                     ja: "さきいか（味付け裂きイカ / チンミポ） 12,000ウォン / 韓国産煮干し 10,000ウォン<br> 韓国産落花生 10,000ウォン / 赤米・雑穀の煮込み 10,000ウォン" },
        query: "seoulfood.html"
    },
     {
        id: 44,
        name: { ko: "만물상회 알뜰할인매장", en: "Manmul Store - Budget Discount Outlet", cn: "万物商行・百货特价超市", ja: "万物商会・お得なディスカウントショップ"  },
        cat: "general",
        catName: { ko: "생활·잡화", en: "Daily Goods", cn: "生活·百货", ja: "生活・雑貨" },
        desc: {
            ko: "사북시장의 다이소! 없는 게 없는 만물상회에 놀러 오세요.",
            en: "The Daiso of Sabuk Market! Come visit our general store where you can find practically everything.",
            cn: "舍北市场的大创（Daiso）！应有尽有的万物杂货铺，快来逛逛吧！",
            ja: "舎北（サブク）市場のダイソー！ないものはない何でも屋（万物商会）にぜひ遊びに来てください。"
        },
    specialty: { ko: "주방용품부터 생활용품, 소형가전, 청소도구 등 다양한 도구와 집기들이 구비되어 있습니다.<br>그릇 2,000 ~ 10,000원", 
                     en: "We have a wide range of items from kitchenware to daily necessities, small appliances, and cleaning tools.<br>Bowls: 2,000 ~ 10,000 KRW", 
                     cn: "我们有从厨房用品到日常必需品、小型家电和清洁工具的各种商品。<br>碗：2,000 ~ 10,000 韩元", 
                     ja: "キッチン用品から日用雑貨、小型家電、清掃道具まで、さまざまな商品を揃えています。<br>ボウル：2,000 ~ 10,000ウォン" },
        query: "parandeul.html"
    },
    {
        id: 45,
        name: { ko: "충북상회", en: "Choongbuk Store (clothing)", cn: "忠北商会(服装店)", ja: "忠北商会(衣装店)" },
        cat: "general",
        catName: { ko: "생활·잡화", en: "Daily Goods", cn: "生活·百货", ja: "生活・雑貨" },
         desc: {
            ko: "티셔츠, 바지, 재킷 등 캐주얼한 남성복 및 내의를 저렴한 가격에 구입할 수 있습니다.",
            en: "You can purchase men's casual clothing such as T-shirts, pants, and jackets at affordable prices. Thermal innerwear are also available!",
            cn: "可以用实惠的价格买到T恤、裤子、夹克等休闲服饰。店内也出售内衣/保暖内衣哦！",
            ja: "Tシャツ、パンツ、ジャケットなどのカジュアルウェアをお手頃な価格でお買い求めいただけます。肌着・インナーも販売しています！"
        },
        specialty: { ko: "긴소매/반소매 티셔츠, 바지, 내복, 속옷 등", 
                     en: "Long-sleeved/short-sleeved T-shirts, pants, thermal underwear, underwear, etc.", 
                     cn: "长袖/短袖T恤衫、裤子、保暖内衣（秋衣秋裤）、内衣等。", 
                     ja: "長袖/半袖Tシャツ、ズボン（パンツ）、保温肌着（タイツ）、下着など。" },
        query: "choongbuk.html"
    },
     {
        id: 46,
        name: { ko: "시장농특산물", en: "Nongteuksanmul (Local Farm Produce & Seedlings)", cn: "市场农特产品", ja: "市場農特産物（ノントゥクサンムル）" },
        cat: "produce",
        catName: { ko: "농특산물·약초", en: "Local Produce & Herbs", cn: "农特产·草药", ja: "農特産品・山菜" },
        desc: {
            ko: "계절에 따라 야채, 나물 모종과 구황작물을 판매하고 있습니다.",
            en: "Depending on the season, we sell vegetable and wild herb seedlings, as well as hearty root crops.",
            cn: "根据不同季节，出售各种蔬菜、野菜种苗以及地瓜土豆等农作物。",
            ja: "季節に合わせて、野菜や山菜の苗、ジャガイモやサツマイモなどの農作物を販売しています。"
        },
        specialty: { ko: "(시세에 따라 가격이 변동됩니다.) 봄철마다 농사에 필요한 모종, 그때 그때 수확한 감자, 고구마, 나물 등.", 
                     en: "(Prices may vary depending on the market.) Farming seedlings every spring, plus freshly harvested potatoes, sweet potatoes, wild greens, and more.", 
                     cn: "(价格可能因市场而异。) 每年春季农耕所需的种苗，以及应季新鲜采收的土豆、红薯、野菜等。", 
                     ja: "(価格は市場による。) 毎春の農作業に必要な苗や、その都度収穫されるジャガイモ、サツマイモ、山菜など。" },
        query: "nongteuk.html"
    },
      {
        id: 47,
        name: { ko: "동해건어물", en: "Donghae Dried Seafood", cn: "东海干货海鲜", ja: "東海（トンへ）乾物店" },
        cat: "produce",
        catName: { ko: "농특산물·약초", en: "Local Produce & Herbs", cn: "农特产·草药", ja: "農特産品・山菜" },
        desc: {
            ko: "각종 건어물을 팔고 있습니다. 김, 미역, 새우젓, 진미채, 쥐포 등의 건어물 이외 식료품과 생활용품도 다양하게 있으니 둘러보세요.",
            en: "Assorted Dried Seafood & Daily Essentials: Seaweed, Salted Shrimp, Shredded Squid, Dried Filefish, Groceries & Everyday Goods. Feel free to look around!",
            cn: "特色干货・食品及日用品：紫菜、海带、虾酱、鱿鱼丝、调味鱼干，另有多种日用副食，欢迎选购。",
            ja: "水産乾物・食料品・日用品：海苔、ワカメ、アミの塩辛、さきいか、カワハギ干しなど。ぜひお気軽にご覧ください！"
        },
        specialty: { ko: "(시세에 따라 가격은 변경됩니다.)<br>건오징어 80,000원 <br> 북어 45,000원 <br>멸치 25,000~40,000원 등.", 
                     en: "(Prices are subject to change according to market rates.) <br>Dried Squid 80,000 KRW<br>Dried Pollock 45,000 KRW <br>Dried Anchovies 25,000 – 40,000 KRW, etc. ", 
                     cn: "根据时价价格会有所变动)<br>鱿鱼干 80,000韩元 <br>明太鱼干 45,000韩元 <br>凤尾鱼干(小银鱼) 25,000~40,000韩元 等。", 
                     ja: "（仕入れ・時価により価格が変更になる場合がございます）<br>スルメ（乾燥イカ） 80,000 KRW<br>干しスケトウダラ（プゴ） 45,000 KRW <br>煮干し（ミョルチ） 25,000 – 40,000 KRW, etc. " },
        query: "donghae.html"
    },
    {
        id: 48,
        name: { ko: "부산상회", en: "Busan Grocery Store", cn: "釜山商行", ja: "釜山（プサン）商会" },
        cat: "produce",
        catName: { ko: "농특산물·약초", en: "Local Produce & Herbs", cn: "农特产·草药", ja: "農特産品・山菜" },
        desc: {
            ko: "생선뿐만 아니라 김, 미역, 마른오징어 등 건어물을 판매하고 있습니다. 달걀 등의 지역 특산물도 함께 팔아요.",
            en: "Along with fresh fish, we offer a variety of dried seafood such as seaweed, kelp, and dried squid. Local specialties including eggs are also available.",
            cn: "除了新鲜鱼类外，还出售海苔、海带、干鱿鱼等各种海鲜干货。店内还备有鸡蛋等当地特产。",
            ja: "鮮魚はもちろん、海苔、ワカメ、スルメなどの乾物も取り扱っております。地元の特産品もご用意しています。"
        },
        specialty: { ko: "(시세에 따라 가격은 변경됩니다.) 김, 미역, 오징어, 생선, 건어물, 달걀 등.", 
                     en: "(Prices are subject to change according to market rates.) <br> Seaweed (laver), kelp, squid, fresh fish, dried seafood, eggs, etc.", 
                     cn: "根据时价价格会有所变动）海苔、海带、鱿鱼、鲜鱼、海鲜干货、鸡蛋等。", 
                     ja: "（仕入れ・時価により価格が変更になる場合がございます）海苔（のり）、ワカメ、イカ（スルメ）、鮮魚、乾物、卵など。" },
        query: "busan.html"
    },
    {
        id: 49,
        name: { ko: "사계절", en: "Four Seasons", cn: "四季", ja: "サゲジョル(四季)" },
        cat: "general",
        catName: { ko: "생활·잡화", en: "Daily Goods", cn: "生活·百货", ja: "生活・雑貨" },
        desc: {
            ko: "여성의류를 주로 판매하는 매장입니다. 신발, 이불, 전기장판 등도 살 수 있어요.",
            en: "A shop specializing in women's clothing. You can also purchase shoes, bedding, electric heating pads, and more.",
            cn: "这是一家主营女装的店铺。店内还可以选购鞋子、被褥、电热毯等各种生活用品。",
            ja: "婦人服を取り扱うお店です。靴や布団、電気毛布（ホットカーペット）などもお買い求めいただけます。"
        },
        specialty: { ko: "여성의류, 이부자리(침구),신발, 가방, 바지 등.", 
                     en: "Women's clothing, bedding, shoes, bags, trousers, etc.", 
                     cn: "女装、床上用品、鞋子、包、裤子等。", 
                     ja: "婦人服、布団、靴、バッグ、ズボンなど。" },
        query: "fourseasons.html"
    },
     {
        id: 50,
        name: { ko: "사북야채", en: "Sabuk Vegetable Shop", cn: "舍北蔬菜店", ja: "舍北(サブク)野菜店" },
        cat: "produce",
        catName: { ko: "농특산물·약초", en: "Local Produce & Herbs", cn: "农特产·草药", ja: "農特産品・山菜" },
        desc: {
            ko: "건어물, 곡식, 나물 등의 다양한 식료품을 판매하고 있어요. 시세에 따라 가격은 바뀔 수 있습니다.",
            en: "We offer a wide variety of groceries, including dried seafood, grains, and wild greens. Prices may vary depending on the market.",
            cn: "本店销售干货水产、五谷杂粮、山野菜等多种优质食品。价格可能因市场而异。",
            ja: "干物や乾物、穀物、山菜など、多彩な食材・食品を取り揃えております。価格は市場による。"
        },
        specialty: { ko: "쥐치포 20,000~40,000원 <br> 아귀채 45,000원 <br>국산 서리태 20,000원 등.", 
                     en: "Jwipo (Dried Filefish) 20,000 - 40,000 KRW <br> Dried Monkfish Jerky 45,000 KRW <br> Korean Black Beans 20,000 KRW, etc.", 
                     cn: "调味安康鱼丝 20,000 - 40,000韩元 <br> 调味鱼片 45,000韩元 <br> 韩国产青仁黑豆 20,000韩元 等。", 
                     ja: "あんこうロール（アンコウの味付け干し細切り) 20,000 - 40,000ウォン <br>カワハギみりん干し 45,000ウォン <br>韓国産ソリテ黒豆 20,000ウォン" },
        query: "sabukvegi.html"
    },
     {
        id: 51,
        name: { ko: "제천상회", en: "Jecheon Grocery Store", cn: "堤川商会", ja: "堤川(チェチョン）商会" },
        cat: "produce",
        catName: { ko: "농특산물·약초", en: "Local Produce & Herbs", cn: "农特产·草药", ja: "農特産品・山菜" },
        desc: {
            ko: "다양한 야채 및 식료품이 구비되어 있습니다. 시장 안쪽, 청년몰 근처에 있어요.",
            en: "A wide variety of fresh vegetables and groceries are available. Located inside the market, near the Youth Mall.",
            cn: "备有各种新鲜蔬菜及食品饮料。位于市场内侧、青年Mall附近。",
            ja: "さまざまな野菜や食料品を取り揃えております。市場の奥、青年モール（Youth Mall）の近くにございます。"
        },
        specialty: { ko: "(시세에 따라 가격은 변경됩니다.) 양파, 파, 배추, 양파, 콩나물, 부추, 도라지, 가지, 오이, 고추, 두부 등.", 
                     en: "(Prices are subject to change according to market rates.) <br> Onions, green onions (scallions), cabbage, eggplants, cucumbers, chili peppers, tofu, etc.", 
                     cn: "根据时价价格会有所变动）洋葱、大葱、卷心菜、茄子、黄瓜、辣椒、豆腐等。", 
                     ja: "（仕入れ・時価により価格が変更になる場合がございます）玉ねぎ、長ネギ、キャベツ、ナス、きゅうり、唐辛子、豆腐など。" },
        query: "jecheonstore.html"
    },
      {
        id: 52,
        name: { ko: "새로본화장품", en: "Saerobon Cosmetics", cn: "赛罗本化妆品", ja: "セロボンコスメ"  },
        cat: "general",
        catName: { ko: "생활·잡화", en: "Daily Goods", cn: "生活·百货", ja: "生活・雑貨" },
        desc: {
            ko: "각종 스킨케어 및 메이크업 제품을 판매합니다. 650무대 근처에 있어요.",
            en: "We offer a wide range of skincare and makeup products. Located near the 650 Stage.",
            cn: "出售各种护肤及彩妆产品。店铺位于650舞台附近。",
            ja: "各種スキンケア製品やメイクアップ化粧品を取り揃えております。650ステージの近くにございます。"
        },
    specialty: {  ko: "스킨토너 & 로션, 바디워시, 앰플, 모발 에센스, 클렌징 폼, 마사지 크림, 마사지팩, 마스카라, 립, 섀도우 등.",
                  en: "Toner & lotion, body wash, ampoules, hair essence, cleansing foam, massage cream, facial packs, mascara, lipstick, eyeshadow, etc.", 
                  cn: "爽肤水/乳液、沐浴露、安瓶精华、护发精油、洁面乳（洗面奶）、按摩膏、面膜、睫毛膏、口红、眼影等。", 
                  ja: "化粧水・乳液、ボディソープ、アンプル（美容液）、ヘアエッセンス、洗顔フォーム、マッサージクリーム、フェイスパック、マスカラ、リップ（口紅）、アイシャドウなど。" },
        query: "saerobon.html"
    },
    {
        id: 53,
        name: { ko: "황지상회", en: "Hwangji Store (Seafood)", cn: "黄池商会", ja: "黄池（ファンジ）商会" },
        cat: "produce",
        catName: { ko: "농특산물·약초", en: "Local Produce & Herbs", cn: "农特产·草药", ja: "農特産品・山菜" },
        desc: {
            ko: "다양한 생선과 건어물들을 주로 팔고 있습니다. 냉동, 생물 모두 취급합니다.",
            en: "We mainly specialize in a variety of fresh fish and dried seafood. We carry both domestic and deep-sea catches, available fresh or frozen.",
            cn: "主要经营各种鲜鱼和海鲜干货。无论国产还是远洋捕捞、冷冻还是鲜活鱼类均有销售。",
            ja: "多様な鮮魚や乾物を中心に取り扱っております。国産・遠洋産、冷凍・生鮮いずれも取り揃えています。"
        },
        specialty: { ko: "(시세에 따라 가격은 변경됩니다.) 김, 미역, 오징어, 생선, 건어물, 달걀 등.", 
                     en: "(Prices are subject to change according to market rates.) <br> Seaweed (laver), pollock, hairtail (cutlassfish), Atka mackerel, half-dried pollock (kodari), squid, etc.", 
                     cn: "根据时价价格会有所变动）海苔、明太鱼、带鱼、远东多线鱼（花鱼）、半干明太鱼、鱿鱼等。", 
                     ja: "（仕入れ・時価により価格が変更になる場合がございます）海苔（のり）、スケトウダラ、タチウオ、ホッケ、コダリ（半干しスケトウダラ）、イカなど。" },
        query: "hwangji.html"
    },
     {
        id: 54,
        name: { ko: "영주상회", en: "Youngju Grocery Store", cn: "荣州商会", ja: "栄州（ヨンジュ）商会" },
        cat: "produce",
        catName: { ko: "농특산물·약초", en: "Local Produce & Herbs", cn: "农特产·草药", ja: "農特産品・山菜" },
        desc: {
            ko: "건어물과 과일, 통조림 등 다양한 식료품을 팔고 있습니다.",
            en: "We sell a wide variety of groceries, including dried seafood, fruits, and canned goods.",
            cn: "出售海鲜干货、水果、罐头等各种食品饮料。",
            ja: "乾物や果物、缶詰など、さまざまな食料品を取り扱っております。"
        },
        specialty: { ko: "(시세에 따라 가격은 변경됩니다.) 김, 미역, 쥐포, 포도, 쌀, 달걀 등.", 
                     en: "(Prices are subject to change according to market rates.) <br> Seaweed (laver), kelp, dried filefish fillets (jwipo), grapes, rice, eggs, etc.", 
                     cn: "根据时价价格会有所变动）海苔、海带、烤鱼片（马面鱼干）、葡萄、大米、鸡蛋等。", 
                     ja: "（仕入れ・時価により価格が変更になる場合がございます）海苔（のり）、ワカメ、カワハギの干物（チュィポ）、ぶどう、お米、卵など。" },
        query: "youngju.html"
    },
    {
        id: 55,
        name: { ko: "정든집", en: "Jeongdeunjip (A Cozy Home of Fond Memories)", cn: "情深家", ja: "チョンドゥンジプ(情深き我が家)" },
        cat: "produce",
        catName: { ko: "농특산물·약초", en: "Local Produce & Herbs", cn: "农特产·草药", ja: "農特産品・山菜" },
        desc: {
            ko: "농산물을 판매하는 상점입니다. 현재는 쌀을 판매하고 있어요.<br>문의는 옆 강릉식당으로 방문해주세요!",
            en: "A shop selling fresh farm produce, currently featuring quality rice.<br>For inquiries, please visit Gangneung Restaurant next door.",
            cn: "专营各类农产品的店铺，目前主要销售优质大米。<br>咨询请洽隔壁 【江陵餐厅】",
            ja: "農産物を販売するお店です。現在は美味しいお米を販売しております。<br>ご用の方は隣の【カンヌン食堂】へお声がけください。"
        },
        specialty: { ko: "(시세에 따라 가격이 변경됩니다.) 쌀 20kg 80,000 / 10kg 40,000", 
                     en: "(Prices are subject to change according to market rates) Rice 20kg 80,000 KRW / 10kg 40,000 KRW", 
                     cn: "(根据时价价格会有所变动） 大米 20kg 80,000韩元 / 10kg 40,000韩元", 
                     ja: "（仕入れ・時価により価格が変更になる場合がございます） 米 20kg 80,000ウォン / 10kg 40,000ウォン" },
        query: "jeongdeunjip.html"
    },
     {
        id: 56,
        name: { ko: "정선곤드레", en: "Jeongseon Gondre (Wild Thistle)", cn: "旌善山蓟菜", ja: "旌善（チョンソン）ゴンドゥレ (高麗アザミ)" },
        cat: "produce",
        catName: { ko: "농특산물·약초", en: "Local Produce & Herbs", cn: "农特产·草药", ja: "農特産品・山菜" },
        desc: {
            ko: "곤드레나물을 전문으로 하는 가게입니다. 정선지역에서 직접 1000m 고지 이상의 산기슭에서 자란 곤드레산채를 취급합니다.",
            en: "A specialty shop for gondre (wild thistle). We carry wild gondre grown in the Jeongseon region, harvested directly from mountain slopes at altitudes of over 1,000 meters.",
            cn: "本店是一家专营山蓟菜的特色店铺。精选产自旌善地区、生长在海拔1000米以上高山脚下的纯天然高山山蓟菜。",
            ja: "ゴンドゥレ（高麗アザミ）を専門に扱うお店です。旌善（チョンソン）地域の標高1,000m以上の山麓で育った天然の山菜・ゴンドゥレを取り扱っています。"
        },
        specialty: { ko: "(시세에 따라 가격은 변경됩니다.) <br>건곤드레 10,000원 / 곰취나물 10,000원 <br>어수리나물 10,000원 / 냉동곤드레 4kg 30,000원", 
                     en: "(Prices are subject to change according to market rates.)  <br>Dried Gondre (Wild Thistle) 10,000 KRW / Gomchwi (Ligularia Greens) 10,000 KRW <br>Eosuri (Cow Parsnip Greens) 10,000 KRW / Frozen Gondre 4kg 30,000 KRW.", 
                     cn: "(根据时价价格会有所变动）<br>干山蓟菜 10,000韩元/ 干燥葫芦七（熊岳菜） 10,000韩元 <br>牛防风菜 10,000韩元/ 冷冻山蓟菜 4kg 30,000韩元", 
                     ja: "（仕入れ・時価により価格が変更になる場合がございます）<br>乾燥ゴンドゥレ（高麗アザミ） 10,000ウォン / ゴムチュィ（オタカラコウ） 10,000ウォン <br>オスリ（ハナウド） 10,000ウォン / 冷凍ゴンドゥレ 4kg 30,000ウォン" },
        query: "jeongseongondre.html"
    },
    {
        id: 57,
        name: { ko: "종합건어물", en: "Jonghap Dried Seafood", cn: "综合海鲜干货", ja: "総合(ジョンハプ)乾物店" },
        cat: "produce",
        catName: { ko: "농특산물·약초", en: "Local Produce & Herbs", cn: "农特产·草药", ja: "農特産品・山菜" },
        desc: {
            ko: "김, 오징어, 미역, 황태 등 다양한 건어물과 식료품을 갖추고 있습니다. 앞집 뽀삐네상회로 문의 주세요!",
            en: "You can find a wide variety of dried seafood and groceries on display at our stands. Please inquire at the front store, Ppoppi's Market!",
            cn: "摊位上陈列着各种海鲜干货和食品饮料。请向前面的波比果蔬店咨询！",
            ja: "店頭の売り場には、多彩な乾物や食料品がずらりと並んでいます。前の店、ポピネ青果店にお問い合わせください！"
        },
        specialty: { ko: "(시세에 따라 가격은 변경됩니다.) <br> 황태채 10,000원 / 20,000원 / 45,000원 <br> 미역 13,000원 <br> 아귀채 45,000원 등.", 
                     en: "(Prices are subject to change according to market rates.) <br> Dried Pollack 10,000 KRW / 20,000 KRW / 45,000 KRW <br> Seaweed 13,000 KRW <br> Dried Monkfish Strips 45,000 KRW, etc.", 
                     cn: "根据时价价格会有所变动）海苔、海带、黄太鱼（干明太鱼）、豆类等 <br> 黄太鱼丝 10,000韩元 / 20,000韩元 / 45,000韩元 <br> 海带 13,000韩元 <br> 调味安康鱼丝 45,000韩元等。", 
                     ja: "（仕入れ・時価により価格が変更になる場合がございます）<br> ファンテチェ（裂き干しタラ） 10,000ウォン / 20,000ウォン / 45,000ウォン <br> ワカメ 13,000ウォン <br> あんこうロール（味付けアンコウ干し細切り） 45,000ウォン、など。" },
        query: "jonghap.html"
    },
     {
        id: 58,
        name: { ko: "진부 황태 건어물", en: "Jinbu Dried Seafood", cn: "珍富海鲜干货", ja: "珍富(チンブ)乾物店" },
        cat: "produce",
        catName: { ko: "농특산물·약초", en: "Local Produce & Herbs", cn: "农特产·草药", ja: "農特産品・山菜" },
        desc: {
            ko: "650 거리 가까이에 위치합니다. 황태, 동해 건오징어, 땅콩, 김, 미역 등의 다양한 건어물, 말린 나물 등도 팔고 있어요!",
            en: "Located close to 650 Street. Dried Seafood & Mountain Greens: Hwangtae (Pollock), East Sea Squid, Peanuts, Seaweed, Brown Seaweed & Dried Greens!",
            cn: "临近650街。店内出售各种海鲜干货。精选干货专卖：黄太鱼・东海干鱿鱼・花生・紫菜・海带及各种干制山菜！",
            ja: "650通りのすぐ近くにございます。多彩な乾物を取り揃えております。各種乾物・干し山菜：ファンテ（干しタラ）・東海産乾燥イカ・ピーナッツ・海苔・ワカメなど！"
        },
        specialty: { ko: "(시세에 따라 가격은 변경됩니다.) 용대리 황태포 세트 45,000원<br>용대리 황태채 50,000원 등.", 
                     en: "(Prices are subject to change according to market rates.)<br>Yongdae-ri Dried Pollock (Hwangtae) Set: 45,000 KRW<br>Yongdae-ri Shredded Dried Pollock: 50,000 KRW, etc.", 
                     cn: "根据时价价格会有所变动）<br>龙垈里黄太鱼礼盒套装 45,000韩元<br>龙垈里黄太鱼丝 50,000韩元", 
                     ja: "（仕入れ・時価により価格が変更になる場合がございます）。龍垈里（ヨンデリ）特選ファンテ（干しタラ） 45,000ウォン<br>龍垈里（ヨンデリ）ファンテチェ（裂き干しタラ） 50,000ウォン" },
        query: "jinbu.html"
    },
     {
        id: 59,
        name: { ko: "광신상회", en: "Gwangshin Store", cn: "光新商会", ja: "光新（クァンシン）商会" },
        cat: "produce",
        catName: { ko: "농특산물·약초", en: "Local Produce & Herbs", cn: "农特产·草药", ja: "農特産品・山菜" },
        desc: {
            ko: "나물과 야채뿐만 아니라 직접 만든 반찬도 판매하고 있어요!",
            en: "We sell not only fresh vegetables and herbs but also homemade side dishes!",
            cn: "不仅出售新鲜蔬菜和草药，还出售自制小菜！",
            ja: "野菜や果物だけでなく、自慢の味噌汁や漬物も販売しています！"
        },
        specialty: { ko: "(시세에 따라 가격이 변동됩니다.)<br>직접 담근 김치, 도라지 반찬, 연근 반찬, 콩자반 각 10,000원", 
                     en: "(Prices may vary depending on the market.)<br>Homemade Kimchi, Seasoned Bellflower Root, Braised Lotus Root, Braised Black Soybeans — KRW 10,000 each", 
                     cn: "(价格可能因市场而异。) <br>自制泡菜、拌桔梗、酱莲藕、酱黑豆 各 10,000韩元", 
                     ja: "(価格は市場による。) <br>自家製キムチ、トラジのおかず、レンコンのおかず、黒豆の甘辛煮 各 10,000ウォン" },
        query: "gwangshin.html"
    },
     {
        id: 60,
        name: { ko: "함사 휴&힐", en: "Hamsa Hue & Heal", cn: "Come Again 睫毛嫁接店", ja: "トオダ・ラッシュ店" },
        cat: "general",
        catName: { ko: "미용", en: "Beauty", cn: "美容", ja: "美容" },
        desc: {
            ko: "컬러 테라피 & 젤네일 스튜디오입니다. <br> 나의 색을 발견하고 아름다움과 쉼을 만나는 웰니스 뷰티",
            en: "Color Therapy & Gel Nail Studio. <br> Discover your color and experience wellness beauty with relaxation.",
            cn: "色彩疗法和凝胶美甲工作室。<br> 发现你的颜色，体验放松的健康美容。",
            ja: "カラーセラピーとジェルネイルスタジオです。 <br> あなたの色を見つけ、リラックスしたウェルネスビューティを体験してください。"
        },
    specialty: { ko: "기본 네일, 컬러 테라피 젤네일, 힐링 프로그램, 셀프 네일 <br>네이버 및 구글지도에 기재된 연락처로 문자 예약 가능합니다.", 
                     en: "Basic nails, color therapy gel nails, healing programs, self-nails <br> You can make a reservation via text message using the contact information listed on Naver and Google Maps.", 
                     cn: "基础美甲、色彩疗法凝胶美甲、疗愈项目、自助美甲 <br> 您可以通过Naver和Google地图上列出的联系方式发送短信预约。", 
                     ja: "基本ネイル、カラーセラピー ジェルネイル、癒しプログラム、セルフネイル <br> NaverとGoogleマップに記載されている連絡先からテキストメッセージで予約できます。" },
        query: "hamsa.html"
    }

];

let currentLang = 'ko';
let currentFilter = 'restaurants';

// 언어 변경 함수
function setLanguage(lang) {
    if (!i63nData[lang]) return;
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
    document.querySelectorAll('[data-i63n]').forEach(el => {
        const key = el.dataset.i63n;
        if (i63nData[lang][key]) {
            el.textContent = i63nData[lang][key];
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
                        <span>${i63nData[currentLang].view_map_btn}</span>
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