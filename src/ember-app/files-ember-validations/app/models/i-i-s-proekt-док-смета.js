import {
  defineNamespace,
  defineProjections,
  Model as ДокСметаMixin
} from '../mixins/regenerated/models/i-i-s-proekt-док-смета';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДокСметаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
