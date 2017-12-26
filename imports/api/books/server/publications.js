import { Meteor } from 'meteor/meteor';
import { Books } from '../books';

Meteor.publish('AllBooks', function() {
  return Books.find();
});

Meteor.publish('theBook', function( id ) {
  return Books.find(id);
});

Meteor.publish('updateBook', function( val ){
  Books.update( val._id , {
    $set: {
      bookname: val.bookName,
      author: val.author,
      category: val.category,
      description: val.description,
    }
  })
})