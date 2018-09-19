function isnumber (str){
    regex = /^[0-9]{2}\-0[0-9]{10,11}$/;
    if (regex.test(str)) {
        return true;
    }else {return false;}
}

let validnumbers = [
    "0976496038",
    "0949449921",
    "0949449925",
    "0976496098",
    "0985901013",
    "0985468537",
    "0984469961",
    "0985434100",
    "0984469960"
];

let invalidnumbers = [
    "M046996000",
    "P04469900",
    "I1418p0000",
    "S1318K0000",
];

console.log("TRUE phone number");
for (validname of validnumbers) {
    console.log(validname + ": " + isnumber(validname));
}
console.log("FALSE phone number");
for (invalidname of invalidnumbers) {
    console.log(invalidname + ": " + isnumber(invalidname))
};
