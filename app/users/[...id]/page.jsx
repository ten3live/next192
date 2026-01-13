import { Suspense } from "react";
import Back from "./back";

export default async function BlogPostPage({params,searchParams}) {
  const { id } = await params
  const { order } = await searchParams

  
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}><h1>{id}</h1>
      <h1>{order}</h1></Suspense>
     
      <Back/>
    </div>
  )
}