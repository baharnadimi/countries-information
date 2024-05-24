"use client";
import { FiArrowLeft } from "react-icons/fi";
import { useGetOneCountryQuery } from "@/redux/services/apiSlice";
import Link from "next/link";
import Country from "@/components/Country";
import Layout from "@/components/Layout";

function CountryPage({ params: { code } }: CountryPageProps) {
  const { data: country, isLoading } = useGetOneCountryQuery(code);

  return (
    <Layout>
      <Layout isMain={false}>
        <Link
          href="/"
          className="flex items-center w-24 py-2 px-4 rounded-lg shadow-lg dark:shadow-gray-900 capitalize text-lg font-semibold dark:bg-black-100 dark:text-white"
        >
          <FiArrowLeft />
          Back
        </Link>
        <section className="flex flex-col items-start gap-8 pt-10 text-gray-900 md:flex-row dark:text-slate-100">
          {isLoading && <p>Loading...</p>}
          {country?.map((country: Country) => (
            <Country key={country.cca3} {...country} />
          ))}
        </section>
      </Layout>
    </Layout>
  );
}

export default CountryPage;
