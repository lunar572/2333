/* eslint-disable no-mixed-operators */
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Score from '../../Score';
import SearchInnerPage from '../../SearchInnerPage'
import { ReactComponent as WatchSvg } from '../../../imgs/svg/watch.svg'
import { ReactComponent as BookSvg } from '../../../imgs/svg/book.svg'
import { ReactComponent as PlayCaretSvg } from '../../../imgs/svg/caret-right-square.svg'
import { ReactComponent as BrodcastSvg } from '../../../imgs/svg/broadcast-pin.svg'
import { ReactComponent as CollectionEpisodesSvg } from '../../../imgs/svg/collection-play.svg'
import * as C from './styles'
import { useSelector } from 'react-redux';

export default function AsideInfo(data: any) {

  const [nextEpisodeDate, setNextEpisodeDate] = useState<any>(data.data.nextAiringEpisode && new Date(data.data.nextAiringEpisode.airingAt * 1000));

  // dark mode
  const darkModeSwitch = useSelector((state: any) => state.darkModeSwitch)
  const { darkMode } = darkModeSwitch

  return (
    <C.Container
     data={data.data}
     darkMode={darkMode}
     >

      {data.data.length === 0 ? (

        <div className='skeleton'>

          loading

        </div>

      ) : (
        <>
          <div className='search-desktop'>
            <SearchInnerPage />
          </div>

          <div className='info-aside'>

            <div className='info-heading'>

              <img src={`${data.data.coverImage.medium}`} alt={`${data.data.title.romaji} Cover Art`}>
              </img>
              <h1>{data.data.title.romaji}</h1>

            </div>

            {data.data.averageScore && (
              <div className='title-score'>
                <Score data={data.data.averageScore} />
              </div>
            )}

            <div className='type'>

              {(data.data.type === 'ANIME') && (data.data.format === 'MOVIE') && (
                <h2>{data.data.format}</h2>
              ) || (data.data.type === 'ANIME' && data.data.format === 'ANIME') && (
                <h2>{data.data.format}</h2>
              ) || (data.data.type === 'ANIME' && data.data.format !== 'ANIME') && (
                <h2>{data.data.type} | {data.data.format}</h2>
              ) || (data.data.type === 'MANGA' && data.data.format === 'MANGA') && (
                <h2>{data.data.format} </h2>
              ) || (data.data.type === 'MANGA' && data.data.format !== 'MANGA') && (
                <h2>{data.data.type} | {data.data.format}</h2>
              ) }

            </div>

            <ul className='general-info'>
              {data.data.format === 'MOVIE' ? (

                <>
                </>

              ) : (
                data.data.episodes && (
                  <li><CollectionEpisodesSvg /> <strong>{data.data.episodes} Episode{data.data.episodes > 1 && ('s')}</strong></li>
                )
              )}


              {data.data.chapters && (
                <li><BookSvg /> <strong>{data.data.chapters} Chapter{data.data.chapters > 1 && ('s')}</strong></li>
              )}

              {data.data.volumes && (
                <li><BookSvg /> <strong>{data.data.volumes} Volume{data.data.volumes > 1 && ('s')}</strong></li>
              )}

              {data.data.status === 'RELEASING' && (

                <li className='releasing'>Status: <span>Releasing</span></li>

              )}

              {data.data.nextAiringEpisode && (
                <li className='releasing'><PlayCaretSvg /> Next Episode on <span>{nextEpisodeDate.getDate()}/{nextEpisodeDate.getMonth() + 1}/{nextEpisodeDate.getYear() === 122 ? "2022" : nextEpisodeDate.getYear()}</span></li>
              )}

              {(data.data.format === 'MOVIE' && (

                data.data.duration && (
                  <li><WatchSvg /> {data.data.duration} Minutes Long </li>
                )

              )) || (data.data.type === 'ANIME' && (

                data.data.duration && (
                  <li><WatchSvg />  {data.data.duration} Minutes Long Each Episode</li>
                )

              ))}

              {(data.data.format === 'MOVIE' && (
                <li><BrodcastSvg /> Released on <span>
                  {data.data.startDate.day && `${data.data.startDate.day}/`}{data.data.startDate.month && `${data.data.startDate.month}/`}{data.data.startDate.year && `${data.data.startDate.year}`}
                </span>
                </li>
              )) || (data.data.type === 'MANGA' && (
                <li><BrodcastSvg /> First Release on <span>
                  {data.data.startDate.day && `${data.data.startDate.day}/`}{data.data.startDate.month && `${data.data.startDate.month}/`}{data.data.startDate.year && `${data.data.startDate.year}`}
                </span>
                </li>
              )) || (data.data.type === 'ANIME' && (
                <li><BrodcastSvg /> First Transmition on <span>
                  {data.data.startDate.day && `${data.data.startDate.day}/`}{data.data.startDate.month && `${data.data.startDate.month}/`}{data.data.startDate.year && `${data.data.startDate.year}`}</span>
                </li>

              ))}

              {data.data.status === 'FINISHED' && (

                (data.data.format === 'MOVIE' && (
                  <>
                  </>
                )) || (data.data.type === 'ANIME' && (

                  <li><BrodcastSvg /> Last Transmition on <span>{data.data.endDate.day && `${data.data.endDate.day}/`}{data.data.endDate.month && `${data.data.endDate.month}/`}{data.data.endDate.year && `${data.data.endDate.year}`}</span></li>

                )) || (data.data.type === 'MANGA' && (

                  <li><BrodcastSvg /> Last Release on <span>
                    {data.data.startDate.day && `${data.data.endDate.day}/`}{data.data.endDate.month && `${data.data.endDate.month}/`}{data.data.endDate.year && `${data.data.endDate.year}`}
                  </span>
                  </li>

                ))
              )}

              {/* Fix for more studios */}
              {data.data.studios.edges.length > 0 && (
                <li>
                  Studios:
                  {data.data.studios.edges.slice(0, 3).map((item: any, key: any) => (
                    <a key={key} href={`${item.node.siteUrl}`} target='_blank' rel='noreferrer'> {item.node.name}</a>
                  ))}
                </li>
              )}
            </ul>

            {data.data.trailer && (
              <div className='trailer'>
                <h2>Trailer</h2>

                <iframe width='100%' height='240px' title='Trailer' src={`https://www.youtube.com/embed/${data.data.trailer.id}`}>

                </iframe>

              </div>
            )}

            {data.data.genres && (
              <div className='genres'>
                <h2>Genres</h2>
                <ul>
                  {data.data.genres.map((item: any, key: any) => (
                    <li key={key}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {data.data.characters.edges && (
              <div className='characters'>
                <h2>Characters</h2>

                <ul>
                  {data.data.characters.edges.slice(0, 6).map((item: any, key: any) => (
                    <li key={key}>
                      <div className='img'>
                        <img src={`${item.node.image.medium}`} alt={`${item.node.name.full}`} />
                      </div>
                      <h3>{item.node.name.full}</h3>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        </>
      )
      }

    </C.Container >
  )
}
