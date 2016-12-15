function distinctWords(token){
  var result = [];
  for (var i=1; i<token.length; i++){
    if (result.indexOf(token[i]) === -1){
      result.push(token[i]);
    }
  }
  return result.length;
}


// .match(regex) returns a word once it finds at least one space at the beginning and end??
// or... once we find a space at beginning and end, that's a word??
function tokenizeText(token){
  return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}


// find returns and optional new lines or just returns and replace with nothing??
function removeSpaces(text){
  return text.replace(/\r?\n|\r/g, "");
}



function averageWordLength(token){
  var totalLength = token.join("").length;
  return (totalLength / token.length);
}


// totalSentences: if it matches one of these characters anywhere in text
//return the number of times it find it, if not return 1?
function averageSentenceLength(text){
  var totalSentences = text.match(/[.!?]+/g) ? text.match(/[.!?]+/g).length :1;
  var wordCount = tokenizeText(token).length;
  return (wordCount / totalSentences);
}

function textData(text){
  var uniqueWords = distinctWords(token);
  var totalWords = tokenizeText(token);
  var wordLength = averageWordLength(token);
  var sentenceLength = averageSentenceLength(text);

  $('.js-word-count').text(totalWords);
  $('.js-word-unique').text(uniqueWords);
  $('.js-word-average').text(wordLength + " characters");
  $('.js-word-length').text(sentenceLength + " words");
  $('.js-text-report').removeClass('hidden');

}

function handleSubmit(event){
  $('js-text-submit').submit(function(event){
    event.preventDefault();
    var textEntry = $(this).find('#user-text').val();
    textData(removeSpaces(textEntry));
  });
}

$(function(){
  handleSubmit();
});
