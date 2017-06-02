import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

const email = "m8r-qkyx87@mailinator.com";
const password = "Testtest1";
const LOGIN_CONTAINER = Selector('.app-col-right');
const LOGIN_BUTTON = Selector('.gcf-btn-blue').nth(1);
const LOGOUT_BUTTON = Selector('a.i.ion-android-exit');


fixture `init test Global Challenge Foundation Submission`
    .page (`https://gcf-beta.koslun.com/en/submission-platform/sign-in`)
    .beforeEach(async t => {
        await t
    .expect(LOGIN_BUTTON.visible).ok()
    .expect(LOGIN_CONTAINER.find(' input[type="email"]').exists).ok()
    .typeText(LOGIN_CONTAINER.find('input[type="email"]'), email)
    .expect(LOGIN_CONTAINER.find(' input[type="password"]').exists).ok()
    .typeText(LOGIN_CONTAINER.find(' input[type="password"]'), password)
    .wait(1000)

    })

  // Cookie navigation
test('GCF Cookie Notefication Test', async t => {
  //debugger;
  await t

    .expect(Selector('#accept-button').exists).ok()
    .click(Selector('#read-more'))
    .expect(Selector('div.popup-title').exists).ok()
    .click('.gcf-btn-blue')
    .click(Selector('#accept-button'))
  });

  // LOGIN  navigation
test('GCF LOGIN/LOGOUT Test', async t => {
  await t

    .expect(Selector('#accept-button').exists).ok()
    .click(Selector('#accept-button'))
  //  .click(Selector('.gcf-btn-blue'))

    .expect(Selector('body').exists).ok()
    .wait(500)
    .click(LOGIN_BUTTON)
    .wait(500)

  //LOGOUT navigation
    .expect(Selector('div.gcf-title').exists).ok()
    .click(Selector('.ion-android-exit'))
  });
