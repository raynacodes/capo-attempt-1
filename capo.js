const chordList = document.getElementById('chord-list');
const chord = chordList.children;

const lineUp = document.getElementById('chord-line-up-container');

const c = chord[0];
const cSharp = chord[1];
const d = chord[2];
const eFlat = chord[3];
const e = chord[4];
const f = chord[5];
const fSharp = chord[6];
const g = chord[7];
const aFlat = chord[8];
const a = chord[9];
const bFlat = chord[10];
const b = chord[11];
const cM = chord[12];
const cSharpM = chord[13];
const dM = chord[14];
const eFlatM = chord[15];
const eM = chord[16];
const fM = chord[17];
const fSharpM = chord[18];
const gM = chord[19];
const aFlatM = chord[20];
const aM = chord[21];
const bFlatM = chord[22];
const bM = chord[23];

//making an array based off of above (children elements of list)
const chordArray = [c, cSharp, d, eFlat, e, f, fSharp, g, aFlat, a ,bFlat, b, cM, cSharpM, dM, eFlatM, eM, fM, fSharpM, gM, aFlatM, aM, bFlatM, bM];

console.log(chordArray);

//empty array for selected chord line up
lineUpArray = [];

function copyChordC(){
    const copy = c.cloneNode(true);

    copy.style.background = 'red';
    lineUp.appendChild(copy);

    //adds to array
    const copyIndexNumber = chordArray.indexOf(c);
    lineUpArray.push(copyIndexNumber);
    console.log(lineUpArray);
}

function copyChordCSharp(){
    const copy = cSharp.cloneNode(true);

    copy.style.background = 'red';
    lineUp.appendChild(copy);

    //adds to array
    const copyIndexNumber = chordArray.indexOf(cSharp);
    lineUpArray.push(copyIndexNumber);
    console.log(lineUpArray);
}

function copyChordD(){
    const copy = d.cloneNode(true);

    copy.style.background = 'red';
    lineUp.appendChild(copy);

    //adds to array
    const copyIndexNumber = chordArray.indexOf(d);
    lineUpArray.push(copyIndexNumber);
    console.log(lineUpArray);
}

function copyChordEFlat(){
    const copy = eFlat.cloneNode(true);

    copy.style.background = 'red';
    lineUp.appendChild(copy);

    //adds to array
    const copyIndexNumber = chordArray.indexOf(eFlat);
    lineUpArray.push(copyIndexNumber);
    console.log(lineUpArray);
}

function copyChordE(){
    const copy = e.cloneNode(true);

    copy.style.background = 'red';
    lineUp.appendChild(copy);

    //adds to array
    const copyIndexNumber = chordArray.indexOf(e);
    lineUpArray.push(copyIndexNumber);
    console.log(lineUpArray);
}

function copyChordF(){
    const copy = f.cloneNode(true);

    copy.style.background = 'red';
    lineUp.appendChild(copy);

    //adds to array
    const copyIndexNumber = chordArray.indexOf(f);
    lineUpArray.push(copyIndexNumber);
    console.log(lineUpArray);
}

function copyChordFSharp(){
    const copy = fSharp.cloneNode(true);

    copy.style.background = 'red';
    lineUp.appendChild(copy);

    //adds to array
    const copyIndexNumber = chordArray.indexOf(fSharp);
    lineUpArray.push(copyIndexNumber);
    console.log(lineUpArray);
}

function copyChordG(){
    const copy = g.cloneNode(true);

    copy.style.background = 'red';
    lineUp.appendChild(copy);

    //adds to array
    const copyIndexNumber = chordArray.indexOf(g);
    lineUpArray.push(copyIndexNumber);
    console.log(lineUpArray);
}

function copyChordAFlat(){
    const copy = aFlat.cloneNode(true);

    copy.style.background = 'red';
    lineUp.appendChild(copy);

    //adds to array
    const copyIndexNumber = chordArray.indexOf(aFlat);
    lineUpArray.push(copyIndexNumber);
    console.log(lineUpArray);
}

