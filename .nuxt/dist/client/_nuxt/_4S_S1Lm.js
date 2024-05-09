import{_ as p}from"./DfEfJCPp.js";import{r as u,c as d,a as x,b as t,F as o,l as h,n as l,s as m,o as i,j as f,R as b,t as n,g as k}from"./CsdGuURO.js";import{_ as V}from"./DlAUqK2U.js";const C={class:"contents"},y=["id"],T=["for"],g={class:"textDatas"},L=["innerHTML"],A=m("<div data-v-72260043><ul data-v-72260043><li data-v-72260043><div data-v-72260043>제공받는 자</div><div data-v-72260043>(주) 우리홈쇼핑</div></li><li data-v-72260043><div data-v-72260043>제공 목적</div><div data-v-72260043>보안택배</div></li><li data-v-72260043><div data-v-72260043>제공 항목</div><div data-v-72260043>홈넘버, 가상 홈넘버, 이름, 휴대폰 번호, 주소</div></li><li data-v-72260043><div data-v-72260043>보유 및 이용기간</div><div data-v-72260043>배송완료 시 또는 법정 의무 보유 기간까지</div></li><li data-v-72260043><div data-v-72260043>거부권 및 불이익</div><div data-v-72260043>이용자는 동의를 거부 할 수 있으나, 동의를 거부하 실 경우 서비스 이용이 제한됩니다.</div></li></ul></div>",1),N={__name:"index",setup(w){const a=u({text:"개인정보 제3자 제공 동의",isActive:!1,dataList:[{id:"1",type:"필수",name:"개인정보 제3자 제공 동의",data:`
          <div id="checkText">
            <p>회사는 원칙적으로 이용자 동의 없이 개인정보를 외부에 제공하지 않습니다.</p>
            <br/>
            <div class="box">
              <p>이용자 동의 후 개인정보 제공이 발생하는 경우</p>
              <br/>
              <p> 1) 이용자가 서비스 이용을 위해 직접 자신의 개인정보를 제3자에게 제공하는 것에 대해 동의한 경우이며, 회사는 이용자에게 '개인정보를 제공받는 자,</p>
            </div>
          </div>
        `}],modelValue:!1}),c=()=>{a.modelValue?a.isActive=!0:a.isActive=!1},v=()=>{window.close()};return(B,s)=>{const r=p;return i(),d(o,null,[x(r,{text:a.text},null,8,["text"]),t("section",null,[t("div",C,[(i(!0),d(o,null,h(a.dataList,e=>(i(),d("div",{key:a.id},[f(t("input",{type:"checkbox",id:`checkbox-${e.id}`,class:"custom-checkbox","onUpdate:modelValue":s[0]||(s[0]=_=>a.modelValue=_),onChange:c},null,40,y),[[b,a.modelValue]]),t("label",{for:`checkbox-${e.id}`},[t("span",{class:l(e.type==="필수"?"essential":"select")}," ["+n(e.type)+"]  ",3),k(" "+n(e.name),1)],8,T),t("div",g,[t("div",{class:"inner",innerHTML:e.data},null,8,L)])]))),128)),A]),t("button",{class:l(a.isActive?"red-active":"default"),onClick:v}," 확인 ",2)])],64)}}},H=V(N,[["__scopeId","data-v-72260043"]]);export{H as default};
