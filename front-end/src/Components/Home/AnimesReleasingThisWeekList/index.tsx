import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as C from './styles'
import { ReactComponent as PlusSvg } from '../../../imgs/svg/plus.svg'
import { ReactComponent as CheckSvg } from '../../../imgs/svg/check.svg'
import { ReactComponent as TvSvg } from '../../../imgs/svg/tv-solid.svg'
import { ReactComponent as BallonSvg } from '../../../imgs/svg/speech-balloon-svgrepo.svg'
import { ReactComponent as MovieSvg } from '../../../imgs/svg/movie-player-svgrepo.svg'

import { useDispatch, useSelector } from 'react-redux'
import { addMediaToUserAccount, removeMediaFromUserAccount } from '../../../redux/actions/userActions'

export default function AnimesReleasingThisWeek(data: any) {

    const [isAlreadyAdded, setIsAlreadyAdded] = useState<any>()

    let format;
    let IconSvg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

    //helps adding the right media's format on URL
    switch (data.data.format) {
        case 'TV':
            format = 'anime';
            IconSvg = TvSvg
            break;
        case 'MANGA':
            format = 'manga';
            IconSvg = BallonSvg
            break;
        case 'MOVIE':
            format = 'movie';
            IconSvg = MovieSvg
            break;
        case 'NOVEL':
            format = 'novel';
            IconSvg = BallonSvg
            break;
        case 'SPECIAL':
            format = 'special';
            IconSvg = TvSvg
            break;
        case 'ONE_SHOT':
            format = 'one-shot';
            IconSvg = BallonSvg
            break;
        case 'OVA':
            format = 'ova';
            IconSvg = TvSvg
            break;
        case 'ONA':
            format = 'ona';
            IconSvg = TvSvg
            break;
        case 'TV_SHORT':
            format = 'tv-short';
            IconSvg = TvSvg
            break;
        default:
            format = 'manga'; //exception
            IconSvg = BallonSvg
            break;
    }

    const userLogin = useSelector((state: any) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {

        if (userInfo !== null && userInfo.mediaAdded !== null) {
            userInfo.mediaAdded.find((item: any) => {
                if (item.id === data.data.id) {
                    setIsAlreadyAdded(true)
                }
            })
        }

    }, [data.data.id, isAlreadyAdded, userInfo])

    const dispatch: any = useDispatch()
    const navigate: any = useNavigate()

    const handleMediaToAccount = () => {

        //CHECKS if dont has on user account
        if (isAlreadyAdded == null || undefined) {

            if (userInfo) {

                dispatch(addMediaToUserAccount({
                    'addedAt': new Date(),
                    'id': Number(data.data.id),
                    'primaryColor': data.data.coverImage.color ? data.data.coverImage.color : '',
                    'fullTitle': data.data.title.romaji,
                    'nativeTitle': data.data.title.native,
                    'bannerImg': data.data.bannerImage ? data.data.bannerImage : '',
                    'coverImg': data.data.coverImage.large ? data.data.coverImage.large : data.data.coverImage.extraLarge || data.data.coverImage.medium,
                    'format': data.data.format,
                    'type': data.data.type,
                    'status': data.data.status,
                    'isAdult': Boolean(data.data.isAdult)
                }))

                setIsAlreadyAdded(true)

            }
            else {

                navigate('/login')

            }


        }
        else {

            //remove dispatch 
            dispatch(removeMediaFromUserAccount({

                'id': Number(data.data.id)

            }))

            setIsAlreadyAdded(null)

        }

    }

    return (

        <C.AnimeToBeListed info={data.data} isAlreadyAdded={isAlreadyAdded}>

            <div className='add-button'>
                <div className='media-type'>
                    <IconSvg  />
                </div>

                <button type='button' onClick={() => handleMediaToAccount()}>
                    {isAlreadyAdded == null && (<PlusSvg />)}
                    {isAlreadyAdded && (<CheckSvg fill='#ff7fb2' />)}
                </button>
            </div>

            <div className='see-more-button'>
                {data.data.title.romaji.length > 25 ? (
                    <div className='name-fade'>
                        <h1>{data.data.title.romaji.slice(0, 36)}... </h1>
                        {/* <Score data={data.data.averageScore} /> */}
                    </div>

                ) : (
                    <>
                        <div className='name-fade'>
                            <h1>{data.data.title.romaji}</h1>
                            {/* <Score data={data.data.averageScore} /> */}
                        </div>

                    </>
                )}
                <Link to={`/${format}/${data.data.id}`}>See More</Link>
            </div>
        </C.AnimeToBeListed>
    )
}
