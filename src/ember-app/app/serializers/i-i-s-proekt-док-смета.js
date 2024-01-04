import { Serializer as ДокСметаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proekt-док-смета';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДокСметаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
