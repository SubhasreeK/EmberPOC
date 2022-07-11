//import errorMsg from 'ProjectTwoChild/addon/subhasree/subhasree.js';
import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @action
  createUser() {
    let newid = '';
    let newFirstName = this.newFirstName;
    let newLastName = this.newLastName;
    let newEmail = this.newEmail;
    let newPhone = this.newPhone;
    let newAddress = this.newAddress;
    //create Record
    let newRecord = this.store.createRecord('userdetail', {
      id: newid,
      firstname: newFirstName,
      lastname: newLastName,
      email: newEmail,
      phone: newPhone,
      address: newAddress,
    });
    newRecord.save();
    this.userdetail = '';
  }
  @action
  updateUser() {
    console.log("chekc"+ this.updatedFirstName);
    let updatedFirstName = this.updatedFirstName;
    let updatedLastName = this.updatedLastName;
    let updatedEmail = this.updatedEmail;
    let updatedPhone = this.updatedPhone;
    let updatedAddress = this.updatedAddress;
    let user = this.model.findBy('id');
    if (updatedFirstName) user.set('firstname', updatedFirstName);
    if (updatedLastName) user.set('lastname', updatedLastName);
    if (updatedEmail) user.set('email', updatedEmail);
    if (updatedPhone) user.set('phone', updatedPhone);
    if (updatedAddress) user.set('address', updatedAddress);
    user.save(); // save the title to API via PATCH
  }
  @action
  destroyUser() {
    let test = this.model;
    //console.log("While delete - "+test.toJSON());
    let user = this.model.findBy('id');
    user.destroyRecord();
  }
  @action
  buttonclick() {
    console.log(errorMsg.tryAgainNow, 'checkLink');
  }
}
