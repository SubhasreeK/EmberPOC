import Model, { attr } from '@ember-data/model';
export default class UserModel extends Model {
  @attr firstname;
  @attr lastname;
  @attr email;
  @attr phone;
  @attr address;
}