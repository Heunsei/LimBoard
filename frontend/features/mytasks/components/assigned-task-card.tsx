import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import StateToggleButton from "./state-toggle-button";

const tesw = [1, 2, 3, 4, 5, 7, 8, 9, 10];

/**
 * @Todo
 * table에 페이지네이션 구현
 */
export default function AssignedTaskCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <div>
          <p className="inline">showing : </p>
          <p className="inline">todo(), </p>
          <p className="inline">in process(2), </p>
          <p className="inline">done()</p>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-black">task name</TableHead>
              <TableHead className="font-semibold">State</TableHead>
              <TableHead className="font-semibold">Start Date</TableHead>
              <TableHead className="font-semibold">End Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tesw.map((e) => {
              return (
                <TableRow key={e}>
                  <TableCell>test1234</TableCell>
                  <TableCell>
                    <StateToggleButton buttonText="Done" />
                  </TableCell>
                  <TableCell>12/24</TableCell>
                  <TableCell>01/25</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
