import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date'),
  датаОкончан: DS.attr('date'),
  длительность: DS.attr('number'),
  сумПоДогов: DS.attr('decimal'),
  докСмета: DS.belongsTo('i-i-s-proekt-док-смета', { inverse: null, async: false }),
  объектСМР: DS.belongsTo('i-i-s-proekt-объект-с-м-р', { inverse: null, async: false }),
  спрКонтраг: DS.belongsTo('справочник-контрагенты', { inverse: null, async: false })
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
  докСмета: {
    descriptionKey: 'models.i-i-s-proekt-док-услов-дог.validations.докСмета.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  объектСМР: {
    descriptionKey: 'models.i-i-s-proekt-док-услов-дог.validations.объектСМР.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрКонтраг: {
    descriptionKey: 'models.i-i-s-proekt-док-услов-дог.validations.спрКонтраг.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокУсловДогE', 'i-i-s-proekt-док-услов-дог', {
    датаНачала: attr('Дата начала', { index: 0 }),
    датаОкончан: attr('Дата окончания', { index: 1 }),
    длительность: attr('Длительность', { index: 2 }),
    сумПоДогов: attr('Сумма по договору', { index: 3 }),
    спрКонтраг: belongsTo('справочник-контрагенты', 'Контрагент', {
      наименование: attr('Контрагент', { index: 5 })
    }, { index: 4 }),
    объектСМР: belongsTo('i-i-s-proekt-объект-с-м-р', 'Объект строительства', {
      объектСтроит: attr('Объект строительства', { index: 7 })
    }, { index: 6 }),
    докСмета: belongsTo('i-i-s-proekt-док-смета', 'Объем работ по смете', {
      обРабПоСмет: attr('Объем работ по смете', { index: 9 })
    }, { index: 8 })
  });

  modelClass.defineProjection('ДокУсловДогL', 'i-i-s-proekt-док-услов-дог', {
    датаНачала: attr('Дата начала', { index: 0 }),
    датаОкончан: attr('Дата окончания', { index: 1 }),
    длительность: attr('Длительность', { index: 2 }),
    сумПоДогов: attr('Сумма по договору', { index: 3 }),
    спрКонтраг: belongsTo('справочник-контрагенты', 'Контрагент', {
      наименование: attr('Контрагент', { index: 4 })
    }, { index: -1, hidden: true }),
    объектСМР: belongsTo('i-i-s-proekt-объект-с-м-р', 'Объект строительства', {
      объектСтроит: attr('Объект строительства', { index: 5 })
    }, { index: -1, hidden: true }),
    докСмета: belongsTo('i-i-s-proekt-док-смета', 'Объем работ по смете', {
      обРабПоСмет: attr('Объем работ по смете', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
