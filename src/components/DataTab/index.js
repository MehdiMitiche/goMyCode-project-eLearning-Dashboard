import React from "react";
import { Table } from "antd";

const DataTab = ({ columns, data }) => {
  return (
    <div className="tab-container">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default DataTab;
