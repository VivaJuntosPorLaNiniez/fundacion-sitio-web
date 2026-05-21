export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto p-8 animate-pulse">
      <div className="h-6 w-20 bg-gray-200 rounded-full mb-4"></div>
      
      <div className="h-9 w-3/4 bg-gray-200 rounded-lg mb-3"></div>
      
      <div className="space-y-2 mb-6">
        <div className="h-4 w-full bg-gray-200 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
      </div>
      
      <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/50 mb-8 space-y-2">
        <div className="h-4 w-32 bg-gray-200 rounded mb-3"></div>
        <div className="h-4 w-11/12 bg-gray-200 rounded italic"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Columna 1 */}
        <div className="border border-gray-100 p-5 rounded-xl space-y-3">
          <div className="h-5 w-40 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-11/12 bg-gray-200 rounded"></div>
          <div className="h-4 w-4/5 bg-gray-200 rounded"></div>
        </div>

        <div className="border border-gray-100 p-5 rounded-xl space-y-3">
          <div className="h-5 w-32 bg-gray-200 rounded mb-4"></div>
          <div className="h-10 w-full bg-gray-100 rounded-lg"></div>
          <div className="h-10 w-full bg-gray-100 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}