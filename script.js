// ===== 질문 데이터 =====
const questions = [
  {
    emoji: "🎉",
    text: "주말에 친구들이 갑자기 파티를 열자고 해요. 나의 반응은?",
    options: [
      { text: "오예!! 바로 달려간다 🏃", dimension: "E", value: 2 },
      { text: "좋긴 한데... 살짝 피곤하긴 해", dimension: "I", value: 2 },
    ]
  },
  {
    emoji: "💭",
    text: "새 프로젝트를 시작할 때 나는...",
    options: [
      { text: "구체적인 계획과 데이터부터 수집한다", dimension: "S", value: 2 },
      { text: "큰 그림을 그리고 가능성을 상상한다", dimension: "N", value: 2 },
    ]
  },
  {
    emoji: "⚖️",
    text: "친구가 나에게 솔직한 의견을 구할 때,",
    options: [
      { text: "팩트 기반으로 논리적으로 말해준다", dimension: "T", value: 2 },
      { text: "상대 감정을 먼저 배려하며 말한다", dimension: "F", value: 2 },
    ]
  },
  {
    emoji: "📅",
    text: "여행 계획을 세울 때 나는...",
    options: [
      { text: "일정표를 빽빽하게 짜야 마음이 편함", dimension: "J", value: 2 },
      { text: "대략적인 방향만 잡고 즉흥적으로 즐긴다", dimension: "P", value: 2 },
    ]
  },
  {
    emoji: "🗣️",
    text: "모르는 사람들이 많은 자리에서 나는...",
    options: [
      { text: "먼저 말 걸고 새로운 인연 만들기를 좋아해", dimension: "E", value: 2 },
      { text: "아는 사람 찾거나 구석에서 조용히 있어", dimension: "I", value: 2 },
    ]
  },
  {
    emoji: "🎨",
    text: "뭔가를 배울 때 나는...",
    options: [
      { text: "순서대로 차근차근 익힌다", dimension: "S", value: 2 },
      { text: "전체 흐름 파악 후 내 방식으로 응용한다", dimension: "N", value: 2 },
    ]
  },
  {
    emoji: "😤",
    text: "누군가와 의견이 충돌했을 때 나는...",
    options: [
      { text: "논리적으로 내 주장이 맞다는 걸 증명한다", dimension: "T", value: 2 },
      { text: "감정 상하지 않게 적당히 맞춰주게 된다", dimension: "F", value: 2 },
    ]
  },
  {
    emoji: "🎒",
    text: "학교 과제/업무 마감이 다가올 때 나는...",
    options: [
      { text: "미리 계획해서 여유롭게 끝낸다", dimension: "J", value: 2 },
      { text: "마감 직전에 몰아서 한다 (근데 잘함)", dimension: "P", value: 2 },
    ]
  },
  {
    emoji: "⚡",
    text: "에너지를 충전하는 나만의 방법은?",
    options: [
      { text: "친구들과 신나게 놀고 나면 충전 완료!", dimension: "E", value: 2 },
      { text: "혼자만의 시간이 있어야 제대로 쉰 것 같아", dimension: "I", value: 2 },
    ]
  },
  {
    emoji: "🔍",
    text: "문제를 해결할 때 더 의지하는 건?",
    options: [
      { text: "경험에서 쌓인 실용적인 방법들", dimension: "S", value: 2 },
      { text: "직관과 새로운 아이디어", dimension: "N", value: 2 },
    ]
  },
  {
    emoji: "💌",
    text: "연인이 힘들다고 할 때 나의 첫 반응은?",
    options: [
      { text: "원인을 파악하고 해결책을 찾아준다", dimension: "T", value: 2 },
      { text: "일단 안아주고 공감해준다", dimension: "F", value: 2 },
    ]
  },
  {
    emoji: "🌙",
    text: "오늘 할 일이 생겼을 때 나는...",
    options: [
      { text: "바로 처리하고 마음 편하게 쉰다", dimension: "J", value: 2 },
      { text: "좀 이따가 하지 뭐~", dimension: "P", value: 2 },
    ]
  },
  {
    emoji: "📱",
    text: "단체 카톡방에서 나는 주로...",
    options: [
      { text: "먼저 이야기 꺼내고 분위기 주도해", dimension: "E", value: 2 },
      { text: "읽고 필요할 때만 답장해", dimension: "I", value: 2 },
    ]
  },
  {
    emoji: "🗺️",
    text: "길을 찾을 때 나는...",
    options: [
      { text: "지도 앱 켜고 정확한 경로대로 간다", dimension: "S", value: 2 },
      { text: "대충 방향 잡고 감으로 찾아간다", dimension: "N", value: 2 },
    ]
  },
  {
    emoji: "🤝",
    text: "팀 프로젝트에서 나는...",
    options: [
      { text: "역할 분담 명확히 하고 효율을 따진다", dimension: "T", value: 2 },
      { text: "팀 분위기와 모두의 의견을 중요하게 생각한다", dimension: "F", value: 2 },
    ]
  },
  {
    emoji: "🛒",
    text: "마트에 장을 보러 갔을 때 나는...",
    options: [
      { text: "미리 적어온 목록대로만 산다", dimension: "J", value: 2 },
      { text: "눈에 띄는 거 담다 보면 카트가 가득", dimension: "P", value: 2 },
    ]
  },
  {
    emoji: "🎤",
    text: "발표나 회의가 있을 때 나는...",
    options: [
      { text: "적극적으로 의견 내고 말하는 게 편해", dimension: "E", value: 2 },
      { text: "말하기 전에 충분히 생각하고 신중하게 발언해", dimension: "I", value: 2 },
    ]
  },
  {
    emoji: "🌱",
    text: "미래에 대해 생각할 때 나는...",
    options: [
      { text: "현실적인 근거와 계획을 바탕으로 생각해", dimension: "S", value: 2 },
      { text: "가능성과 꿈을 크게 그려보는 편이야", dimension: "N", value: 2 },
    ]
  },
  {
    emoji: "😢",
    text: "친구가 울면서 고민을 털어놓을 때 나는...",
    options: [
      { text: "왜 그런 상황이 됐는지 분석하고 해결 방법을 알려줘", dimension: "T", value: 2 },
      { text: "같이 울어줄 것 같아... 너무 마음이 아파", dimension: "F", value: 2 },
    ]
  },
  {
    emoji: "✈️",
    text: "여행 당일 아침, 나는...",
    options: [
      { text: "짐은 이미 전날 다 쌌고 출발 시간도 체크 완료", dimension: "J", value: 2 },
      { text: "아 맞다 짐!! 지금 싸야지", dimension: "P", value: 2 },
    ]
  },
  {
    emoji: "🎵",
    text: "카페에서 혼자 시간을 보낼 때 나는...",
    options: [
      { text: "지인한테 연락해서 같이 오라고 할 것 같아", dimension: "E", value: 2 },
      { text: "혼자 있는 시간이 꿀이야, 방해받기 싫어", dimension: "I", value: 2 },
    ]
  },
  {
    emoji: "🔬",
    text: "새로운 정보를 접할 때 나는...",
    options: [
      { text: "사실 여부부터 확인하고 검증된 정보를 믿어", dimension: "S", value: 2 },
      { text: "흥미롭다면 일단 가능성을 열어두고 생각해봐", dimension: "N", value: 2 },
    ]
  },
  {
    emoji: "🏆",
    text: "누군가의 잘못을 지적해야 할 때 나는...",
    options: [
      { text: "감정 없이 사실을 명확하게 말한다", dimension: "T", value: 2 },
      { text: "상처받지 않도록 최대한 부드럽게 돌려 말한다", dimension: "F", value: 2 },
    ]
  },
  {
    emoji: "📦",
    text: "방 청소를 할 때 나는...",
    options: [
      { text: "구역별로 계획 세우고 깔끔하게 마무리해", dimension: "J", value: 2 },
      { text: "하다가 옛날 물건 꺼내 추억에 잠기다 끝나", dimension: "P", value: 2 },
    ]
  },
];

