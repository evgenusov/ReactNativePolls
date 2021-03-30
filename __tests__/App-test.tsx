/**
 * @format
 */

import 'react-native';
import { stringUppercase } from '../src/utils/str';

it('should check uppercase valid ', () => {
  expect(stringUppercase('word')).toEqual('WORD');
});

it('should check uppercase invalid ', () => {
  expect(stringUppercase('мир')).toEqual('');
});

it('should uppercase lowkey', () => {
  expect(stringUppercase('lowkey')).toEqual('LOWKEY');
});
