import assert from 'assert';
import isPlainObject from 'is-plain-object';

export default function() {
  return {
    name: 'entry',
    validate(val) {
      assert(
        isPlainObject(val) || typeof val === 'string',
        `The entry config must be Plain Object or String, but got ${val}`,
      );
    },
  };
}
