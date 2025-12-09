const companies = [
  "UBS",
  "Nestlé",
  "Roche",
  "Novartis",
  "Swiss Re",
  "Zürich Insurance",
  "ABB",
  "Google",
  "Credit Suisse",
  "Schindler",
  "Julius Bär",
  "Lindt",
  "Lonza",
  "Swisslife",
  "BMW",
];

export function LogosSection() {
  return (
    <section className="bg-card py-16 border-y border-border">
      <div className="container-wide">
        {/* Section Header */}
        <h3 className="text-xl font-semibold text-center mb-10">
          Where Our Clients Have Landed
        </h3>

        {/* Logo Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6">
          {companies.map((company) => (
            <div
              key={company}
              className="flex items-center justify-center h-16 px-4 rounded-lg bg-background border border-border grayscale hover:grayscale-0 transition-all duration-300"
            >
              <span className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors text-center">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
