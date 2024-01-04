import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОтПоВыпДоговMixin
} from '../mixins/regenerated/models/i-i-s-proekt-от-по-вып-догов';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОтПоВыпДоговMixin, Validations, {
});

defineProjections(Model);

export default Model;
