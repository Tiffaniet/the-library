import { Meteor } from 'meteor/meteor';
import { Books } from '../books';

Meteor.publish('AllBooks', function() {
  return Books.find();

});

Meteor.methods({

	'tasks.showOne'(taskId) {

	    const book = Books.findOne({_id:taskId});
	    console.log("book"); 
	    // if (task.private && task.owner !== Meteor.userId()) {
	    //   // If the task is private, make sure only the owner can delete it
	    //   throw new Meteor.Error('not-authorized');
	    // }

	    return book;
	}

})