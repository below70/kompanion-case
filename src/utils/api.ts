import {createServer} from 'miragejs';

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
    },
  });
}
