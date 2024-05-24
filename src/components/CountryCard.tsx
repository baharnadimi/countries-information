import Link from "next/link";
import Title from "./Title";
import Text from "./Text";
import ImageContainer from "./ImageContainer";

function CountryCard({
  cca3,
  name: { official, common },
  flags: { svg, alt },
  population: pop,
  region,
  capital,
}: Country) {
  const population = pop.toLocaleString();

  return (
    <Link
      href={`${cca3.toLowerCase()}?name=${official}`}
      className="w-full h-full duration-300 ease-in-out sm:max-w-[300px] hover:scale-105"
    >
      <article className="h-full overflow-hidden text-gray-900 rounded-lg shadow-lg dark:border-slate-100 dark:text-slate-100">
        <ImageContainer
          src={svg}
          alt={alt ?? official}
          className="object-cover w-full h-[180px]"
        />
        <div className="p-4 space-y-4">
          <Title title={common} classes="text-xl" />
          <Text contentTitle="population" content={population} />
          <Text contentTitle="region" content={region} />
          <Text
            contentTitle="capital"
            content={capital.length ? capital : "N/A"}
          />
        </div>
      </article>
    </Link>
  );
}

export default CountryCard;
