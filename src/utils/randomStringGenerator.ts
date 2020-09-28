// based on CaffGeek answer: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
export function randomString(len: number, charSet?: string): string {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString: string = '';
    for (var i: number = 0; i < len; i++)
        randomString += charSet.charAt(Math.floor(Math.random() * charSet.length));
    return randomString;
}