function computerPlay() {
    let a = "Rock";
    let b = "Paper";
    let c = "Scissors";

    let rand = Math.floor(Math.random() * 3);

    if (rand === 0) {
        return a;
    }else if (rand === 1) {
        return b;
    }else {
        return c;
    }
}