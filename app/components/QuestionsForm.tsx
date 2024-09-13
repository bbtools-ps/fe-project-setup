import { Form } from "@remix-run/react";
import { Fragment, useState } from "react";
import { STEPS } from "~/constants";

export default function QuestionsForm() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((prevState) => prevState + 1);
  };

  const previousStep = () => {
    setStep((prevState) => prevState - 1);
  };

  return (
    <Form
      method="post"
      className="w-full rounded-2xl border border-slate-600 bg-slate-800 p-4 shadow-lg md:max-w-xl lg:max-w-3xl"
    >
      {STEPS.map((item, index, self) => {
        const isHidden = index !== step;

        return (
          <Fragment key={index}>
            <h2
              className={isHidden ? "hidden-element" : undefined}
              aria-hidden={isHidden ? "true" : undefined}
            >
              {item.title}
            </h2>
            <div
              className={
                isHidden
                  ? "hidden-element"
                  : "mb-10 flex flex-col gap-2 text-xl"
              }
              aria-hidden={isHidden ? "true" : undefined}
            >
              <fieldset>
                <legend className="mb-4">{item.question}</legend>
                <div className="flex flex-col gap-2">
                  {item.options.map(({ value }, index) => (
                    <div key={index}>
                      <input
                        type="radio"
                        name={item.name}
                        id={`${item.name}-${index}`}
                        className="mr-2"
                        defaultChecked={index === 0}
                        defaultValue={value}
                        tabIndex={isHidden ? -1 : undefined}
                      />
                      <label
                        tabIndex={isHidden ? -1 : undefined}
                        htmlFor={`${item.name}-${index}`}
                      >
                        {value}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
            <div className={isHidden ? "hidden" : "grid grid-cols-2 gap-4"}>
              <div className={index === 0 ? "block" : "hidden"} />
              <button
                type="button"
                className={
                  index === 0
                    ? "hidden"
                    : "rounded-md border border-slate-600 p-3 font-bold duration-200 hover:bg-slate-700 focus:bg-slate-700"
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
                    : "rounded-md border border-slate-600 bg-slate-700 p-3 font-bold duration-200 hover:bg-slate-600 focus:bg-slate-800"
                }
                onClick={nextStep}
              >
                Next
              </button>
              <button
                type="submit"
                className={
                  index === self.length - 1
                    ? "rounded-md border border-slate-600 bg-slate-700 p-3 font-bold duration-200 hover:bg-slate-600 focus:bg-slate-800"
                    : "hidden"
                }
              >
                Submit
              </button>
            </div>
          </Fragment>
        );
      })}
    </Form>
  );
}
