import { Meteor } from 'meteor/meteor';
import { Books } from '../books';

Meteor.publish('AllBooks', function() {
  return Books.find();
});


Meteor.publish('singlebook', function(linkId) {
  return Books.find({ _id: linkId });
});