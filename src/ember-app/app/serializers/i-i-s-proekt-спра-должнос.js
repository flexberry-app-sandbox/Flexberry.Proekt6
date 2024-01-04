import { Serializer as СпраДолжносSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proekt-спра-должнос';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СпраДолжносSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
