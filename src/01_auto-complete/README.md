# 01 Auto Complete Input

## 구조

입력 필드와 동적으로 제안 목록을 표시하도록 구성.

Rdix Popover 컴포넌트를 활용해 제안 목록을 팝오버 형태로 띄움.

```
AutoCompleteInput
├── <input />
└── SuggestionPanel (Compound Component)
    ├── SuggestionPanel.Loading
    └── SuggestionPanel.List
```

## 특징

### 1. 디바운스 검색 요청 (debounce)

useMemo로 검색 함수를 debounce 처리해, 입력 시 과도한 API 호출을 방지.

검색어가 변경된 후 200ms 내에 추가 입력이 없을 때만 API 요청 실행

### 2. 조건 기반 렌더링

isLoading 여부에 따라 로딩 스피너와 결과 목록을 조건부로 렌더링

### 3. 사용자 입력 상태 관리

입력 상태는 useState로 관리되며, 선택 시 자동으로 입력 필드에 반영

### 4. Compound Component 패턴

구성 요소 명확화 및 네임스페이스 제공 (SuggestionPanel.List, .Loading)

## 개선 요소

- keyboard navigation 지원

- 검색 결과 캐싱 (동일한 검색어 반복 요청 방지)
