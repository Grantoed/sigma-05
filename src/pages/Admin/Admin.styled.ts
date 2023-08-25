import styled from "styled-components";
import { SectionHeading } from "src/components/global/SectionHeading";
import { Button } from "src/components/global/Button";

export const Heading = styled(SectionHeading)`
  text-align: center;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const TableCell = styled.td`
  padding: 8px 12px;
  text-align: left;
  border: 1px solid ${(p) => p.theme.colors.tableBorder};

  & > ${StyledTable} {
    width: 100%;
    margin-top: 10px;
  }

  & > ${StyledTable} th,
  & > ${StyledTable} td {
    padding: 6px 8px;
    font-size: 0.9em;
    border: 1px solid #d0d0d0;
  }

  & > ${StyledTable} th {
    color: ${(p) => p.theme.colors.mbgc};
    background-color: ${(p) => p.theme.colors.mtc};
  }

  & > ${StyledTable} tbody tr:nth-child(even) {
    background-color: ${(p) => p.theme.colors.mbgc};
  }

  & > ${StyledTable} tbody tr:nth-child(odd) {
    background-color: ${(p) => p.theme.colors.abgc};
  }
`;

export const TableHeader = styled.th`
  padding: 8px 12px;
  font-weight: bold;
  text-align: left;
  color: ${(p) => p.theme.colors.mbgc};
  background-color: ${(p) => p.theme.colors.mtc};
  border: 1px solid ${(p) => p.theme.colors.tableBorder};
`;

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: ${(p) => p.theme.colors.abgc};
  }
`;

export const TableButton = styled(Button)`
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
`;
