import APIResponse from "@/types/APIResponse";
import { hashObject } from "../Utils/Hasher";
import { delay } from "../Utils/Delay";

const baseURL = "http://localhost:3000";
const requestDelay = 100;

type fetchParameters = {
  [key: string]: string | string[];
};

function constructURL(path: string, parameters?: fetchParameters): string {
  if (!path.startsWith("/")) {
    path = "/" + path;
  }
  let url = baseURL + path;
  if (parameters) {
    url = url + "?" + new URLSearchParams(parameters).toString();
  }
  return url;
}

interface APIConnectorType {
  headers: HeadersInit | undefined;
  activeRequests: {
    [hashedRequest: string]: [string, Promise<any>];
  };

  handleMultiRequests: (
    hashedRequest: string,
    requestId: string,
    res: Promise<any>
  ) => void;

  call: (
    method: string,
    path: string,
    parameters?: fetchParameters,
    headers?: HeadersInit | null,
    body?: any
  ) => Promise<APIResponse<any>>;

  get: (
    path: string,
    parameters?: fetchParameters,
    headers?: HeadersInit | null
  ) => Promise<APIResponse<any>>;

  post: (
    path: string,
    parameters?: fetchParameters,
    headers?: HeadersInit | null,
    body?: any
  ) => Promise<APIResponse<any>>;

  put: (
    path: string,
    parameters?: fetchParameters,
    headers?: HeadersInit | null,
    body?: any
  ) => Promise<APIResponse<any>>;

  delete: (
    path: string,
    parameters?: fetchParameters,
    headers?: HeadersInit | null,
    body?: any
  ) => Promise<APIResponse<any>>;
}

export const APIConnector: APIConnectorType = {
  headers: {},

  activeRequests: {},

  handleMultiRequests: (
    hashedRequest: string,
    requestId: string,
    res: Promise<any>
  ) => {
    APIConnector.activeRequests[hashedRequest] = [requestId, res];
  },

  async call(
    method: string,
    path: string,
    parameters?: fetchParameters,
    headers?: HeadersInit | null,
    body?: any
  ): Promise<APIResponse<any>> {
    const reqObj = {
      method: method,
      path: path,
      parameters: parameters,
      headers: headers,
      body: body,
    };
    const hashedRequest = hashObject(reqObj);
    const hashedId = hashObject(new Date());

    const url = constructURL(path, parameters);
    let ReqHeaders: HeadersInit | undefined;
    if (headers === undefined) {
      ReqHeaders = APIConnector.headers;
    } else if (headers === null) {
      ReqHeaders = undefined;
    } else {
      ReqHeaders = headers;
    }
    const options: RequestInit = {
      method: method,
      headers: ReqHeaders,
      body: body ? JSON.stringify(body) : undefined,
    };

    const response: Promise<APIResponse<any>> = new Promise(
      async (resolve, reject) => {
        await delay(requestDelay);

        if (APIConnector.activeRequests[hashedRequest][0] != hashedId) {
          const res = await APIConnector.activeRequests[hashedRequest][1];
          resolve(res);
          return;
        } else {
          const res = await fetch(url, options);
          const resBody = await res.json();

          resolve(resBody);
          return;
        }
      }
    );
    APIConnector.handleMultiRequests(hashedRequest, hashedId, response);

    return response;
  },

  async get(
    path: string,
    parameters?: fetchParameters,
    headers?: HeadersInit | null
  ): Promise<APIResponse<any>> {
    return await APIConnector.call("GET", path, parameters, headers, undefined);
  },

  async post(
    path: string,
    parameters?: fetchParameters,
    headers?: HeadersInit | null,
    body?: any
  ): Promise<APIResponse<any>> {
    return await APIConnector.call("POST", path, parameters, headers, body);
  },

  async put(
    path: string,
    parameters?: fetchParameters,
    headers?: HeadersInit | null,
    body?: any
  ): Promise<APIResponse<any>> {
    return await APIConnector.call("PUT", path, parameters, headers, body);
  },

  async delete(
    path: string,
    parameters?: fetchParameters,
    headers?: HeadersInit | null,
    body?: any
  ): Promise<APIResponse<any>> {
    return await APIConnector.call("DELETE", path, parameters, headers, body);
  },
};
