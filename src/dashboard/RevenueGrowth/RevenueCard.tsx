import { Card, CardContent, Typography, Box } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface RevenueCardProps {
  title: string;
  current: number;
  previous: number;
  growth: string;
}

const RevenueCard: React.FC<RevenueCardProps> = ({
  title,
  current,
  previous,
  growth,
}) => {
  const isGrowthPositive = parseFloat(growth) > 0;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent className="space-y-5">
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" color="text.secondary">
            Previous Month: ${previous}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Current Month: ${current}
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