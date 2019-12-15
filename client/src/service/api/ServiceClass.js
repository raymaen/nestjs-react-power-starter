import axios from 'axios';

const alerter = 

class serviceClass {
  constructor(url) {
    this.endpoint = url;
  }

  async fetch(url = '/api', method = 'get', body = {}, config = {}) {
    try {
      let result = await axios({
        url: this.endpoint + '/' + url,
        headers: config,
        data: body,
        method
      });

      if (!process.env.NODE_ENV) {
        console.log(result);
      }

      return result.data.data;
    } catch (error) {
      alerter.error(error);
    }
  }
}

export const ServiceClass = new serviceClass();
