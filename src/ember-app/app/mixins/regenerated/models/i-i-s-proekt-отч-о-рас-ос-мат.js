import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  колПоАктТек: DS.attr('number'),
  нормаРасхода: DS.attr('number'),
  суммаИтого: DS.attr('decimal'),
  докСмета: DS.belongsTo('i-i-s-proekt-док-смета', { inverse: null, async: false }),
  номенклатура: DS.belongsTo('i-i-s-proekt-номенклатура', { inverse: null, async: false }),
  расхМатВСтро: DS.belongsTo('i-i-s-proekt-расх-мат-в-стро', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-proekt-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  колПоАктТек: {
    descriptionKey: 'models.i-i-s-proekt-отч-о-рас-ос-мат.validations.колПоАктТек.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  нормаРасхода: {
    descriptionKey: 'models.i-i-s-proekt-отч-о-рас-ос-мат.validations.нормаРасхода.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  суммаИтого: {
    descriptionKey: 'models.i-i-s-proekt-отч-о-рас-ос-мат.validations.суммаИтого.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  докСмета: {
    descriptionKey: 'models.i-i-s-proekt-отч-о-рас-ос-мат.validations.докСмета.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  номенклатура: {
    descriptionKey: 'models.i-i-s-proekt-отч-о-рас-ос-мат.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  расхМатВСтро: {
    descriptionKey: 'models.i-i-s-proekt-отч-о-рас-ос-мат.validations.расхМатВСтро.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-proekt-отч-о-рас-ос-мат.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтчОРасОсМатE', 'i-i-s-proekt-отч-о-рас-ос-мат', {
    нормаРасхода: attr('Норма расхода', { index: 0 }),
    колПоАктТек: attr('Количество по актам текущий', { index: 1 }),
    суммаИтого: attr('Сумма итого', { index: 2 }),
    сотрудники: belongsTo('i-i-s-proekt-сотрудники', 'Сотрудник', {
      фИО: attr('Сотрудник', { index: 4 })
    }, { index: 3 }),
    номенклатура: belongsTo('i-i-s-proekt-номенклатура', 'Номенклатура', {
      наименов: attr('Номенклатура', { index: 6 })
    }, { index: 5 }),
    расхМатВСтро: belongsTo('i-i-s-proekt-расх-мат-в-стро', 'Количество по актам всего', {
      количество: attr('Количество по актам всего', { index: 8 })
    }, { index: 7 }),
    докСмета: belongsTo('i-i-s-proekt-док-смета', 'Количество по смете', {
      количество: attr('Количество по смете', { index: 10 })
    }, { index: 9 })
  });

  modelClass.defineProjection('ОтчОРасОсМатL', 'i-i-s-proekt-отч-о-рас-ос-мат', {
    нормаРасхода: attr('Норма расхода', { index: 0 }),
    колПоАктТек: attr('Количество по актам текущий', { index: 1 }),
    суммаИтого: attr('Сумма итого', { index: 2 }),
    сотрудники: belongsTo('i-i-s-proekt-сотрудники', 'Сотрудники', {
      фИО: attr('Сотрудники', { index: 3 })
    }, { index: -1, hidden: true }),
    номенклатура: belongsTo('i-i-s-proekt-номенклатура', 'Номенклатура', {
      наименов: attr('Номенклатура', { index: 4 })
    }, { index: -1, hidden: true }),
    расхМатВСтро: belongsTo('i-i-s-proekt-расх-мат-в-стро', 'Количество по актам всего', {
      количество: attr('Количество по актам всего', { index: 5 })
    }, { index: -1, hidden: true }),
    докСмета: belongsTo('i-i-s-proekt-док-смета', 'Количество по смете', {
      количество: attr('Количество по смете', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
