import { Suspense } from "react";
import AskQuestionForm from "./AskQuestionForm";

export default function AskQuestionPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-3xl">
          <div className="bg-white rounded-2xl border p-6">
            Loading question form...
          </div>
        </div>
      }
    >
      <AskQuestionForm />
    </Suspense>
  );
}