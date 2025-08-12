class SimpleTokenizer {
  constructor() {
        this.charToToken = {};
        this.tokenToChar = {};

        // Making tokenIds for all letters(a-z)(A-Z), numbers(0-9), and special characters
        // Using ASCII values
        let tokenId = 1;
        // 0-9
        for (let i = 0; i < 10; i++) {
            const char = i.toString();
            this.charToToken[char] = tokenId;
            this.tokenToChar[tokenId] = char;
            tokenId++;
        }
        // a-z
        for (let i = 0; i < 26; i++) {
            const char = String.fromCharCode(97 + i);
            this.charToToken[char] = tokenId;
            this.tokenToChar[tokenId] = char;
            tokenId++;
        }
        // A-Z
        for (let i = 0; i < 26; i++) {
            const char = String.fromCharCode(65 + i);
            this.charToToken[char] = tokenId;
            this.tokenToChar[tokenId] = char;
            tokenId++;
        }
        // Special Chars
        const specialCharacters = [
            " ", ".", ",", "!", "?", ";", ":", "-", "_", "@", "#", "$", "%", "&", "*", "(", ")", "[", "]", "{", "}", "+", "=", "/", "\\","|","<",">",'"',"'", "`", "~", "^", "€", "£", "¥", "©"
        ];
        for(let i = 0; i < specialCharacters.length; i++) {
            const char = specialCharacters[i];
            this.charToToken[char] = tokenId;
            this.tokenToChar[tokenId] = char;
            tokenId++;
            // console.log(char);
        }
    }

    encode(text) {
        const tokens = [];
        for (const char of text) {
            if (this.charToToken[char]) {
                tokens.push(this.charToToken[char]);
            } else {
                tokens.push(0);
            }
        }
        return tokens.join(" ");
    }

    decode(tokenString) {
        const tokens = tokenString
        .split(" ")
        .map((t) => parseInt(t.trim()))

        let result = "";
        for (const token of tokens) {
            if (this.tokenToChar[token]) {
                result += this.tokenToChar[token];
            } else if (token === 0) {
                result += "?";
            }
        }
        return result;
    }
    getMapping() {
        return this.charToToken;
    }
}

const tokenizer = new SimpleTokenizer();
const mapping = tokenizer.getMapping();
const container = document.getElementById("tokenMap");

for (const [char, token] of Object.entries(mapping)) {
    const card = document.createElement("div");
    card.className = "token-card";
    card.innerHTML = `
        <span class="token-char">'${char}'</span>
        <span class="token-num">Token ID: ${token}</span>
    `;
    container.appendChild(card);
}

function encodeText() {
    const text = document.getElementById("textInput").value;
    const encoded = tokenizer.encode(text);

    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = `
                <div class="encoded-card">
                    <div class="card-header">
                        <h3>Encoded Result</h3>
                        <button class="view-mappings">     
                            <a href="mapping.html">View Token Mappings</a>
                        </button>
                    </div>
                    <div>
                        <div class="result-item">
                            <span class="result-label">Input:</span>
                            <span class="result-value">"${text}"</span>
                        </div>
                        <div class="result-item">
                            <span class="result-label">Encoded:</span>
                            <span class="result-value">${encoded}</span>
                        </div>
                        <div class="result-item">
                            <span class="result-label">Verification:</span>
                            <span class="result-value">"${tokenizer.decode(encoded)}"</span>
                        </div>
                    </div>
                </div>
            `;
}

function decodeText() {
    const numbers = document.getElementById("numberInput").value;
    const decoded = tokenizer.decode(numbers);

    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = `
                <div class="encoded-card">
                    <div class="card-header">
                        <h3>Decoded Result</h3>
                        <button class="view-mappings">     
                            <a href="mapping.html">View Token Mappings</a>
                        </button>
                    </div>
                    <div>
                        <div class="result-item">
                            <span class="result-label">Input:</span>
                            <span class="result-value">"${numbers}"</span>
                        </div>
                        <div class="result-item">
                            <span class="result-label">Encoded:</span>
                            <span class="result-value">${decoded}</span>
                        </div>
                        <div class="result-item">
                            <span class="result-label">Verification:</span>
                            <span class="result-value">"${tokenizer.encode(decoded)}"</span>
                        </div>
                    </div>
                </div>
            `;
}