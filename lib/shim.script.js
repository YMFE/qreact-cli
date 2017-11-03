const joinConfigJS = (rname = '') => {
    return `
        var dir3 = path.join(__dirname, '${rname}')
    `
}

module.exports = joinConfigJS
