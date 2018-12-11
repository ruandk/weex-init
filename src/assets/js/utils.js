const storage = weex.requireModule('storage');

let utils = {
  isWeb() {
    const { platform } = weex.config.env;
    return typeof window === 'object' && platform.toLowerCase() === 'web';
  },
  isIOS() {
    const { platform } = weex.config.env;
    return platform.toLowerCase() === 'ios';
  },
  isAndroid() {
    let { platform } = weex.config.env;
    return platform.toLowerCase() === 'android';
  },
  isWeChat() {
    let { userAgent } = weex.config.env;
    return (
      userAgent.toLowerCase().match(/MicroMessenger/i) === 'micromessenger'
    );
  },
  setStorage(key, value, cb) {
    if (typeof value !== 'string') {
      value = JSON.stringify(value);
    }
    storage.setItem(key, value, cb);
  },
  getStorage(key, success, failed) {
    storage.getItem(key, e => {
      if (e.result === 'success') {
        let data = e.data;
        try {
          data = JSON.parse(data);
        } catch (err) {}
        success(data);
      } else {
        failed();
      }
    });
  },
  removeStorage(key, cb) {
    storage.removeItem(key, cb);
  },
  toParams(obj) {
    let param = '';
    for (const name in obj) {
      if (typeof obj[name] !== 'function') {
        param += '&' + name + '=' + encodeURI(obj[name]);
      }
    }
    return param.substring(1);
  },
  getUrlParam(key) {
    let reg = new RegExp('[?&#]' + key + '=([^&#]+)');
    let parameter = weex.config.bundleUrl.match(reg);
    if (parameter == null) {
      return null;
    }
    return parameter && parameter[1];
  }
};

export default utils;