function copyChordA(){
    const copy = a.cloneNode(true);

    copy.style.background = 'red';
    lineUp.appendChild(copy);

    //adds to array
    const copyIndexNumber = chordArray.indexOf(a);
    lineUpArray.push(copyIndexNumber);
    console.log(lineUpArray);
}

function copyChordBFlat(){
    const copy = bFlat.cloneNode(true);

    copy.style.background = 'red';
    lineUp.appendChild(copy);

    //adds to array
    const copyIndexNumber = chordArray.indexOf(bFlat);
    lineUpArray.push(copyIndexNumber);
    console.log(lineUpArray);
}

function copyChordB(){
    const copy = b.cloneNode(true);

    copy.style.background = 'red';
    lineUp.appendChild(copy);

    //adds to array
    const copyIndexNumber = chordArray.indexOf(b);
    lineUpArray.push(copyIndexNumber);
    console.log(lineUpArray);
}

function copyChordCm(){
    const copy = cM.cloneNode(true);

    copy.style.background = 'red';
    lineUp.appendChild(copy);

    //adds to array
    const copyIndexNumber = chordArray.indexOf(cM);
    lineUpArray.push(copyIndexNumber);
    console.log(lineUpArray);
}

function copyChordCSharpM(){
    const copy = cSharpM.cloneNode(true);

    copy.style.background = 'red';
    lineUp.appendChild(copy);

    //adds to array
    const copyIndexNumber = chordArray.indexOf(cSharpM);
    lineUpArray.push(copyIndexNumber);
    console.log(lineUpArray);
}

function copyChordDm(){
    const copy = dM.cloneNode(true);

    copy.style.background = 'red';
    lineUp.appendChild(copy);

    //adds to array
    const copyIndexNumber = chordArray.indexOf(dM);
    lineUpArray.push(copyIndexNumber);
    console.log(lineUpArray);
}

function copyChordEFlatm(){
    const copy = eFlatM.cloneNode(true);

    copy.style.background = 'red';
    lineUp.appendChild(copy);

    //adds to array
    const copyIndexNumber = chordArray.indexOf(eFlatM);
    lineUpArray.push(copyIndexNumber);
    console.log(lineUpArray);
}

function copyChordEm(){
    const copy = eM.cloneNode(true);

    copy.style.background = 'red';
    lineUp.appendChild(copy);

    //adds to array
    const copyIndexNumber = chordArray.indexOf(eM);
    lineUpArray.push(copyIndexNumber);
    console.log(lineUpArray);
}

function copyChordFm(){
    const copy = fM.cloneNode(true);

    copy.style.background = 'red';
    lineUp.appendChild(copy);

    //adds to array
    const copyIndexNumber = chordArray.indexOf(fM);
    lineUpArray.push(copyIndexNumber);
    console.log(lineUpArray);
}

function copyChordFSharpm(){
    const copy = fSharpM.cloneNode(true);

    copy.style.background = 'red';
    lineUp.appendChild(copy);

    //adds to array
    const copyIndexNumber = chordArray.indexOf(fSharpM);
    lineUpArray.push(copyIndexNumber);
    console.log(lineUpArray);
}

function copyChordGm(){
    const copy = gM.cloneNode(true);

    copy.style.background = 'red';
    lineUp.appendChild(copy);

    //adds to array
    const copyIndexNumber = chordArray.indexOf(gM);
    lineUpArray.push(copyIndexNumber);
    console.log(lineUpArray);
}

function copyChordAFlatm(){
    const copy = aFlatM.cloneNode(true);

    copy.style.background = 'red';
    lineUp.appendChild(copy);

    //adds to array
    const copyIndexNumber = chordArray.indexOf(aFlatM);
    lineUpArray.push(copyIndexNumber);
    console.log(lineUpArray);
}

