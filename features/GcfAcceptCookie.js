import { Selector, getTime , ClientFunction} from 'testcafe';
import config from './config';
import Page from '../genericFuncitons/page-model';

const REGISTER_BUTTON = Selector('.gcf-btn-blue').nth(0);
const page = new Page();

fixture `init test Global Challenge Foundation Submission`
  .page `${config.baseUrl}/en/submission-platform/sign-in`


    .beforeEach(async t => {
        await t.wait(500)
        .expect(REGISTER_BUTTON.visible).ok()
    })


test('GCF Cookie Notefication Test', async t => {
    await t.wait(5000)

    .expect(Selector('#accept-button').exists).ok()
    .click(Selector('#read-more'))
    .expect(Selector('div.popup-title').exists).ok()
    .click('.gcf-btn-blue')
    .expect(Selector('#accept-button').exists).ok()
    .click(Selector('#accept-button'))

// for (const acceptCookieFeature of page.acceptCookieFeatureList){
//   await t
//     .expect(acceptCookieFeature.acceptCookieId.exists).ok()
//     .click(acceptCookieFeature.readmoreCookieId)
//     .expect(acceptCookieFeature.acceptCookiePopup.exists).ok()
//     .click(acceptCookieFeature.acceptCookieClass)
//     .expect(acceptCookieFeature.acceptCookieId.exists).ok()
//     .click(acceptCookieFeature.acceptCookieId)
//
//     }
  });
