import Homepage from "@/components/pages/Home";
import prisma from "@/lib/prisma";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_QUERY } from "@/sanity/lib/queries/home";


export default async function Home() {
  const { data } = await sanityFetch({
    query: HOME_QUERY,
  });

  const users = await prisma.user.findMany({
    
  })
  console.log(users)
  return (
    <Homepage data={data} />
  );
}

export async function generateStaticParams() {
  return [
    { slug: "/" },
  ];
}

export const revalidate = 2592000;