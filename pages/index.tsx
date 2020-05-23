import { Accordion, AccordionItem } from "carbon-components-react";
import { Add24 } from "@carbon/icons-react";

import Layout from "../src/components/Layout";

const IndexPage = () => (
  <Layout title="Home Page">
    <h1>Hello Next.js</h1>
    <Add24 />
    <Accordion>
      <AccordionItem title="Example">
        <p>
          This is a Component imported from Carbon and styled with the CSS from
          the main Carbon Components GitHub repo!
        </p>
      </AccordionItem>
      <AccordionItem title="Questions?">
        <p>
          Hi there!{" "}
          <span aria-label="Hand wave" role="img">
            👋
          </span>
          if you have any questions about this demo, or are running into any
          issues setting this up in your own development environment, please
          feel free to reach out to us on Slack or make an issue on the GitHub
          Repository.
        </p>
      </AccordionItem>
    </Accordion>
  </Layout>
);

export default IndexPage;
