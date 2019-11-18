/* tslint:disable:max-line-length */
import { IconDefinition } from '@ant-design/icons-svg/lib/types';

const MatDragHandle: IconDefinition = {
  name: 'mat-drag-handle',
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
          d: 'M40 18H8v4h32v-4zM8 30h32v-4H8v4z',
        },
      },
    ],
  },
};

export default MatDragHandle;