// ===== MBTI 결과 데이터 (16가지 유형) =====
const mbtiData = {
  INFP: {
    name: "🌸 중재자형",
    desc: "이상주의적이고 공감 능력이 뛰어난 당신! 세상을 더 아름답게 만들고 싶어 해요.",
    traits: ["깊은 공감 능력을 가지고 있어요", "혼자만의 시간을 소중히 여겨요", "강한 내면의 가치관이 있어요", "창의적이고 독창적인 사고를 해요"],
    strengths: ["뛰어난 공감 능력", "창의적 사고력", "진정성 있는 관계"],
    weaknesses: ["지나친 이상주의", "비판에 민감함", "현실적 판단 부족"],
    love: {
      summary: "💘 감성 로맨틱 연애형",
      traits: ["사랑하는 사람에게 헌신적이에요", "감정 표현은 깊지만 내성적으로 해요", "완벽한 사랑을 꿈꾸는 이상주의자예요"],
      conflict: "갈등 상황에서 회피하거나 혼자 삭히는 경향이 있어요. 솔직하게 감정을 표현하는 연습이 필요해요!"
    },
    study: {
      type: "📚 감성 몰입형",
      desc: "좋아하는 과목은 깊게 파고드는 반면, 흥미 없는 과목은 회피하는 경향이 있어요.",
      good: ["스토리/맥락 중심 학습", "마인드맵 활용", "조용한 환경에서 집중"],
      bad: ["반복 위주 단순 암기", "시끄러운 환경", "타인과 경쟁하는 방식"],
      time: ["내가 가장 집중되는 시간대 파악", "짧은 집중 + 충분한 휴식", "하루 목표를 감성 다이어리에 기록"],
      moti: ["공부의 의미와 이유를 스스로 찾기", "좋아하는 음악 BGM 활용", "성취했을 때 자신에게 선물하기"]
    },
    match: {
      good: ["ENFJ", "ENTJ"],
      goodReason: "ENFJ/ENTJ는 INFP의 이상주의를 현실로 만들어주는 든든한 파트너예요! 서로의 다름이 시너지를 만들어요.",
      bad: ["ESTJ", "ESTP"],
      badReason: "현실 중심적인 ESTJ/ESTP와는 가치관 충돌이 잦을 수 있어요. 이해하는 노력이 필요해요."
    }
  },
  INFJ: {
    name: "🔮 옹호자형",
    desc: "깊은 통찰력과 강한 이상을 가진 희귀한 유형! 세상에 긍정적 변화를 만들고 싶어해요.",
    traits: ["뛰어난 통찰력과 직관력", "타인을 깊이 이해하는 공감 능력", "원칙과 가치관이 확고해요", "창의적이고 미래지향적이에요"],
    strengths: ["깊은 통찰력", "강한 공감 능력", "목표 달성 의지"],
    weaknesses: ["완벽주의 성향", "지나친 이타심", "비판 수용 어려움"],
    love: {
      summary: "💘 깊은 연결을 원하는 영혼 탐구형",
      traits: ["진정한 영혼의 연결을 원해요", "파트너를 깊이 이해하려 해요", "헌신적이고 충실한 사랑을 해요"],
      conflict: "갈등이 생기면 깊이 생각하고 혼자 고민해요. 파트너와 직접 대화하는 것이 더 효과적이에요!"
    },
    study: {
      type: "📚 통찰 탐구형",
      desc: "단순 암기보다 깊이 이해하는 것을 선호해요. 의미 있는 학습에서 최고 성과를 발휘해요.",
      good: ["개념 중심 깊이 학습", "연결고리 찾기", "글쓰기로 정리하기"],
      bad: ["표면적 암기", "의미 없는 반복", "경쟁 위주 환경"],
      time: ["장기 계획 세우기", "의미 있는 목표와 연결", "규칙적인 루틴 유지"],
      moti: ["더 큰 목적/의미 찾기", "성장 일기 쓰기", "영감을 주는 멘토 찾기"]
    },
    match: {
      good: ["ENFP", "ENTP"],
      goodReason: "ENFP/ENTP의 자유로운 에너지가 INFJ의 깊은 세계를 확장시켜줘요. 최고의 지적 파트너!",
      bad: ["ESTP", "ISTP"],
      badReason: "현재 중심적이고 행동파인 ESTP/ISTP와는 삶의 방식이 달라 충돌이 생길 수 있어요."
    }
  },
  INTP: {
    name: "🧪 논리학자형",
    desc: "지식욕이 강한 분석가! 복잡한 문제를 파고드는 것을 즐겨요.",
    traits: ["논리적이고 분석적이에요", "지적 호기심이 넘쳐요", "독립적으로 생각해요", "창의적인 문제 해결사예요"],
    strengths: ["탁월한 분석력", "독창적 사고", "객관적 판단력"],
    weaknesses: ["감정 표현 서툼", "완벽주의로 마무리 어려움", "규칙 따르기 싫어함"],
    love: {
      summary: "💘 지적 교감을 원하는 분석가형",
      traits: ["사랑보다 지적 연결을 먼저 원해요", "감정 표현이 서툴지만 진심은 깊어요", "자유와 공간을 중시해요"],
      conflict: "갈등을 논리적으로 해결하려다 상대 감정을 놓칠 수 있어요. 가끔은 공감이 답이에요!"
    },
    study: {
      type: "📚 심층 분석형",
      desc: "흥미로운 주제에서는 엄청난 집중력을 발휘해요. 이해 없는 암기는 극도로 싫어해요.",
      good: ["원리/메커니즘 이해 중심", "혼자 탐구하는 시간", "다양한 관련 자료 탐색"],
      bad: ["이해 없는 단순 암기", "집단 학습", "정해진 틀 안에서만 공부"],
      time: ["관심사 순서대로 공부", "몰입 상태 최대한 활용", "다음 날 복습으로 정리"],
      moti: ["새로운 아이디어와 연결하기", "문제 해결의 쾌감 활용", "흥미로운 챌린지 설정"]
    },
    match: {
      good: ["ENTJ", "ESTJ"],
      goodReason: "실행력 있는 ENTJ/ESTJ가 INTP의 아이디어를 현실로 만들어줘요. 완벽한 보완 관계!",
      bad: ["ESFJ", "ISFJ"],
      badReason: "감정과 전통을 중시하는 ESFJ/ISFJ와는 가치관 차이가 크게 느껴질 수 있어요."
    }
  },
  INTJ: {
    name: "♟️ 전략가형",
    desc: "독립적이고 결단력 있는 완벽주의자! 목표를 향해 전략적으로 움직여요.",
    traits: ["전략적이고 체계적이에요", "높은 기준과 완벽주의", "독립적이고 자기확신 강함", "장기적 안목이 있어요"],
    strengths: ["탁월한 전략적 사고", "강한 실행력", "높은 목표 달성률"],
    weaknesses: ["지나친 완벽주의", "감정 표현 미숙", "타인 이해 어려움"],
    love: {
      summary: "💘 진지하고 헌신적인 전략가형",
      traits: ["연애도 진지하게 접근해요", "신중하게 파트너를 선택해요", "한번 사랑하면 깊게 헌신해요"],
      conflict: "논리로 모든 걸 해결하려 해요. 때로는 파트너의 감정이 논리보다 중요하다는 것을 기억해요!"
    },
    study: {
      type: "📚 전략적 정복형",
      desc: "명확한 목표와 계획 하에 효율적으로 공부해요. 비효율적인 방법은 절대 참을 수 없어요.",
      good: ["목표 기반 학습 계획", "핵심만 뽑아 심층 이해", "혼자 집중하는 환경"],
      bad: ["비효율적 반복 학습", "목적 없는 공부", "집단 학습 강요"],
      time: ["주간/월간 마스터 플랜", "우선순위 엄격히 지키기", "성과 분석 및 전략 수정"],
      moti: ["명확한 장기 목표 설정", "경쟁자 설정 (자기 자신 포함)", "성취 기록으로 동기 유지"]
    },
    match: {
      good: ["ENFP", "ENTP"],
      goodReason: "자유로운 ENFP/ENTP가 INTJ의 굳은 세계에 새바람을 불어넣어요. 지적 흥미가 넘쳐나요!",
      bad: ["ESFP", "ISFP"],
      badReason: "즉흥적이고 감성 중심인 ESFP/ISFP와는 생활 방식이 달라 갈등이 잦을 수 있어요."
    }
  },
  ENFP: {
    name: "🌈 활동가형",
    desc: "열정과 창의력이 넘치는 자유로운 영혼! 새로운 가능성에 언제나 설레어해요.",
    traits: ["에너지 넘치고 열정적이에요", "창의적이고 아이디어가 풍부해요", "사람들과 쉽게 어울려요", "새로운 것에 항상 호기심이 많아요"],
    strengths: ["강한 열정과 에너지", "탁월한 창의력", "뛰어난 친화력"],
    weaknesses: ["집중력 분산 쉬움", "마무리 어려움", "지나친 낙관주의"],
    love: {
      summary: "💘 열정 폭발 로맨틱 연애형",
      traits: ["연애에 온 에너지를 쏟아요", "낭만적이고 창의적인 데이트를 계획해요", "파트너를 진심으로 응원하고 지지해요"],
      conflict: "갈등보다 화해를 선호해요. 하지만 문제를 제대로 해결 안 하면 반복될 수 있어요!"
    },
    study: {
      type: "📚 흥미 탐색형",
      desc: "재미있으면 폭발적 집중, 지루하면 완전 무기력. 극과 극의 공부 스타일이에요!",
      good: ["게임화된 학습법", "다양한 방식 번갈아 사용", "스터디 그룹에서 에너지 받기"],
      bad: ["단순 반복 암기", "혼자 오래 앉아 공부", "흥미 없는 내용 강요"],
      time: ["짧고 강렬한 집중 세션", "포모도로 기법 (25분 집중)", "다양한 과목 교차 학습"],
      moti: ["공부의 재미 요소 발견", "친구와 함께하는 학습", "목표 달성 후 신나는 보상"]
    },
    match: {
      good: ["INTJ", "INFJ"],
      goodReason: "깊이 있는 INTJ/INFJ가 ENFP의 아이디어에 방향성을 줘요. 최강 조합!",
      bad: ["ISTJ", "ISFJ"],
      badReason: "전통과 규칙을 중시하는 ISTJ/ISFJ와는 자유로운 스타일 차이로 답답함을 느낄 수 있어요."
    }
  },
  ENFJ: {
    name: "🌟 선도자형",
    desc: "카리스마 넘치는 천생 리더! 사람들에게 영감을 주고 함께 성장하는 걸 좋아해요.",
    traits: ["자연스러운 리더십이 있어요", "타인의 성장을 도와주고 싶어해요", "카리스마 있고 설득력이 강해요", "감정적으로 세심하고 배려심이 깊어요"],
    strengths: ["탁월한 리더십", "강한 설득력", "깊은 배려심"],
    weaknesses: ["타인 의존 경향", "자기 자신 돌봄 부족", "지나친 자기희생"],
    love: {
      summary: "💘 헌신적인 따뜻한 리더형",
      traits: ["파트너의 성장을 진심으로 응원해요", "관계에 깊이 헌신하고 투자해요", "함께하는 미래를 구체적으로 그려요"],
      conflict: "갈등 상황에서 파트너를 달래려 노력해요. 하지만 내 감정도 솔직히 표현해야 해요!"
    },
    study: {
      type: "📚 함께 성장형",
      desc: "가르치면서 배우는 스타일! 스터디 그룹이나 팀 학습에서 최고 성과를 내요.",
      good: ["팀 학습 / 스터디 그룹", "다른 사람 가르치며 정리", "토론과 발표 방식"],
      bad: ["완전 혼자 고립된 학습", "경쟁만 강조하는 환경", "피드백 없는 단독 작업"],
      time: ["팀원들과 목표 공유", "서로 점검하는 스터디", "규칙적인 미팅과 리뷰"],
      moti: ["함께하는 사람들의 성장", "긍정적 피드백 주고받기", "공동 목표 설정"]
    },
    match: {
      good: ["INFP", "ISFP"],
      goodReason: "감성적인 INFP/ISFP와 따뜻하고 깊은 감성적 유대감을 형성해요. 서로를 완성시켜줘요!",
      bad: ["INTP", "ISTP"],
      badReason: "논리 중심의 INTP/ISTP와는 감정적 소통 방식이 달라 답답함을 느낄 수 있어요."
    }
  },
  ENTP: {
    name: "⚡ 변론가형",
    desc: "끝없는 호기심과 재치를 가진 토론의 달인! 새로운 아이디어로 세상을 흔들어요.",
    traits: ["지적 토론을 즐겨요", "창의적이고 독창적이에요", "빠른 사고와 재치가 있어요", "새로운 도전을 즐겨요"],
    strengths: ["탁월한 창의력", "빠른 아이디어 발상", "설득력 있는 토론 실력"],
    weaknesses: ["끈기 부족", "규칙 따르기 싫어함", "감정 표현 서툼"],
    love: {
      summary: "💘 지적 자극을 원하는 토론가형",
      traits: ["지적으로 흥미로운 파트너에게 끌려요", "독특하고 창의적인 데이트를 선호해요", "자유롭고 독립적인 관계를 원해요"],
      conflict: "갈등을 토론으로 해결하려 해요. 상대가 상처받을 수 있으니 공감 먼저 표현해봐요!"
    },
    study: {
      type: "📚 흥미 폭발 게릴라형",
      desc: "재미있으면 밤새 파고들고 지루하면 10분도 못 앉아 있어요. 공부도 게임처럼 해야 해요!",
      good: ["토론/논쟁 형식 학습", "다양한 관점에서 접근", "새로운 방식 실험"],
      bad: ["반복 암기", "틀에 박힌 공부법", "혼자 단순 독서"],
      time: ["흥미로운 주제 먼저 시작", "시간 제한 게임 방식", "여러 과목 빠르게 순환"],
      moti: ["지적 도전 과제 설정", "토론 파트너 찾기", "학습 내용 창의적으로 응용"]
    },
    match: {
      good: ["INTJ", "INFJ"],
      goodReason: "깊이 있는 INTJ/INFJ와 최고의 지적 시너지를 만들어요. 서로 성장하게 해줘요!",
      bad: ["ISFJ", "ESFJ"],
      badReason: "전통과 안정을 중시하는 ISFJ/ESFJ와는 변화에 대한 시각 차이가 클 수 있어요."
    }
  },
  ENTJ: {
    name: "👑 통솔자형",
    desc: "타고난 리더이자 전략가! 목표를 향해 거침없이 나아가는 강한 의지를 가졌어요.",
    traits: ["강한 리더십과 카리스마", "전략적이고 결단력 있어요", "높은 효율과 성과를 추구해요", "장기적 목표를 향해 움직여요"],
    strengths: ["강력한 리더십", "탁월한 전략적 사고", "높은 목표 달성 의지"],
    weaknesses: ["너무 강한 지배욕", "타인 감정 무시할 수 있음", "지나친 완벽주의"],
    love: {
      summary: "💘 열정적이고 주도적인 리더형",
      traits: ["연애도 주도적으로 이끌어요", "파트너의 성장을 적극 지원해요", "미래 계획을 함께 그리는 걸 좋아해요"],
      conflict: "내 방식이 맞다고 강하게 주장할 수 있어요. 파트너 의견도 귀기울여 들어봐요!"
    },
    study: {
      type: "📚 목표 정복형",
      desc: "목표가 생기면 엄청난 추진력으로 달려가요. 비효율은 절대 못 참는 완벽주의자예요.",
      good: ["명확한 목표 설정 후 역산 계획", "효율적인 핵심 위주 학습", "경쟁을 통한 동기 부여"],
      bad: ["목적 없는 공부", "비효율적 방법 강요", "지나치게 느린 페이스"],
      time: ["KPI 기반 학습 관리", "주간 성과 점검", "최우선 과목에 집중"],
      moti: ["명확한 1등 목표", "성과 측정 및 보상", "경쟁자와 비교해 동기 유발"]
    },
    match: {
      good: ["INTP", "INFP"],
      goodReason: "INTP의 깊은 분석력, INFP의 창의적 감성이 ENTJ의 실행력과 결합하면 최강 파트너!",
      bad: ["INFP", "ISFP"],
      badReason: "민감한 INFP/ISFP와는 직설적인 ENTJ 방식이 상처를 줄 수 있어요. 배려가 필요해요."
    }
  },
  ISFP: {
    name: "🎨 모험가형",
    desc: "감성적이고 유연한 예술가 기질! 현재 순간을 누구보다 깊이 느껴요.",
    traits: ["감수성이 풍부하고 예술적이에요", "현재 순간에 집중해요", "조화를 중요하게 여겨요", "개방적이고 유연한 태도예요"],
    strengths: ["깊은 감수성", "뛰어난 예술적 감각", "유연한 적응력"],
    weaknesses: ["장기 계획 어려움", "갈등 회피 경향", "스트레스에 민감"],
    love: {
      summary: "💘 순간을 소중히 여기는 감성 연애형",
      traits: ["진심 어린 소소한 표현을 해요", "파트너와의 순간순간을 소중히 여겨요", "자유로운 공간이 있는 연애를 선호해요"],
      conflict: "갈등을 피하려는 경향이 있어요. 하지만 쌓이면 더 힘들어요. 조금씩 표현해봐요!"
    },
    study: {
      type: "📚 감성 체험형",
      desc: "직접 해보면서 배우는 것을 좋아해요. 흥미와 감성이 자극될 때 최고의 집중력을 발휘해요.",
      good: ["실습/체험 중심 학습", "예쁜 필기와 색깔 활용", "좋아하는 환경 만들기"],
      bad: ["딱딱한 이론 위주", "경쟁 강조 환경", "자유 없는 획일적 방식"],
      time: ["기분 좋은 시간대 활용", "아름다운 공부 공간 만들기", "짧은 집중 세션"],
      moti: ["예쁜 문구류/다이어리 활용", "음악과 함께하는 학습", "완성했을 때의 아름다운 결과물"]
    },
    match: {
      good: ["ENFJ", "ESFJ"],
      goodReason: "따뜻하고 배려심 깊은 ENFJ/ESFJ와 안정적이고 따뜻한 사랑을 나눌 수 있어요!",
      bad: ["ENTJ", "ESTJ"],
      badReason: "강한 지배력의 ENTJ/ESTJ와는 자유로운 영혼 ISFP가 압박감을 느낄 수 있어요."
    }
  },
  ISTP: {
    name: "🔧 장인형",
    desc: "냉철하고 실용적인 분석가! 손으로 직접 만들고 해결하는 걸 즐겨요.",
    traits: ["논리적이고 실용적이에요", "독립적이고 자유를 사랑해요", "위기 상황에서 냉정하게 대처해요", "직접 해보며 배우는 스타일이에요"],
    strengths: ["탁월한 문제 해결 능력", "냉정한 위기 대처력", "실용적 사고"],
    weaknesses: ["감정 표현 어려움", "장기 계획 귀찮음", "규칙에 얽매이기 싫어함"],
    love: {
      summary: "💘 자유롭고 독립적인 쿨한 연애형",
      traits: ["말보다 행동으로 사랑을 표현해요", "파트너의 독립성을 존중해요", "쿨한 것 같아도 내면은 깊어요"],
      conflict: "감정보다 논리로 해결하려 해요. 파트너가 원하는 건 공감일 수 있어요!"
    },
    study: {
      type: "📚 실전 직관형",
      desc: "이론보다 실습이 훨씬 효과적이에요. 직접 해보면서 빠르게 체득하는 스타일이에요.",
      good: ["실습/프로젝트 중심", "필요할 때 필요한 것만", "혼자 집중하는 환경"],
      bad: ["긴 이론 강의", "의미 없는 반복 암기", "집단 학습 강요"],
      time: ["필요에 따라 유연하게", "집중될 때 몰아서 하기", "짧고 강렬한 세션"],
      moti: ["실용적인 응용 목표 설정", "문제 해결의 쾌감", "도전적인 프로젝트"]
    },
    match: {
      good: ["ESTJ", "ENTJ"],
      goodReason: "체계적인 ESTJ/ENTJ가 ISTP에게 방향성을 줘요. 서로의 부족함을 채워줘요!",
      bad: ["ENFJ", "ESFJ"],
      badReason: "감정 중심의 ENFJ/ESFJ와는 소통 방식 차이로 답답함을 느낄 수 있어요."
    }
  },
  ISTJ: {
    name: "📋 현실주의자형",
    desc: "책임감 있고 신뢰할 수 있는 든든한 존재! 체계와 질서를 사랑해요.",
    traits: ["책임감이 강하고 신뢰성 있어요", "체계적이고 꼼꼼해요", "전통과 규칙을 중시해요", "꾸준하고 끈기 있어요"],
    strengths: ["높은 책임감", "꼼꼼한 업무 처리", "강한 신뢰성"],
    weaknesses: ["변화에 저항 경향", "유연성 부족", "감정 표현 서툼"],
    love: {
      summary: "💘 믿음직하고 든든한 현실 연애형",
      traits: ["한번 사랑하면 변하지 않아요", "말보다 행동으로 사랑을 증명해요", "안정적이고 예측 가능한 연애를 선호해요"],
      conflict: "갈등이 생겨도 내색 안 하고 혼자 해결하려 해요. 파트너에게 솔직히 말해봐요!"
    },
    study: {
      type: "📚 계획 실행형",
      desc: "계획을 세우고 착실하게 실행해요. 루틴이 무너지면 스트레스를 받아요.",
      good: ["상세한 시간표 작성", "순서대로 차근차근", "복습과 정리를 철저히"],
      bad: ["즉흥적인 방식", "계획 없는 공부", "규칙 없는 환경"],
      time: ["주간 학습 플랜 고수", "규칙적인 공부 시간 고정", "체크리스트 활용"],
      moti: ["완료 체크의 쾌감", "작은 성취 기록", "루틴 유지 스트릭"]
    },
    match: {
      good: ["ESFP", "ESTP"],
      goodReason: "활발한 ESFP/ESTP가 ISTJ의 진지한 세계에 활력을 불어넣어요!",
      bad: ["ENFP", "ENTP"],
      badReason: "즉흥적이고 자유분방한 ENFP/ENTP와는 생활 방식 차이로 마찰이 잦을 수 있어요."
    }
  },
  ISFJ: {
    name: "🛡️ 수호자형",
    desc: "따뜻하고 헌신적인 보호자! 소중한 사람들을 위해 묵묵히 노력해요.",
    traits: ["헌신적이고 배려심이 깊어요", "책임감이 강하고 믿음직해요", "타인의 감정에 민감해요", "전통과 안정을 소중히 여겨요"],
    strengths: ["깊은 배려심", "강한 헌신성", "세심한 관찰력"],
    weaknesses: ["자기 희생 과함", "변화 적응 어려움", "거절 못하는 성격"],
    love: {
      summary: "💘 헌신적이고 따뜻한 수호 연애형",
      traits: ["파트너를 세심하게 챙겨줘요", "작은 것도 기억하고 챙겨요", "안정적이고 따뜻한 관계를 만들어요"],
      conflict: "상대에게 맞춰주다 자신의 감정을 억누를 수 있어요. 내 감정도 중요해요!"
    },
    study: {
      type: "📚 성실 꾸준형",
      desc: "화려하진 않지만 꾸준히 노력해요. 복습과 정리에 강하고 착실한 공부로 성과를 내요.",
      good: ["꾸준한 복습과 정리", "노트 필기 정성껏", "안정적인 환경에서 집중"],
      bad: ["갑작스러운 변화", "경쟁이 극도로 심한 환경", "계획 없는 즉흥 학습"],
      time: ["일정한 공부 시간 고수", "작은 목표 매일 달성", "주말 복습 루틴"],
      moti: ["소중한 사람을 위한 목표", "꾸준함의 기록", "칭찬과 인정 받기"]
    },
    match: {
      good: ["ESFP", "ESTP"],
      goodReason: "활기찬 ESFP/ESTP가 ISFJ에게 새로운 경험을 선물해요. 서로 잘 보완돼요!",
      bad: ["ENTP", "ENTJ"],
      badReason: "직설적인 ENTP/ENTJ의 방식이 배려심 깊은 ISFJ에게는 상처가 될 수 있어요."
    }
  },
  ESTJ: {
    name: "📊 경영자형",
    desc: "체계적이고 강한 책임감을 가진 현실주의 리더! 규칙과 질서를 만들어가요.",
    traits: ["뛰어난 조직력과 리더십", "강한 책임감과 실행력", "현실적이고 직접적이에요", "효율을 최우선으로 생각해요"],
    strengths: ["강한 실행력", "탁월한 조직 능력", "높은 책임감"],
    weaknesses: ["유연성 부족", "감정 표현 서툼", "너무 강한 주관"],
    love: {
      summary: "💘 책임감 있고 현실적인 실용 연애형",
      traits: ["연애도 체계적으로 접근해요", "파트너를 현실적으로 지원해요", "약속과 책임을 중요하게 여겨요"],
      conflict: "직설적이고 단호해서 상대가 상처받을 수 있어요. 부드러운 표현도 연습해봐요!"
    },
    study: {
      type: "📚 계획 실행 정복형",
      desc: "계획 세우고 꾸준히 실천하는 것이 장점! 루틴에 강하고 성실하게 목표를 달성해요.",
      good: ["시간표 기반 학습", "목표와 데드라인 명확히", "체계적인 복습"],
      bad: ["즉흥적 공부", "비효율적 방법", "목표 없는 학습"],
      time: ["엄격한 스케줄 관리", "완료 체크리스트", "주간 성과 리뷰"],
      moti: ["구체적 목표와 기한", "완료의 성취감", "경쟁을 통한 자극"]
    },
    match: {
      good: ["ISFP", "ISTP"],
      goodReason: "유연한 ISFP/ISTP가 ESTJ의 딱딱한 면을 부드럽게 만들어줘요. 균형이 맞아요!",
      bad: ["INFP", "INTP"],
      badReason: "이상주의적인 INFP/INTP와는 현실 vs 이상 충돌이 잦을 수 있어요."
    }
  },
  ESFJ: {
    name: "🎀 집정관형",
    desc: "따뜻하고 사교적인 인기 만능! 사람들과의 조화를 가장 중요하게 생각해요.",
    traits: ["따뜻하고 배려심이 깊어요", "사교적이고 친화력이 높아요", "타인의 감정을 잘 파악해요", "전통과 공동체를 소중히 여겨요"],
    strengths: ["뛰어난 친화력", "깊은 배려심", "강한 책임감"],
    weaknesses: ["타인 시선 과도하게 의식", "갈등 회피 경향", "변화에 불안감"],
    love: {
      summary: "💘 따뜻하고 헌신적인 사랑꾼형",
      traits: ["파트너를 위해 최선을 다해요", "사랑 표현을 아끼지 않아요", "함께하는 시간을 소중히 여겨요"],
      conflict: "조화를 중시해서 갈등을 피하려 해요. 하지만 솔직한 표현이 관계를 더 튼튼하게 해요!"
    },
    study: {
      type: "📚 함께 성장 응원형",
      desc: "스터디 그룹이나 함께하는 학습에서 최고의 성과! 분위기와 관계가 공부 효율에 영향을 줘요.",
      good: ["스터디 그룹", "서로 가르치고 배우기", "긍정적 피드백 환경"],
      bad: ["극도로 경쟁적인 환경", "혼자 고립된 학습", "비판만 많은 환경"],
      time: ["함께 공부하는 시간 만들기", "서로 격려하는 루틴", "분위기 좋은 공부 공간"],
      moti: ["팀원들의 응원", "함께 달성하는 목표", "서로 인정해주는 문화"]
    },
    match: {
      good: ["ISFP", "INFP"],
      goodReason: "감성적인 ISFP/INFP와 따뜻하고 깊은 정서적 유대를 만들어요!",
      bad: ["INTP", "ISTP"],
      badReason: "논리 중심의 INTP/ISTP와는 감정적 소통이 어렵고 답답함을 느낄 수 있어요."
    }
  },
  ESTP: {
    name: "🎯 사업가형",
    desc: "에너지 넘치는 행동파! 현재를 즐기며 빠른 판단과 실행력으로 승부해요.",
    traits: ["에너지 넘치고 행동력이 강해요", "현재 순간을 최대한 즐겨요", "위기 상황에서도 침착해요", "사교적이고 설득력이 있어요"],
    strengths: ["강한 실행력", "위기 대처 능력", "뛰어난 사교성"],
    weaknesses: ["인내심 부족", "장기 계획 어려움", "충동적 결정"],
    love: {
      summary: "💘 열정적이고 즉흥적인 모험 연애형",
      traits: ["자발적이고 흥미로운 데이트를 즐겨요", "열정적이고 직접적으로 사랑을 표현해요", "새로운 경험을 함께 추구해요"],
      conflict: "갈등이 생기면 직접적으로 맞부딪혀요. 상대 감정을 먼저 이해하는 연습이 필요해요!"
    },
    study: {
      type: "📚 실전 스피드형",
      desc: "지루한 공부는 못 참아요! 빠르게 핵심만 파악하고 실전에서 빛을 발해요.",
      good: ["핵심만 빠르게 정리", "실제 문제 풀이 중심", "짧고 강렬한 집중"],
      bad: ["긴 이론 강의", "단순 암기", "느린 페이스"],
      time: ["짧은 스프린트 방식", "자투리 시간 최대 활용", "시험 직전 집중 대폭발"],
      moti: ["경쟁과 도전", "즉각적인 결과 확인", "성취 후 신나는 보상"]
    },
    match: {
      good: ["ISFJ", "ISTJ"],
      goodReason: "안정적인 ISFJ/ISTJ가 ESTP에게 든든한 닻이 되어줘요. 서로가 필요한 존재예요!",
      bad: ["INFJ", "INTJ"],
      badReason: "깊고 복잡한 INFJ/INTJ와는 삶의 속도 차이로 갈등이 생길 수 있어요."
    }
  },
  ESFP: {
    name: "🎪 연예인형",
    desc: "삶 자체가 파티인 자유로운 엔터테이너! 현재의 기쁨을 온몸으로 표현해요.",
    traits: ["에너지 넘치고 긍정적이에요", "현재를 즐기는 낙천주의자예요", "사람들을 즐겁게 해주고 싶어해요", "새로운 경험을 항상 추구해요"],
    strengths: ["강한 긍정 에너지", "뛰어난 친화력", "즉흥적 적응력"],
    weaknesses: ["계획성 부족", "집중력 분산 쉬움", "장기 목표 어려움"],
    love: {
      summary: "💘 신나고 행복한 파티 연애형",
      traits: ["사랑할 때 온 에너지를 쏟아요", "자발적이고 낭만적이에요", "파트너를 웃게 만드는 것을 좋아해요"],
      conflict: "갈등은 빨리 해결하고 분위기 전환하길 원해요. 근본적 해결도 중요해요!"
    },
    study: {
      type: "📚 활기찬 순간 집중형",
      desc: "재미있는 환경에서 갑자기 몰입! 분위기와 에너지가 공부에 큰 영향을 미쳐요.",
      good: ["활기찬 스터디 카페", "친구와 함께하는 학습", "게임/퀴즈 형식"],
      bad: ["혼자 조용히 장시간 공부", "지루한 암기", "억압적인 분위기"],
      time: ["에너지 충만한 시간대", "자주 장소 바꾸기", "짧은 집중 + 충분한 휴식"],
      moti: ["함께 공부하는 친구", "공부 후 신나는 보상", "성취 공유의 기쁨"]
    },
    match: {
      good: ["ISFJ", "ISTJ"],
      goodReason: "안정적인 ISFJ/ISTJ가 자유로운 ESFP에게 균형을 잡아줘요. 든든한 파트너예요!",
      bad: ["INTJ", "INFJ"],
      badReason: "내면 중심적인 INTJ/INFJ와는 에너지 수준이 달라 서로 지칠 수 있어요."
    }
  }
};

