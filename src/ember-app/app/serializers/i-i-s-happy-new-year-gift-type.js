import { Serializer as GiftTypeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-happy-new-year-gift-type';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(GiftTypeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
