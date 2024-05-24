import Link from "next/link";

function BorderLink({ href, borderName }: BorderLinkProps) {
  return (
    <li className="">
      <Link
        href={href}
        className="dark:border-none border p-2 rounded-lg shadow-lg rounded-lg shadow-lg dark:shadow-gray-900 capitalize text-md  dark:bg-black-100 dark:text-white"
      >
        {borderName}
      </Link>
    </li>
  );
}

export default BorderLink;
