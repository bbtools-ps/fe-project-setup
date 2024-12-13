import { redirect, type ActionFunction, type MetaFunction } from "react-router";
import type { QUESTION_KEYS } from "~/constants";
import QuestionsForm from "../components/QuestionsForm";

export const meta: MetaFunction = () => {
  return [
    { title: "Project Setup Guide" },
    {
      name: "description",
      content: "Suggestions for setting up a project that uses React",
    },
  ];
};

export default function Index() {
  return (
    <>
      <header>
        <h1>Project Setup Guide</h1>
      </header>
      <main className="flex flex-1 flex-col items-center px-4">
        <QuestionsForm />
      </main>
    </>
  );
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries()) as Record<
    keyof typeof QUESTION_KEYS,
    string
  >;

  const searchParams = Object.entries(data)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");

  return redirect(`/suggestions?${searchParams}`);
};
