import { Template } from 'meteor/templating';
import { Notes } from '../lib/collections.js';
import './main.html';


Template.body.helpers({
  /*
  notes:[
    {text: 'My note 1'},
    {text: 'My note 2'},
    {text: 'My note 3'},
  ]
  */
notes(){
  return Notes.find({});
}


});

Template.add.events({
  'submit .add-form': function(){
    event.preventDefault();


    // get input value

    const target = event.target;
    const text = target.text.value;


    //insert note into collections
     Notes.insert({
       text:text,
       createdAt: new Date()
     });


      // clear form
      target.text.value = '';
      //close modal
      $('#addModal').modal('close');


     return false;

    }

})
