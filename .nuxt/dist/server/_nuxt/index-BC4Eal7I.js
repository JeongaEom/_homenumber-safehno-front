import { _ as __nuxt_component_0 } from "./TitleTop-BZQ2BT_Y.js";
import { reactive, useSSRContext } from "vue";
import "hookable";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "vue-router";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const d = reactive({
      text: "개인정보 제3자 제공 동의",
      isActive: false,
      dataList: [
        {
          id: "1",
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
        `
        }
      ],
      modelValue: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TitleTop = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_TitleTop, {
        text: d.text
      }, null, _parent));
      _push(`<section data-v-72260043><div class="contents" data-v-72260043><!--[-->`);
      ssrRenderList(d.dataList, (item) => {
        _push(`<div data-v-72260043><input type="checkbox"${ssrRenderAttr("id", `checkbox-${item.id}`)} class="custom-checkbox"${ssrIncludeBooleanAttr(Array.isArray(d.modelValue) ? ssrLooseContain(d.modelValue, null) : d.modelValue) ? " checked" : ""} data-v-72260043><label${ssrRenderAttr("for", `checkbox-${item.id}`)} data-v-72260043><span class="${ssrRenderClass(item.type === "필수" ? "essential" : "select")}" data-v-72260043> [${ssrInterpolate(item.type)}]  </span> ${ssrInterpolate(item.name)}</label><div class="textDatas" data-v-72260043><div class="inner" data-v-72260043>${item.data ?? ""}</div></div></div>`);
      });
      _push(`<!--]--><div data-v-72260043><ul data-v-72260043><li data-v-72260043><div data-v-72260043>제공받는 자</div><div data-v-72260043>(주) 우리홈쇼핑</div></li><li data-v-72260043><div data-v-72260043>제공 목적</div><div data-v-72260043>보안택배</div></li><li data-v-72260043><div data-v-72260043>제공 항목</div><div data-v-72260043>홈넘버, 가상 홈넘버, 이름, 휴대폰 번호, 주소</div></li><li data-v-72260043><div data-v-72260043>보유 및 이용기간</div><div data-v-72260043>배송완료 시 또는 법정 의무 보유 기간까지</div></li><li data-v-72260043><div data-v-72260043>거부권 및 불이익</div><div data-v-72260043>이용자는 동의를 거부 할 수 있으나, 동의를 거부하 실 경우 서비스 이용이 제한됩니다.</div></li></ul></div></div><button class="${ssrRenderClass(d.isActive ? "red-active" : "default")}" data-v-72260043> 확인 </button></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/personalInformation/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-72260043"]]);
export {
  index as default
};
//# sourceMappingURL=index-BC4Eal7I.js.map
