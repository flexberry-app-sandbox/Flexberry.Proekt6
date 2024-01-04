import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  табелНомер: DS.attr('number'),
  фИО: DS.attr('string'),
  спраДолжнос: DS.belongsTo('i-i-s-proekt-спра-должнос', { inverse: null, async: false })
});

export let ValidationRules = {
  табелНомер: {
    descriptionKey: 'models.i-i-s-proekt-сотрудники.validations.табелНомер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-proekt-сотрудники.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  спраДолжнос: {
    descriptionKey: 'models.i-i-s-proekt-сотрудники.validations.спраДолжнос.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностьL', 'i-i-s-proekt-сотрудники', {
    табелНомер: attr('Табельный номер', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    спраДолжнос: belongsTo('i-i-s-proekt-спра-должнос', 'Должность', {
      наименование: attr('Должность', { index: 2 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('СотрудникиE', 'i-i-s-proekt-сотрудники', {
    табелНомер: attr('Табельный номер', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    спраДолжнос: belongsTo('i-i-s-proekt-спра-должнос', 'Должность', {
      наименование: attr('Должность', { index: 3 })
    }, { index: 2 })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-proekt-сотрудники', {
    табелНомер: attr('Табел номер', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    спраДолжнос: belongsTo('i-i-s-proekt-спра-должнос', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
