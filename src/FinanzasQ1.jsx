
import { useState, useEffect, useContext } from "react";
import { GastosContexto } from "./context/GastosContext";
import { FinanzasQ2 } from "./FinanzasQ2";

export const FinanzasQ1 = () => {

    const { comida, yan, gus, ahorro, despensa, psic, garrafones, gas, internet, luz, agua, basura, otro, total, gastos, setComida, setYan, setGus, setAhorro, setDespensa, setPsic, setGas, setInternet, setLuz, setAgua, setBasura, setOtro, setTotal, setGastos, gastos2, setGastos2, total2, setTotal2, gastosN, setGastosN } = useContext(GastosContexto);


    const guardarValor = (concept) => {
        const getNumber = document.getElementById(concept);
        setGastos({...gastos, [concept]:Number(getNumber.value)});
        setGastosN({...gastosN, [concept]:(gastos2[concept]-gastos[concept])});     
        const gastoTotal=Object.values(gastosN);
        setTotal2(gastoTotal.reduce((acc, val) => acc +val, 0));
    }

    useEffect(() => {
        const gastoTotal = Object.values(gastos);
        setTotal(gastoTotal.reduce((acc, val) => acc + val, 0))
    }, [gastos])
    
    return (
        <>

            <h1>Quincena 1</h1>
            <table>
                <thead>
                    <tr>
                        <th>Concepto</th>
                        <th>Cantidad</th>
                        <th>A pagar</th>
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
                                    <button onClick={()=>guardarValor(key)}>Ingresar</button>
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total:</td>
                        <td className='total' id="resultado">{total}</td>
                    </tr>
                </tfoot>
            </table>
            <FinanzasQ2 />
        </>
    )
}