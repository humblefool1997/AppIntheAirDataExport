"use client";
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import { useState } from 'react';

const columns = [
  { key: 'flight_number', name: 'Flight Number', editable: true },
  { key: 'seat', name: 'Seat', editable: true },
  { key: 'booking_reference', name: 'Booking Reference', editable: true },
  { key: 'e_ticket', name: 'E-Ticket', editable: true },
  { key: 'airline', name: 'Airline', editable: true },
  { key: 'flight_code', name: 'Flight Code', editable: true },
  { key: 'aircraft_type', name: 'Aircraft Type', editable: true },
  { key: 'departure_airport', name: 'Departure Airport', editable: true },
  { key: 'arrival_airport', name: 'Arrival Airport', editable: true },
  { key: 'departure_timestamp_local', name: 'Departure (Local)', editable: true },
  { key: 'arrival_timestamp_local', name: 'Arrival (Local)', editable: true },
];

const initialRows = [
  {
    id: 1,
    flight_number: 'AA101',
    seat: '12A',
    booking_reference: 'BR12345',
    e_ticket: 'ET123456789',
    airline: 'American Airlines',
    flight_code: 'AA101',
    aircraft_type: 'Boeing 737',
    departure_airport: 'JFK',
    arrival_airport: 'LAX',
    departure_timestamp_local: '2024-12-20T08:00:00',
    arrival_timestamp_local: '2024-12-20T11:00:00',
  },
  {
    id: 2,
    flight_number: 'DL202',
    seat: '15B',
    booking_reference: 'BR67890',
    e_ticket: 'ET987654321',
    airline: 'Delta Airlines',
    flight_code: 'DL202',
    aircraft_type: 'Airbus A320',
    departure_airport: 'ATL',
    arrival_airport: 'ORD',
    departure_timestamp_local: '2024-12-21T14:00:00',
    arrival_timestamp_local: '2024-12-21T16:30:00',
  },
];

export default function FlightList() {
  const [rows, setRows] = useState(initialRows);

  const rowKeyGetter = (row) => row.id;

  const onRowsChange = (updatedRows, { indexes }) => {
    const newRows = [...rows];
    indexes.forEach((index) => {
      newRows[index] = updatedRows[index];
    });
    setRows(newRows);
  };

  const addRow = () => {
    const newRow = {
      id: rows.length + 1, // Ensure a unique ID
      flight_number: '',
      seat: '',
      booking_reference: '',
      e_ticket: '',
      airline: '',
      flight_code: '',
      aircraft_type: '',
      departure_airport: '',
      arrival_airport: '',
      departure_timestamp_local: '',
      arrival_timestamp_local: '',
    };
    setRows([...rows, newRow]);
  };

  const exportData = () => {
    const flightsSection = rows
      .map(row =>
        `${row.flight_number || 'None'};${row.seat || 'None'};${row.booking_reference || 'None'};${row.e_ticket || 'None'};${row.airline || 'None'};${row.flight_code || 'None'};${row.aircraft_type || 'None'};${row.departure_airport || 'None'};${row.arrival_airport || 'None'};${row.departure_timestamp_local || 'None'};${row.arrival_timestamp_local || 'None'}`
      )
      .join('\n');
    const dataContent = `flights:\n${flightsSection}\n`;

    const blob = new Blob([dataContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'data.txt';
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <DataGrid
        columns={columns}
        rows={rows}
        rowKeyGetter={rowKeyGetter}
        onRowsChange={onRowsChange}
      />
      <button
        onClick={exportData}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        style={{ marginTop: '10px' }}
      >
        Export data.txt
      </button>
    </div>
  );
}
