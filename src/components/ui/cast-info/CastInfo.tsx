import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import CastInfoSection from "@/src/components/ui/cast-info/CastInfoSection";
import axios from "axios";

interface TeamData {
  cast: { name: string }[];
  crew: { name: string; known_for_department: string }[];
}

const CastInfo = () => {
  const [teamData, setTeamData] = useState<TeamData>({
    cast: [],
    crew: [],
  });
  const params = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${params.media_type}/${params.id}/credits?api_key=9003a9a7916fe23de95525fc04f2b35d`
      )
      .then((res) => {
        setTeamData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id, params.media_type]);

  const castData = teamData.cast.map((item) => {
    return {
      name: item.name,
    };
  });

  const crewDataDirecting = teamData.crew
    .filter((member) => member.known_for_department === "Directing")
    .map((member) => ({ name: member.name }));

  return (
    <div className="flex flex-col gap-10 px-4 py-12 lg:px-12 text-color-secondary">
      <CastInfoSection title="Cast & Crew" data={castData} />
      <CastInfoSection title="Directing" data={crewDataDirecting} />
    </div>
  );
};

export default CastInfo;
