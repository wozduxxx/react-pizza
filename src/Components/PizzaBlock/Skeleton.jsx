import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        className={'pizza-block'}
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="277" rx="10" ry="10" width="280" height="25" />
        <rect x="0" y="321" rx="10" ry="10" width="280" height="88" />
        <rect x="0" y="424" rx="10" ry="10" width="95" height="30" />
        <rect x="130" y="418" rx="24" ry="24" width="150" height="45" />
        <circle cx="140" cy="130" r="130" />
    </ContentLoader>
)

export default MyLoader