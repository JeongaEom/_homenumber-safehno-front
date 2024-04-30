import { _ as __nuxt_component_0 } from './TitleTop-BZQ2BT_Y.mjs';
import { useSSRContext, reactive, unref } from 'vue';
import { useRouter } from 'vue-router';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { f as formaNb } from './index-DsWc4Nk_.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAABZCAYAAABsbDn0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVFSURBVHgB7ZzPbxtFFMffrJ0ageQcqERR7VzsA4n7B2BzRFC4l3AAqRK0f0DI39HQOz8kJE6BOwTEkQTuDeHgHsi6NIj2EDutmtq70/e2u2tnf9i7692ZXXs+UuTd8cbOfPPmvfn1hoFAHjeb1fMStE0GLfypawAtzvgq56zKAKrOcxygzxjvA2c63p4yDoca/pgGHNa63R4IgkHG9N5qtvFLrpsa/xArW4M5wc86NMESa7f2d/cAMiQTcR5ca9QNEzZRjFuTFpEBOlrZgTaEO1lYVKrikJVwBtt42QbBoEi7aYuUijhkKabBvgQJonhJU6S5xTneaGwLaD6xQUe/s/bX/TswB4nFIWvhBvsG/1MtyC86G8KNpFakQQL+aTVuGwb7JefCEHVzBX7V15u3IAGxLYeaEePsCygYSZpZLHH0jcZd/JaPoKCQs1476m5FfT6yOEUXxiGOQJHEWRRhHKIKNNMh26F6YYQh0CI2rXrNYKo4FJWK6HyjQPWaFcVCm5U1PsJwnbfOXZrQ6B970++F9YNCLcc04cdFFoaw6rcC34a9HyiO7Wfmnl4oAtSRxQFzoOvwNSt7EPkHLBFhzctnOTheWkgHPA1qXnwF7nrLL4hjDSYxzMFy0qb5qMmC8uSNaKsp19dKV/Z+eyPs/ZPr7/430o8NEIQ9UXfDuXctZ8mtxqHdazbdQOSKI8PXzLIKkVbjUh4byFgcxjugAFwyuu1cW+JYjmhJ+jWzoMjlOGbNLll2X3MBWmejV6dZSZvuNM8GHHIGNq0P6FWzo5REcc7MoPLRyUPxznhMnZauNTZkG6DwQWv6Gi3qg8IH6aJxJU4wHGrkkFchjwzOZPocClXXNJwvrINEjIf/BoogO4rhl1c12jgECh8ozqq26FOhSSFdEq2VLwvSxeGDgRmnXCQazZ+CRMJEMAd92Q65r1m7NhU+0OecarjydwoKH4yDTj7nEBQ+cOTQ17Bx6SCRUYhvMSQ7ZGtjOO0MB4nk1SGTLuWKAQdPJQZ03u+bxsnJKKgcJEKpBNZysL7R+FPNIY+hFILaUff9lzbD2c+gcDHtIGWJg85HujiVzjuV1zY/frXS6VRAMpR0Qq/uLovj9eaRjEHoCi4JX/7u+8ulK2+WnDID548f3fz00VDGoh56mfpR9226cF0xqvUVSMArDEH3VA4SoCwc59oVh5X5DyAYakpeYRyo/JVO5xIIhpJK3Gvn4uq9+9QZzDS5y0u5VitNe79Uq5dBILQFd3ID04UeDjrmubJM4mL0eqOpD5z2hfqcSaux7idv7LRAYdbzbP/350EdQILKn+z9dA6C8FoN4esbayW+JXKO5/+bnzz2CkT3VA4C8VoNEbgPmXZX2ruchIHO+VL5aq00eqAb5/v7z0Eg5E6w1ez4ysN+obfeLEI+VRq4/RovoUNOVuKfy55CzRorf3043gPoJVQcCu1oVkKjl2ioftNSHKdOVqC5fS06vIuC6kX1m/oMRGDR8q0Yhe0I+VZLl6kXVRj72egUXaA4wtjPx0NGHygNwvoyU38HEkAZbhgGt4uwCcEK1zDb+QYx14kElLCW57lnmguGIXyW9ESCuc+yyGMzs9a5cfIubjPyktopKJQ7kYfEEvQt+zCCrVycgjKJTJEsUQB20jyNKbOTlyyRKNkkQ5/kNB+0lN3cn7wUhJVk8TK3opXGKJ/RsS+4lISftVfIM7vCIIuiHfO0AZr2P2Mlq/gX1HERbdV72hsO+mhrTB9X2O7hMz1au6al69e7XbWfSKFQKBQKhUKhUCgUCoVCoVCkyAu0r0GLhNgAnwAAAABJRU5ErkJggg==";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKiSURBVHgBrVVNTxNhEJ55WT6UhJBsvNhtwh0PXutJT3jQpBeqx5XAD6D8AOEHELxrwl6tHkz0gCc8FTjpQfRKsrstpG5iCFErdMaZBZTW3S20fZJ2m3ffPvP9DEIGoiia+PmbFgxzAQDzDOCcvTpE4F1m3OCx8Q3Hvh6kcWDSYRhGecTWGgNOG4SXzLRFZO06jh0TBUGkhvLGtEoEfAfAVGF0fDXL0F/4tf2FoNbYkU9ZI4BLIKhF5bDW+BruN+azL9YbS2G9sR1EkQNXRBiG+aB2sBPUD5YgzfNeyTuN/BeJ5lxD7If8opFTR3/EXEa/EKksHfLcse3uReqCXC7nI5sKNI+enVmMYoswQGhzaEb0KRHQDDNvQQ94ODvnFovuVOe5bduHwFRpNmneIPJ9IK7AFaHk8linYbN5t+hOdr5Hy6rqjBgdJgDLTyIpzrq3H5TmlpPOZULX9DcxeR/eeN877/DJry+I6GiRJ84ntI1EvCIwm8jw9KKR4mN3Ss+lKSZlwpffvfZWEnyLiw0MeZRihLmbN3KQmAbXlUZbjz1CWLEMeURCzjAlvntvX3lPIAPKLVIj0hIk978QeEIUk2gk1DIflZyBP3Ull3mQx6GRQvjGwHTaxYtGNC3yvXd0zPegCyxrzJEafBbuoaoMWiHr8j8jvHcs5ElF7USrRSUmft82FDBAxIos0mN0KCSnuzoUMCCoKku0VZWeUy3i40XpktK5QPWDeFkxzMPo0Gr7C5HYsP5tux8jSq6p8cOUxRNvph6NnJPrJsy+qJHobkjbTB3Q5tCcp3mesvRDWfrDZUZTUKUdHqKKZVm+fbYvhNRpnsA0EhWI4ZH2O43gYtI+QciKJp7GkRk0qJJ+S45OWxnRlz/6JMavjZoXsTyn4A8B36tG4Ti1gwAAAABJRU5ErkJggg==";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJeSURBVHgBtZW/b9NQEMfvnDolVZqENEwkXZIlaZhAQu0GEipiYaIqQoil/QMSIzZUUGbTjghFSJUYEEwgkCr+AAp7aIe6A5hIUULU5lejNrYf76w4QtROnSb5DPb5Pft779353SH0oZpIBFpetooM5wFZDBhGaZwB1BHgBze3sANbUUX57aSBdoPFdDxm6LjOzXlwAXf4TuiAbOfolIOfc/FVNDDLJwIwAN1dybFdJe/o4FcqLvFwZGEIGLIXszv7svUsWIa58iHFCdJQk4mV3jNdKOa6jl8GDYsTFC6ek1uUE3MHTB885v0gLSbChml3/5hvMAamOpAUuPginBP/0vKUGJv1OM23J2CFQnQbzikeepYLRTbfRIRA0PY8MYQFgSdkzknEm74iBjPStN144PGTINlHHz+0jHqNOUhEJ5ySi8GgEHm9GRH80+bqautyg+4UEmu88eplvbYhN8GZmCd7KSzZTh0fM3ZY0y/cuOmbvHptEr1eMIpFnULiCc8I7c+fWge5tQacAaqp+HeriNnhv7fsCz3PXSTbaDYYrVzb2zsp3b3zB87APA9cXO33UvP92/bh2tMDsklcL5W08sP7VXABT3DBI0XCUX4yFvq9eLJT0IxyRROTKbHy6EFVr5QNcANCHqnmH4mwC2OA94rrwoyi1Lm9DSOGekSvFgkelqGEwIjoFjuzZJsOLhf2VWoWMCJIy+puvX5AnQjZ8E5I49+udqqGULPgW5TG0jItqIRTj+AfLYEL+Kq/ggYZV03/f0dUzrnAooGQtnbF7ypfMh3QbZ8G+e6faMtf6DTsOYu82q4AAAAASUVORK5CYII=";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const d = reactive({
      text: "\uD648\uB118\uBC84",
      selectedHomeNb: "",
      list: [
        // (임시)
        {
          homeNb: "10010001004",
          info: "\uD68C\uC0AC",
          name: "\uD64D\uAE38\uB3D9",
          hp: "01012345678",
          addressNb: "06735",
          address: "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC11C\uCD08\uAD6C \uAC15\uB0A8\uB300\uB85C 241",
          address1: "9\uCE35"
        },
        {
          homeNb: "10010001005",
          info: "\uD68C\uC0AC2",
          name: "\uD64D\uAE38\uC790",
          hp: "01012345678",
          addressNb: "06735",
          address: "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC11C\uCD08\uAD6C \uAC15\uB0A8\uB300\uB85C 241"
        }
      ],
      // list: [],
      isActive: false
    });
    const formatName = (name) => {
      if (name.length < 2) {
        return name;
      }
      return name.substring(0, 1) + "*" + name.substring(2);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TitleTop = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_TitleTop, {
        text: d.text
      }, null, _parent));
      _push(`<section data-v-56d75df0><div class="top" data-v-56d75df0><button class="bg-w line-active" data-v-56d75df0>\uD648\uB118\uBC84\uB85C \uC870\uD68C</button><button class="bg-w line-active" data-v-56d75df0>\uD648\uB118\uBC84 \uCD94\uAC00</button></div><div class="contents" data-v-56d75df0>`);
      if (d.list.length === 0) {
        _push(`<div class="notData" data-v-56d75df0><img${ssrRenderAttr("src", _imports_0)} alt="\uD648\uB118\uBC84 \uB370\uC774\uD130 \uC5C6\uC74C" data-v-56d75df0><p data-v-56d75df0>\uB4F1\uB85D\uB41C \uD648\uB118\uBC84\uAC00</p><p data-v-56d75df0>\uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p></div>`);
      } else {
        _push(`<div class="dataList" data-v-56d75df0><ul data-v-56d75df0><!--[-->`);
        ssrRenderList(d.list, (item) => {
          _push(`<li data-v-56d75df0><div class="${ssrRenderClass(item.homeNb === d.selectedHomeNb ? "active-line" : "default-line")}" data-v-56d75df0><ul data-v-56d75df0><li data-v-56d75df0><div data-v-56d75df0>${ssrInterpolate(unref(formaNb)(item.homeNb))}</div><div data-v-56d75df0>${ssrInterpolate(item.info)}</div></li><li data-v-56d75df0><div data-v-56d75df0>${ssrInterpolate(formatName(item.name))}</div><div data-v-56d75df0>${ssrInterpolate(unref(formaNb)(item.hp))}</div></li><li data-v-56d75df0><div data-v-56d75df0>${ssrInterpolate(item.addressNb)}</div><div data-v-56d75df0><div data-v-56d75df0>${ssrInterpolate(item.address)}</div>`);
          if (item.address1) {
            _push(`<div data-v-56d75df0>${ssrInterpolate(item.address1)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></li></ul><ul data-v-56d75df0><li data-v-56d75df0><div class="${ssrRenderClass(item.homeNb === d.selectedHomeNb ? "red-active" : "default")}" data-v-56d75df0> \uC120\uD0DD <span data-v-56d75df0>`);
          if (item.homeNb !== d.selectedHomeNb) {
            _push(`<img${ssrRenderAttr("src", _imports_1)} alt="\uBBF8\uC120\uD0DD" data-v-56d75df0>`);
          } else {
            _push(`<!---->`);
          }
          if (item.homeNb === d.selectedHomeNb) {
            _push(`<img${ssrRenderAttr("src", _imports_2)} alt="\uC120\uD0DD" data-v-56d75df0>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</span></div></li><li data-v-56d75df0><button data-v-56d75df0>\uC218\uC815</button></li></ul></div></li>`);
        });
        _push(`<!--]--></ul></div>`);
      }
      _push(`</div>`);
      if (d.list.length > 0) {
        _push(`<button class="${ssrRenderClass(d.isActive ? "red-active" : "default")}" data-v-56d75df0> \uB2E4\uC74C </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/homnumberList/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-56d75df0"]]);

export { index as default };
//# sourceMappingURL=index-6NU0HJWW.mjs.map
