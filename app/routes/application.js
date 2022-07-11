import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  model() {
    // console.log("Find Route"+params);
    return this.store.findAll('userdetail');
   /**  return {
      data: [
        {
          id: 1,
          attributes: {
            firstName: 'Subhasree',
            lastName: 'K',
            email: 't@t.com',
            phone: '09876244312',
            address: 'XYZ,ABC,09121',
          },
          type: 'user',
        },
      ],
    };*/
  }
}
