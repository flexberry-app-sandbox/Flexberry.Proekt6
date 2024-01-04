import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  номСметРасч: DS.attr('number'),
  обРабПоСмет: DS.attr('decimal'),
  общСметСтои: DS.attr('decimal'),
  ценаЗаЕд: DS.attr('decimal'),
  объектСМР: DS.belongsTo('i-i-s-proekt-объект-с-м-р', { inverse: null, async: false }),
  тЧСмета: DS.hasMany('i-i-s-proekt-т-ч-смета', { inverse: 'докСмета', async: false })
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
  обРабПоСмет: {
    descriptionKey: 'models.i-i-s-proekt-док-смета.validations.обРабПоСмет.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
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
  объектСМР: {
    descriptionKey: 'models.i-i-s-proekt-док-смета.validations.объектСМР.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧСмета: {
    descriptionKey: 'models.i-i-s-proekt-док-смета.validations.тЧСмета.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокСметаE', 'i-i-s-proekt-док-смета', {
    номСметРасч: attr('Номер сметных расчетов', { index: 0 }),
    количество: attr('Количество', { index: 1 }),
    ценаЗаЕд: attr('Цена за единицу', { index: 2 }),
    общСметСтои: attr('Общая сметная стоимость', { index: 3 }),
    объектСМР: belongsTo('i-i-s-proekt-объект-с-м-р', 'Объект строительства', {
      объектСтроит: attr('Объект строительства', { index: 5 })
    }, { index: 4 }),
    тЧСмета: hasMany('i-i-s-proekt-т-ч-смета', 'Табличная часть сметы', {
      стоимСтроРаб: attr('Стоимость строительных работ', { index: 0 }),
      стоимМонРаб: attr('Стоимость монтажных работ', { index: 1 }),
      стоимОборуд: attr('Стоимость оборудования', { index: 2 })
    })
  });

  modelClass.defineProjection('ДокСметаL', 'i-i-s-proekt-док-смета', {
    номСметРасч: attr('Номер сметных расчетов', { index: 0 }),
    количество: attr('Количество', { index: 1 }),
    ценаЗаЕд: attr('Цена за единицу', { index: 2 }),
    общСметСтои: attr('Общая сметная стоимость', { index: 3 }),
    объектСМР: belongsTo('i-i-s-proekt-объект-с-м-р', 'Объект строительства', {
      объектСтроит: attr('Объект строительства', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
