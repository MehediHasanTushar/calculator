var resultField = $("#result");

function insertNumber(number) {
    var existingNumber = resultField.val();
    resultField.val(existingNumber + number)
};

function clearResult() {
    resultField.val('');
}

function calculate() {
    var result = eval(resultField.val());
    resultField.val(result);
}

function deleteNumber() {
    var rsNumbers = resultField.val();
    if (rsNumbers != '') {
        resultField.val(rsNumbers.slice(0, -1))
    }
}

function inverseResult() {
    var rsNumbers = resultField.val();
    if (rsNumbers != '') {
        resultField.val(eval(rsNumbers * -1));
    }
}

function percentCalculate() {
    var rsNumbers = resultField.val();
    var result = eval(resultField.val());
    if (rsNumbers != '') {
        resultField.val(eval(result / 100));
    }
}
