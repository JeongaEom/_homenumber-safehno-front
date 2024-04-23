# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## npm을 사용하는 경우 종속성 트리 오류를 해결할 수 없는 ERESOLVE가 발생

package.json에 아래와 같이 추가

```bash
# package.json
{
  "name": "nuxt-app",
  "private": true,
  "scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "postinstall": "nuxt prepare"
 },
  "dependencies": {
    "@pinia/nuxt": "^0.4.11",
    "nuxt": "^3.6.5",
    "pinia": "^2.1.4",
 },
  "devDependencies": {
    //생략
 },
  "overrides": {
    "vue": "latest"  //npm으로 사용할 경우 추가
 },
}
```

## Nuxt3 package.json 명령어 간략 설명

```bash
npm run build
npm run dev
npm run generate
npm run preview
npm run postinstall
```

- **build** : 애플리케이션 빌드 - 소스 코드 번들로 패키징하고 최적화된 정적파일 생성
- **dev** : 개발 모드에서 애플리케이션 실행하는 데 사용, 소스코드가 실시간으로 변경될 때마다 자동으로 다시 빌드
- **generate** : 정적 사이트 생성(SSG)을 위해 애플리케이션을 빌드하는 데 사용
- **preview** : 정적 사이트 생성 시 미리 보기 기능을 제공 - generate 명령어로 생성된 정적 파일을 로컬 서버에서 미리 확인
- **postinstall** : 이 명령어는 Nuxt와 관련된 의존성 패키지를 설치하고 프로젝트를 미리 설정하는 데 사용 / 주로 npm install 명령어 후에 자동으로 실행되며, 일반적으로 필요한 환경 설정이나 추가적인 작업을 수행하기 위해 사용될 수 있음
