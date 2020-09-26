import React from "react"

import Card from "react"

export default function Places (content) {
      
    console.log(content, "content");
    return (
     <div>
      <Card content={content}/>      
     </div>       
)

}