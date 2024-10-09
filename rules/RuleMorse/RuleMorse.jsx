import Rule from "../Rule";

const morse = {
    a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", g: "--.", h: "....", 
    i: "..", j: ".---", k: "-.-", l: ".-..", m: "--", n: "-.", o: "---", p: ".--.", 
    q: "--.-", r: ".-.", s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-", y: "-.--", z: "--.." 
};

export default class RuleMorse extends Rule {
    constructor() {
        super("Your password must contain the Morse code of the first 3 English letters in your password. (Use . and -)");
    }

    check(txt) {
        let letters = txt.match(/[A-Za-z]/g)?.slice(0, 3);
        if (letters?.length === 3) {
            // Concatenate Morse code for the first 3 letters without spaces
            let code = `${morse[letters[0].toLowerCase()]}${morse[letters[1].toLowerCase()]}${morse[letters[2].toLowerCase()]}`;

            // Escape periods in the Morse code to use in a regular expression
            let exp = code.replaceAll(".", "\\.");
            console.log("morse:", exp);
            // alert(`The Morse code of the first 3 English letters in your password is: ${code}`);

            // Create a regular expression that matches the concatenated Morse code anywhere in the password
            let r = new RegExp(exp);
            return r.test(txt);
        }
        return false;
    }
}
