import { Card, CardContent, Typography, Box } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface RevenueCardProps {
  title: string;
  current_time: string;
  previous_time: string;
  current: number;
  previous: number;
  growth: string;
}

const RevenueCard: React.FC<RevenueCardProps> = ({
  title,
  current_time,
  previous_time,
  current,
  previous,
  growth,
}) => {
  const isGrowthPositive = parseFloat(growth) > 0;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent className="space-y-5">
        <Typography variant="h4" component="div">
          {title}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            variant="body2"
            color={isGrowthPositive ? "success.main" : "error.main"}
          >
            {previous_time ? previous_time : "Previous Month"}: $ {previous}
          </Typography>
          <Typography
            variant="body2"
            color={isGrowthPositive ? "success.main" : "error.main"}
          >
            {current_time ? current_time : "Current Month"}: $ {current}
          </Typography>
        </Box>
        <Typography
          variant="h6"
          color={isGrowthPositive ? "success.main" : "error.main"}
        >
          {isGrowthPositive ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
          {growth} Growth
        </Typography>
      </CardContent>
    </Card>
  );
};
export default RevenueCard;
