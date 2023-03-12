
import { useState, useEffect, useContext } from "react";
import { GastosContexto } from "./context/GastosContext";
import { FinanzasQ2 } from "./FinanzasQ2";



export const FinanzasQ1 = () => {

    const { comida, yan, gus, ahorro, despensa, psic, garrafones, gas, internet, luz, agua, basura, otro, total, gastos, setComida, setYan, setGus, setAhorro, setDespensa, setPsic, setGas, setInternet, setLuz, setAgua, setBasura, setOtro, setTotal, setGastos, gastos2, setGastos2, total2, setTotal2, gastosN, setGastosN, nota, setNota, mes, setMes } = useContext(GastosContexto);

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    const guardarValor = (concept) => {
        const getNumber = document.getElementById(concept);
        const getNota = document.getElementById(concept + 'a');
        const gastoTotal = Object.values(gastosN);

        setGastos({ ...gastos, [concept]: Number(getNumber.value) });
        setGastosN({ ...gastosN, [concept]: (gastos2[concept] - gastos[concept]) })
        setNota({ ...nota, [concept]: (getNota.value) });
        setTotal2(gastoTotal.reduce((acc, val) => acc + val, 0));
    }

    useEffect(() => {
        const gastoTotal = Object.values(gastos);
        setTotal(gastoTotal.reduce((acc, val) => acc + val, 0))
    }, [gastos])

    const seleccionarMes = () => {
        (mes <= 10) ? setMes(mes + 1) : setMes(0);
    }

    return (
        <>
            <h3>{meses[mes]}</h3>
            <button onClick={seleccionarMes}>Seleccionar mes</button>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Concepto</th>
                        <th>Cantidad</th>
                        <th>A pagar</th>
                        <th></th>
                        <th></th>
                        <th>Notas</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(gastos).map((key, i) => (
                            <tr key={i}>
                                <td>{key}</td>
                                <td className='cantidad'>{gastos[key]}</td>
                                <td>
                                    <input type="number" id={key} />
                                </td>
                                <td>
                                    <button onClick={() => guardarValor(key)}>Ingresar</button>
                                </td>
                                <td>
                                    <input type="text" name="" id={key + 'a'} />
                                </td>
                                <td>
                                    {nota[key]}
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total:</td>
                        <td className='total' id="resultado">$ {total}</td>
                    </tr>
                </tfoot>
            </table>
            <br />
            <FinanzasQ2 />

        </>
    )
}