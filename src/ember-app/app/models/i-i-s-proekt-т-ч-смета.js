import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧСметаMixin
} from '../mixins/regenerated/models/i-i-s-proekt-т-ч-смета';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧСметаMixin, Validations, {
});

defineProjections(Model);

export default Model;
