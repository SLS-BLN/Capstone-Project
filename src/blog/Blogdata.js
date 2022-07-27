import {nanoid} from 'nanoid';

const blogs = [
  {
    id: nanoid(),
    tag: 'Audio',
    heading: 'Warum ein guter Ton bei Videos so wichtig ist',
    lead: 'Bei einem Dreh ist es neulich wieder passiert: schöne Bilder aus einem kleinen Modeladen, aber kein Ton. Als ich das im Schnittprogramm bemerkt habe, war die Laune sofort dahin. All die schöne Atmo weg - kein Dampfbügeleisen zu hören, keine Kundengespräche und kein Surren der Nähmaschine.',
    author: 'von Stefan L. Schlicker',
    date: '15. Juli 2022',
    dateUpdated: 'last update: 17. Juli 2022',
    text1:
      'Ist gar nicht so schlimm, mag sich der ein oder andere denken. Nun ja, zunächst einmal musste ich für eine    Minute Material im fertigen Beitrag Geräusche unterlegen. Das ist mühsam und dauert eine halbe Stunde länger als geplant. Noch schlimmer ist, dass die Original-Atmo den Beitrag viel authentischer gemacht hätte. Das liegt daran, wie unser Gehirn Musik und Geräusche verarbeitet: unterbewusst.',
    subHeading1: 'Audio wirkt anders als Video – viel unmittelbarer',
    text2:
      'Stellen Sie sich vor: Sie spazieren auf der Straße. Fünf Kampfhunde stürmen bellend heran. Bevor Sie sich umdrehen und die Gefahr sehen, ist Ihr Gehirn schon in Alarmbereitschaft. Das Hören ist der Sinn, der unmittelbar eine Reaktion im Körper auslöst.',

    text3:
      "Das ist kein Grund, sie bei der Produktion zu ignonieren - die Kampfhunde lauern überall. Der Ton verstärkt das Bild und kann Emotionen auslösen. Was wäre die Kussszene von 'Titanic' ohne die Klänge von 'My Heart will go on' - an der Stelle übrigens ohne die Stimme von Celine Dion. Die war nur Abspann zu hören.",
    subHeading2: 'Zuschauer ertragen schlechten Ton nicht',
    text4:
      'Wenn etwas mit dem Ton nicht stimmt, dann merkt der Zuschauer das sehr bewusst. Die Grundregel lautet: das Publikum verzeiht schlechte Bildqualität, wenn der Ton gut ist. Umgekehrt gilt das nicht: ist das Bild schön, aber der Ton verzerrt, dann dauert es nur wenige Sekunden, bis der Zuschauer reagiert. Das nächste Video ist einen Klick entfernt.',
    text5:
      'In Corona-Zeiten sind in den Nachrichtensendungen verstärkt Interviews von zu Hause zu sehen. Die Bildqualität ist oft nicht berauschend. Wenn dazu ein blecherner Ton kommt, ist der Griff zur Fernbedienung nicht weit.',
    text6:
      'Noch klarer wird der Fall im Autoradio. Sobald man sich von seinem Lieblingssender entfernt und die ersten Störungen auftreten, wird das Programm gewechselt. Lieblingslied hin oder her.',
    text7: 'Wenn Sie also ein Video drehen, dann muss der Ton mindestens so gut wie die Bilder sein.',
  },
];

console.log(blogs);
