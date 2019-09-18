'use strict';
const Bigtable = require('@google-cloud/bigtable');
const bigtable = Bigtable();
const instId = 'bigtable-instance';
const instance = bigtable.instance(instanceId);
const table = instance.table('emp_Details');
const COLUMN_FAMILY_ID = 'employee';
const COLUMN_QUALIFIER = 'Id';
exports.bigtable = async (req, res) => {
  try {
    const instanceId = 'bigtable-instance';
    const instance = bigtable.instance(instanceId);
    const table = instance.table('emp_Details');
    const timestamp = new Date();
    const insertRows = table.map((id, index) => ({
      key: 'table${index}',
      data: {
         employee: {
             ['Id']: {
             value: emp_Details[index].Id,
             timestamp: new Date(),
    },
             ['Name']: {
             value: emp_Details[index].Name,
             timestamp: new Date(),
          },
        },
      },
    };
    await table.insert(insertRows);
    console.log(`Successfully wrote row ${insertRows.key} Rows successfully inserted`);
  }
catch (e) {
    console.log(e);
  }
}
try {
    const instanceId = 'bigtable-instance';
    const instance = bigtable.instance(instanceId);
    const table = instance.table('emp_Details');
    const timestamp = new Date();
    const filter = [{
      family: COLUMN_FAMILY_ID,
    }, {
      column: COLUMN_QUALIFIER
    }];
    const getRow = row => {
       return row.data[COLUMN_FAMILY_ID][0].value;
      };
    console.log('Reading a single row ');
    const [singleRow] = await table.row('id[0]').get({filter});
    const rowdata = JSON.stringify(singleRow.data,null,4);
    console.log(`\tRead: ${getRow(singleRow)}`);
  } catch (e) {
    console.log('Table cannot be read: ');
  }
try {
    const instanceId = 'bigtable-instance';
    const instance = bigtable.instance(instanceId);
    const table = instance.table('emp_Details');
    const timestamp = new Date();
    console.log('Delete the entire table');
    await table.delete();
  } catch (e) {
    console.log('Table cannot be deleted: ');
  }

    
    
    

