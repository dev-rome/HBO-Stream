interface CastInfoSectionProps {
  title: string;
  data: {
    role: string;
    name: string;
  }[];
}

const CastInfoSection = ({ title, data }: CastInfoSectionProps) => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-8">{title}</h2>
      {data.map(({ role, name }, index) => (
        <ul className="flex" key={index}>
          <li className="mr-32 w-[6.25rem]">{role}</li>
          <li>{name}</li>
        </ul>
      ))}
    </div>
  );
};

export default CastInfoSection;
