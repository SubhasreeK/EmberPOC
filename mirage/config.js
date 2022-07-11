export default function () {
  this.namespace = 'api';
  this.get('/users', () => {
    return {
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
    };
  });
}
