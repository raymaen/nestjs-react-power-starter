import axios from 'axios';

class serviceClass {
  constructor(url) {
    this.gamesEndpoint = url;
  }

  async fetch(url = '', method = 'get', body, config) {
    try {
      let result = await axios({
        url: this.gamesEndpoint + '/' + url,
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
