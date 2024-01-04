import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  выполнение: DS.attr('decimal'),
  сумКонечОстат: DS.attr('decimal'),
  сотрудники: DS.belongsTo('i-i-s-proekt-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  выполнение: {
    descriptionKey: 'models.i-i-s-proekt-от-по-вып-догов.validations.выполнение.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  сумКонечОстат: {
    descriptionKey: 'models.i-i-s-proekt-от-по-вып-догов.validations.сумКонечОстат.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-proekt-от-по-вып-догов.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтПоВыпДоговE', 'i-i-s-proekt-от-по-вып-догов', {
    выполнение: attr('Выполнение', { index: 0 }),
    сумКонечОстат: attr('Сумма конечный остаток', { index: 1 }),
    сотрудники: belongsTo('i-i-s-proekt-сотрудники', 'Сотрудник', {
      фИО: attr('Сотрудник', { index: 3 })
    }, { index: 2 })
  });

  modelClass.defineProjection('ОтПоВыпДоговL', 'i-i-s-proekt-от-по-вып-догов', {
    выполнение: attr('Выполнение', { index: 0 }),
    сумКонечОстат: attr('Сумма конечный остаток', { index: 1 }),
    сотрудники: belongsTo('i-i-s-proekt-сотрудники', 'Сотрудник', {
      фИО: attr('Сотрудник', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
