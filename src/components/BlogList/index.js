// Write your JS code here
import {Component} from 'react'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  render() {
    const {blogsList} = this.props
    return (
      <ul>
        {blogsList.map(each => (
          <BlogItem blogs={each} key={each.id} />
        ))}
      </ul>
    )
  }
}
export default BlogList
