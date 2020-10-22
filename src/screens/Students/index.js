import React from "react";
import ScreenHeader from "../../components/ScreenHeader";
import SearchInput from "../../components/SearchInput";
import DataTab from "../../components/DataTab";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    sorter: {
      compare: (a, b) => a.age - b.age,
    },
    width: 80,
  },
  {
    title: "Email",
    dataIndex: "email",
    sorter: {
      compare: (a, b) => a.email - b.email,
    },
  },
  {
    title: "Inscreption Date",
    dataIndex: "inscreption_date",
    sorter: {
      compare: (a, b) => a.inscreption_date - b.inscreption_date,
    },
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 24,
    email: "user@gmail.com",
    inscreption_date: 70,
  },
  {
    key: "2",
    name: "Jim Green",
    age: 25,
    email: "user@gmail.com",
    inscreption_date: 89,
  },
  {
    key: "3",
    name: "Joe Black",
    age: 18,
    email: "user@gmail.com",
    inscreption_date: 70,
  },
  {
    key: "4",
    name: "Jim Red",
    age: 38,
    email: "user@gmail.com",
    inscreption_date: 89,
  },
  {
    key: "4",
    name: "Jim Red",
    age: 38,
    email: "user@gmail.com",
    inscreption_date: 89,
  },
  {
    key: "4",
    name: "Jim Red",
    age: 38,
    email: "user@gmail.com",
    inscreption_date: 89,
  },
  {
    key: "4",
    name: "Jim Red",
    age: 38,
    email: "user@gmail.com",
    inscreption_date: 89,
  },
  {
    key: "4",
    name: "Jim Red",
    age: 38,
    email: "user@gmail.com",
    inscreption_date: 89,
  },
  {
    key: "4",
    name: "Jim Red",
    age: 38,
    email: "user@gmail.com",
    inscreption_date: 89,
  },
  {
    key: "4",
    name: "Jim Red",
    age: 38,
    email: "user@gmail.com",
    inscreption_date: 89,
  },
];

const Students = () => {
  return (
    <div className="center">
      <ScreenHeader title="Students" />
      <SearchInput placeholder="search" />
      <DataTab columns={columns} data={data} />
    </div>
  );
};

export default Students;
