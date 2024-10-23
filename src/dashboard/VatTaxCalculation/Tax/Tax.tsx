import { Helmet } from "react-helmet";
import TaxPending from "./TaxPending";
import TaxTable from "./TaxTable";

const Tax = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TAX - RevBoost Solutions</title>
      </Helmet>
      <TaxTable />
      <TaxPending />
    </div>
  );
};

export default Tax;
