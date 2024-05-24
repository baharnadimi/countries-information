import { useGetAllCountriesQuery } from "@/redux/services/apiSlice";
import Title from "./Title";
import Text from "./Text";
import BorderLink from "./BorderLink";
import ImageContainer from "./ImageContainer";

function Country({
  flags: { svg, alt },
  name: { common, nativeName },
  population,
  region,
  subregion,
  capital,
  tld,
  currencies,
  languages,
  borders,
}: Country) {
  const { data: countries } = useGetAllCountriesQuery();

  function getBorderName(border: string) {
    return countries
      ?.filter(({ cca3 }) => cca3.includes(border))
      .map(({ name: { common } }) => common);
  }

  const displayCurrencies = currencies
    ? Object.values(currencies)
        .map(({ name }) => name)
        .join(", ")
    : "N/A";

  const displayLangs = languages
    ? Object.values(languages)
        .map((l) => l)
        .join(", ")
    : "N/A";

  const displayNativeName = nativeName
    ? Object.values(nativeName)
        .map(({ common }) => common)
        .join(", ")
    : "";

  return (
    <>
      <ImageContainer
        src={svg}
        alt={alt ?? common}
        className="w-full max-w-2xl md:w-1/2"
      />
      <div className="space-y-4">
        <Title title={common} classes="text-4xl" />
        <div className="flex justify-between">
          <div>
            <Text contentTitle="nativeName" content={displayNativeName} />
            <Text
              contentTitle="population"
              content={population.toLocaleString()}
            />
            <Text contentTitle="region" content={region ?? "N/A"} />
            <Text contentTitle="sub region" content={subregion ?? "N/A"} />
            <Text contentTitle="capital" content={capital ?? "N/A"} />
          </div>
          <div>
            <Text contentTitle="top level domain" content={tld.join(" | ")} />
            <Text contentTitle="currencies" content={displayCurrencies} />
            <Text contentTitle="languages" content={displayLangs} />
          </div>
        </div>

        <div className="flex pt-20">
          <h3 className="text-xl font-semibold w-6/12 mr-1">
            Border Countries:
          </h3>
          <ul className="flex flex-wrap gap-6">
            {borders ? (
              borders.flatMap((border) => (
                <BorderLink
                  key={border}
                  href={`/${border.toLowerCase()}?name=${getBorderName(
                    border
                  )}`}
                  borderName={getBorderName(border)}
                />
              ))
            ) : (
              <li>
                <p className="text-lg">No border countries</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Country;
