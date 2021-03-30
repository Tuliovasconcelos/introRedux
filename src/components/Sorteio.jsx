import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from './Card'

class Sorteio extends Component {
    render() {

        const { min, max } = this.props
        const aleatorio = parseInt(Math.random() * (max - min))

        return (
            <Card title="Sorteio de um Número" purple>
                <div>
                    <span>
                        <span>Resultado:</span>
                        <strong>{aleatorio}</strong>
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
        max: state.numeros.max
    }
}
export default connect(mapStateToProps)(Sorteio)