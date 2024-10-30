import {
  Card,
  CardContent,
  Typography,
  Box,
  CardHeader,
  Divider,
} from "@mui/material";
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
    <Card
      sx={{
        borderRadius: 4,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        py: 3,
        "&:hover": {
          boxShadow: "0 6px 24px rgba(0, 0, 0, 0.15)",
          transform: "translateY(-5px)",
          transition: "all 0.3s ease",
        },
      }}
    >
      <CardHeader title={title} />
      <Divider />
      <CardContent className="space-y-5">
        <Box
          display="grid"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 2, mb: 3, minHeight: 80 }}
        >
          <Typography variant="body2">
            {previous_time || "Previous Period"}: ${" "}
            <Box
              component="span"
              color={isGrowthPositive ? "success.main" : "error.main"}
              fontWeight="bold"
              fontSize={18}
            >
              {previous}
            </Box>
          </Typography>

          <Typography variant="body2">
            {current_time || "Current Period"}: ${" "}
            <Box
              component="span"
              color={isGrowthPositive ? "success.main" : "error.main"}
              fontWeight="bold"
              fontSize={18}
            >
              {current}
            </Box>
          </Typography>
        </Box>
        <Divider />
        <Typography
          variant="h6"
          fontWeight="bold"
          color={isGrowthPositive ? "success.main" : "error.main"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
          className="animate-bounce"
        >
          {isGrowthPositive ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
          {growth} Growth
        </Typography>
      </CardContent>
    </Card>
  );
};
export default RevenueCard;
