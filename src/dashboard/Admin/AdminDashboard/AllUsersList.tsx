import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Input,
  Tab,
  Tabs,
  TabsHeader,
  Tooltip,
} from "@material-tailwind/react";
import { ButtonDefault } from "../../../components/utils/ButtonDefault";

interface TabType {
  label: string;
  value: string;
}

interface TableRowType {
  img: string;
  name: string;
  email: string;
  job: string;
  org: string;
  online: boolean;
  date: string;
}

const TABS: TabType[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

const TABLE_HEAD: string[] = ["Member", "Function", "Status", "Employed", ""];

const TABLE_ROWS: TableRowType[] = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "Manager",
    org: "Organization",
    online: true,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: false,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    job: "Executive",
    org: "Projects",
    online: false,
    date: "19/09/17",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: true,
    date: "24/12/08",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "Manager",
    org: "Executive",
    online: false,
    date: "04/10/21",
  },
];

const AllUsersList: React.FC = () => {
  return (
    <div>
      <ButtonDefault />
      <Card
        className="h-full w-full"
        shadow={false}
        placeholder="Type something..."
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none"
          placeholder="Placeholder text" // Add placeholder prop here
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <>Members list</>
              <>See information about all members</>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <ButtonDefault />
              <ButtonDefault />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Tabs value="all" className="w-full md:w-max">
              <TabsHeader
                placeholder="Type here..." // Provide a placeholder value
                onPointerEnterCapture={() => {
                  /* handle pointer enter */
                }}
                onPointerLeaveCapture={() => {
                  /* handle pointer leave */
                }}
              >
                {TABS.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    placeholder="Type here..." // Example placeholder value
                    onPointerEnterCapture={() => {
                      /* handle pointer enter */
                    }}
                    onPointerLeaveCapture={() => {
                      /* handle pointer leave */
                    }}
                  >
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                crossOrigin="anonymous"
              />
            </div>
          </div>
        </CardHeader>

        <CardBody
          className="overflow-scroll px-0"
          placeholder="Type something..."
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <>{head}</>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(
                ({ img, name, email, job, org, online, date }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <img src={img} alt="" className="w-14" />
                          <div className="flex flex-col">
                            <>{name}</>
                            <>{email}</>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <>{job}</>
                          <>{org}</>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={online ? "online" : "offline"}
                            color={online ? "green" : "blue-gray"}
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <>{date}</>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Edit User">
                          <ButtonDefault />
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>

        <CardFooter
          className="flex items-center justify-between border-t border-blue-gray-50 p-4"
          placeholder="Footer placeholder" // Example placeholder value
          onPointerEnterCapture={() => {
            /* handle pointer enter */
          }}
          onPointerLeaveCapture={() => {
            /* handle pointer leave */
          }}
        >
          <>Page 1 of 10</>
          <div className="flex gap-2">
            <ButtonDefault />
            <ButtonDefault />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AllUsersList;
