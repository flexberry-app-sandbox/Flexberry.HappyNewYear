import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as GiftMixin
} from '../mixins/regenerated/models/i-i-s-happy-new-year-gift';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(GiftMixin, Validations, {
});

defineProjections(Model);

export default Model;
