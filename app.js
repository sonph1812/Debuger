let checkLicensePalateInHN = (LiscensePalate) => {
    let array = ["29", "30", "31", "33"];
    for (const value of array) {
        if (LiscensePalate.startsWith(value)) {
            return true
        }

    }
    return false
}
let HanoiLicensePalate =[];
 let ListOfLicensePalate = ["29A-1111", "19A-9999","33A-3333","11A-29111"]
for (const value of ListOfLicensePalate) {
    if(checkLicensePalateInHN(value)){
        HanoiLicensePalate.push(value)
    }

}
console.table("các biển số xe của Hà Nội " + HanoiLicensePalate);
