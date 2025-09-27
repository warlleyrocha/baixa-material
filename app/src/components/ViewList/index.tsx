
type Launch = {
  readonly id: string;
  readonly date: string;
  readonly activity: string;
  readonly officers: { id: string, name: string; registration: string }[];
  readonly materials: { id: string, name: string; code: string; unit: string; quantity: number }[];
};

type LaunchesListProps = {
  readonly launches: Launch[];
};

export function LaunchesList({ launches }: LaunchesListProps) {
  return (
    <div className="max-w-5xl mx-auto mt-8 space-y-6">
      {launches.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Nenhum lançamento encontrado.</p>
      ) : (
        launches.map((launch) => (
          <div
            key={launch.id}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-400 text-sm">{launch.date}</span>
              <span className="text-blue-600 font-medium">{launch.activity}</span>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold text-gray-900 mb-1">Técnicos:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {launch.officers.map((officer) => (
                  <li key={officer.id}>
                    {officer.name} (Matrícula: {officer.registration})
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Materiais:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {launch.materials.map((mat) => (
                  <li key={mat.id}>
                    {mat.name} - Código: {mat.code} - {mat.quantity}{" "}
                    {mat.unit === "unidade" ? "unidade(s)" : "metro(s)"}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
