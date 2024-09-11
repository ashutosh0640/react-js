import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [totalVote, setTotalVote] = useState(0);

  const [countVoteA, setCountVoteA] = useState(0);

  const [countVoteB, setCountVoteB] = useState(0);

  const [countVoteC, setCountVoteC] = useState(0);

  const [countVoteD, setCountVoteD] = useState(0);

  const votePerA = totalVote == 0 ? 0 : (countVoteA/totalVote)*100;
  const votePerB = totalVote == 0 ? 0 : (countVoteB/totalVote)*100
  const votePerC = totalVote == 0 ? 0 : (countVoteC/totalVote)*100;
  const votePerD = totalVote == 0 ? 0 : (countVoteD/totalVote)*100;
  


  //setTotalVote(countVoteA+countVoteB+countVoteC+countVoteD);

  useEffect(() => {
    setTotalVote(countVoteA + countVoteB + countVoteC + countVoteD);
  }, [countVoteA, countVoteB, countVoteC, countVoteD]);

  // console.log("countVoteA: ", countVoteA, votePerA);
  // console.log("countVoteB: ", countVoteB);
  // console.log("countVoteC: ", countVoteC);
  // console.log("countVoteD: ", countVoteD);
  // console.log("totalVote: ", totalVote);
  console.log("checkA: ", votePerA);
  console.log("checkB: ", votePerB);

  return (
    <>
      <p>Progress bar Total vote: {totalVote}</p>
      <div className=' border-2 border-green-500'>
        <div className=' border-2 border-red-400 flex flex-col'>

          <div className=' border m-4 flex'>
            <div className=' border-2 border-blue-600 mx-4 w-1/4 rounded-2xl'><span style={{ width: `${votePerA}%`, height: '100%', transition: '1s'}} className=' optionA bg-blue-600 inline-block rounded-xl'></span></div>
            <button onClick={() => setCountVoteA(countVoteA + 1)} className='mr-5 w-14 rounded-2xl text-white bg-blue-400'>A</button>
            <p className='text-blue-600'>{Math.floor(votePerA)}</p>
          </div>

          <div className=' border m-4 flex'>
            <div className=' border-2 border-green-600 mx-4 w-1/4 rounded-2xl'><span style={{ width: `${votePerB}%`, height: '100%', transition: '1s'}} className=' optionA bg-green-600 inline-block rounded-xl'></span></div>
            <button onClick={() => setCountVoteB(countVoteB + 1)} className='mr-5 w-14 rounded-2xl text-white bg-blue-400'>B</button>
            <p className='text-blue-600'>{Math.floor(votePerB)}</p>
          </div>

          <div className=' border m-4 flex'>
            <div className=' border-2 border-pink-600 mx-4 w-1/4 rounded-2xl'><span style={{ width: `${votePerC}%`, height: '100%', transition: '1s'}} className=' optionA bg-pink-600 inline-block rounded-xl'></span></div>
            <button onClick={() => setCountVoteC(countVoteC + 1)} className='mr-5 w-14 rounded-2xl text-white bg-blue-400'>C</button>
            <p className='text-blue-600'>{Math.floor(votePerC)}</p>
          </div>

          <div className=' border m-4 flex'>
            <div className=' border-2 border-orange-600 mx-4 w-1/4 rounded-2xl'><span style={{ width: `${votePerD}%`, height: '100%', transition: '1s'}} className=' optionA bg-orange-600 inline-block rounded-xl'></span></div>
            <button onClick={() => setCountVoteD(countVoteD + 1)} className='mr-5 w-14 rounded-2xl text-white bg-blue-400'>D</button>
            <p className='text-blue-600'>{Math.floor(votePerD)}</p>
          </div>




        </div>
      </div>
    </>
  )
}

export default App
