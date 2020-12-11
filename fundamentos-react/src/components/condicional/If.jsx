export default props => {

    // retorna somente o Else
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    // pega todos os filhos sem o Else
    const ifChildren = props.children.filter(child => {
        return child !== elseChild
    })

    if (props.test) {
        return ifChildren
    } else if (elseChild) {
        return elseChild
    } else {
        return false
    }
}

export const Else = props => props.children
