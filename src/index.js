import React from "react";
import ReactDOM from "react-dom";

import {
  FlexBox,
  SpectacleLogo,
  Heading,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Stepper,
  Slide,
  Link,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  Notes,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Quote,
} from "spectacle";
import diagram1 from "../images/PasswordHash (1).png";
import devTodayImage from "../images/devtoday/svg/Color logo - no background.svg";
import almacenamientoPwd from "../images/PasswordHash - Almacenamiento pwd.svg";
import hashSaltSlide from "../images/PasswordHash - Hash Salt.svg";
import hashSlide from "../images/PasswordHash - Hash.svg";

const formidableLogo =
  "https://avatars2.githubusercontent.com/u/5078602?s=280&v=4";

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <FlexBox padding="0 1em">
      {/* <FullScreen /> */}
      <Image src={devTodayImage} size={120} />
      {/* <Text paddingLeft="1em">Dev Today</Text> */}
    </FlexBox>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const SlideFragments = () => (
  <>
    <Slide>
      <Text>This is a slide fragment.</Text>
    </Slide>
    <Slide>
      <Text>This is also a slide fragment.</Text>
      <Appear>
        <Text>This item shows up!</Text>
      </Appear>
      <Appear>
        <Text>This item also shows up!</Text>
      </Appear>
      <Appear>
        <Text>This item also shows up!</Text>
      </Appear>
    </Slide>
  </>
);
const FirstSlide = () => {
  return (
    <Slide>
      <FlexBox height="100%">
        <Text fontSize={100}>¿Como se almacenan las contraseñas?</Text>
      </FlexBox>
      <Notes>
        Spectacle supports notes per slide.
        <ol>
          <li>Notes can now be HTML markup!</li>
          <li>Lists can make it easier to make points.</li>
        </ol>
      </Notes>
    </Slide>
  );
};
const Presentation = () => (
  <Deck theme={theme} template={template}>
    <FirstSlide />
    <Slide>
      <Heading fontSize={"h2"} margin="0px">
        ¿Como se almacenan las contraseñas?
      </Heading>
      <Image src={almacenamientoPwd} />
    </Slide>
    <Slide>
      <Heading fontSize={"h2"} margin="0px">
        Que es un hash
      </Heading>
      <Text>
        Hash es una funcion que convierte un conjunto de datos de cualquier
        tamaño a un valor de tamaño fijo
      </Text>
      <FlexBox>
        <Image src={hashSlide} />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading fontSize={"h2"} margin="0px">
        Que significa <CodeSpan>{`saltear`}</CodeSpan> en un hash
      </Heading>
      <Text>
        Es el proceso de añadir un valor aleatorio a un conjunto de datos antes
        de realizar el hash para evitar ataques de diccionario y rainbow tables
      </Text>
      <FlexBox>
        <Image src={hashSaltSlide} />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading fontSize={"h2"} margin="0px">
        Como almacenar contraseñas de manera
      </Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            Utiliza un sistema de hash seguro (SHA256, SHA512)
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>Utiliza salt para realizar el hash</ListItem>
        </Appear>
        <Appear>
          <ListItem>Plus - Encripta la contraseña</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading fontSize={"h1"}>Demo time</Heading>
      <Link
        href="https://colab.research.google.com/drive/1QeetaRvkVF1XYoje_dbTK0f0oCWfqsSp?usp=sharing"
        target={"_blank"}
      >
        https://colab.research.google.com/drive/1QeetaRvkVF1XYoje_dbTK0f0oCWfqsSp?usp=sharing
      </Link>
    </Slide>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
