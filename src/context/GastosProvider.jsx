
import { useState } from "react";
import { GastosContexto } from "./GastosContext";

export const GastosProvider = ({ children }) => {

// const [comida, setComida] = useState(4400);
// const [yan, setYan] = useState(2000);
// const [gus, setGus] = useState(2000);
// const [ahorro, setAhorro] = useState(1500);
// const [despensa, setDespensa] = useState(1500);
// const [psic, setPsic] = useState(800);
// const [garrafones, setGarrafones] = useState(440);
// const [gas, setGas] = useState(250);
// const [internet, setInternet] = useState(600);
// const [luz, setLuz] = useState(200);
// const [agua, setAgua] = useState(300);
// const [basura, setBasura] = useState(50);
// const [otro, setOtro] = useState(0);
const [total, setTotal] = useState(0);
const [total2, setTotal2] = useState(0);
const [gastos, setGastos] = useState({ 'Comida': 4400, 'Yan': 2000, 'Gus': 2000, 'Ahorro': 1500, 'Despensa': 1500, 'Psicóloga': 800, 'Garrafones': 440, 'Gas': 250, 'Internet': 600, 'Luz': 200, 'Agua': 300, 'Basura': 50 });

const [gastos2, setGastos2] = useState({ 'Comida': 4400, 'Yan': 2000, 'Gus': 2000, 'Ahorro': 1500, 'Despensa': 1500, 'Psicóloga': 800, 'Garrafones': 440, 'Gas': 250, 'Internet': 600, 'Luz': 200, 'Agua': 300, 'Basura': 50 });

const [gastosN, setGastosN] = useState({ 'Comida': 0, 'Yan': 0, 'Gus': 0, 'Ahorro': 0, 'Despensa': 0, 'Psicóloga': 0, 'Garrafones': 0, 'Gas': 0, 'Internet': 0, 'Luz': 0, 'Agua': 0, 'Basura': 0 });

    return (
        <GastosContexto.Provider value={{total, setTotal, gastos, setGastos, gastos2, setGastos2, total2, setTotal2, gastosN, setGastosN}}>
            {children}
        </GastosContexto.Provider>
    )
}

// comida, yan, gus, ahorro, despensa, psic, garrafones, gas, internet, luz, agua, basura, otro, total, gastos, setComida, setYan, setGus, setAhorro, setDespensa, setPsic, setGarrafones, setGas, setInternet, setLuz, setAgua, setBasura, setOtro, setTotal
