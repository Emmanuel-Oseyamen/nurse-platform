import { Suspense } from "react";
import AnswerForm from "./AnswerForm";

export default function AnswerPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-4xl">
          <div className="bg-white rounded-2xl border p-6">
            Loading answer form...
          </div>
        </div>
      }
    >
      <AnswerForm />
    </Suspense>
  );
}