import "@posten-hedwig/core";
import "@posten-hedwig/base";
import { Accordion, AccordionItem } from "@posten-hedwig/accordion";
import type { V2_MetaFunction } from "@remix-run/node";
import {
  Badge,
  DarkBadge,
  WarningBadge,
  WhiteBadge,
} from "@posten-hedwig/badge";
import { Block } from "@posten-hedwig/block";
import {
  ChatButton,
  LightOutlineButton,
  PrimaryButton,
  PrimaryOutlineButton,
  SecondaryButton,
  SecondaryOutlineButton,
} from "@posten-hedwig/button";
import { Container } from "@posten-hedwig/container";
import { Grid, GridItem } from "@posten-hedwig/grid";
import InfoBox from "@posten-hedwig/infobox";

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
    <Container as="main">
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

      <article>
        <h2>Badge</h2>
        <Badge>Badge</Badge>
        <DarkBadge>DarkBadge</DarkBadge>
        <WarningBadge>WarningBadge</WarningBadge>
        <WhiteBadge>WhiteBadge</WhiteBadge>
      </article>

      <article>
        <h2>Block</h2>
        <Block elementType="p">Hello, world</Block>
      </article>

      <article>
        <h2>Button</h2>
        <ChatButton />
        <LightOutlineButton>LightOutlineButton</LightOutlineButton>
        <PrimaryButton>PrimaryButton</PrimaryButton>
        <PrimaryOutlineButton>PrimaryOutlineButton</PrimaryOutlineButton>
        <SecondaryButton>SecondaryButton</SecondaryButton>
        <SecondaryOutlineButton>SecondaryOutlineButton</SecondaryOutlineButton>
      </article>

      <article>
        <h2>Grid</h2>
        <Grid>
          <GridItem size="one-half">Left</GridItem>
          <GridItem size="one-half">Right</GridItem>
        </Grid>
        <Grid>
          <GridItem size="one-third">First</GridItem>
          <GridItem size="one-third">Second</GridItem>
          <GridItem size="one-third">Third</GridItem>
        </Grid>
      </article>

      <article>
        <h2>InfoBox</h2>
        <InfoBox title="Ahoi!">Here is some info</InfoBox>
      </article>
    </Container>
  );
}
