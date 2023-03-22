const env = import.meta.env.VITE_ENV;

// 请求地址
function getBaseUrl() {
  let BASE_URL = ''; // 请求域名
  switch (env) {
    case 'development':
    case 'test':
      // 测试环境
      BASE_URL = 'https://fengweiyun.iyuetiao.com/system-api';
      break;
    default:
      // 生产环境
      BASE_URL = 'https://fwy-prod.iyuetiao.com/system-api';
      break;
  }
  return BASE_URL;

}
export const BASE_URL = getBaseUrl();