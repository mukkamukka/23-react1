import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "김동건",
        comment: "안녕하세요. 김동건입니다."
    },
    {
        name: "오시영",
        comment: "안녕하세요. 바보입니다."
    },
    {
        name: "이태겸",
        comment: "안녕하세요. 깜둥이입니다."
    }
]

function CommentList(props){
    return(
        <div>
            {comments.map((foo) => {
                return(
                    <Comment name={foo.name} comment={foo.comment}/>    
                );
            })}
        </div>
    );
}

export default CommentList;