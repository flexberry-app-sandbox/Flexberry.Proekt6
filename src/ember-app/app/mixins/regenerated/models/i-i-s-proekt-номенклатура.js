import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  наименов: DS.attr('string'),
  описание: DS.attr('string')
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-proekt-номенклатура.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименов: {
    descriptionKey: 'models.i-i-s-proekt-номенклатура.validations.наименов.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  описание: {
    descriptionKey: 'models.i-i-s-proekt-номенклатура.validations.описание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НоменклатураE', 'i-i-s-proekt-номенклатура', {
    код: attr('Код', { index: 0 }),
    наименов: attr('Наименование', { index: 1 }),
    описание: attr('Описание', { index: 2 })
  });

  modelClass.defineProjection('НоменклатураL', 'i-i-s-proekt-номенклатура', {
    код: attr('Код', { index: 0 }),
    наименов: attr('Наименование', { index: 1 }),
    описание: attr('Описание', { index: 2 })
  });
};
