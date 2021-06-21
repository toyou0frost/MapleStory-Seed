const question = ["골드비치 리조트에 거주하는 잡화 상인 이름은?	프레드릭	나탈리	메이슨	베티   ③",
"노틸러스의 무기 상인 이름은?	리드	프란시스	테스	모건	④",
"노틸러스의 잡화 상인 이름은?	잭	시나몬	미르	갤리	④",
"노틸러스의 창고지기 이름은?	슈리츠	다고쓰	론도	돈틀레스	④",
"누구의 대사일까? - 고대 노바의 신을 모시고 있습니다.	소피아	브로커 정	펜릴	론도	③",
"누구의 대사일까? - 나의 근육을 보라구. 나처럼 강해지고 싶지 않나?	지미	뮤네	쿤	테스	③",
"누구의 대사일까? - 난 앞치마가 잘 어울리는 남자야.	헬레나	일렉스	크루소	프레드릭	②",
"누구의 대사일까? - 날씨가 참 좋죠? 해피와 산책하기 좋은 날씨입니다.	큐트	게렉터	시나몬	알렉스	②",
"누구의 대사일까? - 내가 주워왔으니까 내가 책임져!	비어완	프레드릭	골드리치	랑	④",
"누구의 대사일까? - 누가 대신 먹이좀 구해줬으면 좋겠다.	다니카	고로	따비	돌돌	④",
"누구의 대사일까? - 도둑질해 가는 사람을 용서하지 않을거야!	일스	해리	자아	루이스	②",
"누구의 대사일까? - 모두 힘을 합해야만 해요.	리나	라케리스	다고쓰	베티	②",
"누구의 대사일까? - 몸을 푼 지 얼마되지 않았답니다.	디테	랑	캘리코	따비	④",
"누구의 대사일까? - 상전벽해... 세월에 따라 세상도 많이 변하였소	도공	기옹	구영감	노공		①",
"누구의 대사일까? - 손이 예전같지 않아.. 어서 제자를 한 명 거뒀으면 좋겠는데..	기옹	이옹	김영감	구영감	①",
"누구의 대사일까? - 숙제도 많고 공부도 해야되고..바쁘다..	요정 윙	요정 아르웬	요정 잭	요정로웬	①",
"누구의 대사일까? - 아궁이 불을 뗄 땔감이 부족하네	이토스	슈미	로도스	고로	④",
"누구의 대사일까? - 악마의 문서를 가지고 있다면 나한테 맡겨 보는건 어때?	휴머노이드 C	지니	리드	슈미	②",
"누구의 대사일까? - 앞이 보이냐고? 뭘 당연한걸 묻는거지?	페이슨	푸노운	푸카	소피아	②",
"누구의 대사일까? - 약초를 모으고 있다네…	사비트라마	벼루	키리두	로도스	①",
"누구의 대사일까? - 어라…? 내 연구자료가 어디로 갔지?	에스텔	제피	케리	마법사 쿠디	④",
"누구의 대사일까? - 요즘 몬스터들이 사나워진 것 같아 걱정이에요.	큐트	리사	푸츠키	지미	②",
'누구의 대사일까? - 일도 중요하지만 맛있는 거 먹는것도 참 중요하지	오심마	바반	프란시스	에스텔	②',
"누구의 대사일까? - 친구인 아르웬은 인간을 불편해 한답니다.	요정 로웬	아이린	요정 윙	요정 푸링 ①",
"누구의 대사일까? - 친구인 아르웬은 인간을 불편해 한답니다. 요정 로웬	요정 루엔	요정 윙	요정 푸링	①",
"누구의 대사일까? - 킁킁…이게 무슨 냄새죠?	유타	페일	알비올라	마녀 바바라	③",
"누구의 대사일까? - 태상에게 약초를 빨리 보내주어야 할텐데…	구영감	김영감	박영감	조영감	①",
"누구의 대사일까? - 튼튼한 방어구가 필요하다면 잠깐 여기에 들려보지 그래?	루이스	마이크	로도스	미르	③",
"누구의 대사일까? - 하인즈가 나쁜 사람은 아니지만..	요정 아르웬	무라트	프델라	요정 수	①",
"누구의 대사일까? - 해수면의 상승이 멈춰야 할 텐데..	도베르만	슈미	푸탄	천지	③",
"누구의 대사일까? - 해적은 최강! 한 판 붙어 보자고요!	베티	마파	라엘	발레리	④",
"누구의 대사일까? - 혼자 노는 것도 심심해… 후~	체프	앤	푸로	유타	②",
"누구의 대사일까? - 흐음 자네도 득도의 수련을 해볼텐가?	노공	도공	기옹	구영감	①",
"누구의 대사일까? - 흥, 외부인은 도무지 신뢰할 수 없다니까.	라니아	알렉스	토푸	교감 카라얀	④",
"다음 중 검사의 스킬로 옳지 않은 것은?	아이언바디	상상력 증가	파워 스트라이크	슬래시 블러스트	②",
"다음 중 나이트워커의 스킬로 옳지 않는 것은?	콜래트럴 플래시	다크니스	헤이스트	매직 스틸	①",
"다음 중 나이트워커의 스킬로 옳지 않는 것은?    콜래트럴 플래시	쉐도우 서번트	헤이스트	도미니언	①",
"다음 중 데몬슬레이어의 스킬로 옳지 않을 것은?	마인드 스킨	뱀피릭 터치	메이플 용사	다크 바인드	①",
"다음 중 메카닉의 스킬로 옳지 않을 것은?	포춘 어택	플레임 런처	개틀링 샷	클레이모어	④",
"다음 중 미하일의 스킬로 옳지 않는 것은?	소울 아카이브	소울 실드	소울 어질리티	소울 블레이드	①",
"다음 중 팬텀의 스킬로 옳지 않는 것은?	미스포츈 프로텍션	퍼펙트 센스	어큐트 센스	플래시 앤 플리	②",
"다음 중 캐논슈터의 스킬로 옳지 않는 것은?	슬러그 샷	캐논 마스터리	몽키 매직	패스트 리로드	④",
"다음 중 배틀메이지 스킬로 옳지 않은 것은?	하이 위즈덤	쿼드 블로우	블러드 드레인	드로우 마나	④",
"다음 중 배틀메이지 스킬로 옳지 않은 것은?   하이 위즈덤	쿼드 블로우	드레인 오라	드로우 마나 ④",
"다음 중 신궁의 스킬로 옳지 않은 것은?	마크맨쉼	피어싱	문워크	일루전 스텝	③",
"다음 중 윈드브레이커의 스킬로 옳지 않은 것은?	더블샷 위쳐	크리티컬 샷	아처 마스터리	스톰	①",
"다음 중 은월의 스킬에 속하지 않는 것은? 통백권 ③타	불여우령	스텀핑 어 머드홀	하이퍼 애큐러시	③",
"다음 중 은월의 스킬에 속하지 않는 것은? 통백권 ③타	불여우령	스텀핑 어 머드홀	분혼 격참	③",
"다음 중 은월의 스킬에 속하지 않는 것은? 너클 숙련	환령 강신	하이퍼 버팅	히어로즈 오쓰	③",
"다음 중 은월의 스킬에 속하지 않는 것은? 약화	정령 결속 ④식	건곤 일체	슬리퍼 홀드	④",
"다음 중 은월의 스킬에 속하지 않는 것은? 파력권 ②타	분홍 파참	메이플 용사	소혼 결계	②",
"다음 중 은월의 스킬에 속하지 않는 것은? 근력 단련	폭류권 ④타	심의육합권	정령 결속 극대화	③",
"다음 중 은월의 스킬에 속하지 않는 것은? 팔극 ④타	섬권 ②타	사혼 각인	너클 숙련	①",
"다음 중 은월의 스킬에 속하지 않는 것은? 태극 ②타	메가 펀치 ②타	귀참	후방 이동	①",
"다음 중 은월의 스킬에 속하지 않는 것은? 소혼 장막	약점 간파	도약	참격	④",
"다음 중 은월의 스킬에 속하지 않는 것은? 여우령	속박술	난투	정령의 화신	③",
"다음 중 은월의 스킬에 속하지 않는 것은? 도약	천근추	분혼 격참	파쇄철조	②",
"다음 중 팔라딘의 스킬에 속하지 않는 것은?   제령 가디언 아머	라이트닝 차지	어드밴스드 차지	①",
"다음 중 팔라딘의 스킬에 속하지 않는 것은? 엘리멘탈 차지	아킬레스	위협	블레싱	④",
"다음 중 팔라딘의 스킬에 속하지 않는 것은? 아이언 바디	추격	컴뱃 오더스	팔라딘 엑스퍼트	②",
"다음 중 팔라딘의 스킬에 속하지 않는 것은? 파이널 어택	페이지 오더	헤이스트	생츄어리	③",
"다음 중 팔라딘의 스킬에 속하지 않는 것은? 웨폰 마스터리	블리자드 차지	맨디블 클로우	블래스트	③",
"다음 중 팔라딘의 스킬에 속하지 않는 것은? 실신한 기도	워리어 마스터리	리스토네이션	스탠스	①",
"다음 중 팔라딘의 스킬에 속하지 않는 것은? 워리어 리프	플레임 차지	라이트닝 액션	디바인 차지	③",
"다음 중 팔라딘의 스킬에 속하지 않는 것은? 피지컬 트레이닝	실드 마스터리	리갈 스트레치	용사의 의지	③",
"다음 중 팔라딘의 스킬에 속하지 않는 것은? 슬래시 블러스트	플레임 디펜스	돌진	메이플 용사	②",
"다음 중 팔라딘의 스킬에 속하지 않는 것은? 웨폰 부스터	블래싱 아머	파라쇼크 가드	디바인 소드	④",
"다음 중 제로의 스킬에 속하지 않는 것은? 어스 브레이크	크림슨 커터	롤링 커브	어퍼 슬래시	②",
"다음 중 제로의 스킬에 속하지 않는 것은? 스핀 커터	디바인 리어	사이킥 트레이서	스로잉 웨폰	③",
"다음 중 제로의 스킬에 속하지 않는 것은? 컴뱃 리커버리	윈드 커터	이뮨 배리어	문설트	④",
"다음 중 제로의 스킬에 속하지 않는 것은? 솔리드 바디	스톰 브레이크	더블 스트레치	문 스트라이크	③",
"다음 중 제로의 스킬에 속하지 않는 것은? 스로잉 웨폰	기가 크래시	어스 브레이크	파일 드라이브	④",
"다음 중 제로의 스킬에 속하지 않는 것은? 점핑 크래시	데들리 액션	터닝 드라이브	태도 마스터리	②",
"다음 중 제로의 스킬에 속하지 않는 것은? 어드밴스드 롤링 커브	크로스 라인	아머 스플릿	쉐도우 스트라이크	②",
"다음 중 제로의 스킬에 속하지 않는 것은? 플래시 어썰터	로 블로	휠 윈드	피어스 쓰러스트	②",
"다음 중 제로의 스킬에 속하지 않는 것은? 점핑 파워 봄	크리티컬 바인드	프론트 슬래시	파워 스텀프	①",
"다음 중 제로의 스킬에 속하지 않는 것은? 파이트 스플래쉬	윈드 스트라이크	라인포스 바디	대검 마스터리	①",
"다음 중 동물형 몬스터가 아닌 것은?	게릴라 스펙터	스포아	고대 슬라임	황금 돼지	②",
"다음 중 정령형 몬스터가 아닌 것은?	달팽이	페어리	오렌지톤	아기 바위베어먹기	①",
"다음 중 파충류형 몬스터가 아닌 것은?	개구리	리게이터	강력한 콜드아이	어드밴스드 차지	④",
"다음 중 파충류형 몬스터가 아닌 것은?   개구리	리게이터	강력한 콜드아이	주니어 레이스	④",
"다음 중 악마형 몬스터가 아닌 것은?	불량학생	방금 사귄 커플버섯	고백하러 가는 판다곰	잭오랜턴	①",
"다음 중 어류형 몬스터가 아닌 것은?	클랑	검은 마법사의 와이번	킹크랑	피아누스	②",
"다음 중 무형 몬스터가 아닌 것은?	양파라고라	아리엘	소라문어 슬라임	앙뚜아네뜨	④",
"다음 중 무형 몬스터가 아닌 것은?    무닌	안전제일	망둥이	코코넛 슬라임	③",
"다음 중 불사형 몬스터가 아닌 것은?	좀비머쉬맘	제등귀신	파우스트	핑크빈	④",
"다음 중 불사형 몬스터가 아닌 것은? 고스트	유령	자격의 도도	파우스트	③",
"다음 중 식물형 몬스터가 아닌 것은?	나팔 꽃 화분	파이렛 옥토	초록 버섯	데우	②",
"다음 중 모험가에 속하는 직업은?	소울마스터	에반	제논	듀얼블레이드	④",
"다음 중 모험가에 속하는 직업은?	와일드헌터	비숍	팬텀	데몬어벤져	②",
"다음 중 노바에 속하는 직업은?	엔젤릭 버스터	팔라딘	신궁	섀도어	①",
"다음 중 노바에 속하는 직업은?	카이저	소울마스터	미하일	메르세데스	①",
"다음 중 영웅에 속하는 직업은?	아크메이지(불독)	나이트로드	메르세데스	보우마스터	③",
"다음 중 영웅에 속하는 직업은?	배틀메이지	다크나이트	루미너스	아크메이지(얼음,번개)	③",
"다음 중 레지스탕스에 속하는 직업은?	카이저	엔젤릭버스터	비숍	데몬어벤져	④",
"다음 중 레지스탕스에 속하는 직업은?히어로	나이트로드	나이트워커	제논	④",
"다음 중 시그너스에 속하는 직업은?	배틀메이지	플레임 위저드	팬텀	루미너스	②",
"다음 중 시그너스에 속하는 직업은?	엔젤릭 버스터	나이트워커	아란	데몬슬레이어	②",
"다음 중 더 시드에 등장하지 않는 몬스터는?	무루파	갈색 가시 곰	샐리온	붉은 모래 난쟁이	①",
"다음 중 더 시드에 등장하지 않는 몬스터는?	그린 플라워 카우	그류핀	벨라모아	룰랑	④",
"다음 중 더 시드에 등장하지 않는 몬스터는?	고대 붉은 거북	크로크	엘리쟈	파랑 식충 슬라임	①",
"다음 중 더 시드에 등장하지 않는 몬스터는?	와일드카고	리게이터	고대 식충 슬라임	프릴드	③",
"다음 중 더 시드에 등장하지 않는 몬스터는?	블루 플라워 카우	노랑 버섯 박쥐	블루 고대 풍뎅이	고대 주황 거북	③",
"다음 중 더 시드에 등장하지 않는 몬스터는?	고대 파랑 거북	옐로 플라워 카우	헥터	노랑 식충 슬라임	②",
"다음 중 더 시드에 등장하지 않는 몬스터는?	고대 주황 거북	검은 가시 곰	화이트팽	벨라모아	②",
"다음 중 더 시드에 등장하지 않는 몬스터는?	플라워 골렘	클랑	푸른 버섯 박쥐	흰 가시 곰	③",
"다음 중 더 시드에 등장하지 않는 몬스터는?	흰 가시 곰	라이오너	프릴드	크로커다일	④",
"다음 중 더 시드에 등장하지 않는 몬스터는?	검은 플라워 골렘	로랑	고대 버섯 박쥐	고대 파랑 거북 ③",
"다음 중 메이플 스토리에 등장한 적 없는 보스 몬스터는?	락 스피릿	디아블로우	벨룸	신수	②",
"다음 중 메이플 스토리에 등장한 적 없는 보스 몬스터는?	듀나스	드래곤 라이더	이뮤르크	피에르	③",
"다음 중 메이플 스토리에 등장한 적 없는 보스 몬스터는?	아우프헤벤	렉스	이리나	베어구릴수	④",
"다음 중 메이플 스토리에 등장한 적 없는 보스 몬스터는?	니벨룽겐 전함	벨제붑	이카르트	드래고니카	②",
"다음 중 메이플 스토리에 등장한 적 없는 보스 몬스터는?	보티첼리	반반	아니	매그너스	①",
"다음 중 메이플 스토리에 등장한 적 없는 보스 몬스터는?	반반	해군함장	아카이럼	호크아이    ④",
"다음 중 메이플 스토리에 등장한 적 없는 보스 몬스터는?	반반	샤모스	아카이럼	호크아이	②",
"다음 중 메이플 스토리에 등장한 적 없는 보스 몬스터는?	에피네아	해군함장	아카이럼	호크아이    ④",
"다음 중 메이플 스토리에 등장한 적 없는 보스 몬스터는?	칼리쉬	마왕 발록	샤크아이	오즈	①",
"다음 중 메이플 스토리에 등장한 적 없는 보스 몬스터는?	칼리쉬	마왕 발록	반반	오즈	①",
"다음 중 메이플 스토리에 등장한 적 없는 보스 몬스터는?	크세르크세스	라바나	반 베놈	여제 시그너스	③",
"다음 중 메이플 스토리에 등장한 적 없는 보스 몬스터는?	베르가모트	코커트리스	반레온	힐라	②",
"다음 중 메이플 스토리에 등장한 적 없는 보스 몬스터는?	빅브라더	드래고니카	강화형 포이즌 골렘	블러드퀸	①",
"다음 중 메이플 스토리에 존재하는 제작 재료가 아닌 것은?	쥬니퍼베리 꽃	다이아몬드의 원석	쓰다만 거푸집	체력 회복 포션	③",
"다음 중 메이플 스토리에 존재하는 제작 재료가 아닌 것은?	카모마일 꽃	리튬의 원석	힘의 물약	니켈	④",
"다음 중 메이플 스토리에 존재하는 제작 재료가 아닌 것은?	클라리세이지	매그너스의 땀방울	하급 연마제	오리할콘	②",
"다음 중 메이플 스토리에 존재하는 제작 재료가 아닌 것은?	사랑이 담긴 초콜릿	빛바랜 은의 원석	은	마조람 꽃 오일	①",
"다음 중 메이플 스토리에 존재하는 제작 재료가 아닌 것은?	허브 오일병	할미꽃 씨앗	동물의 가죽	무루무루의 털뭉치	②",
"다음 중 메이플 스토리에 존재하는 제작 재료가 아닌 것은?	티트리 씨앗	미스릴의 원석	사파이어	페니실린	④",
"다음 중 메이플 스토리에 존재하는 제작 재료가 아닌 것은?	히솝 꽃	중급 거푸집	페어리 샌드	마법의 가루	③",
"다음 중 메이플 스토리에 존재하는 제작 재료가 아닌 것은?	자스민 씨앗	크립토나이트 원석	강철	죽은자의 부적	②",
"다음 중 메이플 스토리에 존재하는 제작 재료가 아닌 것은?	자쿰의 눈물	자수정의 원석	오팔	마력의 물약	①",
"다음 중 메이플 스토리에 존재하는 제작 재료가 아닌 것은?	페츌리 꽃	지혜의 크리스탈 원석	포션 응고제	히야신스 주스	④",
"다음 중 메이플 스토리에 존재하지 않는 아이템은?	슈가의 요리모자	블루얼 페긴트	혼테일의 목걸이	스컹크의 방독면	①",
"다음 중 메이플 스토리에 존재하지 않는 아이템은?	하프 이어링	헬리시움 도적 벨트	혼돈의 포션	필사의 머리삔	④",
"다음 중 메이플 스토리에 존재하지 않는 아이템은?	자일즈의 망토	엔젤릭 블레스	슈가의 조그만 지팡이	퍼플 카스트 린넨	③",
"다음 중 메이플 스토리에 존재하지 않는 아이템은?	그린 골드 벨트	샤크투스 플람	빨간색 세라프의 망토	솔로의 저주가 담긴 커플링	④",
"다음 중 메이플 스토리에 존재하지 않는 아이템은?	제이드 해츨링	미노타우르스 코뚜레	불멸의 파라오의 벨트	장미꽃 귀고리	②",
"다음 중 메이플 스토리에 존재하지 않는 아이템은?	디펜스의 달인	연금술사의 수제장갑	블랙 바실즈 부츠	자쿰의 투구	②",
"다음 중 메이플 스토리에 존재하지 않는 아이템은?	레드 바이퍼	봄버드 센터 파이어	화이트 피니얼	베놈 바이퍼	④",
"다음 중 메이플 스토리에 존재하지 않는 아이템은?	불사조의 꼬리깃털	디멘션 글러브	금이 간 안경	러브리스 피오니	①",
"다음 중 메이플 스토리에 존재하지 않는 아이템은?	카오스 핑크빈 모자	얼티밋 하프 헬름	콘체르토	더키의 스노클	②",
"다음 중 메이플 스토리에 존재하지 않는 아이템은?	템페스트 견장	얼티밋 링	은총받은 선글라스	브라운 더블드 부츠	③",
"다음 중 메이플 스토리에 존재하지 않는 의자는?	핑크 물개쿠션	말년 병장 의자	데비존 의자	전치 ①0주 의자	②",
"다음 중 메이플 스토리에 존재하지 않는 의자는?	뱀부 체어	홍상묘 월묘 방석	소울테니 의자	다이아몬드 욕조	④",
"다음 중 메이플 스토리에 존재하지 않는 의자는?	내게 돌아와 의자	찰떡 아이스	꿈 해몽 의자	길드 의자	①",
"다음 중 메이플 스토리에 존재하지 않는 의자는?	여우비 의자	감나무 그네	곰돌이 침대	래피의 감나무 의자	④",
"다음 중 메이플 스토리에 존재하지 않는 의자는?	단풍나무 아래서	트로피컬 썸머 체어	드래곤의 알	첫사랑의 순정 의자	④",
"다음 중 메이플 스토리에 존재하지 않는 의자는?	나무 욕조	레드 디자인체어	휠체어	와글친구 의자	③",
"다음 중 메이플 스토리에 존재하지 않는 의자는?	릴렉스 체어	맘모스 의자	힐라의 겟잇뷰티	야영 모닥불 의자	②",
"다음 중 메이플 스토리에 존재하지 않는 의자는?	사랑의 의자	핑크 비치파라솔	발렌타인의 저주 의자	꿈꾸는 화가 의자	③",
"다음 중 메이플 스토리에 존재하지 않는 의자는?	③월 토끼 의자	달님별님 쿠션	시추시계 의자	러브 체어	①",
"다음 중 메이플 스토리에 존재하지 않는 의자는?	노블레스 의자	튼튼한 나무의자	토끼 의자	돈방석	④",
"다음 중 메이플스토리에 거주하는 주민의 이름이 아닌 것은?	벨더	피아	디제이쿠	돌고래	③",
"다음 중 메이플스토리에 거주하는 주민의 이름이 아닌 것은?	탈리온	제크	듀이	스티치	④",
"다음 중 메이플스토리에 거주하는 주민의 이름이 아닌 것은?	아구몽	헤르샤	이카루스	프레드릭	①",
"다음 중 메이플스토리에 거주하는 주민의 이름이 아닌 것은?	찰즈	레아	베티	마티어스	①",
"다음 중 메이플스토리에 거주하는 주민의 이름이 아닌 것은?	셀렌	재클린	박서방	몽땅따	②",
"다음 중 메이플스토리에 거주하는 주민의 이름이 아닌 것은?	벼루	카르노	마틸다	골드리치	②",
"다음 중 메이플스토리에 거주하는 주민의 이름이 아닌 것은?	도공	카르노	마틸다	골드리치	②",
"다음 중 메이플스토리에 거주하는 주민의 이름이 아닌 것은?	헤이즈	카산드라	쉐인	레아	①",
"다음 중 메이플스토리에 거주하는 주민의 이름이 아닌 것은?	장로 스탄	클라라	카이조	레아	③",
"다음 중 메이플스토리에 거주하는 주민의 이름이 아닌 것은?	큐트	네벨	자이언트조	스크루지	③",
"다음 중 메이플스토리에 거주하는 주민의 이름이 아닌 것은?	아이린	네벨	자이언트조	스크루지	③",
"다음 중 메이플스토리에 거주하는 주민의 이름이 아닌 것은?	펜릴	세빌	클리앙	넬라	②",
"다음 중 메이플스토리에 존재하지 않는 도시는?	에레브	슬리피우드	크레아티스	커닝시티	③",
"다음 중 메이플스토리에 존재하지 않는 도시는?	커닝시티	백조마을	페리온	리프레	②",
"다음 중 메이플스토리에 존재하지 않는 도시는?	사라세니아	마가티아	노틸러스	아리안트	①",
"다음 중 메이플스토리에 존재하지 않는 도시는?	페리온	무릉	프랑켄슈타인	에우렐	③",
"다음 중 메이플스토리에 존재하지 않는 도시는?	헤네시스 집	판교	커닝시티	백초마을	②",
"다음 중 메이플스토리에 존재하지 않는 도시는?	리스항구	오르비스	백초마을	아쿠아아쿠아	④",
"다음 중 메이플스토리에 존재하지 않는 도시는?	여섯갈래길	엘나스	에델슈타인	아리안트	①",
"다음 중 메이플스토리에 존재하지 않는 도시는?	여섯갈래길	엘나스	에델슈타인	마가레트	④",
"다음 중 메이플스토리에 존재하지 않는 도시는?	슬리핑포레스트	리엔 온천	에델슈타인	아리안트	①",
"다음 중 메이플스토리에 존재하지 않는 도시는?	엘리니브	에델슈타인	크리티아스	리스항구	①",
"다음 중 메이플스토리에 존재하지 않는 도시는?	오르비스	아쿠아리움	컨닝시티	엘리니아    ③",
"다음 중 메이플스토리에 존재하지 않는 몬스터는?	서전아이	다우니	로얄 카투스	버블피쉬	②",
"다음 중 메이플스토리에 존재하지 않는 몬스터는?	스톤골렘	추억의 신관	레드 페퍼즈	뉴트 주니어	③",
"다음 중 메이플스토리에 존재하지 않는 몬스터는?	파란버섯	플라워 피쉬	큐브 슬라임	슬레지 햄머	④",
"다음 중 메이플스토리에 존재하지 않는 몬스터는?	와일드보어	베르가모트	주니어 씰	탑승형 골렘	④",
"다음 중 메이플스토리에 존재하지 않는 몬스터는?	스톤마스크	레드 와이번	베르투스	샐리온	③",
"다음 중 메이플스토리에 존재하지 않는 몬스터는?	주니어 레이스	쏠라리온	레드 드레이크	호걸	②",
"다음 중 메이플스토리에 존재하지 않는 몬스터는?	펜릴	핑크테니	페페	블록퍼스	①",
"다음 중 메이플스토리에 존재하지 않는 몬스터는?	스켈독	다크 코니언	벨라모아	샤프란	④",
"다음 중 메이플스토리에 존재하지 않는 몬스터는?	달팽이	다크 케투스	로보토이	고급 앰프	②",
"다음 중 메이플스토리에 존재하지 않는 몬스터는?	옥토퍼스	팬텀워치	코르비	씨클	③",
"다음 중 메이플스토리에 존재하지 않는 직업은?	데몬 슬레이어	신궁	트레져헌터	나이트로드	③",
"다음 중 메이플스토리에 존재하지 않는 직업은?	아크(썬콜)	메르세데스	아트디자이너	듀얼블레이드	③",
"다음 중 메이플스토리에 존재하지 않는 직업은?	팔라딘	에반	나이트워커	윈드러너	④",
"다음 중 메이플스토리에 존재하지 않는 직업은?	데몬헌터	보우마스터	듀얼블레이드	스트라이커	①",
"다음 중 메이플스토리에 존재하지 않는 직업은?	히어로	플레임위자드	댄스마스터	소울마스터	③",
"다음 중 메이플스토리에 존재하지 않는 직업은?	미하일	윈드브레이커	바이퍼	미사일	④",
"다음 중 메이플스토리에 존재하지 않는 직업은?	다크나이트	배틀메이지	캐논펀쳐	아란	③",
"다음 중 메이플스토리에 존재하지 않는 직업은?	비숍	나이트로드	섀도어	던전마스터	④",
"다음 중 메이플스토리에 존재하지 않는 직업은?	아크(불독)	와일드헌터	캡틴	네크로맨서	④",
"다음 중 메이플스토리에 존재하지 않는 직업은?	섀도우 마스터	메카닉	팬텀	데몬어벤져	①",
"다음 중 몬스터 라이프에 등장하는 건물이 아닌 것은?	탱글탱글 포도농장	리엔 온천	천연 황토 집	에레브 분수정원	③",
"다음 중 몬스터 라이프에 등장하는 건물이 아닌 것은?	초가집	핑크 엔젤 하우스	메이플 워터 파크	리엔 이글루	③",
"다음 중 몬스터 라이프에 등장하는 건물이 아닌 것은?	주주 우유농장	플로팅 캐슬	초밥 전문점	오르비스 비행정원	③",
"다음 중 몬스터 라이프에 등장하는 건물이 아닌 것은?	헤네시스 집	양식장	깜짝상자집	클락 하우스	②",
"다음 중 몬스터 라이프에 등장하는 건물이 아닌 것은?	나무꾼의 집	아리안트 집	에델슈타인 비행장	메이플 수상 가옥 ④",	
"다음 중 몬스터 라이프에 등장하는 건물이 아닌 것은?	동굴 집	해산물 식당	에우렐 집	피아노	①",
"다음 중 몬스터 라이프에 등장하는 건물이 아닌 것은?	초록 버섯집	검은 토끼 농장	무기상점	산타의 집	②",
"다음 중 몬스터 라이프에 등장하는 건물이 아닌 것은?	판테온 신전	오아시스	핑크 엔젤 하우스	노틸러스호 선착장	①",
"다음 중 몬스터 라이프에 등장하는 건물이 아닌 것은?	아지트	쿠키 하우스	붉은 버섯집	우동집	①",
"다음 중 몬스터 라이프에 등장하는 건물이 아닌 것은?	비숍	나이트로드	섀도어	던전마스터	④",
"다음 중 몬스터 라이프에 등장하는 건물이 아닌 것은?	검은 집	과일상점	판테온 집	②층 새둥지 집	①",
"다음 중 몬스터 라이프에 등장하는 건물이 아닌 것은?	놀이공원 바이킹	깜짝상자집 풍선	깜짝상자집	샤모스 창고	④",
"다음 중 몬스터 라이프에 등장하는 건물이 아닌 것은?	생츄어리	노랑 잠수함	비화원	아모리아 콘서트홀	①",
"다음 중 몬스터 라이프에 등장하는 건물이 아닌 것은?	빨간 벽돌집	버섯왕국 초소	서커스장	과수원	④",
"다음 중 몬스터 라이프에 등장하는 건물이 아닌 것은?	천연 빙하집	클럽 헤네시스	에우렐 집	루디브리엄 장난감집	②",
"다음 중 몬스터 라이프에 등장하는 건물이 아닌 것은?	①0주년 이벤트홀	무릉 이발소	아쿠아쿠리움 수족관	아쿠아로드 저택	③",
"다음 중 몬스터 라이프에 등장하는 건물이 아닌 것은?	주황 버섯집	블로섬 하우스	퓨리엘 집	무릉 수련장	③",
"다음 중 몬스터 라이프에 등장하는 건물이 아닌 것은?	헤네시스 궁수길드	유령의 집	우동집	여제의 기도원	④",
"다음 중 몬스터 라이프에 등장하는 건물이 아닌 것은?	버섯버섯 광산	파랑 ③단 버섯집	풍차	크리스탈 가든	①",
"다음 중 몬스터 라이프에 등장하는 건물이 아닌 것은?	아쿠아로드 소라집	사이킥 오디션 홀	아리안트 집	신수의 둥지	②",
"다음 중 몬스터 라이프에 등장하는 건물이 아닌 것은?	한옥집	②④시간 병원	지하 수련장	자쿰의 동굴	③",
"다음 중 소비 아이템이 아닌 것은?	마법사의 가루약	빨간 포션	재물 획득의 비약	새벽의 이슬	①",
"다음 중 소비 아이템이 아닌 것은?	써니텐 엘릭서	크로스헌터 마력 포션	갑오년 각성의 비약	무지개 별 물약	③",
"다음 중 소비 아이템이 아닌 것은?	벅카스D	주황포션	경험 축적의 비약	달걀	①",
"다음 중 소비 아이템이 아닌 것은?	파란포션	미지근한 주스	각성의 비약	전설의 체력 비약	②",
"다음 중 소비 아이템이 아닌 것은?	하얀포션	요정의 이슬	무적의 비약	집중의 비약	②",
"다음 중 소비 아이템이 아닌 것은?	스페셜 D 포션	마나 엘릭서 알약	훈제 연어	파란별 물약	③",
"다음 중 소비 아이템이 아닌 것은?	엔젤의 발걸음	밸류 포션	스페셜 체력 회복 물약	파티용 치즈	④",
"다음 중 소비 아이템이 아닌 것은?	살살 녹는 치즈	행운의 알약	발굴한 축복의 비약	보라빛 물약	④",
"다음 중 소비 아이템이 아닌 것은?	속도 향상의 알약	엘릭서	자쿰의 숨결	인내의 비약	③",
"다음 중 소비 아이템이 아닌 것은?	통증 완화제	빨간 포션 알약	갑오년 인내의 비약	자이언트 비약	③",
"다음 중 한 손 무기가 아닌 것은?	카오스 호크 헤드	레볼루션 소드	특제 삼지창	발렌티어	③",
"다음 중 한 손 무기가 아닌 것은?	메이플 우산	스파타	문 글로리	이터널 원터러	③",
"다음 중 한 손 무기가 아닌 것은?	케이그	나무 망치	광선 채찍	플레인 알파	②",
"다음 중 한 손 무기가 아닌 것은?	양날 도끼	행복 화이트 소드	선구자의 듀얼윙	딤 메모리	③",
"다음 중 한 손 무기가 아닌 것은?	선구자의 모울	용기의 날개	레전드 프라우테	바이킹 소드	①",
"다음 중 한 손 무기가 아닌 것은?	아츠	레드 카타나	일룬	그륜힐	④",
"다음 중 한 손 무기가 아닌 것은?	호프만	미하일	카오스 프라우테	플레인	①",
"다음 중 한 손 무기가 아닌 것은?	러브리스 엑서큐서너스	레전드 메이플 브링어	검	호검	④",
"다음 중 한 손 무기가 아닌 것은?	특제 파이어잭	용맹의 날개	마녀의 빗자루	골드샤인 베타	②",
"다음 중 한 손 무기가 아닌 것은?	메이플 ①500일 깃발	초승달 블레이드	에오로	어비스 그림시커	③",
"다음 중 핸드캐논이 아닌 것은?	헬 크래쉬	발록의 라이노	저주의 블랙 캐논	카오스 플라멘 베르퍼	③",
"다음 중 핸드캐논이 아닌 것은?	헬 크래쉬	카오스 플라멘 베르퍼	아트룰루	크뤼 소스	③",
"다음 중 핸드캐논이 아닌 것은?	파프니르 러스터 캐논	요정의 프로스티 라이노	템페스트 크래쉬	블러리 캐논	④",
"다음 중 핸드캐논이 아닌 것은?	벅카스D	드레드넛	아트럴리	코라 반 레온 시즈건	①",
"다음 중 핸드캐논이 아닌 것은?	레인지 로버	발록의 라이노	헐거운 장난감 캐논	샤크투스 플람	③",
"다음 중 핸드캐논이 아닌 것은?	행복 화이트 캐논	블링블링 아이언 캐논	마이스터 크래쉬	스칼렛 크래쉬	②",
"다음 중 핸드캐논이 아닌 것은?	노비스 캐논	네크로 베릴 캐논	아이언 봄버	슈타일 봄버	②",
"다음 중 핸드캐논이 아닌 것은?	붐붐 크래쉬	네크로 이그니스	레드 캐논	피어리스 셀베이션	①",
"다음 중 핸드캐논이 아닌 것은?	임페리얼 이그니스	얼티밋 크래쉬	브로드 헬크래쉬	특제 이그나이트 크래시	④",
"다음 중 핸드캐논이 아닌 것은?	드래곤 헤르츠	메이플 베릴 캐논	드래고닉 라이노	크뤼 소스	③",
"루디브리엄의 창고지기 이름은?	로도스	푸로	스우	세피	④",
"루디브리엄의 친구목록 관리자 이름은?	골드리치	프델라	할리	크루소	③",
"리스항구의 친구목록 관리자 이름은?	무라트	자아	마녀 바바라	몽롱 할배	④",
"리에나 해협 빙하관측 본부의 조타수 이름은?	탕윤	푸가	요정 파이니	조타수 따냐	④",
"리엔의 창고지기 이름은?	푸슬라	벼루	슈미	리나	①",
"마가티아에 거주하는 브로커 이름은?	브로커 정	브로커 한	브로커 홍	토리	②",
"마가티아에 거주하는 휴머노이드의 이름은?	페일	휴머노이드 A	휴머노이드 B	휴머노이드 C	②",
"백초마을의 워프도우미 이름은?	학	백로	두루미	닭	①",
"슬리피우드 호텔 입구에 선 아이템 제작자는?	크리슈라마	탈리온	몽땅따	돌고래	①",
"아리안트의 무기 상인 이름은?	자이드	아이린	레아	오심마	①",
"아리안트의 성형외과 의사 이름은?	슈미	알딘	스크루지	헬레나	②",
"아리안트의 피부관리사 이름은?	라일라	네벨	골드리치	큐트	①",
"에델슈타인의 곰돌이 알바 이름은?	천지	키루	체키	비어완	③",
"에델슈타인의 전 의회장 이름은?	그윈	카이린	알베르트	라니아	③",
"에델슈타인의 현 의회장 이름은?	슈미	아벨	안소니	에스텔	③",
"에델슈타인의 환경 미화원 이름은?	라엘	키리두	헨리테	이토스	③",
"엘리니아의 펫 마스터 이름은?	요정 마르	장로 스탄	요정 플로라	일스	①",
"오르비스 차원의 거울 오른쪽에 앉아있는 개 이름은?	뮤네	봉달이	불독	도베르만	②",
"전사의 성전에 거주하는 전직관은?	마파	주먹펴고 일어서	하인즈	소피아	②",
"커닝시티에 거주하는 아이템 제작자 이름은?	제피	뒷골목의 제이엠	스미스	지미	②",
"커닝시티의 지하철 공익요원 이름은?	알렉스	웅이	이얀	루이스	②",
"판테온에 거주하는 상인 꿈나무 이름은?	캘리코	푸츠키	요정 우니	카린	④",
"판테온의 대신전 앞을 지키고 있는 할머니 이름은?	셀렌	올리비아	넬라	체프		①",
"페리온의 무기 상인 이름은?	마이크	리버	카밀라	유타		②",
"황금 사원 입구에 서 있는 꼬마 승려의 이름은?	토푸	듀나미스	노이	디테	③",
"황금사원의 잡화 상인 이름은?	케리	키무	탕따완	다니카	③"
];

