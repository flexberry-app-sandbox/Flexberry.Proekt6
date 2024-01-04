import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЕдИзмеренMixin
} from '../mixins/regenerated/models/i-i-s-proekt-ед-измерен';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЕдИзмеренMixin, Validations, {
});

defineProjections(Model);

export default Model;
