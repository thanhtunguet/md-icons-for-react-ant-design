/* tslint:disable:max-line-length */
import { IconDefinition } from '@ant-design/icons-svg/lib/types';

const MatAddCircle: IconDefinition = {
  name: 'mat-add-circle',
  theme: 'outline',
  icon: {
    tag: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '48',
      height: '48',
      viewBox: '0 0 48 48',
    },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 22h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z',
        },
      },
    ],
  },
};

export default MatAddCircle;
