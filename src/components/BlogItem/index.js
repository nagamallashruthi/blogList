// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogs} = props
  const {title, description, publishedDate} = blogs

  return (
    <div>
      <div className="bg">
        <h1 className="h">{title}</h1>
        <p className="p">{publishedDate}</p>
      </div>
      <p className="p2">{description}</p>
      <hr className="hr" />
    </div>
  )
}
export default BlogItem
