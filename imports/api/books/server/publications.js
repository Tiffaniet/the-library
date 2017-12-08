import { Meteor } from 'meteor/meteor';
import { Books } from '../books';

Meteor.publish('AllBooks', function() {
  return Books.find();
});

Meteor.publish('theBook', function( id ) {
  return Books.find(id);
});