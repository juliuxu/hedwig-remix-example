import "@posten-hedwig/core";
import "@posten-hedwig/base";
import { Accordion, AccordionItem } from "@posten-hedwig/accordion";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Hedwig React Components Example" },
    {
      name: "description",
      content: "A reference project for hedwig-react-components",
    },
  ];
};

export default function Index() {
  return (
    <main>
      <article>
        <h2>Accordion</h2>
        <Accordion>
          <AccordionItem title="Opening hours">
            <p>We are open Monday to Friday from 07:00 to 18:00</p>
          </AccordionItem>
          <AccordionItem title="Accessibility">
            <p>We have a wheelchair platform and a handicap toilet</p>
          </AccordionItem>
        </Accordion>
      </article>
    </main>
  );
}
