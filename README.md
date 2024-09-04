### 1. 프로젝트 소개
#### 1.1. 개발 배경 및 필요성
- **개발 배경**

  ***중고 거래 시장 규모가 커짐에 따라 사기 피해 또한 증가하고 있다.***
  
  ![개발배경그래프](https://github.com/user-attachments/assets/a2d01689-a19b-4ce6-8545-f0c160ebf733)
  > ***중고 거래 시장의 규모는 계속해서 성장***하는 추세이다. 하나금융경영연구소에 따르면, 중고 거래 시장 규모가 2020년에는 12년 전과 비교해 5배 높은 약 20조 원에 달했다. 하지만 중고 거래량이 늘어남에 따라 사기 피해도 증가하고 있다. 경찰청에 따르면 2016년부터 4년 사이 ***사기 피해액이 무려 약 590억 원가량 증가했고***, 20년 당시 피해 건수는 12만 3,168건이었다.
  - 대학생들의 경우, *에브리타임*을 통해 중고 서적 거래를 많이 이용한다. 대학생 커뮤니티 *에브리타임*은 2010년 처음 출시되어, 대학생들의 필수 앱으로 자리매김하고 있다. *에브리타임*은 대학생의 편의 생활을 위한 여러 가지 기능을 제공하고 있는데, 그중 하나가 같은 학교 학생 간의 중고 서적 거래 기능인 '책방'이다. 해당 앱 개발사에 따르면 2023년까지 집계된 누적 거래 권 수는 238만 권이다. 새 학기가 시작한 지금도 부산대학교 *에브리타임* ‘책방’에서 활발하게 거래가 이루어지고 있다. 
    
  -  과연 학생들은 ***왜*** 중고 거래에 특화된 플랫폼보다 대학생 커뮤니티 *에브리타임*을 애용하는 걸까? <br>이 의문을 해결하기 위해 인터뷰를 진행해 보았고, 학생들은 다음과 같이 답했다.
      >  1. 같은 학교 사람이라는 것에 대한 **믿음**. 완전한 ‘아무나’가 아니라는 사실이 주는 약간의 **신뢰감** 때문에 
      > 2. 1번과 비슷한 맥락에서 같은 학교 사람과 거래를 진행하면 대부분 **직거래**가 가능해 **사기 피해 가능성이 작고**, 직거래 장소 또한 큰 조율 없이 **부산대에서 거래**가 가능하다는 점 때문에
      > 3. “전공 서적 거래”에 관해서는, *에브리타임*는 아무래도 대학생 전용 플랫폼이기에 **전공 서적 매물이 많은 편**이기 때문에
      > 4. 가격이 비교적 **저렴**. 학생들 대상이기 때문에 가격이 저렴한 편, 부산대 학생이라는 **연대/나눔**같은 느낌으로 가격 낮추기도 하기 때문에
    - 위 답변을 통해 학생들이 중고 거래 특화 플랫폼이 아니기에 겪는 여러 불편 사항을 감수하면서까지 *에브리타임*을 사용하는 이유를 알 수 있었다.

    - 그러나, *에브리타임*는 중고 거래에 특화된 플랫폼이 아니기에, 거래 기능이 사용자가 사용하기에 다소 불편한 점이 있을뿐더러 거래 중 사용자가 느낄 수 있는 사기 피해 예방을 위한 가이드나, 피해 발생 시 대책도 잘 마련되어 있지 않은 실정이다.
      
  *따라서, 기존 중고 거래 플랫폼의 사기 거래 안정성, 거래 편리성을 다 가져가면서, 대학생 전용 플랫폼만이 가질 수 있는 이점까지 가진 **부산대학교 학생 전용 중고 거래 플랫폼**을 만들고자 한다.*

<br>

- **개발 필요성**

    > ***전국민적으로 중고 거래 경험 횟수가 증가하는 동시에 사기 피해도 잇따라 심각해***지고 있다. 대학생들이 많이 이용하는 중고 거래를 점점 더 많은 사람이 많은 물건을 사고파는 실정에, 대학생들이 *에브리타임*을 하나의 중고 거래의 장으로서 사용하고 있지만 여러 문제점이 존재한다. 
    1. **계정 신용 보증의 부재**
        - 보통 회원가입 시, 한 번의 인증 절차만을 거치기 때문에 도용, 계정 매매 문제가 지속적으로 발생하고 있으며, 이에 대한 해결책이 미비하다.
    2. **사기 피해 대책의 부족**
        - *에브리타임*의 경우, 실제 사기 피해가 발생했을 때 피해자의 손해 배상을 위한 대책이 제대로 마련되어 있지 않다. 따라서 사전에 사기를 예방하는 것이 최선이다. 
        - 철저한 익명성을 악용하여 노쇼(No-Show), 잠수 등 비매너 행위를 더 쉽게 일삼는 경향이 있다.
    3. **불편한 거래 기능**
        - 검색 및 필터링 기능이 부족하다.
        - 서적 거래의 경우, 책 이름을 정확히 입력하지 않으면 검색이 어렵다.
        - 중고 거래 게시판이 물품 분류 없이 난잡하게 나열되어 있어 거래의 효율성이 떨어진다.
        - 거래 완료 여부를 쉽게 확인할 수 없다.

  *에브리타임은 대학생들 사이에서 필수적인 거래 플랫폼으로 자리 잡고 있지만, **기능 개선과 신뢰성 향상**이 필요하다.*

<br>

#### 1.2. 개발 목표 및 주요 내용
> **개발 목표**

-  부산대학교 학생들에게 **<ins>중고 거래 사기로부터 더 안전한</ins>** 거래 환경을 제공하는 것을 목표로 한다. 또한, 사용자에게 맞춤형 상품 추천부터 거래 성사까지 **<ins>모든 거래 과정을 최적화하여 더 편리한</ins>** 거래 경험을 제공하고자 한다.

> **주요 내용**

- **사기 예방 및 대응 시스템**
    - 사기 내역 조회, 신고 및 피드백, FAQ와 같이 잘 마련된 사기 예방 및 대응 시스템을 통해 사용자는 사기에 대한 불안감으로부터 자유로운 중고 거래를 할 수 있다.

- **편리한 중고 거래 시스템**
    - **맞춤형 상품 추천** : 사용자의 **전공에 맞는 중고 서적을 추천**한다.
    - **최적화된 검색 및 필터링** : 사용자에게 **최적화된 키워드 검색과 필터링 옵션**을 제공한다.
    - **거래 과정 간소화** : 거래 과정에서 **상품 정보**와 **사진 등록**을 **의무화**하고, 사용자 간 **쪽지 및 웹 푸시 알림** 기능을 통해 소통을 원활하게 한다.
    - **시간표 기반 거래 추천** : 학생의 **시간표를 기반으로 최적의 거래 시간을 추천**한다. 
   
- **부가 기능**
    - **룸메이트 매칭, 맛집 지도, 식사 메뉴 추천 룰렛**을 통해 부산대학교 학생들에게 다양한 편의 기능을 제공한다. 


<br>

#### 1.3. 세부내용
> **철저한 사용자 인증 시스템**
- 부산대 학생만 이용할 수 있도록 부산대 이메일 인증을 통한 학생 인증 과정을 필수로 거친다.
- 사용자의 계정이 도용되거나 판매되지 않도록 주기적인 재인증 절차를 실시한다.

> **안전한 거래 환경 제공**
- 사기 내역 조회 및 신고 기능을 제공한다.
    - 더치트 API를 활용하여 조회한 사용자의 사기 이력과 신고 내역을 거래 상대가 채팅창에서 볼 수 있도록 한다.
    - 노쇼, 욕설 등 비매너 행위를 한 사용자 또한 앱 내 신고 대상이 되며, 신고된 사용자에게는 경고 또는 서비스 이용 제한 등의 페널티가 부여된다.

> **편리한 거래 프로세스**
1. 맞춤형 상품을 추천
    - 사용자의 전공에 맞는 서적을 추천한다.
2. 최적화된 검색 및 필터링
    - 최적화된 키워드 검색 및 필터링 기능(카테고리별, 인기순, 가격순, 최신순, 상태순 등)을 제공한다.
3. 상세한 상품 정보 등록 및 사진 업로드
    - 판매자가 상품을 등록할 때, 가격, 상태 등과 사진을 반드시 포함하도록 하여 상품에 대한 신뢰성을 높인다.
    - 상품이 거래되었는지를 등록할 수 있어, 사용자가 상품의 판매 여부를 쉽게 확인할 수 있다.
4. 사용자 간 실시간 쪽지 기능 및 웹 푸시 알림 기능을 제공한다.
5. 시간표 기반의 거래 시간 추천
    - 판매자와 구매자의 시간표를 등록받아 우선순위(수업이 동시에 끝나는 경우, 수업이 동시에 시작하는 경우, 주말 등)를 매겨 최적화된 시간을 자동 추천해 준다.

> **부가 기능 제공**
- 룸메이트 매칭
    - 사용자가 작성한 체크리스트(음주, 잠버릇 등)를 기반으로 조건부 매칭 기능을 제공하여 편리한 룸메이트 구인을 돕는다.
- 맛집 지도
    - 부산대 주변의 맛집 정보를 지도위에 카테고리별로 표시하여 사용자가 쉽게 접근할 수 있도록 한다.
    - 광고와 실제 리뷰가 혼동되지 않도록 시각적으로 구분하여 나타낸다.
        - 파란색 마커 - 광고 마커
        - 빨간색 마커 - 일반 마커
- 식사 메뉴 추천 룰렛
    - 부산대 주변에서 접할 수 있는 메뉴 위주의 음식을 룰렛을 통해 임의로 추천해 준다.
    - 더 나아가 추천된 메뉴를 토대로 인근에 있는 맛집 리스트를 제공한다.

<br>

#### 1.4. 기존 서비스 대비 차별성

<img width="750" alt="차별성" src="https://github.com/user-attachments/assets/4feed1df-c260-4ee3-9742-e211fae0d471">

1. **맞춤형 거래 경험 제공**

    - **시간표 기반 거래 시간 추천**:  
      - P-bud는 사용자의 시간표를 분석하여 <ins>가장 적절한 거래 시간</ins>을 추천한다. 이를 통해 대학생들은 수업과 과제 등 *바쁜 일정을 효율적으로 관리*하면서 거래를 진행할 수 있다.

    - **사용자 학과 기반 책 추천**:  
      - P-bud는 사용자의 학과 정보를 바탕으로 <ins>해당 학과에 필요한 전공 서적</ins>을 추천해 준다. 이 기능을 통해 필요한 서적을 쉽게 찾을 수 있으며, 거래 과정이 더욱 편리해진다.

2. **강력한 사기 예방 및 해결 시스템**

    - **신고 기능을 포함한 사기 예방 시스템**:  
      - P-bud는 사기 예방을 위해 `FAQ`, `1:1 문의` 기능뿐만 아니라, <ins>사용자들이 직접 신고할 수 있는 기능</ins>도 포함하고 있다.
        - 신고 기능을 통해 사용자로부터 <ins>사기 의심 사례</ins>를 수집하고, 이를 바탕으로 필요한 자료를 확보하여 *경찰에 신고하는 과정을 지원*한다. 이를 통해 사기 문제를 신속하게 해결할 수 있을 뿐만 아니라, *유사 사건의 재발 방지*에도 기여한다.
    
    - **더치트 API를 통한 지속적 사기 이력 추적**:  
      - P-bud는 `더치트 API`를 활용하여 <ins>지속적으로 사기 이력을 추적</ins>할 수 있어, 거래의 안전성이 크게 향상되었다. 이는 기존 플랫폼들이 제공하는 *기본적인 사기 예방 시스템*을 한층 더 강화한 것이다.

3. **편리한 거래 환경**

    - **키워드 검색 및 필터 기능**:  
      - P-bud는 기존 중고 거래 플랫폼의 편리함을 유지하면서도, <ins>키워드 검색 및 필터 기능</ins>을 통해 원하는 상품을 쉽게 찾을 수 있도록 설계되었다. 이는 에브리타임과 같은 *학교 기반 플랫폼의 불편한 거래 경험*을 크게 개선한 것이다.

4. **부산대학생의 편의를 위한 부가 서비스 제공**

    - **룸메이트 매칭 기능**:  
      - P-bud는 부산대학생들을 위한 <ins>룸메이트 매칭 기능</ins>을 제공하여, 같은 학교 학생들 간의 신뢰도를 높이면서도 안전하고 편리한 주거 환경을 찾을 수 있도록 돕는다.

    - **맛집 지도**:  
      - P-bud는 <ins>부산대 주변의 맛집 지도</ins>를 제공하여, 학생들이 학교 근처에서 다양한 식사 옵션을 쉽게 찾을 수 있도록 지원한다.

*이러한 차별화된 기능들은 대학생들이 **안전하고 편리하게** 중고 거래를 할 수 있도록 돕는 P-bud의 강점이다. 기존 플랫폼의 단점을 보완하고, **대학생들의 특성을 고려한 맞춤형 서비스**를 제공하는 것이 P-bud의 가장 큰 차별성이라 할 수 있다.*

<br>

#### 1.5. 사회적 가치 도입 계획
> 이 프로젝트는 사기를 예방하고 사용자에게 안전한 거래 환경을 제공함으로써 개인과 사회에 긍정적 영향을 미칠 수 있다. 개인은 금전적 손실을 예방할 수 있고, 사회적으로는 거래 관련 정보를 투명하게 제공하여 투명하고 공정한 시장을 형성하는데 기여할 수 있다. 또, 전반적인 온라인 거래 환경의 신뢰성을 높여 활발한 경제 활동을 촉진할 수 있다.

> 추후에는 정기적인 ‘피누버디 벼룩시장’과 같은 오프라인 이벤트를 통해 사회적, 기술적 기여를 확대할 수 있다. 이러한 활동은 플랫폼 광고 효과를 높이는 동시에 지역 경제 활성화 및 학생들 간 연대감을 강화하는 데 기여할 것으로 기대된다.

<br>

#### 1.6 수익 창출 계획

1. **홈화면 광고 배너**
  - 홈화면 아래에 광고 배너를 넣어서 사용자들이 광고를 클릭하거나 보게 할 수 있다. 클릭당 수익이나 노출당 수익을 창출할 수 있다.

3. **맛집 지도 광고 마커**
   - 맛집 지도에 색이 다른 광고 마커를 추가해서 음식점들이 더 눈에 띄게 할 수 있다. 지역 기반 광고이기에 효과적이고, 다양한 맞춤형 옵션으로 수익을 올릴 수 있다.

<br>

---

<br>

### 2. 상세설계
#### 2.1. 시스템 구성도

> **전체 시스템 구성도**

<img width="656" alt="시스템구성도" src="https://github.com/user-attachments/assets/d0d108be-96ad-405c-ba89-01cec4856617">

> **ERD**

<img src="https://github.com/user-attachments/assets/c8b29fc5-a87d-46e8-9ba9-2cd33f4fa2bf" alt="erd" width="800"/>


#### 2.1. 사용 기술
| 기술       | 버전       |
|------------|------------|
| HTML       | html5      |
| CSS        | css3       |
| Node.js    | v20.15.0   |
| npm        | 10.7.0     |
| jQuery     | 1.11.1     |
| Nginx      | 1.24.0     |
| MySQL      | 8.0.39     |
| Bootstrap  | 5.3.3      |
| Express.js | 4.19.2     |

<br>

---

<br>

### 3. 개발결과
#### 3.1. 전체시스템 흐름도
> **IA (information architecture)**   
  <img width="800" alt="IA" src="https://github.com/user-attachments/assets/98d31b78-52bb-44c4-b0ae-b563e74b0a8b">

> **플로우차트**

- 컴포넌트   
  <img width="479" alt="컴포넌트_형식" src="https://github.com/user-attachments/assets/8d9caa10-826e-4084-a76b-1213d59d3066">

- 회원가입/로그인   
  <img width="674" alt="회원가입-로그인" src="https://github.com/user-attachments/assets/e49a411f-6bc5-4816-bb5b-57db3e384a52">

- 마이페이지   
  <img width="695" alt="마이페이지" src="https://github.com/user-attachments/assets/8d13d214-d613-4090-89c8-0d039a66f51c">

- 게시판   
  <img width="514" alt="게시판" src="https://github.com/user-attachments/assets/3c9be36a-9f6c-44eb-90d1-21f26e8591e2">

- 채팅   
  <img width="389" alt="채팅" src="https://github.com/user-attachments/assets/36f5771d-abc3-4f05-9179-d1b165163519">

- 룸메이트 매칭
<img width="319" alt="흐름도-룸메매칭" src="https://github.com/user-attachments/assets/4622baee-b25f-43b4-b337-bbcde78155d8">

- 맛집 지도
<img width="422" alt="흐름도-맛집지도" src="https://github.com/user-attachments/assets/27f52a6e-9490-4c52-9275-317d1cfaf9b6">

<br>

#### 3.2. 기능설명
> **회원가입**
1. **아이디/비밀번호 입력** 
    - 사용자가 **아이디 입력 필드**에 원하는 아이디를 입력한다.
    - 입력 후 중복 확인 버튼을 눌러 중복 여부를 확인한 후, 중복된 아이디일 경우 경고문구가 표시된다.
    - 사용 가능한 아이디일 경우, "사용 가능한 아이디입니다."라는 확인 메시지가 표시된다.
    - 사용자가 **비밀번호 입력 필드**에 원하는 비밀번호를 입력한다.
    - 비밀번호는 일정 기준(8자 이상-16자 이하, 영어, 숫자 및 특수문자 포함)을 만족해야 하며 만족하지 않을 시 경고문구가 표시된다.
    - 사용자가 **비밀번호 재입력 필드**에 동일한 비밀번호를 한 번 더 입력하여, 비밀번호를 정확하게 입력했는지 확인한다.
      
2. **회원 정보 입력**
    - 이름, 단과 대학, 학과, 학번, 전화번호, 닉네임, 부산대 이메일 등의 회원 정보를 입력하는 필드가 제공된다.
    - 전화번호 뒷자리나 학번이 유효한 형식(8자리 숫자/9자리 숫자)으로 입력되지 않으면 경고 문자가 표시된다.
3. **제출 및 이메일 인증**
    - 제출 버튼을 누르면 이메일 인증 절차를 거친다.
    - 화면에 나온 링크를 클릭하여 이메일 인증이 완료되면 가입 완료 메세지가 표시되며 로그인 페이지로 이동한다.

<br>

> **로그인**
  - 아이디와 비밀번호를 입력하고 로그인 버튼을 클릭 시, 입력된 아이디와 비밀번호에 대한 계정이 있는지 확인한다.
  - 계정이 있는 경우 로그인에 성공해 메인 화면으로 넘어간다.
  - 계정이 없는 경우 경고 문구가 나타난다.

<br>

> **홈**
1. **상단바**
    - 홈 화면 좌측 상단의 **사용자 프로필 아이콘**을 클릭하면 마이페이지에 접근한다.
    - 홈 화면 오른쪽 상단의 **채팅 아이콘**을 클릭하면 사용자가 진행 중인 채팅 목록을 확인할 수 있다.

2. **메인 화면**
    - **검색어 입력 필드**에 사용자가 검색어를 입력하고, **검색 버튼**을 클릭하면 입력된 검색어에 해당하는 물품의 목록들을 화면에 표시한다.
    - 검색창 아래의 **피벗’s PICK!** 버튼을 통해 가장 인기 있는 매물들을 확인할 수 있다.
    - 검색창 아래의 **추천 도서, 의류, 전자기기** 등의 카테고리 아이콘을 클릭하면 해당 카테고리에 속하는 물품의 목록을 볼 수 있다.

3. **하단 내비게이션 바**
    - **홈 아이콘**: 사용자가 현재 보고 있는 메인 화면으로 돌아온다.
    - **룸메 매칭 아이콘:** 룸메 매칭 페이지로 이동하여 룸메이트 매칭 서비스를 이용할 수 있다.
    - **지도 아이콘**: 맛집 지도 페이지로 이동한다.
    - **알림 아이콘**: 사용자가 받은 알림 목록을 확인할 수 있다.

<br>

> **마이페이지**
1. **사용자 정보 표시**
   - 화면 상단에 사용자의 **프로필 아이콘**과 **닉네임**이 표시되며, 환영 메시지가 함께 나타난다.
   - **학과** 및 **학번** 등의 사용자 정보도 함께 표시된다.
   - **판매 내역** : 판매한 물품들의 목록이 표시되는 페이지로 이동한다.
   - **구매 내역** : 사용자가 구매한 물품들의 목록이 표시되는 페이지로 이동한다.
   - **관심 목록** : 사용자가 찜한 물품들의 목록이 표시되는 페이지로 이동한다.
     
2. **내 시간표 수정**
   - **내 시간표 수정 버튼**을 클릭하면 사용자의 시간표를 편집할 수 있는 페이지로 이동한다. 사용자는 이곳에서 거래 불가능한 시간을 클릭한 후 저장한다
     
3. **FAQ**
   - **FAQ** 버튼을 클릭하면 자주 묻는 질문(FAQ) 페이지로 이동한다.
   - 사용자는 이곳에서 사기 피해 및 예방에 관한 답변을 찾아볼 수 있으며, 문제가 해결되지 않는 경우 1:1 채팅으로 관리자에게 별도의 문의를 할 수 있다.
   
4. **기본 기능**
   - 사용자는 하단의 목록에서 **로그아웃, 앱 설정, 회원 탈퇴**와 같은 기본 기능을 사용할 수 있다.

<br>

> **게시판**
1. **검색 기능**
    - **검색어 입력 필드**에 사용자가 검색어를 입력한 후, **검색 버튼**을 클릭하면 게시판 내의 게시물 중 해당 검색어와 일치하는 물품 이등을 포함하는 게시물을 검색하여 결과를 표시한다.
    - 검색 결과가 존재하는 경우, 관련 게시물 목록이 갱신되어 화면에 표시된다.
    - 검색 결과가 없을 경우, 빈 페이지가 나타난다.
2. **정렬 옵션**
    - 화면 상단에 **정렬 기준**을 선택할 수 있는 버튼들이 존재하며, 사용자는 **인기순**, **최신순**, **낮은 가격순**, **상태**를 기준으로 게시물 목록을 정렬할 수 있다.
    - **인기순**: 조회수나 찜하기가 많은 순서대로 게시물을 정렬하여 표시한다.
    - **최신순**: 게시물의 등록일 기준으로 가장 최근에 올라온 게시물을 먼저 표시한다.
    - **낮은 가격순**: 가격이 낮은 순서대로 게시물을 정렬하여 표시한다.
    - **상태**: 게시물의 상태 (예:매우 좋음, 좋음, 나쁨)에 따라 좋은 순서대로 정렬하여 표시한다
3. **게시물 목록**
    - 검색 결과나 정렬된 결과에 따라, 각 게시물이 카드 형식으로 화면에 표시된다.
    - 각 게시물 카드에는 다음과 같은 정보가 포함된다:
        - **이미지**: 게시물에 등록된 대표 이미지가 표시된다.
        - **제목**: 게시물의 제목이 표시된다.
        - **등록일**: 게시물이 게시판에 등록된 날짜가 표시된다.
        - **가격**: 판매자가 설정한 가격이 표시된다.
        - **카테고리**: 해당 게시물이 속한 카테고리가 표시된다 (예: 의류, 전자기기 등).
        - **상태**: 상품의 상태가 표시된다 (예: 매우 좋음, 보통, 나쁨 등).
        - **조회수**: 해당 게시물의 조회수가 표시된다.
4. **게시물 상세 페이지로 이동**
    - 사용자가 관심 있는 게시물 카드를 클릭하면, 해당 게시물의 상세 정보를 볼 수 있는 **게시물 상세 페이지**로 이동한다.
    - 상세 페이지에서는 판매자의 설명을 추가로 확인할 수 있으며, 찜하기 또는 채팅하기 기능도 제공된다.
5. **글쓰기 버튼**
    - 화면 하단 오른쪽에 **글쓰기 버튼**이 존재하며, 사용자가 새로운 게시물을 등록하고자 할 때 클릭할 수 있다.
    - 버튼을 클릭하면 게시물 작성 페이지로 이동하여 제목, 설명, 가격, 카테고리, 이미지를 입력하고 새로운 게시물을 등록할 수 있다.

<br>

> **채팅**
1. **채팅 목록**
    - 상단 바의 우측에 위치한 **채팅 버튼**을 클릭하면 현재 사용자가 대화 중인 채팅방 목록을 확인할 수 있다.
    - 나열된 채팅 목록 중에 원하는 **채팅방**을 클릭하면 해당 채팅방으로 이동한다.
2. **채팅방**
    - 채팅방에선 상대방과 자유롭게 대화를 나눌 수 있다.
    - 채팅방 상단에는 대화 상대의 닉네임과 현재 활동 중인지에 대한 정보가 뜨며 그 밑에는 상대의 **신고 누적 횟수**를 조회할 수 있다.
    - 만약, 대화 상대가 욕설하거나 허위 매물을 올리는 등의 행위를 한다면 우측 상단에 위치한 **신고 버튼**을 통해 신고 사유와 상세한 설명을 작성할 수 있다.
    - 중고 거래 시, **시간 정하기 버튼**을 누르면 두 사용자의 시간표를 통해 빈 시간을 계산해 거래 가능 시간을 3개 추천해 준다.
    - **거래 가능 시간**은 크게 6단계의 **우선순위**로 나누어 계산되는데 이는 다음과 같다.
        1. 수업이 동시에 끝나는 경우
        2. 수업이 동시에 시작하는 경우
        3. 수업이 다 끝난 이후
        4. 둘 다 수업이 시작하기 전
        5. 늦은 밤
        6. 주말

<br>

> **룸메 매칭**
1. **룸메이트 매칭 게시판**
   - **필터 버튼**을 클릭하면 사용자가 정한 조건에 부합하는 룸메이트 후보를 확인할 수 있다.
   - **자유관, 웅비관, 효원재 버튼**을 통해 같은 기숙사를 지원하는 룸메이트 후보를 확인할 수 있다.
   - 룸메이트 게시물은 학과, 학번, 한 줄 소개로 이루어져 있으며 클릭하면 후보가 작성한 **상세 체크리스트**를 확인할 수 있다.
   - 상세 체크리스트 밑에 있는 **채팅하기 버튼**을 누르면 채팅을 보낼 수 있다.

2. **내 룸메이트 체크리스트 작성/수정**
   - **작성 버튼**을 클릭하면, 사용자의 체크리스트 작성/수정 창으로 넘어간다.
   - 체크리스트에 정보를 모두 기재한 뒤 **저장 버튼**을 누르면 룸메이트 매칭 게시판에 사용자의 정보가 업로드/업데이트된다.

<br>

> **맛집 지도**
1. **검색 기능**
    - 상단의 **검색어 입력 필드**를 통해 사용자가 원하는 장소를 조회할 수 있다.
      
2. **카테고리 옵션과 부산대 맛집 조회**
    - 키워드 검색 바로 아랫부분에 있는 **음식점/주점** , **카페/디저트**, **편의점/마트**, **병원/약국** 버튼을 클릭해 카테고리에 해당하는 장소에 마커를 표시한다.
    - 카테고리 버튼 클릭 해제 시, 기본값인 부산대 주변의 맛집에 마커들이 표시된다.
      
3. **마커**
    - **광고**로 표시된 장소의 경우는 **파란색**으로 마킹이 되고 광고가 없는 **일반** 장소에는 **빨간색**으로 마킹된다.
    - **마커**들을 클릭 시, 장소명과 주소가 나타난다.
        - 장소명 옆에 있는 ‘**>**’를 클릭하면 해당 장소의 정보가 담긴 카카오맵 사이트로 이동한다.
          
4. **식사 메뉴 추천 룰렛 버튼**
    - 우측 하단의 **룰렛 버튼**을 클릭 시, 식사 메뉴 추천 화면을 볼 수 있다.
        - **한식, 중식, 양식, 일식, 간단식, 디저트**의 음식 카테고리를 선택하면 룰렛 돌리기 버튼이 활성화된다.
            - 음식 카테고리를 선택하지 않고 **룰렛 돌리기** 버튼을 누르면, “먼저 음식을 선택해주세요!”라는 메세지가 화면에 출력되며 룰렛이 돌아가지 않는다.
        - 룰렛을 돌려 랜덤한 메뉴가 결정되면, “맛집 정보들을 보시겠습니까?”라는 문구를 띄우며 **예/아니오**라는 버튼이 생성된다.
            - **예** : 정해진 메뉴에 해당하는 **부산대 주변 맛집들을 리스트**로 출력해 준다.
            - **아니오** : 룰렛 화면으로 돌아간다.
    - **뒤로가기** : 이전 화면인 지도로 돌아간다.
      
5. **맛집 등록 버튼**
    - 우측 하단의 작성 버튼을 클릭 시, 사용자가 맛집을 간단히 등록할 수 있다.

<br>

#### 3.3. 기능명세서
- 회원가입   
  <img width="700" alt="기능명세서-회원가입" src="https://github.com/user-attachments/assets/21d587fe-9fec-40c3-b8a7-d8a45468a255">

- 로그인   
  <img width="700" alt="기능명세서-로그인" src="https://github.com/user-attachments/assets/0d8599bc-0975-4986-abc5-c0fce4e234a4">

- 홈, 상하단바   
  <img width="700" alt="기능명세서-홈상하단바" src="https://github.com/user-attachments/assets/9c116cf2-51b1-480c-8f06-394797566a5d">

- 마이페이지   
  <img width="700" alt="기능명세서-마이페이지" src="https://github.com/user-attachments/assets/834ac611-1220-4f01-9111-93c3a32b75c8">

- 게시판   
  <img width="700" alt="기능명세서-게시판" src="https://github.com/user-attachments/assets/3946a5aa-6275-4fa6-a9d9-a38be0818462">

- 채팅   
  <img width="700" alt="기능명세서-채팅" src="https://github.com/user-attachments/assets/11005c42-f86a-488d-9c56-cde66d506876">

- 룸메이트 매칭   
  <img width="700" alt="기능명세서-룸메매칭" src="https://github.com/user-attachments/assets/9213f6bf-ffbc-4b38-9ae5-41f132797562">

- 지도   
  <img width="700" alt="기능명세서-지도" src="https://github.com/user-attachments/assets/e9dd3eb2-b2fb-4a34-9095-2cc118f1d9c5">

<br>

#### 3.4. 디렉토리 구조
```
P-bud
   ├─ board 
   │  ├─ detail.html     # 상세 게시글 
   │  ├─ edit.html       # 게시글 수정
   │  ├─ index.html      # 게시판 
   │  ├─ post.html       # 게시글 등록
   │  └─ matching
   │     ├─ index.html   # 매칭 게시판
   ├─ bootstrap-5.3.3-dist # Bootstrap 라이브러리
   ├─ chat    # 대화방 목록 
   │  ├─ index.html
   │  ├─ room            # 1:1 채팅방
   │  │  ├─ index.html
   │  └─ timematching    # 시간 정하기
   │     ├─ index.html
   ├─ config             # 환경 설정 및 설정 관련 파일들
   │  ├─ chat.js
   │  ├─ database.js
   │  ├─ email.js
   │  ├─ session.js
   │  ├─ sessiondb.js
   │  └─ timetable.js
   ├─ findIDPW           # ID/PW 찾기
   │  ├─ index.html
   ├─ home               # 메인 페이지
   │  ├─ home.html
   │  └─ profile              # 내 프로필
   │     ├─ profile.html
   │     ├─ purchaseHistory   # 판매내역
   │     │  ├─ purchase.html
   │     ├─ salesHistory      # 구매내역
   │     │  ├─ sales.html
   │     ├─ wishlist          # 관심목록
   │     │  ├─ wishlist.html
   │     ├─ faq               # FAQ
   │     │  ├─ faq.html
   │     └─ timetable    # 내 시간표 저장
   │        ├─ timetable.html
   ├─ js                 # JavaScript 유틸리티 스크립트 
   ├─ json               # JSON 데이터 파일들
   │  ├─ deptData.json
   │  ├─ slang.json
   ├─ login              # 로그인 페이지
   │  ├─ index.html
   ├─ map                # 맛집 지도
   │  ├─ index.html
   │  ├─ lottery.html    # 식사 메뉴 추천 룰렛
   │  └─ navigation      # 사용자 위치 추적
   │     ├─ navigation.html
   │     └─ nodelist.json
   ├─ notification       # 알림
   │  ├─ index.html
   ├─ pict               # 사진 및 이미지 파일들
   │  ├─ bar
   │  ├─ category
   │  ├─ chkbox
   │  ├─ icons
   │  ├─ map
   │  └─ profile
   ├─ pwa                # PWA 변환 관련 파일
   │  ├─ cache.json
   │  └─ manifest.json
   ├─ register           # 회원가입
   │  ├─ index.html
   │  ├─ status.html     # 이메일 인증 상태
   │  └─ verify_email    # 이메일 인증
   │     ├─ index.html
   ├─ rmt_checklist      # 룸메이트 체크리스트
   │  ├─ index.html
   ├─ rmt_matching       # 룸메이트 매칭 게시판
   │  ├─ index.html
   ├─ router             # 라우팅 관련 스크립트 (이 디렉토리 전체 제거)
   ├─ slang.csv          # 슬랭 단어 데이터
   ├─ uploads            # 업로드한 사진 파일
   ├─ package.json       # Node.js 패키지 설정 파일
   ├─ package-lock.json  # Node.js 패키지 잠금 파일
   ├─ node_modules       # 설치된 Node.js 모듈들
   └─ service_worker.js  # PWA 서비스 워커 파일
```

<br>

---

<br>

### 4. 설치 및 사용 방법

> **IOS**
<table>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/a8038c69-ab61-473d-9474-fb835893ff0c" alt="Iphone_process" width="400">
    </td>
    <td>
      1. https://p-bud.duckdns.org 링크로 접속하기<br>
      2. 하단에 있는 공유 버튼 클릭하기<br>
      3. "홈 화면에 추가" 선택<br>
      4. 다운로드 완료 !<br>
      <br>
      <img src="https://github.com/user-attachments/assets/61ecf333-63ec-45c2-b844-424ebe4d4776" width=200>
    </td>
  </tr>
</table>
<br>

> **Android**
<table>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/4f33a8a3-3e70-4fc7-b00b-35bb3d322371" alt="Android_process" width="400">
    </td>
    <td>
      1. https://p-bud.duckdns.org 링크로 접속하기<br>
      2. 오른쪽 상단 더보기 버튼 클릭하기<br>
      3. "홈 화면에 추가" 선택<br>
      4. 다운로드 완료 !<br>
      <br>
      <img src="https://github.com/user-attachments/assets/bc55a4c1-e2d4-4b7b-b2a1-8bd6e8666fc4" width=200>
    </td>
  </tr>
</table>

<br>

---

<br>

### 5. 소개 및 시연 영상

[<img width="700px" alt="소개 및 시연영상" src="https://github.com/user-attachments/assets/785768a8-9821-4e9f-947a-6b9934590f10" />](https://youtu.be/350R6k2Sd9Q?si=tn_4dlyI9ikdQEDy)

<br>

### 6. 팀 소개
| 김진목 | 박혜린 | 여채언 | 이유민 | 이유진 |
|:-------:|:-------:|:-------:|:-------:|:-------:|
|<img width="100px" alt="1" src="https://avatars.githubusercontent.com/u/67642811?v=4" /> | <img width="100px" alt="2" src="https://avatars.githubusercontent.com/u/79072462?v=4" /> | <img width="100px" alt="3" src="https://avatars.githubusercontent.com/u/108869351?v=4" /> | <img width="100px" alt="4" src="https://avatars.githubusercontent.com/u/102662177?v=4" /> | <img width="100px" alt="5" src="https://avatars.githubusercontent.com/u/133668870?v=4" /> |
| truetree@pusan.ac.kr | hyerin010140@pusan.ac.kr | codjs2659@pusan.ac.kr | wint123@pusan.ac.kr | pustraw0454@naver.com |
| 정보컴퓨터공학과 <br/> 백엔드, 보안 | 언어정보학과 <br/> 기획, 디자인 |  정보컴퓨터공학과 <br/> 백엔드 | 정보컴퓨터공학과 <br/> 프론트엔드, 디자인 | 정보컴퓨터공학과 <br/> 벡엔드, DB | 

<br>

---

<br>

### 7. 해커톤 참여 후기
- 김진목
  > 휴가를 나가 친구들의 제안서를 받았을 때, '괜찮은 아이디어인데?'라고 생각했고, 같이 하자는 제안에, '재밌겠는데?'라고 생각해 시작하게 되었다. 하지만 이 프로젝트에 기여하는 것이, 매 순간 순탄치는 않았다. 군인이라는 신분, 그로 인한 시간과 장소의 제약은 늘 저를 옥죄기만 했다. 하지만 지금의 결과물을 보니, 참여하기를 잘했구나! 하는 생각이 든다. 함께했기에 아름답게 마무리할 수 있었고, 우리였기에 빛나는 결과물이 나왔다고 생각한다. 다시금 이 기회를 준 친구들에게 감사하다고 전하고싶다!
- 박혜린
  > 가벼운 마음으로 시작했다가 큰코다쳤다. 나에게 코딩은 고등학생 때 배워 본 파이썬과 대학교 진학 후 수강한 정보화 교양이 다였고, 소프트웨어 개발은 말할 것도 없이 거리가 먼 단어였기 때문에 내가 이런 대회에 참가할 일이 있을 것이라고는 생각지도 못했다. 그런 내가 처음에 느낀 것은 스스로에 대한 무능함이었다. 그러나, 처음 보는 용어와 시스템에 질문도 많고 타 팀원과 의견과 시각, 작업 방식이 다르다는 점이 꼭 나쁘게 작용하지는 않았다. 나는 궁금증을 해결하고 새롭게 알게 된 사실에 좀 더 달리 사고할 수 있게 되었으며, 개발 전공 팀원들은 나를 통해 비전공자의 시각을 엿볼 수 있게 되었다. 단순 창업 아이디어 구상을 넘어서 소비자에게 실제로 어떻게 하면 더 다가갈 수 있을지, 소비자는 어떤 서비스를 원하는지 등을 궁리하고 플랫폼 론칭 시뮬레이션이 아닌, 말 그대로 현실 세계로의 실현을 목표로 함은 어쩌면 편협했을지도 모르는 나의 세계관을 조금 더 균형 있게 만들어 주었다. 그리고 프로젝트의 기초 단계인 문제 인식 과정에서, 생각보다 나를 포함하여 일반 대중들은 어느 정도의 불편함에 굴복하며 살아가고 있다는 사실을 실감했다. 무던해진 불편함의 감각 속에서 그대로 유영하지 않고 바닥을 디디고 서서 나아갈 수 있는 적극적인 계기를 마련해  주심에, 학생들의 무한한 발전을 지지해 주심에, 마지막으로 좋은 인연 그리고 새로운 시작을 조우할 수 있게 해 주심에 이 대회가 개최되는 데에 힘써 주신 모든 분들께 감사드린다.
- 여채언
  > 사람들의 진정한 니즈를 파악하고, 그들의 삶을 실질적으로 개선할 무언가를 만들어낸다는 것이 얼마나 많은 고민과 도전이 필요한 일인지 뼈저리게 느꼈다. 사람들의 기대를 충족시키는 것은 단순한 목표를 넘어서, 그 이상의 의미와 무게를 지니고 있으며, 그것이 얼마나 어려운 일인지 깨달았다. 이번 해커톤은 나에게 단순한 개발 프로젝트가 주는 기술적 지식 이상의 가르침을 주었다. 해결되지 않는 문제를 끝까지 해결하는 끈기, 더 나은 팀워크와 소통 방식, 그리고 개발자가 아닌 사용자 관점에서 생각하는 능력 등 값진 교훈을 얻으며 성장할 수 있는 기회가 되었다. 
- 이유민
  > 프로젝트 과정에서는 수많은 시행착오와 예상치 못한 난관들이 있었다. 처음엔 무작정 회피하고 싶은 마음만 계속 들었지만 좌절하기보다는 문제의 본질을 파악하고, 해결책을 모색해 보며 한층 더 성장할 수 있었다. 이러한 문제 해결은 단순한 기술적 성장 뿐만 아니라, 팀워크와 끈기의 중요성을 다시금 깨닫게 해 주었다. 더불어, 문제를 해결해 나가면서 스스로의 한계를 뛰어넘고, 불확실성과 마주하는 용기를 키우며 내면적으로도 크게 성장할 수 있었다.
- 이유진
  > 이번 프로젝트는 그동안 주로 개인이나 소수 인원으로 진행하던 것과는 정말 다른 경험이었다. 다양한 사람들과의 협업은 단순한 인원 확대가 아닌, 서로의 시야를 넓히고 깊이 있는 소통을 통해 새로운 가능성을 탐구하는 값진 시간이었다. 특히, 평소 접하기 어려웠던 비전공자와의 협업은 나의 시야를 확장시키며, 개발자로서 보기 고려해보기 어려운 그런 사용자 관점과 지식을 흡수할 소중한 기회였다.
