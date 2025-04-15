import React from 'react';
import './Content.css';

function Content(){
    return(
        <>
        <section>
            <h2>O que é um processador quântico?</h2>
        <br />
        <br />
        <p>Um processador quântico é o "cérebro" de um computador quântico, assim como o 
            processador tradicional (CPU) é o cérebro de um computador clássico. 
            A grande diferença está na forma como eles processam as informações. </p>
<br />
<br />
<br />
<h3>Como funciona? :</h3>
<br />
- Processadores clássicos usam bits, que podem ter valor 0 ou 1.
<br />
<br />
-Processadores quânticos 
usam qubits (bits quânticos), que podem estar em 0, 1 ou em uma superposição dos dois ao mesmo tempo.
<br />
<br />
Essa capacidade de estar em múltiplos estados simultaneamente (graças a princípios da mecânica quântica, 
como superposição e emaranhamento) permite que processadores quânticos façam certos tipos de cálculos de 
forma muito mais rápida e eficiente do que os computadores tradicionais
<br />
<br />
<br />
 <h4>Componentes principais de um processador quântico:</h4>
 <br />
<p> -Qubits físicos: podem ser feitos de átomos, íons, elétrons, fótons ou dispositivos supercondutores.
<br />
<br />
-Portas lógicas quânticas: manipulam os qubits para realizar 
cálculos (semelhante ao que portas lógicas fazem em computadores clássicos).
<br />
<br />
-Leitura/medição: ao final do cálculo, o estado dos qubits é medido para obter um resultado 
clássico (0s e 1s).  </p>
        </section>
<h5>Desenvolvido por Raiany</h5>
        </>
    );
};
export default Content;