import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "Sun",
    Present: 400,
    Absent: 2400,
    WeekOff: 3400,
    Inactive: 121,
  },
  {
    name: "Mon",
    Present: 3000,
    Absent: 1398,
    WeekOff: 210,
    Inactive: 111,
  },
  {
    name: "Tue",
    Present: 2000,
    Absent: 9800,
    WeekOff: 290,
    Inactive: 91,
  },
  {
    name: "Wed",
    Present: 2780,
    Absent: 3908,
    WeekOff: 200,
    Inactive: 2500,
  },
  {
    name: "Thu",
    Present: 1890,
    Absent: 4800,
    WeekOff: 2181,
    Inactive: 101,
  },
  {
    name: "Fri",
    Present: 2390,
    Absent: 3800,
    WeekOff: 2500,
    Inactive: 111,
  },
  {
    name: "Sat",
    Present: 3490,
    Absent: 4300,
    WeekOff: 2100,
    Inactive: 97,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Attendance Pattern</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
             type="monotone"
             dataKey="Inactive"
             stackId="1"
             stroke="#FF8042"
             fill="#FF8042"
           />
            <Area
              type="monotone"
              dataKey="WeekOff"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="Absent"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="Present"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
