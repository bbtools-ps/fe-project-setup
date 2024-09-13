import { type MetaFunction } from "@remix-run/node";
import { Link, useSearchParams } from "@remix-run/react";
import ExternalLink from "~/components/ExternalLink";
import { QUESTION_KEYS, STEPS } from "~/constants";

export const meta: MetaFunction = () => {
  return [
    { title: "Suggestions" },
    {
      name: "description",
      content: "Suggestions for setting up a project that uses React",
    },
  ];
};

export default function SuggestionsPage() {
  const [searchParams] = useSearchParams();
  const frameworkLibrary = searchParams.get(QUESTION_KEYS.frameworkLibrary);
  const clientServer = searchParams.get(QUESTION_KEYS.clientServer);
  const stateManagement = searchParams.get(QUESTION_KEYS.stateManagement);
  const api = searchParams.get(QUESTION_KEYS.api);
  const css = searchParams.get(QUESTION_KEYS.css);
  const components = searchParams.get(QUESTION_KEYS.components);

  const answers: { [key in keyof typeof QUESTION_KEYS]: string | null } = {
    frameworkLibrary,
    clientServer,
    stateManagement,
    api,
    css,
    components,
  };

  return (
    <>
      <header className="z-10">
        <h1>Suggestions</h1>
      </header>
      <main className="z-10 flex flex-1 flex-col items-center px-4">
        <div className="w-full rounded-2xl border border-slate-600 bg-slate-800 p-4 shadow-lg md:max-w-xl lg:max-w-3xl">
          <div className="mb-10 flex flex-col gap-14">
            {STEPS.map((item, index) => {
              const answer = answers[item.name];
              let suggestions;

              if (item.name === "api" && answer === "Yes") {
                if (answers.stateManagement === "Redux") {
                  suggestions = (
                    <ExternalLink href="https://redux-toolkit.js.org/rtk-query/overview">
                      RTK Query
                    </ExternalLink>
                  );
                } else if (answers.stateManagement === "Other") {
                  suggestions = (
                    <ExternalLink href="https://tanstack.com/query/latest">
                      Tanstack Query
                    </ExternalLink>
                  );
                }
              } else if (item.name === "components" && answer === "Yes") {
                if (answers.css === "Yes") {
                  suggestions = (
                    <ul>
                      <li>
                        <ExternalLink href="https://ui.shadcn.com/">
                          Shadcn UI
                        </ExternalLink>
                      </li>
                      <li>
                        <ExternalLink href="https://headlessui.com/">
                          Headless UI
                        </ExternalLink>
                      </li>
                    </ul>
                  );
                } else {
                  suggestions = (
                    <ul>
                      <li>
                        <ExternalLink href="https://mui.com/material-ui/">
                          MUI
                        </ExternalLink>
                      </li>
                      <li>
                        <ExternalLink href="https://ant.design/components/overview/">
                          Ant Design
                        </ExternalLink>
                      </li>
                      <li>
                        <ExternalLink href="https://www.radix-ui.com/themes/docs/overview/getting-started">
                          Radix UI
                        </ExternalLink>
                      </li>
                    </ul>
                  );
                }
              } else {
                suggestions = item.options.find(
                  ({ value }) => value === answer,
                )?.suggestions;
              }

              const alternatives = item.options.find(
                ({ value }) => value === answer,
              )?.alternatives;

              return (
                <article key={index} className="text-lg">
                  <h2 className="text-left text-xl italic">{item.question}</h2>
                  <p>
                    Your answer: <strong>{answer}</strong>
                  </p>
                  {suggestions && (
                    <>
                      <p className="mt-4">Suggestions:</p>
                      {suggestions}
                    </>
                  )}
                  {alternatives && (
                    <>
                      <p className="mt-4">Alternatives:</p>
                      {alternatives}
                    </>
                  )}
                </article>
              );
            })}
          </div>
          <div className="flex justify-center">
            <Link to="/" className="link-button">
              Start over
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
