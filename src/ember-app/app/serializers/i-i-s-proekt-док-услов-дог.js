import { Serializer as ДокУсловДогSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proekt-док-услов-дог';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДокУсловДогSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
