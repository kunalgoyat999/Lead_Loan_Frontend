import React, { useState } from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  Input,
  Text,
} from '@chakra-ui/react';

const LeadTable = () => {
  const [leads, setLeads] = useState([
    {
      id: '000124',
      date: '15-10-2023',
      name: 'Aakash',
      mobile: '7303953318',
      status: 'New Lead',
      remark: 'This is a new lead generated from our website.',
      selected: false,
    },
  ]);

  const handleSelectAllChange = (event) => {
    setLeads(
      leads.map((lead) => ({
        ...lead,
        selected: event.target.checked,
      }))
    );
  };

  const handleSelectChange = (id) => {
    setLeads(
      leads.map((lead) => {
        if (lead.id === id) {
          return {
            ...lead,
            selected: !lead.selected,
          };
        }
        return lead;
      })
    );
  };

  const setLeadRemark = (id, value) => {
    setLeads(
      leads.map((lead) => {
        if (lead.id === id) {
          return {
            ...lead,
            remark: value,
          };
        }
        return lead;
      })
    );
  };

  return (
    <Box overflowX="auto"  width="80%" margin="10%">
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>
              <Checkbox isChecked={leads.every((lead) => lead.selected)} onChange={handleSelectAllChange}>
                Select All
              </Checkbox>
            </Th>
            <Th>ID</Th>
            <Th>Date</Th>
            <Th>Name</Th>
            <Th>Mobile</Th>
            <Th>Status</Th>
            <Th>Remark</Th>
          </Tr>
        </Thead>
        <Tbody>
          {leads.map((lead) => (
            <Tr key={lead.id}>
              <Td>
                <Checkbox isChecked={lead.selected} onChange={() => handleSelectChange(lead.id)} />
              </Td>
              <Td>{lead.id}</Td>
              <Td>{lead.date}</Td>
              <Td>{lead.name}</Td>
              <Td>{lead.mobile}</Td>
              <Td>{lead.status}</Td>
              <Td>
                <Input type="text" value={lead.remark} onChange={(e) => setLeadRemark(lead.id, e.target.value)} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default LeadTable;
