import * as React from 'react';
import EmiCalculatorForm from './EmiCalculatorForm';
import EmiDetailsCard from './EmiDetailsCard';
import EmiDetailsTable from './EmiDetailsTable';

const EmiCalculator = () => {
    const [results, setResults] = React.useState({
        principleAmount: 0,
        monthlyPayment: 0,
        totalPayment: 0,
        totalInterest: 0,
        isResult: false,
    });

    return (<>
            <EmiCalculatorForm setResults={setResults}/>
            <EmiDetailsCard results={results}/>
            <EmiDetailsTable/>
    </>);
}

export default EmiCalculator;