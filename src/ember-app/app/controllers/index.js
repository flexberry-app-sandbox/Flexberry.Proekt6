import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.proekt.caption'),
          title: i18n.t('forms.application.sitemap.proekt.title'),
          children: [{
            link: 'i-i-s-proekt-отч-о-рас-ос-мат-l',
            caption: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-отч-о-рас-ос-мат-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-отч-о-рас-ос-мат-l.title'),
            children: null
          }, {
            link: 'i-i-s-proekt-расх-мат-в-стро-l',
            caption: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-расх-мат-в-стро-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-расх-мат-в-стро-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-proekt-док-смета-l',
            caption: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-док-смета-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-док-смета-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-proekt-объект-с-м-р-l',
            caption: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-объект-с-м-р-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-объект-с-м-р-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-proekt-ед-измерен-l',
            caption: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-ед-измерен-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-ед-измерен-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-proekt-от-по-вып-догов-l',
            caption: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-от-по-вып-догов-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-от-по-вып-догов-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-proekt-номенклатура-l',
            caption: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-номенклатура-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-номенклатура-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-proekt-спра-должнос-l',
            caption: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-спра-должнос-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-спра-должнос-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-proekt-док-услов-дог-l',
            caption: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-док-услов-дог-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-док-услов-дог-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-proekt-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-сотрудники-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-proekt-спр-контраг-l',
            caption: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-спр-контраг-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-спр-контраг-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-proekt-т-ч-смета-l',
            caption: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-т-ч-смета-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-т-ч-смета-l.title'),
            icon: 'tasks',
            children: null
          }]
        }
      ]
    };
  }),
})