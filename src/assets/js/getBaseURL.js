/*
 *  页面跳转拼接路径
 *  page: 页面(可携参'pageName=value')  pageName.html?param=value
 *  obj:  参数对象,以query方式拼接
 */

export default function(page, obj) {
  let params = '';
  let pageHtml = '';
  let pageJs = '';
  if (obj) {
    for (let key in obj) {
      let value = obj[key];
      params += `&${key}=${value}`;
    }
  }
  // page: pageName=value
  if (page.includes('=')) {
    let arr = page.split('=');
    pageHtml = `${arr[0]}.html?param=${arr[1]}`;
    if (obj) {
      pageHtml += params;
    }
  } else {
    pageHtml = `${page}.html`;
    if (obj) {
      pageHtml += `?${params.substr(1)}`;
    }
  }
  pageJs = pageHtml.replace('.html', '.js');

  let bundleUrl = weex.config.bundleUrl;
  // in Native
  let nativeBase;
  let isAndroidAssets =
    bundleUrl.indexOf('your_current_IP') >= 0 ||
    bundleUrl.indexOf('file://') >= 0;
  let isiOSAssets =
    bundleUrl.indexOf('file:///') >= 0 &&
    bundleUrl.indexOf('WeeXTemplate.app') > 0;
  if (isAndroidAssets) {
    nativeBase =
      bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1) + pageJs;
  } else if (isiOSAssets) {
    // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
    // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
    nativeBase =
      bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1) + pageJs;
  } else {
    let host = 'localhost:12580';
    // let matches = /\/\/([^\/]+?)\//.exec(weex.config.bundleUrl);
    let matches = /\/\/([^/]+?)\//.exec(weex.config.bundleUrl);
    if (matches && matches.length >= 2) {
      host = matches[1];
    }
    nativeBase = 'http://' + host + '/dist/views/' + pageJs;
  }

  let base = nativeBase;
  if (typeof window === 'object') {
    // in Browser or WebView
    base = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1) + pageHtml;
  }
  return base;
}
