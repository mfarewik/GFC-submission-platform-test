// Helpers class: write to file

import { Selector, getTime , ClientFunction} from 'testcafe';

export function randMs(){
  const d = new Date();
  var randomMsec = d.getTime();
  return randomMsec;
  }

export function eMailAdress(){
  const d = new Date();
  var randomMsec = d.getTime();
  var emailadress = 'GCF' + randomMsec + '@mailinator.com';
  return emailadress;
}
