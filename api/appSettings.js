export const API_DEBUG = true;
export const API_HOST =
  import.meta.env.MODE === "build"
    ? "" :
  import.meta.env.MODE === "dev"
  //   ? "https://dev-metasafe-api.homenumbermeta.com/msafe/v1" :
  // import.meta.env.MODE === "json"
    ? "http://localhost:5000/safehno/v1/" :
    "";

// export const FE_DOMAIN =
//   import.meta.env.MODE === "build"
//     ? "https://www.homenumber.co.kr"
//     : import.meta.env.MODE === "production"
//     ? "http://dev-homenumber-hp.s3-website.ap-northeast-2.amazonaws.com"
//     : null;
