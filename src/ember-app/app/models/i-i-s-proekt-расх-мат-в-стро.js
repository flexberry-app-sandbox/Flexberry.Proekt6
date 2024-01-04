import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РасхМатВСтроMixin
} from '../mixins/regenerated/models/i-i-s-proekt-расх-мат-в-стро';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РасхМатВСтроMixin, Validations, {
});

defineProjections(Model);

export default Model;
