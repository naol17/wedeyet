import { ParsedUrlQuery } from "querystring"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"

type DetailProps = {
  data: any // Define the type of your data
}
const DetailPage = ({ data }: DetailProps) => {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>
      <h2>ID: {id}</h2>
      <h2>Data: {data}</h2>
    </div>
  )
}
export const getServerSideProps: GetServerSideProps<DetailProps> = async ({
  params,
}) => {
  const { id } = params as ParsedUrlQuery
  // Fetch data from the API using the id
  const headers: any = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ0YTFiMTU3ODUyODRlYmEwNjYyOTY5IiwiZW1haWwiOiJudW5hQGdtYWlsLmNvbSIsImlhdCI6MTY4OTMyNjMyNCwiZXhwIjoxNjg5NDEyNzI0fQ.ZAZkLOD86mMYRB8D0r-1_0-ZADJdVWNwbJSzhAqDpYM",
  }
  const response = await fetch(
    `https://wedeyet.herokuapp.com/api/place/all/${id}`,
    { headers }
  )
  const data = await response.json()
  return {
    props: {
      data,
    },
  }
}
export default DetailPage
