import {
  defineNamespace,
  defineProjections,
  Model as ТЧСметаMixin
} from '../mixins/regenerated/models/i-i-s-proekt-т-ч-смета';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧСметаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
