import styled from 'styled-components/macro';
import AudioPost from '../assets/articles/AudioPost';
import Markdown from 'markdown-to-jsx';
import {audioArticle} from '../assets/articles/audioLiteral.js';

export default function Blog() {
  const markdown = `

  #####Audio
  #Warum ein guter Ton bei Videos so wichtig ist
  ####Bei einem Corona-Dreh ist es neulich wieder passiert: schöne Bilder aus einem kleinen Modeladen, aber kein Ton. Als ich das im Schnittprogramm bemerkt habe, war die Laune sofort dahin. All die schöne Atmo weg - kein Dampfbügeleisen zu hören, keine Kundengespräche und kein Surren der Nähmaschine.
  <Text>Ist gar nicht so schlimm, mag sich der ein oder andere denken. Nun ja, zunächst einmal musste ich für eine Minute Material im fertigen Beitrag Geräusche unterlegen. Das ist mühsam und dauert eine halbe Stunde länger als geplant. Noch schlimmer ist, dass die Original-Atmo den Beitrag viel authentischer gemacht hätte. Das liegt daran, wie unser Gehirn Musik und Geräusche verarbeitet: unterbewusst.</Text>
  ##Audio wirkt anders als Video - viel unmittelbarer
  <Text>Stellen Sie sich vor: Sie spazieren auf der Straße. Fünf Kampfhunde stürmen bellend heran. Bevor Sie sich umdrehen und die Gefahr sehen, ist Ihr Gehirn schon in Alarmbereitschaft. Das Hören ist der Sinn, der unmittelbar eine Reaktion im Körper auslöst. </Text>
  <Text>Ihr vegetatives Nervensystem übernimmt die Kontrolle. Ob Sie es wollen oder nicht, der Blutdruck steigt, die Atmung wird schneller. </Text>
  <Text>Das funktioniert auch im Kinosaal und auf Youtube. Weil Töne unmittelbar wirken, sind sie mindestens so wichtig wie Bilder. Mag der Film noch so schön sein, wenn etwas mit der Audiospur nicht stimmt, bekommen wir das sofort mit. </Text>
  <Text>Natürlich ist das Sehen der wichtigste Sinn des Menschen; er liefert 80 Prozent der Informationen über unsere Umwelt. Wenn man sich an einen Film wie "Avatar - Aufbruch nach Pandora" vorstellt, dann kommen einem sofort Bilder in den Sinn. Zum Beispiel der Flug auf den Rücken eines Ikran. Aber an die Musik oder die Geräusche in dieser Szene können wir uns nicht erinnern.</Text>
  <Text>Das ist kein Grund, sie bei der Produktion zu ignonieren - die Kampfhunde lauern überall. Der Ton verstärkt das Bild und kann Emotionen auslösen. Was wäre die Kussszene von "Titanic" ohne die Klänge von "My Heart will go on" - an der Stelle übrigens ohne die Stimme von Celine Dion. Die war nur Abspann zu hören. </Text>
  ##Zuschauer ertragen schlechten Ton nicht
  <Text>Wenn etwas mit dem Ton nicht stimmt, dann merkt der Zuschauer das sehr bewusst. Die Grundregel lautet: das Publikum verzeiht schlechte Bildqualität, wenn der Ton gut ist. Umgekehrt gilt das nicht: ist das Bild schön, aber der Ton verzerrt, dann dauert es nur wenige Sekunden, bis der Zuschauer reagiert. Das nächste Video ist einen Klick entfernt. </Text>
  <Text>In Corona-Zeiten sind in den Nachrichtensendungen verstärkt Interviews von zu Hause zu sehen. Die Bildqualität ist oft nicht berauschend. Wenn dazu ein blecherner Ton kommt, ist der Griff zur Fernbedienung nicht weit. </Text>
  <Text>Noch klarer wird der Fall im Autoradio. Sobald man sich von seinem Lieblingssender entfernt und die ersten Störungen auftreten, wird das Programm gewechselt. Lieblingslied hin oder her. </Text>
  <Text>Wenn Sie also ein Video drehen, dann muss der Ton mindestens so gut wie die Bilder sein. </Text>`;

  return (
    <Container>
      {/* <img src={mixer} alt="" width={400} /> */}
      <AudioPost />
      <Markdown
        options={{
          overrides: {h1: {component: Header}, Text: {component: Text}},
        }}
      >
        {markdown}
      </Markdown>
      {audioArticle}
    </Container>
  );
}

const Container = styled.main`
  .tag {
    font-size: 1.2rem;
    margin-bottom: 1.4rem;
  }
  h1 {
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 2rem;
  }

  .lead {
    line-height: 1.6;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .textbody {
    line-height: 1.6;
    font-weight: 300;
    margin-bottom: 1.6rem;
  }

  .date {
    font-size: 1rem;
    font-weight: 100;
    margin-bottom: 2rem;
  }
`;

export const Header = styled.h1`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 2rem;
`;

export const Text = styled.p`
  line-height: 1.6;
  font-weight: 300;
  margin-bottom: 1.6rem;
`;
