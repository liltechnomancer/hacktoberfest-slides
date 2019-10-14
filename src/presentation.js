// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Layout
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Hacktoberfest
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            How to get started contributing to open source
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Why should I listen to you about open source?
          </Heading>
          <Text textAlign="left" textColor="tertiary" bold>
            Contributions:
          </Text>
          <List>
            <ListItem>
              <a href="https://jquery.com/">jQuery</a>
            </ListItem>
            <ListItem>
              <a href="https://github.com/rspec/rspec">Rspec</a>
            </ListItem>
            <ListItem>
              <a href="https://github.com/ChristopherBiscardi/gatsby-mdx">
                Gatsby-MDX
              </a>
            </ListItem>
            <ListItem>
              <a href="https://magnoliajs.com/">MagnoliaConf</a>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Layout>
            <Heading size={6} textColor="primary" caps>
              What is Hacktoberfest?
            </Heading>
          </Layout>
          <Image src="/hacktoberfest.png" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Free stuff!
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            Hacktoberfest is a month long event meant to foster contributions to
            OSS by giving away free swag!
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            How do I get my free stuff?
          </Heading>
          <List textColor="primary">
            <ListItem>
              Sign up on the Hacktoberfest{" "}
              <a href="https://hacktoberfest.digitalocean.com/">website.</a>
            </ListItem>
            <ListItem>Make 5 Contributions to OSS before 10/31</ListItem>
            <ListItem>Get a free shirt.</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            How the hell do I contribute.
          </Heading>
          <List>
            <ListItem>
              <a href="https://www.codecademy.com/learn/learn-git">
                Learn Git/Github.
              </a>
            </ListItem>
            <ListItem>
              <a href="https://hacktoberfest.digitalocean.com/details">
                Find an issue that you can help with.
              </a>
            </ListItem>
            <ListItem>Profit???</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              But Levi... I suck and can't find a project I could add any value
              to.
            </Quote>
            <Cite>Someone with imposter syndrome probably</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Who the hell am I going to have write all these docs?</Quote>
            <Cite>Someone with an open source project probably.</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Contribution breakdown.
          </Heading>
          <Text textAlign="left" textColor="tertiary" bold>
            Contributions:
          </Text>
          <List>
            <ListItem>
              <a href="https://jquery.com/">jQuery</a> (DOCS)
            </ListItem>
            <ListItem>
              <a href="https://github.com/rspec/rspec">Rspec</a> (DOCS)
            </ListItem>
            <ListItem>
              <a href="https://github.com/ChristopherBiscardi/gatsby-mdx">
                Gatsby-MDX
              </a>
              (DOCS)
            </ListItem>
            <ListItem>
              <a href="https://magnoliajs.com/">MagnoliaConf</a> (CODE)
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Additional Resources
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            You can head to the{" "}
            <a href="https://hacktoberfest.digitalocean.com/details">
              Hacktoberfest website
            </a>{" "}
            for resources on finding projects. Or check out this{" "}
            <a href="https://www.gatsbyjs.org/blog/2019-10-08-hacktoberfest-2019/">
              Guide by Gatsby
            </a>
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Thanks to our sponsors!
          </Heading>
          <List textColor="primary">
            <ListItem>Gatsby JS</ListItem>
            <ListItem>Co+Hoots Phoenix</ListItem>
            <ListItem>HalfStack Conf</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
