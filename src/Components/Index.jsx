import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Index = ({data}) => {
    const logo = data.logo
    const companyName = data.company
    const positionName = data.position
    const postDate = data.postedAt
    const contractType = data.contract
    const locationArea = data.location
    const rolePost = data.role
    const levelPost = data.level
    const languageType = data.languages
    const newArea = data.new
    const featuredPlace = data.featured

    const [lang, setLang] = useState("");

    useEffect(()=>{
        setLang(
            languageType.map((lg)=>{
                return (
                    <li style={{listStyle: 'none'}} className="html">{lg}</li>
                )
            })
        )
    }, [])
  return (
    <Wrapper>
            <div className="mobile-img">
                <img src={logo} alt="" className='img'/>
            </div>
        <div className='main-main'>
            <div className="background">
                <div className='mini-main'>
                    <div className='image'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='align'>
                        <div className='company'>
                            <span>{companyName}</span>
                            <div className='newleaf'>
                                {
                                    newArea ? <span className='new'>NEW!</span> : null
                                }
                                {
                                    featuredPlace ? <span className='feature'>FEATURED</span> : null
                                }
                            </div>
                        </div>
                        <div>
                            <h1>{positionName}</h1>
                        </div>
                        <div className='delivery'>
                            <h3>{postDate}</h3>.
                            <h3>{contractType}</h3>.
                            <h3>{locationArea}</h3>
                        </div>
                    </div>
                </div>
                <div className="border"></div>
                <div className='role'>
                    <div className='role'>
                    <div className="sub-role">
                        <h1 className='two'>{rolePost}</h1>
                        <h1 className='two'>{levelPost}</h1>
                    </div>
                    <h1 className='split'>{lang}</h1>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.main-main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
}
.align{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 200%;
}
.background{
    background-color: white;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-radius: 5px;
    box-shadow:0 4px 4px hsl(180, 8%, 52%);
    transition: ease-in-out .5s;
    border-left: 5px solid white;
}
.newleaf{
    display: flex;
    gap: 20px;
}
.background:hover{
    border-left: 5px solid hsl(180, 29%, 50%);
    transition: ease-in-out .5s;
}
.mini-main{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
}
.company{
    display: flex;
    gap: 20px;
}
.company span{
    font-weight: 700;
}
.delivery{
    display: flex;
    gap: 5px;
    font-size: 15px;
}
.split{
    display: flex;
    flex-direction: row;
    gap: 10px;
}
.role{
    display: flex;
    gap: 20px;
}
.new{
    color: white;
    background-color: hsl(180, 29%, 50%);
    font-size: 10px;
    padding: 1px 10px;
    border-radius: 15px;
    cursor: default;
}
.feature{
    background-color: black;
    color: white;
    font-size: 10px;
    border-radius: 15px;
    padding: 1px 10px;
    cursor: default;
}
.align h1{
    color: black;
    transition: ease-in-out .5s;
    cursor: pointer;
}
.align h1:hover{
    color: hsl(180, 29%, 50%);
    transition: ease-in-out .5s;
}
.delivery h3{
    font-weight: 600;
    color: hsl(180, 8%, 52%);
}
.html{
    background-color: hsl(180, 52%, 96%);
    padding: 4px 8px;
    color: hsl(180, 29%, 50%);
    transition: ease-in-out .5s;
    border-radius: 10px;
    cursor: pointer;
}
.two{
    background-color: hsl(180, 52%, 96%);
    padding: 4px 8px;
    color: hsl(180, 29%, 50%);
    transition: ease-in-out .5s;
    border-radius: 10px;
    cursor: pointer;
}
.two:hover, .html:hover{
    background-color: hsl(180, 29%, 50%);
    color: white;
    transition: ease-in-out .5s;
}
.border{
    border-top: 2px solid black;
    width: 100%;
    display: none;
}
.sub-role{
    display: flex;
    gap: 10px;
}
.mobile-img{
    display: none;
}
@media screen and (max-width:900px) {
    .background{
        flex-direction: column;
        width: 100%;
        gap: 30px;
        align-items: flex-start;
    }
    .role{
       flex-direction: column;
       /* border-top: 2px solid black; */
    }
    .sub-role{
        display: flex;
        gap: 20px;
    }
    .mini-main{
        flex-direction: column;
    }
    .main-main{
        padding: 30px;
    }
    .border{
        display: block;
    }
    .image img{
        display: none;
    }
    .mobile-img{
        display: block;
        position: absolute;
        left: 12%;
        margin-top: 1px;
    }
    .img{
        height: 70px;
    }
}
`
export default Index;