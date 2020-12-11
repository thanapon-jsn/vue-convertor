function convertOracleTypeToJava(textFields) {
    var fields = spiltFields(textFields);
    var resultJavaFields = [];

     fields.forEach(field => {
         let fieldDetail = getFieldNameAndType(field);

         let fieldName = toCamelCase(fieldDetail[0]);
         let fieldType = fieldDetail[1].replace(/\s/g, "");

         if (/VARCHAR2[(]\d{1,}[)]/gi.test(fieldType)) {
            fieldType = "String";
         } else if (/NUMBER[(]\d{1,}[)]/gi.test(fieldType)) {
            fieldType = "Long";
         } else if (/NUMBER[(]\d{1,},\d{1,}[)]/gi.test(fieldType)) {
            fieldType = "BigDecimal";
         } else if (/NUMBER/gi.test(fieldType)) {
            fieldType = "Long";
         } else if (/DATE|TIMESTAMP/gi.test(fieldType)) {
            fieldType = "Date";
         }
         resultJavaFields.push("private " + fieldType + " " +  fieldName + ";");
     });

    return resultJavaFields;
}

function spiltFields(textFields) {
    return textFields.split(/,\s+\n|,\n/gi);
}

function getFieldNameAndType(fieldData) {
   let fieldsData = fieldData.split(/\s+/);

   if (!fieldsData[0]) {
    fieldsData.splice(0, 1);
   }

   if (!fieldsData[3]) {
    fieldsData.splice(3, 1);
   }
   
    return fieldsData;
}

function toCamelCase(str) {
    if (str === void 0) { str = ''; }
    if (!str)
        return '';
    return String(str)
        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
        .replace(/[^A-Za-z0-9]+/g, '$')
        .replace(/([a-z])([A-Z])/g, function (m, a, b) { return a + "$" + b; })
        .toLowerCase()
        .replace(/(\$)(\w)/g, function (m, a, b) { return b.toUpperCase(); });
}

export { convertOracleTypeToJava }