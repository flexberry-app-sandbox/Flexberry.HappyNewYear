import { Serializer as GiftSerializer } from
  '../mixins/regenerated/serializers/i-i-s-happy-new-year-gift';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(GiftSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
