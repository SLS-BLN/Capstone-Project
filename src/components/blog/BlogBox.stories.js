import BlogBox from './BlogBox';
import {nanoid} from 'nanoid';

export default {
  title: 'Component/BlogBox',
  component: BlogBox,
  parameters: {
    layout: 'fullscreen',
  },
};

const data = {
  id: nanoid(),
  title: 'Warum ein guter Ton bei Videos so wichtig ist',
  titleShort: 'Warum Ton wichtig ist',
  slug: 'warum-ton-wichtig-ist',
  imgUrl: 'https://res.cloudinary.com/dq2vrujou/image/upload/v1659271615/mixer_1000px_eforvy.jpg',
  imgUrlSquare:
    'https://res.cloudinary.com/dq2vrujou/image/upload/w_1000,ar_5:3,c_fill,g_auto,e_art:hokusai/v1659271615/mixer_1000px_eforvy.jpg',
  imgAlt: 'Audio Mixer',
  tag: 'Audio',
  lead: 'Bei einem Dreh ist es neulich wieder passiert: schöne Bilder aus einem kleinen Modeladen, aber kein Ton.',
  author: 'von Stefan L. Schlicker',
  date: '15. Juli 2022',
  dateUpdated: 'last update: 17. Juli 2022',
  text: [
    'Als ich das im Schnittprogramm bemerkt habe, war die Laune sofort dahin. All die schöne Atmo weg - kein Dampfbügeleisen zu hören, keine Kundengespräche und kein Surren der Nähmaschine.',
    'Ist gar nicht so schlimm, mag sich der ein oder andere denken. Nun ja, zunächst einmal musste ich für eine Minute Material im fertigen Beitrag Geräusche unterlegen. Das ist mühsam und dauert eine halbe Stunde länger als geplant. Noch schlimmer ist, dass die Original-Atmo den Beitrag viel authentischer gemacht hätte. Das liegt daran, wie unser Gehirn Musik und Geräusche verarbeitet: unterbewusst.',
  ],
};

const Template = args => <BlogBox blog={{...args}} />;

export const Default = Template.bind({});
Default.args = data;
