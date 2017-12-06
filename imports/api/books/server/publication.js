import { Meteor } from 'meteor/meteor';
import Books from '../books';
Meteor.publish('Books.all', function () {
  return Books.find({});
});