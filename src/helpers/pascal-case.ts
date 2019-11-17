import {camelCase} from 'lodash';

export function pascalCase(input: string) {
  const camelCaseName: string = camelCase(input);
  return camelCaseName.charAt(0).toUpperCase() + camelCaseName.substr(1);
}
