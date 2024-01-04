import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProektДокСметаLForm from './forms/i-i-s-proekt-док-смета-l';
import IISProektДокУсловДогLForm from './forms/i-i-s-proekt-док-услов-дог-l';
import IISProektЕдИзмеренLForm from './forms/i-i-s-proekt-ед-измерен-l';
import IISProektНоменклатураLForm from './forms/i-i-s-proekt-номенклатура-l';
import IISProektОбъектСМРLForm from './forms/i-i-s-proekt-объект-с-м-р-l';
import IISProektОтПоВыпДоговLForm from './forms/i-i-s-proekt-от-по-вып-догов-l';
import IISProektОтчОРасОсМатLForm from './forms/i-i-s-proekt-отч-о-рас-ос-мат-l';
import IISProektРасхМатВСтроLForm from './forms/i-i-s-proekt-расх-мат-в-стро-l';
import IISProektСотрудникиLForm from './forms/i-i-s-proekt-сотрудники-l';
import IISProektСпрКонтрагLForm from './forms/i-i-s-proekt-спр-контраг-l';
import IISProektСпраДолжносLForm from './forms/i-i-s-proekt-спра-должнос-l';
import IISProektТЧСметаLForm from './forms/i-i-s-proekt-т-ч-смета-l';
import IISProektДокСметаEForm from './forms/i-i-s-proekt-док-смета-e';
import IISProektДокУсловДогEForm from './forms/i-i-s-proekt-док-услов-дог-e';
import IISProektЕдИзмеренEForm from './forms/i-i-s-proekt-ед-измерен-e';
import IISProektНоменклатураEForm from './forms/i-i-s-proekt-номенклатура-e';
import IISProektОбъектСМРEForm from './forms/i-i-s-proekt-объект-с-м-р-e';
import IISProektОтПоВыпДоговEForm from './forms/i-i-s-proekt-от-по-вып-догов-e';
import IISProektОтчОРасОсМатEForm from './forms/i-i-s-proekt-отч-о-рас-ос-мат-e';
import IISProektРасхМатВСтроEForm from './forms/i-i-s-proekt-расх-мат-в-стро-e';
import IISProektСотрудникиEForm from './forms/i-i-s-proekt-сотрудники-e';
import IISProektСпрКонтрагEForm from './forms/i-i-s-proekt-спр-контраг-e';
import IISProektСпраДолжносEForm from './forms/i-i-s-proekt-спра-должнос-e';
import IISProektТЧСметаEForm from './forms/i-i-s-proekt-т-ч-смета-e';
import IISProektДокСметаModel from './models/i-i-s-proekt-док-смета';
import IISProektДокУсловДогModel from './models/i-i-s-proekt-док-услов-дог';
import IISProektЕдИзмеренModel from './models/i-i-s-proekt-ед-измерен';
import IISProektНоменклатураModel from './models/i-i-s-proekt-номенклатура';
import IISProektОбъектСМРModel from './models/i-i-s-proekt-объект-с-м-р';
import IISProektОтПоВыпДоговModel from './models/i-i-s-proekt-от-по-вып-догов';
import IISProektОтчОРасОсМатModel from './models/i-i-s-proekt-отч-о-рас-ос-мат';
import IISProektРасхМатВСтроModel from './models/i-i-s-proekt-расх-мат-в-стро';
import IISProektСотрудникиModel from './models/i-i-s-proekt-сотрудники';
import IISProektСпраДолжносModel from './models/i-i-s-proekt-спра-должнос';
import IISProektТЧСметаModel from './models/i-i-s-proekt-т-ч-смета';
import СправочникКонтрагентыModel from './models/справочник-контрагенты';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proekt-док-смета': IISProektДокСметаModel,
    'i-i-s-proekt-док-услов-дог': IISProektДокУсловДогModel,
    'i-i-s-proekt-ед-измерен': IISProektЕдИзмеренModel,
    'i-i-s-proekt-номенклатура': IISProektНоменклатураModel,
    'i-i-s-proekt-объект-с-м-р': IISProektОбъектСМРModel,
    'i-i-s-proekt-от-по-вып-догов': IISProektОтПоВыпДоговModel,
    'i-i-s-proekt-отч-о-рас-ос-мат': IISProektОтчОРасОсМатModel,
    'i-i-s-proekt-расх-мат-в-стро': IISProektРасхМатВСтроModel,
    'i-i-s-proekt-сотрудники': IISProektСотрудникиModel,
    'i-i-s-proekt-спра-должнос': IISProektСпраДолжносModel,
    'i-i-s-proekt-т-ч-смета': IISProektТЧСметаModel,
    'справочник-контрагенты': СправочникКонтрагентыModel
  },

  'application-name': 'Proekt',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Proekt',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proekt',
          title: 'Proekt'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        proekt: {
          caption: 'Proekt',
          title: 'Proekt',
          'i-i-s-proekt-отч-о-рас-ос-мат-l': {
            caption: 'Отчет о расходах основных материалов',
            title: ''
          },
          'i-i-s-proekt-расх-мат-в-стро-l': {
            caption: 'Расход материалов в строительстве',
            title: ''
          },
          'i-i-s-proekt-док-смета-l': {
            caption: 'Документ смета',
            title: ''
          },
          'i-i-s-proekt-объект-с-м-р-l': {
            caption: 'Объекты СМР',
            title: ''
          },
          'i-i-s-proekt-ед-измерен-l': {
            caption: 'Единицы измерения',
            title: ''
          },
          'i-i-s-proekt-от-по-вып-догов-l': {
            caption: 'Отчет по выполнению договоров',
            title: ''
          },
          'i-i-s-proekt-номенклатура-l': {
            caption: 'Номенклатура',
            title: ''
          },
          'i-i-s-proekt-спра-должнос-l': {
            caption: 'Справочник должности',
            title: ''
          },
          'i-i-s-proekt-док-услов-дог-l': {
            caption: 'Документ условия договора',
            title: ''
          },
          'i-i-s-proekt-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-proekt-спр-контраг-l': {
            caption: 'Справочник контрагент',
            title: ''
          },
          'i-i-s-proekt-т-ч-смета-l': {
            caption: 'Табличная часть сметы',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-proekt-док-смета-l': IISProektДокСметаLForm,
    'i-i-s-proekt-док-услов-дог-l': IISProektДокУсловДогLForm,
    'i-i-s-proekt-ед-измерен-l': IISProektЕдИзмеренLForm,
    'i-i-s-proekt-номенклатура-l': IISProektНоменклатураLForm,
    'i-i-s-proekt-объект-с-м-р-l': IISProektОбъектСМРLForm,
    'i-i-s-proekt-от-по-вып-догов-l': IISProektОтПоВыпДоговLForm,
    'i-i-s-proekt-отч-о-рас-ос-мат-l': IISProektОтчОРасОсМатLForm,
    'i-i-s-proekt-расх-мат-в-стро-l': IISProektРасхМатВСтроLForm,
    'i-i-s-proekt-сотрудники-l': IISProektСотрудникиLForm,
    'i-i-s-proekt-спр-контраг-l': IISProektСпрКонтрагLForm,
    'i-i-s-proekt-спра-должнос-l': IISProektСпраДолжносLForm,
    'i-i-s-proekt-т-ч-смета-l': IISProektТЧСметаLForm,
    'i-i-s-proekt-док-смета-e': IISProektДокСметаEForm,
    'i-i-s-proekt-док-услов-дог-e': IISProektДокУсловДогEForm,
    'i-i-s-proekt-ед-измерен-e': IISProektЕдИзмеренEForm,
    'i-i-s-proekt-номенклатура-e': IISProektНоменклатураEForm,
    'i-i-s-proekt-объект-с-м-р-e': IISProektОбъектСМРEForm,
    'i-i-s-proekt-от-по-вып-догов-e': IISProektОтПоВыпДоговEForm,
    'i-i-s-proekt-отч-о-рас-ос-мат-e': IISProektОтчОРасОсМатEForm,
    'i-i-s-proekt-расх-мат-в-стро-e': IISProektРасхМатВСтроEForm,
    'i-i-s-proekt-сотрудники-e': IISProektСотрудникиEForm,
    'i-i-s-proekt-спр-контраг-e': IISProektСпрКонтрагEForm,
    'i-i-s-proekt-спра-должнос-e': IISProektСпраДолжносEForm,
    'i-i-s-proekt-т-ч-смета-e': IISProektТЧСметаEForm
  },

});

export default translations;
