import React from 'react';

const PostCard = (props) => {
    return (
        <>
            <div className="post-card border-b-2 shadow-xl  bg-red-400 p-12 m-10 ">
                <div className="py-2">
                    <h4 className='flex justify-center items-center font-bold text-black'>
                        UserId : {props.value.id}
                    </h4>
                    <hr/>
                </div>
                <h3 className='text-white'>Title : {props.value.title}</h3>
                <h3 className='text-white'>Body : {props.value.body}</h3>
            </div>
        </>
    )
}

export default PostCard;