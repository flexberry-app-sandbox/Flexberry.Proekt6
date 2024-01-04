import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодСДР: DS.attr('number'),
  количество: DS.attr('decimal'),
  объем: DS.attr('decimal'),
  суммаИтого: DS.attr('decimal'),
  ценаЗаЕд: DS.attr('decimal')
});

export let ValidationRules = {
  кодСДР: {
    descriptionKey: 'models.i-i-s-proekt-расх-мат-в-стро.validations.кодСДР.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-proekt-расх-мат-в-стро.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  объем: {
    descriptionKey: 'models.i-i-s-proekt-расх-мат-в-стро.validations.объем.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  суммаИтого: {
    descriptionKey: 'models.i-i-s-proekt-расх-мат-в-стро.validations.суммаИтого.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  ценаЗаЕд: {
    descriptionKey: 'models.i-i-s-proekt-расх-мат-в-стро.validations.ценаЗаЕд.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасхМатВСтроE', 'i-i-s-proekt-расх-мат-в-стро', {
    кодСДР: attr('Код СДР', { index: 0 }),
    объем: attr('Объем', { index: 1 }),
    количество: attr('Количество', { index: 2 }),
    ценаЗаЕд: attr('Цена за единицу', { index: 3 }),
    суммаИтого: attr('Сумма итого', { index: 4 })
  });

  modelClass.defineProjection('РасхМатВСтроL', 'i-i-s-proekt-расх-мат-в-стро', {
    кодСДР: attr('Код СДР', { index: 0 }),
    объем: attr('Объем', { index: 1 }),
    количество: attr('Количество', { index: 2 }),
    ценаЗаЕд: attr('Цена за единицу', { index: 3 }),
    суммаИтого: attr('Сумма итого', { index: 4 })
  });
};
