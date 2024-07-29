import Article from "./Article/Article"
import Pagination from "../../../components/Pagination"
import { PostsListStyled } from "./PostsList.style"

interface PostsListInterface {
  data: { title: string; body: string, id: number, img: string }[]
  dataSize: number
  limit: number
  page: number
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void
}

const PostsList = ({ data, dataSize, limit, page, handlePageChange }: PostsListInterface) => {
  return (
    <>
      <PostsListStyled>
        {data.map((article, index: number) => (
          <div key={index}>
            <Article data={{ ...article }} />
          </div>
        ))}
      </PostsListStyled>
      {dataSize > limit && <Pagination page={page} count={Math.ceil(dataSize / limit)} onChange={handlePageChange} />}
    </>
  )
}

export default PostsList