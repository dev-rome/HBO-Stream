interface CastInfoSectionProps {
  title: string;
  data: { name: string }[];
}

const CastInfoSection = ({ title, data }: CastInfoSectionProps) => {
  const midpoint = Math.ceil(data.length / 2);
  const leftColumnData = data.slice(0, midpoint);
  const rightColumnData = data.slice(midpoint);

  return (
    <div>
      <h2 className="text-4xl font-bold mb-8">{title}</h2>
      <div className="flex">
        <ul className="flex flex-col">
          {leftColumnData.map(({ name }, index) => (
            <li className="mb-2" key={index}>
              {name}
            </li>
          ))}
        </ul>
        <ul className="flex flex-col ml-8">
          {rightColumnData.map(({ name }, index) => (
            <li className="mb-2" key={index}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CastInfoSection;
