import { Link, routes } from '@redwoodjs/router'
import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <BlogLayout>
      <h1>Hello Redwood</h1>
      <p>HI!</p>
      <BlogPostsCell />
      <p></p>
      <div></div>
    </BlogLayout>
  )
}

export default HomePage
