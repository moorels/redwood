export const QUERY = gql`
  query BlogPostsQuery {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'green' }}>Error: {error.message}</div>
)

export const Success = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h2 style={{ color: 'orange', fontSize: '40px' }}>{post.title}</h2>
          <p>{post.body}</p>
          <p>Created At :{post.createdAt}</p>
        </li>
      ))}
    </ul>
  )
}
