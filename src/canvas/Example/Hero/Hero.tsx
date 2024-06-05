import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Example Component in Uniform
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Let&apos;s build our first Uniform component in React using Next.js and the Component Starter Kit as our
              starting project.
            </p>
          </div>
          <div className="space-x-4">
            <Link
              href="https://github.com/uniformdev/uniform-component-starter-kit"
              className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow transition-colors"
              prefetch={false}
            >
              GitHub
            </Link>
            <Link
              href="https://docs.uniform.app"
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors"
              prefetch={false}
            >
              Documentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};