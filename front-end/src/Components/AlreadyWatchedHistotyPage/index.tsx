import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import * as C from './styles'

export default function AlreadyWatchedHistoryPage({ data }: any) {

    // helps adding the right media's format on URL
    let format;
    const getMediaFormat = (item: any) => {

        switch (item.format) {
            case 'TV':
                format = 'anime';
                return format;
            case 'MANGA':
                format = 'manga';
                return format;
            case 'MOVIE':
                format = 'movie';
                return format;
            case 'NOVEL':
                format = 'novel';
                return format;
            case 'SPECIAL':
                format = 'special';
                return format;
            case 'ONE_SHOT':
                format = 'one-shot';
                return format;
            case 'OVA':
                format = 'ova';
                return format;
            case 'ONA':
                format = 'ona';
                return format;
            case 'TV_SHORT':
                format = 'tv-short';
                return format;
            default:
                format = 'anime'; //exception
                return format;
        }

    }

    // get Complete Date Converted
    const convertDate = (item: any) => {

        const date = new Date(item)

        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

    }

    // dark mode
    const darkModeSwitch = useSelector((state: any) => state.darkModeSwitch)
    const { darkMode } = darkModeSwitch


    return (
        // Tag A - link
        <C.Container
            darkMode={darkMode}
            href={`/${(data.fromGoGoAnime === true && 'anime/v2') || (getMediaFormat(data))}/${data.fromGoGoAnime === true ? data.idGoGoAnime : data.id}`}
        >

            <div className='item-img'>
                <img src={`${data.coverImg}`} alt={`${data.fullTitle}`}>

                </img>
            </div>

            <div className='item-info'>

                {data.fullTitle && (
                    <h1>
                        {data.fullTitle.length > 16 ? (
                            `${data.fullTitle.slice(0, 16)}...`
                        ) : (
                            data.fullTitle
                        )}
                    </h1>
                )}

                <div className='info'>

                    {data.idGoGoAnime && (
                        <span><strong>From GoGoAnime</strong></span>
                    )}
                </div>
                <ul>
                    {data.addedAt && (
                        <li>Done Watching on <span>{convertDate(data.addedAt)}</span></li>
                    )}
                    <li>
                        <span>
                            {data.type}{data.format && (<>
                                , {data.format}
                            </>)}
                        </span>
                    </li>
                </ul>

            </div>

        </C.Container>
    )

}
