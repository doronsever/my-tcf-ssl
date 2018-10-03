
import { Selector } from 'testcafe';


fixture
  .only(`Analyze page`)
  .page(`http://google.co.il`)
  .beforeEach(async t => {

  });

test('shuold select all checkboxes', async t => {
  process.on('unhandledRejection', e => console.log(e.stack));
  //await analyzePage.uITablePO.selectAllRows();


});

