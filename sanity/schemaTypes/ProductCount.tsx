import React, { useEffect, useState } from 'react'
import { useClient, useFormValue } from 'sanity'

export function ProductReferenceCount() {

  // create a fetch from the sanity
  const client = useClient({ apiVersion: '2023-05-03' })
  // get id params 
  const documentIdValue = useFormValue(['_id'])
  // set count
  const [count, setCount] = useState<number | null>(null)

  // replace drafts with empty string
  const documentId =
    typeof documentIdValue === 'string'
      ? documentIdValue.replace('drafts.', '')
      : undefined

  useEffect(() => {
    if (!documentId) return

    // fetch type product with their id params _id
    client
      .fetch(
        `count(*[_type == "product" && references($id)])`,
        { id: documentId }
    )
      // set count to the result if it has a product referenced to the collection
      .then((result) => setCount(result))
      .catch(console.error)
  }, [client, documentId])

  if (count === null) return <p>Loading product count...</p>

  return (
    <p style={{ paddingLeft: '1rem', fontWeight: 'bold' }}>
      {count} product{count === 1 ? '' : 's'} reference this collection.
    </p>
  )
}