const floor = [
    '<article id="article_0"><h1>** 모든 공략글은 베라서버 작은포푸라 님이 작성하신 인벤글을 기반으로 작성하였습니다.</h1></article><article id="article_1"><h1>더 시드란?</h1><p> 몹잡기, 보스, 템줍기, 운빨, 점프컨텐츠, 퀴즈 등 여러 컨텐츠가 있는.. 메이플버전 종합경기장같은 곳이다.</p></article><br><article id="article_2"><h1>시드를 하는 이유?</h1><p>대표적으로 세가지 이유가 있다.</p><br><ul><li>1. 4레벨 시드링을 얻기위한 2급작 (41층)</li><li>2. 더 시드 업적과 훈장 (도로시 챌린저)</li><li>3. 시드 몬스터 컬렉션 등록</li><li class="deco">4. 재획에 지쳐서</li></ul><br><p>시드링은 버프스킬을 사용하게 해주는 링이다. 이 글에선 어떤 링이 무슨 효과를 가졌는지에 대한 설명은 생략한다. <br>시드링 중 비싼 링은 수십 억 메소의 가치를 지닌다. 현재 4레벨 리스트레인트링은 60~70억에 거래된다. <br> <br>반지 상자의 획득 층수는 아래와 같다. 참고로 5급상자 이상이면 4레벨링이 뜨긴 한다. 확률이 낮다.<br><img src="img/반지상자.png" alt="반지 상자 층수" class="textimg"></p></article><br><article id="article_3"><h1>시드 준비물</h1><img src="img/준비물.png" alt="시드 준비물" class="textimg"><ul><br><li><strong>1. 최소 레벨 210이상으로 갈 것을 추천.</strong><p>20층보스의 체력이 10억, 30층보스의 체력이 63억이다. 47층 이후는 더높은 데미지가 필요하다. <br><strong>가능하다면 사냥능력과 기동성이 좋은 직업으로 하는 것을 추천.</strong> (엔버, 섀도어 등) <br>다수의 몹을 잡아야 하는 층이 꽤 많기 때문.</p></li><br><li><strong>2. 드랍율이 높으면 좋다.</strong><p>드랍율이 높으면 시간단축이 된다. 높으면 높을수록 좋다. 드랍템과 쓸심을 챙겨가자. 자석펫도 있으면 좋다.</p></li><br><li><strong>3. 타워인헨스링을 반드시 살 것.</strong><p>처음에는 1,2렙링 쓰다가 나중에 시드에 재미붙으면 4렙링을 사는것을 추천한다. <br>인헨스링의 효과는 각 층 클리어시 얻는 시드포인트의 획득량 25%,50%,75%,100% 증가.</p></li><br><li><strong>4. 시드 처음이면 최상급 헤이지스톤을 사용하자.</strong><p>경매장에서 사던가, 지인한테 부탁해서 얻으면 된다. <br>가격이 꽤 비싸니 일단 10개정도만 사서 쓰고, 모자랄 때 더 구입하자.</p></li></ul></article><br><article id="article_4"><h1>헤이지스톤과 슬롯이란?</h1><img src="img/헤이지스톤착용.png" alt="헤이지스톤 장착샷" class="textimg"><p><br> 시드에는 제한 시간이 존재한다.(기본시간 10분) <br><strong>제한시간을 더 늘리기위해선 헤이지스톤을 장착해야 한다. <br>헤이지스톤은 1회성 소비아이템으로, 매 판마다 채워줘야한다. <br>슬롯 수만큼 헤이지스톤을 장착할 수 있다. <br> <br></strong><img src="img/헤이지스톤비교.png" alt="헤이지스톤 비교" class="textimg"> <br> <br>사용하는 헤이지스톤은 보통 [각인된 최상급 헤이지스톤], [최상급 헤이지스톤] 두개다. <br>두가지의 차이점은 거래 가능여부.</p></article><br><article id="article_5"><h1>시드 입문자의 목표설정!</h1><ul><li><strong>1.최우선 목표는 시드 포인트를 모아 헤이지스톤 슬롯을 열기! </strong><p>헤이지스톤 슬롯이 부족하면 시간제한 때문에 최대 층수가 낮을 수 밖에 없다. <br>시드의 주 목표인 2급작(41층)을 하려면 최소 3슬롯은 열려있어야 한다. <br>따라서 슬롯 열기를 목표로 해야한다.</p></li><br><li><strong>2.시드포인트를 모으는 법</strong><p>1) 각 층을 클리어 할 때마다 일정 포인트 지급 (인헨스링 보정을 받는다.) <br>2) 보스와 상자에서 나온 포인트 보따리에서 포인트획득이 가능하다.</p></li><br><li><strong>3.목표 설정</strong><p>1) 1슬롯 상태 : 기본 10분 + 최상급 헤이지스톤 1개 10분 = 20분으로 플레이. <br>17~18층까지 반복하여 포인트를 모아서 2슬롯을 뚫자. <br>2) 2슬롯 상태 : 기본 10분 + 최상급 헤이지스톤 2개 20분 = 30분으로 플레이. <br>10층 후반대~ 20층 초반대 연습하기. <br>3) 2슬롯 상태 : 22층 클리어 가능 여부에 따라 상황에 맞게! <br> <br><img src="img/헤이지스톤조건.png" alt="헤이지스톤 장착 기준" class="textimg"> <br> <br>4) 3슬롯 상태 : 기본 10분 + 각인된 최상급 헤이지스톤 3개 = 58분으로 플레이. <br>30층대 연습하기 -> 이후 41층(2급) 도달 ! <br>5) 이후 4,5슬롯 개방하여 ~50층까지 클리어!</p><br><br><p>* 시드 22층? <br>시드입문자의 첫번째 고비. 22층이 어려운 이유는 세가지가 있다. <br>1.맵자체가 어려움. 동영상과 공략글 처음 보면 멘붕 온다.. 실제로도 해보면 굉장히 어려운 맵. <br>2.도전 기회가 적음. 2슬롯 상태 최상급 헤이지스톤2개(총 30분)만으로는 22층 도달이 어렵기 때문에 충분히 연습하기가 어려움. <br>3.시드 포인트가 애매함. 3슬롯(28000포인트)을 열기엔 포인트가 부족한 상태. <br>만약 22층을 클리어 할 수 있다면 각인된 최상급헤이지스톤 2개를 끼고 30층대까지 가는 것이 훨씬 더 많은 시드포인트가 획득 가능하다. <br>22층 연습에 필요한 포인트는 978포인트(연습권10+입장비968) + 헤이지스톤 값이므로, 충분한 공략 숙지후 연습할 것을 권함. <br>필자는 10~20층 반복으로 3슬롯을 뚫는 반복파밍 보다는 <br>22층 공략을 숙지, 연습한 후 각인된 최상급 2개를 끼고 30층대 까지 연습하는 루트를 추천한다.</p></li><br></ul></article><br><article id="article_6"><h1>파티플레이와 프리징</h1><img src="img/솔플_파티플.jpg" alt="솔플, 파티플 비교" class="textimg"><p> <br>(시드 솔플과 파티플의 장점) <br><strong>시드파티는 보통 2인파티</strong>로 진행한다. <br>시드는 다수의 몹을 잡는 층이 많기 때문에, 파티플레이 하면 시간단축이 가능하다. <br>시드엔 파티플레이가 가능한 층, 불가능한 층이 있다. <br>몬스터 사냥 층은 대부분 가능하다.(슬라임 300마리, 화산벌레 100마리, 플라워 골렘 300마리 층 등) <br>보스층 외 몇몇 층은 불가능하다. (리플리, 10층, 20층 등) <br><strong>프리징</strong>이란 시간을 얼리는 것을 의미한다. 쉼터 외에서도 쉴 수 있는 팁이다. <br><strong>특정 층을 클리어한 후, 파티를 만들어서 포탈진입을 하면 시간이 정지된다. <br></strong>파티가 있는 상태로 솔플만 가능한 층에 진입할 경우 "다음 층은 파티로 진입할 수 없습니다"라는 문구가 뜨는데, 이때 클리어한 것으로 인정되어 시간이 멈추는 것. <br>급 화장실, 도핑시간등으로 잘 활용하도록 하자. <br> <br><strong>프리징이 가능한 층 :</strong> <br><p style="color: red; display: inline;">6층 8층</p> 9층 <br>12층 17층 <p style="color: red; display: inline;">18층 19층</p> <br>27층 <p style="color: red; display: inline;">28층 29층</p> <br><p style="color: red; display: inline;">31층 37층</p> 39층 <br><p style="color: red; display: inline;">46층 47층 48층 49층</p> <br>*빨간색 글씨 층은 프리징은 가능하지만 핀리(시간제한 몬스터)가 소환되거나 자체 제한시간이 있는 층을 의미한다. 즉, 오래 프리징하지 말 것.</p></article><br>',
    '<article id="article_1"><h1>1층 - 고대 슬라임 100마리 퇴치 혹은 충격량 5000만 누적하기</h1><p><strong>사냥 층. </strong><br>210렙 이상이면 한번만 공격하면 바로 클리어된다. <br> <br></p><img src="gif/1f.gif" alt="1f"></article>',
    '<article id="article_1"><h1>2층 - 결계의 숫자보다 높은 숫자의 카드를 획득해 결계를 속이기</h1><p><strong>사냥(템 모으기) 층.</strong> <br>결계는 빨강/ 파랑/ 초록/ 노랑 4가지 종류가 있다. 몹을 잡아 카드를 얻어 한번 씩 높은카드로 교체해주자. <br>바이올렛(보라색)카드는 가장높은 등급의 카드다. <br>참고로 펫이 카드를 마구마구 주워먹으니 펫줍을 끄고 플레이 해야한다. <br>2층 올때마다 펫줍끄고 켜기는 귀찮으니까, <strong>펫 줍기 제외 목록에 "씰 브레이크 카드" 를 등록하는 것을 추천.</strong> <br><br></p><img src="gif/2f.gif" alt="2f"></article>',
    '<article id="article_1"><h1>3층 - 고대 거북이를 퇴치하여 고대 거북이의 알 1000개 모으기.</h1><p><strong>사냥(템 모으기) 층.</strong><br>거북이알은 드랍율이 높을수록 많이 나온다. <br>(드랍률 120%기준 6마리만잡아도 110개가량을 획득할수있다.) <br>중앙에 있는 엔피씨는 알걸고 도박하는건데, 그냥 무시하자. <br> <br></p><img src="gif/3f.gif" alt="3f"></article>',
    '<article id="article_1"><h1>4층 - 좌우의 몬스터를 퇴치하며 균형 점수 300점 누적하기.</h1><p><strong>점프 층.</strong> <br>균형점수가 오르는 곳에서 와일드카고를 잡아주면 된다. <br>균형점수는 마리당 5점이 오른다. 깎이는건 마리당 -2점. <br>중앙 발판은 <strong>도끼달린 발판에서 쉬면서 가자.</strong> <br> <br><img src="gif/4f.gif" alt="4f"> <br> <br><p style="font-size: 0.9em;"><strong>안읽어도 되는 TMI</strong> : 맵에 존재하는 와일드카고 50마리를 잡을 때 마다 균형이 기우는 트리거가 작동한다. <br>맵이 다른사람과 공유되기 때문에 입장하면 (이미 잡힌 수)/50마리 상태라고 생각하면 된다. <br>1)운이 좋은경우 : 49/50마리 상태에서 1마리를 잡으면 균형이 기울기 때문에 균형점수가 오르는 곳에 가서 잡으면 된다. 이 경우 중앙다리를 1번만 왕복하면 클리어 된다. <br>2)운이 나쁜경우 : 48/50마리 상태에서 1마리를 잡았더니 균형점수가 깎이길래 반대방향에 갔는데, <br>1마리를 잡는순간 50/50트리거가 발동되어 균형이 다시 반대로 될 수 있다. 이 경우 중앙다리를 2번 왕복해야한다. <br>균형점수가 깎이는건 -2점이고, 오르는건 5점이기 때문에 한곳에서 계속 사냥하면 언젠가 300점이 차지 않을까? 라고 생각을 해 볼 수도 있다. 하지만 한쪽에서 계속 잡으면 반대 방향에 <br>몹이 전부 젠돼서 잡던 곳에 젠이 더이상 안되기 때문에 불가능하다. 정공법을 쓰자.</p></p></article>',
    '<article id="article_1"><h1>5층 - 쉼터</h1><p>5층, 15층, 25층, 35층, 45층은 쉼터다. <br>쉼터에선 시간이 멈춘다. 재접속도 가능하다. <br><strong>채널이동이 필요할 때 쉼터에서 게임종료-서버선택창-채널선택-캐릭선택을 하면 된다.</strong> <br>5층이 처음이라면 ★12층 공략을 대비하자. 유튜브 동영상 보는것도 좋다! <br> <br><img src="gif/5f.png" alt="5f" style="width: 600px; height: 338px;"></p></article>',
    '<article id="article_1"><h1>6층 - 슬라임 300마리 퇴치하기.</h1><p><strong>사냥 층.</strong> <br>킹슬라임은 30마리로 취급한다. 킹슬라임은 10초 이후 사라지니 꼭 잡자. <br>파티플레이 추천. <br> <br><img src="gif/6f.gif" alt="6f"></p></article>',
    '<article id="article_1"><h1>7층 - 루팡으로부터 부상 당한 모험가 리플리를 지키기</h1><p><strong>사냥 층. </strong><br>루팡나오는것을 처리하면 완료. <br>나오는 방향 : 오오오오 왼왼왼 오오오 왼왼왼 오오오 양양. <br> <br><img src="gif/7f.gif" alt="7f"></p></article>',
    '<article id="article_1"><h1>8층 - 화산벌레 100마리 퇴치하기. </h1><p><strong>사냥 층.</strong> <br>설명 생략. 파티플레이 추천. <br> <br><img src="gif/8f.gif" alt="8f"></p></article>',
    '<article id="article_1"><h1>9층 - 맞는 포탈만을 찾아 다음 층의 입구까지 내려가기.</h1><p><strong>기타 층. </strong><br><strong>1~4 발판 중 하나가 정답이다. 총 8층 구성.</strong> <br>헷갈림 방지를 위해 <strong>정답을 채팅창에 쓰면서 내려가자.</strong> <br><strong>한번 맞춘 포탈은 노란색으로 빛난다. </strong><br> <br><img src="gif/9f.gif" alt="9f"></p></article>',
    '<article id="article_1"><h1>10층 - 보스: 거대 거미 퇴치하기</h1><p><strong>보스 층.</strong> <br>피통 4억. 공반주의. <br> <br><img src="gif/10f.gif" alt="10f"></p></article>',
    '<article id="article_1"><h1>11층 - 플라워 골렘 300마리 퇴치하기.</h1><p><strong>사냥 층. </strong><br>설명 생략. 파티플레이 추천. <br> <br><img src="gif/11f.gif" alt="11f"></p></article>',
    '<article id="article_1"><h1>★12층 - 장애물과 함정을 피해 다음 층의 입구까지 돌파하기.</h1><p><strong>점프 층.</strong> <br><strong>초록네모 친 곳은 함정이 존재</strong>한다. 함정에 걸리면 다시 가서 함정이 없는 길로 가자. <br><p style="color: red; display: inline;">1, 2, 3 네모구역&nbsp;</p>은 <strong>움짤</strong>로 설명한다. <br> <br><img src="gif/12_2f.jpg" alt="12f" style="width: 650px;"> <br> <br> <br><p style="color: red; display: inline;">1.</p>숙이면서 가면 된다. <br> <br><img src="gif/12_1f.gif" alt="12f"> <br> <br><p style="color: red; display: inline;">2.</p>최상단 두번째 발판 끝자락에서 점프키 꾹누르자. <br> <br><img src="gif/12_4f.gif" alt="12f"> <br> <br><p style="color: red; display: inline;">3.</p>마지막 구간은 <p style="color: orange; display: inline;">기준선</p>에 맞춰서 <p style="color: green; display: inline;">점프</p>하자.  <br><p style="color: orange; display: inline;">3연속 점프</p>는 <strong>한걸음 걷고 점프</strong>를 3번 반복하면 된다. <br><p style="color: red; display: inline;">★추천 야매루트</p>: 벽돌의 검은부분에서만 점프해줘도 통과 된다. <br> <br><img src="gif/12_6f.gif" alt="12f">  <br> <br><img src="gif/12_3f.png" alt="12f" style="width: 600px;"></p></article>',
    '<article id="article_1"><h1>13층 - 운석을 피하면서 몬스터로부터 마력석을 지키기.</h1><p><strong>사냥 층.</strong> <br>5번에 나눠서 몬스터가 나온다. 80마리 처리하자. <br>초록운석은 피통의 70%데미지, <strong>파랑운석은 즉사다. 무조건 피하자.</strong> <br>너무 앞에 있으면 몹을 놓칠 수 있으니 주의하자. <br> <br><img src="gif/13f.gif" alt="13f"></p></article>',
    '<article id="article_1"><h1>14층 - 샷건으로 버섯 박쥐 15마리 사격하기.</h1><p><strong>기타 층.</strong> <br>프리토 독수리 잡듯 잡아주자. <br>배경 공격은 3회까지는 괜찮지만, 4회부터 1회당 헤이지스톤 시간이 30초씩 줄어든다. 신중히 잡아주자. <br> <br><img src="gif/14f.gif" alt="14f"></p></article>',
    '<article id="article_1"><h1>15층 - 쉼터</h1><p>처음왔다면 여기서 미리 17층, 22층, 23층, 24층 대비를 해야한다. <br>1슬롯 상태라면 <strong>★17층 공략을 보고가자.</strong> <br>2슬롯 상태라면 <strong>★22,★23, ★24층 공략과 영상</strong>을 미리 봐두자. <br> <br><img src="gif/15f.png" alt="15f" style="width: 600px;"></p></article>',
    '<article id="article_1"><h1>16층 - 리게이터 혹은 크로코를 200마리 퇴치하기.</h1><p><strong>사냥 층.</strong> <br>설명 생략. 파티플레이 추천. <br> <br><img src="gif/16f.gif" alt="16f"></p></article>',
    '<article id="article_1"><h1>★17층 - 자신의 주위를 빼고 어두운 상태에서 다음 층의 입구까지 돌파하기.</h1><p><strong>점프 층.</strong> <br>떨어져야한다 싶은 구간은 전부 <strong>점프 없이</strong> 그냥 전진하며 떨어지면 된다. <br><strong>가시</strong>는 <strong>총 세</strong> 개 있다. 1번구역 1개, 3번구역 2개. <br><p style="color: red; display: inline;">1, 2, 3번</p> 구역은 <strong>움짤</strong>로 설명! <br> <br><img src="gif/17_0f.png" alt="17f" style="width: 700px;"> <br> <br><p style="display: inline; color: red;">1.</p>첫번째 가시는 맞은 반동을 이용해 밧줄을 잡아주면 된다. <br> <br><img src="gif/17_1f.gif" alt="17f"> <br> <br><p style="display: inline; color: red;">2.</p>밧줄은 위,오른쪽방향키,점프키 3개를 동시에 계속 누르고 있으면 끝. <br> <br><img src="gif/17_2f.gif" alt="17f"> <br> <br><p style="display: inline; color: red;">3.</p>두번째 가시는 점프하고 나면 가시에 맞겠다 싶은 거리에서 점프꾹. <br>세번째 가시는 팅겨져 나간 자리에서 멈추고 보고 피해도 되고, 숙달되면 바로 피해도 된다. <br>(두번째 가시 반동맞고 계속 점프꾹 해도 피해진다.)  <br> <br><img src="gif/17_3f.gif" alt="17f"> <br> <br>한번만에 안될 수 있으니 계속 연습해보자!</p></article>',
    '<article id="article_1"><h1>18층 - 상자를 부숴 코코넛 열매 10개 모으기</h1><p><strong>사냥(템 모으기) 층.</strong> <br> 일반공격으로 상자를 부숴 코코넛 열매를 10개 모으면 된다. <br> <br><img src="gif/18_1f.gif" alt="18f"> <br> <br>아주 간혹 상자를 다 부쉈는데 10개가 안되는 경우가 있는데, <br>그럴 땐 아래 움짤의 열매를 4회 일반공격하자. 열매 1개를 얻을 수 있다. <br> <br><img src="gif/18_2f.gif" alt="18f"></p></article>',
    '<article id="article_1"><h1>19층 - 플레타를 호위하며 다음 층의 입구까지 돌파하기</h1><p><strong>사냥 층. </strong><br>플레타를 따라가기만 하면 끝. <br>플레타가 가는 방향의 몬스터를 미리 잡아주자. <br> <br><img src="gif/19f.gif" alt="19f"></p></article>',
    '<article id="article_1"><h1>20층 - 보스: 양철 나무꾼 퇴치하기.</h1><p><strong>보스 층.</strong> <br>체력 10억. <br>기름칠하고 나면 가끔 즉사급 데미지가 들어오니 빠르게 처치하자. <br> <br><img src="gif/20f.gif" alt="20f"> <br> <br>*20층 클리어 이후, 시드 로비에 있는 알리샤의 사념에게 가서 "이제 더 이상 안내는 필요없을 것 같아"를 눌러주자. <br>층마다 나오던 설명이 생략된다. <br> <br><img src="gif/20_1f.png" alt="20f"></p></article>',
    '<article id="article_1"><h1>21층 - 엘리쟈를 소환하고 퇴치하기.</h1><p><strong>사냥 층. <br>잡몹을 300마리 퇴치하면 포탈주변에 엘리쟈가 소환된다. <br></strong>엘리쟈를 잡아주면 끝. 파티플레이 추천. <br> <br><img src="gif/21f.gif" alt="20f"> <br> <br>참고로 연습권을 이용해 미리 299마리를 퇴치해놓고 내려오면 1마리만 잡아도 엘리쟈가 바로 나온다. <br>만약 몹을 몇마리 안잡았는데 엘리쟈가 떳다면, 누군가 연습권으로 작을 해뒀다는 의미다. <br>이 때는 양심껏 100~200마리 정도 잡고 가주자. <br> <br></p></article>',
    '<article id="article_1"><h1>★22층 - 구름을 밟고 다음 층의 입구까지 돌파하기.</h1><p>상세 공략글 : <a href="http://www.inven.co.kr/board/maple/2304/19269"target="blank">http://www.inven.co.kr/board/maple/2304/19269</a> <br><strong>점프 층.</strong> <br><strong>구름다리를 건너야한다.</strong> <br>떨어지면 제한시간이 1분 깎인다. <br>동영상과 글을 충분히 읽었다면 연습권을 이용해 연습해보자. <br>연습에 필요한 포인트는 978포인트(연습권10+입장비968) + 헤이지스톤 값이다. <br>22층은 크게<strong><p style="display: inline; color: red;"> 3구역</p>으로 구분</strong>된다. <br> <br><img src="gif/22_1.png" alt="22f" style="width: 700px;"> <br> <br><strong>1구역 </strong><br>1구역은 총 7번 점프하면 된다. <br>가시를 이용해주자. <strong>구름의 볼록한 부분이 함정인 경우가 많다.</strong> 정확한 위치를 외워두자. <br><strong>함정2를 피한 후 두걸음 정도 걷고 점프</strong>해야 한다. 움짤을 따라해보자. <br> <br><img src="gif/22_2f.gif" alt="22f"> <br> <br><img src="gif/22_3f.gif" alt="22f"> <br> <br><img src="gif/22_4f.png" alt="22f" style="width: 700px;"> <br> <br><p style="color: red; display: inline;">2구역</p> <br>첫 발판에서 점프타이밍은 캐릭터의 두 눈이 사라졌을 때 (뒷통수만 보일때) 점프하자. <br>둘째 발판에서는 한두걸음 걸어주고 점프하자. <br>그리고 긴 발판에 있는 함정을 한개 피해주자. <br>이후에 나오는 구름계단 중 몇개는 <strong>구름이 사라져도 서있을 수 있는 자리가 존재</strong>한다. 보통 구름의 끝 부분에 있다. <br> <br><img src="gif/22_5f.gif" alt="22f"> <br> <br><img src="gif/22_6f.gif" alt="22f"> <br> <br><img src="gif/22_7f.png" alt="22f" style="width: 700px;"> <br> <br><p style="color: red; display: inline;">3구역</p> <br>발판 위치를 외워두자. <br>최상단 긴 구름은 지속시간이 짧으니 생성되면 바로 달려가자. <br>굉장히 좁은 발판이 존재한다. 끝자락에 붙어서 구름타이밍을 잘 보고 가자. <br> <br><img src="gif/22_8f.gif" alt="22f"> <br> <br><img src="gif/22_9f.gif" alt="22f"> <br> <br><img src="gif/22_10f.png" alt="22f" style="width: 700px;"> <br> <br>마지막 발판에서 점프에 주의하자! <br> <br><img src="gif/22_11f.png" alt="22f"></p></article>',
    '<article id="article_1"><h1>★23층 - 투명 발판을 밟아 다음 층의 입구까지 돌파하기.</h1><p><strong>점프 층. </strong><br><strong>투명발판 맵이다.</strong> 발판 위치를 외워두고 감으로 플레이하자. <br>1, 2, 3구역에서 알리샤의 힌트를 볼 수 있다. 남이 힌트를 보고있는 것을 보고 올라갈 수도 있다. <br><strong>떨어졌을 경우 소울커넥터를 이용</strong>해 올라오면 된다. <br> <br><img src="gif/23_1.png" alt="23f"> <br> <br><img src="gif/23_2f.gif" alt="23f"> <br> <br><strong>정확한 발판 위치는 다 외우지 않아도 되지만, 떨어져야 하는 발판의 위치는 외워두는 것이 좋다. <br>나머지는 캐릭터가 두걸음 걷고 점프하는 식으로 리듬과 감에 맞춰서 점프하면 된다. <br></strong><strong>시뮬레이션이 있다.</strong> 활용해보자. <br><a href="http://www.inven.co.kr/board/maple/2304/18645" target="blank">http://www.inven.co.kr/board/maple/2304/18645</a> 참고.</p></article>', 
    '<article id="article_1"><h1>★24층 - 배경음악을 듣고 마을 이름 맞추기. </h1><p>*배경음악 동영상이 필요하다. <br><a href="https://www.youtube.com/watch?v=tvBfW1m6DiM" target="blank">배경음악</a> <br>참고하자. <br> <br><strong>기타 층.</strong> <br>배경음악 BGM을 듣고 정답을 맞추면 된다. <br>틀릴 경우 5분씩 차감되니 꼭 한번에 맞추도록 하자. <br> <br><img src="gif/24f.gif" alt="24f"> <br> <br><strong>족보 :</strong> 뾰족귀 여우마을, 백초마을, 헤네시스, 페리온, 커닝시티, 엘리니아, <br>헬리시움 탈환 본부, 크리스탈 가든, 무릉, 리스항구, 리프레, 에레브, 아랫마을, <br>아쿠아리움, 루디브리엄, 리엔, 에우렐, 판테온, 에델슈타인, 아리안트, 마가티아, <br>오르비스, 엘나스, 지구방위본부, 노틸러스, 슬리피우드 <br><strong>헷갈리는 목록 :</strong> <br>무릉 O 무릉도원 X <br>루디브리엄 O 루디브리움 X <br><strong>띄어쓰기</strong>는 안해도 된다. 단,<strong> 아래의 세 가지 맵만 띄어쓰기 존재. </strong><br>뾰족귀 여우마을 O 뾰족귀 여우 마을 X 뾰족귀여우마을 X <br>헬리시움 탈환 본부 O 헬리시움 탈환본부 X 헬리시움탈환본부 X <br>크리스탈 가든 O 크리스탈가든 X <br></p></article>',
    '<article id="article_1"><h1>25층 - 쉼터</h1><p><strong>★27층, ★33층</strong> 공략을 봐두자. <br>35층까지 딱히 어려운 층이 없다. <br> <br><img src="gif/25f.png" style="width: 700px;" alt="25f"></p></article>',
    '<article id="article_1"><h1>26층 - 오렌지 슬라임을 퇴치하여 얻은 오렌지 슬라임의 액체 10개를 제물에 떨궈 더 많은 오렌지 슬라임을 소환해 오렌지 슬라임 300마리 퇴치하기.</h1><p><strong>사냥 층. </strong><br>슬라임을 잡아 액체를 얻어 중앙 제단에 10개씩 떨구면, 슬라임이 20마리씩 나온다. <br>너무 많으면 소환이 안되므로 두번씩 소환을 반복해서 클리어하자. <br>클리어 이후 다음 사람을 생각해서 <strong>두번 소환해두고 가자.</strong> <br> <br><img src="gif/26f.gif" alt="26f"></p></article>',
    '<article id="article_1"><h1>★27층 - 장애물과 함정을 피해 다음 층의 입구까지 돌파하기.</h1><p><strong>점프 층.</strong> <br>동영상을 한번 본 후 설명을 보는게 이해하기 더 쉽다. 동영상 시청 바람. <br><a href="https://www.youtube.com/watch?v=zFeqYiaEi_Q&feature=emb_logo" target="blank">27층 무편집 동영상</a><br> <br><p style="color: red; display: inline;">함정 구역</p>은 운빨로 찍는구간이다. 3구역 존재한다. <br>4개의 초록상자 중 정답인 곳을 찾을때 까지 다시 가면 된다. <br>함정에 걸릴 경우 맵에 표창이 생성된다. 아프기도 하고 펫자동물약이 금지인 맵이니 직접 물약을 먹어주자. <br> <br><p style="color: orange; display: inline;">포탈 이동</p>은 움짤을 확인하자. <br> <br><img src="gif/27_0f.jpg" alt="27f" width="700px"> <br> <br><p style="color: orange; display: inline;">1번포탈</p> <strong>함정구역 통과 후 아래처럼 이동하여 포탈을 타자.</strong> <br> <br><img src="gif/27_1f.gif" alt="27f"> <br> <br><p style="color: orange; display: inline;">2번포탈</p> <br> <br><img src="gif/27_2f.gif" alt="27f"> <br> <br><strong>2번포탈 이후 8연속 점프는 점프꾹으로 되는 캐릭도 있고, 안되는 캐릭도 있다. <br>점프꾹이 가능하면 점프꾹하자. <br> <br></strong><p style="display: inline; color: orange;">3번포탈</p> <br> <br><img src="" alt="27f"></p></article>',
    '<article id="article_1"><h1>28층 - 도마뱀 굴을 일반 공격으로 공격해 벨라모아와 프릴드를 불러내고 각각 20마리 퇴치하기.</h1><p><strong>사냥 층.</strong> <br>중앙 상단에있는 <strong>도마뱀 굴을 일반공격하면 몹이 나온다.</strong> 나온 몹을 처치하면 된다. <br>몹은 랜덤으로 소환되니 나올때까지 반복하자. <br>발판마다 도마뱀 굴과 이어진 포탈이 있으니 활용하면 좋다. <br>만약 20마리 이상 잡은 몬스터가 또 나왓다면, 굳이 가서 잡지 말고 굴에 가만히 있자. 굴의 다음 공격타이밍 때 몹은 사라진다. <br> <br><img src="gif/28f.gif" alt="28f"></p></article>',
    '<article id="article_1"><h1>29층 - 모래 난쟁이들에게 모래 가루 10개를 빼앗아 모래 왼쪽 나무에 떨어트려 모래 결정을 얻은 뒤 <br> 올바른 수만큼의 모래 결정을 오른쪽 나무에 떨궈 모래 바람에 가린 노을을되찾기 </h1><strong>사냥(템 모으기) 층.</strong> <br>몹잡아서 나온 <strong>잡템을 모으면 좌측 상단에 모래결정이 생성된다.</strong> (잡템 10개당 모래결정 1개) <br><strong>모래결정을 주워서 그림처럼 나무 밑 (빨간박스)에 떨구자. </strong><br> <br><img src="gif/29f.png" alt="29f"> <br> <br><img src="gif/29_1f.gif" alt="29f"> <br> <br><strong>알맞은 개수는 1~7. 답을 초과해도 괜찮다.</strong> <br>예) 답이 3개면 모래결정 5개를 떨궈도 통과된다. <br>예) 답이 3개면 3개를 한번에 떨궈야 한다. 1개/2개, 1개/1개/1개로 떨구면 인식을 하지 못한다. <br></article>',
    '<article id="article_1"><h1>30층 - 보스: 겁에 질린 사자 퇴치하기</h1><p><strong>보스 층.</strong> <br> 체력 63억. <br>놔두면 계속 숨어버리니 빠르게 처치하자. <br>딜이 충분하다면 움짤처럼 떨어지면서 상자에 말걸기 -> 소환 -> 원킬컷이 가능하다. <br> <br><img src="gif/30f.gif" alt="30f"></p></article>',
    '<article id="article_1"><h1>31층 - 식충 슬라임 200마리 퇴치하기</h1><p><strong>사냥 층.</strong> <br>200마리 잡으면 된다. <br>페어리를 건들면 스킬봉인 / 몹 무적이 걸린다. <br> <br><img src="gif/31f.gif" alt="31f"></p></article>',
    '<article id="article_1"><h1>32층 - 가시 덤불을 밟아 점프하면서 상단부의 블루 고대 슬라임을 모두 퇴치하기</h1><p><strong>사냥 층.</strong> <br>발판 밟으며 모두 잡으면 된다. <br>위시그/ 위루시드 등 소울을 이용하면 좋다. <br> <br><img src="gif/32f.gif" alt="32f"></p></article>',
    '<article id="article_1"><h1>★33층 - 오른쪽 가장 아래의 포탈까지 돌파하기</h1><p><strong>기타 층.</strong> <br>출발점에서 얻은 열쇠를 이용해 도착점까지 가는게 목표다. <br> <br><img src="gif/33_1f.jpg" alt="33f"> <br> <br>화살표의 방향은 포탈에 기타창에 있는 열쇠를 뿌리면 방향이 바뀐다. <br>기본적으로 열쇠는 시계방향, 반시계방향 2개씩 지급하지만 이것만으로는 사실상 클리어가 불가능하다. <br><strong>따라서 아래 움짤처럼 옆에 열쇠를 버려두고 -> 소울커넥터를 이용해 재시도 -> 줍기 <br>-> 버리기 -> 재시도 -> 줍기 -> 버리기 -> 재시도를 하자.</strong><br> <br><img src="gif/33_2.gif" alt="33f"> <br> <br><strong>소울커넥터를 이용한 재시도는 총 3번까지 가능</strong>하다. <br>또한 첫방에 있는 <strong>NPC시크레타에게서 최대 3쌍(재시도 횟수만큼)의 열쇠를 구입할 수 있다.</strong> <br>최대 2+2(재도1)+2(재도2)+2(재도3)+3(시크레타) = 11쌍의 열쇠를 가지고 출발 할 수 있다. <br>열쇠를 넉넉히 준비하고 출발하자.</p></article>',
    '<article id="article_1"><h1>34층 - 하단에서 옐로우 컬리 카우를 퇴치해 옐로우 레더 10개를 모아 상단으로 가는 포탈을 탄 뒤 상단에서 퍼플 컬리 카우를 퇴치해 퍼플 레더 10개 획득하기 </h1><p><strong>사냥(템 모으기) 층. </strong><br>카우들 공격은 슈퍼넉백이니 주의하자. <br>특정 직업군은 윗점 + 로프커넥트를 사용하여 포탈을 이용하지 않고도 퍼플 컬리 카우가 있는 곳에 도착할 수 있다. <br> <br><img src="gif/34f.gif" alt="34f"></p></article>',
    '<article id="article_1"><h1>35층 - 쉼터</h1><p>35층에 처음 도달했다면 <strong>★39층, ★40층(바인드 필수)</strong> 공략을 꼭 보자. <br><strong>41,44층은 점프맵이다.</strong> 어렵진 않으나 <strong>처음인 경우엔 유튜브 동영상을 딱 한번만 봐두자.</strong> <br> <br><img src="gif/35f.png" alt="35f" style="width: 700px;"></p></article>',
    '<article id="article_1"><h1>36층 - 암호에 따라 순서대로 몬스터를 일반 공격하기</h1><p><strong>기타 층. <br></strong>시크레타가 불러주는 순서대로 몬스터를 일반공격하자. <br>몇몇 스킬은 몬스터에 공격판정이 있으니 <strong>공격형 이동기는 사용하지 말자.</strong> <br><strong>최대 8자리 암호</strong>까지 부른다. 외우면 헷갈리니 <strong>채팅창에 써두면서 하자.</strong> <br> <br><img src="gif/36f.gif" alt="36f"></p></article>',
    '<article id="article_1"><h1>37층 - 미요캐츠, 키요, 모래 두더지, 스콜피언 각각 100마리 퇴치하기</h1><p><strong>사냥 층.</strong> <br>총 3층구성이다. 2,3층에 있는 <strong>키요와 스콜피언이 젠율이 낮으니 신경써서 처리</strong>하자. <br>1층몹을 계속 안잡으면 키요와 스콜피언 젠이 안되므로 1층도 미리미리 제거해두자. <br> <br><img src="gif/37f.gif" alt="37f"></p></article>',
    '<article id="article_1"><h1>38층 - 주어진 몬스터를 사냥하여 어두운 기운을 제거하기</h1><p><strong>사냥 층.</strong> <br>NPC에게 돕겠다고 말을 걸고 시작하면 된다. <br>NPC가 불러주는 몬스터를 잡으면 끝. <br> <br><img src="gif/38f.gif" alt="38f"></p></article>',
    '<article id="article_1"><h1>★39층 - 퀴즈광이 내는 퀴즈 모두 맞추기</h1><p><strong>기타 층.</strong> <br>NPC가 내는 문제를 10번 맞춰야한다. <br>2회 이상 틀릴 경우 처음부터 문제를 맞춰야한다. 기회는 무제한. <br> <br></p><div id="search"><input type="text" id="data" autofocus><input type="button" value="검색" onclick="answer()" id="inputbtn"> </div><br> <br><p id="outputData"></p></article><article><h1>검색창 사용법</h1><img src="gif/39f.jpg" alt="39f" style="width: 700px;"><p>이런 문제가 나왔다면 <br>2개의 보기를 띄어쓰기 없이 연속해서 입력! <br> <br><img src="gif/39f_1.PNG" alt="39f" style="border: 1px solid black;"> <br> <br>정상적으로 입력했다면 <br> 이런 식으로 해당 문제와 그에 대한 답이 문제 오른쪽에 출력! <br>*주의사항 : 검색창에 2글자 이하로 검색하거나 띄어쓰기를 할 시 정삭적으로 검색되지 않음</p></article>',
    '<article id="article_1"><h1>★40층 - 보스: 허수아비 퇴치하기</h1><p><strong>보스 층. <br>바인드(에르다노바) 지참하면 좋음! <br> <br></strong>허수아비가 등장. 체력은 15억. <br>여태껏 보스와 다르게 허수아비는 <strong>딜로 잡는것이 불가능</strong>하다. 모든데미지에 10밖에 달지않는다. <br>허수아비는 맵 중앙에 있는 불길에 닿으면 데미지를 입는다. <br>첫 데미지는 150만이지만, 불길 위에 오래 있을수록 점점 증가하여 2000만까지 오른다. <br><strong>패턴을 잘 회피하면서 허수아비를 유인하거나, 밀격기를 이용해 불에 닿게하여 <br>20스택(틱당 2000만 데미지)까지 쌓은채로 버티면 클리어.</strong> <br> <br><img src="gif/40f.gif" alt="40f"></p></article>',
    '<article id="article_1"><h1>41층 - 장애물을 피해 다음 층의 입구까지 돌파하기</h1><p><strong>점프 층.</strong> <br>41층까지 온 실력자라면 딱히 어렵지 않을 것이다. <br>처음 점프구간을 힘들어 하는 사람들이 있는데, 발판마다 빠르게 두걸음 정도 걷고나서 점프해야한다. <br>움짤참고. <br> <br><img src="gif/41f.gif" alt="41f"> <br> <br><strong>★41층까지 클리어하면 2급작 완료!★</strong></p></article>',
    '<article id="article_1"><h1>42층</h1><p>공략글을 준비중입니다.</p></article>',
    '<article id="article_1"><h1>43층</h1><p>공략글을 준비중입니다.</p></article>',
    '<article id="article_1"><h1>44층</h1><p>공략글을 준비중입니다.</p></article>',
    '<article id="article_1"><h1>45층</h1><p>공략글을 준비중입니다.</p></article>',
    '<article id="article_1"><h1>46층</h1><p>공략글을 준비중입니다.</p></article>',
    '<article id="article_1"><h1>47층</h1><p>공략글을 준비중입니다.</p></article>',
    '<article id="article_1"><h1>48층</h1><p>공략글을 준비중입니다.</p></article>',
    '<article id="article_1"><h1>49층</h1><p>공략글을 준비중입니다.</p></article>',
    '<article id="article_1"><h1>50층</h1><p>공략글을 준비중입니다.</p></article>',
];

