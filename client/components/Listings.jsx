import React from "react"

import { Places } from "./card/Card"
import { useStyles} from "./Listings.Style"

export default function Listings({ listings, visible }) {
  const classes = useStyles()
  return (
    visible && (
      <div className={classes.root}>
        {listings.map((content) => {
          return <Places content={content} key={content.id} />
        })}
      </div>
    )
  )
}
