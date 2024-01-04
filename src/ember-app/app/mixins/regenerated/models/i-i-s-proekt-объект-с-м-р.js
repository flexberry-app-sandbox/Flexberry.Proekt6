import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  объектСтроит: DS.attr('string')
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-proekt-объект-с-м-р.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  объектСтроит: {
    descriptionKey: 'models.i-i-s-proekt-объект-с-м-р.validations.объектСтроит.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОбъектСМРE', 'i-i-s-proekt-объект-с-м-р', {
    код: attr('Код', { index: 0 }),
    объектСтроит: attr('Объект строительства', { index: 1 })
  });

  modelClass.defineProjection('ОбъектСМРL', 'i-i-s-proekt-объект-с-м-р', {
    код: attr('Код', { index: 0 }),
    объектСтроит: attr('Объект строительства', { index: 1 })
  });
};
