import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  номСметРасч: DS.attr('number'),
  общСметСтои: DS.attr('decimal'),
  ценаЗаЕд: DS.attr('decimal')
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-proekt-док-смета.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номСметРасч: {
    descriptionKey: 'models.i-i-s-proekt-док-смета.validations.номСметРасч.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  общСметСтои: {
    descriptionKey: 'models.i-i-s-proekt-док-смета.validations.общСметСтои.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  ценаЗаЕд: {
    descriptionKey: 'models.i-i-s-proekt-док-смета.validations.ценаЗаЕд.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокСметаE', 'i-i-s-proekt-док-смета', {
    номСметРасч: attr('Номер сметных расчетов', { index: 0 }),
    количество: attr('Количество', { index: 1 }),
    ценаЗаЕд: attr('Цена за единицу', { index: 2 }),
    общСметСтои: attr('Общая сметная стоимость', { index: 3 })
  });

  modelClass.defineProjection('ДокСметаL', 'i-i-s-proekt-док-смета', {
    номСметРасч: attr('Номер сметных расчетов', { index: 0 }),
    количество: attr('Количество', { index: 1 }),
    ценаЗаЕд: attr('Цена за единицу', { index: 2 }),
    общСметСтои: attr('Общая сметная стоимость', { index: 3 })
  });
};
