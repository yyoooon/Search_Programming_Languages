# Search_Programming_Languages

상태기반 렌더링 컴포넌트를 이용한 바닐라 JS 프로젝트

출처: [프로그래머스 과제 연습 - 프로그래밍 언어 검색기](https://programmers.co.kr/skill_check_assignments/298) 

배포 링크: https://search-programming-languages.vercel.app/

</br>

## 구현 내용

### 언어 검색
<img width="40%" src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/3e170fff-88c6-4e42-a52a-6b5ec1daf8c3/%E1%84%8B%E1%85%A5%E1%86%AB%E1%84%8B%E1%85%A5%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A2%E1%86%A8.gif">

✅ 키보드를 통해 검색 키워드를 입력하면 input 아래에 입력한 검색어를 기준으로 언어 목록을 렌더링합니다. 추천 검색어는 아래 설명된 API를 통해 요청합니다.

✅ 화살표 위, 아래로 추천된 언어 목록을 순회할 수 있도록 합니다.

✅ 이 상태에서 엔터키를 누르는 경우, 아래 명시된 언어 선택 동작이 이루어지도록 합니다.

✅ 순회 시 첫번째 요소에서 화살표 위를 누르면 맨 끝으로, 맨 끝에서 화살표 아래를 누르면 맨 처음으로 와야 합니다.

✅ input 내 검색어를 모두 삭제할 경우, 추천 검색어 및 추천 검색어를 띄워준 창을 보이지 않게 합니다. 

</br>

### 언어 선택
<img width="40%" src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/6ffbf09a-4ae2-48b2-948c-886a3f140dbc/%E1%84%8B%E1%85%A5%E1%86%AB%E1%84%8B%E1%85%A5%E1%84%89%E1%85%A5%E1%86%AB%E1%84%90%E1%85%A2%E1%86%A8.gif">
✅ 언어 목록이 렌더링 된 상태에서 엔터키를 누르는 경우, 현재 선택처리된 언어를 alert으로 띄우고 아래에 제시된 동작을 합니다.  

✅ 언어 목록이 렌더링 된 상태에서 언어를 클릭한 경우, 해당 언어를 alert으로 띄우고 아래에 제시된 동작을 합니다.

</br>

### 선택된 언어 렌더링
<img width="40%" src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/d29b046a-9bad-4b3d-bced-a8bb1bb1b5f7/%E1%84%89%E1%85%A5%E1%86%AB%E1%84%90%E1%85%A2%E1%86%A8%E1%84%83%E1%85%AC%E1%86%AB%E1%84%8B%E1%85%A5%E1%86%AB%E1%84%8B%E1%85%A5.gif">

선택된 검색어를 alert으로 노출한 다음, 주어진 마크업을 참고하여 SelectedLanguage에 렌더링 합니다.  

✅ 이미 선택된 언어를 다시 검색하여 선택처리하여도 중복으로 들어가서는 안 됩니다.  

✅ 이미 선택된 언어를 다시 넣으면 순서상 맨 뒤로 들어가야 합니다.  

✅ 언어는 최대 다섯개까지 넣을 수 있으며, 다섯개를 초과하는 경우 가장 처음에 넣은 언어를 제거하고 넣습니다. (FIFO)

</br>

### 사용성 개선
✅ 화면에 접속하면 input에 focus가 자동으로 가도록 합니다.  

✅ 렌더링 된 추천 언어 목록 내에서 입력한 키워드와 일치하는 문자열에 대해서 Suggestion__item--matched 클래스를 사용하여 강조 처리를 합니다.

</br>

### API 사용 최적화
✅ 검색어를 입력하는 동안은 API 호출을 지연하고, 검색어 입력이 완료 되었다고 판단이 되는 경우 API를 호출하도록 최적화 처리를 합니다.  

✅ 검색어에 따른 API 응답을 캐시해서 사용합니다. 검색어 캐시의 경우, 브라우저를 닫았다 다시 켜면 초기화 되어야 합니다.

</br>

### 기타
✅ 화면을 닫았다 다시 켜도 선택된 언어 목록이 유지되도록 만듭니다.  

✅ 화면을 닫았다 다시 켜도 마지막 화면 상태가 모두 유지되도록 만듭니다.
