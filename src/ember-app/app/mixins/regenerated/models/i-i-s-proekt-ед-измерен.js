import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  наименование: DS.attr('string'),
  полноеИмя: DS.attr('string')
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-proekt-ед-измерен.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-proekt-ед-измерен.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  полноеИмя: {
    descriptionKey: 'models.i-i-s-proekt-ед-измерен.validations.полноеИмя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЕдИзмеренE', 'i-i-s-proekt-ед-измерен', {
    код: attr('Код', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    полноеИмя: attr('Полное имя', { index: 2 })
  });

  modelClass.defineProjection('ЕдИзмеренL', 'i-i-s-proekt-ед-измерен', {
    код: attr('Код', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    полноеИмя: attr('Полное имя', { index: 2 })
  });
};
