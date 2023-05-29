import CastInfoSection from "./CastInfoSection";

const CastInfo = () => {
  const crewData = [
    { role: "Name", name: "Name" },
    { role: "Name", name: "Name" },
    { role: "Name", name: "Name" },
    { role: "Name", name: "Name" },
  ];

  const directorData = [{ role: "Name", name: "Name" }];

  const writerData = [{ role: "Name", name: "Name" }];

  return (
    <div className="flex flex-col gap-10 px-4 py-12 lg:px-12 text-color-secondary">
      <CastInfoSection title="Cast & Crew" data={crewData} />
      <CastInfoSection title="Director" data={directorData} />
      <CastInfoSection title="Writers" data={writerData} />
    </div>
  );
};

export default CastInfo;
