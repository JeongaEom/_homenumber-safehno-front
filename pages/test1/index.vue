<script setup>
import { reactive, onMounted, onBeforeUnmount, computed } from "vue";

const app = useAppStore();
const config = useRuntimeConfig();

definePageMeta({
  name: "test1"
});

let tokenIssuId;
let encData;
let sign;

if (import.meta.env.MODE === "development") {
  // 개발
  tokenIssuId = "240411132224EX7G";
  encData =
    "hwv20LKTVWwp7psOB9zU087dM95jyS%2FSCHPkBhzX9QqxNfXbqb2ooUXOlOWfbm%2B%2F1gbcWMepnImVRdprtXGSVuIbF2V94E7TKAgzKTU9nr0uSO%2F%2BL3SxXAeYuyjB2DdMVZNnQXK%2FqMM1P0LSOwom5MtJvewofJ6MpqweGwozhJzzvFYEEqsVnVf4rx5gO7jb";
  sign = "%2BpBFaJGorBNQNIjgNLKoI7KtF8Te1nWLQBhM4XJyFWY%3D";
} else if (import.meta.env.MODE === "production") {
  // 운영
  tokenIssuId = "240614113611GEE4";
  encData =
    "w2NvaZw5zRAe0xhMmM%2FHtyXG%2BH6%2BJPYrOsfSXNzdI4C72LK1u0oNGZ7TDo3H4WOAiFyOa6Q0lbKDJ3ZBvcQniC2H6jWvdg1DC0e3gUhv3VXZzLAM2VI2XZ0kQpwyWdY6wBbK192M5IA8oTTG84fFVRItetq7kFeOr5Es5YF5WaU%2BDnJi%2B1SvzJk%2F3Ha1IyAu";
  sign = "cNSpWm%2BniURRUzp6EaRL%2BREUMUX7DTNZqJzt6Llmarg%3D";
} else {
  // 로컬
  tokenIssuId = "240411132224EX7G";
  encData =
    "RhZYBIpYHRDtx7yK1yW65mnOrdWORSeVGBKJQZVXn6k%2B5VneLPA4XiLwW0aCoFjUsO8JOtuzvotZc0eTD39va%2BAxE5LMfpR8SRpFVe%2FoP6855OO6%2BTsDNG5t7s1MG%2BBuueyYs04nQjxE%2Bu57KBNxPRV%2BfuEot4StqpVMnlZKqvU%3D";
  sign = "mIuaVxqPxpMog88hCzdEISZ5HFpKEZIgwSw7LR6rWJQ%3D";
}

const d = reactive({
  text: "홈넘버표준창 테스트",
  tokenIssuId: tokenIssuId,
  encData: encData,
  sign: sign,
  // satk: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdGRwQ3VzdElkIjoiMTAwMDAwMDEiLCJtYmVyTm0iOiLquYDssKwiLCJhcHBpZCI6IlNBRkVITk8iLCJtYmVySWQiOiJ4cGVydDkxIiwibWJlckVtYWlsIjoieHBlcnQ5MUBnbWFpbC5jb20iLCJtYmVyTW9ibHBob25ObyI6IjAxMDQwOTM3MzAzIiwiZXhwRGF0ZSI6IjIwMjQtMDctMDEgMTQ6MTQ6NTguNDYwIiwiaWF0IjoxNzE5ODEwMjk4LCJleHAiOjE3MTk4MTA4OTh9.kIuVrwlI23jKZ248elRJHJxUo97rFrmLAwoXcRcoPCE",
  satk: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdGRwQ3VzdElkIjoiMTAwMDAwMDEiLCJtYmVyTm0iOiLquYDssKwiLCJhcHBpZCI6IlNBRkVITk8iLCJtYmVySWQiOiJ4cGVydDkxIiwibWJlckVtYWlsIjoieHBlcnQ5MUBnbWFpbC5jb20iLCJtYmVyTW9ibHBob25ObyI6IjAxMDQwOTM3MzAzIiwiZXhwRGF0ZSI6IjIwMjQtMDctMDEgMTg6NTE6MTEuNjUyIiwiaWF0IjoxNzE5ODI1NjcxLCJleHAiOjE3MTk4Mjc0NzF9.X_yK7LJdktXzJyLX_y9ECOIsJeBWgtUknm5G3tZTNb0",
  result: null
});

const url = `${app.link()}?tokenIssuId=${d.tokenIssuId}&encData=${d.encData}&sign=${d.sign}&satk=${d.satk}`;
console.log("link: ", app.link());
console.log("url: ", url);

if (import.meta.env.MODE === "development") {
  console.log("test1_개발 환경입니다.");
} else if (import.meta.env.MODE === "production") {
  console.log("test1_운영 환경입니다.");
} else {
  console.log("test1_로컬 환경입니다.");
}
console.log("import.meta.env.MODE_test1: ", import.meta.env.MODE);
console.log("config.public.nuxtEnv_test1: ", config.public.nuxtEnv);

const eventClick = () => {
  const width = 480;
  const height = 820;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;
  const windowFeatures = `width=${width},height=${height},top=${top},left=${left}`;

  window.open(url, "_blank", windowFeatures);
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
      <button class="popup-call-btn" @click="eventClick">
        홈넘버표준창 팝업
      </button>
    </div>
    <br />
    <div class="iframe">
      <ul>
        <li>
          <!-- <iframe
            src="https://dev-safehno.homenumber.co.kr/?tokenIssuId=240411132224EX7G&encData=hwv20LKTVWwp7psOB9zU087dM95jyS%2FSCHPkBhzX9QqxNfXbqb2ooUXOlOWfbm%2B%2F1gbcWMepnImVRdprtXGSVuIbF2V94E7TKAgzKTU9nr0uSO%2F%2BL3SxXAeYuyjB2DdMVZNnQXK%2FqMM1P0LSOwom5MtJvewofJ6MpqweGwozhJzzvFYEEqsVnVf4rx5gO7jb&sign=%2BpBFaJGorBNQNIjgNLKoI7KtF8Te1nWLQBhM4XJyFWY%3D"
            width="480"
            height="820"
            frameborder="0"
          /> -->
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
    li {
      width: 50%;
    }
  }
}
</style>
