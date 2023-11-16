import React from "react"

const TableOfContents = ({ toc }) => {
  return (
    <div
      // 스타일링을 위해서 클래스이름 부여 한다.
      className="table-of-content sticky top-4 align-center"
      dangerouslySetInnerHTML={{ __html: toc }}
    />
  )
}

export default TableOfContents
