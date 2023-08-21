const checkObjectBraces = (objAsString) => {
    const stack = [];

    for (let i = 0; i < objAsString.length; i++) {
        if (objAsString[i] === '{'){
            stack.push(objAsString[i]);
        } else if (objAsString[i] === '}') {
            if (!stack.pop()) {
                return false;
            }
        }
    }

    return !stack.length;
};

const objString = '{user: {name: }{"John", age: 21{}}';
checkObjectBraces(objString);
