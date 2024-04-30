import { mergeProps, useSSRContext, reactive, computed, watch } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { u as useEndDataStore, _ as __nuxt_component_1 } from "./completed-Dy6r2TBn.js";
import "hookable";
import "vue-router";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
import "../server.mjs";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "ufo";
import "radix3";
import "@vue/devtools-api";
const _sfc_main$1 = {
  __name: "TitleSignup",
  __ssrInlineRender: true,
  props: {
    text: { type: String, default: "" }
  },
  setup(__props) {
    const p = __props;
    const d = {
      topList: [
        { nb: "01", title: "이용약관 동의" },
        { nb: "02", title: "회원정보 입력" },
        { nb: "03", title: "가입 완료" }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "title-sign" }, _attrs))} data-v-cb5ffa9e><div data-v-cb5ffa9e><ul data-v-cb5ffa9e><!--[-->`);
      ssrRenderList(d.topList, (item) => {
        _push(`<li class="${ssrRenderClass({
          active: p.text === item.nb,
          next: p.text > item.nb
        })}" data-v-cb5ffa9e><div class="next-title" data-v-cb5ffa9e><div class="basic" data-v-cb5ffa9e>${ssrInterpolate(item.nb)}</div><div class="text-title" data-v-cb5ffa9e>${ssrInterpolate(item.title)}</div></div></li>`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TitleSignup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-cb5ffa9e"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useEndDataStore();
    const d = reactive({
      text: "01",
      all: "0",
      dataList: [
        {
          id: "1",
          toptitle: "서비스 이용 약관",
          type: "필수",
          name: "개인정보 제3자 제공 동의",
          data: `
          <div id="checkText">
            <p>회사는 원칙적으로 이용자 동의 없이 개인정보를 외부에 제공하지 않습니다.</p>
            <br/>
            <div class="box">
              <p>이용자 동의 후 개인정보 제공이 발생하는 경우</p>
              <br/>
              <p> 1) 이용자가 서비스 이용을 위해 직접 자신의 개인정보를 제3자에게 제공하는 것에 대해 동의한 경우이며, 회사는 이용자에게 '개인정보를 제공받는 자,</p>
            </div>
          </div>
        `,
          checked: false
        },
        {
          id: "2",
          toptitle: "개인정보 수집 및 이용동의",
          type: "선택",
          name: "개인정보 제3자 제공 동의2",
          data: `
          <div id="checkText">
            <p>회사는 원칙적으로 이용자 동의 없이 개인정보를 외부에 제공하지 않습니다.</p>
            <br/>
            <div class="box">
              <p>이용자 동의 후 개인정보 제공이 발생하는 경우</p>
              <br/>
              <p> 1) 이용자가 서비스 이용을 위해 직접 자신의 개인정보를 제3자에게 제공하는 것에 대해 동의한 경우이며, 회사는 이용자에게 '개인정보를 제공받는 자,</p>
            </div>
          </div>
        `,
          checked: false
        }
      ],
      isActive: "",
      completed: false
    });
    const titleText = computed(() => d.text === "01" ? "이용약관 동의" : "회원정보 입력");
    const btnText = computed(() => d.text === "01" ? "다음" : "확인");
    const allRequiredChecked = computed(() => {
      return d.dataList.filter((item) => item.type === "필수").every((item) => item.checked);
    });
    watch(allRequiredChecked, (newVal) => {
      d.isActive = newVal;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TitleSignup = __nuxt_component_0;
      const _component_completed = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_TitleSignup, {
        text: d.text
      }, null, _parent));
      if (d.text !== "03") {
        _push(`<div class="subs-title" data-v-b101be62><div data-v-b101be62>${ssrInterpolate(titleText.value)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!d.completed) {
        _push(`<section data-v-b101be62><div class="contents" data-v-b101be62>`);
        if (d.text === "01") {
          _push(`<div data-v-b101be62><div data-v-b101be62><input type="checkbox"${ssrRenderAttr("id", `checkbox-${d.all}`)} class="custom-checkbox"${ssrIncludeBooleanAttr(Array.isArray(d.all) ? ssrLooseContain(d.all, null) : d.all) ? " checked" : ""} data-v-b101be62><label${ssrRenderAttr("for", `checkbox-${d.all}`)} data-v-b101be62> 모두 확인, 동의합니다. </label></div><!--[-->`);
          ssrRenderList(d.dataList, (item) => {
            _push(`<div class="terms" data-v-b101be62><div class="t-title" data-v-b101be62>${ssrInterpolate(item.toptitle)}</div><div class="textDatas" data-v-b101be62><div class="inner" data-v-b101be62>${item.data ?? ""}</div></div><input type="checkbox"${ssrRenderAttr("id", `checkbox-${item.id}`)} class="custom-checkbox"${ssrIncludeBooleanAttr(Array.isArray(item.checked) ? ssrLooseContain(item.checked, null) : item.checked) ? " checked" : ""} data-v-b101be62><label${ssrRenderAttr("for", `checkbox-${item.id}`)} data-v-b101be62><span class="${ssrRenderClass(item.type === "필수" ? "essential" : "select")}" data-v-b101be62> [${ssrInterpolate(item.type)}]  </span> ${ssrInterpolate(item.name)}</label></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        if (d.text === "02") {
          _push(`<div data-v-b101be62><div class="inputDatas" data-v-b101be62><div class="inner" data-v-b101be62><ul data-v-b101be62><li data-v-b101be62><div class="input-text" data-v-b101be62>아이디</div><div data-v-b101be62><ul data-v-b101be62><li data-v-b101be62><div data-v-b101be62><input type="text" placeholder="아이디" data-v-b101be62></div><div data-v-b101be62><button class="bg-w line" data-v-b101be62> 중복확인 </button></div></li></ul></div></li><li data-v-b101be62><div class="input-text" data-v-b101be62>비밀번호 <span data-v-b101be62>*</span></div><div data-v-b101be62><input type="text" placeholder="비밀번호" data-v-b101be62></div></li><li data-v-b101be62><div class="input-text" data-v-b101be62>비밀번호 확인 <span data-v-b101be62>*</span></div><div data-v-b101be62><input type="text" placeholder="비밀번호 확인" data-v-b101be62></div></li><li data-v-b101be62><div class="input-text" data-v-b101be62>이메일 <span data-v-b101be62>*</span></div><div data-v-b101be62><input type="text" placeholder="이메일" data-v-b101be62></div></li></ul></div></div><button class="bg-w line-hp" data-v-b101be62> 휴대폰 본인 인증 </button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><button class="${ssrRenderClass(d.isActive ? "red-active" : "default")}" data-v-b101be62>${ssrInterpolate(btnText.value)}</button></section>`);
      } else {
        _push(`<!---->`);
      }
      if (d.completed) {
        _push(`<section data-v-b101be62>`);
        _push(ssrRenderComponent(_component_completed, null, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signup/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b101be62"]]);
export {
  index as default
};
//# sourceMappingURL=index-j6CnWu7t.js.map
