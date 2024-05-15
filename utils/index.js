// import router from "@/router";
import { useAppStore } from "@/stores/app";
import { commonHeaders } from "@/api";

export const formatNb = (Nb) => {
  if (Nb.length < 7) {
    // 문자열 길이가 7 미만인 경우 그대로 반환
    return Nb;
  }
  return `${Nb.substring(0, 3)}-${Nb.substring(3, 7)}-${Nb.substring(7)}`;
};

export const uExtractNumber = (str) => String(str).replace(/[^\d]+/g, "");

export const uNumberWithComma = (number) =>
  (Number(number) < 0 ? "-" : "") +
  uExtractNumber(number).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");

let currentKey = 0;
const MAX_KEYCOUNT_ROUTE = 900000000;
export const uGenKey = (prefix = null) => {
  if (currentKey > MAX_KEYCOUNT_ROUTE) {
    currentKey = 0;
  }
  return (prefix ? `${prefix}-` : null) + currentKey++;
};

export const uResetKey = () => {
  currentKey = 0;
};

export const uTimer = (update, endCallback, seconds) => {
  update(seconds);
  const timerId = setInterval(() => {
    --seconds;
    update(seconds);
    if (seconds < 1) {
      clearInterval(timerId);
      endCallback();
    }
  }, 1000);
  return timerId;
};

