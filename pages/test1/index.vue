<script setup>
import { reactive, onMounted, onBeforeUnmount } from "vue";

const app = useAppStore();

definePageMeta({
  name: "test1"
});

const d = reactive({
  text: "홈넘버표준창 테스트",
  tokenIssuId: "240411132224EX7G",
  encData:
    uEnvMode() === "development"
      ? "hwv20LKTVWwp7psOB9zU087dM95jyS%2FSCHPkBhzX9QqxNfXbqb2ooUXOlOWfbm%2B%2F1gbcWMepnImVRdprtXGSVuIbF2V94E7TKAgzKTU9nr0uSO%2F%2BL3SxXAeYuyjB2DdMVZNnQXK%2FqMM1P0LSOwom5MtJvewofJ6MpqweGwozhJzzvFYEEqsVnVf4rx5gO7jb"
      : "RhZYBIpYHRDtx7yK1yW65mnOrdWORSeVGBKJQZVXn6k%2B5VneLPA4XiLwW0aCoFjUsO8JOtuzvotZc0eTD39va%2BAxE5LMfpR8SRpFVe%2FoP6855OO6%2BTsDNG5t7s1MG%2BBuueyYs04nQjxE%2Bu57KBNxPRV%2BfuEot4StqpVMnlZKqvU%3D",
  sign:
    uEnvMode() === "development"
      ? "%2BpBFaJGorBNQNIjgNLKoI7KtF8Te1nWLQBhM4XJyFWY%3D"
      : "mIuaVxqPxpMog88hCzdEISZ5HFpKEZIgwSw7LR6rWJQ%3D",
  result: null
});

const eventClick = () => {
  const width = 480;
  const height = 820;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;
  const windowFeatures = `width=${width},height=${height},top=${top},left=${left}`;
  const url = `${app.link()}?tokenIssuId=${d.tokenIssuId}&encData=${d.encData}&sign=${d.sign}`;

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
  console.log("uEnvMode - ", uEnvMode());
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
          <iframe
            src="https://dev-safehno.homenumber.co.kr/?tokenIssuId=240411132224EX7G&encData=hwv20LKTVWwp7psOB9zU087dM95jyS%2FSCHPkBhzX9QqxNfXbqb2ooUXOlOWfbm%2B%2F1gbcWMepnImVRdprtXGSVuIbF2V94E7TKAgzKTU9nr0uSO%2F%2BL3SxXAeYuyjB2DdMVZNnQXK%2FqMM1P0LSOwom5MtJvewofJ6MpqweGwozhJzzvFYEEqsVnVf4rx5gO7jb&sign=%2BpBFaJGorBNQNIjgNLKoI7KtF8Te1nWLQBhM4XJyFWY%3D"
            width="480"
            height="820"
            frameborder="0"
          />
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
