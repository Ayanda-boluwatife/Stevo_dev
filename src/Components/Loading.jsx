import React from 'react'
import styled from 'styled-components'

const Loading = () => {
  return (
    <Wrapper>
        <div className='Loading'>
            <div className="green">
                <div className="black"></div>
            </div>
            <div className="green">
                <div className="yellow"></div>
            </div>
            <div className="green">
                <div className="black"></div>
            </div>
            
        </div>
        <h1>Loading...</h1>
    </Wrapper>
  )
}
const Wrapper = styled.section`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    .Loading h1{
        color: hsl(180, 29%, 50%);
    }
    .Loading{
        display: flex;
        gap: 20px;
    }
    .green{
        height: 50px;
        width: 50px;
        background-color: transparent;
        border-top: 5px solid hsl(180, 29%, 50%);
        border-bottom: 5px solid hsl(180, 8%, 52%);
        border-left:5px solid transparent;
        border-right:5px solid transparent;
        border-radius: 50px;
        animation: animate .9s infinite linear;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .black{
        background-color: hsl(180, 29%, 50%);
        height: 20px;
        width: 20px;
        border-radius: 40px;
    }
    .yellow{
        background-color: black;
        height: 20px;
        width: 20px;
        border-radius: 40px;
    }

    @keyframes animate {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`
export default Loading