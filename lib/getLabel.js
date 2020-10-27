export function getLabel(label, value) {
    for (var i = 0; i < label.length; i++) {
        if (label[i].name === value) {
            return (label[i])
        }
    }
    return (null)
}