import {nanoid} from 'nanoid';

export const videoEntries = [
  {
    id: nanoid(),
    title: 'Warum Ton wichtig ist',
    slug: 'warum-ton-wichtig-ist',
    videoUrl: 'https://res.cloudinary.com/dq2vrujou/image/upload/v1659271615/mixer_1000px_eforvy.jpg',
    posterFrameUrl:
      'https://res.cloudinary.com/dq2vrujou/image/upload/w_1000,ar_5:3,c_fill,g_auto,e_art:hokusai/v1659271615/mixer_1000px_eforvy.jpg',
    tag: 'Audio',
    description:
      'Bei einem Dreh ist es neulich wieder passiert: schöne Bilder aus einem kleinen Modeladen, aber kein Ton.',
    lowerThirds: [
      {name: 'Peter Miller', jobtitle: 'Produzent'},
      {name: 'Hannah Poller', jobtitle: 'Geschäftsführerin Poller AG'},
      {name: 'Tom Peters', jobtitle: 'Bürgermeiste Topflbumendorf'},
    ],
    location: 'Berlin',
    author: 'Ben Muster',
    cameraman: 'Stefan L. Schlicker',
    editor: 'Stefan L. Schlicker',
    date: '15. Juli 2022',
    dateUpdated: 'last update: 17. Juli 2022',
    length: '1:30',
    script: [
      'Als ich das im Schnittprogramm bemerkt habe, war die Laune sofort dahin. All die schöne Atmo weg - kein Dampfbügeleisen zu hören, keine Kundengespräche und kein Surren der Nähmaschine.',
      'Ist gar nicht so schlimm, mag sich der ein oder andere denken. Nun ja, zunächst einmal musste ich für eine Minute Material im fertigen Beitrag Geräusche unterlegen. Das ist mühsam und dauert eine halbe Stunde länger als geplant. Noch schlimmer ist, dass die Original-Atmo den Beitrag viel authentischer gemacht hätte. Das liegt daran, wie unser Gehirn Musik und Geräusche verarbeitet: unterbewusst.',
      'Stellen Sie sich vor: Sie spazieren auf der Straße. Fünf Kampfhunde stürmen bellend heran. Bevor Sie sich umdrehen und die Gefahr sehen, ist Ihr Gehirn schon in Alarmbereitschaft. Das Hören ist der Sinn, der unmittelbar eine Reaktion im Körper auslöst.',
      'Noch klarer wird der Fall im Autoradio. Sobald man sich von seinem Lieblingssender entfernt und die ersten Störungen auftreten, wird das Programm gewechselt. Lieblingslied hin oder her.',
      'Wenn Sie also ein Video drehen, dann muss der Ton mindestens so gut wie die Bilder sein.',
    ],
  },
];
