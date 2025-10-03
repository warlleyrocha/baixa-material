import { useState } from 'react';
import { FiChevronDown, FiMapPin, FiUsers, FiPackage, FiCalendar, FiClock } from 'react-icons/fi';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

// Assumindo que você tem essa função utilitária
const formatDateForLaunch = (date: string) => {
  return new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};

export type Launch = {
  id: string;
  date: string;
  activity?: string;
  city: string;
  street: string;
  number?: string;
  officers: {
    id: string;
    name: string;
    registration: string;
  }[];
  materials: {
    id: string;
    name: string;
    code: string;
    unit: 'unidade' | 'metro';
    quantity: number;
  }[];
};

type LaunchesListProps = {
  readonly launches: Launch[];
};

export function LaunchesList({ launches }: LaunchesListProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const sortedLaunches = [...launches].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  if (sortedLaunches.length === 0) {
    return (
      <div className="max-w-6xl mx-auto mt-8">
        <p className="text-center text-gray-500 text-lg">Nenhum lançamento encontrado.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-8 space-y-4">
      {sortedLaunches.map((launch) => {
        const launchDate = new Date(launch.date);
        const formattedDate = formatDateForLaunch(launch.date);
        const formattedTime = launchDate.toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
        });
        const isOpen = openItems.has(launch.id);

        return (
          <Collapsible key={launch.id} open={isOpen} onOpenChange={() => toggleItem(launch.id)}>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200">
              <CollapsibleTrigger className="w-full">
                <div className="flex items-center justify-between p-5 cursor-pointer group">
                  <div className="flex-1 text-left space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="flex items-center gap-1.5 text-gray-600">
                        <FiCalendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{formattedDate}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-500">
                        <FiClock className="w-4 h-4" />
                        <span className="text-sm">{formattedTime}</span>
                      </div>
                      {launch.activity && (
                        <span className="bg-blue-50 text-blue-700 font-medium px-3 py-1 rounded-full text-xs border border-blue-200">
                          {launch.activity}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <FiMapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">
                        {launch.city}, {launch.street}
                        {launch.number && `, ${launch.number}`}
                      </span>
                    </div>
                  </div>
                  <FiChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 group-hover:text-gray-600 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                <div className="px-5 pb-5 pt-2 space-y-5 border-t border-gray-100">
                  {/* Técnicos */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <FiUsers className="w-4 h-4 text-gray-400" />
                      <h3 className="font-semibold text-gray-900 text-sm">Técnicos</h3>
                    </div>
                    <div className="space-y-2">
                      {launch.officers.map((officer) => (
                        <div
                          key={officer.id}
                          className="flex items-center justify-between bg-gray-50 rounded-lg p-3 text-sm"
                        >
                          <span className="font-medium text-gray-700">{officer.name}</span>
                          <span className="text-gray-500">Mat. {officer.registration}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Materiais */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <FiPackage className="w-4 h-4 text-gray-400" />
                      <h3 className="font-semibold text-gray-900 text-sm">Materiais</h3>
                    </div>
                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-gray-50 border-b border-gray-200">
                            <th className="text-left p-3 font-semibold text-gray-700">Nome</th>
                            <th className="text-left p-3 font-semibold text-gray-700">Código</th>
                            <th className="text-right p-3 font-semibold text-gray-700">
                              Quantidade
                            </th>
                            <th className="text-left p-3 font-semibold text-gray-700">Unidade</th>
                          </tr>
                        </thead>
                        <tbody>
                          {launch.materials.map((mat, index) => (
                            <tr
                              key={mat.id}
                              className={`${
                                index !== launch.materials.length - 1
                                  ? 'border-b border-gray-100'
                                  : ''
                              } hover:bg-gray-50 transition-colors`}
                            >
                              <td className="p-3 text-gray-700">{mat.name}</td>
                              <td className="p-3 text-gray-600">{mat.code}</td>
                              <td className="p-3 text-right text-gray-700 font-medium">
                                {mat.quantity}
                              </td>
                              <td className="p-3 text-gray-600">
                                {mat.unit === 'unidade' ? 'unidade(s)' : 'metro(s)'}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>
        );
      })}
    </div>
  );
}
