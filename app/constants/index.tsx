import ExternalLink from "~/components/ExternalLink";

export const QUESTION_KEYS = {
  frameworkLibrary: "frameworkLibrary",
  clientServer: "clientServer",
  stateManagement: "stateManagement",
  api: "api",
  css: "css",
  components: "components",
} as const;

export const STEPS = [
  {
    name: QUESTION_KEYS.frameworkLibrary,
    title: "Framework/Library",
    question: "What is your framework/library?",
    options: [
      {
        value: "React",
        suggestions: (
          <ExternalLink href="https://react.dev/">React</ExternalLink>
        ),
        alternatives: null,
      },
    ],
  },
  {
    name: QUESTION_KEYS.clientServer,
    title: "Client/Server",
    question: "What will the app use more?",
    options: [
      {
        value: "Server",
        suggestions: (
          <ExternalLink href="https://nextjs.org/">Next.js</ExternalLink>
        ),
        alternatives: null,
      },
      {
        value: "Client",
        suggestions: (
          <ExternalLink href="https://remix.run/">Remix</ExternalLink>
        ),
        alternatives: (
          <ExternalLink href="https://reactrouter.com/en/main">
            React Router
          </ExternalLink>
        ),
      },
    ],
  },
  {
    name: QUESTION_KEYS.stateManagement,
    title: "State Management",
    question: "Which library you would like to use for state management?",
    options: [
      {
        value: "Redux",
        suggestions: (
          <ExternalLink href="https://redux-toolkit.js.org/introduction/getting-started">
            Redux Toolkit
          </ExternalLink>
        ),
        alternatives: null,
      },
      {
        value: "Other",
        suggestions: (
          <ExternalLink href="https://zustand.docs.pmnd.rs/getting-started/introduction">
            Zustand
          </ExternalLink>
        ),
        alternatives: null,
      },
      {
        value: "No library",
        suggestions: (
          <ExternalLink href="https://react.dev/reference/react/createContext">
            React context
          </ExternalLink>
        ),
        alternatives: null,
      },
    ],
  },
  {
    name: QUESTION_KEYS.api,
    title: "API",
    question: "Do you want to use a library for APIs?",
    options: [
      {
        value: "Yes",
        suggestions: null,
        alternatives: null,
      },
      {
        value: "No",
        suggestions: null,
        alternatives: null,
      },
    ],
  },
  {
    name: QUESTION_KEYS.css,
    title: "CSS",
    question: "Do you want to use a library for CSS?",
    options: [
      {
        value: "Yes",
        suggestions: (
          <ExternalLink href="https://tailwindcss.com/docs/installation">
            TailwindCSS
          </ExternalLink>
        ),
        alternatives: null,
      },
      {
        value: "No",
        suggestions: (
          <ExternalLink href="https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/">
            CSS Modules
          </ExternalLink>
        ),
        alternatives: null,
      },
    ],
  },
  {
    name: QUESTION_KEYS.components,
    title: "Components",
    question: "Do you want to use a component library?",
    options: [
      {
        value: "Yes",
        suggestions: null,
        alternatives: null,
      },
      {
        value: "No",
        suggestions: null,
        alternatives: null,
      },
    ],
  },
] as const;
