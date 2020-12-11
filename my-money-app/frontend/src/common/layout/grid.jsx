import React, { Component } from 'react'

// componente baseado em classe
class Dashboard extends Component {

    toCssClasses(numbers) {
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''

        if (cols[0]) classes += ` col-xs-${cols[0]}`
        if (cols[1]) classes += ` col-sm-${cols[1]}`
        if (cols[2]) classes += ` col-md-${cols[2]}`
        if (cols[3]) classes += ` col-lg-${cols[3]}`

        return classes
    }

    render() {
        const gridClasses = this.toCssClasses(this.props.cols || 12)

        return (
            <div className={gridClasses}>
                {/* quando usar o component Grid <Grid> </Grid> tudo que estiver dentro das tags serão mostrados dentro do children */}
                { this.props.children }
            </div>

        )
    }
}

export default Dashboard