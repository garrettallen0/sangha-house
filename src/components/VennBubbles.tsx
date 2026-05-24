const pillars = [
  { label: 'living in community' },
  { label: 'organizing social action' },
  { label: 'grounded in spiritual practice' },
] as const

const ORBIT_DURATION_S = 10

export default function VennBubbles() {
  return (
    <section
      className="relative mx-auto aspect-square w-full max-w-96 sm:max-w-[26rem]"
      aria-label="Living in community, organizing social action, and grounded in spiritual practice"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative size-0">
          {pillars.map((pillar, index) => {
            const delay = `${(index * -ORBIT_DURATION_S) / pillars.length}s`

            return (
              <div
                key={pillar.label}
                className="absolute left-0 top-0 size-0 animate-venn-juggle motion-reduce:animate-none"
                style={{ animationDelay: delay }}
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-[10rem] sm:-translate-y-[10.5rem]">
                  <div
                    className="flex h-32 w-32 animate-venn-juggle-counter items-center justify-center rounded-full border-2 border-indigo-300/80 bg-white/70 px-3 shadow-sm backdrop-blur-sm transition-transform duration-300 ease-out motion-reduce:animate-none hover:scale-105 hover:shadow-md sm:h-36 sm:w-36 sm:px-4"
                    style={{ animationDelay: delay }}
                  >
                    <span className="text-center text-xs font-medium leading-snug text-indigo-900 sm:text-sm">
                      {pillar.label}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
