import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  выполнение: DS.attr('decimal'),
  сумКонечОстат: DS.attr('decimal')
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
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтПоВыпДоговE', 'i-i-s-proekt-от-по-вып-догов', {
    выполнение: attr('Выполнение', { index: 0 }),
    сумКонечОстат: attr('Сумма конечный остаток', { index: 1 })
  });

  modelClass.defineProjection('ОтПоВыпДоговL', 'i-i-s-proekt-от-по-вып-догов', {
    выполнение: attr('Выполнение', { index: 0 }),
    сумКонечОстат: attr('Сумма конечный остаток', { index: 1 })
  });
};
