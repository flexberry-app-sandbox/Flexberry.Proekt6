import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date'),
  датаОкончан: DS.attr('date'),
  длительность: DS.attr('number'),
  сумПоДогов: DS.attr('decimal')
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-proekt-док-услов-дог.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОкончан: {
    descriptionKey: 'models.i-i-s-proekt-док-услов-дог.validations.датаОкончан.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  длительность: {
    descriptionKey: 'models.i-i-s-proekt-док-услов-дог.validations.длительность.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумПоДогов: {
    descriptionKey: 'models.i-i-s-proekt-док-услов-дог.validations.сумПоДогов.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокУсловДогE', 'i-i-s-proekt-док-услов-дог', {
    датаНачала: attr('Дата начала', { index: 0 }),
    датаОкончан: attr('Дата окончания', { index: 1 }),
    длительность: attr('Длительность', { index: 2 }),
    сумПоДогов: attr('Сумма по договору', { index: 3 })
  });

  modelClass.defineProjection('ДокУсловДогL', 'i-i-s-proekt-док-услов-дог', {
    датаНачала: attr('Дата начала', { index: 0 }),
    датаОкончан: attr('Дата окончания', { index: 1 }),
    длительность: attr('Длительность', { index: 2 }),
    сумПоДогов: attr('Сумма по договору', { index: 3 })
  });
};