// ===== STATE =====
let currentQuestion = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
let resultType = '';

// ===== SCREEN TRANSITION =====
function showScreen(id) {
  document.querySelectorAll('.screen.active').forEach(s => {
    s.classList.add('out');
    s.classList.remove('active');
    setTimeout(() => s.classList.remove('out'), 450);
  });
  setTimeout(() => {
    const target = document.getElementById(id);
    target.classList.add('active');
    target.scrollTop = 0;
  }, 150);
}

// ===== TEST START =====
function startTest() {
  currentQuestion = 0;
  scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  showScreen('screen-question');
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentQuestion];
  const total = questions.length;

  document.getElementById('progress-fill').style.width = `${((currentQuestion) / total) * 100}%`;
  document.getElementById('progress-text').textContent = `${currentQuestion + 1} / ${total}`;

  const card = document.getElementById('q-card');
  card.style.animation = 'none';
  card.offsetHeight;
  card.style.animation = 'popIn 0.4s cubic-bezier(.34,1.56,.64,1) both';

  document.getElementById('q-emoji').textContent = q.emoji;
  document.getElementById('q-text').textContent = q.text;

  const optContainer = document.getElementById('q-options');
  optContainer.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'q-option';
    btn.innerHTML = `<span>${opt.text}</span>`;
    btn.addEventListener('click', () => selectOption(opt));
    btn.style.animationDelay = `${i * 0.08}s`;
    btn.style.animation = `fadeUp 0.4s ${i * 0.08}s both`;
    optContainer.appendChild(btn);
  });
}

