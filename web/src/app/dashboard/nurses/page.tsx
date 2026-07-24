// web/src/app/dashboard/nurses/page.tsx

import { Suspense } from "react";
import NursesPageClient from "./NursesPageClient";

export default function NursesPage() {
  return (
    <Suspense fallback={<NursesLoading />}>
      <NursesPageClient />
    </Suspense>
  );
}

function NursesLoading() {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent" />

        <p className="mt-4 text-sm text-slate-500">
          Loading nurses...
        </p>
      </div>
    </div>
  );
}