export const uGetCountDownText = (seconds) => {
  const min = String(Math.floor(seconds / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");
  return `${min}:${sec}`;
};

export const uRegexpr = (type, text) => {
  switch (type) {
    // 영문 혹은 숫자, 숫자로 시작 제외
    case "ID":
      return /^[A-Za-z][A-Za-z0-9]*$/.test(text);
    // 영문, 숫자, 특수문자 중 2가지 이상 조합 && 2자리 이상
    case "PW_MAIN":
      return /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{2,}$/.test(
        text
      );
    default:
      return false;
  }
};

// vars: array | object | var
export const uCheckValueDomain = (domain, vars) => {
  let isMatched = false;
  if (typeof vars === "object" && vars !== null) {
    vars = Object.values(vars);
  } else if (!Array.isArray(vars)) {
    vars = [vars];
  }
  for (const val of vars) {
    if (domain.includes(val)) {
      isMatched = true;
    }
  }
  return isMatched;
};

export const uGetProperty = (targetObj, keys) => {
  const obj = {};
  keys.forEach((key) => {
    if (targetObj[typeof key === "object" ? key[0] : key] !== undefined) {
      if (typeof key === "object") {
        obj[key[1]] = targetObj[key[0]];
      } else {
        obj[key] = targetObj[key];
      }
    }
  });
  return obj;
};

export const uIndexingProc = (list, keyProperty, options = {}) => {
  if (!list) return [[], {}];
  const { onLoop } = options;
  let keys = [];
  let items = {};
  list.forEach((item) => {
    const key = item[keyProperty];
    items[key] = item;
    keys.push(key);
    onLoop && onLoop(item, key);
  });
  return [keys, items];
};

export const uEnvMode = () => useRuntimeConfig().public.envMode;

export const uGetHtmlFromMd = (raw) => {
  // 정규식 패턴
  const pattern = /\[(\w+)\]\[([^\]]+)\]/g;
  // 정규식을 사용하여 [색상][타겟 텍스트]를 찾아내고 변환
  const transformedText = raw.replace(pattern, '<span class="$1">$2</span>');
  return transformedText;
};

export const uLogin = (acsTkn) => {
  const app = useAppStore();
  commonHeaders["Authorization"] = acsTkn;
  app.isLoggedIn = true;
};

export const uAddError = (priority, cb) => {
  const app = useAppStore();
  // 라우팅중인 경우
  if (app.isRouting) {
    // 등록된 에러가 없으면
    if (app.error === null) {
      app.error = [priority, cb];
    }
    // 등록된 에러가 있으면 우선순위를 비교해서 교체한다.
    else if (app.error[0] < priority) {
      app.error = [priority, cb];
    }
  } else {
    cb();
  }
};

export const uMakeTdButton = (text, onClick) => {
  return {
    button: {
      text,
      onClick,
      heightType: "h28",
    },
  };
};

export const uMakeSelectOptions = (list, textKey, valueKey, looper) => {
  return list.map((item) => {
    looper && looper(item);
    return {
      text: item[textKey],
      value: item[valueKey],
    };
  });
};

export const uIndBoxOpenClick = ({ currentTarget }, cb) => {
  const panel = usePanelStore();
  panel.indCb = cb;
  panel.isIndBoxOpen = true;
  currentTarget.classList.add("s-soft-hidden");
  document.querySelector("#ind-field").focus();
};

export const uModUrlQuery = (updateObj, force = false) => {
  console.log("📌📌📌📌", updateObj);
  const app = useAppStore();
  const modUrl = () => {
    const url = new URL(window.location.href);
    let searchParams = null;
    if (force) {
      searchParams = new URLSearchParams(updateObj);
    } else {
      searchParams = url.searchParams;
      for (const [key, value] of Object.entries(updateObj)) {
        if (value === null || value === undefined || value === "") {
          searchParams.delete(key);
        } else {
          searchParams.set(key, value);
        }
      }
    }
    url.search = searchParams.toString();
    history.replaceState(history.state, "", url.toString());
  };
  if (app.isRouting) {
    window.addEventListener("after.route-changed", modUrl, { once: true });
  } else {
    modUrl();
  }
};

// pure
const queryToObj = (targetKeys = [], uri = null) => {
  const urlString = uri ? window.location.origin + uri : window.location.href;
  const url = new URL(urlString);
  const searchParams = url.searchParams;
  const obj = {};
  searchParams.forEach((val, key) => {
    let modifier = null;
    let finder = (target) => {
      return targetKeys.some((key) => {
        if (Array.isArray(key)) {
          if (key[0] === target) {
            modifier = key[1];
            console.log(modifier);
            return true;
          }
        } else {
          return key === target;
        }
        return false;
      });
    };
    if (targetKeys.length === 0 || finder(key)) {
      const Nval = Number(val);
      if (val === "true") obj[key] = true;
      else if (val === "false") obj[key] = false;
      else if (!Number.isNaN(Nval))
        obj[key] = val.length !== String(Nval).length ? val : Nval;
      else obj[key] = val;
      // modifier가 정의된 키는 값을 통과시킨다.
      obj[key] = modifier ? modifier(obj[key]) : obj[key];
    }
  });
  console.log("queryToObj - ", obj);
  return obj;
};

export const uGetQuery = (name, type = undefined, fallbackValue = null) => {
  const queries = new URLSearchParams(window.location.search);
  const val = queries.get(name);
  if (!val) return fallbackValue;
  if (type === "number") return Number(val);
  return val;
};

// API 호출을 위해 pagination 자동 맵핑
export const uQueryToObj = (
  targetKeys = [],
  defaultPagination = true,
  uri = null
) => {
  if (defaultPagination)
    return { ...DEFAULT_PAGINATION, ...queryToObj(targetKeys, uri) };
  return queryToObj(targetKeys, uri);
};

// DEFAULT_PAGE_SIZE와 다른 경우는 defaultPageSize를 포함해서 받아야 한다.
export const uSetUrlQuery = (
  { pageNo, pageSize, defaultPageSize = null },
  filters = {},
  force = false
) => {
  const newQuery = {};
  console.log(pageNo);
  newQuery.pageNo = Number(pageNo) === 1 ? null : pageNo;
  newQuery.pageSize =
    defaultPageSize === null
      ? Number(pageSize) === DEFAULT_PAGE_SIZE
        ? null
        : pageSize
      : Number(pageSize) === defaultPageSize
        ? null
        : pageSize;
  Object.assign(newQuery, filters);
  Object.keys(newQuery).forEach((key) => {
    if (newQuery[key] === undefined) delete newQuery[key];
  });
  // console.clear();
  console.log("newQuery - ", newQuery);
  uModUrlQuery(newQuery, force);
};

export const uAlert = (...params) => useModalStore().alert(...params);

export const uModal = (setter, options = {}) =>
  useModalStore().open(setter, options);

export const uConfirm = (...params) => useModalStore().confirm(...params);

export const uGetPagination = (store, { pageSize, pageNo, totCnt }) => {
  store.pageSize = pageSize;
  store.pageNo = pageNo;
  store.dataCount = totCnt;
};

export const uChunkArray = (list, chunkSize, filler = null) => {
  const newArr = [];
  for (let i = 0; i < list.length; i += chunkSize) {
    const row = list.slice(i, i + chunkSize);
    if (filler && row.length < chunkSize) {
      while (row.length < chunkSize) {
        row.push(filler);
      }
    }
    newArr.push(row);
  }
  return newArr;
};

export const areArraysEqual = (a1, a2) =>
  JSON.stringify(a1) === JSON.stringify(a2);

export const uSanitizeObject = (targetObj, rules) => {
  const mod = (val, rule) => {
    if (rule === null) {
      for (const key of Object.keys(targetObj)) {
        if (targetObj[key] === val) delete targetObj[key];
      }
    }
  };
  if (Array.isArray(rules[0])) {
    for (const [val, rule] of rules) {
      mod(val, rule);
    }
  } else {
    mod(rules[0], rules[1]);
  }
};

export const uCommonResponse = (res, option = {}) => {
  if (res === false) return;
  res[1] &&
    uAlert(option.message || res[1], () => {
      if (option["reload"] === true) {
        location.reload();
      }
      if (option["ok"] && res[0] === 2000) {
        option["ok"](res);
      }
    });
  if (option["callback"]) {
    option["callback"](res);
  }
};

export const uOpenPostCodeSearch = (cb) => {
  // 팝업창 크기
  const width = 500;
  const height = 500;
  // 팝업창 위치
  const left = (document.documentElement.clientWidth - width) / 2;
  const top = (document.documentElement.clientHeight - height) / 2;

  new daum.Postcode({
    width,
    height,
    oncomplete: function (data) {
      cb(data.zonecode, data.roadAddress);
    },
  }).open({
    popupTitle: "우편번호 검색",
    left,
    top,
  });
};

// https://developer.mozilla.org/ko/docs/Glossary/Base64
export const uBase64Decode = (base64) => {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
};

export const uBase64Encode = (bytes) => {
  const binString = Array.from(bytes, (x) => String.fromCodePoint(x)).join("");
  return btoa(binString);
};
