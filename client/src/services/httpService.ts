import axios from "axios";
import {
  API_PREFIX,
  REQUEST_TIME_MAX,
  SERVER_BASE_URL,
} from "../utils/contants";

export class HttpService {
  private authorizationToken: string = "";
  private readonly client = axios.create({
    baseURL: `${SERVER_BASE_URL}${API_PREFIX}`,
    timeout: REQUEST_TIME_MAX,
    headers: {
      // "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
      // "Access-Control-Allow-Credentials": "true",
      // "Access-Control-Allow-Origin": "*",
    },
  });

  constructor() {
    this.client.interceptors.request.use(
      (config: any) => {
        return config;
      },
      (error) => Promise.reject(error)
    );
    this.client.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => Promise.reject(error)
    );
  }

  protected get contextHeader() {
    return {
      authorization: this.authorizationToken,
    };
  }

  public inject(token: string) {
    this.authorizationToken = token;
    return this;
  }

  public get(path: string, headers: any = {}) {
    return this.client.get(path, {
      headers: this.contextHeader,
      ...headers,
    });
  }

  public post(path: string, payload: object, headers: any = {}) {
    return this.client.post(path, payload, {
      headers: this.contextHeader,
      ...headers,
    });
  }

  public put(path: string, payload: object, headers: any = {}) {
    return this.client.put(path, payload, {
      headers: this.contextHeader,
      ...headers,
    });
  }

  public patch(path: string, payload: object, headers: any = {}) {
    return this.client.patch(path, payload, {
      headers: this.contextHeader,
      ...headers,
    });
  }

  public delete(path: string, headers: any = {}) {
    return this.client.delete(path, {
      headers: this.contextHeader,
      ...headers,
    });
  }
}

export const httpService: HttpService = new HttpService();
