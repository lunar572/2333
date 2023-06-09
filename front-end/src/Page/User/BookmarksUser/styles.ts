import styled from 'styled-components'

interface Props {
    tabIndex: any;
    darkMode: boolean
}

export const Container = styled.div<Props>`

    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${props => props.darkMode ? 'var(bcg-dark-mode)' : 'var(--bcg-light-mode)'};

    .main.skeleton{

        margin: 20px;

        .skeleton-name{
            
            height: 10vh;
            width: 50%;

            background-color: #c0c0c0;
            border-radius: 2px;

            animation: skeleton-loading 1s linear infinite alternate;

            @keyframes skeleton-loading{
                0%{
                    background-color: #c0c0c0;
                }
                100%{
                    background-color: #999999;
                }
            }
        }
        
        .grid{
            
            display: grid;
            grid-template-columns: auto;
            justify-content: flex-start;
            align-items: center;

            margin: 2rem 0;

            background-color: #c0c0c0;

            animation: skeleton-loading 1s linear infinite alternate;

                @keyframes skeleton-loading{
                    0%{
                        background-color: #c0c0c0;
                    }
                    100%{
                        background-color: #999999;
                    }
                }

            .skeleton-grid-item{
                width: 9rem;
                height: 11rem;

                margin: 2rem;

                border-radius: 4px;

                background-color: #c0c0c0;

                animation: skeleton-loading 1s linear infinite alternate;

                @keyframes skeleton-loading{
                    0%{
                        background-color: #c0c0c0;
                    }
                    100%{
                        background-color: #999999;
                    }
                }

                >div{

                    height: 10%;
                    width: 80%;

                    margin: 1rem;

                    background-color: var(--brand-color);

                }
            }

        }

    }

    div.main{

        width: 100%;    

        padding-left: 20px;

        margin-bottom: 20px;

        
        @media(max-width: 1024px){

            padding: 0 20px;

        }

        @media(max-width: 768px){

            width: 99%;    

            padding: 0px 20px;

            border-left: 0;
        }

        .content{

            display: flex;
            flex-direction: row;
            justify-content: space-between;
            
            @media(max-width: 1440px){
                width: -webkit-fill-available;
                justify-content: space-evenly;
            }
                

            @media(max-width: 1024px){
                flex-direction: column-reverse;
            }

            div[data-tab="0"]{
                display: ${props => props.tabIndex === 0 ? `block` : 'none'};
                width: -webkit-fill-available;
                height: -webkit-fill-available;
            }
            div[data-tab="1"]{
                display: ${props => props.tabIndex === 1 ? `block` : 'none'};
                width: -webkit-fill-available;
                height: -webkit-fill-available;
            }
            div[data-tab="2"]{
                display: ${props => props.tabIndex === 2 ? `block` : 'none'};
                width: -webkit-fill-available;
                height: -webkit-fill-available;
            }
            div[data-tab="3"]{
                display: ${props => props.tabIndex === 3 ? `block` : 'none'};
                width: -webkit-fill-available;
                height: -webkit-fill-available;
            }
            div[data-tab="4"]{
                display: ${props => props.tabIndex === 4 ? `block` : 'none'};
                width: -webkit-fill-available;
                height: -webkit-fill-available;
            }

        }

        >h1{
            margin: 2rem 0;
            margin-left: 2rem;

            font-size: 3rem;
            font-weight: 600;
            color: var(--brand-color);
        }

        .sort{
            min-width: 13%;
            max-width: 13%;

            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            margin-left: 1rem;
            padding: 0 1rem;

            border-left: ${props => props.darkMode ? '2px solid var(--text-grey-variant3)' : '2px solid #ff1a7512'};
            
            @media(max-width: 1024px){

                width: 100%;
                
                min-width: initial;
                max-width: initial;

                margin: 0;
                padding: 0;

                border-left: 0;
                justify-content: center;
            }

            @media(max-width: 462px){

                min-width: auto;
                max-width: auto;

            }

            div.media-type{
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                flex-wrap: wrap;

                margin: 0 1rem;

                
                @media(min-width: 620px) and (max-width: 768px){

                    margin: 0;
                    
                }

                @media(max-width: 1024px){
                        margin-top: 1rem;
                        margin-bottom: 2rem;
                        display: flex;
                        flex-wrap: wrap;
                }

                div.sort-buttons{

                    display: flex;
                    flex-direction: row;
                    align-items: center;

                    @media(max-width: 768px){

                        margin: 2rem 0;
                        justify-content: space-evenly;  

                    }

                    @media(min-width: 1024px){

                        flex-direction: column;
                                            
                        
                    }

                    @media(max-width: 462px){

                        flex-wrap: wrap;

                    }

                    >button{
                        cursor: pointer;
                        
                        margin: 0.5rem 1rem;

                        max-height: 6rem;
                        max-width: inherit;

                        min-height: 3rem;
                        min-width: 100%;

                        padding: 1rem;

                        border-radius: 4px;

                        font-size: 1.5rem;
                        font-weight: 500;
                        
                        @media(max-width: 1024px){

                            
                            max-height: 6rem;
                            max-width: inherit;

                            min-height: 3rem;
                            min-width: auto;

                            margin-top: 0.5rem;
                            margin-bottom: 0.5rem;

                        }

                        @media(min-width: 768px)and(max-width: 1020px){

                            padding: 0.2rem;
                            margin: 0rem 0.2rem;

                        }

                        @media(max-width: 768px){

                            margin: 0.5rem 0;

                        }

                    }

                    button#button-tab-0{
                            
                        background-color: ${props => props.darkMode === true && props.tabIndex === 0 && 'var(--brand-color)'};
                        background-color: ${props => props.darkMode === true && props.tabIndex !== 0 && 'var(--brand-dark-mode-color)'};


                        background-color: ${props => props.darkMode === false && props.tabIndex === 0 && 'var(--brand-color)'};
                        background-color: ${props => props.darkMode === false && props.tabIndex !== 0 && 'var(--bcg-light-mode)'};

                        border: ${props => props.tabIndex === 0 ? '2px solid var(--brand-color)' : '2px solid var(--brand-color)'};

                        color: ${props => props.darkMode === true && props.tabIndex === 0 && '#fff'};
                        color: ${props => props.darkMode === true && props.tabIndex !== 0 && 'var(--brand-color)'};

                        color: ${props => props.darkMode === false && props.tabIndex === 0 && '#fff'};
                        color: ${props => props.darkMode === false && props.tabIndex !== 0 && 'var(--brand-color)'};

                        font-weight: ${props => props.tabIndex === 0 ? '600' : '300'};
                        
                    }
                    button#button-tab-1{
                            
                        background-color: ${props => props.darkMode === true && props.tabIndex === 1 && 'var(--brand-color)'};
                        background-color: ${props => props.darkMode === true && props.tabIndex !== 1 && 'var(--brand-dark-mode-color)'};


                        background-color: ${props => props.darkMode === false && props.tabIndex === 1 && 'var(--brand-color)'};
                        background-color: ${props => props.darkMode === false && props.tabIndex !== 1 && 'var(--bcg-light-mode)'};

                        border: ${props => props.tabIndex === 1 ? '2px solid var(--brand-color)' : '2px solid var(--brand-color)'};

                        color: ${props => props.darkMode === true && props.tabIndex === 1 && '#fff'};
                        color: ${props => props.darkMode === true && props.tabIndex !== 1 && 'var(--brand-color)'};

                        color: ${props => props.darkMode === false && props.tabIndex === 1 && '#fff'};
                        color: ${props => props.darkMode === false && props.tabIndex !== 1 && 'var(--brand-color)'};
                        font-weight: ${props => props.tabIndex === 1 ? '600' : '300'};
                    }
                    button#button-tab-2{
                            
                        background-color: ${props => props.darkMode === true && props.tabIndex === 2 && 'var(--brand-color)'};
                        background-color: ${props => props.darkMode === true && props.tabIndex !== 2 && 'var(--brand-dark-mode-color)'};


                        background-color: ${props => props.darkMode === false && props.tabIndex === 2 && 'var(--brand-color)'};
                        background-color: ${props => props.darkMode === false && props.tabIndex !== 2 && 'var(--bcg-light-mode)'};

                        border: ${props => props.tabIndex === 2 ? '2px solid var(--brand-color)' : '2px solid var(--brand-color)'};

                        color: ${props => props.darkMode === true && props.tabIndex === 2 && '#fff'};
                        color: ${props => props.darkMode === true && props.tabIndex !== 2 && 'var(--brand-color)'};

                        color: ${props => props.darkMode === false && props.tabIndex === 2 && '#fff'};
                        color: ${props => props.darkMode === false && props.tabIndex !== 2 && 'var(--brand-color)'};
                        
                        font-weight: ${props => props.tabIndex === 2 ? '600' : '300'};
                    }
                    button#button-tab-3{
                            
                        background-color: ${props => props.darkMode === true && props.tabIndex === 3 && 'var(--brand-color)'};
                        background-color: ${props => props.darkMode === true && props.tabIndex !== 3 && 'var(--brand-dark-mode-color)'};


                        background-color: ${props => props.darkMode === false && props.tabIndex === 3 && 'var(--brand-color)'};
                        background-color: ${props => props.darkMode === false && props.tabIndex !== 3 && 'var(--bcg-light-mode)'};

                        border: ${props => props.tabIndex === 0 ? '2px solid var(--brand-color)' : '2px solid var(--brand-color)'};

                        color: ${props => props.darkMode === true && props.tabIndex === 3 && '#fff'};
                        color: ${props => props.darkMode === true && props.tabIndex !== 3 && 'var(--brand-color)'};

                        color: ${props => props.darkMode === false && props.tabIndex === 3 && '#fff'};
                        color: ${props => props.darkMode === false && props.tabIndex !== 3 && 'var(--brand-color)'};

                        font-weight: ${props => props.tabIndex === 3 ? '600' : '300'};
                    }
                    button#button-tab-4{
                            
                        background-color: ${props => props.darkMode === true && props.tabIndex === 4 && 'var(--brand-color)'};
                        background-color: ${props => props.darkMode === true && props.tabIndex !== 4 && 'var(--brand-dark-mode-color)'};


                        background-color: ${props => props.darkMode === false && props.tabIndex === 4 && 'var(--brand-color)'};
                        background-color: ${props => props.darkMode === false && props.tabIndex !== 4 && 'var(--bcg-light-mode)'};

                        border: ${props => props.tabIndex === 4 ? '2px solid var(--brand-color)' : '2px solid var(--brand-color)'};

                        color: ${props => props.darkMode === true && props.tabIndex === 4 && '#fff'};
                        color: ${props => props.darkMode === true && props.tabIndex !== 4 && 'var(--brand-color)'};

                        color: ${props => props.darkMode === false && props.tabIndex === 4 && '#fff'};
                        color: ${props => props.darkMode === false && props.tabIndex !== 4 && 'var(--brand-color)'};

                        font-weight: ${props => props.tabIndex === 4 ? '600' : '300'};
                    }
                }
                
            }
        }

        .grid{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 2rem;

            @media(max-width: 1280px){

                grid-template-columns: 1fr 1fr;

            }

            @media(max-width: 1080px){

                grid-template-columns: 1fr 1fr;

            }

            @media(max-width: 768px){

                min-height: 70vh;

                grid-template-columns: 1fr 1fr;

            }

            @media(max-width: 590px){

                grid-template-columns: 1fr;
                justify-items: center;

            }

            .grid-item{

                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;

                min-height: 20rem;

                padding: 0.2rem;

                border: 1px solid var(--brand-color);
                border-radius: 4px;

                .item-img{
                    height: min-content;

                    img{
                        height: 18rem;
                        width: 12rem;

                        border-radius: 4px;
                    }
                }

                .item-info{
                    width: 11rem;

                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    flex-wrap: wrap;

                    margin: 0 1rem;

                    h1{
                        font-size: 1.6rem;
                        font-weight: 600;

                        margin: 0.5rem 0;
                    }

                    .info{
                        display: flex;
                        flex-direction: column;

                        >*{
                            margin: 0.4rem 0;
                        }

                        small{
                            color: #333333;
                            font-size: 1.1rem;
                            font-weight: 400;
                        }
                        span{
                            color: #333333;
                            font-size: 1.2rem;
                            font-weight: 400;
                        }
                    }

                    ul{
                        margin: 1rem 0;

                        *{
                            color: #333333;
                        }

                        li{
                            font-size: 1.3rem;
                            font-weight: 600;
                            color: #888888;

                            margin: 0.5rem 0;

                            span{
                                color: #555555;
                            }
                        }

                    }

                    
                }

                :hover{
                    transition: all ease-in-out 100ms;
                    box-shadow: 0px 0px 8px 3px #bfbfbf;
                }

            }

        }

        .no-items-bookmarked{

            width: 60vw;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            *{
                margin: 2rem;
            }

            h2{
                font-size: 3rem;
                font-weight: 600;

                color: var(--brand-color);
            }

            p{
                font-size: 2rem;
                font-weight: 400;
            }

        }

    }



`