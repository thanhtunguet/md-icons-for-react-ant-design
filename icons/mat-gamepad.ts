/* tslint:disable:max-line-length */
import { IconDefinition } from '@ant-design/icons-svg/lib/types';

const MatGamepad: IconDefinition = {
  name: 'mat-gamepad',
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
          d: 'M30 15V4H18v11l6 6 6-6zm-15 3H4v12h11l6-6-6-6zm3 15v11h12V33l-6-6-6 6zm15-15l-6 6 6 6h11V18H33z',
        },
      },
    ],
  },
};

export default MatGamepad;
