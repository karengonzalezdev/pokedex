import axios from "axios";
import { handleError, handleResponse } from "./ApiUtils";

const httpRequest = (method, url, request, headers) => {
  return axios({
    method,
    url,
    data: request,
    headers,
  })
    .then((res) => {
      const result = handleResponse(res);
      return Promise.resolve(result);
    })
    .catch((err) => {
      return Promise.reject(handleError(err));
    });
};

const get = (url, request, headers) => {
  let queryString = "";
  if (request && Object.keys(request).length > 0) {
    queryString += "?";
    let len = Object.keys(request).length,
      cnt = 0;

    for (let key in request) {
      cnt++;
      queryString += `${key}=${request[key].toString()}`;
      if (len > cnt) queryString += "&";
    }
  }
  return httpRequest("get", `${url}${queryString}`, request, headers);
};

const deleteRequest = (url, request, headers) => {
  return httpRequest("delete", url, request, headers);
};

const post = (url, request, headers) => {
  return httpRequest("post", url, request, headers);
};

const put = (url, request, headers) => {
  return httpRequest("put", url, request, headers);
};

const patch = (url, request, headers) => {
  return httpRequest("patch", url, request, headers);
};

const Api = {
  get,
  delete: deleteRequest,
  post,
  put,
  patch,
};

export default Api;