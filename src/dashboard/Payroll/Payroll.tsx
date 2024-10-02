import PayrollBarChart from "./PayrollBarChart";
import PayrollForm from "./PayrollForm";
import PayrollReports from "./PayrollReports";

const Payroll = () => {
  return (
    <div>
      <h2 className="mb-10">Payroll Management</h2>
      {/* form section */}
      <PayrollForm />

      {/* display payroll details */}
      <PayrollReports />

      {/* chart */}
      <PayrollBarChart />
    </div>
  );
};

export default Payroll;
