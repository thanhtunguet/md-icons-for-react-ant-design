/* tslint:disable:max-line-length */
import { IconDefinition } from '@ant-design/icons-svg/lib/types';

const MatBatteryCharging80: IconDefinition = {
  name: 'mat-battery-charging-80',
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
          d: 'M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V18h9.87L26 14v4h8v-7.33C34 9.19 32.81 8 31.33 8z',
        },
      },
      {
        tag: 'path',
        attrs: {
          d: 'M26 25h4l-8 15V29h-4l5.87-11H14v23.33C14 42.8 15.19 44 16.67 44h14.67c1.47 0 2.67-1.19 2.67-2.67V18h-8v7z',
        },
      },
    ],
  },
};

export default MatBatteryCharging80;
