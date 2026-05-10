# 📍 주소 등록 API

> JavaScript + React + Node.js로 만든 풀스택 주소 관리 시스템

카카오 우편번호 검색 API를 활용한 실용적인 주소록 웹 애플리케이션입니다.

---

## 🛠 기술 스택

### 백엔드
- **Node.js** - 자바스크립트 런타임
- **Express** - 웹 서버 프레임워크
- **CORS** - 크로스 오리진 처리
- **UUID** - 고유 ID 생성
- **fs (File System)** - JSON 파일 영구 저장

### 프론트엔드
- **React 18** - UI 라이브러리 (Hooks 기반)
- **Axios** - HTTP 통신
- **Kakao Postcode API** - 우편번호/주소 검색
- **CSS3** - 그라데이션, 애니메이션, 반응형

---

## ✨ 주요 기능

### 📝 CRUD 전체 구현
- ✅ **Create** - 주소 등록
- ✅ **Read** - 주소 목록 조회
- ✅ **Update** - 주소 수정
- ✅ **Delete** - 주소 삭제

### 🔍 카카오 우편번호 검색
- 실제 도로명 주소 자동 입력
- 우편번호 5자리 자동 채움
- 무료 API 사용 (회원가입 불필요)

### 💾 영구 저장
- JSON 파일 기반 데이터 저장
- 서버 재시작해도 데이터 유지

### 🎨 사용자 경험
- 🎯 등록/수정 모드 자동 전환
- ⚠️ 삭제 전 확인 다이얼로그
- 🌈 그라데이션 헤더
- ✨ 부드러운 호버/포커스 효과
- 📱 모바일 반응형 디자인
- 🎬 등장 애니메이션

---

## 📁 프로젝트 구조

```
address-api/
├── backend/                    # 백엔드 서버
│   ├── server.js              # 메인 서버 코드 (Express)
│   ├── package.json
│   ├── addresses.json         # 데이터 저장 파일 (자동 생성)
│   └── .gitignore
│
└── frontend/                   # React 프론트엔드
    ├── public/
    │   └── index.html         # 카카오 스크립트 포함
    ├── src/
    │   ├── App.js             # 메인 컴포넌트
    │   ├── App.css            # 스타일시트
    │   └── index.js
    └── package.json
```

---

## 🚀 실행 방법

### 사전 준비
- Node.js (v16 이상) 설치 필요
- npm 또는 yarn

### 1) 저장소 클론

```bash
git clone https://github.com/사용자명/address-api.git
cd address-api
```

### 2) 백엔드 실행

```bash
cd backend
npm install
node server.js
```
> 서버가 http://localhost:5000 에서 실행됩니다.

### 3) 프론트엔드 실행 (새 터미널)

```bash
cd frontend
npm install
npm start
```
> 자동으로 브라우저가 열리며 http://localhost:3000 에서 접속됩니다.

---

## 📡 API 명세

### Base URL
```
http://localhost:5000/api/addresses
```

### 엔드포인트

| 메서드 | 경로 | 설명 |
|--------|------|------|
| GET | `/` | 전체 주소 조회 |
| GET | `/:id` | 특정 주소 조회 |
| POST | `/` | 주소 등록 |
| PUT | `/:id` | 주소 수정 |
| DELETE | `/:id` | 주소 삭제 |

### 요청 예시 (POST)

```json
{
  "name": "홍길동",
  "phone": "010-1234-5678",
  "zipCode": "06236",
  "address": "서울특별시 강남구 테헤란로 152",
  "detailAddress": "강남파이낸스센터 10층"
}
```

### 응답 예시

```json
{
  "success": true,
  "message": "주소가 등록되었습니다.",
  "data": {
    "id": "abc-123-...",
    "name": "홍길동",
    "phone": "010-1234-5678",
    "zipCode": "06236",
    "address": "서울특별시 강남구 테헤란로 152",
    "detailAddress": "강남파이낸스센터 10층"
  }
}
```

---

## 📚 학습 포인트

이 프로젝트를 통해 배운 내용:

### 백엔드
- ✅ Express로 REST API 서버 구축
- ✅ HTTP 메서드 (GET/POST/PUT/DELETE) 활용
- ✅ 미들웨어 개념 (CORS, body-parser)
- ✅ 라우팅 및 URL 파라미터 처리
- ✅ 요청 검증 및 에러 처리
- ✅ 파일 시스템(fs)을 활용한 데이터 영구 저장

### 프론트엔드
- ✅ React Hooks (useState, useEffect)
- ✅ 제어 컴포넌트로 폼 다루기
- ✅ 조건부 렌더링 (삼항 연산자, &&)
- ✅ 리스트 렌더링 (map, key)
- ✅ 이벤트 핸들러 작성
- ✅ Axios로 비동기 통신
- ✅ async/await와 try/catch 에러 처리

### 통합
- ✅ 백엔드-프론트엔드 연동
- ✅ CORS 정책 이해 및 해결
- ✅ 외부 API 연동 (카카오 우편번호)
- ✅ CSS로 모던한 UI 디자인

---

## 🎯 향후 개선 계획

- [ ] MongoDB 또는 MySQL로 데이터베이스 업그레이드
- [ ] 사용자 인증 (JWT) 추가
- [ ] 검색 / 필터 / 정렬 기능
- [ ] 페이지네이션
- [ ] TypeScript 마이그레이션
- [ ] 컴포넌트 분리 및 재사용성 개선
- [ ] 테스트 코드 작성 (Jest)
- [ ] Vercel / Render에 배포

---

## 🚨 트러블슈팅

### CORS 에러가 발생할 때
백엔드 `server.js`에 다음이 있는지 확인:
```javascript
const cors = require('cors');
app.use(cors());
```

### `req.body`가 undefined일 때
미들웨어 등록 확인:
```javascript
app.use(express.json());
```

### 포트 충돌 시
`server.js`에서 PORT 번호 변경 또는 기존 프로세스 종료

---

## 📝 라이선스

이 프로젝트는 학습 목적으로 만들어졌습니다.

---

## 🙋‍♂️ 만든 사람

- GitHub: [@사용자명](https://github.com/사용자명)

---

## 🌟 참고 자료

- [Express 공식 문서](https://expressjs.com/)
- [React 공식 문서](https://react.dev/)
- [카카오 우편번호 서비스](https://postcode.map.daum.net/guide)
- [Axios 공식 문서](https://axios-http.com/)

---

⭐ 도움이 되셨다면 Star를 눌러주세요!
