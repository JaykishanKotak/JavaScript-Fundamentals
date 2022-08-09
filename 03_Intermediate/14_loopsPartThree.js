// For Of and For In Loops

const names = ["Facebook", "Apple", "Microsoft", "Google", "Netflix", "Air-Bnb", "Uber"];

for ( n of names )
{
    console.log(n);
}

const symbols = {
    yt : "Youtube",
    fb : "Facebook",
    ig : "Instagram",
    nf : "Netflix"
}

for ( s in symbols )
{
    //console.log(s); // Will return the key.
    //console.log(symbols[s]); // Will return the values.
    console.log(`Key is : ${s} and Values is : ${symbols[s]}`)
}