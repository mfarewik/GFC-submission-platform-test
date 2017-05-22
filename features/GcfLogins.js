import { Selector } from 'testcafe';


fixture `init test Global Challenge Foundation Submission`
    .page (`https://gcf-beta.koslun.com/en/submission-platform/sign-in`)
    .beforeEach(async t => {
        await t
        .expect(LOGIN_BUTTON.visible).ok()
        .expect(LOGIN_CONTAINER.find(' input[type="email"]').exists).ok()
        .typeText(LOGIN_CONTAINER.find('input[type="email"]'), email)
        .expect(LOGIN_CONTAINER.find(' input[type="password"]').exists).ok()
        .typeText(LOGIN_CONTAINER.find(' input[type="password"]'), password)
    })

const email = "m8r-qkyx87@mailinator.com";
const password = "Testtest1";
const LOGIN_CONTAINER = Selector('.app-col-right');
const LOGIN_BUTTON = Selector('.gcf-btn-blue').nth(1);
const LOGOUT_BUTTON = Selector('.ion-android-exit');


test('GCF LOGIN test', async t => {
  // LOGIN  navigation
  await t
    .expect(Selector('body').exists).ok()

    .wait(3000)
    .click(LOGIN_BUTTON)
  });

test('GCF LOGOUT test', async t => {
    //LOGOUT navigation
    await t
    .click(LOGIN_BUTTON)
    .click(LOGOUT_BUTTON)

});
