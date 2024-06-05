import { UniformSlot, UniformText } from '@uniformdev/canvas-react';

export const Hero = ({}: { title: string; description: string }) => {
  return (
    <section className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <UniformText
              as="h1"
              parameterId="title"
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
              placeholder={'Title goes here'}
            />
            <UniformText
              as="p"
              parameterId="description"
              className="text-lg text-gray-500 dark:text-gray-400"
              placeholder={'Description goes here'}
            />
          </div>
          <div className="space-x-4">
            <UniformSlot name="buttons" />
          </div>
        </div>
      </div>
    </section>
  );
};
