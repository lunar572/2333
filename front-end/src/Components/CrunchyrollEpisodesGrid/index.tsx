import React from 'react'
import EpisodesAniList from '../EpisodesAniList/EpisodesAniList'

function EpisodesGrid({ indexEpisodesPagination, data }: any) {

    // Gets the index of the current page and shows which episodes within the range in a total
    // of 24 its available
    const startSlice: number = indexEpisodesPagination === 0 ? 0 : 24 * indexEpisodesPagination
    const endSlice: number = 24 * (indexEpisodesPagination + 1)

    return (

        data.slice(startSlice, endSlice).map((item: any, key: any) => (
            <EpisodesAniList
                key={key}
                data={item}
                media={data}
            />
        ))
    )
}

export default EpisodesGrid