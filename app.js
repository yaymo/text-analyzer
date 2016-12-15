function distinctWords(tokens){
  var result = [];
  for (var i=0; i<tokens.length; i++){
    if (result.indexOf(tokens[i]) === -1){
      result.push(tokens[i]);
    }
  }
  return result.length;
}


// .match(regex) returns a word once it finds at least one space at the beginning and end??
// or... once we find a space at beginning and end, that's a word??
function tokenizeText(text){
  return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}


// find returns and optional new lines or just returns and replace with nothing??
function removeSpaces(text){
  return text.replace(/\r?\n|\r/g, "");
}



function averageWordLength(tokens){
  var totalLength = tokens.join("").length;
  return (totalLength / tokens.length);
}


// totalSentences: if it matches one of these characters anywhere in text
//return the number of times it find it, if not return 1?
function averageSentenceLength(text){
  var totalSentences = text.match(/[.!?]+/g) ? text.match(/[.!?]+/g).length : 1;
  var wordCount = tokenizeText(text).length;
  return (wordCount / totalSentences);
}

function textData(text){
  var uniqueWords = distinctWords(tokens);
  var tokens = tokenizeText(text);
  var wordLength = averageWordLength(tokens);
  var sentenceLength = averageSentenceLength(text);
  var totalWords = tokens.length;

  var wordReport = $('.js-text-report');
  wordReport.find('.js-word-count').text(totalWords);
  wordReport.find('.js-word-unique').text(uniqueWords);
  wordReport.find('.js-word-average').text(wordLength + " characters");
  wordReport.find('.js-word-length').text(sentenceLength + " words");
  wordReport.removeClass('hidden');

}

function handleSubmit(){
  $('js-text-submit').submit(function(event){
    event.preventDefault();
    var textEntry = $(this).find('#user-text').val();
    textData(removeSpaces(textEntry));
  });
}

$(function(){
  handleSubmit();
});
