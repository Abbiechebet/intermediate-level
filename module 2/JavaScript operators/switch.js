//Switch Cases
// is for solving problems with equality

//SCIENCE SUBJECTS- English, Mathematics, Physics, Chemistry, Biology, Technical
//SOCIAL SCIENCE SUBJECTS - English, Mathematics, Business Studies, Accounting, Commerce, Marketing
//ARTS SUBJECTS- English, Mathematics, Economics, Literature, History

// switch(expression){
//     case value:
//        //output
//        break;

 //     default:
 //        break;
 // }




 let studentGroup = 'Arts';

 switch(studentGroup){
     case 'SCIENCES':
      console.log(' English, Mathematics, Physics, Chemistry, Biology, Technical')
        break;
 
        case 'SOCIAL SCIENCES':
         console.log(' English, Mathematics, Business Studies, Accounting, Commerce, Marketing')
          break;
 
          case 'ARTS':
             console.log('English, Mathematics, Economics, Literature, History, Geography')
          break;
 
     default:
         console.log('English, Mathematics, ')
        break;
 }
 
 //rewrite using if...else conditional statement
 
 // let scienceSubjects = 'Physics, Chemistry, Biology, Technical';
 // let socialScienceSubjects = 'Business Studies, Accounting, Commerce, Marketing';
 // let artSubjects = 'Economics, Literature, History';
 // let generalSubjects = 'English, Mathematics';
 
  let subjectGroups = 'socialScienceSubjects';
 
 if (subjectGroups == 'scienceSubjects') {
   console.log('Physics, Chemistry, Biology, Technical');
 }
 
 else if(subjectGroups == 'socialScienceSubjects') {
   console.log('Business Studies, Accounting, Commerce, Marketing');
 }
 
  else if(subjectGroups == 'artSubjects') {
    console.log('Economics, Literature, History');
  }
 
 // else if(subjectGroups = 'generalSubjects') {
  else{
   console.log('English, Mathematics');
  }
 
 