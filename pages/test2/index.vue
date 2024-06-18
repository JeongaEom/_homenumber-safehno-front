<script setup>
import { reactive, onMounted, onBeforeUnmount, computed } from "vue";

const app = useAppStore();
const config = useRuntimeConfig();

definePageMeta({
  name: "test2"
});

let encData;
let sign;

if (config.public.nuxtEnv === "development") {
  // 개발
  encData =
    "hwv20LKTVWwp7psOB9zU087dM95jyS%2FSCHPkBhzX9QqxNfXbqb2ooUXOlOWfbm%2B%2F1gbcWMepnImVRdprtXGSVuIbF2V94E7TKAgzKTU9nr0uSO%2F%2BL3SxXAeYuyjB2DdMVZNnQXK%2FqMM1P0LSOwom5MtJvewofJ6MpqweGwozhJzzvFYEEqsVnVf4rx5gO7jb";
  sign = "%2BpBFaJGorBNQNIjgNLKoI7KtF8Te1nWLQBhM4XJyFWY%3D";
} else if (config.public.nuxtEnv === "production") {
  // 운영
  encData =
    "w2NvaZw5zRAe0xhMmM%2FHt70JJaQefd4rNAmEhStSniHGfI18shUItuwx5yFRdwYv5%2FgNTLkPQnNN1%2FmpC%2Fx0rr%2BmxiSAk9ir1yhT0rjQchoynmhfDOgTkshiHe1AzL6vZTWCMvJLHt1hn3dP7Met9PDUqY%2F5glbFdIARNJnZXFsmRJMCMna6AMcqCpEr4taM";
  sign = "cGZbP5PyFIt5XRiCLrgG0n2iMIksW6q1a5DhzIVLtQ8%3D";
} else {
  // 로컬
  encData =
    "RhZYBIpYHRDtx7yK1yW65mnOrdWORSeVGBKJQZVXn6k%2B5VneLPA4XiLwW0aCoFjUsO8JOtuzvotZc0eTD39va%2BAxE5LMfpR8SRpFVe%2FoP6855OO6%2BTsDNG5t7s1MG%2BBuueyYs04nQjxE%2Bu57KBNxPRV%2BfuEot4StqpVMnlZKqvU%3D";
  // encData = "hwv20LKTVWwp7psOB9zU0yRo9kk1d%2FdypG8whQue0JZXvx5b8OxQomR2jExx8wxHljt5mf3acCkCAnOyHL9uhYA1sZKr8QBhB8iv5n9jYMBpM%2BojlamZRmroICrNm%2BlBgcCDOslzSEMmQeA7OwXXGRGQCjGx6TWjgjTWJjEG27xKTnvpBcOKgHHc752iyefJh0ZzLWQNLpV7vDPm0pL1yg%3D%3D" // 롯데
  sign = "mIuaVxqPxpMog88hCzdEISZ5HFpKEZIgwSw7LR6rWJQ%3D";
  // sign = "cKDtfdGKK1tdup3l7sLjagphaQdGq4U1Fc1blcfVL6c%3D" // 롯데
}

const d = reactive({
  text: "홈넘버표준창 테스트",
  tokenIssuId: "240411132224EX7G",
  encData: encData,
  sign: sign,
  result: null
});

const url = `${app.link()}?tokenIssuId=${d.tokenIssuId}&encData=${d.encData}&sign=${d.sign}`;
console.log("link: ", app.link());
console.log("url: ", url);

if (import.meta.env.MODE === "development") {
  console.log("test2_개발 환경입니다.");
} else if (import.meta.env.MODE === "production") {
  console.log("test2_운영 환경입니다.");
} else {
  console.log("test2_로컬 환경입니다.");
}

console.log("import.meta.env.MODE_test2: ", import.meta.env.MODE);

const eventClick1 = () => {
  const width = 480;
  const height = 820;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;
  const windowFeatures = `width=${width},height=${height},top=${top},left=${left}`;

  window.open(url, "_blank", windowFeatures);
};

const eventClick2 = () => {
  window.open(url);
};

const CB_MESSAGE = (e) => {
  const { data } = e;
  if (data.msg === "SAFE_HNO_SUCCESS") {
    console.log("SAFE_HNO_SUCCESS 👇");
    console.log(data);
    d.result = data;
  } else if (data.msg === "SAFE_HNO_CLOSE") {
    console.log("SAFE_HNO_CLOSE 👇");
    console.log(data);
    d.result = data;
  }
};

onMounted(() => {
  console.log("encData: ", d.encData);
  console.log("sign: ", d.sign);
  // POSTMESSAGE 대기
  window.addEventListener("message", CB_MESSAGE);
  // console.log("uEnvMode - ", uEnvMode());
  console.log("config.public.nuxtEnv: ", config.public.nuxtEnv);
});

onBeforeUnmount(() => {
  // POSTMESSAGE 대기 해제
  window.removeEventListener("message", CB_MESSAGE);
});
</script>

<template>
  <TitleTop :text="d.text" />
  <section>
    <div class="contents">
      <button class="popup-call-btn" @click="eventClick1">
        홈넘버표준창 팝업
      </button>
      <br />
      <button class="popup-call-btn" @click="eventClick2">
        홈넘버표준창 모바일
      </button>
    </div>
    <br />
    <div class="iframe">
      <ul>
        <li>
          <iframe :src="url" width="480" height="820" frameborder="0" />
        </li>
        <li>
          <div v-if="d.result" class="result-wrap">
            <div class="result-title">Post Message 수신 성공</div>
            <div class="result">
              <div v-for="(val, key) in d.result" class="result-item">
                {{ `${key}: ${val}` }}
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
body {
  width: auto;
  height: auto;
}
section {
  height: 82vh;
  height: 82dvh;
  overflow: auto;
}
section > .contents {
  height: auto;
}
</style>

<style lang="scss" scoped>
.popup-call-btn {
  display: block;
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
}

.result-wrap {
  border: solid 1px black;
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
  padding: 30px;
}

.result-title {
  margin-bottom: 30px;
  font-size: 25px;
  text-align: center;
  font-weight: bold;
}

.result {
  margin-top: 20px;
  .result-item {
    margin-top: 15px;
    font-size: 18px;
    word-wrap: break-word;
  }
}

.iframe {
  ul {
    display: flex;
  }
}
</style>
