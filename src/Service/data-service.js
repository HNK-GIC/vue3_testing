import Resources from "./resources.js";
import Configuration from "./configuration.js";
import axios from "axios";

export default class DataServices {
  responseData = [];

  constructor() {
    this.resource = new Resources();
    this.config = new Configuration();
  }

  async retrieveWithGet(url) {
    await axios
      .get(this.resource.BACKEND_SIDE_BASE_URL + url)
      .then((response) => (this.responseData = response.data));
    return this.responseData;
  }

  async createWithPost(url, data) {
    await axios
      .post(this.resource.BACKEND_SIDE_BASE_URL + url, data)
      .then((response) => (this.responseData = response.data));
    return this.responseData;
  }

}
