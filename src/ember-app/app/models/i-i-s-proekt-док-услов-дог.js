import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДокУсловДогMixin
} from '../mixins/regenerated/models/i-i-s-proekt-док-услов-дог';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДокУсловДогMixin, Validations, {
});

defineProjections(Model);

export default Model;
