import api from './api';

const stream = weex.requireModule('stream');
const modal = weex.requireModule('modal');

const timeout = 10000;

function errToast() {
  modal.toast({
    message: '网络错误',
    duration: 0.8
  });
}

export default {
  get(url, params, cb) {
    let obj = {
      method: 'get',
      type: 'json',
      timeout: timeout,
      url: api[url]
    };
    if (params instanceof Function) {
      cb = params;
    } else {
      if (typeof params === 'string') {
        obj.url = api[url] + '/' + params;
      } else {
        let str = '';
        for (let key in params) {
          str += `&${key}=${params[key]}`;
        }
        obj.url = api[url] + '?' + str.substr(1);
      }
    }
    stream.fetch(obj, res => {
      let data = res.data;
      if (res.ok) {
        cb(data);
      } else {
        errToast();
      }
    });
  },
  delete(url, params, cb) {
    let obj = {
      method: 'delete',
      type: 'json',
      timeout: timeout,
      url: api[url]
    };
    if (params instanceof Function) {
      cb = params;
    } else {
      if (typeof params === 'string') {
        obj.url = api[url] + '/' + params;
      } else {
        let str = '';
        for (let key in params) {
          str += `&${key}=${params[key]}`;
        }
        obj.url = api[url] + '?' + str.substr(1);
      }
    }
    stream.fetch(obj, res => {
      let data = res.data;
      if (res.ok) {
        cb(data);
      } else {
        errToast();
      }
    });
  },
  post(url, params, cb) {
    let obj = {
      method: 'post',
      type: 'json',
      timeout: timeout,
      url: api[url]
    };
    if (params instanceof Function) {
      cb = params;
    } else {
      obj.body = JSON.stringify(params);
    }
    stream.fetch(obj, res => {
      let data = res.data;
      if (res.ok) {
        cb(data);
      } else {
        errToast();
      }
    });
  },
  put(url, params, cb) {
    let obj = {
      method: 'put',
      type: 'json',
      timeout: timeout,
      url: api[url]
    };
    if (params instanceof Function) {
      cb = params;
    } else {
      obj.body = JSON.stringify(params);
    }
    stream.fetch(obj, res => {
      let data = res.data;
      if (res.ok) {
        cb(data);
      } else {
        errToast();
      }
    });
  }
};
