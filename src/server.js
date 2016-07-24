import { Meteor } from 'meteor/meteor';
import { Bins } from './app/imports/collections/bins';

Meteor.startup(() => {
  Meteor.publish('bins', function() {
    return Bins.find({ ownerId: this.userId });
  })
});