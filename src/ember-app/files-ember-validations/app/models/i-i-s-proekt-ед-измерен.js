import {
  defineNamespace,
  defineProjections,
  Model as ЕдИзмеренMixin
} from '../mixins/regenerated/models/i-i-s-proekt-ед-измерен';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЕдИзмеренMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
