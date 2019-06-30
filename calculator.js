let tambah = (x, y) => {
    return x + y
}

let bagi = (x, y) => {
    return x / y
}

let kurang = (x, y) => {
    return x - y
}

let kali = (x, y) => {
    return x * y
}

let calculator = (x, sign, y) => {
    let hasil
    if (sign == '+') {
        hasil = tambah(x, y)
    } else if (sign == '/') {
        hasil = bagi(x, y)
    } else if (sign == '-') {
        hasil = kurang(x, y)
    } else if (sign == '*') {
        hasil = kali(x, y)
    }
    return `hasilnya ${hasil}`
}

console.log(calculator(2, '-', 3))