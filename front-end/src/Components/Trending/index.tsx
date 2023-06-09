import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as C from './styles'
import Score from '../Score'
import { useSelector } from 'react-redux'


export default function Trending(data: any) {

    let format;
    switch (data.data.format) {
        case 'TV':
            format = 'anime';
            break;
        case 'MANGA':
            format = 'manga';
            break;
        case 'MOVIE':
            format = 'movie';
            break;
        case 'NOVEL':
            format = 'novel';
            break;
        case 'SPECIAL':
            format = 'special';
            break;
        case 'ONE_SHOT':
            format = 'one-shot';
            break;
        case 'OVA':
            format = 'ova';
            break;
        case 'ONA':
            format = 'ona';
            break;
        case 'TV_SHORT':
            format = 'tv-short';
            break;
        default:
            format = 'anime'; //fix exception
            break;
    }

    // dark mode
    const darkModeSwitch = useSelector((state: any) => state.darkModeSwitch)
    const { darkMode } = darkModeSwitch

    return (
        <>
            <C.AnimeToBeListed
                info={data.data}
                darkMode={darkMode}
            >

                <div className='cover'>
                    {data.data.fromGoGoAnime ? (
                        <Link to={`/${format}/v2/${data.data.idGoGoAnime}`}>
                            <img src={`${data.data.coverImage ? data.data.coverImage.large : data.data.coverImg}`} alt={data.data.title ? data.data.title.romaji : data.data.fullTitle}></img>
                        </Link>
                    ) : (
                        <Link to={`/${format}/${data.data.id}`}>
                            <img src={`${data.data.coverImage ? data.data.coverImage.large : data.data.coverImg}`} alt={data.data.title ? data.data.title.romaji : data.data.fullTitle}></img>
                        </Link>
                    )}
                </div>

                <div className='info'>
                    {data.data.fromGoGoAnime ? (
                        <Link to={`/${format}/v2/${data.data.idGoGoAnime}`}>
                            <h2>{data.data.fullTitle}</h2>
                        </Link>
                    ) : (
                        <Link to={`/${format}/${data.data.id}`}>
                            <h2>
                                {data.data.title && data.data.title.romaji.slice(0, 28)}
                                {data.data.fullTitle && data.data.fullTitle.slice(0, 28)}
                            </h2>
                        </Link>
                    )}
                    {data.data.genres && (
                        <div className='genre'>
                            <ul>
                                {(data.data.genres).slice(0, 3).map((item: any, key: React.Key | null | undefined) => (
                                    <li key={key}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {data.data.averageScore && (
                        <div className='score'>
                            <Score data={data.data.averageScore} />
                        </div>
                    )}

                    {data.data.description && (
                        <div className={`description-hover ${data.data.id}`}>

                            <span></span>
                            {data.data.description && data.data.description.length > 300 ? (
                                <p>
                                    {data.data.description.slice(0, 300)}...<Link to={`/${format}/${data.data.id}`}> Read More</Link>
                                </p>
                            ) : (
                                <p>
                                    {data.data.description}
                                </p>
                            )}

                        </div>
                    )}
                </div>



            </C.AnimeToBeListed>

        </>
    )
}
