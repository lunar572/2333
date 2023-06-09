import styled from "styled-components";

interface Props {
    data: any;
    indexHeading: number,
    isAlreadyAdded: any,
    alreadyWatched: any,
    darkMode: boolean
}

export const Container = styled.div<Props>`

    width: 56vw;

    margin: 2rem;
    
    @media(max-width: 1180px){
        width: initial;
        padding: 1rem;
        margin: 0rem;
    }

    @media(max-width: 620px){

        width: 95%;
        padding: 0;
    }

    .search-mobile{
        display: none;
    
        @media(max-width: 768px){
            display: block;

            padding: 1rem 0;
        }
    }

    .banner-img{
        height: 40vh;
        width: 56vw;
        background-image: url(${(props) => props.data.bannerImage ? props.data.bannerImage : 'https://jornalismorio.espm.br/wp-content/uploads/2021/12/confira-agora-os-25-melhores-animes-que-ja-foram-criados-1.jpg'});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        @media(max-width: 1280px){

            width: auto;

        }

        @media(max-width: 620px){

            height: 25vh;
            width: 100%;

            background-size: cover;

            overflow: hidden;

        }
    }

    .name-and-description{

        margin: 2rem 0;

        border-bottom: 4px solid var(--pink-variant-1);

        >*{
            margin: 1rem 0;
        }

        .title-and-add-media-button{

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;

            @media(max-width: 620px){
                flex-direction: column;

                >*{
                    margin: 1rem 0!important;
                }
            }

            h1{
                margin: 0;

                font-size: 3rem;
                font-weight: 600;
                color: ${props => props.darkMode === true && "var(--text-grey-variant2)"};
                color: ${props => props.darkMode === false && "var(--black-variant)"};
                color: ${props => props.data.coverImage.color && props.data.coverImage.color};
            }

            .buttons{

                display: flex;

                button{
                    cursor: pointer;
                    margin: 0 1rem;

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;

                    padding: 0.7rem;

                    font-size: 1.6rem;
                    /* color: #fff; */

                    border: 2px solid var(--pink-variant-1);
                    border-radius: 4px;

                    background-color:transparent;

                    svg{

                        width: 1.5rem;
                        transform: scale(2);
                        height: auto;

                        fill: var(--pink-variant-1);

                        margin: 0.5rem 1rem;

                    }

                    :hover{
                        opacity: 0.75;
                    }

                }

                button.watched{

                    color: ${props => props.darkMode === true && props.alreadyWatched == null && 'var(--white)'};
                    color: ${props => props.darkMode === true && props.alreadyWatched != null && 'var(--white)'};

                    color: ${props => props.darkMode === false && props.alreadyWatched == null && '#333333'};
                    color: ${props => props.darkMode === false && props.alreadyWatched != null && 'var(--white)'};

                    background-color: ${props => props.alreadyWatched == null ? 'transparent' : 'var(--pink-variant-1)'};

                    svg{

                        fill: ${props => props.darkMode === true && props.alreadyWatched == null && 'var(--white)'};
                        fill: ${props => props.darkMode === true && props.alreadyWatched != null && 'var(--white)'};

                        fill: ${props => props.darkMode === false && props.alreadyWatched == null && 'var(--pink-variant-1)'};
                        fill: ${props => props.darkMode === false && props.alreadyWatched != null && 'var(--white)'};
                        
                        padding-right: 0.4rem;
                        padding-left: 0.1rem;
                    }

                }

                button.bookmarked{

                    color: ${props => props.darkMode === true && props.isAlreadyAdded == null && 'var(--white)'};
                    color: ${props => props.darkMode === true && props.isAlreadyAdded != null && 'var(--white)'};

                    color: ${props => props.darkMode === false && props.isAlreadyAdded == null && '#333333'};
                    color: ${props => props.darkMode === false && props.isAlreadyAdded != null && 'var(--white)'};

                    background-color: ${props => props.isAlreadyAdded == null ? 'transparent' : 'var(--pink-variant-1)'};

                    svg{

                        fill: ${props => props.darkMode === true && props.isAlreadyAdded == null && 'var(--white)'};
                        fill: ${props => props.darkMode === true && props.isAlreadyAdded != null && 'var(--white)'};

                        fill: ${props => props.darkMode === false && props.isAlreadyAdded == null && 'var(--pink-variant-1)'};
                        fill: ${props => props.darkMode === false && props.isAlreadyAdded != null && 'var(--white)'};

                        padding-right: 0.4rem;
                        padding-left: 0.1rem;
                    }

                }

            }
        }
        
        div.description{
            margin-top: 2rem;

            color: ${props => props.darkMode && 'var(--text-grey-variant)'};
            font-size: 1.6rem;
            font-weight: 400;

            span.more-details{

                display: flex;
                justify-content: flex-end;

                cursor: pointer;

                color: var(--pink-variant-1);
                text-decoration: underline;

            }
        }
    }

    .heading{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        margin: 2rem 0;

        div.nav{
            display: flex;
            flex-direction: row;

            >*{
                margin: 0 1rem;
            }
            
            overflow: auto;

            h2{
                cursor: pointer;

                height: min-content;

                padding: 0.5rem 1rem;

                border-radius: 4px;

                font-size: 2rem;
                font-weight: 600;

                :hover{
                    /* background-color: var(--pink-variant-1)!important; */
                    background-color: #ff5ebc33!important;
                }
            }
        }

        h2{

            padding: 0.5rem 1rem;

            color: ${props => props.darkMode && 'var(--text-grey-variant)'};
            font-size: 2rem;
            font-weight: 600;

        }
        

        h2[data-tab="0"]{
            border: ${props => props.indexHeading === 0 ? '1px solid transparent' : '1px solid var(--pink-variant-1)'};

            background-color: ${props => props.darkMode === true && props.indexHeading === 0 && 'var(--pink-variant-1)!important'};
            background-color: ${props => props.darkMode === true && props.indexHeading !== 0 && 'transparent!important'};

            background-color: ${props => props.darkMode === false && props.indexHeading === 0 ? 'var(--pink-variant-1)!important' : '#fafafa'};

            color: ${props => props.indexHeading === 0 ? '#fff' : 'var(--pink-variant-1)'};
        }
        h2[data-tab="1"]{
            border: ${props => props.indexHeading === 1 ? '1px solid transparent' : '1px solid var(--pink-variant-1)'};
            
            background-color: ${props => props.darkMode === true && props.indexHeading === 1 && 'var(--pink-variant-1)!important'};
            background-color: ${props => props.darkMode === true && props.indexHeading !== 1 && 'transparent!important'};

            background-color: ${props => props.darkMode === false && props.indexHeading === 1 ? 'var(--pink-variant-1)!important' : '#fafafa'};

            
            color: ${props => props.indexHeading === 1 ? '#fff' : 'var(--pink-variant-1)'};
        }
        h2[data-tab="2"]{
            border: ${props => props.indexHeading === 2 ? '1px solid transparent' : '1px solid var(--pink-variant-1)'};
            
            background-color: ${props => props.darkMode === true && props.indexHeading === 2 && 'var(--pink-variant-1)!important'};
            background-color: ${props => props.darkMode === true && props.indexHeading !== 2 && 'transparent!important'};

            background-color: ${props => props.darkMode === false && props.indexHeading === 2 ? 'var(--pink-variant-1)!important' : '#fafafa'};

            
            color: ${props => props.indexHeading === 2 ? '#fff' : 'var(--pink-variant-1)'};
        }
        
        .svg-dots{

            display: flex;
            flex-direction: row;
            align-items: center;

            a.other-source-link{

                display: flex;
                align-items: stretch;

                margin: 0 10px;
                padding: 10px;

                border-radius: 2px;

                text-decoration: underline;

                color: ${props => props.darkMode ? 'var(--pink-variant-2)' : 'var(--pink-variant-2)'};
                font-size: 1.4rem;
                font-weight: 400;
                
                svg{

                    margin-right: 10px;

                }

                :hover{

                    transition: all ease-in 150ms;

                    color: ${props => props.darkMode ? 'var(--pink-variant-1)' : 'var(--pink-variant-1)'};

                }
                
                @media((min-width: 769px) and (max-width: 880px)){

                    margin: 0px;

                }

                @media(max-width: 768px){

                    margin: 10px;

                }

            }

            >*{
                fill: ${props => props.darkMode && 'var(--text-grey-variant)'};
            }

            @media(max-width: 880px){
                >svg{
                    display: none;
                }
            }

        }

        @media(max-width: 768px){

            flex-direction: column;

        }
        
        @media(max-width: 425px){
            div.nav{

                flex-direction: column;
                    width: 100%;
                
                > * {

                    margin: 0.2rem 0;

                }
            }
        }
        
    }

    .anime-episodes{

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 2rem 1rem;

        @media(max-width: 1280px){
            grid-template-columns: 1fr 1fr 1fr;
            justify-items: center;
        }

        @media(max-width: 1180px){
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }

        @media(max-width: 980px){
            grid-template-columns: 1fr 1fr 1fr;
        }
                                                                                                
        @media(max-width: 620px){
            grid-template-columns: 1fr 1fr 1fr;
        }

        @media(max-width: 520px){
            grid-template-columns: 1fr 1fr;
        }

    }

    div.pagination-buttons{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        width: 100%;

        margin: 2rem 0;

        span{
            font-size: 2rem;
            font-weight: 600;
            color: var(--pink-variant-2);

            padding: 0 1rem;

            border-bottom: 2px solid var(--pink-variant-2);
        }

        button[disabled]{
            cursor: default;
            opacity: 0.5;

            :hover{
                background-color: initial;
            }
        }

        button{
            cursor: pointer;

            padding: 1rem;
            margin: 0 1rem;

            border: 0;
            background-color: transparent;
            border-radius: 20%;
            
            :hover{
                background-color: ${props => props.darkMode ? 'rgba(0,0,0,0.4)' : '#e1e1e1'};
            }

            svg{
                fill: ${props => props.darkMode && 'var(--pink-variant-2)'};
                width: 0.7rem;
                height: auto;
            }
        }
    }

    .cast{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1{
            color: ${props => props.darkMode && 'var(--text-grey-variant)'};
            border-bottom: ${props => props.darkMode && '2px solid var(--text-grey-variant)'};
            margin: 2rem 0;
        }
    }

    ul.more-info{
        
        font-size: 2rem;
        font-weight: 600;

        display: flex;
        flex-direction: column;

        li{
            color: ${props => props.darkMode ? 'var(--text-grey-variant)' : 'initial'};
            font-size: 1.8rem;
            font-weight: 400;

            margin: 2rem 0;

            border-bottom: 2px solid #c0c0c0;

            span{
                color: ${props => props.darkMode ? 'var(--text-grey-variant2)' : 'initial'};
                font-weight: 600;
            }
        }

        .studios, .tags{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            a{
                color: ${props => props.darkMode ? 'var(--text-grey-variant2)' : '#'};
                text-decoration: underline;

                :hover{

                    color: #777;

                }
            }

            li{
                border-bottom: 0;

                margin: 0.5rem 0;
            }

            li:after{
                content: ', ';
                white-space: pre;
            }

            li:last-child:after{
                content: '';
            }
        }

    }


`