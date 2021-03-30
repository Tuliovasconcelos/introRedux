import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from './Card'

class Soma extends Component {
    render() {
        const { min, max } = this.props
        return (
            <Card title="Soma dos Números" blue>
                <div>
                    <span>
                        <span>Resultado:</span>
                        <strong>{min + max}</strong>
                    </span>
                </div>
            </Card >
        )
    }
}


//função para pegar os valores do estado para o component
function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}
export default connect(mapStateToProps)(Soma)