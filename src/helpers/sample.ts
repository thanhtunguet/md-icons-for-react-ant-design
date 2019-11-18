import {IconDefinition} from '@ant-design/icons-svg/lib/types';
import {name as packageName} from '../../package.json';

export function buildIconSample(name: string, icon: IconDefinition) {
  return `
import ${name} from '${packageName}/icons/${icon.name}';
import Icon from '@ant-design/icons-react';

function UsageInComponent() {
  return (
    <Icon type={${name}} />
  );
}
    `.trim();
}
