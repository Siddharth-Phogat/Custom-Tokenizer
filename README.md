# 🛠 Custom Tokenizer

A simple **JavaScript Tokenizer** that converts characters (letters, numbers, and special symbols) into unique token IDs and can decode them back to text.  
The project comes with a clean UI to **encode text**, **decode tokens**, and **view the token mappings**.

---

## 🚀 Features
- 🔤 **Encodes** characters (a-z, A-Z), numbers (0-9), and a wide range of special characters into token IDs.
- 🔄 **Decodes** token IDs back to their original characters.
- 🗺 **View Mapping** page to see all character–token pairs.
- 🎨 Dark-themed UI with card-based design.
- 📄 Works entirely in the browser — no server needed.

---

## 📂 Project Structure
project-folder/
│
├── index.html # Main page for encoding/decoding
├── mapping.html # Token mapping display page
├── style.css # Styling for all pages
├── index.js # Tokenizer logic and DOM handling
└── README.md # Project documentation

---

## ⚙️ How It Works
1. **Tokenizer Class**
   - Creates two mappings:
     - `charToToken` → maps each character to a unique token ID.
     - `tokenToChar` → maps each token ID back to the character.
   - Supports:
     - Digits: `0-9`
     - Lowercase: `a-z`
     - Uppercase: `A-Z`
     - Special characters: spaces, punctuation, symbols, and currency signs.
   - Assigns token IDs starting from **1**, with `0` reserved for unknown characters.

2. **Encoding**
   - Takes input text from the user.
   - Converts each character into its corresponding token ID.
   - Joins them into a **space-separated string**.

3. **Decoding**
   - Takes space-separated token IDs.
   - Converts them back to characters.
   - Unknown tokens (`0`) are replaced with `?`.
## 🖥 Usage
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/custom-tokenizer.git
   cd custom-tokenizer
2. **Open the Application**
   - Simply open index.html in your browser.
   - No additional setup required.

3. **Encode Text**
   - Type any text in the Encode textarea.
   - Click Encode to see:
     - Input text
     - Encoded token IDs
     - Verification (decoded back to text)

4. **Decode Tokens**
   - Type space-separated token IDs in the Decode textarea.
   - Click Decode to see:
     - Input token IDs
     - Decoded text
     - Verification (encoded back to token IDs)

5. **View Token Mappings**
   - Click View Token Mappings to see all character–token pairs.

---

## 🎨 UI Preview
### Main Page:
  - Two sections: Encode & Decode
  - Dark theme with card-based results
  - Button to view token mappings

### Token Mappings Page:
  - Grid layout showing each character and its token ID

---

## 📜 License
This project is open-source and available under the MIT License.
📜 License
This project is open-source and available under the MIT License.
