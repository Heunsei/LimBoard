"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Settings } from "lucide-react";

// TODO : 페이지네이션 구현 필요.
// TODO : 멤버별 정렬 기능 구현 필요.
export default function MemberDashboard() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] font-black">Name</TableHead>
          <TableHead>email</TableHead>
          <TableHead>assessment</TableHead>
          <TableHead className="text-right">actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-black">lim</TableCell>
          <TableCell>test@gmail.com</TableCell>
          <TableCell>ww</TableCell>
          <TableCell className="flex justify-end">
            <button
              className=""
              onClick={() => {
                window.alert("test");
              }}
            >
              <Settings />
            </button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
