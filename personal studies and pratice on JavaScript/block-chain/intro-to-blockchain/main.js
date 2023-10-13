import SHA256 from 'crypto-js/sha256.js';

class Block{
    constructor(index, timestamp, data, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }

//proof of work (mining)
mineBlock(difficulty){
    while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
        this.nonce++;
        this.hash = this.calculateHash();
    }

    console.log("Block mined: " + this.hash);
}

}

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 4;
    }

createGenesisBlock(){
    return new Block(0, "11/10/203", "Genesis block", "o");
}

getLatestBlock(){
    return this.chain[this.chain.length - 1];
}

addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.mineBlock( this.difficulty);
    this.chain.push(newBlock)
}

isChainValid(){
    for(let i = 1; i < this.chain.length; i++){
        const currentBlock = this.chain[i];
        const previousBlock = this.chain[i-1];

        if(currentBlock.hash !== currentBlock.calculateHash()){
            return false;
        }
    }
    return true;
}

}


let savjeeCoin = new Blockchain();

console.log('mining block 1...');
savjeeCoin.addBlock( new Block(1, "11/10/203", { amount : 4 }));

console.log('mining block 2...');
savjeeCoin.addBlock( new Block(2, "11/10/203", { amount : 10 }));
