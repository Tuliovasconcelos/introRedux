import './Intervalo.css'
import React, { Component } from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import { alterarNumeroMinimo , alterarNumeroMaximo } from '../store/actions/numeros'

class Intervalo extends Component {
    render() {
        const { min, max } = this.props

        return (
            <Card title="Intervalo de Números" red>
                <div className="Intervalo">
                    <span>
                        <strong>
                            Mínimo:
                    </strong>
                        <input type="number" value={min} onChange={e => this.props.alterarMinimo(+e.target.value)} />
                    </span>
                    <span>
                        <strong>
                            Máximo:
                    </strong>
                        <input type="number" value={max} onChange={e => this.props.alterarMaximo(+e.target.value)} />
                    </span>
                </div>
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

function mapDispatchToProp(dispatch) {
    return {
        alterarMinimo(novoNumeroMin) {
            //action creator -> action
            dispatch(alterarNumeroMinimo(novoNumeroMin))
        },
        alterarMaximo(novoNumeroMax) {
            //action creator -> action
            dispatch(alterarNumeroMaximo(novoNumeroMax))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Intervalo)