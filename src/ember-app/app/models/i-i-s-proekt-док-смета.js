import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДокСметаMixin
} from '../mixins/regenerated/models/i-i-s-proekt-док-смета';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДокСметаMixin, Validations, {
});

defineProjections(Model);

export default Model;
