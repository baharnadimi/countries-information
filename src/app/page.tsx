"use client";
import { useCountries } from "@/hooks/useCountries";
import { useLoadMore } from "@/hooks/useLoadMore";
import CountryCard from "@/components/CountryCard";
import Form from "@/components/Form";
import CardSkeleton from "@/components/CardSkeleton";
import Button from "@/components/Button";
import Layout from "@/components/Layout";

export default function Home() {
  const {
    data: countries,
    isLoading,
    error,
    search,
    setSearch,
    selectRegion,
    setSelectRegion,
  } = useCountries();

  const { limit, handleLimit, skeletons } = useLoadMore();

  function reset() {}

  const skeletonLoading =
    isLoading && skeletons.map((skeleton) => <CardSkeleton key={skeleton} />);

  return (
    <Layout>
      <Layout isMain={false}>
        <Form
          search={search}
          searchOnChange={(e) => setSearch(e.target.value)}
          region={selectRegion}
          selectOnChange={(e) => setSelectRegion(e.target.value)}
        />
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 justify-center justify-items-center content-start">
          {skeletonLoading}
          {countries?.slice(0, limit).map((country) => (
            <CountryCard key={country.cca3} {...country} />
          ))}
        </section>
        {countries !== undefined && countries.length > limit && (
          <div className="flex justify-center pt-10">
            <Button
              onClick={handleLimit}
              btnText="more"
              classes="p-2 text-xl border-none shadow-lg hover:bg-gray-900 hover:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-gray-900"
            />
          </div>
        )}
      </Layout>
    </Layout>
  );
}
