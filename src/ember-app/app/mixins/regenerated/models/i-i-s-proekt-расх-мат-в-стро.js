import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодСДР: DS.attr('number'),
  количество: DS.attr('decimal'),
  суммаИтого: DS.attr('decimal'),
  ценаЗаЕд: DS.attr('decimal'),
  докСмета: DS.belongsTo('i-i-s-proekt-док-смета', { inverse: null, async: false }),
  едИзмерен: DS.belongsTo('i-i-s-proekt-ед-измерен', { inverse: null, async: false }),
  номенклатура: DS.belongsTo('i-i-s-proekt-номенклатура', { inverse: null, async: false })
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
  докСмета: {
    descriptionKey: 'models.i-i-s-proekt-расх-мат-в-стро.validations.докСмета.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  едИзмерен: {
    descriptionKey: 'models.i-i-s-proekt-расх-мат-в-стро.validations.едИзмерен.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  номенклатура: {
    descriptionKey: 'models.i-i-s-proekt-расх-мат-в-стро.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасхМатВСтроE', 'i-i-s-proekt-расх-мат-в-стро', {
    кодСДР: attr('Код СДР', { index: 0 }),
    количество: attr('Количество', { index: 1 }),
    ценаЗаЕд: attr('Цена за единицу', { index: 2 }),
    суммаИтого: attr('Сумма итого', { index: 3 }),
    докСмета: belongsTo('i-i-s-proekt-док-смета', 'Объем работ по смете', {
      обРабПоСмет: attr('Объем работ по смете', { index: 5 })
    }, { index: 4 }),
    номенклатура: belongsTo('i-i-s-proekt-номенклатура', 'Номенклатура', {
      наименов: attr('Номенклатура', { index: 7 })
    }, { index: 6 }),
    едИзмерен: belongsTo('i-i-s-proekt-ед-измерен', 'Единицы измерения', {
      наименование: attr('Единицы измерения', { index: 9 })
    }, { index: 8 })
  });

  modelClass.defineProjection('РасхМатВСтроL', 'i-i-s-proekt-расх-мат-в-стро', {
    кодСДР: attr('Код СДР', { index: 0 }),
    количество: attr('Количество', { index: 1 }),
    ценаЗаЕд: attr('Цена за единицу', { index: 2 }),
    суммаИтого: attr('Сумма итого', { index: 3 }),
    докСмета: belongsTo('i-i-s-proekt-док-смета', 'Объем работ по смете', {
      обРабПоСмет: attr('Объем работ по смете', { index: 4 })
    }, { index: -1, hidden: true }),
    номенклатура: belongsTo('i-i-s-proekt-номенклатура', 'Номенклатура', {
      наименов: attr('Номенклатура', { index: 5 })
    }, { index: -1, hidden: true }),
    едИзмерен: belongsTo('i-i-s-proekt-ед-измерен', 'Единицы измерения', {
      наименование: attr('Единицы измерения', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
