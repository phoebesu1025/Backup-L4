import React from 'react'

import { useParams } from 'react-router-dom'
function Post() {
    const params = useParams();
    return (
        <>
            <div>The post number called is : {params.postID}</div>
            <div>I'm the {params.photos} <br />
                <img src="https://i.pinimg.com/564x/c8/64/22/c86422937a50abff89883392097b1814.jpg" width="50%" /></div>
        </>

    )
}
export default Post