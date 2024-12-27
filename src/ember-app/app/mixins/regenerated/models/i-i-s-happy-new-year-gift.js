import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  date: DS.attr('date'),
  name: DS.attr('string'),
  giftType: DS.belongsTo('i-i-s-happy-new-year-gift-type', { inverse: null, async: false })
});

export let ValidationRules = {
  date: {
    descriptionKey: 'models.i-i-s-happy-new-year-gift.validations.date.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  name: {
    descriptionKey: 'models.i-i-s-happy-new-year-gift.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  giftType: {
    descriptionKey: 'models.i-i-s-happy-new-year-gift.validations.giftType.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('GiftE', 'i-i-s-happy-new-year-gift', {
    date: attr('Date', { index: 0 }),
    name: attr('Name', { index: 1 }),
    giftType: belongsTo('i-i-s-happy-new-year-gift-type', 'Gift type', {
      name: attr('Name', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('GiftL', 'i-i-s-happy-new-year-gift', {
    date: attr('Date', { index: 0 }),
    name: attr('Name', { index: 1 }),
    giftType: belongsTo('i-i-s-happy-new-year-gift-type', 'Name', {
      name: attr('Name', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
