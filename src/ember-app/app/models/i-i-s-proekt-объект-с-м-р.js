import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОбъектСМРMixin
} from '../mixins/regenerated/models/i-i-s-proekt-объект-с-м-р';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОбъектСМРMixin, Validations, {
});

defineProjections(Model);

export default Model;
