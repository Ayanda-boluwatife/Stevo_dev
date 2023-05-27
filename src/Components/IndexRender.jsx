import React from 'react'
import AllData from './AllData';
import Index from './Index';
import bgimage from './images/bg-header-desktop.svg'
import styled from 'styled-components';

const IndexRender = () => {
  return (
    <Wrapper>
        <div className='header'></div>
        <div>
            {
                AllData.map((profile, index) =>{
                    return(
                        <Index key={index} data={profile} />
                    )
                })
            }
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
    .header{
    background-image: url(${bgimage});
    background-color:  hsl(180, 29%, 50%);
    background-repeat: no-repeat;
    height: 20vh;
    width: 100%;
}
`
export default IndexRender;