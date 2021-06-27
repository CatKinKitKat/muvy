import React, { useState } from 'react'
import DiscussionBoard from 'react-discussion-board'
import 'react-discussion-board/dist/index.css'

const ChatBox = () => {
  const allPosts = [
    {
      profileImage:
        'https://picsum.photos/200',
      name: 'RealKebabMaster',
      content:
        '<p>This movie was nuts.</p>',
      date: new Date()
    },
    {
      profileImage:
        'https://picsum.photos/300',
      name: 'SalazarWasRight',
      content:
        '<p>I honestly think it was a scam, not buying another ticket for any movie with this director. </p>',
      date: new Date()
    }
  ]

  const [posts, setPosts] = useState(allPosts)

  const submitPost = (text) => {
    const curDate = new Date()

    setPosts([
      ...posts,
      {
        profileImage:
          'https://www.gravatar.com/avatar/',
        name: 'You',
        content: text,
        date: curDate
      }
    ])
  }

  return (
    <div className="p-5">
      <h1>Click on &quot;Add new post&quot; to add a new Post</h1>
      <DiscussionBoard posts={posts} onSubmit={submitPost} />
    </div>
  )
}

export default ChatBox
