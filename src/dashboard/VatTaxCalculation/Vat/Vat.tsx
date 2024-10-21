// import VatFilter from "./VatFilter";
import VatTable from "./VatTable";

 

const Vat = () => {
    const years = [2020, 2021, 2022, 2023, 2024];
    return (
        <div>
            {/* <VatFilter years={years} /> */}
           <VatTable />
        </div>
    );
};

export default Vat;