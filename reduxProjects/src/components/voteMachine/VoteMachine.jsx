
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { voteForCandidateA, voteForCandidateB } from '/src/redux/voteSlice';

const VoteMachine = () => {

    const voteA = useSelector(state => state.votes.candidateA)
    const voteB = useSelector(state => state.votes.candidateB)
    const dispatch = useDispatch();
  
    function handleVoteA() {
      dispatch(voteForCandidateA());
    }
  
    function handleVoteB() {
      dispatch(voteForCandidateB());
    }
    return (
        <div>
            <div className=' border flex flex-col justify-center items-center'>
                <h1 className=' text-center bg-sky-300 w-2/4'>Voting Machine</h1>
                <div className="container border flex flex-col">

                    <h3>Total vote: {voteA + voteB}</h3>

                    <div className=' border flex justify-evenly'>

                        <div>
                            <h2>Candidate A: {voteA}</h2>
                            <Button
                                size='small'
                                variant="contained"
                                onClick={handleVoteA}
                            >
                                Vote for A
                            </Button>
                        </div>

                        <div>
                            <h2>Candidate B: {voteB}</h2>
                            <Button
                                size='small'
                                variant="contained"
                                onClick={handleVoteB}
                            >
                                Vote for B
                            </Button>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default VoteMachine
