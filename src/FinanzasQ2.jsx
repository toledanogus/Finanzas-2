import { useState, useEffect, useContext } from 'react';
import { GastosContexto } from './context/GastosContext';

export const FinanzasQ2 = () => {

    const { comida, yan, gus, ahorro, despensa, psic, garrafones, gas, internet, luz, agua, basura, otro, total, gastos, setComida, setYan, setGus, setAhorro, setDespensa, setPsic, setGas, setInternet, setLuz, setAgua, setBasura, setOtro, setTotal, setGastos, gastos2, setGastos2, total2, setTotal2, gastosN, setGastosN} = useContext(GastosContexto);

    // useEffect(() => {
    //     Object.keys(gastosN).map(key =>{
    //         setGastosN({...gastosN, [key]: (gastos2[key] - gastos[key])})
    //     })        
    // },[gastos])

    useEffect(() => {
        setGastosN(prevState => {
            const newState = {};
            Object.keys(gastosN).forEach(key => {
                newState[key] = gastos2[key] - gastos[key];
            });
            return { ...prevState, ...newState };
        });
    }, [gastos]);

    
    useEffect(() => {
        const gastoTotal = Object.values(gastosN);
        setTotal2(gastoTotal.reduce((acc, val) => acc + val, 0));
    })

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Concepto</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(gastosN).map((key, i) => (
                            <tr key={i}>
                                <td>{key}</td>
                                <td className='cantidad' id="resultado">{gastosN[key]}</td>
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total:</td>
                        <td className='total' id="resultado">$ {total2}</td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}