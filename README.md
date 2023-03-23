# 23-react1
## 김동건
### 4주차(2023-03-23)
#### JSX의 역할
    -JSX는 내부적으로 XML/HTML 코드를 자바스크립트로 변홥합니다.
    -React가 createElement함수를 사용하여 자동으로 자바스크립트로 변환해 줍니다.
    -만일 js작업할 경우 직접 createElement함수를 사용해야 합니다
    -jsx는 가독성을 높여주는 역할을 합니다.

#### JSX의 장점
    -코드가 간결해집니다.
    -가독성이 향상됩니다.
    -Ingection Attack이라 불리는 해킹 방법을 방어함으로써 보안에 강합니다.

#### JSX 사용법
    -모든 자바스크립트 문접을 지원합니다.
    -자바스크립트 문법에 XML과 HTML을 섞어서 사용합니다.
    -만의 HTML이나 XML에 자바스크립트 코드를 사용하고 시으면 {}괄호를 사용합니다.

### 3주차(2023-03-16)
#### node.js 버전확인
    node -- version
    node -v

#### npm 버전확인
    npm -v

#### 리액트 개념 정리
    -복잡한 사이트를 쉽고 빠르게 만들고, 관리하기 위해 만들어진 것이 바로 리엑트
    -다른표현으로는 spa를 쉽고 빠르게 만들 수 있도록 해주는 도구라고 생각하면된다.

#### 리액트의 장점
    1. 빠른 업데이트와 렌더링 속도
    2. 컴포넌트 기반 구조
        -리엑트의 모든 페이지는 컴포넌트로 구성
        -하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구성할 수 있음
        -그래서 리액트로 개발을 하다 보면 레고 블록을 조립하는 것처럼 컴포넌트를 조합해서 웹사이트를 개발하게 됨
        -재사용성의 뛰어남
    3. 재사용성
        -반복적인 작업을 줄여주기 떄문에 생산성을 높여 줌
        -또한 유지보수가 용이
        -재사용이 가능 하려면 해당 모듈의 의존성이 없어야 함
    4. 든든한 지원군
        -메타에서 오픈소스 프로젝트로 관리하고 있어 계속 발전하고 있음
    5. 활발한 지식 공유 & 커뮤니티
    6. 모바일 앱 개발가능
        -리액트 네이티브라는 모바일 환경 UI프레임워크를 사용하면 크로스 플랫폼 모바일 앱을 개발할 수 있음
#### 리액트의 단점
    1. 방대한 학습량
        -자바스크립트를 공부한 경우 빠르게 학습할 수 있음
    2. 높은 상태 관리 복잡도