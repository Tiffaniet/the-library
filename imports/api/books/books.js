import { Mongo } from 'meteor/mongo';

export default Books = new Mongo.Collection("Books");

Books.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});


Books.allow({
  insert() { return false; },
  update() { return false; },
  remove() { return false; },
});