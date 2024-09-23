import { createSlice} from '@reduxjs/toolkit'


export const voteSlice = createSlice({
    name: 'votes',
    initialState: {
        candidateA: 0,
        candidateB: 0
    },
    reducers: {

        // voteForA: state => {state.candidateA += 1},
        // voteForB: state => {state.candidateB += 1}

        // or

        voteForCandidateA(state) {
            state.candidateA += 1
        },
        voteForCandidateB(state) {
            state.candidateB += 1
        }
    }
});


export const { voteForCandidateA, voteForCandidateB } = voteSlice.actions;
export default voteSlice.reducer;



// ===========================================


// import { createSlice } from '@reduxjs/toolkit';

// export const voteSlice = createSlice({
//     name: 'votes',
//     initialState: {
//         candidateA: 0,
//         candidateB: 0,
//     },
//     reducers: {
//         voteForCandidateA: state => { state.candidateA += 1 },
//         voteForCandidateB: state => { state.candidateB += 1 },
//     }
// });

// export const { voteForCandidateA, voteForCandidateB } = voteSlice.actions;

// export default voteSlice.reducer; 
