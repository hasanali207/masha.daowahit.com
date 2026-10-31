import { useAcademicInfo } from "@/lib/useAcademicInfo";

// app/loading.tsx
export default function Loading() {
  const { info } = useAcademicInfo();
  const anyInfo = (info ?? {}) as Record<string, any>;
  const instituteName = anyInfo.name || "ইসলামী দাওয়াহ ইনস্টিটিউট";

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-12 w-12 mx-auto"></div>
        <p className="text-gray-700 font-medium text-3xl bangla">
          {instituteName}.........
        </p>
      </div>
    </div>
  );
}
