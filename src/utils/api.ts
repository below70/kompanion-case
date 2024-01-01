import {createServer} from 'miragejs';
import {data} from '../../data';

export function makeServer({environment = 'test'} = {}) {
  return createServer({
    environment,

    routes() {
      this.namespace = 'api';
      this.timing = 1000;
      this.post('/login', () => {
        return {
          info: 'success',
        };
      });
      this.get('/posts', () => {
        return data;
      });
      this.get('/search', () => {
        return data;
      });
    },
  });
}