function selectOption(opt) {
  scores[opt.dimension] += opt.value;
  currentQuestion++;

  if (currentQuestion < questions.length) {
    renderQuestion();
  } else {
    showLoading();
  }
}

function goBack() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  } else {
    showScreen('screen-intro');
  }
}

// ===== LOADING =====
const loadingMessages = [
  "마인드 분석 중... 🧠",
  "연애 스타일 파악 중... 💘",
  "공부 유형 계산 중... 📚",
  "완벽한 결과 준비 중... ✨"
];

function showLoading() {
  showScreen('screen-loading');
  let idx = 0;
  const lt = document.getElementById('loading-text');
  lt.textContent = loadingMessages[0];
  const interval = setInterval(() => {
    idx++;
    if (idx < loadingMessages.length) {
      lt.textContent = loadingMessages[idx];
    }
  }, 600);

  setTimeout(() => {
    clearInterval(interval);
    calcResult();
    showScreen('screen-result');
  }, 2800);
}

// ===== CALCULATE RESULT =====
function calcResult() {
  const E = scores.E >= scores.I ? 'E' : 'I';
  const N = scores.N >= scores.S ? 'N' : 'S';
  const F = scores.F >= scores.T ? 'F' : 'T';
  const P = scores.P >= scores.J ? 'P' : 'J';
  resultType = E + N + F + P;

  const data = mbtiData[resultType] || mbtiData['INFP'];
  renderResult(data);
}

