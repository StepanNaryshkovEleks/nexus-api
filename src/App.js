import { Table, Descriptions } from 'antd';
import 'antd/dist/antd.css';
import columns from './columns';

const data = [
  {
    key: '0',
    endpoint: '/sign-in',
    description: 'Allows users log in into the application',
    method: 'POST',
    status: 'READY',
    deadline: '-',
    request: {
      username: 'string',
      password: 'string',
      grant_type: 'password'
    },
    response: {
      access_token: "string",
      expires_in: 'number',
      token_type: "bearer",
    },
  },
  {
    key: '1',
    endpoint: '/forgot-password',
    description: 'Allows users to receive a link for restoring password',
    method: 'POST',
    deadline: '-',
    status: 'READY',
    request: {
      email: 'string',
    },
    response: {
      response: 'As a response, a user receives a link on the mail'
    },
  },
  {
    key: '2',
    endpoint: '/restore-password',
    description: 'Allows users to create new password.',
    method: 'POST',
    deadline: '-',
    status: 'READY',
    request: {
      email: 'string',
      tempPassword: 'string',
      newPassword: 'string',
    },
    response: {
      response: '-'
    },
  },
  {
    key: '3',
    endpoint: '/profile',
    description: 'Allows users to create new password.',
    method: 'GET',
    deadline: '-',
    status: 'READY',
    request: {
      request: 'include a Header “Authorization” with value Bearer [token] ',
    },
    response: {
      FirstName: 'string',
      LastName: 'string',
      CompanyName: 'string',
      CompanyAddress1: 'string',
      CompanyAddress2: 'string',
      CompanyCity: 'string',
      CompanyState: 'string',
      CompanyZip: 'string',
      CompanyCountry: 'string',
      BillingContact: 'BillingContact',
      CompanyUsers: 'CompanyUser[]',
      Permissions: 'Permission[]',
      DefaultShopId: 'number',
      Culture: 'string',
      UserId: 'number',
      ShowNewShowInstructions: 'boolean'
    },
  },
  {
    key: '4',
    endpoint: '/admincontact',
    description: 'Allows users to receive admin contact before log in',
    method: 'GET',
    deadline: '-',
    status: 'READY',
    request: {
      request: '-',
    },
    response: {
      Type: 'string',
      Name: 'string',
      Phone: 'string',
      Email: 'string',
    },
  },
  {
    key: '5',
    endpoint: '/showcontacts',
    description: 'Allows users to receive admin contact after log in',
    method: 'GET',
    deadline: '-',
    status: 'READY',
    request: {
      request: 'include a Header “Authorization” with value Bearer [token]. Response will be an array of  ',
    },
    response: {
      Type: 'string',
      Name: 'string',
      Phone: 'string',
      Email: 'string',
    },
  },
  {
    key: '6',
    endpoint: '/shops',
    description: 'Allows users to receive all shops',
    method: 'GET',
    deadline: '-',
    status: 'READY',
    request: {
      request: 'include a Header “Authorization” with value Bearer [token]. Response will be an array of ',
    },
    response: {
      Id: 'string',
      CurrencyCode: 'string',
      CurrencySymbol: 'string',
      Name: 'string'
    },
  },
  {
    key: '7',
    endpoint: '/orderlines/{orderId}',
    description: 'Allows users to receive data for rental and consumables tables',
    method: 'GET',
    deadline: '-',
    status: 'READY',
    request: {
      request: 'include a Header “Authorization” with value Bearer [token] ',
      searchTerm: 'string as query string',
      category: 'string as query string',
      lineType: 'string (rentals or consumables) as query string, default is rentals',
      countPerPage: 'number as query string, default is 15',
      currentPage: 'number as query string, default is 1',
      includeAvailability: 'boolean as query string',
    },
    response: {
      lines: 'Array<Rental>',
      orderTotal: 'number',
      totalPages: 'number',
      transportTotal: 'number',
    },
  },
  {
    key: '8',
    endpoint: '/orders',
    description: 'Allows users to create a order',
    method: 'POST',
    deadline: '-',
    status: 'READY',
    request: {
      request: 'include a Header “Authorization” with value Bearer [token] ',
      orderName: 'string',
      shopId: 'string',
      purchaseOrderNumber: 'string',
      'prepDate?': 'string',
      shipDate: 'string',
      returnDate: 'string',
      'shipTime?': 'string',
      'returnTime?': 'string',
      deliveryByCl: 'boolean',
      returnByCl: 'boolean',
      'redirectTo?': 'string',
      timezone: 'string',
      showId: 'number',
    },
    response: {
      id: 'number',
    },
  },
  {
    key: '9',
    endpoint: '/shows',
    description: 'Allows users to create a show',
    method: 'POST',
    deadline: '-',
    status: 'READY',
    request: {
      request: 'include a Header “Authorization” with value Bearer [token] ',
      timezone: 'string',
      showName: 'string',
      purchaseOrderNumber: 'string',
      projectManagerId: 'string',
    },
    response: {
      id: 'number',
    },
  },
  {
    key: '10',
    endpoint: '/shows/{showId}',
    description: 'Allows users to receive a show',
    method: 'GET',
    deadline: '-',
    status: 'READY',
    request: {
      request: 'include a Header “Authorization” with value Bearer [token] ',
    },
    response: {
      PurchaseOrderNumber: 'string',
      ShowFileName: 'string',
      ShowFileNumber: 'string',
      TheirPm: 'string',
    },
  },
  {
    key: '11',
    endpoint: '/availability/{orderId}/{rentalItemId',
    description: 'Allows users to receive an availability information in rental table',
    method: 'GET',
    deadline: '2021-11-22',
    status: 'WAITING',
    request: {
      request: 'include a Header “Authorization” with value Bearer [token]',
    },
    response: {
      array: {
        id: 'number',
        quantity: 'number',
        showName: 'number',
        isHomeShop: 'number',
        available: 'number',
        price: 'number',
      }
    },
  },
  {
    key: '12',
    endpoint: 'availability/{orderId}/{rentalItemId}/{shopId}/{quantity}',
    description: 'Allows users to change quantity of orderLine in rental table',
    method: 'POST',
    deadline: '2021-11-22',
    status: 'WAITING',
    request: {
      request: 'include a Header “Authorization” with value Bearer [token]',
    },
    response: {
      quantity: 'number',
      total: 'number',
      transportation: 'number',
    },
  },
  {
    key: '13',
    endpoint: '/accessories/{orderId}/{rentalItemId}',
    description: 'Allows users to get accessories for rental table',
    method: 'GET',
    deadline: '2021-11-22',
    status: 'WAITING',
    request: {
      request: 'include a Header “Authorization” with value Bearer [token]',
    },
    response: {
      array: {
        id: 'number',
        quantity: 'number',
        name: 'string',
        available: 'number',
        unitPrice: 'string',
        extPrice: 'string',
      }
    },
  },
  {
    key: '14',
    endpoint: '/accessories/details/{orderId}/{rentalItemId}/{shopId}',
    description: 'Allows users to get details about accessories for rental table',
    method: 'GET',
    deadline: '2021-11-22',
    status: 'WAITING',
    request: {
      request: 'include a Header “Authorization” with value Bearer [token]',
    },
    response: {
      title: 'string',
      details: 'string[]',
      images: 'string[], // [urlPath, urlPath]',
      moreInformation: 'string - url',
    },
  },
];


const today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

export default function App() {
  return <>
    <Descriptions.Item label="Creation Time">Last update: {date}</Descriptions.Item>
    <Table columns={columns} dataSource={data} />
  </>;
}
