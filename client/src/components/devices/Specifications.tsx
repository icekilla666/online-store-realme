import type { SpecificationsProps } from "@/types/types";

const Specifications = ({deviceArray}:SpecificationsProps) => {
  return (
    <div>
      <h1 className="mb-6 и">Specifications</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {deviceArray.map((info) => (
          <div
            key={info.id}
            className="bg-wrapper p-5 rounded-xl border border-custom hover:border-custom transition-all hover:shadow-custom shadow-lg"
          >
            <div className="flex items-start gap-3 mb-3">
              <h2 className="font-semibold text-lg">{info.title}</h2>
            </div>
            <p className="font-light leading-relaxed pl-13">
              {info.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specifications;
