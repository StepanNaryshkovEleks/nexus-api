import {Alert} from "antd";
import React from 'react';

const columns = [
  {
    title: 'Endpoint',
    dataIndex: 'endpoint',
    key: 'endpoint',
  },
  {
    title: 'Deadline',
    dataIndex: 'deadline',
    key: 'deadline',
    sorter: (a, b) => a.deadline.localeCompare(b.deadline),
    defaultSortOrder: 'descend',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Method',
    dataIndex: 'method',
    key: 'method',
    sorter: (a, b) => a.method.localeCompare(b.method),
    defaultSortOrder: 'descend',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    sorter: (a, b) => a.status.length - b.status.length,
    defaultSortOrder: 'descend',
    key: 'status',
    render: (text) => <Alert message={text} type={text === 'READY' ? 'success' : 'error'} />
  },
  {
    title: 'Request',
    key: 'request',
    dataIndex: 'request',
    render: (request) => <div>
      {Object.keys(request).map((req, index) =>  <React.Fragment key={index}><code>{req}: {request[req]}</code><br/></React.Fragment>)}
    </div>
  },
  {
    title: 'Response',
    key: 'response',
    dataIndex: 'response',
    render: (request) => <div>
      {Object.keys(request).map((req, index) =>  {
        if (req === 'array') {
          return <React.Fragment key={index}><code>Array of: <br/> {
            Object.keys(request[req])
              .map((item, itemIndex) =>
                <React.Fragment key={`response-${index}_${itemIndex}`}>&nbsp;&nbsp;<code>{item}: {request[req][item]}</code><br/></React.Fragment>
              )}
          </code><br/>
          </React.Fragment>;
        }
        return <React.Fragment key={`response-${index}`}><code>{req}: {request[req]}</code><br/></React.Fragment>;
      })}
    </div>
  },
];

export default columns;
