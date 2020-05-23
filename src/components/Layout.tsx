import * as React from "react";
import { Link } from "carbon-components-react";
import NextLink from "next/link";
import Head from "next/head";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title",
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <NextLink href="/">
          <Link>Home</Link>
        </NextLink>
        &nbsp;|&nbsp;
        <NextLink href="/about">
          <Link>About</Link>
        </NextLink>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
