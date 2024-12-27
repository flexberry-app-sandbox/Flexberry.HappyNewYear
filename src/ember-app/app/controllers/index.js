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
          caption: i18n.t('forms.application.sitemap.happy-new-year.caption'),
          title: i18n.t('forms.application.sitemap.happy-new-year.title'),
          children: [{
            link: 'i-i-s-happy-new-year-gift-l',
            caption: i18n.t('forms.application.sitemap.happy-new-year.i-i-s-happy-new-year-gift-l.caption'),
            title: i18n.t('forms.application.sitemap.happy-new-year.i-i-s-happy-new-year-gift-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-happy-new-year-gift-type-l',
            caption: i18n.t('forms.application.sitemap.happy-new-year.i-i-s-happy-new-year-gift-type-l.caption'),
            title: i18n.t('forms.application.sitemap.happy-new-year.i-i-s-happy-new-year-gift-type-l.title'),
            icon: 'book',
            children: null
          }]
        }
      ]
    };
  }),
})