// ===== RENDER RESULT =====
function renderResult(data) {
  document.getElementById('result-type-badge').textContent = resultType;
  document.getElementById('result-type-name').textContent = data.name;
  document.getElementById('result-type-desc').textContent = data.desc;

  // Personality
  setList('personality-traits', data.traits);
  setList('personality-strengths', data.strengths);
  setList('personality-weaknesses', data.weaknesses);

  // Love
  document.getElementById('love-summary').textContent = data.love.summary;
  setList('love-traits', data.love.traits);
  document.getElementById('love-conflict').textContent = data.love.conflict;

  // Study
  document.getElementById('study-type-label').textContent = data.study.type;
  document.getElementById('study-desc').textContent = data.study.desc;
  setList('study-good', data.study.good);
  setList('study-bad', data.study.bad);
  setList('study-time', data.study.time);
  setList('study-moti', data.study.moti);

  // Match
  setMatchBadges('match-good', data.match.good, true);
  document.getElementById('match-good-reason').textContent = data.match.goodReason;
  setMatchBadges('match-bad', data.match.bad, false);
  document.getElementById('match-bad-reason').textContent = data.match.badReason;

  // Share card
  document.getElementById('sc-type').textContent = resultType;
  document.getElementById('sc-name').textContent = data.name;
  document.getElementById('sc-love-badge').textContent = data.love.summary;
  document.getElementById('sc-study-badge').textContent = data.study.type;

  // Reset tab
  switchTab('personality');
  document.getElementById('share-card-area').style.display = 'none';
}

