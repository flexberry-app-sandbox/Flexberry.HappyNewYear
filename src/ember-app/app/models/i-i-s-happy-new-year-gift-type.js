import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as GiftTypeMixin
} from '../mixins/regenerated/models/i-i-s-happy-new-year-gift-type';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(GiftTypeMixin, Validations, {
});

defineProjections(Model);

export default Model;
