import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СпраДолжносMixin
} from '../mixins/regenerated/models/i-i-s-proekt-спра-должнос';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СпраДолжносMixin, Validations, {
});

defineProjections(Model);

export default Model;
