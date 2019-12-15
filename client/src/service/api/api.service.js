import axios from 'axios';

export class ApiService {
  constructor(url) {
    this.endpoint = url;
  }

  async fetch(url, method = 'GET', body = {}, config = {}) {
    try {
      console.log({
        url: url ? this.endpoint + '/' + url : this.endpoint,
        headers: config,
        data: body,
        method
      });
      let result = await axios({
        url: url ? this.endpoint + '/' + url : this.endpoint,
        headers: config,
        data: body,
        method
      });

      if (process.env.NODE_ENV === 'development') {
        console.log('---succsefull request---');
        console.log(result);
      }

      return result.data;
    } catch (error) {
      console.log('---failed request---');
      console.error(error);
    }
  }
}
