"use client"

import { SanityDocument } from "next-sanity"

type HomepagePageProps = {
  data: SanityDocument
}

const Homepage = ({ data }: HomepagePageProps) => {

  return (
    <div>{data.title}</div>
  )
}

export default Homepage