function copyChordAm(){
    const copy = aM.cloneNode(true);

    copy.style.background = 'red';
    lineUp.appendChild(copy);

    //adds to array
    const copyIndexNumber = chordArray.indexOf(aM);
    lineUpArray.push(copyIndexNumber);
    console.log(lineUpArray);
}

function copyChordBFlatm(){
    const copy = bFlatM.cloneNode(true);

    copy.style.background = 'red';
    lineUp.appendChild(copy);

    //adds to array
    const copyIndexNumber = chordArray.indexOf(bFlatM);
    lineUpArray.push(copyIndexNumber);
    console.log(lineUpArray);
}

function copyChordBm(){
    const copy = bM.cloneNode(true);

    copy.style.background = 'red';
    lineUp.appendChild(copy);

    //adds to array
    const copyIndexNumber = chordArray.indexOf(bM);
    lineUpArray.push(copyIndexNumber);
    console.log(lineUpArray);
}

//CONVERTER

// const chordArray = ["C", "Csharp", "D", "Eb", "E", "F", "Fsharp", "G", "Ab", "Bb", "B", "Cm", "Csharpm", "Dm", "Ebm", "Em", "Fm", "Fsharpm", "Gm", "Abm", "Am", "Bbm", "Bm"]



const button = document.getElementById('button');
const capoNumber = document.getElementById('capo-number');
const chordOutput = document.getElementById('chord-output');

function convert(){
    const capo = capoNumber.value;
    button.style.backgroundColor = '#E0E8BC';

    //splitting into multiple arrays

    const lineUpArray1 = lineUpArray.splice(0,1);
    const lineUpArray2 = lineUpArray.splice(0,1);
    const lineUpArray3 = lineUpArray.splice(0,1);
    const lineUpArray4 = lineUpArray.splice(0,1);
    const lineUpArray5 = lineUpArray.splice(0,1);
    const lineUpArray6 = lineUpArray.splice(0,1);
    const lineUpArray7 = lineUpArray.splice(0,1);
    const lineUpArray8 = lineUpArray.splice(0,1);
    const lineUpArray9 = lineUpArray.splice(0,1);
    const lineUpArray10 = lineUpArray.splice(0,1);


    console.log(lineUpArray1, lineUpArray2, lineUpArray3, lineUpArray4, lineUpArray5, lineUpArray6, lineUpArray7, lineUpArray8, lineUpArray9, lineUpArray10);

    //display new number

    // newChordArray = [];

    // const newChord1 = newChordArray[0];

    // newChord1 = parseInt(lineUpArray1[0]) + parseInt(capo); 
    const newChordArray1 = parseInt(lineUpArray1[0]) + parseInt(capo);
    const newChordArray2 = parseInt(lineUpArray2[0]) + parseInt(capo);
    const newChordArray3 = parseInt(lineUpArray3[0]) + parseInt(capo);
    const newChordArray4 = parseInt(lineUpArray4[0]) + parseInt(capo);
    const newChordArray5 = parseInt(lineUpArray5[0]) + parseInt(capo);
    const newChordArray6 = parseInt(lineUpArray6[0]) + parseInt(capo);
    const newChordArray7 = parseInt(lineUpArray7[0]) + parseInt(capo);
    const newChordArray8 = parseInt(lineUpArray8[0]) + parseInt(capo);
    const newChordArray9 = parseInt(lineUpArray9[0]) + parseInt(capo);
    const newChordArray10 = parseInt(lineUpArray10[0]) + parseInt(capo);

    const outputArray = [newChordArray1, newChordArray2, newChordArray3, newChordArray4, newChordArray5, newChordArray6, newChordArray7, newChordArray8, newChordArray9, newChordArray10];

    const trueOutputArray = [];


    // chordOutput.innerHTML = trueOutputArray;
    chordOutput.innerHTML = outputArray;

    // chordOutput.innerHTML = lineUpArray;
}



