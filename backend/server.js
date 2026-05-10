const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

// 미들웨어 설정
app.use(cors());
app.use(express.json());

// 데이터 파일 경로
const DATA_FILE = path.join(__dirname, 'addresses.json');


// 파일에서 데이터 불러오기
const loadAddresses = () => {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error('파일 읽기 실패:', error);
    return [];
  }
};

//파일에 데이터 저장하기
const saveAddresses = () => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(addresses, null, 2));
  } catch (error) {
    console.error('파일 쓰기 실패:', error);
  }
};

// 메모리 저장소 (그냥 배열) // 시작할 때 파일에서 불러오기 (없으면 빈 배열)
let addresses = loadAddresses();

// 1. 전체 조회 (GET)
app.get('/api/addresses', (req, res) => {
  res.json({
    success: true,
    count: addresses.length,
    data: addresses
  });
})

// 2. 단건 조회 (GET with id)
app.get('/api/addresses/:id', (req, res) => {
  const { id } = req.params;
  const found = addresses.find(addr => addr, id === id); //find 조건에 맞는 첫 번째 요소 찾기

  if (!found) {
    return res.status(404).json({
      success: false,
      message: '주소를 찾을 수 없습니다.❌'
    });
  }

  res.json({ success: true, data: found });
})

// 3. 등록 (post)
app.post('/api/addresses', (req, res) => {
  //테스트
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      success: false,
      message: '요청 본문이 비어있습니다.'
    });
  }

  const { name, phone, zipCode, address } = req.body;

  // 간단한 검증
  if (!name || !phone || !zipCode || !address) {
    return res.status(400).json({
      success: false,
      message: '모든 필드를 입력해 주세요.✍️'
    })
  }

  const newAddress = {
    id: uuidv4(),
    name,
    phone,
    zipCode,
    address,
    detailAddress: req.body.detailAddress || ''
  };

  addresses.push(newAddress); //push: 배열 끝에 추가
  saveAddresses();

  res.status(201).json({
    success: true,
    message: '주소가 등록되었습니다.🏠',
    data: newAddress
  });
});

// 4. 수정(put)
app.put('/api/addresses/:id', (req, res) => {
  const { id } = req.params;
  const index = addresses.findIndex(addr => addr.id === id); //findIndex 조건에 맞는 위치(번호) 찾기 없으면 -1

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message:'주소를 찾을 수 없습니다.❌'
    })
  }

  addresses[index] = { ...addresses[index], ...req.body, id };
  saveAddresses();
  // ... 스프레드 연산자
  // ...addresses[index] 기존 데이터를 펼침
  // ..req.body 새 데이터를 펼침(같은 키는 덮어씀)
  // id 마지막에 id는 변경 안되도록 다시 고정
  // 비유 : 기존 카드 위에 새 정보 스티커를 덧붙이는 느낌
  // http 상태 코드 (노션메모)
  // return을 쓰는 이유 (노션메모)

  res.json({
    success: true,
    message: '수정되었습니다.✅',
    data: addresses[index]
  })
})

app.delete('/api/addresses/:id', (req, res) => {
  const { id } = req.params;
  const index = addresses.findIndex(addr => addr.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: '주소를 찾을 수 없습니다.❌'
    })
  }

  addresses.splice(index, 1); //splice 특정 위치에서 n개 삭제 (index 위치에서 1개 삭제)
  saveAddresses();

  res.json({
    success: true,
    message: '삭제되었습니다.'
  })
})

app.listen(PORT, () => {
  console.log(`서버 실행: http://localhost:${PORT}`);
})

