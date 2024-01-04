import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  выполнение: DS.attr('decimal'),
  номерДогово: DS.attr('number'),
  сумКонечОстат: DS.attr('decimal'),
  докСмета: DS.belongsTo('i-i-s-proekt-док-смета', { inverse: null, async: false }),
  докУсловДог: DS.belongsTo('i-i-s-proekt-док-услов-дог', { inverse: null, async: false }),
  объектСМР: DS.belongsTo('i-i-s-proekt-объект-с-м-р', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-proekt-сотрудники', { inverse: null, async: false }),
  спрКонтраг: DS.belongsTo('справочник-контрагенты', { inverse: null, async: false })
});

export let ValidationRules = {
  выполнение: {
    descriptionKey: 'models.i-i-s-proekt-от-по-вып-догов.validations.выполнение.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  номерДогово: {
    descriptionKey: 'models.i-i-s-proekt-от-по-вып-догов.validations.номерДогово.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумКонечОстат: {
    descriptionKey: 'models.i-i-s-proekt-от-по-вып-догов.validations.сумКонечОстат.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  докСмета: {
    descriptionKey: 'models.i-i-s-proekt-от-по-вып-догов.validations.докСмета.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  докУсловДог: {
    descriptionKey: 'models.i-i-s-proekt-от-по-вып-догов.validations.докУсловДог.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  объектСМР: {
    descriptionKey: 'models.i-i-s-proekt-от-по-вып-догов.validations.объектСМР.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-proekt-от-по-вып-догов.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрКонтраг: {
    descriptionKey: 'models.i-i-s-proekt-от-по-вып-догов.validations.спрКонтраг.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтПоВыпДоговE', 'i-i-s-proekt-от-по-вып-догов', {
    номерДогово: attr('Номер договора', { index: 0 }),
    объектСМР: belongsTo('i-i-s-proekt-объект-с-м-р', 'Объект строительства', {
      объектСтроит: attr('Объект строительства', { index: 2 })
    }, { index: 1 }),
    сотрудники: belongsTo('i-i-s-proekt-сотрудники', 'Сотрудник', {
      фИО: attr('Сотрудник', { index: 4 })
    }, { index: 3 }),
    спрКонтраг: belongsTo('справочник-контрагенты', 'Контрагент', {
      наименование: attr('Контрагент', { index: 6 })
    }, { index: 5 }),
    докСмета: belongsTo('i-i-s-proekt-док-смета', 'Объем работ по смете', {
      обРабПоСмет: attr('Объем работ по смете', { index: 8 })
    }, { index: 7 }),
    докУсловДог: belongsTo('i-i-s-proekt-док-услов-дог', 'Сумма по договору', {
      сумПоДогов: attr('Сумма по договору', { index: 10 })
    }, { index: 9 }),
    выполнение: attr('Выполнение', { index: 11 }),
    сумКонечОстат: attr('Сумма конечный остаток', { index: 12 })
  });

  modelClass.defineProjection('ОтПоВыпДоговL', 'i-i-s-proekt-от-по-вып-догов', {
    сотрудники: belongsTo('i-i-s-proekt-сотрудники', 'Сотрудник', {
      фИО: attr('Сотрудник', { index: 0 })
    }, { index: -1, hidden: true }),
    номерДогово: attr('Номер договора', { index: 1 }),
    объектСМР: belongsTo('i-i-s-proekt-объект-с-м-р', 'Объект строительства', {
      объектСтроит: attr('Объект строительства', { index: 2 })
    }, { index: -1, hidden: true }),
    спрКонтраг: belongsTo('справочник-контрагенты', 'Котрагент', {
      наименование: attr('Котрагент', { index: 3 })
    }, { index: -1, hidden: true }),
    докСмета: belongsTo('i-i-s-proekt-док-смета', 'Объем работ по смете', {
      обРабПоСмет: attr('Объем работ по смете', { index: 4 })
    }, { index: -1, hidden: true }),
    докУсловДог: belongsTo('i-i-s-proekt-док-услов-дог', 'Сумма по договору', {
      сумПоДогов: attr('Сумма по договору', { index: 5 })
    }, { index: -1, hidden: true }),
    выполнение: attr('Выполнение', { index: 6 }),
    сумКонечОстат: attr('Сумма конечный остаток', { index: 7 })
  });
};
