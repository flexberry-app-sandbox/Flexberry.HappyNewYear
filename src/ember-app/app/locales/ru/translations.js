import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...',
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!',
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню',
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек',
          },
          'show-menu': {
            caption: 'Показать меню',
          },
          'hide-menu': {
            caption: 'Скрыть меню',
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык',
          },
        },
        login: {
          caption: 'Вход',
        },
        logout: {
          caption: 'Выход',
        },
      },

      footer: {
        'application-name': 'Happy_ new_ year',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.',
        },
      },

      sitemap: {
        'application-name': {
          caption: 'Happy_ new_ year',
          title: 'Happy_ new_ year',
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.',
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления',
    },
    'i-i-s-happy-new-year-gift-l': IISHappy_New_YearGiftLForm,
    'i-i-s-happy-new-year-gift-type-l': IISHappy_New_YearGiftTypeLForm,
    'i-i-s-happy-new-year-gift-e': IISHappy_New_YearGiftEForm,
    'i-i-s-happy-new-year-gift-type-e': IISHappy_New_YearGiftTypeEForm,
  },

});

export default translations;
