# 🍿 Movie Mate – Movie Finder

`Movie Mate`는 JavaScript, HTML, CSS만으로 구현한 영화 검색 프로젝트입니다.
TMDB API 대신 직접 정의한 영화 배열 데이터를 기반으로 **검색, 필터링, 상세 조회** 기능을 구현했습니다.

## 🔧 사용 기술

- HTML / CSS / JavaScript (Vanilla JS)
- GSAP (애니메이션)
- Bootstrap (레이아웃)
- Chart.js (막대 그래프)

## 💡 프로젝트 목표

- API 없이도 배열 데이터를 활용한 실전 로직 구현
- JavaScript 기반의 검색 및 필터링 로직 학습
- 간단한 UI 구성 + 사용자 경험 고려한 화면 전환

## ✨ 주요 기능

- 영화 키워드로 검색 (부분 일치)
- 영화 카드 UI에 제목, 줄거리, 포스터 표시
- 클릭 시 상세 페이지로 이동 (URL 쿼리 기반)
- 상세 페이지에서 Chart.js로 평점 시각화
- GSAP 애니메이션, 반응형 UI 구성

## 📁 폴더 구조

├── index.html # 메인 페이지 (검색창) 
├── list.html # 검색 결과 페이지 
├── detail.html # 상세 정보 페이지 
├── introduce.html # 자기 소개 
├── js/ 
│ ├── index.js # 메인 애니메이션 및 폼 리셋 
│ ├── list.js # 검색 로직 및 카드 출력 
│ ├── detail.js # 상세 정보 출력 + 차트 
│ ├── introduce.js # 카드 뒤집기 애니메이션 
│ └── movieData.js # 영화 하드코딩 데이터 
└── css/ 
└── style.css 등 # 스타일 정의 

## 🎥 실행 방법

1. 이 레포를 클론합니다:
   git clone https://github.com/Haleychoioi/SeSAC_Project_Movie-finder.git
   cd SeSAC_Project_Movie-finder
2. `index.html`을 브라우저에서 열어 실행합니다.

## 🧠 배운 점

- 배열 기반 필터링 로직 (`filter`, `includes`)
- 쿼리 스트링으로 페이지 간 데이터 전달하기
- innerHTML을 활용한 동적 DOM 구성
- Chart.js로 간단한 데이터 시각화 구현
- 처음부터 UI, 로직, 구성 모두 내 손으로 만든 경험!

## 😅 아쉬운 점 & 개선 방향

- 실제 TMDB API 연동해보기 (fetch, async/await)
- 검색어 자동완성 기능 추가
- 스타일 통일성 및 컴포넌트화 도전 예정

## 🙋‍♀️ 만든 사람

**최 아름 Areum Choi**
Front-End Developer & ICT Engineering Student @ SeoulTech
📍 Seoul, Korea
