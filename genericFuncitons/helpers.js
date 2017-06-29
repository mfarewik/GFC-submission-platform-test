// Helpers class: write to file

import { Selector, getTime , ClientFunction} from 'testcafe';

var jsonfile = require('jsonfile')
var file = '../../../data/data.json'

export function randMs(){
  const d = new Date();
  var randomMsec = d.getTime();
  return randomMsec;
  }

export function eMailAdress(prefix){
  const d = new Date();
  var randomMsec = d.getTime();
  var emailadress = prefix + randomMsec + '@mailinator.com';
  return emailadress;
}

export function writeToFile(file, obj){
  jsonfile.writeFile(file, obj, {flag: 'a'}, function (err) {
    console.error(err)
  })
}
