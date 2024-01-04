import {
  defineNamespace,
  defineProjections,
  Model as ОтчОРасОсМатMixin
} from '../mixins/regenerated/models/i-i-s-proekt-отч-о-рас-ос-мат';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтчОРасОсМатMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
