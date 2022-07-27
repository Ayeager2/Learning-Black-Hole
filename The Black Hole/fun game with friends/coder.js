function descramble(content, key) {
        var contentArray = content.split('-').map(x => parseInt(x));
        var currentKeyIndex = 0;
        var charCodes = [];
     
     
     
        for (i = 0; i < contentArray.length; i++) {
            charCodes.push(contentArray[i] / key.charCodeAt(currentKeyIndex));
          console.log(charCodes)
            currentKeyIndex++;
            if (currentKeyIndex == key.length) { currentKeyIndex = 0; }
        }
      var result = charCodes.slice(0);
      //var unmixDict = {};
      var unmixed = [];
      currentKeyIndex = charCodes.length % key.length;
        while (result.length){
          var index = (unmixed + 1) % key.charCodeAt(currentKeyIndex);
          //unmixDict[index] = result.splice(key.charCodeAt(currentKeyIndex) % result.length,1);
          console.log(unmixed, index, result)
            unmixed.splice(index, 0, (result.pop()));
         
            currentKeyIndex--;
          if (currentKeyIndex == -1){currentKeyIndex = key.length - 1;}
        }
        return String.fromCharCode(...unmixed);
    }


    function scramble(content, key) {
        var currentKeyIndex = 0;
        var result = [];
        for (i = 0; i < content.length; i++) {
            result.push(content.charCodeAt(i) * key.charCodeAt(currentKeyIndex));
            currentKeyIndex++;
            if (currentKeyIndex == key.length) { currentKeyIndex = 0; }
        }
        var mixedResult = [];
        currentKeyIndex = 0;
        while (result.length){
            mixedResult.push(result.splice(key.charCodeAt(currentKeyIndex) % result.length,1)); // take result[letterCode % keyCode]
            currentKeyIndex++;
          if (currentKeyIndex == key.length){currentKeyIndex = 0;}
        }
      //if (result.length) {mixedResult.push(result[0]);}
        return mixedResult.join('-');
    }