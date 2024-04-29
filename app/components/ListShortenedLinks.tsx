import { ShortenedLinks } from "../types"

import ShortenedLink from "./ShortenedLink"

interface PropsLisShortenedLinks{
    links: ShortenedLinks[]
}

const ListShortenedLinks = ({links}:PropsLisShortenedLinks)=>{
    return(
        <>
            {links ? 
                links.map((link)=>
                    <ShortenedLink key={link.id} link={link}/>
                )
                : ''}
        </>
    )
}

export default ListShortenedLinks