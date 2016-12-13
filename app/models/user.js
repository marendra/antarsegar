import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  address:DS.attr('string'),
  contact: DS.attr('number'),
  privilege:DS.attr('string')
});
