import express from "express";

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {

    // Generate array of numbers 1 to 10000
    const range = Array.from({length: 10000}, (_, i) => i + 1); 

    // Shuffle array to randomize order
    const shuffleArray = array => {
    for (let i = 0; i < array.length ; i++) {
        // generate random index between i and last element
        const j = i + Math.floor(Math.random() * (array.length - i));
        // Swap elements array[i] and array[j]
        if(i !== j){ 
            // if i and j are the same, no need to swap
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    return array;
    }

    const randomizedNumbers = shuffleArray(range);
    let count = '';

    // Print numbers in list 
    for (let i = 0; i < 10000; i++) {
        count += randomizedNumbers[i] +',  \n'; 
    }

    res.send(count);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});