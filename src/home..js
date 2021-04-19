import { useGetStories, useGetStoryById } from "./dataloader";
import {paginate, timeStampToDate} from "./utils"
import "./home.css"
import {useState} from 'react';
import React from "react";
export default function Home() {
  const [activePage, setActivePage] = useState(1);
  const handleNext = ( ) => { setActivePage( previous =>  previous + 1)}
  const handlePrevious = ( ) => { setActivePage( previous => previous > 1 ? previous - 1: previous) }
  const pageCount = 10
  const { data = []} = useGetStories();

  const storiesToDisplay =  
    paginate(data,pageCount,activePage)
  
  console.log({data, storiesToDisplay})
  return (
    <div>
      <ol>
      {storiesToDisplay.map((d, i) => (
        <Story key={d} id={d} activePage={(activePage-1)*pageCount + i+1}></Story>
        ))}
        </ol>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
    </div>
  );
}
function Story({ id, activePage}) {
  const { data } = useGetStoryById(id);
  return (
    <li value={activePage} className="rmaincontent">
      <h4>{data?.title}</h4>
      {"|"}
      <span>by &nbsp;{data?.by}</span>
      {"|"}
      <a href={data?.url}>&nbsp;Click Here</a>
      {"|"}
      <span>{timeStampToDate(data?.time)}</span>
      {"|"}
      <span>&nbsp;{data?.score}</span>
    </li>
  );
}
