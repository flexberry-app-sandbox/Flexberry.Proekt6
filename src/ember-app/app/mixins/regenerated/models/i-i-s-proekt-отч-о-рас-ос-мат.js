import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  колПоАктТек: DS.attr('number'),
  нормаРасхода: DS.attr('number'),
  суммаИтого: DS.attr('decimal')
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
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтчОРасОсМатE', 'i-i-s-proekt-отч-о-рас-ос-мат', {
    нормаРасхода: attr('Норма расхода', { index: 0 }),
    колПоАктТек: attr('Количество по актам текущий', { index: 1 }),
    суммаИтого: attr('Сумма итого', { index: 2 })
  });

  modelClass.defineProjection('ОтчОРасОсМатL', 'i-i-s-proekt-отч-о-рас-ос-мат', {
    нормаРасхода: attr('Норма расхода', { index: 0 }),
    колПоАктТек: attr('Количество по актам текущий', { index: 1 }),
    суммаИтого: attr('Сумма итого', { index: 2 })
  });
};
