# better-validation

named for my mentor of javascript -- huangyi

### What is better-validation?

better-validation is a plugin that collect some useful validation,such as "is this string a legal email address?" you can easily use this and expand your validation through API.

### Getting started

Just easily import it.

```javascript
<script src="path/to/better-validation.js"></script>

<script>
    BValidation.isEmail('2@2.com');//true
    BValidation.isValidDate('2017-02-29');//false
    
    //expand
    BValidation.install('myValidation', function(param){
      return !isNaN(param);
    });
    //use it
    BValidation.myValidation('some thing');//false
</script>
```
### API
```javascript
BValidation.isNumber(param)
```
check if the type of param is number.
```javascript
BValidation.isEmail(param)
```
check if the param is legal email account.
```javascript
BValidation.isValidAccount(param)
```
check if the param is legal user account.

the rule is :

length between 4 and 16 included.

letter,number,_,- is required.
```javascript
BValidation.isUrl(param)
```
check if the param is legal http,https,ftp or file url.
```javascript
BValidation.isChnPostcode(param)
```
check if the param is legal chinese postcode.
```javascript
BValidation.isTel(param)
```
check if the param is legal chinese telphone number.

these are allowed:

(021)-12345678

021-12345678

1234567

12345678
```javascript
BValidation.isMobile(param)
```
check if the param is legal mobile phone number.
```javascript
BValidation.isIDCardNo15(param)
```
check if the param is legal chinese ID card number,which length is 15.
```javascript
BValidation.isIDCardNo18(param)
```
check if the param is legal chinese ID card number,which length is 15.
```javascript
BValidation.isValidPassword(param)
```
check if the param is legal user password.

the rule is :

length between 6 and 18 included.

letter,number,_ is required
```javascript
BValidation.isChineseOnly(param)
```
check if the param contains chinese character only.
```javascript
BValidation.isChineseContains(param)
```
check if the param contains chinese character.
```javascript
BValidation.isHexColor(param)
```
check if the param is hex color.
```javascript
BValidation.isQQ(param)
```
check if the param is legal QQ number.
```javascript
BValidation.isWX(param)
```
check if the param is legal WeiXin number.
```javascript
BValidation.isCarNo(param)
```
check if the param is legal card number in China.
```javascript
BValidation.isValidDate(param)
```
check if the param is legal date.

Such as '2017-02-01' is correct.

'2017-02-29' is incorrect.
```javascript
BValidation.isIPv4(param)
```
check if the param is legal IPv4 address.
```javascript
BValidation.install('name',function)
```
you can expand the validation through this function.
```javascript
BValidation.install('myValidation', function(param){
  return !isNaN(param);
});
BValidation.myValidation('lol')//false
```