function setList(id, arr) {
  const el = document.getElementById(id);
  el.innerHTML = arr.map(t => `<li>${t}</li>`).join('');
}

function setMatchBadges(id, types, good) {
  const el = document.getElementById(id);
  el.innerHTML = types.map(t =>
    `<span class="match-type-badge">${t}</span>`
  ).join('');
}

// ===== TABS =====
function switchTab(tab) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

  const tabs = ['personality', 'love', 'study', 'match'];
  const idx = tabs.indexOf(tab);
  document.querySelectorAll('.tab-btn')[idx].classList.add('active');
  document.getElementById(`tab-${tab}`).classList.add('active');
}

// ===== SHARE =====
function shareResult() {
  const area = document.getElementById('share-card-area');
  area.style.display = area.style.display === 'none' ? 'block' : 'none';
  if (area.style.display === 'block') {
    area.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function copyShareCard() {
  const data = mbtiData[resultType];
  const text = `🧠 MY MBTI 결과\n\n[${resultType}] ${data.name}\n${data.love.summary}\n${data.study.type}\n\nmymbti.me 에서 나도 해보기!`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      alert('📋 결과가 복사됐어요! 친구에게 공유해봐요 😊');
    });
  } else {
    alert(text);
  }
}

// ===== RETRY =====
function retryTest() {
  scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  currentQuestion = 0;
  showScreen('screen-intro');
}
