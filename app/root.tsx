import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import ExternalLink from "./components/ExternalLink";
import bgImage from "./images/bg.png";
import "./tailwind.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <footer>
          <div className="relative z-10 my-7 w-full text-center text-white">
            <ExternalLink href="https://bogdan-bogdanovic.com/">
              Bogdan Bogdanovic
            </ExternalLink>
          </div>
          <img
            alt="Background"
            src={bgImage}
            className="fixed inset-0 h-full w-full object-cover"
          />
        </footer>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
