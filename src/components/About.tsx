type Props = {
  registerRef: (el: HTMLElement | null) => void;
};

export default function About({ registerRef }: Props) {
  return (
    <section
      id="about"
      ref={registerRef}
      className="py-24 bg-sage-50"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
              <img
                src="https://images.pexels.com/photos/19208266/pexels-photo-19208266.jpeg?auto=compress&cs=tinysrgb&h=900&w=720"
                alt="The woodcarver's workbench"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl overflow-hidden shadow-lg border-4 border-sage-50 hidden md:block">
              <img
                src="https://images.pexels.com/photos/6075992/pexels-photo-6075992.jpeg?auto=compress&cs=tinysrgb&h=400&w=400"
                alt="Carving tools"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-sage-500 text-sm font-light tracking-[0.25em] uppercase mb-3">
              The Maker
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-sage-900 mb-6">
              A Quiet Pursuit
            </h2>
            <div className="space-y-4 text-sage-600 font-light leading-relaxed">
              <p>
                I started carving because I wanted a spoon that felt right in
                the hand — not machined, not stamped, but shaped by someone who
                cared. That first spoon took a full weekend. It was rough. I
                still use it every morning.
              </p>
              <p>
                Since then, I've carved hundreds of pieces: spoons, spatulas,
                forks, bowls, vases, and serving trays. Each one comes from a
                single block of wood, split along the grain and shaped with a
                knife and a few gouges. No power tools, no glue, no
                fillers — just wood, oil, and time.
              </p>
              <p>
                If you see something you like in the gallery, get in touch. If
                you have something specific in mind, I take commissions too.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-sage-200">
              <Stat value="300+" label="Pieces carved" />
              <Stat value="7" label="Wood types" />
              <Stat value="100%" label="Hand-made" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-3xl text-sage-800">{value}</div>
      <div className="text-sage-500 text-sm font-light">{label}</div>
    </div>
  );
}
