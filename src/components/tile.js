import React from 'react'
import TileCard from './tileCard'

const ratio = [5 / 3, 4 / 3]

const Tile = ({ isEven, posts }) => {
  return (
    <div className="tile is-parent is-vertical">
      <TileCard coverImage={posts[0].node.frontmatter.coverImage}
        slug={posts[0].node.fields.slug} ratio={isEven ? ratio[0] : ratio[1]} />
      <TileCard coverImage={posts[1].node.frontmatter.coverImage}
        slug={posts[1].node.fields.slug} ratio={isEven ? ratio[1] : ratio[0]} />
    </div>
  )
}

export default Tile