// function gotomain(){
//     //location.replace('https://butdory.github.io/MapleStory-SEED/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/main.html');
//     //window.location.replace("https://butdory.github.io/MapleStory-SEED/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/main.html");
//     window.location.href = "https://butdory.github.io/MapleStory-SEED/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/main.html";
//}

let tmp = "";

function gotoInputF(input){
    // let url = "https://butdory.github.io/MapleStory-SEED/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/"+input;
    // window.location.replace(url)
    const art1 = document.getElementById("section_1");
    for(let i = 1 ; i <= 50; i++){
        tmp = i + "f";
        if(tmp === input){
                art1.innerHTML = floor[i];
                key();
                break;
            }
        else if(input === "main"){
            art1.innerHTML = floor[0];
            break;
        }
    }
}

function answer(){
    document.getElementById("outputData").innerHTML = "";
    let inputstr = document.getElementById("data").value;
    if(inputstr.length <= 2){
        document.getElementById("outputData").innerHTML = "3글자 이상 입력해주세요";
        return;
    }
    let str = "";
    let strtmp = "";
    let answer = ""
    let count = 0
    let output = []
    for(let i = 0; i < question.length; i++){
        str = question[i];
        strtmp = str;
        for(let j = 0; j < str.length; j++){
            str = str.replace(/(\s*)/g, "");
            if(str[j] === " "){
                continue;
            }
            else if(str.slice(j, inputstr.length + j) === inputstr){
                answer = str[str.length - 1];
                output[count] = strtmp;
                count++;
            }
        }
    }
    if(count >= 1){
        for(let i = 0; i < output.length; i++){
            document.getElementById("outputData").innerHTML += output[i]+"<br>";
            document.getElementById("data").autofocus = true;
        }
    }
    else if(count === 0){
        document.getElementById("outputData").innerHTML = "검색된 문제가 없습니다.<br>하단에 있는 주의사항을 살펴주세요.";
        document.getElementById("data").autofocus = true;
    }
}

const key = onload = () => {
    input = document.getElementById("data");
    if(input === null){
        return;
    }
    else{
        input.focus();
        input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("inputbtn").click();
        }
    });
    }

}