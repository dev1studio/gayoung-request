import { v4 as uuidv4 } from 'uuid';

const songs = [
  {
    id: uuidv4(),
    name: "스파이걸스 간첩소녀 spygirls 아빠컵엄마컵애기컵송",
    singer: "간첩소녀 (Spygirls)",
    album: "아빠컵 엄마컵 애기컵 송 (2018)",
    title: "아빠컵 엄마컵 애기컵 송",
    thumbnail: `/2490698.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "스파이걸스 간첩소녀 spygirls 콜레스테롤에그",
    singer: "간첩소녀 (Spygirls)",
    album: "콜레스테롤 에그 (2017)",
    title: "콜레스테롤 에그",
    thumbnail: `/2066651.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "스파이걸스 간첩소녀 spygirls happy merry winter song",
    singer: "간첩소녀 (Spygirls)",
    album: "Happy Merry Winter Song (2019)",
    title: "Happy Merry Winter Song",
    thumbnail: `/3994668.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "스파이걸스 간첩소녀 spygirls 그여름징했었지 콤지 komz",
    singer: "간첩소녀 (Spygirls)",
    album: "그 여름, 징했었지 (2021)",
    title: "그 여름, 징했었지 (Feat. KomZ)",
    thumbnail: `/6292121.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "스파이걸스 간첩소녀 spygirls 팽수 펭수 Pengsoo",
    singer: "간첩소녀 (Spygirls)",
    album: "(YouTube 전용)",
    title: "Love Poem for Pengsoo (펭수송)",
    thumbnail: `/165467780.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "스파이걸스 간첩소녀 spygirls 닌텐도 동물의숲 동숲 나비보뺏따우",
    singer: "간첩소녀 (Spygirls)",
    album: "(YouTube 전용)",
    title: "닌텐도 동물의숲 엔딩송 - 나비보뺏따우 (커버)",
    thumbnail: `/2ahukewi5.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "드림노트 dreamnote ドリームノート 하쿠나마타타 hakuna matata",
    singer: "드림노트 (DreamNote / ドリームノート)",
    album: "Dream:us (2019)",
    title: "하쿠나 마타타 Hakuna Matata",
    thumbnail: `/2922302.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "딘 dean 인스타그램 instgram",
    singer: "딘 (DEAN)",
    album: "instagram (2017)",
    title: "instagram",
    thumbnail: `/2296156.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "러블리즈 lovelyz lvlz 아츄 ah-choo",
    singer: "러블리즈 (LOVELYZ / LVLZ)",
    album: "Lovelyz8 (2015)",
    title: "Ah-Choo",
    thumbnail: `/583412.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "슬기로운의사생활 슬의생 조이 joy 좋은사람있으면소개시켜줘",
    singer: "조이 (JOY)",
    album: "슬기로운 의사생활 OST Part 2 (2020)",
    title: "좋은 사람 있으면 소개시켜줘",
    thumbnail: `/4492194.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "슬기로운의사생활 슬의생 전미도 사랑하게될줄알았어",
    singer: "전미도",
    album: "슬기로운 의사생활 OST Part 11 (2020)",
    title: "사랑하게 될 줄 알았어",
    thumbnail: `/4574324.png?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "마마무 mamamoo 고고베베 gogobebe",
    singer: "마마무 (Mamamoo)",
    album: "White Wind (2019)",
    title: "고고베베 (gogobebe)",
    thumbnail: `/2927532.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "마크툽 maktub 오늘도빛나는너에게 to you my light 이라온",
    singer: "마크툽 (Maktub)",
    album: "Red Moon : To You My Light (2019)",
    title: "오늘도 빛나는 너에게 (To You My Light) (Feat. 이라온)",
    thumbnail: `/3065603.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "모모랜드 momoland 뱀 뺌 baam",
    singer: "모모랜드 (MOMOLAND)",
    album: "Fun to The World (2018)",
    title: "BAAM",
    thumbnail: `/2472152.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "방탄소년단 bts 작은것들을위한시 boy with luv halsey",
    singer: "방탄소년단 (BTS)",
    album: "MAP THE SOUL : PERSONA (2019)",
    title: "작은 것들을 위한 시 (Boy With Luv) (Feat. Halsey)",
    thumbnail: `/3003472.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "방탄소년단 bts 다이나마이트 다이너마이트 dynamite",
    singer: "방탄소년단 (BTS)",
    album: "Dynamite (2020)",
    title: "Dynamite",
    thumbnail: `/4820425.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "방탄소년단 bts life goes on",
    singer: "방탄소년단 (BTS)",
    album: "BE (2020)",
    title: "Life Goes On",
    thumbnail: `/5100133.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "방탄소년단 bts permission to dance",
    singer: "방탄소년단 (BTS)",
    album: "Butter / Permission to Dance (2021)",
    title: "Permission to Dance",
    thumbnail: `/6162038.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "방탄소년단 bts 버터 butter",
    singer: "방탄소년단 (BTS)",
    album: "Butter / Permission to Dance (2021)",
    title: "Butter",
    thumbnail: `/6162038.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "볼빨간사춘기 볼4 bol4 나만봄",
    singer: "볼빨간사춘기",
    album: "사춘기집Ⅰ 꽃기운 (2019)",
    title: "나만, 봄",
    thumbnail: `/2979649.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "볼빨간사춘기 볼4 bol4 바람사람",
    singer: "볼빨간사춘기",
    album: "Red Diary Page.2 (2018)",
    title: "바람사람",
    thumbnail: `/2458444.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "볼빨간사춘기 볼4 bol4 여행",
    singer: "볼빨간사춘기",
    album: "Red Diary Page.2 (2018)",
    title: "여행",
    thumbnail: `/2458444.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "볼빨간사춘기 볼4 bol4 품",
    singer: "볼빨간사춘기",
    album: "사춘기집Ⅱ 꽃 본 나비 (2020)",
    title: "품",
    thumbnail: `/4552454.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "블랙핑크 블핑 blackpink 뚜두뚜두 ddu-du ddu-du",
    singer: "블랙핑크 (BLACKPINK)",
    album: "SQUARE UP (2018)",
    title: "뚜두뚜두 (DDU-DU DDU-DU)",
    thumbnail: `/2466109.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "천공의에스카플로네 天空のエスカフローネ The Vision of Escaflowne 사카모토마야 sakamoto maaya 指輪 ゆびわ 반지 ring",
    singer: "사카모토 마야 (Sakamoto Maaya / 坂本眞綾)",
    album: "천공의 에스카플로네 (天空のエスカフローネ) ED (1996)",
    title: "반지 (Ring/指輪/ゆびわ)",
    thumbnail: `/33bd9eccd324539295b3e7fe1a2fd1dc2eff0c6db693d698f8affba4568981f577411b5c6cc778da1e090461227f6248577df46f728e5125e6f5f70c5df3eda663a087067b972036f34217aa811d553364939cf5db8af85cffa63d6cd7b4f5a7.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "소녀시대 소시 girls generation snsd 다시만난세계 into the new world",
    singer: "소녀시대 (GIRLS` GENERATION / SNSD)",
    album: "다시 만난 세계 (2007)",
    title: "다시 만난 세계 (Into The New World)",
    thumbnail: `/61241.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "심수봉 백만송이장미",
    singer: "심수봉",
    album: "Original Golden Best (1997)",
    title: "백만송이 장미 (원곡 Aija Kukule)",
    thumbnail: `/17934.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "에이핑크 apink 응응",
    singer: "에이핑크 (Apink)",
    album: "PERCENT (2019)",
    title: "%% (응응)",
    thumbnail: `/2803544.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "우디 woody 이노래가클럽에서나온다면",
    singer: "우디 (Woody)",
    album: "이 노래가 클럽에서 나온다면 (2019)",
    title: "이 노래가 클럽에서 나온다면",
    thumbnail: `/2820741.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "엔플라잉 n.flying nflying 옥탑방 rooftop",
    singer: "엔플라잉 (N.Flying)",
    album: "FLY HIGH PROJECT #2 `옥탑방` (2019)",
    title: "옥탑방 (Rooftop)",
    thumbnail: `/2798714.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "아이오아이 ioi 소나기",
    singer: "아이오아이 (I.O.I)",
    album: "소나기 (2017)",
    title: "소나기",
    thumbnail: `/1775804.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "자우림 새",
    singer: "자우림",
    album: "Jaurim, the Wonderland (2000)",
    title: "새",
    thumbnail: `/2414.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "장윤정 어머나",
    singer: "장윤정",
    album: "어머나 (2004)",
    title: "어머나!",
    thumbnail: `/28320.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "재주소년 귤",
    singer: "재주소년",
    album: "재주소년 (才洲少年) (2003)",
    title: "귤",
    thumbnail: `/3140.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "정승환 눈사람",
    singer: "정승환",
    album: "그리고 봄 (2018)",
    title: "눈사람",
    thumbnail: `/2342202.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "타루 taru 트리플 드라마 mbc 초콜릿 초콜렛 초콜랫 chocolate",
    singer: "타루 (Taru)",
    album: "MBC 드라마 `트리플` (2009)",
    title: "초콜릿 (Chocolate)",
    thumbnail: `/190269.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "헤이즈 heize 해이즈 비도오고그래서 신용재",
    singer: "헤이즈 (Heize)",
    album: "/// (너 먹구름 비) (2017)",
    title: "비도 오고 그래서 (Feat. 신용재)",
    thumbnail: `/2068309.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "과속스캔들 박보영 아마도그건",
    singer: "박보영",
    album: "과속스캔들 OST (2008)",
    title: "아마도 그건",
    thumbnail: `/150496.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "테일즈런너 권진아 평행선 light and darkness",
    singer: "권진아",
    album: "테일즈런너 OST PART 2 (2020)",
    title: "평생선 (Light and Darkness)",
    thumbnail: `/5159148.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "월트디즈니 겨울왕국 frozen let it go Idina Menzel 효린",
    singer: "Idina Menzel (English) / 효린 (한국어)",
    album: "겨울왕국 (Frozen) OST (2013)",
    title: "Let It Go",
    thumbnail: `/411459.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "보이스2 예서 yeseo i hear you",
    singer: "예서 (YESEO)",
    album: "보이스2 Part 3 (2018)",
    title: "I Hear You",
    thumbnail: `/6ece9ae5e8dac4005fd7e11556e2baa5036d66739e4b669c7163976436e65512b75f3f5c3f004707a544bdf0e9d753bf9136b7ac13c58b7149e620e4f9bb9c726072861ccd9aff672b35c3c5af7ac47215bae6046a129d414ec0b206e1ee0b9f14c12dd70a899bb50f2270c2dbb994e0.png?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "kda pop stars 아이들 Madison Beer Jaira Burns lol",
    singer: "(여자)아이들, Madison Beer, Jaira Burns, K/DA, League of Legends",
    album: "POP/STARS (2018)",
    title: "POP/STARS",
    thumbnail: `/2579934.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "Kenshi Yonezu 요네즈켄시 米津玄師 lemon 레몬",
    singer: "요네즈 켄시 (Kenshi Yonezu / 米津玄師)",
    album: "Lemon (2018)",
    title: "레몬 (Lemon)",
    thumbnail: `/2420346.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "제이레빗 재이래빗 제이래빗 재이레빗 j rabbit 낭만여행",
    singer: "제이레빗 (J Rabbit)",
    album: "달을 품은 토끼 Vol 2 (2013)",
    title: "낭만여행",
    thumbnail: `/391055.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "로스트아크 스마일게이트알피지 smile gate rpg 테일오브플레체",
    singer: "-",
    album: "로스트아크 (LostArk) OST: VOL 2 IN-GAME TRACK (2020)",
    title: "테일 오브 플레체 (Tale of Pletze)",
    thumbnail: `/4927391.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "레드벨벳 레벨 red velvet 퀸덤 queendom",
    singer: "레드벨벳 (Red Velvet)",
    album: "Queendom - The 6th Mini Album (2021)",
    title: "Queendom",
    thumbnail: `/6303210.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "월트디즈니 jodi benson part of your world",
    singer: "Jodi Benson",
    album: "인어공주 (The Little Mermaid) OST (2021)",
    title: "Part of Your World",
    thumbnail: `/d46d662ae5ec3878d9b6951b11d5d945d8656c1388927494a1af8b62c49be055ebe954a798067dda5b2d22855b58c1cbd8b1ef08f7284a47294c0c68134ca2c8801ea22c0abf10c2e900e0d0cf4cc084a51ce4f3aad1b0c66e36f36fd49cc64543a28bb19a941a66ed03daebc6f4e78a.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "악동뮤지션 악뮤 akmu dinosaur 다이노소 다이너소",
    singer: "악동뮤지션 (악뮤 / AKMU)",
    album: "SUMMER EPISODE (2017)",
    title: "DINOSAUR",
    thumbnail: `/2113731.jpeg?${(Math.random() * 7).toString(7)}`,
  },
  {
    id: uuidv4(),
    name: "미노이 meenoi 3m",
    singer: "미노이 (meenoi)",
    album: "3M (2020)",
    title: "3M",
    thumbnail: `/4413233.jpeg?${(Math.random() * 7).toString(7)}`,
  },
];

export default songs;
