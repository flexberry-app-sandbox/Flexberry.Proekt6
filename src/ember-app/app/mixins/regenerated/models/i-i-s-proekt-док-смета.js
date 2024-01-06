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
  едИзмерен: DS.belongsTo('i-i-s-proekt-ед-измерен', { inverse: null, async: false }),
  номенклатура: DS.belongsTo('i-i-s-proekt-номенклатура', { inverse: null, async: false }),
  объектСМР: DS.belongsTo('i-i-s-proekt-объект-с-м-р', { inverse: null, async: false }),
  спрКонтраг: DS.belongsTo('справочник-контрагенты', { inverse: null, async: false }),
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
  едИзмерен: {
    descriptionKey: 'models.i-i-s-proekt-док-смета.validations.едИзмерен.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  номенклатура: {
    descriptionKey: 'models.i-i-s-proekt-док-смета.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  объектСМР: {
    descriptionKey: 'models.i-i-s-proekt-док-смета.validations.объектСМР.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрКонтраг: {
    descriptionKey: 'models.i-i-s-proekt-док-смета.validations.спрКонтраг.__caption__',
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
    обРабПоСмет: attr('Объем работ по смете', { index: 3 }),
    общСметСтои: attr('Общая сметная стоимость', { index: 4 }),
    объектСМР: belongsTo('i-i-s-proekt-объект-с-м-р', 'Объект строительства', {
      объектСтроит: attr('Объект строительства', { index: 6 })
    }, { index: 5 }),
    номенклатура: belongsTo('i-i-s-proekt-номенклатура', 'Номенклатура', {
      наименов: attr('Номенклатура', { index: 8 })
    }, { index: 7 }),
    спрКонтраг: belongsTo('справочник-контрагенты', 'Контрагент', {
      наименование: attr('Контрагент', { index: 10 })
    }, { index: 9 }),
    едИзмерен: belongsTo('i-i-s-proekt-ед-измерен', 'Единицы измерения', {
      наименование: attr('Единицы измерения', { index: 12 })
    }, { index: 11 }),
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
    обРабПоСмет: attr('Объем работ по смете', { index: 3 }),
    общСметСтои: attr('Общая сметная стоимость', { index: 4 }),
    объектСМР: belongsTo('i-i-s-proekt-объект-с-м-р', 'Объект строительства', {
      объектСтроит: attr('Объект строительства', { index: 5 })
    }, { index: -1, hidden: true }),
    номенклатура: belongsTo('i-i-s-proekt-номенклатура', 'Номенклатура', {
      наименов: attr('Номенклатура', { index: 6 })
    }, { index: -1, hidden: true }),
    спрКонтраг: belongsTo('справочник-контрагенты', 'Контрагент', {
      наименование: attr('Контрагент', { index: 7 })
    }, { index: -1, hidden: true }),
    едИзмерен: belongsTo('i-i-s-proekt-ед-измерен', 'Единицы измерения', {
      наименование: attr('Единицы измерения', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
