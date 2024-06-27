<script setup>
import { ref, onMounted } from "vue";

// 페이지 메타 설정
definePageMeta({
  layout: "default-none",
  name: "terms-personal"
});

const jsonData = {
  terms:
    "개인정보보호법에 따라 홈넘버 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.\n\n1. 수집의 목적\n- 부정 이용방지 및 비인가 사용방지, 서비스 이용에 따른 본인 식별, 가입의사 확인, 연령제한 서비스 이용, 고지사항 불만처리 등 각종 고지/통지를 목적으로 개인정보를 처리합니다.\n\n2. 수집하는 개인 정보의 항목 \n가) \t홈페이지 회원 가입 및 관리\n- 필수항목: 아이디, 비밀번호, 이메일\n\n나) \t본인인증\n- 이름, 성별, 생년월일, 휴대폰번호, 통신사업자, 내/외국인 여부, 암호화된 이용자 확인 값(CI)\n\n3. 개인정보 보유 및 이용 기간\n- 동의 철회 시 또는 법정 의무 보유기간까지\n\n4. 동의 거부권 및 거부 시 불이익\n- 개인정보 수집 및 이용에 대해서는 거부할 수 있으나 필수 수집 항목에 대한 동의 거부 시 회원 가입이 제한됩니다."
};
const htmlContent = ref("");

const closeSections = (html, sections) => {
  if (sections.inBigTitleSection) {
    html += `</div>`;
    sections.inBigTitleSection = false;
  }
  if (sections.inRegularSection) {
    html += `</div>`;
    sections.inRegularSection = false;
  }
  if (sections.inIndent2Section) {
    html += `</div>`;
    sections.inIndent2Section = false;
  }
  return html;
};

const handleBigTitle = (line, html, sections) => {
  html = closeSections(html, sections);
  html += `<p class="big-title">${line}</p><div>`;
  sections.inBigTitleSection = true;
  return html;
};

const handleIndent2 = (line, html, sections) => {
  if (sections.inIndent2Section) {
    html += `</div>`;
    sections.inIndent2Section = false;
  }
  html += `<div class="indent2"><p>${line}</p>`;
  sections.inIndent2Section = true;
  return html;
};

const handleRegular = (line, html, sections) => {
  if (!sections.inRegularSection) {
    html += `<div class="inners">`;
    sections.inRegularSection = true;
  }
  html += `<p>${line}</p>`;
  return html;
};

const jsonToHtml = (json) => {
  let html = "";
  let lines = json.terms.split("\n");
  let sections = {
    inBigTitleSection: false,
    inRegularSection: false,
    inIndent2Section: false
  };

  lines.forEach((line) => {
    if (line.trim() === "") return; // 빈 줄은 무시

    if (line.match(/^\d+\.\s/)) {
      html = handleBigTitle(line, html, sections);
    } else if (line.match(/^\s*[가-힣]\)/)) {
      html = handleIndent2(line, html, sections);
    } else {
      html = handleRegular(line, html, sections);
    }
  });

  html = closeSections(html, sections);
  return html;
};

onMounted(() => {
  htmlContent.value = jsonToHtml(jsonData);
});
</script>

<template>
  <div id="container">
    <div id="title">개인정보 수집 및 이용동의</div>
    <div id="content" v-html="htmlContent"></div>
  </div>
</template>

<style>
body {
  width: auto;
  height: auto;
  overflow-y: scroll;
  border: none;
}

#container {
  padding: 80px;
}

#container > #title {
  color: #212936;
  font-size: 24px;
  font-weight: bold;
}

#container > #content {
  color: #394150;
  font-size: 18px;
  line-height: 1.3;
  padding-right: 5px;
  white-space: pre-wrap;
}

#container > #content p {
  margin-left: 20px;
}

#container > #content .big-title {
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 5px;
}

#container > #content .indent1 {
  margin-left: 40px;
}

#container > #content .inners {
  padding-left: 30px;
  margin-top: 10px;
  margin-bottom: 20px;
}

#container > #content .indent2 > p:nth-child(1) {
  margin: 5px 0 10px 20px;
  padding-left: 20px;
  font-weight: bold;
}

#container > #content .indent2 > p:not(:nth-child(1)) {
  padding-left: 40px;
}
</style>
