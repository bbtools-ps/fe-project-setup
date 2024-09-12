import type { MetaFunction } from "@remix-run/node";
import { FormEvent, Fragment, useState } from "react";

const QUESTIONS = [
  {
    name: "framework",
    title: "Framework",
    description: "What is your framework?",
    options: ["React"],
  },
  {
    name: "clientServer",
    title: "Client/Server",
    description: "Where will the app run most of the time?",
    options: ["Server", "Client"],
  },
];

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((prevState) => prevState + 1);
  };

  const previousStep = () => {
    setStep((prevState) => prevState - 1);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formDataObj = Object.fromEntries(formData.entries());

    console.log(formDataObj);
  };

  return (
    <>
      <header className="mb-10 mt-4">
        <h1>Project setup</h1>
      </header>
      <main className="flex flex-1 items-center flex-col px-4">
        <form
          className="rounded-2xl border border-slate-600 p-4 shadow-lg md:max-w-xl lg:max-w-3xl w-full"
          onSubmit={handleSubmit}
        >
          {QUESTIONS.map((question, index, self) => (
            <Fragment key={index}>
              <h2
                className={index === step ? undefined : "hidden-element"}
                aria-hidden={index !== step}
              >
                {question.title}
              </h2>
              <div
                className={index === step ? "text-xl mb-10 flex flex-col gap-2" : "hidden-element"}
                aria-hidden={index !== step}
              >
                <p className="mb-4">{question.description}</p>
                {question.options.map((option, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      name={question.name}
                      id={`${question.name}-${index}`}
                      className="mr-2"
                      defaultChecked={index === 0}
                      defaultValue={option}
                    />
                    <label htmlFor={`${question.name}-${index}`}>{option}</label>
                  </div>
                ))}
              </div>
              <div className={index === step ? "grid grid-cols-2 gap-4" : "hidden"}>
                <div className={index === 0 ? "block" : "hidden"} />
                <button
                  type="button"
                  className={
                    index === 0
                      ? "hidden"
                      : "rounded-md border border-slate-600 p-3 font-bold duration-200"
                  }
                  onClick={previousStep}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className={
                    index === self.length - 1
                      ? "hidden"
                      : "rounded-md border border-slate-600 p-3 bg-slate-700 font-bold hover:bg-slate-800 focus:bg-slate-800 duration-200"
                  }
                  onClick={nextStep}
                >
                  Next
                </button>
                <button
                  type="submit"
                  className={
                    index === self.length - 1
                      ? "rounded-md border border-slate-600 p-3 bg-slate-700 font-bold hover:bg-slate-800 focus:bg-slate-800 duration-200"
                      : "hidden"
                  }
                >
                  Submit
                </button>
              </div>
            </Fragment>
          ))}
        </form>
      </main>
    </>
  );
}
