import { LanguageConfig } from '@/ts/types/LanguageConfig';

export const jsReservedWords = [
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'debugger',
  'default',
  'delete',
  'do',
  'else',
  'export',
  'extends',
  'false',
  'finally',
  'for',
  'function',
  'if',
  'import',
  'in',
  'instanceof',
  'new',
  'null',
  'return',
  'super',
  'switch',
  'this',
  'throw',
  'true',
  'try',
  'typeof',
  'var',
  'void',
  'while',
  'with',
];

export const jsStrictReservedWords = ['let', 'static', 'yield'];

export const jsAyncReservedWords = ['await'];

export const jsFutureReservedWords = [
  'enum',
  'implements',
  'interface',
  'package',
  'private',
  'protected',
];

export const jsFutureReservedWordsOlder = [
  'abstract',
  'boolean',
  'byte',
  'char',
  'double',
  'final',
  'float',
  'goto',
  'int',
  'long',
  'native',
  'short',
  'synchronized',
  'throws',
  'transient',
  'volatile',
];

export const jsLiterals = ['null', 'true', 'false'];

// need exponential, binary, octal, etc.

export const jsConfig: LanguageConfig = {
  reserved: {
    name: 'js-reserved',
    words: [
      ...jsReservedWords,
      ...jsStrictReservedWords,
      ...jsAyncReservedWords,
      ...jsFutureReservedWords,
      ...jsFutureReservedWordsOlder,
    ],
  },
  variables: {
    name: 'js-variable',
  },
};
