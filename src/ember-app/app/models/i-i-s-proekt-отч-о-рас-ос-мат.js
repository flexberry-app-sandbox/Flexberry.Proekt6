import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОтчОРасОсМатMixin
} from '../mixins/regenerated/models/i-i-s-proekt-отч-о-рас-ос-мат';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОтчОРасОсМатMixin, Validations, {
});

defineProjections(Model);

export default Model;
