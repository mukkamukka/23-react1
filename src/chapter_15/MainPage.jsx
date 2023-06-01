import React from "react";
import styled from "styled-components";

// const Wrapper = styled.div`
//     padding: 1em;
//     background: grey;
// `

// const Title = styled.div`
//     font-size: 1.5em;
//     color: white;
//     text-align: center;
// `

// function MainPage(props){
//     return(
//         <Wrapper>
//             <Title>
//                 안녕, 리액트!
//             </Title>
//         </Wrapper>
//     )
// }
// const name ='인제';
// const regin ='서울';

// function myTagFucntion(strings, nameExp, regionExp){
//     let str0 = string[0];
//     let str1 = stinrg[1];
//     let str2 = stinrg[2];

//     return `${str0}${nameExp}${str1}${regionExp}${str2}`;
// }

// const output = myTagFucntion`제 이름은 ${name}이고, 사는 곳은 ${regin}입니다`;

// console.log(output);

const Button = styled.button`
    color: ${props => props.dark ? "white" : "dark"}
    background: ${props => props.dark ? "dark" : "white"}
    border: 1px solid black;
`

function MainPage(props) {
    return(
        <div>
            <Button>Normal</Button>
            <Button dark>Dark</Button>
        </div>
    )
}

export default MainPage;