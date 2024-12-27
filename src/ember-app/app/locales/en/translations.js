import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISHappy_New_YearGiftLForm from './forms/i-i-s-happy-new-year-gift-l';
import IISHappy_New_YearGiftTypeLForm from './forms/i-i-s-happy-new-year-gift-type-l';
import IISHappy_New_YearGiftEForm from './forms/i-i-s-happy-new-year-gift-e';
import IISHappy_New_YearGiftTypeEForm from './forms/i-i-s-happy-new-year-gift-type-e';
import IISHappy_New_YearGiftTypeModel from './models/i-i-s-happy-new-year-gift-type';
import IISHappy_New_YearGiftModel from './models/i-i-s-happy-new-year-gift';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-happy-new-year-gift-type': IISHappy_New_YearGiftTypeModel,
    'i-i-s-happy-new-year-gift': IISHappy_New_YearGiftModel,
  },

  'application-name': 'Happy_ new_ year',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...',
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!',
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu',
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings',
          },
          'show-menu': {
            caption: 'Show menu',
          },
          'hide-menu': {
            caption: 'Hide menu',
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language',
          },
        },
        login: {
          caption: 'Login',
        },
        logout: {
          caption: 'Logout',
        },
      },

      footer: {
        'application-name': 'Happy_ new_ year',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.',
        },
      },

      sitemap: {
        'application-name': {
          caption: 'Happy_ new_ year',
          title: 'Happy_ new_ year',
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.',
        },
        index: {
          caption: 'Home',
          title: '',
        },
        'happy-new-year': {
          caption: 'Happy_New_Year',
          title: 'Happy_New_Year',
          'i-i-s-happy-new-year-gift-l': {
            caption: 'Gift',
            title: '',
          },
          'i-i-s-happy-new-year-gift-type-l': {
            caption: 'Gift type',
            title: '',
          },
        },
      },
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed',
    },
    'i-i-s-happy-new-year-gift-l': IISHappy_New_YearGiftLForm,
    'i-i-s-happy-new-year-gift-type-l': IISHappy_New_YearGiftTypeLForm,
    'i-i-s-happy-new-year-gift-e': IISHappy_New_YearGiftEForm,
    'i-i-s-happy-new-year-gift-type-e': IISHappy_New_YearGiftTypeEForm,
  },

});

export default translations;
