import { useGetStories, useGetStoryById } from "./dataloader"


export default function Home () {

    const {data} = useGetStories()
    // console.log(data)
    return ( 
        <div>
            {data?.splice(0, 5).map(d=><Story key={d} id={d}></Story>)}
        </div>
    )
}
function Story({id}) {
    const {data} = useGetStoryById(id)
    console.log(data)
    return(
        <div>
            <h3>{data?.title}</h3>
            {"|"}
            <span>by &nbsp;{data?.by}</span>
            {"|"}
            <a href={data?.url}>&nbsp;Click Here</a>
           {"|"}
            <span>&nbsp;{data?.time}</span>
            {"|"}
            <span>&nbsp;{data?.score}</span>
        </div>
    )
}
