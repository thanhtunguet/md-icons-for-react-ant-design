/* tslint:disable:max-line-length */
import { IconDefinition } from '@ant-design/icons-svg/lib/types';

const MatSignalCellular3Bar: IconDefinition = {
  name: 'mat-signal-cellular-3-bar',
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
          fillOpacity: '.3',
          d: 'M4 44h40V4z',
        },
      },
      {
        tag: 'path',
        attrs: {
          d: 'M34 14L4 44h30z',
        },
      },
    ],
  },
};

export default MatSignalCellular3Bar;
