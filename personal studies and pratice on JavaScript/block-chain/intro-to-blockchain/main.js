import SHA256 from 'crypto-js/sha256.js';

class Block{
    constructor(index, timestamp, data, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }

createGenesisBlock(){
    return new Block(0, "11/10/203", "Genesis block", "o");
}

getLatestBlock(){
    return this.chain[this.chain.length - 1];
}

addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
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
savjeeCoin.addBlock( new Block(1, "11/10/203", { amount : 4 }));
savjeeCoin.addBlock( new Block(2, "11/10/203", { amount : 10 }));
console.log(JSON.stringify(savjeeCoin, null, 4));

console.log("is blockchain valid? :" + savjeeCoin.isChainValid());

savjeeCoin.chain[1].data = { amount : 100 }
savjeeCoin.chain[1].hash = savjeeCoin.chain[1].calculateHash();
console.log("is blockchain valid? :" + savjeeCoin.isChainValid());