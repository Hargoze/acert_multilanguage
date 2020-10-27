export function getLabel(label, value, language) {
    var index
    switch (language) {
        case "en" :
            index = "english"
            break
        case "fr" :
            index = "french"
            break
        default:
            return (null)
    }
    for (var i = 0; i < label.length; i++) {
        if (label[i].name === value) {
            console.lo
            return (label[i][index])
        }
    }
    return (null)
}