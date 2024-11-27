function votingProgram() {
    const candidateNumber = parseInt(prompt('Enter the number of candidates: '), 10);

    let candidates = [];
    for (let i = 0; i < candidateNumber; i++) {
        let candidateName = prompt(`Enter names of candidates ${i + 1}: `);
        candidates.push({
            name: candidateName,
            votes: 0
        });
    }

    const numVoters = parseInt(prompt('Enter the number of voters: '), 10);
    for (let i = 0; i < numVoters; i++) {
        let vote = prompt(`Voter ${i+1}, whom would you like to vote for? (Enter name of the candidate)`);

        if (vote) {
            let candidate = candidates.find(cand => cand.name.toLowerCase() === vote.trim().toLowerCase());
            if (candidate) {
                candidate.votes++;
            } else {
                console.log('Vote is invalid. Such a candidate not found.');
            }
        } else {
            console.log(`Voter ${i+1} did not cast vote.`);
        }
    }

    candidates.sort((a, b) => b.votes - a.votes);

    let winner = candidates[0];
    console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);

    console.log('Results: ');
    candidates.forEach(candidate => {
        console.log(`${candidate.name}: ${candidate.votes} votes`);
    });
}

votingProgram()