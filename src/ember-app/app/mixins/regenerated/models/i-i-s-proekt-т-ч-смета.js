import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  стоимМонРаб: DS.attr('decimal'),
  стоимОборуд: DS.attr('decimal'),
  стоимСтроРаб: DS.attr('decimal'),
  докСмета: DS.belongsTo('i-i-s-proekt-док-смета', { inverse: 'тЧСмета', async: false })
});

export let ValidationRules = {
  стоимМонРаб: {
    descriptionKey: 'models.i-i-s-proekt-т-ч-смета.validations.стоимМонРаб.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  стоимОборуд: {
    descriptionKey: 'models.i-i-s-proekt-т-ч-смета.validations.стоимОборуд.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  стоимСтроРаб: {
    descriptionKey: 'models.i-i-s-proekt-т-ч-смета.validations.стоимСтроРаб.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  докСмета: {
    descriptionKey: 'models.i-i-s-proekt-т-ч-смета.validations.докСмета.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧСметаE', 'i-i-s-proekt-т-ч-смета', {
    стоимСтроРаб: attr('Стоимость строительных работ', { index: 0 }),
    стоимМонРаб: attr('Стоимость монтажных работ', { index: 1 }),
    стоимОборуд: attr('Стоимость оборудования', { index: 2 })
  });

  modelClass.defineProjection('ТЧСметаL', 'i-i-s-proekt-т-ч-смета', {
    стоимСтроРаб: attr('Стоимость строительных работ', { index: 0 }),
    стоимМонРаб: attr('Стоимость монтажных работ', { index: 1 }),
    стоимОборуд: attr('Стоимость оборудования', { index: 2 })
  });
};
