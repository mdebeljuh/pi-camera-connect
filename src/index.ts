export { default as StillCamera, StillOptions } from './lib/still-camera';
export { default as StreamCamera, StreamOptions, Codec, SensorMode } from './lib/stream-camera';

export enum Rotation {
  Rotate0 = 0,
  Rotate90 = 90,
  Rotate180 = 180,
  Rotate270 = 270,
}

export enum Flip {
  None = 'none',
  Horizontal = 'horizontal',
  Vertical = 'vertical',
  Both = 'both',
}

// export enum ExposureMode {
//   Off = 'off',
//   Auto = 'auto',
//   Night = 'night',
//   NightPreview = 'nightpreview',
//   Backlight = 'backlight',
//   Spotlight = 'spotlight',
//   Sports = 'sports',
//   Snow = 'snow',
//   Beach = 'beach',
//   VeryLong = 'verylong',
//   FixedFps = 'fixedfps',
//   AntiShake = 'antishake',
//   Fireworks = 'fireworks',
// }
export enum ExposureMode {
  Normal = 'normal',
  Sport = 'sport',
  Long = 'long',
}

export enum AwbMode {
  Auto = 'auto',
  Incandescent = 'incandescent',
  Tungsten = 'tungsten',
  Fluorescent = 'fluorescent',
  Indoor = 'indoor',
  DayLight = 'daylight',
  Cloudy = 'cloudy',
  Custom = 'custom',
}
