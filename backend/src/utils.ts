
export function random(len: number) {
    let options = "qweretrtshsdfyhs15846865435";
    let length = options.length;
    let ans = "";
    for (let i=0; i<len; i++) {
        ans += options[Math.floor(Math.random() * length)]
    }
    return ans;
}