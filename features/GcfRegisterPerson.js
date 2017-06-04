import { Selector, getTime } from 'testcafe';

fixture `init test Global Challenge Foundation Submission`
    .page (`https://gcf-beta.koslun.com/en/submission-platform/sign-in`)
    .beforeEach(async t => {
        await t
        .expect(REGISTER_BUTTON.visible).ok()
        .expect(Selector('#accept-button').exists).ok()
        .click(Selector('#accept-button'))
    })
function randMs(){
  const d = new Date();
  var randomMsec = d.getTime();
  return randomMsec;
}

const PREFIX = 'GCF' + randMs()
const EMAIL =  PREFIX + "@mailinator.com";
console.log(PREFIX);
const PWD = "Testtest1";
const ORG = "B-doom";
const REGISTER_CONTAINER = Selector('.app-col-left');
const REGISTER_BUTTON = Selector('.gcf-btn-blue').nth(0);
const LOGOUT_BUTTON = Selector('.ion-android-exit');
const FIRSTNAME = "Xenon";
const LASTNAME = "Savie";
const TITLE = "Meh";
const NATIONALITY = "Swedish";
const JOBTITLE = "Swash Buckler"
const GENDER = "Female"
const MAILINATOR = 'https://www.mailinator.com/inbox2.jsp?to=' + PREFIX + '#/#public_maildirdiv';


// this is a test


var selectAge = Selector('#age').filter('#age');
var selectCountryResidence = Selector('#countryResidence').filter('#countryResidence');
var selectEducationLevel = Selector('#educationLevel').filter('#educationLevel');
var selectReferrer = Selector('#referrer').filter('#referrer');
var selectGender = Selector('#gender').filter('#gender');



test('GCF Register Person test', async t => {
  // LOGIN  navigation
  await t

    // This is to create a mail box at https://www.mailinator.com/
    // To be able to verify that the email has gone to the correct user.
    .navigateTo(MAILINATOR)
    .wait(500)
    .expect(Selector('#publicinboxfield').exists).ok()
    .wait(500)

    //Navigate back to GCF
    .navigateTo(`https://gcf-beta.koslun.com/en/submission-platform/sign-in`)
    .expect(Selector('body').exists).ok()
    .wait(500)
    .click(REGISTER_BUTTON)

// Text and dropdown validation
    .expect(Selector('#firstname').exists).ok()
    .typeText(('input[id=firstname]'), FIRSTNAME)

    .expect(Selector('#lastname').exists).ok()
    .typeText(('input[id=lastname]'), LASTNAME)

    .expect(Selector('#organisation').exists).ok()
    .typeText(('input[id=organisation]'), ORG)

    .expect(Selector('#email').exists).ok()
    .typeText(('input[id=email'), EMAIL)

    .expect(Selector('#password').exists).ok()
    .typeText(('input[id=password]'), PWD)

    .expect(Selector('#repeatPassword').exists).ok()
    .typeText(('input[id=repeatPassword]'), PWD)

    .expect(Selector('#title').exists).ok()
    .typeText(('input[id=title]'), TITLE)

    .expect(Selector('#nationality').exists).ok()
    .typeText(('input[id=nationality]'), NATIONALITY)

    .expect(Selector('#age').exists).ok()
    .click(selectAge)
    .click(Selector('option:nth-child(6)'))

    .expect(Selector('#gender').exists).ok()
    .click(selectGender)
    .click(Selector('option').filter('[value="female"]'))

    .expect(Selector('#countryResidence').exists).ok()
    .click(selectCountryResidence)
    .click(Selector('option').filter('[value="SE"]'))

    .expect(Selector('#educationLevel').exists).ok()
    .click(selectEducationLevel)
    .click(Selector('option').filter('[value="Doctoral degree"]'))

    .expect(Selector('#jobTitle').exists).ok()
    .typeText(('input[id=jobTitle]'), JOBTITLE)

//  Check Boxes validation
    .expect(Selector('#referrer').exists).ok()
    .click(selectReferrer)
    .click(Selector('option').filter('[value="blog"]'))

    .expect(Selector('#newsletter').exists).ok()
    .click('#newsletter')
    .expect('#newsletter.checked').ok()

    .expect(Selector('#terms').exists).ok()
    .click('#terms')
    .expect('#terms.checked').ok()

    .expect(Selector('#contact').exists).ok()
    .click('#contact')
    .expect('#contact.checked').ok()

    .expect(Selector('#statistics').exists).ok()
    .click('#statistics')
    .expect('#statistics.checked').ok()

    .expect(Selector('#late-registration').exists).ok()
    .click('#late-registration')
    .expect('#late-registration.checked').ok()

//  Save Btn validation
    .click('#register-btn')

    .wait(500)

    .expect(Selector('.gcf-btn-blue').exists).ok()
    .expect(Selector('.popup-text').withText('Please go to your e-mail inbox to confirm your e-mail').exists).ok()
    .click('.gcf-btn-blue')

    .wait(500)
  });
