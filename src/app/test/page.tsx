import ServicesBlocks from "@/components/ServicesBlocks";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 sm:text-5xl md:text-6xl">
            Services
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-neutral-600 dark:text-neutral-300">
            Scroll to explore our capabilities. Each section expands when centered.
          </p>
        </div>

        <ServicesBlocks />
      </div>
    </div>
  );
}
