type Props = {
  registerRef: (el: HTMLElement | null) => void;
};

export default function Craft({ registerRef }: Props) {
  const steps = [
    {
      title: 'Select the Wood',
      description:
        'Each piece starts with choosing the right log — cherry for warmth, walnut for depth, maple for strength.',
    },
    {
      title: 'Split & Rough Out',
      description:
        'The blank is split along the grain, never sawn across it, so the fibers run full-length and the piece stays strong.',
    },
    {
      title: 'Carve with a Knife',
      description:
        'The shape emerges through push cuts and hook knife work — no power tools, just hands, steel, and patience.',
    },
    {
      title: 'Smooth & Finish',
      description:
        'Sanded to 400 grit, then sealed with food-safe walnut oil and a beeswax buff for a lasting, natural sheen.',
    },
  ];

  return (
    <section
      id="craft"
      ref={registerRef}
      className="py-24 bg-sage-900 relative overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sage-300 text-sm font-light tracking-[0.25em] uppercase mb-3">
            The Process
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-sage-50 mb-4">
            From Log to Spoon
          </h2>
          <p className="text-sage-200 font-light text-lg max-w-xl mx-auto">
            Four steps, many hours, and no shortcuts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="group relative"
            >
              <div className="text-sage-400 font-serif text-6xl mb-4 leading-none">
                0{i + 1}
              </div>
              <h3 className="font-serif text-xl text-sage-50 mb-3">
                {step.title}
              </h3>
              <p className="text-sage-200 font-light text-sm leading-relaxed">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-px bg-sage-600" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
