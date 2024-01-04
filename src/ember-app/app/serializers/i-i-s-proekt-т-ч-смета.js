import { Serializer as ТЧСметаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proekt-т-ч-смета';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧСметаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
