/*
 * Open raphael.svg-import-spec.html to run all tests
 */


var createPaper = function() {
  return Raphael('paper', 800, 500);
}

describe('Raphael.fn.importSVG', {
  before_each: function() {
    paper = createPaper();
    set = paper.set();
    paper.importSVG('<svg><rect x="50" id="testId" y="50" fill="#FF00FF" width="100" height="100" /></svg>', set);
  },
  
  'should create one item': function() {
    value_of(paper.elements()).should_have_exactly(1, 'items');
  },
  
  'should create one item and put it in a set': function() {
    value_of(set).should_have_exactly(1, 'items');
  },

  'should attach the id attribute for the imported element': function() {
    value_of(paper.getById('testId')).should_not_be_null();
    value_of(paper.getById('testId').attr('x')).should_be('50');

  }
  
});

/* --- helpers --- */

// get all elements in the paper
Raphael.fn.elements = function() {
  var b = this.bottom,
      r = []; 
  while (b) { 
    r.push(b); 
    b = b.next; 
  }
  return r;
}

























