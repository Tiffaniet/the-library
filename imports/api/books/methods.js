// Methods related to books

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Books } from './books.js';

Meteor.methods({
  'books.insert'(title, url) {
    check(url, String);
    check(title, String);

    return Books.insert({
      url,
      title,
      createdAt: new Date(),
    });
  }
});
